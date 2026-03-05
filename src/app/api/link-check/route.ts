import { NextRequest, NextResponse } from "next/server";
import { isAuthenticated } from "@/lib/auth";

interface LinkResult {
  url: string;
  status: "ok" | "broken" | "redirect" | "error";
  statusCode?: number;
  redirectTo?: string;
  source: string;
}

// Internal pages to check
const INTERNAL_PAGES = [
  { url: "/", source: "Navigation" },
  { url: "/about", source: "Navigation" },
  { url: "/services", source: "Navigation" },
  { url: "/contact", source: "Navigation" },
  { url: "/admin", source: "Admin" },
];

export async function POST(req: NextRequest) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { baseUrl } = await req.json();
  const results: LinkResult[] = [];

  for (const page of INTERNAL_PAGES) {
    try {
      const fullUrl = `${baseUrl}${page.url}`;
      const res = await fetch(fullUrl, {
        method: "HEAD",
        redirect: "manual",
      });

      if (res.status >= 200 && res.status < 300) {
        results.push({
          url: page.url,
          status: "ok",
          statusCode: res.status,
          source: page.source,
        });
      } else if (res.status >= 300 && res.status < 400) {
        results.push({
          url: page.url,
          status: "redirect",
          statusCode: res.status,
          redirectTo: res.headers.get("location") || undefined,
          source: page.source,
        });
      } else {
        results.push({
          url: page.url,
          status: "broken",
          statusCode: res.status,
          source: page.source,
        });
      }
    } catch {
      results.push({
        url: page.url,
        status: "error",
        source: page.source,
      });
    }
  }

  return NextResponse.json(results);
}
