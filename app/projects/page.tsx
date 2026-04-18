"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { projects } from "@/lib/data";

// Per-index gradient backgrounds for project cards
const cardGradients = [
  "from-violet-100 via-blue-50 to-indigo-100",
  "from-amber-100 via-orange-50 to-yellow-100",
  "from-emerald-100 via-teal-50 to-green-100",
  "from-pink-100 via-rose-50 to-red-100",
  "from-sky-100 via-cyan-50 to-blue-100",
  "from-purple-100 via-fuchsia-50 to-violet-100",
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

export default function ProjectsPage() {
  const router = useRouter();
  // Collect unique categories
  const allCategories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All" ? projects : projects.filter((p) => p.category === activeFilter);

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
              portfolio
            </motion.p>
            <motion.h1
              className="section-heading text-fg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
            >
              all projects
            </motion.h1>
            <motion.p
              className="text-fg-muted text-base max-w-xl mt-4 leading-relaxed"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.16 }}
            >
              A collection of ML systems, full-stack products, and research experiments — built
              from scratch and shipped to production.
            </motion.p>
          </div>
        </section>

        {/* ── Projects Grid ────────────────────────────────────────────── */}
        <section className="section-pad">
          <div className="container-main">
            {/* Filter chips */}
            <FadeUp className="flex flex-wrap gap-2 mb-10">
              {allCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-4 py-1.5 rounded-full text-xs font-medium border transition-all duration-200 ${
                    activeFilter === cat
                      ? "bg-fg text-white border-fg"
                      : "bg-transparent text-fg-muted border-border hover:border-fg hover:text-fg"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </FadeUp>

            {/* Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {filtered.map((project, i) => {
                const gradient = cardGradients[i % cardGradients.length];
                return (
                  <FadeUp key={project.slug} delay={i * 0.07}>
                    <div
                      onClick={() => router.push(`/projects/${project.slug}`)}
                      className="card-base overflow-hidden flex flex-col group block cursor-pointer"
                    >
                      {/* Image area */}
                      <div
                        className={`aspect-[4/3] bg-gradient-to-br ${gradient} flex items-center justify-center`}
                      >
                        {project.image ? (
                          <div className="w-20 h-20 rounded-2xl overflow-hidden shadow-md">
                            <Image
                              src={project.image}
                              alt={project.title}
                              width={80}
                              height={80}
                              className="object-cover w-full h-full"
                            />
                          </div>
                        ) : (
                          <span className="font-display text-4xl font-medium text-fg/20 select-none">
                            {project.title[0]}
                          </span>
                        )}
                      </div>

                      {/* Content */}
                      <div className="p-5 flex flex-col flex-1">
                        <div className="flex items-center justify-between gap-2 mb-3">
                          <span className="tag-chip">{project.category}</span>
                          <span className="text-xs text-fg-muted">{project.year}</span>
                        </div>
                        <h2 className="font-display font-medium text-lg text-fg leading-snug mb-1">
                          {project.title}
                        </h2>
                        <p className="text-fg-muted text-sm leading-relaxed mb-4 flex-1">
                          {project.tagline}
                        </p>

                        {/* Tech tags */}
                        <div className="flex flex-wrap gap-1.5 mb-5">
                          {project.tech.slice(0, 5).map((t) => (
                            <span key={t} className="tag-chip">
                              {t}
                            </span>
                          ))}
                          {project.tech.length > 5 && (
                            <span className="tag-chip">+{project.tech.length - 5}</span>
                          )}
                        </div>

                        {/* CTA row */}
                        <div className="flex items-center gap-3 pt-4 border-t border-border">
                          <span className="text-xs font-medium text-fg group-hover:underline">
                            view case study →
                          </span>
                          {project.live && (
                            <a
                              href={project.live}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="text-xs text-fg-muted hover:text-fg transition-colors"
                            >
                              live site ↗
                            </a>
                          )}
                          {project.github && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="text-xs text-fg-muted hover:text-fg transition-colors"
                            >
                              github ↗
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </FadeUp>
                );
              })}
            </div>

            {filtered.length === 0 && (
              <div className="text-center py-20 text-fg-muted text-sm">
                No projects in this category yet.
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
