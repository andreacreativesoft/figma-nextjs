import { cookies } from "next/headers";

const ADMIN_USER = "admin";
const ADMIN_PASS = "admin822";
const SESSION_COOKIE = "admin_session";
const SESSION_TOKEN = "az-pro-admin-authenticated";

export async function isAuthenticated(): Promise<boolean> {
  const cookieStore = await cookies();
  return cookieStore.get(SESSION_COOKIE)?.value === SESSION_TOKEN;
}

export function validateCredentials(
  username: string,
  password: string,
): boolean {
  return username === ADMIN_USER && password === ADMIN_PASS;
}

export { SESSION_COOKIE, SESSION_TOKEN };
