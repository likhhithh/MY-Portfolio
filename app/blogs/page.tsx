"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { posts } from "@/lib/data";

// Card accent gradients
const postGradients = [
  "from-violet-100 to-indigo-100",
  "from-amber-100 to-orange-100",
  "from-emerald-100 to-teal-100",
  "from-sky-100 to-blue-100",
];

function FadeUp({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function formatDate(dateStr: string) {
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
}

export default function BlogsPage() {
  return (
    <>
      <Navbar />
      <main className="bg-bg">
        {/* ── Hero ────────────────────────────────────────────────────── */}
        <section className="pt-32 pb-12">
          <div className="container-main">
            <motion.p
              className="eyebrow mb-4"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              writing
            </motion.p>
            <motion.h1
              className="section-heading text-fg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
            >
              blog
            </motion.h1>
            <motion.p
              className="text-fg-muted text-base max-w-xl mt-4 leading-relaxed"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.16 }}
            >
              Thoughts on ML systems, production engineering, and the intersection of AI and
              real-world products.
            </motion.p>
          </div>
        </section>

        {/* ── Posts Grid ──────────────────────────────────────────────── */}
        <section className="section-pad">
          <div className="container-main">
            <div className="grid md:grid-cols-2 gap-6">
              {posts.map((post, i) => {
                const gradient = postGradients[i % postGradients.length];
                return (
                  <FadeUp key={post.slug} delay={i * 0.07}>
                    <Link
                      href={`/blogs/${post.slug}`}
                      className="card-base overflow-hidden flex flex-col group block no-underline"
                      style={{ textDecoration: "none" }}
                    >
                      {/* Accent image area */}
                      <div
                        className={`h-36 bg-gradient-to-br ${gradient} flex items-end px-6 pb-4`}
                      >
                        <div className="flex flex-wrap gap-1.5">
                          {post.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-[10px] font-medium px-2.5 py-0.5 rounded-full bg-white/60 text-fg-muted backdrop-blur-sm"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6 flex flex-col flex-1">
                        <div className="flex items-center gap-3 text-xs text-fg-muted mb-3">
                          <span>{formatDate(post.date)}</span>
                          <span>·</span>
                          <span>{post.readTime} read</span>
                        </div>
                        <h2 className="font-display font-medium text-lg text-fg leading-snug mb-2 group-hover:underline">
                          {post.title}
                        </h2>
                        <p className="text-fg-muted text-sm leading-relaxed flex-1">
                          {post.excerpt}
                        </p>
                        <div className="mt-5 pt-4 border-t border-border">
                          <span className="text-xs font-medium text-fg">read article →</span>
                        </div>
                      </div>
                    </Link>
                  </FadeUp>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
