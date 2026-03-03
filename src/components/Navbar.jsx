/**
 * Navbar.jsx — Enhanced
 * New: sliding pill indicator, staggered link entrance, magnetic logo hover,
 * blur-in on scroll, mobile slide-down with stagger.
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import data from "../data/portfolioData.json";

const NAV_LINKS = [
  { label: "About",      href: "#about"      },
  { label: "Skills",     href: "#skills"     },
  { label: "Projects",   href: "#projects"   },
  { label: "Experience", href: "#experience" },
  { label: "Contact",    href: "#contact"    },
];

export default function Navbar() {
  const [scrolled,      setScrolled]      = useState(false);
  const [menuOpen,      setMenuOpen]      = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [hoveredLink,   setHoveredLink]   = useState(null);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.href.replace("#", ""));
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActiveSection(e.target.id)),
      { threshold: 0.4 }
    );
    ids.forEach((id) => { const el = document.getElementById(id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  const scrollTo = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  const monogram = data.hero.name.split(" ").map((w) => w[0]).join("").slice(0, 2);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0,    opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-strong shadow-2xl shadow-black/30 border-b border-slate-800/40" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* ── Logo ── */}
        <motion.a
          href="#hero"
          onClick={(e) => scrollTo(e, "#hero")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative group flex items-center gap-2"
        >
          <div className="w-9 h-9 rounded-xl flex items-center justify-center
                          bg-gradient-to-br from-cyan-400/20 to-purple-500/20
                          border border-cyan-400/30 group-hover:border-cyan-400/60
                          transition-all duration-300 group-hover:glow-cyan">
            <span className="font-display font-black text-sm gradient-text">{monogram}</span>
          </div>
          <span className="font-mono text-slate-400 text-xs hidden sm:block">.portfolio</span>
        </motion.a>

        {/* ── Desktop Nav ── */}
        <ul className="hidden md:flex items-center gap-1 glass rounded-2xl px-3 py-2 border border-slate-700/30">
          {NAV_LINKS.map((link, i) => {
            const isActive  = activeSection === link.href.replace("#", "");
            const isHovered = hoveredLink === link.href;
            return (
              <motion.li
                key={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0    }}
                transition={{ delay: 0.1 * i + 0.4 }}
              >
                <a
                  href={link.href}
                  onClick={(e) => scrollTo(e, link.href)}
                  onMouseEnter={() => setHoveredLink(link.href)}
                  onMouseLeave={() => setHoveredLink(null)}
                  className="relative px-4 py-2 rounded-xl text-sm font-body block transition-colors duration-200"
                  style={{ color: isActive ? "#22d3ee" : isHovered ? "#e2e8f0" : "#94a3b8" }}
                >
                  {/* Sliding pill background */}
                  <AnimatePresence>
                    {(isActive || isHovered) && (
                      <motion.span
                        layoutId="nav-pill"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{   opacity: 0 }}
                        className="absolute inset-0 rounded-xl"
                        style={{
                          background: isActive
                            ? "rgba(34,211,238,0.1)"
                            : "rgba(148,163,184,0.06)",
                          border: isActive ? "1px solid rgba(34,211,238,0.2)" : "none",
                        }}
                      />
                    )}
                  </AnimatePresence>
                  <span className="relative z-10">{link.label}</span>
                </a>
              </motion.li>
            );
          })}
        </ul>

        {/* ── Resume CTA ── */}
        <motion.a
          href={data.hero.resumeLink}
          target="_blank"
          rel="noreferrer"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0  }}
          transition={{ delay: 0.9 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:flex items-center gap-2 px-4 py-2 rounded-xl font-mono text-sm
                     bg-gradient-to-r from-cyan-500/10 to-purple-500/10
                     border border-cyan-400/30 text-cyan-400
                     hover:from-cyan-500/20 hover:to-purple-500/20 hover:border-cyan-400/60
                     transition-all duration-300"
        >
          Resume
          <motion.span animate={{ x: [0, 3, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
            ↗
          </motion.span>
        </motion.a>

        {/* ── Hamburger ── */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-2 group"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Menu"
        >
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              animate={
                menuOpen
                  ? i === 0 ? { rotate: 45,  y: 7,  width: 24 }
                  : i === 1 ? { opacity: 0,  x: -10           }
                  :           { rotate: -45, y: -7, width: 24 }
                  : { rotate: 0, y: 0, opacity: 1, width: i === 1 ? 18 : 24 }
              }
              transition={{ duration: 0.3 }}
              className="block h-[2px] bg-slate-300 rounded-full origin-center"
              style={{ width: i === 1 ? 18 : 24 }}
            />
          ))}
        </button>
      </div>

      {/* ── Mobile Menu ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{   height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden glass-strong border-t border-slate-700/30 overflow-hidden"
          >
            <ul className="flex flex-col px-6 py-5 gap-2">
              {NAV_LINKS.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0   }}
                  transition={{ delay: i * 0.07  }}
                >
                  <a
                    href={link.href}
                    onClick={(e) => scrollTo(e, link.href)}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-300
                               hover:text-cyan-400 hover:bg-cyan-400/5 transition-all duration-200
                               border border-transparent hover:border-cyan-400/20 font-body"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/60" />
                    {link.label}
                  </a>
                </motion.li>
              ))}
              <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
                <a
                  href={data.hero.resumeLink}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-3 mt-2 rounded-xl
                             bg-gradient-to-r from-cyan-500/15 to-purple-500/15
                             border border-cyan-400/30 text-cyan-400 font-mono text-sm"
                >
                  Download Resume ↗
                </a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}