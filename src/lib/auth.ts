import { cookies } from "next/headers";
import { readJSON } from "./data";

interface User {
  id: number;
  username: string;
  password: string;
  role: "admin" | "superadmin";
  label: string;
}

const SESSION_COOKIE = "admin_session";
const ROLE_COOKIE = "admin_role";

export async function isAuthenticated(): Promise<boolean> {
  const cookieStore = await cookies();
  const session = cookieStore.get(SESSION_COOKIE)?.value;
  return !!session && session.startsWith("az-pro-");
}

export async function getUserRole(): Promise<"admin" | "superadmin" | null> {
  const cookieStore = await cookies();
  const role = cookieStore.get(ROLE_COOKIE)?.value;
  if (role === "admin" || role === "superadmin") return role;
  return null;
}

export async function validateCredentials(
  username: string,
  password: string,
): Promise<User | null> {
  const users = await readJSON<User[]>("users.json");
  const user = users.find(
    (u) => u.username === username && u.password === password,
  );
  return user || null;
}

export { SESSION_COOKIE, ROLE_COOKIE };
