import { NextRequest, NextResponse } from "next/server";
import { isAuthenticated } from "@/lib/auth";
import { readJSON, writeJSON } from "@/lib/data";

interface Logo {
  id: number;
  src: string;
  alt: string;
  w: number;
}

export async function GET() {
  const data = await readJSON<Logo[]>("logos.json");
  return NextResponse.json(data);
}

export async function PUT(req: NextRequest) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const items: Logo[] = await req.json();
  await writeJSON("logos.json", items);
  return NextResponse.json({ ok: true });
}
