import type { Metadata } from "next";
import Link from "next/link";
import NavbarSection from "@/components/NavbarSection";
import FooterSection from "@/components/FooterSection";
import { readJSON } from "@/lib/data";

export const metadata: Metadata = {
  title: "Blog - AZ Pro Services | Conseils Chauffage, Plomberie & Débouchage",
  description:
    "Découvrez nos articles et conseils sur le chauffage, la plomberie et le débouchage. Astuces d'entretien, guides pratiques et actualités du métier.",
  alternates: {
    canonical: "/blog",
  },
};

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

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const params = await searchParams;
  const allPosts = await readJSON<BlogPost[]>("blog-posts.json");
  const categories = await readJSON<BlogCategory[]>("blog-categories.json");
  const published = allPosts.filter((p) => p.status === "published");

  const activeCategory = params.category || null;
  const activeCat = activeCategory
    ? categories.find((c) => c.slug === activeCategory)
    : null;

  const posts = activeCat
    ? published.filter((p) => p.categoryId === activeCat.id)
    : published;

  return (
    <>
      <NavbarSection />
      <main className="min-h-screen bg-white">
        {/* Hero */}
        <section className="bg-gradient-to-br from-[#0f172a] to-[#1e3a5f] py-20">
          <div className="mx-auto max-w-6xl px-6 text-center">
            <h1 className="text-4xl font-bold text-white md:text-5xl">
              Notre Blog
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-white/70">
              Conseils, astuces et actualités sur le chauffage, la plomberie et le débouchage
            </p>
          </div>
        </section>

        {/* Categories */}
        {categories.length > 0 && (
          <section className="border-b border-gray-100">
            <div className="mx-auto flex max-w-6xl gap-2 overflow-x-auto px-6 py-4">
              <Link
                href="/blog"
                className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium transition ${
                  !activeCategory
                    ? "bg-[#155dfc] text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                Tous
              </Link>
              {categories.map((cat) => (
                <Link
                  key={cat.id}
                  href={`/blog?category=${cat.slug}`}
                  className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium transition ${
                    activeCategory === cat.slug
                      ? "bg-[#155dfc] text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {cat.name}
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Posts Grid */}
        <section className="mx-auto max-w-6xl px-6 py-16">
          {posts.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <svg className="mb-4 h-12 w-12 text-gray-300" viewBox="0 0 20 20" fill="none">
                <path d="M4 4h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6 8h8M6 11h8M6 14h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              <p className="text-lg font-medium text-gray-400">Aucun article pour le moment</p>
              <p className="mt-1 text-sm text-gray-300">Revenez bientôt pour découvrir nos articles</p>
            </div>
          ) : (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => {
                const category = categories.find((c) => c.id === post.categoryId);
                return (
                  <Link
                    key={post.id}
                    href={`/blog/${post.slug}`}
                    className="group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition hover:shadow-lg"
                  >
                    <div className="aspect-[16/10] overflow-hidden bg-gray-100">
                      {post.image ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={post.image}
                          alt={post.title}
                          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center text-gray-300">
                          <svg className="h-10 w-10" viewBox="0 0 20 20" fill="none">
                            <path d="M4 4h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2z" stroke="currentColor" strokeWidth="1.5"/>
                          </svg>
                        </div>
                      )}
                    </div>
                    <div className="flex flex-1 flex-col p-5">
                      <div className="flex items-center gap-2">
                        {category && (
                          <span className="rounded-full bg-[#155dfc]/10 px-2.5 py-0.5 text-[11px] font-semibold text-[#155dfc]">
                            {category.name}
                          </span>
                        )}
                        <span className="text-xs text-gray-400">
                          {new Date(post.createdAt).toLocaleDateString("fr-BE", {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                          })}
                        </span>
                      </div>
                      <h2 className="mt-3 text-lg font-bold text-gray-900 group-hover:text-[#155dfc] transition-colors line-clamp-2">
                        {post.title}
                      </h2>
                      {post.excerpt && (
                        <p className="mt-2 text-sm text-gray-500 line-clamp-3">{post.excerpt}</p>
                      )}
                      <div className="mt-auto pt-4">
                        <span className="text-sm font-semibold text-[#155dfc]">
                          Lire la suite →
                        </span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </section>
      </main>
      <FooterSection />
    </>
  );
}
