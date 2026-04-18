"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hovered, setHovered] = useState(false);

  const springConfig = { mass: 0.5, stiffness: 150, damping: 18 };
  const ringX = useSpring(-100, springConfig);
  const ringY = useSpring(-100, springConfig);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      ringX.set(e.clientX);
      ringY.set(e.clientY);
    };

    const onEnter = (e: Event) => {
      const el = e.target as HTMLElement;
      if (el.closest("a, button, [data-cursor-scale]")) setHovered(true);
    };
    const onLeave = () => setHovered(false);

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseenter", onEnter, true);
    document.addEventListener("mouseleave", onLeave, true);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseenter", onEnter, true);
      document.removeEventListener("mouseleave", onLeave, true);
    };
  }, [ringX, ringY]);

  return (
    <div className="hidden md:block">
      {/* Dot */}
      <motion.div
        className="fixed z-[9999] pointer-events-none rounded-full bg-fg"
        style={{
          width: 8,
          height: 8,
          x: pos.x - 4,
          y: pos.y - 4,
        }}
        animate={{ scale: hovered ? 1.5 : 1 }}
        transition={{ duration: 0.15 }}
      />
      {/* Ring */}
      <motion.div
        className="fixed z-[9999] pointer-events-none rounded-full border border-fg/40"
        style={{
          width: 36,
          height: 36,
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{ scale: hovered ? 1.8 : 1 }}
        transition={{ duration: 0.2 }}
      />
    </div>
  );
}
