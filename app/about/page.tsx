"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import ExperienceSection from "@/components/ExperienceSection";
import Button from "@/components/ui/Button";
import CountUp from "@/components/ui/CountUp";
import {
  siteConfig,
  aboutText,
  metrics,
  highlights,
  skillCategories,
} from "@/lib/data";

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
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="bg-bg">
        {/* ── Hero ────────────────────────────────────────────────────── */}
        <section className="pt-32 pb-16">
          <div className="container-main">
            <motion.p
              className="eyebrow mb-4"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              about me
            </motion.p>
            <motion.h1
              className="section-heading text-fg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
            >
              the person
              <br />
              behind the work
            </motion.h1>
            <motion.p
              className="text-fg-muted text-base max-w-xl mt-4 leading-relaxed"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.16 }}
            >
              {siteConfig.description}
            </motion.p>
            <motion.div
              className="flex flex-wrap gap-3 mt-8"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.22 }}
            >
              <Button variant="primary" href={`mailto:${siteConfig.email}`}>
                get in touch →
              </Button>
              <Button variant="outline" href={siteConfig.resume} target="_blank">
                download résumé
              </Button>
            </motion.div>
          </div>
        </section>

        {/* ── About Text ──────────────────────────────────────────────── */}
        <section className="section-pad bg-bg">
          <div className="container-main">
            <div className="md:grid md:grid-cols-2 gap-16">
              {/* Left: paragraphs + highlights */}
              <FadeUp>
                <div className="flex flex-col gap-6">
                  {aboutText.map((para, i) => (
                    <p key={i} className="text-fg-muted leading-relaxed text-base">
                      {para}
                    </p>
                  ))}
                </div>
                <ul className="mt-8 flex flex-col gap-3">
                  {highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-fg-muted">
                      <span className="text-fg font-medium mt-0.5">→</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </FadeUp>

              {/* Right: metrics + skills */}
              <FadeUp delay={0.12}>
                {/* Metrics 2×2 */}
                <div className="grid grid-cols-2 gap-4 mb-10">
                  {metrics.map((m, i) => (
                    <div key={i} className="card-base bg-card p-6 text-center">
                      <p className="font-display font-medium text-3xl text-fg tracking-tight">
                        <CountUp end={m.value} suffix={m.suffix} />
                      </p>
                      <p className="eyebrow mt-2">{m.label}</p>
                    </div>
                  ))}
                </div>

                {/* Skill categories */}
                <div className="flex flex-col gap-5">
                  {skillCategories.map((cat) => (
                    <div key={cat.category}>
                      <p className="eyebrow mb-2">{cat.category}</p>
                      <div className="flex flex-wrap gap-2">
                        {cat.skills.map((skill) => (
                          <span key={skill.name} className="tag-chip">
                            {skill.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </FadeUp>
            </div>
          </div>
        </section>

        {/* ── Experience & Education ───────────────────────────────────── */}
        <ExperienceSection />

        {/* ── Contact ─────────────────────────────────────────────────── */}
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
