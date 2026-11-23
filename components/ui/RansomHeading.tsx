"use client";

import { motion } from "framer-motion";
import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";

/* Cut-out "ransom note" heading — the site-wide heading style. */

const SWATCHES: { bg: string; fg: string }[] = [
  { bg: "#1d1d1f", fg: "#f3ede1" },
  { bg: "#b8336a", fg: "#f6efe4" },
  { bg: "#f6efe4", fg: "#1d1d1f" },
  { bg: "#f0c93b", fg: "#1d1d1f" },
  { bg: "#9cbde0", fg: "#24324a" },
  { bg: "#2b2d42", fg: "#f6efe4" },
  { bg: "#e4843d", fg: "#1d1d1f" },
  { bg: "#f2b8c6", fg: "#7d3c98" },
  { bg: "#7d3c98", fg: "#f6efe4" },
];

const FONTS: CSSProperties[] = [
  { fontFamily: "var(--font-abril), serif" },
  { fontFamily: "var(--font-playfair), serif", fontStyle: "italic", fontWeight: 900 },
  { fontFamily: "var(--font-special), monospace" },
  { fontFamily: "var(--font-alfa), serif" },
  { fontFamily: "var(--font-antonio), sans-serif", fontWeight: 700 },
];

const ROTS = [-6, 4, -3, 5, -4, 2, -5, 3];
const TORN =
  "polygon(0 4%, 12% 0, 30% 3%, 52% 0, 74% 4%, 100% 0, 97% 26%, 100% 52%, 96% 78%, 100% 100%, 78% 96%, 55% 100%, 33% 96%, 10% 100%, 0 97%, 3% 70%, 0 45%, 4% 22%)";

type Props = {
  /** Use "\n" for line breaks. */
  text: string;
  as?: "h1" | "h2";
  className?: string;
  size?: string;
  align?: "start" | "center";
  /** Shifts the colour/font sequence so neighbouring headings differ. */
  seed?: number;
};

export default function RansomHeading({
  text,
  as = "h2",
  className,
  size = "clamp(1.5rem, 3.6vw, 2.4rem)",
  align = "start",
  seed = 0,
}: Props) {
  const Tag = as;
  const lines = text.toUpperCase().split("\n");
  let n = seed;

  return (
    <Tag className={cn("relative", className)}>
      <span className="sr-only">{text.replace(/\n/g, " ")}</span>
      <span
        aria-hidden
        className={cn("flex flex-col gap-[0.18em]", align === "center" ? "items-center" : "items-start")}
        style={{ fontSize: size }}
      >
        {lines.map((line, li) => (
          <span key={li} className={cn("flex flex-wrap gap-x-[0.4em] gap-y-[0.18em]", align === "center" && "justify-center")}>
            {line.split(" ").filter(Boolean).map((word, wi) => (
              <span key={wi} className="inline-flex items-end gap-[0.05em] whitespace-nowrap">
                {Array.from(word).map((ch, ci) => {
                  const k = n++;
                  if (!/[A-Z0-9]/.test(ch)) {
                    return (
                      <span key={ci} className="leading-none" style={{ ...FONTS[0], color: "#1d1d1f" }}>
                        {ch}
                      </span>
                    );
                  }
                  const sw = SWATCHES[(k * 5 + 3) % SWATCHES.length];
                  const font = FONTS[(k * 3 + 1) % FONTS.length];
                  const rot = ROTS[(k * 7) % ROTS.length];
                  const torn = k % 4 === 2;
                  return (
                    <motion.span
                      key={ci}
                      initial={{ opacity: 0, y: -18, rotate: rot * 3 }}
                      whileInView={{ opacity: 1, y: (k % 3) - 1, rotate: rot }}
                      viewport={{ once: true, margin: "-40px" }}
                      transition={{ type: "spring", stiffness: 320, damping: 16, delay: Math.min(ci * 0.04 + wi * 0.06, 0.6) }}
                      whileHover={{ rotate: -rot, scale: 1.12, transition: { duration: 0.15 } }}
                      className="inline-flex items-center justify-center leading-none select-none"
                      style={{
                        ...font,
                        background: sw.bg,
                        color: sw.fg,
                        minWidth: "0.92em",
                        padding: "0.1em 0.14em 0.06em",
                        clipPath: torn ? TORN : undefined,
                        borderRadius: torn ? 0 : 2,
                        boxShadow: torn ? undefined : "0 2px 3px rgba(0,0,0,0.16)",
                      }}
                    >
                      {ch}
                    </motion.span>
                  );
                })}
              </span>
            ))}
          </span>
        ))}
      </span>
    </Tag>
  );
}
