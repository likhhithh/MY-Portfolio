/**
 * Experience.jsx — Enhanced
 * New: timeline line draws itself on scroll, cards slide in alternating sides,
 * dot pulse animation, type badge glow, hover lift with shadow.
 */

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import data from "../data/portfolioData.json";

const TYPE_META = {
  internship:   { badge: "bg-cyan-400/10   text-cyan-300   border-cyan-400/30",   dot: "#22d3ee", glow: "rgba(34,211,238,0.4)"  },
  project:      { badge: "bg-purple-400/10 text-purple-300 border-purple-400/30", dot: "#a78bfa", glow: "rgba(167,139,250,0.4)" },
  volunteering: { badge: "bg-pink-400/10   text-pink-300   border-pink-400/30",   dot: "#f472b6", glow: "rgba(244,114,182,0.4)" },
};
const DEFAULT_META = { badge: "bg-slate-400/10 text-slate-300 border-slate-400/30", dot: "#94a3b8", glow: "rgba(148,163,184,0.4)" };

// Animated timeline line component
function TimelineLine({ inView }) {
  return (
    <motion.div
      className="absolute left-6 top-8 bottom-0 w-px origin-top"
      style={{ background: "linear-gradient(to bottom, #22d3ee, #a78bfa, rgba(244,114,182,0.2))" }}
      initial={{ scaleY: 0 }}
      animate={inView ? { scaleY: 1 } : {}}
      transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
    />
  );
}

export default function Experience() {
  const { experience } = data;
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" className="section-padding relative">
      <div className="section-divider max-w-5xl mx-auto mb-16" />
      <div className="max-w-4xl mx-auto" ref={ref}>

        {/* ── Heading ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="font-mono text-purple-400 text-sm tracking-[0.3em] uppercase">04.</span>
            <div className="flex-1 h-px bg-gradient-to-r from-purple-400/30 to-transparent" />
          </div>
          <h2 className="font-display font-extrabold text-5xl md:text-6xl">
            <span className="gradient-text-alt">Experience</span>
            <span className="text-slate-700"> & Journey</span>
          </h2>
        </motion.div>

        {/* ── Timeline ── */}
        <div className="relative">
          <TimelineLine inView={inView} />

          <div className="flex flex-col gap-8">
            {experience.map((item, i) => {
              const meta = TYPE_META[item.type] || DEFAULT_META;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -50, filter: "blur(4px)" }}
                  animate={inView ? { opacity: 1, x: 0, filter: "blur(0px)" } : {}}
                  transition={{ duration: 0.7, delay: i * 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="relative pl-16 group"
                >
                  {/* Timeline dot */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : {}}
                    transition={{ delay: i * 0.2 + 0.3, type: "spring", stiffness: 300 }}
                    className="absolute left-4 top-6 w-4 h-4 rounded-full -translate-x-1/2 z-10 border-2"
                    style={{
                      background: meta.dot,
                      borderColor: "#080d1a",
                      boxShadow: `0 0 0 0 ${meta.glow}`,
                    }}
                  >
                    {/* Pulse ring */}
                    <motion.div
                      className="absolute inset-0 rounded-full"
                      style={{ background: meta.dot }}
                      animate={{ scale: [1, 2.2, 1], opacity: [0.6, 0, 0.6] }}
                      transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.3 }}
                    />
                  </motion.div>

                  {/* Card */}
                  <motion.div
                    whileHover={{
                      y: -4,
                      boxShadow: `0 20px 50px ${meta.glow.replace("0.4","0.15")}`,
                    }}
                    className="glass rounded-3xl border border-slate-700/30 p-7
                               hover:border-opacity-50 transition-all duration-400 group/card"
                    style={{ "--hover-border": meta.dot }}
                  >
                    {/* Top row */}
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <h3 className="font-display font-bold text-slate-100 text-xl mb-1
                                       group-hover/card:text-white transition-colors">
                          {item.role}
                        </h3>
                        <div className="flex items-center gap-2">
                          <span className="font-body text-slate-400 text-sm">{item.company}</span>
                        </div>
                      </div>

                      {/* Duration */}
                      <span className="font-mono text-xs text-slate-500 glass px-3 py-1.5 rounded-xl
                                       border border-slate-700/40 whitespace-nowrap flex-shrink-0">
                        📅 {item.duration}
                      </span>
                    </div>

                    {/* Type badge */}
                    <motion.span
                      whileHover={{ scale: 1.05 }}
                      className={`inline-block mb-4 px-3 py-1 rounded-full text-xs font-mono
                                  border capitalize ${meta.badge}`}
                    >
                      {item.type === "internship"   ? "🏢 Internship"   :
                       item.type === "project"      ? "🔬 Project"      :
                       item.type === "volunteering" ? "🤝 Volunteering" : item.type}
                    </motion.span>

                    {/* Description */}
                    <p className="font-body text-slate-400 text-sm leading-loose">
                      {item.description}
                    </p>
                  </motion.div>
                </motion.div>
              );
            })}

            {/* End dot */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: experience.length * 0.2 + 0.4 }}
              className="relative pl-16"
            >
              <div className="absolute left-4 -translate-x-1/2 w-4 h-4 rounded-full glass
                              border border-slate-600/50 flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-slate-600" />
              </div>
              <p className="font-mono text-slate-600 text-xs pt-1">More to come...</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}