"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { posts } from "@/lib/data";
import Button from "@/components/ui/Button";

const gradients = [
  "from-violet-50 to-indigo-100",
  "from-amber-50 to-orange-100",
  "from-emerald-50 to-teal-100",
  "from-sky-50 to-blue-100",
];

function formatDate(d: string) {
  return new Date(d).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

export default function BlogSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const preview = posts.slice(0, 2);

  return (
    <section className="bg-bg-alt border-t border-border section-pad">
      <div ref={ref} className="container-main">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-end justify-between mb-12"
        >
          <div>
            <p className="eyebrow mb-4">Writing</p>
            <h2 className="section-heading text-fg">ARTICLES &amp;<br />INSIGHTS</h2>
          </div>
          <div className="hidden md:block">
            <Button variant="outline" href="/blogs">All Posts</Button>
          </div>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {preview.map((post, i) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
            >
              <Link
                href={`/blogs/${post.slug}`}
                className="card-base overflow-hidden group block no-underline"
              >
                {/* Accent area */}
                <div className={`h-40 bg-gradient-to-br ${gradients[i % gradients.length]} flex items-end px-6 pb-5 relative`}>
                  <span className="tag-chip">{post.tags[0]}</span>
                  <span className="absolute top-4 right-4 text-xs text-fg-muted bg-white/80 px-3 py-1 rounded-full">
                    {formatDate(post.date)}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs text-fg-muted mb-3">
                    <span>{post.readTime} read</span>
                  </div>
                  <h3
                    className="font-bold text-lg text-fg uppercase mb-2 group-hover:text-accent transition-colors duration-200"
                    style={{ fontFamily: "var(--font-antonio)", letterSpacing: "-0.02em" }}
                  >
                    {post.title}
                  </h3>
                  <p className="text-fg-muted text-sm leading-relaxed line-clamp-2 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-1 text-xs font-medium text-accent">
                    <span>Read Article</span>
                    <ArrowUpRight
                      size={12}
                      className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                    />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 md:hidden">
          <Button variant="outline" href="/blogs">All Posts</Button>
        </div>
      </div>
    </section>
  );
}
