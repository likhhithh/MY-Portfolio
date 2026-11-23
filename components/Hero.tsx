"use client";

import { useCallback, useEffect, useRef, useState, type CSSProperties, type RefObject } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { CornerDownLeft, Mic, ScanSearch } from "lucide-react";
import { heroOpenTo, heroStats, siteConfig } from "@/lib/data";
import Button from "@/components/ui/Button";
import CountUp from "@/components/ui/CountUp";
import Image from "next/image";

/* ─── Content ─────────────────────────────────────────────────────────────── */

const PHRASES = [
  "Tech Oriented",
  "AI / ML Engineer",
  "Electrical Engineer",
  "Building agentic RAG",
  "Multi-agent LLM systems",
  "Data Scientist",
];

const CHIPS = ["projects", "experience", "skills", "contact", "resume"];

const SECTIONS: Record<string, string> = {
  about: "about",
  me: "about",
  skills: "skills",
  tools: "skills",
  stack: "skills",
  experience: "experience",
  work: "experience",
  education: "experience",
  projects: "projects",
  project: "projects",
  faq: "faq",
  blog: "blog",
  blogs: "blog",
  articles: "blog",
  contact: "contact",
};

type Reply = { text: string; tone: "ok" | "info" | "err" };

function runCommand(raw: string): Reply {
  const cmd = raw.trim().toLowerCase().replace(/^(cd|open|goto|go to|show)\s+/, "");
  if (!cmd) return { text: "type something first ✎", tone: "info" };

  const section = SECTIONS[cmd];
  if (section) {
    document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
    return { text: `→ flipping to ${section}…`, tone: "ok" };
  }
  if (["resume", "cv", "résumé"].includes(cmd)) {
    window.open(siteConfig.resume, "_blank", "noopener");
    return { text: "→ opening résumé in a new tab", tone: "ok" };
  }
  if (["hire", "hire me", "email", "mail", "sudo hire likhith", "sudo hire"].includes(cmd)) {
    window.location.href = `mailto:${siteConfig.email}`;
    return { text: cmd.startsWith("sudo") ? "permission granted ✦ opening mail…" : "→ opening your mail app ✉", tone: "ok" };
  }
  if (["hi", "hello", "hey", "yo"].includes(cmd)) return { text: "hey there 👋 try “projects”", tone: "info" };
  if (cmd === "help" || cmd === "ls") return { text: "try: about · skills · experience · projects · blog · contact · resume", tone: "info" };
  if (cmd === "whoami") return { text: `a curious visitor, looking at ${siteConfig.fullName}'s work`, tone: "info" };
  if (cmd.startsWith("sudo")) return { text: "nice try 😄 (psst: sudo hire likhith)", tone: "info" };
  if (cmd.includes("coffee")) return { text: "☕ brewing… let's talk over one — type “contact”", tone: "info" };
  return { text: `“${raw.trim()}” not found — try “help”`, tone: "err" };
}

/* ─── Ransom-note letters ─────────────────────────────────────────────────── */

type FontKey = "abril" | "playfair" | "special" | "alfa" | "antonio";
type Tile = { ch: string; bg: string; fg: string; font: FontKey; rot: number; torn?: boolean; y?: number };

const FONT: Record<FontKey, CSSProperties> = {
  abril: { fontFamily: "var(--font-abril), serif" },
  playfair: { fontFamily: "var(--font-playfair), serif", fontStyle: "italic", fontWeight: 900 },
  special: { fontFamily: "var(--font-special), monospace" },
  alfa: { fontFamily: "var(--font-alfa), serif" },
  antonio: { fontFamily: "var(--font-antonio), sans-serif", fontWeight: 700 },
};

const TORN = "polygon(0 4%, 12% 0, 30% 3%, 52% 0, 74% 4%, 100% 0, 97% 26%, 100% 52%, 96% 78%, 100% 100%, 78% 96%, 55% 100%, 33% 96%, 10% 100%, 0 97%, 3% 70%, 0 45%, 4% 22%)";

const TOP: Tile[] = [
  { ch: "L", bg: "#b8336a", fg: "#f6efe4", font: "playfair", rot: -7 },
  { ch: "I", bg: "#f0c93b", fg: "#1d1d1f", font: "alfa", rot: 4, y: -3 },
  { ch: "K", bg: "#9cbde0", fg: "#24324a", font: "playfair", rot: -3, torn: true },
  { ch: "H", bg: "#1d1d1f", fg: "#f3ede1", font: "abril", rot: 5, y: 2 },
  { ch: "I", bg: "#f6efe4", fg: "#b8336a", font: "special", rot: -4 },
  { ch: "T", bg: "#e4843d", fg: "#1d1d1f", font: "alfa", rot: 3, y: -2 },
  { ch: "H", bg: "#7d3c98", fg: "#f6efe4", font: "playfair", rot: -6, torn: true },
];

