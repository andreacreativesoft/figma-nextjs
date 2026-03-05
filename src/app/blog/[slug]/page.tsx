import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import NavbarSection from "@/components/NavbarSection";
import FooterSection from "@/components/FooterSection";
import { readJSON } from "@/lib/data";

interface BlogPost {
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

interface BlogCategory {
  id: number;
  name: string;
  slug: string;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const posts = await readJSON<BlogPost[]>("blog-posts.json");
  const post = posts.find((p) => p.slug === slug && p.status === "published");

  if (!post) return { title: "Article non trouvé" };

  return {
    title: `${post.title} - AZ Pro Services Blog`,
    description: post.excerpt || post.title,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt || post.title,
      type: "article",
      ...(post.image ? { images: [{ url: post.image }] } : {}),
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const posts = await readJSON<BlogPost[]>("blog-posts.json");
  const categories = await readJSON<BlogCategory[]>("blog-categories.json");
  const post = posts.find((p) => p.slug === slug && p.status === "published");

  if (!post) notFound();

  const category = categories.find((c) => c.id === post.categoryId);

  // Get related posts (same category, excluding current)
  const related = posts
    .filter((p) => p.id !== post.id && p.status === "published" && p.categoryId === post.categoryId)
    .slice(0, 3);

  return (
    <>
      <NavbarSection />
      <main className="min-h-screen bg-white">
        {/* Hero */}
        <section className="bg-gradient-to-br from-[#0f172a] to-[#1e3a5f] py-20">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <div className="mb-4 flex items-center justify-center gap-3">
              {category && (
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/80">
                  {category.name}
                </span>
              )}
              <span className="text-xs text-white/50">
                {new Date(post.createdAt).toLocaleDateString("fr-BE", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </span>
            </div>
            <h1 className="text-3xl font-bold text-white md:text-5xl leading-tight">
              {post.title}
            </h1>
            {post.excerpt && (
              <p className="mx-auto mt-4 max-w-2xl text-lg text-white/60">
                {post.excerpt}
              </p>
            )}
          </div>
        </section>

        {/* Featured Image */}
        {post.image && (
          <div className="mx-auto -mt-8 max-w-4xl px-6">
            <div className="overflow-hidden rounded-2xl shadow-xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={post.image}
                alt={post.title}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        )}

        {/* Content */}
        <article className="mx-auto max-w-3xl px-6 py-16">
          <div
            className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-gray-600 prose-a:text-[#155dfc] prose-img:rounded-xl"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>

        {/* Back + Related */}
        <section className="border-t border-gray-100">
          <div className="mx-auto max-w-4xl px-6 py-12">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#155dfc] transition hover:text-[#1447e6]"
            >
              <svg className="h-4 w-4" viewBox="0 0 20 20" fill="none">
                <path d="M12 4l-6 6 6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Retour au blog
            </Link>

            {related.length > 0 && (
              <div className="mt-12">
                <h3 className="text-lg font-bold text-gray-900">Articles similaires</h3>
                <div className="mt-6 grid gap-6 sm:grid-cols-3">
                  {related.map((r) => (
                    <Link
                      key={r.id}
                      href={`/blog/${r.slug}`}
                      className="group rounded-2xl border border-gray-100 p-4 transition hover:shadow-md"
                    >
                      {r.image && (
                        <div className="mb-3 aspect-[16/10] overflow-hidden rounded-xl">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={r.image}
                            alt={r.title}
                            className="h-full w-full object-cover transition-transform group-hover:scale-105"
                          />
                        </div>
                      )}
                      <h4 className="text-sm font-semibold text-gray-900 group-hover:text-[#155dfc] transition-colors line-clamp-2">
                        {r.title}
                      </h4>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
      <FooterSection />
    </>
  );
}
