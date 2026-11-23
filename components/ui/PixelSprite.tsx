import type { CSSProperties } from "react";

/* ─── 3D pixel (voxel) sprites drawn from character grids ─────────────────── */

const PALETTE: Record<string, string> = {
  k: "#2b2d42", // ink outline
  w: "#f6efe4", // cream
  d: "#d2cbbb", // warm grey
  g: "#9cbde0", // sky / screen
  s: "#d8e6f3", // screen highlight
  m: "#b8336a", // magenta
  y: "#f0c93b", // mustard
  o: "#e4843d", // orange
  p: "#7d3c98", // plum
  r: "#e05a47", // red
  n: "#2f9e5b", // green
  e: "#b9b3a8", // steam / silver
};

function compose(w: number, h: number, layers: { x: number; y: number; rows: string[] }[]): string[] {
  const grid = Array.from({ length: h }, () => Array(w).fill("."));
  for (const { x, y, rows } of layers)
    rows.forEach((row, ry) =>
      Array.from(row).forEach((c, rx) => {
        if (c !== "." && grid[y + ry]?.[x + rx] !== undefined) grid[y + ry][x + rx] = c;
      }),
    );
  return grid.map((r) => r.join(""));
}

const WHEEL = ["..kkk..", ".k...k.", "k..e..k", "k.eke.k", "k..e..k", ".k...k.", "..kkk.."];

export const SPRITES = {
  computer: [
    "..kkkkkkkkkkkk..",
    ".kwwwwwwwwwwwwk.",
    ".kwkkkkkkkkkkwk.",
    ".kwkggggggggkwk.",
    ".kwkgsggggggkwk.",
    ".kwkgsgmmgggkwk.",
    ".kwkggggggggkwk.",
    ".kwkggggggygkwk.",
    ".kwkkkkkkkkkkwk.",
    ".kwwwwwwwwwwwwk.",
    ".kwwwwwwwmmwwwk.",
    ".kwwwwwwwwwwwwk.",
    "..kkkkkkkkkkkk..",
    "...kwwwwwwwwk...",
    "..kddddddddddk..",
    "..kkkkkkkkkkkk..",
  ],
  bike: compose(22, 13, [
    {
      x: 0,
      y: 0,
      rows: [
        "...................kk.",
        "..................k...",
        "..kkkk...........k....",
        "..kpppkkmmmmmmk..k....",
        "...kkkkmmmmmmmmkkk....",
        "......kkkkkkkkkk.k....",
        ".....keeeeekkk...k....",
        "....keeeek.......k....",
        "...kkkk..........k....",
      ],
    },
    { x: 0, y: 6, rows: WHEEL },
    { x: 15, y: 6, rows: WHEEL },
  ]),
  controller: [
    "..kkkkkkkkkk..",
    ".kwwwwwwwwwwk.",
    "kwwkwwwwwwmwwk",
    "kwkkkwwwwgwywk",
    "kwwkwwwwwwnwwk",
    "kwwwwkkkkwwwwk",
    ".kwwk....kwwk.",
    "..kk......kk..",
  ],
  mug: [
    ".e.e.e.....",
    "..e.e......",
    "kkkkkkkk...",
    "kyyyyyyykk.",
    "kyyyyyyyk.k",
    "kyymmyyyk.k",
    "kyyyyyyykk.",
    "kyyyyyyyk..",
    ".kkkkkkk...",
    "kkkkkkkkk..",
  ],
  floppy: [
    "kkkkkkkkkkk.",
    "kppeeeeeppkk",
    "kppeekeepppk",
    "kppeekeepppk",
    "kppeeeeepppk",
    "kppppppppppk",
    "kpwwwwwwwwpk",
    "kpwmmmmmmwpk",
    "kpwwwwwwwwpk",
    "kpwmmmmwwwpk",
    "kpwwwwwwwwpk",
    "kkkkkkkkkkkk",
  ],
  rocket: [
    "....k....",
    "...kmk...",
    "..kwwwk..",
    "..kwgwk..",
    "..kgsgk..",
    "..kwgwk..",
    "..kwwwk..",
    "..kwwwk..",
    ".kkwwwkk.",
    "kmkwwwkmk",
    "kmkkkkkmk",
    "k..oyo..k",
    "....o....",
    "...y.y...",
  ],
  heart: [
    ".kk...kk.",
    "kmmk.kmmk",
    "kmwmkmmmk",
    "kmmmmmmmk",
    ".kmmmmmk.",
    "..kmmmk..",
    "...kmk...",
    "....k....",
  ],
  star: [
    "....k....",
    "...kyk...",
    "kkkkyykkk",
    "kyyyyyyyk",
    ".kyyyyyk.",
    "..kyyyk..",
    ".kyk.kyk.",
    ".kk...kk.",
  ],
} satisfies Record<string, string[]>;

export type SpriteName = keyof typeof SPRITES;

