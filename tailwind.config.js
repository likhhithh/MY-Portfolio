/** @type {import('tailwindcss').Config} */
export default {
  // Tell Tailwind which files to scan for class names
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Custom color palette matching our dark developer theme
      colors: {
        navy: {
          900: "#0f172a",
          800: "#1e293b",
          700: "#334155",
        },
        accent: {
          cyan:    "#22d3ee",
          purple:  "#a78bfa",
          pink:    "#f472b6",
        },
      },
      // Custom fonts — loaded via index.html or index.css
      fontFamily: {
        display: ["'Syne'", "sans-serif"],
        mono:    ["'JetBrains Mono'", "monospace"],
        body:    ["'DM Sans'", "sans-serif"],
      },
      // Custom keyframe animations
      keyframes: {
        "fade-up": {
          "0%":   { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "glow-pulse": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(34,211,238,0.3)" },
          "50%":      { boxShadow: "0 0 40px rgba(34,211,238,0.6)" },
        },
      },
      animation: {
        "fade-up":    "fade-up 0.6s ease-out forwards",
        "glow-pulse": "glow-pulse 3s ease-in-out infinite",
      },
      // Background gradient shorthand
      backgroundImage: {
        "hero-gradient": "linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%)",
        "card-gradient": "linear-gradient(135deg, rgba(30,41,59,0.8), rgba(15,23,42,0.9))",
      },
    },
  },
  plugins: [],
};