import { NextRequest, NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";
import { isAuthenticated, getUserRole } from "@/lib/auth";
import { readJSON, writeJSON } from "@/lib/data";

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

const SYSTEM_PROMPT = `You are the AI assistant for AZ Pro Services website admin panel. You help the superadmin manage their website content.

You have access to tools that let you read and modify the website's data:
- FAQ entries (questions and answers)
- Services (title, description, image, link)
- Client logos
- Site info (phone, email, address)
- Settings (back to top, reCAPTCHA, etc.)

When the user asks you to make changes, use the appropriate tools. Always confirm what you changed.
Keep responses concise and in the same language the user writes in (French or English).
When listing data, format it nicely. When making changes, explain what you did.

IMPORTANT: After making changes via tools, the website on Vercel will reflect changes on next visit (data is stored server-side). No git push needed for data changes — they take effect immediately.`;

const tools: Anthropic.Tool[] = [
  {
    name: "read_faq",
    description: "Read all FAQ entries from the website",
    input_schema: { type: "object" as const, properties: {}, required: [] },
  },
  {
    name: "write_faq",
    description: "Update all FAQ entries. Provide the complete array of FAQs.",
    input_schema: {
      type: "object" as const,
      properties: {
        items: {
          type: "array",
          items: {
            type: "object",
            properties: {
              id: { type: "number" },
              question: { type: "string" },
              answer: { type: "array", items: { type: "string" } },
            },
            required: ["id", "question", "answer"],
          },
        },
      },
      required: ["items"],
    },
  },
  {
    name: "read_services",
    description: "Read all services from the website",
    input_schema: { type: "object" as const, properties: {}, required: [] },
  },
  {
    name: "write_services",
    description: "Update all services. Provide the complete array.",
    input_schema: {
      type: "object" as const,
      properties: {
        items: {
          type: "array",
          items: {
            type: "object",
            properties: {
              id: { type: "number" },
              image: { type: "string" },
              title: { type: "string" },
              description: { type: "string" },
              href: { type: "string" },
            },
            required: ["id", "title", "description"],
          },
        },
      },
      required: ["items"],
    },
  },
  {
    name: "read_site_info",
    description: "Read site contact information (phone, email, address)",
    input_schema: { type: "object" as const, properties: {}, required: [] },
  },
  {
    name: "write_site_info",
    description: "Update site contact information",
    input_schema: {
      type: "object" as const,
      properties: {
        phone: { type: "string" },
        email: { type: "string" },
        address: { type: "string" },
      },
      required: ["phone", "email", "address"],
    },
  },
  {
    name: "read_logos",
    description: "Read all client logos",
    input_schema: { type: "object" as const, properties: {}, required: [] },
  },
  {
    name: "read_messages",
    description: "Read contact form messages",
    input_schema: { type: "object" as const, properties: {}, required: [] },
  },
  {
    name: "read_settings",
    description: "Read website settings",
    input_schema: { type: "object" as const, properties: {}, required: [] },
  },
  {
    name: "write_settings",
    description: "Update website settings (backToTop, recaptcha, etc.)",
    input_schema: {
      type: "object" as const,
      properties: {
        backToTop: { type: "boolean" },
        recaptchaEnabled: { type: "boolean" },
        recaptchaSiteKey: { type: "string" },
        recaptchaSecretKey: { type: "string" },
      },
      required: [],
    },
  },
];

async function executeTool(
  name: string,
  input: Record<string, unknown>
): Promise<string> {
  switch (name) {
    case "read_faq": {
      const data = await readJSON("faq.json");
      return JSON.stringify(data, null, 2);
    }
    case "write_faq": {
      await writeJSON("faq.json", input.items);
      return "FAQ updated successfully.";
    }
    case "read_services": {
      const data = await readJSON("services.json");
      return JSON.stringify(data, null, 2);
    }
    case "write_services": {
      await writeJSON("services.json", input.items);
      return "Services updated successfully.";
    }
    case "read_site_info": {
      const data = await readJSON("site-info.json");
      return JSON.stringify(data, null, 2);
    }
    case "write_site_info": {
      await writeJSON("site-info.json", input);
      return "Site info updated successfully.";
    }
    case "read_logos": {
      const data = await readJSON("logos.json");
      return JSON.stringify(data, null, 2);
    }
    case "read_messages": {
      const data = await readJSON("messages.json");
      return JSON.stringify(data, null, 2);
    }
    case "read_settings": {
      const data = await readJSON("settings.json");
      // Don't expose API keys
      const safe = { ...(data as Record<string, unknown>) };
      delete safe.claudeApiKey;
      return JSON.stringify(safe, null, 2);
    }
    case "write_settings": {
      const current = await readJSON<Record<string, unknown>>("settings.json");
      const updated = { ...current, ...input };
      // Preserve keys not in input
      updated.claudeApiKey = current.claudeApiKey;
      updated.claudeEnabled = current.claudeEnabled;
      await writeJSON("settings.json", updated);
      return "Settings updated successfully.";
    }
    default:
      return `Unknown tool: ${name}`;
  }
}

export async function POST(req: NextRequest) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const userRole = await getUserRole();
  if (userRole !== "superadmin") {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const settings = await readJSON<Record<string, unknown>>("settings.json");
  if (!settings.claudeEnabled || !settings.claudeApiKey) {
    return NextResponse.json(
      { error: "Claude AI is not enabled. Configure your API key in Tools & Settings." },
      { status: 400 }
    );
  }

  const { messages } = (await req.json()) as { messages: ChatMessage[] };

  const client = new Anthropic({ apiKey: settings.claudeApiKey as string });

  // Convert to Anthropic format
  const anthropicMessages: Anthropic.MessageParam[] = messages.map((m) => ({
    role: m.role,
    content: m.content,
  }));

  try {
    // Run conversation loop with tool use
    let response = await client.messages.create({
      model: "claude-sonnet-4-20250514",
      max_tokens: 4096,
      system: SYSTEM_PROMPT,
      tools,
      messages: anthropicMessages,
    });

    // Handle tool use loop
    while (response.stop_reason === "tool_use") {
      const toolResults: Anthropic.ToolResultBlockParam[] = [];
      for (const block of response.content) {
        if (block.type === "tool_use") {
          const result = await executeTool(block.name, block.input as Record<string, unknown>);
          toolResults.push({
            type: "tool_result",
            tool_use_id: block.id,
            content: result,
          });
        }
      }

      anthropicMessages.push({ role: "assistant", content: response.content });
      anthropicMessages.push({ role: "user", content: toolResults });

      response = await client.messages.create({
        model: "claude-sonnet-4-20250514",
        max_tokens: 4096,
        system: SYSTEM_PROMPT,
        tools,
        messages: anthropicMessages,
      });
    }

    // Extract final text
    const textBlocks = response.content.filter(
      (b): b is Anthropic.TextBlock => b.type === "text"
    );
    const text = textBlocks.map((b) => b.text).join("\n");

    return NextResponse.json({ reply: text });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json({ error: `Claude API error: ${message}` }, { status: 500 });
  }
}
