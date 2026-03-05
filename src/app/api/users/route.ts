import { NextRequest, NextResponse } from "next/server";
import { isAuthenticated, getUserRole } from "@/lib/auth";
import { readJSON, writeJSON } from "@/lib/data";

export interface User {
  id: number;
  username: string;
  password: string;
  role: "admin" | "superadmin";
  label: string;
}

export async function GET() {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const role = await getUserRole();
  if (role !== "superadmin") {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }
  const users = await readJSON<User[]>("users.json");
  return NextResponse.json(users);
}

export async function PUT(req: NextRequest) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const role = await getUserRole();
  if (role !== "superadmin") {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }
  const users: User[] = await req.json();
  await writeJSON("users.json", users);
  return NextResponse.json({ ok: true });
}