const BOTTOM: Tile[] = [
  { ch: "M", bg: "#f6efe4", fg: "#1d1d1f", font: "abril", rot: -5, torn: true },
  { ch: "A", bg: "#1d1d1f", fg: "#f3ede1", font: "special", rot: 4, y: 3 },
  { ch: "L", bg: "#f2b8c6", fg: "#7d3c98", font: "playfair", rot: -2 },
  { ch: "O", bg: "#b8336a", fg: "#f6efe4", font: "playfair", rot: 6, y: -3 },
  { ch: "T", bg: "#2b2d42", fg: "#f6efe4", font: "alfa", rot: -4 },
  { ch: "H", bg: "#e4843d", fg: "#7d3c98", font: "abril", rot: 3, y: 2, torn: true },
  { ch: "U", bg: "#f3ede1", fg: "#1d1d1f", font: "antonio", rot: -6, y: -2 },
];

function RansomWord({
  tiles,
  size,
  delay,
  bounds,
  resetKey,
}: {
  tiles: Tile[];
  size: string;
  delay: number;
  bounds: RefObject<HTMLDivElement | null>;
  resetKey: number;
}) {
  return (
    <div className="flex items-end justify-center" style={{ fontSize: size, gap: "0.06em" }}>
      {tiles.map((t, i) => (
        <motion.span
          key={`${i}-${resetKey}`}
          drag
          dragConstraints={bounds}
          dragElastic={0.15}
          dragMomentum={false}
          initial={{ opacity: 0, y: -40, rotate: t.rot * 4, scale: 0.6 }}
          animate={{ opacity: 1, y: t.y ?? 0, x: 0, rotate: t.rot, scale: 1 }}
          transition={{ type: "spring", stiffness: 320, damping: 16, delay: resetKey ? i * 0.03 : delay + i * 0.07 }}
          whileHover={{ scale: 1.1, transition: { duration: 0.15 } }}
          whileDrag={{ scale: 1.2, rotate: 0, zIndex: 40, boxShadow: "0 12px 20px rgba(0,0,0,0.25)" }}
          className="relative inline-flex items-center justify-center leading-none select-none cursor-grab active:cursor-grabbing touch-none"
          style={{
            ...FONT[t.font],
            background: t.bg,
            color: t.fg,
            minWidth: "0.95em",
            padding: "0.1em 0.16em 0.06em",
            clipPath: t.torn ? TORN : undefined,
            borderRadius: t.torn ? 0 : 2,
            boxShadow: t.torn ? undefined : "0 2px 3px rgba(0,0,0,0.18)",
            filter: t.torn ? "drop-shadow(0 2px 2px rgba(0,0,0,0.2))" : undefined,
          }}
        >
          {t.ch}
        </motion.span>
      ))}
    </div>
  );
}

/* ─── Sticky notes (draggable) ────────────────────────────────────────────── */

const NOTES = [
  { text: "shipped ✦ agentic\nRAG used daily\n@ APTRANSCO", bg: "#f7e08a", rot: -5, pos: { left: "5%", top: "34%" } },
  { text: "based in India\nopen to remote ✈", bg: "#f6c6d2", rot: 4, pos: { right: "5%", top: "22%" } },
  { text: "RAG · LLMs ·\nQLoRA · MCP", bg: "#c9dcef", rot: -3, pos: { right: "7%", top: "58%" } },
];

function StickyNotes({ bounds }: { bounds: RefObject<HTMLDivElement | null> }) {
  return (
    <>
      {NOTES.map((n, i) => (
        <motion.div
          key={i}
          drag
          dragConstraints={bounds}
          dragElastic={0.1}
          dragMomentum={false}
          initial={{ opacity: 0, scale: 0.7, rotate: n.rot * 3 }}
          animate={{ opacity: 1, scale: 1, rotate: n.rot }}
          transition={{ type: "spring", stiffness: 220, damping: 14, delay: 1.4 + i * 0.15 }}
          whileHover={{ rotate: 0, scale: 1.04 }}
          whileDrag={{ scale: 1.08, rotate: 0, zIndex: 40 }}
          className="taped absolute z-20 hidden lg:block w-[150px] px-4 pt-5 pb-4 cursor-grab active:cursor-grabbing select-none touch-none"
          style={{
            ...n.pos,
            background: n.bg,
            boxShadow: "0 1px 1px rgba(0,0,0,0.08), 0 12px 18px -10px rgba(60,40,20,0.35)",
            fontFamily: "var(--font-caveat), cursive",
            fontSize: 21,
            lineHeight: 1.05,
            color: "#2a2620",
            whiteSpace: "pre-line",
          }}
        >
          {n.text}
        </motion.div>
      ))}
    </>
  );
}

