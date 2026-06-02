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

        {/* Experience cards */}
        {experience.length > 0 && (
          <div className="flex flex-col gap-4 mb-12">
            {experience.map((exp, i) => (
              <FadeUp key={i} delay={i * 0.08}>
                <div className="card-base bg-card p-6">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div>
                      <h3 className="font-display font-medium text-lg text-fg">
                        {exp.role}
                      </h3>
                      <p className="text-fg-muted text-sm mt-0.5">{exp.company}</p>
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <span className="tag-chip">{exp.type}</span>
                      <span className="text-xs text-fg-muted">{exp.duration}</span>
                    </div>
                  </div>
                  <p className="text-fg-muted text-sm leading-relaxed mb-4">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <span key={t} className="tag-chip">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        )}

        {/* Education cards */}
        <div className="flex flex-col gap-4">
          {education.map((edu, i) => (
            <FadeUp key={i} delay={i * 0.08}>
              <div className="card-base bg-card p-6">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="font-display font-medium text-lg text-fg">
                      {edu.degree}
                    </h3>
                    <p className="text-fg-muted text-sm mt-0.5">{edu.institution}</p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <p className="text-xs text-fg-muted">{edu.duration}</p>
                    {edu.gpa && (
                      <p className="text-sm font-medium text-fg mt-0.5">{edu.gpa}</p>
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
