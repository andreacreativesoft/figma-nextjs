import { NextRequest, NextResponse } from "next/server";
import { isAuthenticated } from "@/lib/auth";
import { readJSON, writeJSON } from "@/lib/data";

interface FAQ {
  id: number;
  question: string;
  answer: string[];
}

export async function GET() {
  const data = await readJSON<FAQ[]>("faq.json");
  return NextResponse.json(data);
}

export async function PUT(req: NextRequest) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const items: FAQ[] = await req.json();
  await writeJSON("faq.json", items);
  return NextResponse.json({ ok: true });
}
