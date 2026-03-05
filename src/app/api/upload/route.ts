import { NextRequest, NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import path from "path";
import { isAuthenticated } from "@/lib/auth";

export async function POST(req: NextRequest) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const formData = await req.formData();
  const file = formData.get("file") as File | null;

  if (!file) {
    return NextResponse.json({ error: "No file provided" }, { status: 400 });
  }

  // Validate file type
  const allowedTypes = [
    "image/svg+xml",
    "image/png",
    "image/jpeg",
    "image/webp",
    "image/gif",
  ];
  if (!allowedTypes.includes(file.type)) {
    return NextResponse.json(
      { error: "Invalid file type. Allowed: SVG, PNG, JPG, WebP, GIF" },
      { status: 400 },
    );
  }

  // Validate file size (max 2MB)
  if (file.size > 2 * 1024 * 1024) {
    return NextResponse.json(
      { error: "File too large. Maximum 2MB." },
      { status: 400 },
    );
  }

  // Sanitize filename
  const originalName = file.name.replace(/[^a-zA-Z0-9._-]/g, "-").toLowerCase();
  const timestamp = Date.now();
  const filename = `${timestamp}-${originalName}`;

  const buffer = Buffer.from(await file.arrayBuffer());
  const filePath = path.join(process.cwd(), "public", "images", filename);

  await writeFile(filePath, buffer);

  return NextResponse.json({
    url: `/images/${filename}`,
    filename,
  });
}
