import { NextRequest, NextResponse } from "next/server";
import { isAuthenticated } from "@/lib/auth";
import { readJSON, writeJSON } from "@/lib/data";

export interface BlogCategory {
  id: number;
  name: string;
  slug: string;
}

export async function GET() {
  const data = await readJSON<BlogCategory[]>("blog-categories.json");
  return NextResponse.json(data);
}

export async function PUT(req: NextRequest) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const items: BlogCategory[] = await req.json();
  await writeJSON("blog-categories.json", items);
  return NextResponse.json({ ok: true });
}
