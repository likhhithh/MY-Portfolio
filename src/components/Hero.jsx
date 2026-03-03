/**
 * Hero.jsx — Enhanced
 * New: typewriter effect for roles, floating particles, staggered letter animation on name,
 * 3D tilt card for stats, animated gradient border, scan-line effect.
 */

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiArrowDown } from "react-icons/fi";
import data from "../data/portfolioData.json";

// ── Typewriter hook ──────────────────────────────────────────
function useTypewriter(words, speed = 80, pause = 1800) {
  const [displayed, setDisplayed] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx % words.length];
    const timeout = setTimeout(
      () => {
        if (!deleting) {
          setDisplayed(current.slice(0, charIdx + 1));
          if (charIdx + 1 === current.length) {
            setTimeout(() => setDeleting(true), pause);
          } else {
            setCharIdx((c) => c + 1);
          }
        } else {
          setDisplayed(current.slice(0, charIdx - 1));
          if (charIdx - 1 === 0) {
            setDeleting(false);
            setWordIdx((w) => (w + 1) % words.length);
            setCharIdx(0);
          } else {
            setCharIdx((c) => c - 1);
          }
        }
      },
      deleting ? speed / 2 : speed,
    );
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, wordIdx, words, speed, pause]);

  return displayed;
}

// ── Floating particle ────────────────────────────────────────
function Particle({ x, y, size, color, duration, delay }) {
  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        width: size,
        height: size,
        background: color,
      }}
      animate={{
        y: [0, -30, 0],
        opacity: [0, 0.6, 0],
        scale: [0, 1, 0],
      }}
      transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}

// ── 3D Tilt card ─────────────────────────────────────────────
function TiltCard({ children, className }) {
  const ref = useRef(null);
  const onMouseMove = (e) => {
    const r = ref.current.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width - 0.5) * 20;
    const y = ((e.clientY - r.top) / r.height - 0.5) * -20;
    ref.current.style.transform = `perspective(600px) rotateX(${y}deg) rotateY(${x}deg) scale(1.03)`;
  };
  const onMouseLeave = () => {
    ref.current.style.transform =
      "perspective(600px) rotateX(0deg) rotateY(0deg) scale(1)";
  };
  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={`tilt-card ${className}`}
      style={{ transition: "transform 0.2s ease" }}
    >
      {children}
    </div>
  );
}

