import { NextRequest, NextResponse } from "next/server";
import { isAuthenticated } from "@/lib/auth";
import { readJSON, writeJSON } from "@/lib/data";

export interface SiteSettings {
  backToTop: boolean;
  recaptchaSiteKey: string;
  recaptchaSecretKey: string;
  recaptchaEnabled: boolean;
  claudeApiKey: string;
  claudeEnabled: boolean;
  facebookPixelId: string;
  googleTagId: string;
  googleAnalyticsId: string;
  customHeadCode: string;
  blogEnabled: boolean;
}

// Only expose public-safe fields to unauthenticated requests.
// Sensitive fields (API keys, secrets, customHeadCode) require auth.
const PUBLIC_FIELDS: (keyof SiteSettings)[] = [
  "backToTop",
  "recaptchaSiteKey",
  "recaptchaEnabled",
  "facebookPixelId",
  "googleTagId",
  "googleAnalyticsId",
  "blogEnabled",
];

export async function GET() {
  const data = await readJSON<SiteSettings>("settings.json");
  const authed = await isAuthenticated();

  if (authed) {
    // Authenticated admins see everything (except customHeadCode which is removed)
    const { customHeadCode: _, ...safeData } = data;
    return NextResponse.json(safeData);
  }

  // Public: only expose non-sensitive fields
  const publicData: Partial<SiteSettings> = {};
  for (const key of PUBLIC_FIELDS) {
    (publicData as Record<string, unknown>)[key] = data[key];
  }
  return NextResponse.json(publicData);
}

export async function PUT(req: NextRequest) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const body: SiteSettings = await req.json();
  // Strip customHeadCode to prevent arbitrary script injection
  body.customHeadCode = "";
  await writeJSON("settings.json", body);
  return NextResponse.json({ ok: true });
}
