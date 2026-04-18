"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { aboutText, highlights, metrics, siteConfig, socials } from "@/lib/data";
import Button from "@/components/ui/Button";
import CountUp from "@/components/ui/CountUp";
import Image from "next/image";

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="bg-bg-alt border-t border-border section-pad">
      <div ref={ref} className="container-main">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14"
        >
          <p className="eyebrow mb-4">About Me</p>
          <h2 className="section-heading text-fg">ABOUT ME</h2>
        </motion.div>

        {/* Three-column layout: photo | text | stats */}
        <div className="grid md:grid-cols-[300px_1fr_1fr] gap-10 md:gap-12 items-start">

          {/* Column 1 — large portrait photo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
            className="md:sticky md:top-24 self-start"
          >
            <div className="relative w-full rounded-2xl overflow-hidden border border-border" style={{ aspectRatio: "3/4" }}>
              <Image
                src="/image.png"
                alt={siteConfig.name}
                fill
                sizes="300px"
                className="object-cover object-top"
                priority
              />
            </div>
            {/* Name tag below photo */}
            <div className="mt-4 flex items-center justify-between">
              <div>
                <p className="font-bold text-sm text-fg" style={{ fontFamily: "var(--font-antonio)", letterSpacing: "-0.01em" }}>
                  {siteConfig.name}
                </p>
                <p className="text-xs text-fg-muted mt-0.5">Data Scientist · AI/ML Engineer</p>
              </div>
              <span className="w-2 h-2 rounded-full bg-green animate-pulse" />
            </div>
          </motion.div>

          {/* Column 2 — text + highlights */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          >
            <div className="flex flex-col gap-4 mb-8">
              {aboutText.map((para, i) => (
                <p key={i} className="text-fg-muted text-base leading-relaxed">
                  {para}
                </p>
              ))}
            </div>

            <ul className="flex flex-col gap-3 mb-8">
              {highlights.map((item, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span className="text-accent mt-0.5 flex-shrink-0">→</span>
                  <span className="text-sm text-fg">{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-3">
              <Button variant="primary" href="/projects">See My Work</Button>
              <Button variant="outline" href="/about">My Story</Button>
            </div>
          </motion.div>

          {/* Right — stats + contact */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          >
            {/* Stats — Portavia shows 3 counters */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {metrics.slice(0, 3).map((m, i) => (
                <div key={i} className="card-base bg-card p-5 text-center">
                  <div
                    className="font-bold text-3xl text-fg"
                    style={{ fontFamily: "var(--font-antonio)" }}
                  >
                    <CountUp end={m.value} suffix={m.suffix} />
                  </div>
                  <p className="text-xs text-fg-muted mt-1 leading-snug">{m.label}</p>
                </div>
              ))}
            </div>

            {/* Contact info */}
            <div className="card-base bg-card p-6 mb-5">
              <p className="eyebrow mb-4">Contact</p>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3 text-sm">
                  <span className="text-fg-muted w-16 flex-shrink-0">Email :</span>
                  <a href={`mailto:${siteConfig.email}`} className="text-fg hover:text-accent transition-colors no-underline">
                    {siteConfig.email}
                  </a>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <span className="text-fg-muted w-16 flex-shrink-0">GitHub :</span>
                  <a href={socials.github} target="_blank" rel="noreferrer" className="text-fg hover:text-accent transition-colors no-underline">
                    @likhhithh
                  </a>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <span className="text-fg-muted w-16 flex-shrink-0">Based :</span>
                  <span className="text-fg">India · Remote-friendly</span>
                </div>
              </div>
            </div>

            {/* Quick tech chips */}
            <div className="flex flex-wrap gap-2">
              {["Python", "TensorFlow", "PyTorch", "LangChain", "RAG", "FastAPI", "React.js"].map((skill) => (
                <span key={skill} className="tag-chip">{skill}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
