import { NextRequest, NextResponse } from "next/server";
import { isAuthenticated } from "@/lib/auth";
import { readJSON, writeJSON } from "@/lib/data";

interface Service {
  id: number;
  image: string;
  title: string;
  description: string;
  href: string;
}

export async function GET() {
  const data = await readJSON<Service[]>("services.json");
  return NextResponse.json(data);
}

export async function PUT(req: NextRequest) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const items: Service[] = await req.json();
  await writeJSON("services.json", items);
  return NextResponse.json({ ok: true });
}
