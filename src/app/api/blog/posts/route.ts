import { NextRequest, NextResponse } from "next/server";
import { isAuthenticated } from "@/lib/auth";
import { readJSON, writeJSON } from "@/lib/data";

export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image: string;
  categoryId: number | null;
  status: "draft" | "published";
  createdAt: string;
  updatedAt: string;
}

const FILE = "blog-posts.json";

export async function GET() {
  const data = await readJSON<BlogPost[]>(FILE);
  return NextResponse.json(data);
}

export async function POST(req: NextRequest) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await req.json();
  const posts = await readJSON<BlogPost[]>(FILE);
  const maxId = posts.reduce((max, p) => Math.max(max, p.id), 0);

  const now = new Date().toISOString();
  const newPost: BlogPost = {
    id: maxId + 1,
    title: String(body.title || "").slice(0, 300),
    slug: String(body.slug || "").slice(0, 300),
    excerpt: String(body.excerpt || "").slice(0, 500),
    content: String(body.content || ""),
    image: String(body.image || ""),
    categoryId: body.categoryId ?? null,
    status: body.status === "published" ? "published" : "draft",
    createdAt: now,
    updatedAt: now,
  };

  posts.unshift(newPost);
  await writeJSON(FILE, posts);
  return NextResponse.json(newPost);
}

export async function PUT(req: NextRequest) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await req.json();
  const posts = await readJSON<BlogPost[]>(FILE);
  const idx = posts.findIndex((p) => p.id === body.id);

  if (idx === -1) {
    return NextResponse.json({ error: "Post not found" }, { status: 404 });
  }

  posts[idx] = {
    ...posts[idx],
    title: String(body.title ?? posts[idx].title).slice(0, 300),
    slug: String(body.slug ?? posts[idx].slug).slice(0, 300),
    excerpt: String(body.excerpt ?? posts[idx].excerpt).slice(0, 500),
    content: String(body.content ?? posts[idx].content),
    image: String(body.image ?? posts[idx].image),
    categoryId: body.categoryId !== undefined ? body.categoryId : posts[idx].categoryId,
    status: body.status === "published" ? "published" : body.status === "draft" ? "draft" : posts[idx].status,
    updatedAt: new Date().toISOString(),
  };

  await writeJSON(FILE, posts);
  return NextResponse.json(posts[idx]);
}

export async function DELETE(req: NextRequest) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await req.json();
  const posts = await readJSON<BlogPost[]>(FILE);
  const filtered = posts.filter((p) => p.id !== id);
  await writeJSON(FILE, filtered);
  return NextResponse.json({ ok: true });
}
