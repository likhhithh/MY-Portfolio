import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Button from "@/components/ui/Button";
import { posts } from "@/lib/data";

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  return { title: post?.title ?? "Post" };
}

function formatDate(dateStr: string) {
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <>
      <Navbar />
      <main className="bg-bg">
        {/* ── Hero ────────────────────────────────────────────────────── */}
        <section className="pt-32 pb-12">
          <div className="container-main">
            {/* Breadcrumb */}
            <p className="text-xs text-fg-muted mb-6">
              <Link
                href="/blogs"
                className="hover:text-fg transition-colors"
                style={{ textDecoration: "none" }}
              >
                writing
              </Link>
              {" → "}
              <span>{post.title}</span>
            </p>

            {/* Tags + meta */}
            <div className="flex flex-wrap items-center gap-2 mb-6">
              {post.tags.map((tag) => (
                <span key={tag} className="tag-chip">
                  {tag}
                </span>
              ))}
              <span className="text-xs text-fg-muted ml-1">
                {formatDate(post.date)} · {post.readTime} read
              </span>
            </div>

            <h1 className="section-heading text-fg max-w-2xl">{post.title}</h1>
            <p className="text-fg-muted text-lg max-w-xl mt-4 leading-relaxed">
              {post.excerpt}
            </p>
          </div>
        </section>

        {/* ── Content ─────────────────────────────────────────────────── */}
        <section className="section-pad">
          <div className="container-main max-w-2xl mx-auto">
            <div className="card-base bg-card p-8 md:p-12">
              {/* Placeholder content */}
              <div className="flex flex-col items-center justify-center py-16 text-center gap-4">
                <div className="w-12 h-12 rounded-full bg-bg-alt flex items-center justify-center mb-2">
                  <span className="text-xl">✍️</span>
                </div>
                <p className="eyebrow">full post coming soon</p>
                <p className="text-fg-muted text-sm max-w-xs leading-relaxed">
                  This article is being written. Check back soon — or subscribe via{" "}
                  <a
                    href={`mailto:malothulikhith@email.com?subject=Notify me about: ${post.title}`}
                    className="text-fg underline underline-offset-2"
                  >
                    email
                  </a>{" "}
                  to be notified when it drops.
                </p>
              </div>

              <div className="h-divider mt-2 mb-8" />

              {/* Back to blog */}
              <Button variant="outline" href="/blogs">
                ← back to writing
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
