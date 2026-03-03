/**
 * Skills.jsx — Enhanced
 * New: animated skill bars, staggered tag pop-in, hover glow per category,
 * floating category icons, counter animation on stats.
 */

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import data from "../data/portfolioData.json";

const CATEGORY_META = {
  "Programming":       { icon: "⌨️", gradient: "from-cyan-500   to-cyan-400",   glow: "rgba(34,211,238,0.3)",  tag: "bg-cyan-400/10   text-cyan-300   border-cyan-400/20"   },
  "Machine Learning":  { icon: "🤖", gradient: "from-purple-500 to-purple-400", glow: "rgba(167,139,250,0.3)", tag: "bg-purple-400/10 text-purple-300 border-purple-400/20" },
  "Electrical":        { icon: "⚡", gradient: "from-yellow-500 to-amber-400",  glow: "rgba(234,179,8,0.3)",   tag: "bg-yellow-400/10 text-yellow-300 border-yellow-400/20" },
  "Tools & Platforms": { icon: "🛠️", gradient: "from-pink-500   to-rose-400",   glow: "rgba(244,114,182,0.3)", tag: "bg-pink-400/10   text-pink-300   border-pink-400/20"   },
};

const DEFAULT_META = { icon: "💡", gradient: "from-slate-500 to-slate-400", glow: "rgba(148,163,184,0.3)", tag: "bg-slate-400/10 text-slate-300 border-slate-400/20" };

// Animated counter
function Counter({ end, duration = 1.5 }) {
  const [count, setCount] = useState(0);
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true });

  useRef(() => {
    if (!inView) return;
    let start = 0;
    const step = end / (duration * 60);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) { setCount(end); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 1000 / 60);
    return () => clearInterval(timer);
  });

  return <span ref={ref}>{count}</span>;
}

export default function Skills() {
  const { skills } = data;
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const entries = Object.entries(skills);

  return (
    <section id="skills" className="section-padding relative">
      <div className="section-divider max-w-6xl mx-auto mb-16" />
      <div className="max-w-6xl mx-auto" ref={ref}>

        {/* ── Heading ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="font-mono text-purple-400 text-sm tracking-[0.3em] uppercase">02.</span>
            <div className="flex-1 h-px bg-gradient-to-r from-purple-400/30 to-transparent" />
          </div>
          <h2 className="font-display font-extrabold text-5xl md:text-6xl">
            <span className="gradient-text-alt">Skills</span>
            <span className="text-slate-700"> & Tools</span>
          </h2>
        </motion.div>

        {/* ── Skill Category Cards ── */}
        <div className="grid sm:grid-cols-2 gap-6 mb-10">
          {entries.map(([category, tags], ci) => {
            const meta = CATEGORY_META[category] || DEFAULT_META;
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.7, delay: ci * 0.15, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{
                  y: -6,
                  boxShadow: `0 20px 60px ${meta.glow}`,
                  borderColor: meta.glow.replace("0.3", "0.5"),
                }}
                className="glass rounded-3xl border border-slate-700/30 p-7 transition-all duration-300 group"
              >
                {/* Card header */}
                <div className="flex items-center gap-4 mb-6">
                  <motion.div
                    animate={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: ci * 0.5 }}
                    className="text-3xl"
                  >
                    {meta.icon}
                  </motion.div>
                  <div>
                    <h3 className="font-display font-bold text-slate-100 text-lg">{category}</h3>
                    <p className="font-mono text-slate-500 text-xs">{tags.length} technologies</p>
                  </div>
                  {/* Animated bar */}
                  <div className="ml-auto w-16 h-1.5 rounded-full bg-slate-700/50 overflow-hidden">
                    <motion.div
                      className={`h-full rounded-full bg-gradient-to-r ${meta.gradient}`}
                      initial={{ width: 0 }}
                      animate={inView ? { width: "100%" } : {}}
                      transition={{ duration: 1.2, delay: ci * 0.2 + 0.5 }}
                    />
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag, ti) => (
                    <motion.span
                      key={tag}
                      initial={{ opacity: 0, scale: 0.6, y: 10 }}
                      animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
                      transition={{
                        duration: 0.4,
                        delay: ci * 0.15 + ti * 0.06 + 0.4,
                        type: "spring",
                        stiffness: 300,
                      }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className={`px-3 py-1.5 rounded-xl border text-xs font-mono
                                  cursor-default transition-all duration-200 ${meta.tag}`}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ── Stats Row ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { value: entries.length,                                           suffix: "",  label: "Skill Categories" },
            { value: entries.reduce((a, [, t]) => a + t.length, 0),           suffix: "+", label: "Technologies"      },
            { value: data.projects.length,                                     suffix: "+", label: "Projects Built"    },
            { value: 4,                                                        suffix: "th",label: "Year Student"      },
          ].map(({ value, suffix, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.9 + i * 0.1, type: "spring", stiffness: 200 }}
              whileHover={{ scale: 1.05 }}
              className="glass rounded-2xl p-5 text-center border border-slate-700/30 hover:border-cyan-400/20 transition-colors"
            >
              <p className="font-display font-extrabold text-3xl shimmer-text">
                {value}{suffix}
              </p>
              <p className="font-mono text-slate-500 text-xs mt-1">{label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}