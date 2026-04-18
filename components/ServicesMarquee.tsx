"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { skillCategories } from "@/lib/data";
import TechLogo from "@/components/ui/TechLogo";

export default function SkillsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="bg-bg border-t border-border section-pad">
      <div ref={ref} className="container-main">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14"
        >
          <p className="eyebrow mb-4">Technologies</p>
          <h2 className="section-heading text-fg">SKILLS &amp; TOOLS</h2>
        </motion.div>

        {/* Categories */}
        <div className="flex flex-col gap-12">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: ci * 0.07 }}
            >
              {/* Category label */}
              <p className="eyebrow mb-5">{cat.category}</p>

              {/* Logo grid */}
              <div className="flex flex-wrap gap-4 md:gap-6">
                {cat.skills.map((skill) => (
                  <TechLogo
                    key={skill.name}
                    name={skill.name}
                    logoKey={skill.logo}
                    size="md"
                  />
                ))}
              </div>

              {/* Divider between categories */}
              {ci < skillCategories.length - 1 && (
                <div className="h-divider mt-12" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
