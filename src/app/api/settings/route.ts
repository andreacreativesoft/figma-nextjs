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

export async function GET() {
  const data = await readJSON<SiteSettings>("settings.json");
  return NextResponse.json(data);
}

export async function PUT(req: NextRequest) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const body: SiteSettings = await req.json();
  await writeJSON("settings.json", body);
  return NextResponse.json({ ok: true });
}
