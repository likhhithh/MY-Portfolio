"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div key={pathname}>
        {/* Cream wipe panel */}
        <motion.div
          className="fixed inset-0 z-[9998] bg-bg pointer-events-none"
          initial={{ y: "100%" }}
          animate={{ y: "-100%" }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        />
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