function shade(hex: string, amt: number) {
  const n = parseInt(hex.slice(1), 16);
  const ch = (v: number) => Math.max(0, Math.min(255, Math.round(amt > 0 ? v + (255 - v) * amt : v * (1 + amt))));
  const r = ch(n >> 16), g = ch((n >> 8) & 255), b = ch(n & 255);
  return `#${((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1)}`;
}

const D = 0.45; // extrusion depth (up-right)

/** A pixel-art grid rendered as extruded voxels, giving a "3D pixel" look. */
export function PixelSprite({ name, size = 120, style, className }: { name: SpriteName; size?: number; style?: CSSProperties; className?: string }) {
  const rows = SPRITES[name];
  const h = rows.length;
  const w = Math.max(...rows.map((r) => r.length));
  const at = (x: number, y: number) => (rows[y]?.[x] ?? ".") !== ".";
  const faces: React.ReactNode[] = [];

  // Paint bottom→top, left→right so nearer faces overlap correctly.
  for (let y = h - 1; y >= 0; y--) {
    for (let x = 0; x < w; x++) {
      const c = rows[y][x];
      if (!c || c === ".") continue;
      const base = PALETTE[c] ?? "#000";
      const top = shade(base, 0.35);
      const side = shade(base, -0.3);
      if (!at(x + 1, y))
        faces.push(<polygon key={`r${x}-${y}`} points={`${x + 1},${y} ${x + 1 + D},${y - D} ${x + 1 + D},${y + 1 - D} ${x + 1},${y + 1}`} fill={side} />);
      if (!at(x, y - 1))
        faces.push(<polygon key={`t${x}-${y}`} points={`${x},${y} ${x + D},${y - D} ${x + 1 + D},${y - D} ${x + 1},${y}`} fill={top} />);
      faces.push(<rect key={`f${x}-${y}`} x={x} y={y} width={1.02} height={1.02} fill={base} />);
    }
  }

  return (
    <svg
      viewBox={`-0.2 ${-D - 0.2} ${w + D + 0.4} ${h + D + 0.4}`}
      width={size}
      height={(size * (h + D + 0.4)) / (w + D + 0.4)}
      className={className}
      style={{ shapeRendering: "crispEdges", ...style }}
      aria-hidden
    >
      {faces}
    </svg>
  );
}

/* ─── Floating decoration presets ─────────────────────────────────────────── */

type Placement = { name: SpriteName; size: number; rot: number; pos: CSSProperties; delay: number };

const DECOR: Record<string, Placement[]> = {
  about: [
    { name: "computer", size: 110, rot: -8, pos: { right: "3%", top: "8%" }, delay: 0 },
    { name: "heart", size: 54, rot: 10, pos: { left: "2%", bottom: "10%" }, delay: 1.5 },
  ],
  skills: [
    { name: "controller", size: 104, rot: 8, pos: { right: "4%", top: "6%" }, delay: 0.5 },
    { name: "star", size: 52, rot: -12, pos: { right: "12%", bottom: "8%" }, delay: 2 },
  ],
  experience: [
    { name: "floppy", size: 84, rot: -10, pos: { right: "3%", top: "5%" }, delay: 0.8 },
    { name: "mug", size: 74, rot: 6, pos: { left: "1.5%", bottom: "6%" }, delay: 2.2 },
  ],
  projects: [
    { name: "rocket", size: 70, rot: 14, pos: { right: "4%", top: "4%" }, delay: 0.2 },
    { name: "bike", size: 150, rot: -4, pos: { left: "2%", bottom: "3%" }, delay: 1.2 },
  ],
  faq: [{ name: "star", size: 56, rot: 10, pos: { right: "5%", top: "10%" }, delay: 0.6 }],
  blog: [
    { name: "mug", size: 76, rot: -8, pos: { right: "4%", top: "8%" }, delay: 1 },
    { name: "floppy", size: 64, rot: 12, pos: { left: "2%", bottom: "6%" }, delay: 2.4 },
  ],
  contact: [
    { name: "bike", size: 160, rot: 3, pos: { right: "3%", top: "6%" }, delay: 0.4 },
    { name: "heart", size: 50, rot: -10, pos: { left: "2%", bottom: "8%" }, delay: 1.8 },
  ],
};

/** Decorative floating 3D pixel sprites for a section (large screens only). */
export function PixelDecor({ variant, opacity = 0.85 }: { variant: keyof typeof DECOR | string; opacity?: number }) {
  const items = DECOR[variant] ?? [];
  return (
    <div className="pixel-decor pointer-events-none absolute inset-0 hidden lg:block -z-10" aria-hidden>
      {items.map((p, i) => (
        <div key={i} className="absolute pixel-float" style={{ ...p.pos, animationDelay: `${p.delay}s`, opacity }}>
          <PixelSprite name={p.name} size={p.size} style={{ transform: `rotate(${p.rot}deg)`, filter: "drop-shadow(0 10px 10px rgba(60,45,25,0.18))" }} />
        </div>
      ))}
    </div>
  );
}
