/**
 * MainLayout.jsx
 * Wraps all sections. Adds ambient background orbs and scroll-to-top button.
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowUp } from "react-icons/fi";

export default function MainLayout({ children }) {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-navy-900">
      {/* Ambient orbs */}
      <div className="orb orb-1" />
      <div className="orb orb-2" />

      {/* Page content */}
      <main className="relative z-10">
        {children}
      </main>

      {/* Scroll to top button */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1  }}
            exit={{   opacity: 0, scale: 0.8 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-8 right-8 z-50 w-11 h-11 rounded-xl glass border border-cyan-400/30
                       text-cyan-400 flex items-center justify-center
                       hover:bg-cyan-400/10 hover:scale-110 transition-all duration-200
                       shadow-lg shadow-black/30"
            aria-label="Scroll to top"
          >
            <FiArrowUp size={18} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}