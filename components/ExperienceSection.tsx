"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { experience, education } from "@/lib/data";

function FadeUp({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

export default function ExperienceSection() {
  return (
    <section className="section-pad bg-bg-alt border-t border-border">
      <div className="container-main">
        <FadeUp>
          <p className="eyebrow mb-3">experience</p>
          <h2 className="section-heading text-fg mb-12">work &amp; education</h2>
        </FadeUp>

        {/* Experience timeline */}
        {experience.length > 0 && (
          <div className="relative flex flex-col gap-6 mb-14 md:pl-10">
            {/* Timeline rail */}
            <div className="hidden md:block absolute left-[5px] top-3 bottom-3 w-px bg-border" />

            {experience.map((exp, i) => (
              <FadeUp key={i} delay={i * 0.08}>
                <div className="relative">
                  {/* Timeline dot */}
                  <span className="hidden md:block absolute -left-10 top-7 w-[11px] h-[11px] rounded-full bg-accent ring-4 ring-accent/15" />

                  <div className="card-base bg-card p-6 md:p-8 hover:border-accent/40 transition-colors duration-300">
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                      <div>
                        <h3
                          className="font-bold text-xl text-fg uppercase leading-tight"
                          style={{ fontFamily: "var(--font-antonio)", letterSpacing: "-0.02em" }}
                        >
                          {exp.role}
                        </h3>
                        <p className="text-accent text-sm font-medium mt-1">{exp.company}</p>
                      </div>
                      <div className="flex items-center gap-2 flex-shrink-0">
                        <span className="tag-chip">{exp.type}</span>
                        <span className="text-xs text-fg-muted bg-bg-alt px-2.5 py-1 rounded-full">
                          {exp.duration}
                        </span>
                      </div>
                    </div>

                    <p className="text-fg-muted text-sm leading-relaxed mb-4">
                      {exp.description}
                    </p>

                    {exp.highlights && exp.highlights.length > 0 && (
                      <ul className="flex flex-col gap-2 mb-5">
                        {exp.highlights.map((item, hi) => (
                          <li key={hi} className="flex gap-3 items-start">
                            <span className="text-accent mt-0.5 flex-shrink-0">→</span>
                            <span className="text-sm text-fg-muted leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                      {exp.tech.map((t) => (
                        <span key={t} className="tag-chip">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        )}

        {/* Education cards */}
        <FadeUp>
          <p className="eyebrow mb-5">education</p>
        </FadeUp>
        <div className="grid md:grid-cols-2 gap-4">
          {education.map((edu, i) => (
            <FadeUp key={i} delay={i * 0.08}>
              <div className="card-base bg-card p-6 h-full hover:border-accent/40 transition-colors duration-300">
                <div className="flex flex-col gap-1">
                  <h3
                    className="font-bold text-lg text-fg uppercase leading-tight"
                    style={{ fontFamily: "var(--font-antonio)", letterSpacing: "-0.02em" }}
                  >
                    {edu.degree}
                  </h3>
                  <p className="text-fg-muted text-sm">{edu.institution}</p>
                  <div className="flex items-center gap-2 mt-3">
                    <span className="text-xs text-fg-muted bg-bg-alt px-2.5 py-1 rounded-full">
                      {edu.duration}
                    </span>
                    {edu.gpa && (
                      <span className="tag-chip">{edu.gpa}</span>
                    )}
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
