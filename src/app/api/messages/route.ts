import { NextRequest, NextResponse } from "next/server";
import { isAuthenticated } from "@/lib/auth";
import { readJSON, writeJSON } from "@/lib/data";

export interface ContactMessage {
  id: number;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  status: "new" | "read" | "replied";
  createdAt: string;
  reply?: string;
  repliedAt?: string;
}

export async function GET() {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const data = await readJSON<ContactMessage[]>("messages.json");
  return NextResponse.json(data);
}

// Public endpoint - contact form submissions
export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, email, phone, subject, message } = body;

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email and message are required" },
      { status: 400 }
    );
  }

  const messages = await readJSON<ContactMessage[]>("messages.json");
  const maxId = messages.reduce((max, m) => Math.max(max, m.id), 0);

  const newMessage: ContactMessage = {
    id: maxId + 1,
    name: String(name).slice(0, 200),
    email: String(email).slice(0, 200),
    phone: String(phone || "").slice(0, 50),
    subject: String(subject || "").slice(0, 200),
    message: String(message).slice(0, 5000),
    status: "new",
    createdAt: new Date().toISOString(),
  };

  messages.unshift(newMessage);
  await writeJSON("messages.json", messages);

  return NextResponse.json({ ok: true });
}

// Admin: update message status or reply
export async function PUT(req: NextRequest) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await req.json();
  const { id, status, reply } = body;

  const messages = await readJSON<ContactMessage[]>("messages.json");
  const idx = messages.findIndex((m) => m.id === id);

  if (idx === -1) {
    return NextResponse.json({ error: "Message not found" }, { status: 404 });
  }

  if (status) messages[idx].status = status;
  if (reply !== undefined) {
    messages[idx].reply = reply;
    messages[idx].repliedAt = new Date().toISOString();
    messages[idx].status = "replied";
  }

  await writeJSON("messages.json", messages);
  return NextResponse.json({ ok: true });
}

// Admin: delete a message
export async function DELETE(req: NextRequest) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await req.json();
  const messages = await readJSON<ContactMessage[]>("messages.json");
  const filtered = messages.filter((m) => m.id !== id);
  await writeJSON("messages.json", filtered);

  return NextResponse.json({ ok: true });
}
