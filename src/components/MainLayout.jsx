/**
 * MainLayout.jsx
 * Enhanced with: scroll progress bar, custom cursor (dot + lagging ring),
 * animated ambient orbs, dot-grid background, scroll-to-top button.
 */

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { FiArrowUp } from "react-icons/fi";

export default function MainLayout({ children }) {
  const [showTop,   setShowTop]   = useState(false);
  const [dotPos,    setDotPos]    = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);

  // Framer scroll progress → spring-smoothed scaleX for progress bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 300, damping: 40 });

  // Ring position tracked manually with rAF for lag effect
  const ringRef    = useRef(null);
  const ringTarget = useRef({ x: -100, y: -100 });
  const ringCur    = useRef({ x: -100, y: -100 });

  // Show scroll-to-top after 600px
  useEffect(() => {
    const fn = () => setShowTop(window.scrollY > 600);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  // Custom cursor setup
  useEffect(() => {
    const onMove = (e) => {
      setDotPos({ x: e.clientX, y: e.clientY });
      ringTarget.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", onMove);

    // RAF loop — ring lags behind dot for elastic feel
    let raf;
    const loop = () => {
      ringCur.current.x += (ringTarget.current.x - ringCur.current.x) * 0.1;
      ringCur.current.y += (ringTarget.current.y - ringCur.current.y) * 0.1;
      if (ringRef.current) {
        ringRef.current.style.left = `${ringCur.current.x}px`;
        ringRef.current.style.top  = `${ringCur.current.y}px`;
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  // Cursor expand on hover over interactive elements
  useEffect(() => {
    const on  = () => setIsHovered(true);
    const off = () => setIsHovered(false);
    const els = document.querySelectorAll("a, button");
    els.forEach((el) => { el.addEventListener("mouseenter", on); el.addEventListener("mouseleave", off); });
    return () => els.forEach((el) => { el.removeEventListener("mouseenter", on); el.removeEventListener("mouseleave", off); });
  });

  return (
    <div className="relative min-h-screen" style={{ background: "#080d1a" }}>

      {/* ── Custom Cursor Dot ── */}
      <div
        className="cursor-dot"
        style={{ left: dotPos.x, top: dotPos.y }}
      />
      {/* ── Custom Cursor Ring (lags behind) ── */}
      <div
        ref={ringRef}
        className={`cursor-ring ${isHovered ? "hovered" : ""}`}
      />

      {/* ── Scroll Progress Bar ── */}
      <motion.div
        className="fixed top-0 left-0 right-0 z-[100] h-[2px] origin-left"
        style={{
          scaleX,
          background: "linear-gradient(90deg, #22d3ee, #a78bfa, #f472b6)",
        }}
      />

      {/* ── Ambient Orbs ── */}
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />

      {/* ── Dot Grid ── */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: "radial-gradient(rgba(148,163,184,0.12) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* ── Page Sections ── */}
      <main className="relative z-10">{children}</main>

      {/* ── Scroll-to-top ── */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.6, y: 20 }}
            animate={{ opacity: 1, scale: 1,   y: 0  }}
            exit={{   opacity: 0, scale: 0.6, y: 20  }}
            whileHover={{ scale: 1.15, rotate: -10 }}
            whileTap={{  scale: 0.9 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-2xl glass-strong
                       border border-cyan-400/40 text-cyan-400 flex items-center justify-center
                       glow-cyan"
            aria-label="Back to top"
          >
            <FiArrowUp size={18} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}