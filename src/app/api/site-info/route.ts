import { NextRequest, NextResponse } from "next/server";
import { isAuthenticated } from "@/lib/auth";
import { readJSON, writeJSON } from "@/lib/data";

interface SiteInfo {
  phone: string;
  email: string;
  address: string;
}

export async function GET() {
  const data = await readJSON<SiteInfo>("site-info.json");
  return NextResponse.json(data);
}

export async function PUT(req: NextRequest) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const info: SiteInfo = await req.json();
  await writeJSON("site-info.json", info);
  return NextResponse.json({ ok: true });
}
