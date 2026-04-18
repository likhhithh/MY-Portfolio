"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navItems, siteConfig } from "@/lib/data";
import Button from "@/components/ui/Button";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-bg/95 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container-main flex items-center justify-between h-16">
        {/* Logo */}
        <Link
          href="/"
          className="font-display font-bold text-lg text-fg no-underline tracking-tight uppercase"
          style={{ fontFamily: "var(--font-antonio)", letterSpacing: "-0.02em" }}
        >
          {siteConfig.name}
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map(({ label, href }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`px-4 py-2 rounded-full text-sm transition-colors duration-200 no-underline ${
                  active
                    ? "font-medium text-fg bg-bg-alt"
                    : "text-fg-muted hover:text-fg"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        {/* Right */}
        <div className="flex items-center gap-3">
          <Button variant="primary" href="mailto:malothulikhith@email.com" size="sm">
            Hire Me
          </Button>
          <button
            className="md:hidden p-2 text-fg"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-bg border-b border-border"
          >
            <nav className="container-main flex flex-col gap-1 py-4">
              {navItems.map(({ label, href }) => {
                const active = pathname === href;
                return (
                  <Link
                    key={href}
                    href={href}
                    className={`px-4 py-3 rounded-xl text-sm transition-colors no-underline ${
                      active
                        ? "font-medium text-fg bg-bg-alt"
                        : "text-fg-muted hover:text-fg"
                    }`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {label}
                  </Link>
                );
              })}
              <div className="pt-2">
                <Button variant="primary" href="mailto:malothulikhith@email.com" size="sm">
                  Hire Me
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