/* ─── Keyboard ────────────────────────────────────────────────────────────── */

type Key = [id: string, units: number];
const ROWS: Key[][] = [
  [["`", 1], ["1", 1], ["2", 1], ["3", 1], ["4", 1], ["5", 1], ["6", 1], ["7", 1], ["8", 1], ["9", 1], ["0", 1], ["-", 1], ["=", 1], ["backspace", 1.9]],
  [["tab", 1.45], ["q", 1], ["w", 1], ["e", 1], ["r", 1], ["t", 1], ["y", 1], ["u", 1], ["i", 1], ["o", 1], ["p", 1], ["[", 1], ["]", 1], ["\\", 1.45]],
  [["caps", 1.8], ["a", 1], ["s", 1], ["d", 1], ["f", 1], ["g", 1], ["h", 1], ["j", 1], ["k", 1], ["l", 1], [";", 1], ["'", 1], ["enter", 2.1]],
  [["shift-l", 2.35], ["z", 1], ["x", 1], ["c", 1], ["v", 1], ["b", 1], ["n", 1], ["m", 1], [",", 1], [".", 1], ["/", 1], ["shift-r", 2.6]],
  [["fn", 1], ["ctrl", 1], ["opt", 1], ["cmd-l", 1.25], ["space", 5.6], ["cmd-r", 1.25], ["opt-r", 1], ["left", 1], ["updown", 1], ["right", 1]],
];

// Touch-typing finger map. Finger index: 0 pinky, 1 ring, 2 middle, 3 index, 4 thumb.
const FINGERS: { hand: "L" | "R"; finger: number; keys: string }[] = [
  { hand: "L", finger: 0, keys: "`1qaz" },
  { hand: "L", finger: 1, keys: "2wsx" },
  { hand: "L", finger: 2, keys: "3edc" },
  { hand: "L", finger: 3, keys: "45rtfgvb" },
  { hand: "R", finger: 3, keys: "67yuhjnm" },
  { hand: "R", finger: 2, keys: "8ik," },
  { hand: "R", finger: 1, keys: "9ol." },
  { hand: "R", finger: 0, keys: "0p;/-=[]'\\" },
];

const SPECIAL_FINGERS: Record<string, { hand: "L" | "R"; finger: number }> = {
  "shift-l": { hand: "L", finger: 0 },
  tab: { hand: "L", finger: 0 },
  caps: { hand: "L", finger: 0 },
  backspace: { hand: "R", finger: 0 },
  enter: { hand: "R", finger: 0 },
  "shift-r": { hand: "R", finger: 0 },
};

type Active = { L: number | null; R: number | null };

function fingersFor(keys: string[]): Active {
  const a: Active = { L: null, R: null };
  for (const k of keys) {
    if (k === "space") { a.L = 4; a.R = 4; continue; }
    const s = SPECIAL_FINGERS[k];
    if (s) { a[s.hand] = s.finger; continue; }
    const f = FINGERS.find((x) => x.keys.includes(k));
    if (f) a[f.hand] = f.finger;
  }
  return a;
}

const SHIFTED: Record<string, string> = {
  "~": "`", "!": "1", "@": "2", "#": "3", $: "4", "%": "5", "^": "6", "&": "7", "*": "8", "(": "9", ")": "0",
  _: "-", "+": "=", "{": "[", "}": "]", "|": "\\", ":": ";", '"': "'", "<": ",", ">": ".", "?": "/",
};

const NAMED_KEYS: Record<string, string> = {
  " ": "space", Backspace: "backspace", Enter: "enter", Shift: "shift-l", Tab: "tab", CapsLock: "caps",
  Meta: "cmd-l", Alt: "opt", Control: "ctrl", ArrowLeft: "left", ArrowRight: "right", ArrowUp: "updown", ArrowDown: "updown",
};

/** Physical key id for a character or KeyboardEvent.key. */
function keyId(k: string): string | null {
  if (NAMED_KEYS[k]) return NAMED_KEYS[k];
  if (k.length !== 1) return null;
  return SHIFTED[k] ?? k.toLowerCase();
}

function keysFor(ch: string): string[] {
  const id = keyId(ch);
  if (!id) return [];
  const needsShift = SHIFTED[ch] !== undefined || (ch !== ch.toLowerCase());
  return needsShift ? [id, "shift-l"] : [id];
}

