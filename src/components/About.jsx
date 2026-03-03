/**
 * About.jsx — Enhanced
 * New: slide-in from sides, animated highlight cards with icon pulse,
 * staggered reveal, decorative code block aesthetic.
 */

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import data from "../data/portfolioData.json";

// Slide-in variant factory
const slideIn = (direction = "left", delay = 0) => ({
  initial: { opacity: 0, x: direction === "left" ? -60 : 60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] },
});

export default function About() {
  const { about, hero } = data;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding relative">
      {/* Section divider top */}
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
            <span className="font-mono text-cyan-400 text-sm tracking-[0.3em] uppercase">
              01.
            </span>
            <div className="flex-1 h-px bg-gradient-to-r from-cyan-400/30 to-transparent" />
          </div>
          <h2 className="font-display font-extrabold text-5xl md:text-6xl">
            <span className="gradient-text">About</span>
            <span className="text-slate-700"> Me</span>
          </h2>
        </motion.div>

        {/* ── Two columns ── */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left col */}
          <motion.div
            {...slideIn("left", 0.2)}
            animate={inView ? { opacity: 1, x: 0 } : slideIn("left").initial}
          >
            {/* Avatar / Monogram */}
            <div className="relative w-fit mb-10">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-3 rounded-3xl opacity-40"
                style={{
                  background:
                    "conic-gradient(from 0deg, #22d3ee, #a78bfa, #f472b6, #22d3ee)",
                  filter: "blur(8px)",
                }}
              />
              <div
                className="relative w-44 h-44 rounded-3xl glass-strong border border-slate-700/40
                              flex items-center justify-center overflow-hidden"
              >
                {about.image ? (
                  <img
                    src={about.image}
                    alt={hero.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="font-display font-black text-6xl gradient-text">
                    {hero.name
                      .split(" ")
                      .map((w) => w[0])
                      .join("")
                      .slice(0, 2)}
                  </span>
                )}
                {/* scan line */}
                <div className="absolute inset-0 scan-container opacity-30" />
              </div>
            </div>

            {/* Description */}
            <p className="font-body text-slate-300 text-lg leading-loose mb-8">
              {about.description}
            </p>

            {/* Code-block aesthetic tag */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="glass rounded-2xl border border-slate-700/30 p-5 font-mono text-sm"
            >
              <div className="flex gap-2 mb-3">
                {["#ff5f57", "#ffbd2e", "#28c840"].map((c) => (
                  <div
                    key={c}
                    className="w-3 h-3 rounded-full"
                    style={{ background: c }}
                  />
                ))}
              </div>
              <p className="text-slate-500">
                <span className="text-purple-400">const</span>{" "}
                <span className="text-cyan-400">malothu</span>{" "}
                <span className="text-slate-400">= {"{"}</span>
              </p>
              <p className="text-slate-500 pl-4">
                <span className="text-yellow-400">role</span>
                <span className="text-slate-400">: </span>
                <span className="text-green-400">
                  "{hero.title.split("|")[0].trim()}"
                </span>
                ,
              </p>
              <p className="text-slate-500 pl-4">
                <span className="text-yellow-400">openTo</span>
                <span className="text-slate-400">: [</span>
              </p>
              {data.hero.openTo.map((item, i) => (
                <p key={i} className="text-slate-500 pl-8">
                  <span className="text-green-400">"{item}"</span>
                  {i < data.hero.openTo.length - 1 && ","}
                </p>
              ))}
              <p className="text-slate-500 pl-4">
                <span className="text-slate-400">],</span>
              </p>
              <p className="text-slate-500 pl-4">
                <span className="text-yellow-400">passion</span>
                <span className="text-slate-400">: </span>
                <span className="text-green-400">"ML + Engineering"</span>
              </p>
              <p className="text-slate-500">{"}"}</p>
            </motion.div>
          </motion.div>

          {/* Right col — highlights */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-4"
          >
            <h3 className="font-display font-bold text-slate-200 text-xl mb-2">
              Quick Highlights
            </h3>

            {about.highlights.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 50, filter: "blur(4px)" }}
                animate={
                  inView ? { opacity: 1, x: 0, filter: "blur(0px)" } : {}
                }
                transition={{
                  duration: 0.6,
                  delay: 0.4 + i * 0.12,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{ x: 6, borderColor: "rgba(34,211,238,0.4)" }}
                className="glass rounded-2xl px-5 py-4 border border-slate-700/30
                           cursor-default transition-all duration-300 group"
              >
                <div className="flex items-center gap-3">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.3,
                    }}
                    className="text-xl flex-shrink-0"
                  >
                    {item.split(" ")[0]}
                  </motion.div>
                  <p className="font-body text-slate-300 group-hover:text-slate-100 transition-colors">
                    {item.slice(item.indexOf(" ") + 1)}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* Education card */}
            {data.education?.map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.9 }}
                className="relative glass rounded-2xl p-5 border border-purple-400/20 overflow-hidden mt-2"
              >
                {/* Decorative corner */}
                <div
                  className="absolute top-0 right-0 w-16 h-16 rounded-bl-3xl
                                bg-gradient-to-bl from-purple-500/10 to-transparent"
                />
                <p className="font-mono text-xs text-purple-400 tracking-wider uppercase mb-2">
                  🎓 Education
                </p>
                <p className="font-display font-bold text-slate-100">
                  {edu.degree}
                </p>
                <p className="font-body text-slate-400 text-sm mt-1">
                  {edu.institution}
                </p>
                <div className="flex items-center gap-3 mt-2">
                  <span className="font-mono text-xs text-slate-500 glass px-2 py-1 rounded-lg border border-slate-700/40">
                    {edu.duration}
                  </span>
                  <span className="font-mono text-xs text-purple-400">
                    {edu.grade}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