// ── Main Component ───────────────────────────────────────────
export default function Hero() {
  const { hero, contact } = data;

  const roles = [
    "Electrical Engineer",
    "ML & AI Enthusiast",
    "Computer Vision Dev",
    "Problem Solver",
  ];
  const typed = useTypewriter(roles);

  // Generate stable particles
  const particles = Array.from({ length: 18 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
    color: [
      "rgba(34,211,238,0.5)",
      "rgba(167,139,250,0.5)",
      "rgba(244,114,182,0.4)",
    ][i % 3],
    duration: Math.random() * 4 + 3,
    delay: Math.random() * 5,
  }));

  // Letter-by-letter animation for name
  const nameLetters = hero.name.split("");

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden"
    >
      {/* ── Floating Particles ── */}
      {particles.map((p) => (
        <Particle key={p.id} {...p} />
      ))}

      {/* ── Animated gradient mesh background ── */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 60% 40% at 70% 20%, rgba(34,211,238,0.12) 0%, transparent 60%),
            radial-gradient(ellipse 50% 50% at 20% 80%, rgba(167,139,250,0.12) 0%, transparent 60%),
            radial-gradient(ellipse 40% 40% at 80% 80%, rgba(244,114,182,0.08) 0%, transparent 60%)
          `,
        }}
      />

      {/* ── Concentric rings ── */}
      {[600, 450, 300].map((size, i) => (
        <motion.div
          key={size}
          className="absolute rounded-full border border-cyan-400/[0.06] pointer-events-none"
          style={{ width: size, height: size }}
          animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{
            duration: 4 + i * 1.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.8,
          }}
        />
      ))}

      {/* ── Main Content ── */}
      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Greeting pill */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="flex flex-col items-center gap-3">
            {/* Greeting pill */}
            <span
              className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full glass
                   border border-slate-700/50 text-slate-400 text-sm font-mono"
            >
              <motion.span
                className="w-2 h-2 rounded-full bg-cyan-400"
                animate={{ scale: [1, 1.4, 1], opacity: [1, 0.5, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              {hero.greeting} — welcome to my space
            </span>

            {/* Open To badges */}
            <div className="flex flex-wrap justify-center gap-2">
              {hero.openTo.map((role, i) => (
                <motion.span
                  key={role}
                  initial={{ opacity: 0, y: 10, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{
                    delay: 0.2 + i * 0.1,
                    type: "spring",
                    stiffness: 200,
                  }}
                  whileHover={{ scale: 1.08, y: -2 }}
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono
                   border transition-all duration-300"
                  style={{
                    background: [
                      "rgba(34,211,238,0.08)",
                      "rgba(167,139,250,0.08)",
                      "rgba(244,114,182,0.08)",
                    ][i % 3],
                    borderColor: [
                      "rgba(34,211,238,0.3)",
                      "rgba(167,139,250,0.3)",
                      "rgba(244,114,182,0.3)",
                    ][i % 3],
                    color: ["#22d3ee", "#a78bfa", "#f472b6"][i % 3],
                  }}
                >
                  <span>{["🤖", "📊", "💻"][i % 3]}</span>
                  {role}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Name — letter by letter */}
        <div className="mb-4 overflow-hidden">
          <h1 className="font-display font-extrabold text-5xl sm:text-7xl lg:text-8xl leading-none">
            {nameLetters.map((letter, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 80, rotateX: -90 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.3 + i * 0.04,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={
                  letter === " "
                    ? "mr-4 inline-block"
                    : "inline-block shimmer-text"
                }
                style={{ display: "inline-block" }}
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </h1>
        </div>

        {/* Typewriter role */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mb-6 h-8 flex items-center justify-center gap-2"
        >
          <span className="font-mono text-cyan-400/70 text-lg tracking-widest">
            {typed}
          </span>
          <span className="typed-cursor" />
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.7 }}
          className="font-body text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          {hero.tagline}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-14"
        >
          <motion.a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            whileHover={{
              scale: 1.06,
              boxShadow: "0 0 30px rgba(34,211,238,0.4)",
            }}
            whileTap={{ scale: 0.97 }}
            className="relative px-8 py-3.5 rounded-2xl font-display font-semibold text-sm
                       overflow-hidden group"
            style={{ background: "linear-gradient(135deg, #22d3ee, #a78bfa)" }}
          >
            {/* Shimmer sweep on hover */}
            <span
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent
                             -translate-x-full group-hover:translate-x-full transition-transform duration-700"
            />
            <span className="relative text-white">View My Work →</span>
          </motion.a>

          <motion.a
            href={hero.resumeLink}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.97 }}
            className="px-8 py-3.5 rounded-2xl glass border border-slate-600/60 text-slate-300
                       font-display font-semibold text-sm hover:border-cyan-400/50 hover:text-white
                       transition-all duration-300"
          >
            Download CV
          </motion.a>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="flex items-center justify-center gap-4"
        >
          {[
            {
              href: contact.github,
              icon: <FiGithub size={18} />,
              label: "GitHub",
            },
            {
              href: contact.linkedin,
              icon: <FiLinkedin size={18} />,
              label: "LinkedIn",
            },
            {
              href: `mailto:${contact.email}`,
              icon: <FiMail size={18} />,
              label: "Email",
            },
          ]
            .filter((s) => s.href)
            .map(({ href, icon, label }, i) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 1.9 + i * 0.1,
                  type: "spring",
                  stiffness: 200,
                }}
                whileHover={{ scale: 1.2, y: -3 }}
                whileTap={{ scale: 0.9 }}
                className="w-11 h-11 rounded-2xl glass border border-slate-700/50 flex items-center justify-center
                         text-slate-400 hover:text-cyan-400 hover:border-cyan-400/50 transition-colors duration-200"
              >
                {icon}
              </motion.a>
            ))}
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.1 }}
          className="flex flex-wrap justify-center gap-4 mt-16"
        >
          {[
            { value: data.projects.length + "+", label: "Projects" },
            {
              value:
                Object.keys(data.skills).reduce(
                  (a, k) => a + data.skills[k].length,
                  0,
                ) + "+",
              label: "Technologies",
            },
            { value: data.experience.length + "+", label: "Experiences" },
          ].map(({ value, label }) => (
            <TiltCard
              key={label}
              className="glass rounded-2xl border border-slate-700/30 px-8 py-4 text-center min-w-[100px]"
            >
              <p className="font-display font-extrabold text-2xl gradient-text">
                {value}
              </p>
              <p className="font-mono text-slate-500 text-xs mt-1">{label}</p>
            </TiltCard>
          ))}
        </motion.div>
      </div>

      {/* ── Scroll indicator ── */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        onClick={() =>
          document
            .getElementById("about")
            ?.scrollIntoView({ behavior: "smooth" })
        }
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2
                   text-slate-600 hover:text-cyan-400 transition-colors group"
      >
        <span className="font-mono text-xs tracking-[0.3em] uppercase">
          scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <FiArrowDown size={16} />
        </motion.div>
      </motion.button>
    </section>
  );
}
