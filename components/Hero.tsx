"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { heroOpenTo, heroStats, siteConfig } from "@/lib/data";
import Button from "@/components/ui/Button";
import CountUp from "@/components/ui/CountUp";

const roles = [
  "DATA SCIENTIST",
  "AI ENTHUSIAST",
  "SDE",
  "ML ENGINEER",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setRoleIndex((i) => (i + 1) % roles.length);
    }, 2200);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative bg-bg overflow-hidden">

      {/* Floating "Hi" badge */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 280, damping: 14, delay: 1 }}
        className="absolute top-24 right-6 md:right-16 z-10 bg-accent text-white text-sm font-medium px-5 py-2.5 rounded-full shadow-lg"
      >
        Hi 👋
      </motion.div>

      <div className="container-main pt-28 pb-0">

        {/* Availability badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-2.5 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-green animate-pulse flex-shrink-0" />
          <span className="text-fg-muted text-sm font-medium tracking-wide">
            {siteConfig.name} — available for work
          </span>
        </motion.div>

        {/* Split hero heading */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-2 md:gap-6 overflow-hidden">

          {/* Left: static "LIKHITH M" */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="flex-1"
          >
            <h1
              className="display-heading text-fg leading-none"
              style={{ fontSize: "clamp(4rem, 11vw, 12rem)" }}
            >
              LIKHITH M
            </h1>
          </motion.div>

          {/* Right: cycling role */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="flex-1 md:text-right overflow-hidden"
            style={{ minHeight: "clamp(4rem, 11vw, 12rem)" }}
          >
            <AnimatePresence mode="wait">
              <motion.h1
                key={roleIndex}
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: "-100%", opacity: 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="display-heading leading-none"
                style={{
                  fontSize: "clamp(4rem, 11vw, 12rem)",
                  color: roleIndex === 0 ? "#5e67e6" : "#303030",
                }}
              >
                {roles[roleIndex]}
              </motion.h1>
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.55 }}
          className="h-px bg-border origin-left mt-3"
        />

        {/* Bottom info row */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
          className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 mt-8 pb-0"
        >
          {/* Left: description + CTAs */}
          <div className="max-w-md">
            <p className="text-fg-muted text-base leading-relaxed mb-6">
              {siteConfig.description}
            </p>
            <div className="flex flex-wrap gap-3">
              <Button variant="primary" href="/projects">
                View Work
              </Button>
              <Button variant="outline" href={siteConfig.resume}>
                Résumé ↗
              </Button>
            </div>
          </div>

          {/* Right: stats */}
          <div className="flex gap-8 md:gap-12 pb-8">
            {heroStats.map((stat, i) => (
              <div key={i} className="flex flex-col">
                <span
                  className="font-bold text-3xl text-fg"
                  style={{ fontFamily: "var(--font-antonio)" }}
                >
                  <CountUp end={stat.value} suffix={stat.suffix} />
                </span>
                <span className="text-xs text-fg-muted mt-1 leading-snug max-w-[80px]">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom roles marquee strip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="bg-bg-alt border-t border-border mt-10 overflow-hidden"
      >
        <div className="flex py-5 marquee-outer">
          <div className="flex items-center marquee-inner">
            {/* 6 copies for a truly seamless infinite loop */}
            {Array.from({ length: 6 }).map((_, copy) => (
              <div key={copy} className="flex items-center gap-12 px-6 shrink-0">
                {heroOpenTo.map((tag) => (
                  <span
                    key={tag}
                    className="whitespace-nowrap text-sm font-medium text-fg-muted tracking-widest uppercase flex items-center gap-3"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block flex-shrink-0" />
                    {tag}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
