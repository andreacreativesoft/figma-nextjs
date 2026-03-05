import { NextRequest, NextResponse } from "next/server";
import {
  validateCredentials,
  isAuthenticated,
  getUserRole,
  SESSION_COOKIE,
  ROLE_COOKIE,
} from "@/lib/auth";

export async function POST(req: NextRequest) {
  const { username, password } = await req.json();
  const user = await validateCredentials(username, password);

  if (!user) {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }

  const res = NextResponse.json({ ok: true, role: user.role });
  const cookieOpts = {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax" as const,
    path: "/",
    maxAge: 60 * 60 * 24,
  };
  res.cookies.set(SESSION_COOKIE, `az-pro-${user.id}`, cookieOpts);
  res.cookies.set(ROLE_COOKIE, user.role, cookieOpts);
  return res;
}

export async function GET() {
  const authed = await isAuthenticated();
  const role = await getUserRole();
  return NextResponse.json({ authenticated: authed, role });
}

export async function DELETE() {
  const res = NextResponse.json({ ok: true });
  res.cookies.delete(SESSION_COOKIE);
  res.cookies.delete(ROLE_COOKIE);
  return res;
}