function Keyboard({ pressed }: { pressed: string[] }) {
  return (
    <div
      className="relative w-full rounded-[14px] p-[2.4%] flex flex-col gap-[4px]"
      style={{
        background: "linear-gradient(180deg, #f6f2ea 0%, #ece6da 100%)",
        border: "1px solid #d6cebd",
        boxShadow: "0 1px 0 #fff inset, 0 14px 30px -12px rgba(70,60,40,0.35), 0 2px 0 #d6cebd",
      }}
    >
      {ROWS.map((row, ri) => (
        <div key={ri} className="flex gap-[4px]">
          {row.map(([id, u]) => {
            const down = pressed.includes(id);
            return (
              <div
                key={id}
                className="rounded-[4px]"
                style={{
                  flex: `${u} 1 0`,
                  height: "clamp(14px, 3.6vw, 21px)",
                  background: down ? "#f0c93b" : "#fbf8f2",
                  border: `1px solid ${down ? "#d9ac1f" : "#d9d1c1"}`,
                  boxShadow: down ? "0 0 0 #cfc6b4" : "0 2px 0 #d3cab8",
                  transform: down ? "translateY(2px)" : "none",
                  transition: "transform 60ms, box-shadow 60ms, background 120ms",
                }}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
}

/* ─── Hands (realistic back-of-hand view; left hand drawn, right is mirrored) ─ */

type FingerSpec = { cx: number; base: number; len: number; bw: number; tw: number; rot: number };

// Finger index: 0 pinky, 1 ring, 2 middle, 3 index, 4 thumb.
const FINGER_SPECS: FingerSpec[] = [
  { cx: 44, base: 182, len: 80, bw: 28, tw: 23, rot: -14 },
  { cx: 77, base: 166, len: 104, bw: 32, tw: 27, rot: -6 },
  { cx: 111, base: 160, len: 114, bw: 33, tw: 28, rot: 0 },
  { cx: 145, base: 167, len: 102, bw: 32, tw: 27, rot: 7 },
  { cx: 168, base: 262, len: 88, bw: 38, tw: 30, rot: 38 },
];

function fingerPath({ cx, base, len, bw, tw }: FingerSpec) {
  const tip = base - len;
  const l0 = cx - bw / 2, r0 = cx + bw / 2;
  const l1 = cx - tw / 2, r1 = cx + tw / 2;
  const tipCurve = tw * 0.62;
  return [
    `M${l0} ${base + 20}`,
    `L${l0} ${base}`,
    // slight bulge at the middle knuckle
    `C${l0 - 1.5} ${base - len * 0.4} ${l1 - 1.5} ${base - len * 0.62} ${l1} ${tip + tipCurve}`,
    `C${l1} ${tip + 2} ${r1} ${tip + 2} ${r1} ${tip + tipCurve}`,
    `C${r1 + 1.5} ${base - len * 0.62} ${r0 + 1.5} ${base - len * 0.4} ${r0} ${base}`,
    `L${r0} ${base + 20} Z`,
  ].join(" ");
}

function Finger({ f, down, uid }: { f: FingerSpec; down: boolean; uid: string }) {
  const tip = f.base - f.len;
  const nailW = f.tw * 0.68;
  const nailH = Math.min(f.len * 0.2, 26);
  const crease = (y: number, w: number) =>
    `M${f.cx - w / 2} ${y} q${w / 2} ${2.5} ${w} 0`;
  return (
    <g
      style={{
        transform: down ? "translateY(8px) scaleY(0.95)" : "none",
        transformBox: "fill-box",
        transformOrigin: "50% 100%",
        transition: "transform 70ms ease-out",
      }}
    >
      <g transform={`rotate(${f.rot} ${f.cx} ${f.base})`}>
        <path d={fingerPath(f)} fill={`url(#${uid}-finger)`} />
        {/* soft side occlusion */}
        <path d={fingerPath(f)} fill="none" stroke="#b86d4f" strokeOpacity={0.22} strokeWidth={1.2} />
        {/* knuckle creases */}
        <path d={crease(f.base - f.len * 0.36, f.tw * 0.55)} stroke="#b86d4f" strokeOpacity={0.35} strokeWidth={1.1} fill="none" strokeLinecap="round" />
        <path d={crease(f.base - f.len * 0.36 + 4, f.tw * 0.4)} stroke="#b86d4f" strokeOpacity={0.22} strokeWidth={1} fill="none" strokeLinecap="round" />
        <path d={crease(f.base - f.len * 0.66, f.tw * 0.45)} stroke="#b86d4f" strokeOpacity={0.28} strokeWidth={1} fill="none" strokeLinecap="round" />
        {/* knuckle highlight */}
        <ellipse cx={f.cx} cy={f.base - f.len * 0.4} rx={f.tw * 0.28} ry={6} fill="#fff3ea" opacity={0.28} />
        {/* nail */}
        <rect x={f.cx - nailW / 2} y={tip + 5} width={nailW} height={nailH} rx={nailW * 0.42} fill={`url(#${uid}-nail)`} stroke="#d4917a" strokeOpacity={0.45} strokeWidth={0.8} />
        <path d={`M${f.cx - nailW * 0.34} ${tip + 5 + nailH - 2.5} q${nailW * 0.34} 3 ${nailW * 0.68} 0`} stroke="#c47c63" strokeOpacity={0.45} strokeWidth={1} fill="none" />
        <ellipse cx={f.cx - nailW * 0.14} cy={tip + 5 + nailH * 0.38} rx={nailW * 0.12} ry={nailH * 0.26} fill="#fff" opacity={0.55} />
      </g>
    </g>
  );
}

const BACK_OF_HAND =
  "M24 212 C20 180 34 158 60 152 C92 145 132 144 160 152 C182 158 192 180 190 212 C188 248 178 276 168 306 L164 380 L50 380 L46 306 C34 276 26 246 24 212 Z";

function Hand({ side, active }: { side: "L" | "R"; active: number | null }) {
  const uid = `hand-${side}`;
  const fingers = FINGER_SPECS.slice(0, 4);
  const thumb = FINGER_SPECS[4];
  return (
    <svg
      viewBox="0 0 220 380"
      className="absolute pointer-events-none"
      style={{
        width: "36%",
        top: "6%",
        [side === "L" ? "left" : "right"]: "10%",
        transform: side === "R" ? "scaleX(-1)" : undefined,
        filter: "drop-shadow(0 14px 14px rgba(70,40,20,0.28)) drop-shadow(0 2px 3px rgba(70,40,20,0.2))",
      }}
      aria-hidden
    >
      <defs>
        {/* cylinder shading across each finger */}
        <linearGradient id={`${uid}-finger`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#d98d69" />
          <stop offset="0.18" stopColor="#eeb08d" />
          <stop offset="0.5" stopColor="#f8c9a9" />
          <stop offset="0.82" stopColor="#efb391" />
          <stop offset="1" stopColor="#d3855f" />
        </linearGradient>
        <linearGradient id={`${uid}-nail`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#fbe1d6" />
          <stop offset="0.7" stopColor="#f1bfae" />
          <stop offset="1" stopColor="#e8a993" />
        </linearGradient>
        <radialGradient id={`${uid}-back`} cx="0.45" cy="0.32" r="0.75">
          <stop offset="0" stopColor="#fad2b5" />
          <stop offset="0.45" stopColor="#f2b996" />
          <stop offset="0.85" stopColor="#e19c78" />
          <stop offset="1" stopColor="#cf8460" />
        </radialGradient>
        <linearGradient id={`${uid}-wrist`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0.55" stopColor="#000" stopOpacity="0" />
          <stop offset="1" stopColor="#7a4128" stopOpacity="0.22" />
        </linearGradient>
      </defs>

      {fingers.map((f, i) => (
        <Finger key={i} f={f} down={active === i} uid={uid} />
      ))}

      {/* back of hand */}
      <path d={BACK_OF_HAND} fill={`url(#${uid}-back)`} />
      <path d={BACK_OF_HAND} fill={`url(#${uid}-wrist)`} />

      {/* ambient occlusion where fingers meet the hand */}
      {fingers.map((f, i) => (
        <path
          key={`ao-${i}`}
          d={`M${f.cx - f.bw / 2 - 1} ${f.base - 2} q${f.bw / 2 + 1} -7 ${f.bw + 2} 0`}
          stroke="#b86d4f"
          strokeOpacity={0.25}
          strokeWidth={2}
          fill="none"
          strokeLinecap="round"
        />
      ))}

      {/* knuckles */}
      {fingers.map((f, i) => (
        <ellipse key={`k-${i}`} cx={f.cx + (f.rot > 0 ? 2 : f.rot < 0 ? -2 : 0)} cy={f.base + 6} rx={f.bw * 0.34} ry={7} fill="#fde3cf" opacity={0.55} />
      ))}

      {/* extensor tendons fanning toward the wrist */}
      {fingers.map((f, i) => (
        <path
          key={`t-${i}`}
          d={`M${f.cx} ${f.base + 14} Q${f.cx + (106 - f.cx) * 0.25} ${f.base + 70} ${106 + (f.cx - 106) * 0.35} 300`}
          stroke="#fde3cf"
          strokeOpacity={0.18}
          strokeWidth={5}
          fill="none"
          strokeLinecap="round"
        />
      ))}

      {/* thumb lies over the side of the hand */}
      <Finger f={thumb} down={active === 4} uid={uid} />

      {/* a faint vein */}
      <path d="M150 230 C140 252 128 262 120 290 C116 304 118 318 116 340" stroke="#c99a9a" strokeOpacity={0.22} strokeWidth={2.5} fill="none" strokeLinecap="round" />
    </svg>
  );
}

/* ─── Handwritten hint ────────────────────────────────────────────────────── */

function Hint({ children, className, rot = -4, delay = 2 }: { children: React.ReactNode; className?: string; rot?: number; delay?: number }) {
  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay, duration: 0.6 }}
      aria-hidden
      className={`absolute hidden md:block pointer-events-none whitespace-nowrap text-[#8a5a44] ${className ?? ""}`}
      style={{ fontFamily: "var(--font-caveat), cursive", fontSize: 22, transform: `rotate(${rot}deg)` }}
    >
      {children}
    </motion.span>
  );
}

/* ─── Hero ────────────────────────────────────────────────────────────────── */

export default function Hero() {
  const reduce = useReducedMotion();
  const panelRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [text, setText] = useState("");
  const [pressed, setPressed] = useState<string[]>([]);
  const [mode, setMode] = useState<"demo" | "user">("demo");
  const [reply, setReply] = useState<Reply | null>(null);
  const [collage, setCollage] = useState(0);

  // Each scripted run gets a token; bumping it cancels whatever was running.
  const tokenRef = useRef(0);
  const timersRef = useRef<number[]>([]);

  const cancelScript = useCallback(() => {
    tokenRef.current++;
    timersRef.current.forEach(clearTimeout);
    timersRef.current = [];
  }, []);

  const wait = useCallback(
    (ms: number, token: number) =>
      new Promise<boolean>((res) => {
        timersRef.current.push(window.setTimeout(() => res(tokenRef.current === token), ms));
      }),
    [],
  );

  const tap = useCallback(
    async (keys: string[], hold: number, token: number) => {
      setPressed(keys);
      const alive = await wait(hold, token);
      setPressed([]);
      return alive;
    },
    [wait],
  );

  const typeOut = useCallback(
    async (str: string, token: number) => {
      for (const ch of str) {
        if (!(await tap(keysFor(ch), 75, token))) return false;
        setText((t) => t + ch);
        if (!(await wait(45 + Math.random() * 110, token))) return false;
      }
      return true;
    },
    [tap, wait],
  );

  const eraseAll = useCallback(
    async (len: number, token: number) => {
      for (let n = len; n > 0; n--) {
        if (!(await tap(["backspace"], 30, token))) return false;
        setText((t) => t.slice(0, -1));
        if (!(await wait(28, token))) return false;
      }
      return true;
    },
    [tap, wait],
  );

  // Ambient demo loop
  useEffect(() => {
    if (reduce || mode !== "demo") return;
    const token = ++tokenRef.current;
    (async () => {
      if (!(await wait(900, token))) return;
      for (let i = 0; ; i++) {
        const phrase = PHRASES[i % PHRASES.length];
        if (!(await typeOut(phrase, token))) return;
        if (!(await wait(1700, token))) return;
        if (!(await eraseAll(phrase.length, token))) return;
        if (!(await wait(450, token))) return;
      }
    })();
    // Only cancel if the demo is still the active script (a chip may have taken over).
    return () => {
      if (tokenRef.current === token) cancelScript();
    };
  }, [mode, reduce, wait, typeOut, eraseAll, cancelScript]);

  // Fade the reply bubble after a while
  useEffect(() => {
    if (!reply) return;
    const t = window.setTimeout(() => setReply(null), 4200);
    return () => clearTimeout(t);
  }, [reply]);

  const takeOver = () => {
    if (mode === "user") return;
    cancelScript();
    setMode("user");
    setText("");
    setPressed([]);
  };

  const execute = (value: string) => {
    setReply(runCommand(value));
    setText("");
  };

  // Click a chip: the hands type the command, then it runs.
  const runChip = async (cmd: string) => {
    cancelScript();
    setMode("user");
    setPressed([]);
    setText("");
    const token = tokenRef.current;
    if (!(await typeOut(cmd, token))) return;
    if (!(await tap(["enter"], 110, token))) return;
    execute(cmd);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const id = keyId(e.key);
    const shift = e.shiftKey && id !== "shift-l" ? ["shift-l"] : [];
    if (id) setPressed((p) => Array.from(new Set([...p, id, ...shift])));
    if (e.key === "Enter") {
      e.preventDefault();
      execute(text);
    } else if (e.key === "Escape") {
      inputRef.current?.blur();
    }
  };

  const onKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const id = keyId(e.key);
    setPressed((p) => p.filter((k) => k !== id && (e.shiftKey || k !== "shift-l")));
  };

  const onBlur = () => {
    setPressed([]);
    if (!text) setMode("demo");
  };

  const active = fingersFor(pressed);
  const shown = reduce && mode === "demo" ? PHRASES[0] : text;

  return (
    <section className="relative bg-bg overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-3 md:px-6 pt-20 md:pt-24">
        {/* Dark desk frame */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          {/* Paper panel */}
          <div
            ref={panelRef}
            className="paper-panel relative rounded-[12px] overflow-hidden flex flex-col items-center"
            style={{ minHeight: "clamp(580px, 80vh, 680px)" }}
          >
            {/* Voxel room background */}
            <Image
              src="/hero-room-v2.jpg"
              alt=""
              fill
              priority
              sizes="(max-width: 1400px) 100vw, 1400px"
              className="object-cover object-[42%_center] pointer-events-none select-none"
            />
            {/* Warm wash so the name, search bar and keyboard stay readable */}
            <div
              className="absolute inset-0 pointer-events-none"
              aria-hidden
              style={{
                background:
                  "radial-gradient(ellipse 46% 38% at 50% 27%, rgba(243,237,225,0.92) 0%, rgba(243,237,225,0.6) 55%, transparent 100%)," +
                  "radial-gradient(ellipse 40% 35% at 50% 100%, rgba(243,237,225,0.55) 0%, transparent 100%)," +
                  "linear-gradient(180deg, rgba(30,20,10,0.15) 0%, transparent 30%, transparent 70%, rgba(30,20,10,0.25) 100%)",
              }}
            />

            <StickyNotes bounds={panelRef} />

            {/* Name — every letter is a draggable paper cut-out */}
            <div className="relative z-30 mt-12 md:mt-14">
              <h1 className="flex flex-col items-center gap-2 md:gap-3">
                <span className="sr-only">{siteConfig.fullName}</span>
                <span aria-hidden>
                  <RansomWord tiles={TOP} size="clamp(24px, 4.2vw, 42px)" delay={0.2} bounds={panelRef} resetKey={collage} />
                </span>
                <span aria-hidden>
                  <RansomWord tiles={BOTTOM} size="clamp(30px, 5.4vw, 54px)" delay={0.55} bounds={panelRef} resetKey={collage} />
                </span>
              </h1>
              <Hint className="-left-36 top-2" rot={-8}>drag the letters ↷</Hint>
              <motion.button
                type="button"
                onClick={() => setCollage((c) => c + 1)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.2 }}
                className="absolute -right-28 bottom-0 hidden md:block text-[#8a5a44] hover:text-accent transition-colors"
                style={{ fontFamily: "var(--font-caveat), cursive", fontSize: 20, transform: "rotate(5deg)" }}
              >
                ↺ tidy up
              </motion.button>
            </div>

            {/* Search bar — click it and type */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.1 }}
              className="relative z-20 mt-8 md:mt-10 w-[min(420px,86%)]"
            >
              <label
                className="h-[36px] bg-[#fbf9f4] rounded-[3px] flex items-center px-3 gap-2 cursor-text transition-shadow"
                style={{
                  boxShadow:
                    mode === "user"
                      ? "0 0 0 2px #1d1d1f, 4px 4px 0 2px #f0c93b"
                      : "0 1px 2px rgba(0,0,0,0.08), 0 6px 16px -8px rgba(0,0,0,0.15)",
                }}
              >
                <span className="sr-only">Type a command, e.g. projects, and press Enter</span>
                <span className="relative flex-1 h-full flex items-center overflow-hidden">
                  <input
                    ref={inputRef}
                    value={shown}
                    onChange={(e) => setText(e.target.value.slice(0, 40))}
                    onFocus={takeOver}
                    onBlur={onBlur}
                    onKeyDown={onKeyDown}
                    onKeyUp={onKeyUp}
                    spellCheck={false}
                    autoComplete="off"
                    placeholder={mode === "user" ? "try “projects” or “help”…" : ""}
                    className="w-full bg-transparent outline-none text-[13px] text-[#2a2a2a] placeholder:text-[#a8a296]"
                    style={{ fontFamily: "var(--font-plex), monospace", caretColor: "#b8336a", outline: "none" }}
                  />
                  {mode === "demo" && (
                    <span
                      className="pointer-events-none absolute top-1/2 -translate-y-1/2 text-[13px] text-transparent whitespace-pre"
                      style={{ fontFamily: "var(--font-plex), monospace" }}
                      aria-hidden
                    >
                      {shown}
                      <span className="caret-blink inline-block w-[1px] h-[14px] bg-[#2a2a2a] align-middle ml-[1px]" />
                    </span>
                  )}
                </span>
                {mode === "user" ? (
                  <CornerDownLeft size={13} className="text-[#9a968d]" aria-hidden />
                ) : (
                  <>
                    <Mic size={13} className="text-[#9a968d]" aria-hidden />
                    <ScanSearch size={13} className="text-[#9a968d]" aria-hidden />
                  </>
                )}
              </label>
              <Hint className="-right-40 -top-1" rot={6} delay={2.5}>← click &amp; type!</Hint>

              {/* Reply bubble / command chips */}
              <div className="mt-3 min-h-[30px] flex justify-center">
                <AnimatePresence mode="wait">
                  {reply ? (
                    <motion.p
                      key={reply.text}
                      initial={{ opacity: 0, y: -6, rotate: -2 }}
                      animate={{ opacity: 1, y: 0, rotate: -1 }}
                      exit={{ opacity: 0, y: -6 }}
                      className="px-3 py-1 text-[12px] rounded-[2px]"
                      style={{
                        fontFamily: "var(--font-plex), monospace",
                        background: reply.tone === "err" ? "#f6c6d2" : reply.tone === "ok" ? "#f7e08a" : "#fbf9f4",
                        color: "#2a2620",
                        boxShadow: "0 1px 2px rgba(0,0,0,0.12)",
                      }}
                      role="status"
                    >
                      {reply.text}
                    </motion.p>
                  ) : (
                    <motion.div
                      key="chips"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1, transition: { delay: reply === null && mode === "demo" ? 1.6 : 0.2 } }}
                      exit={{ opacity: 0, transition: { duration: 0.12 } }}
                      className="flex flex-wrap justify-center gap-1.5"
                    >
                      {CHIPS.map((c, i) => (
                        <button
                          key={c}
                          type="button"
                          onClick={() => runChip(c)}
                          className="px-2 py-[3px] text-[11px] bg-[#fbf9f4]/80 border border-[#d2cbbb] rounded-[2px] text-[#5b564c] hover:bg-mustard hover:text-fg hover:border-fg transition-colors"
                          style={{ fontFamily: "var(--font-plex), monospace", transform: `rotate(${[-2, 1.5, -1, 2, -1.5][i]}deg)` }}
                        >
                          {c}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Keyboard + hands */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.9 }}
              className="relative z-10 mt-auto -mb-[38px] md:-mb-[44px] pt-4 w-[min(430px,90%)]"
            >
              <Keyboard pressed={pressed} />
              <Hand side="L" active={active.L} />
              <Hand side="R" active={active.R} />
            </motion.div>
          </div>
        </motion.div>

        {/* Info row */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
          className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 mt-10 px-1 md:px-2"
        >
          <div className="max-w-md">
            <div className="flex items-center gap-2.5 mb-4">
              <span className="w-2 h-2 rounded-full bg-green animate-pulse flex-shrink-0" />
              <span className="text-fg-muted text-sm font-medium tracking-wide">
                {siteConfig.name} — available for work
              </span>
            </div>
            <p className="text-fg-muted text-base leading-relaxed mb-6">{siteConfig.description}</p>
            <div className="flex flex-wrap gap-3">
              <Button variant="primary" href="/projects">View Work</Button>
              <Button variant="outline" href={siteConfig.resume}>Résumé ↗</Button>
            </div>
          </div>
          <div className="flex gap-8 md:gap-12 pb-8">
            {heroStats.map((stat, i) => (
              <div key={i} className="flex flex-col">
                <span className="font-bold text-3xl text-fg" style={{ fontFamily: "var(--font-antonio)" }}>
                  <CountUp end={stat.value} suffix={stat.suffix} />
                </span>
                <span className="text-xs text-fg-muted mt-1 leading-snug max-w-[80px]">{stat.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Roles marquee strip */}
      <div className="relative bg-bg-alt border-t border-border mt-6 overflow-hidden">
        <div className="flex py-5 marquee-outer">
          <div className="flex items-center marquee-inner">
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
      </div>
    </section>
  );
}
