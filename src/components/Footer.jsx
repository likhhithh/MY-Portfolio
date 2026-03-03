/**
 * Footer.jsx — Enhanced
 * New: animated gradient top border, staggered link entrance, heartbeat animation,
 * floating mini particles, availability status badge.
 */

import { motion } from "framer-motion";
import { FiHeart, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import data from "../data/portfolioData.json";

const FOOTER_LINKS = [
  { label: "About",      href: "#about"      },
  { label: "Skills",     href: "#skills"     },
  { label: "Projects",   href: "#projects"   },
  { label: "Experience", href: "#experience" },
  { label: "Contact",    href: "#contact"    },
];

export default function Footer() {
  const { hero, meta, contact } = data;

  const scrollTo = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-slate-800/40 overflow-hidden">

      {/* ── Animated gradient top line ── */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-[1px]"
        style={{
          background: "linear-gradient(90deg, transparent, #22d3ee, #a78bfa, #f472b6, transparent)",
        }}
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
      />

      {/* ── Floating mini particles ── */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-cyan-400/30 pointer-events-none"
          style={{ left: `${15 + i * 17}%`, bottom: "20px" }}
          animate={{ y: [0, -20, 0], opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 3 + i * 0.5, repeat: Infinity, delay: i * 0.6 }}
        />
      ))}

      <div className="max-w-6xl mx-auto px-6 py-12">

        {/* ── Top row ── */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-10">

          {/* Brand + status */}
          <div className="text-center md:text-left">
            <motion.p
              className="font-display font-extrabold text-2xl shimmer-text mb-1"
              animate={{ backgroundPosition: ["0%", "200%"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              {hero.name}
            </motion.p>
            <p className="font-mono text-slate-600 text-xs mb-3">{hero.title}</p>

            {/* Availability badge */}
            <motion.span
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass
                         border border-green-400/20 text-green-400 text-xs font-mono"
              animate={{ borderColor: ["rgba(74,222,128,0.2)", "rgba(74,222,128,0.5)", "rgba(74,222,128,0.2)"] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <motion.span
                className="w-1.5 h-1.5 rounded-full bg-green-400"
                animate={{ scale: [1, 1.4, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              Available for opportunities
            </motion.span>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap justify-center gap-2">
            {FOOTER_LINKS.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollTo(e, link.href)}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                whileHover={{ y: -2, color: "#22d3ee" }}
                className="font-mono text-xs text-slate-500 px-3 py-2 rounded-xl
                           hover:glass hover:border hover:border-slate-700/40 transition-all duration-200"
              >
                {link.label}
              </motion.a>
            ))}
          </nav>

          {/* Social icons */}
          <div className="flex gap-3">
            {[
              { href: contact.github,            icon: <FiGithub   size={16} />, label: "GitHub"   },
              { href: contact.linkedin,          icon: <FiLinkedin size={16} />, label: "LinkedIn" },
              { href: `mailto:${contact.email}`, icon: <FiMail     size={16} />, label: "Email"    },
            ].filter((s) => s.href).map(({ href, icon, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                whileHover={{ scale: 1.15, y: -3 }}
                whileTap={{ scale: 0.9 }}
                className="w-9 h-9 rounded-xl glass border border-slate-700/40 flex items-center justify-center
                           text-slate-500 hover:text-cyan-400 hover:border-cyan-400/30 transition-all duration-200"
              >
                {icon}
              </motion.a>
            ))}
          </div>
        </div>

        {/* ── Divider ── */}
        <div className="h-px bg-gradient-to-r from-transparent via-slate-700/40 to-transparent mb-8" />

        {/* ── Bottom row ── */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-mono text-slate-700 text-xs">© {meta.copyright}</p>
          <p className="flex items-center gap-1.5 font-mono text-slate-700 text-xs">
            Built with{" "}
            <motion.span
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <FiHeart size={10} className="text-pink-500" />
            </motion.span>
            {" "}using React + Tailwind + Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}