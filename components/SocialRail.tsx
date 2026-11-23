"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { siteConfig, socials } from "@/lib/data";
import { GithubIcon, InstagramIcon, LinkedInIcon } from "@/components/ui/SocialIcons";

const LINKS = [
  { label: "Instagram", handle: "@likkhithhh", href: socials.instagram, icon: <InstagramIcon size={18} />, bg: "#f2b8c6", rot: -6 },
  { label: "LinkedIn", handle: "likhithmalothu01", href: socials.linkedin, icon: <LinkedInIcon size={17} />, bg: "#9cbde0", rot: 5 },
  { label: "GitHub", handle: "@likhhithh", href: socials.github, icon: <GithubIcon size={18} />, bg: "#f0c93b", rot: -4 },
  { label: "Email", handle: siteConfig.email, href: `mailto:${siteConfig.email}`, icon: <Mail size={17} />, bg: "#f6efe4", rot: 6 },
];

/** Fixed side rail of paper cut-out social links (desktop). */
export default function SocialRail() {
  return (
    <motion.nav
      aria-label="Social profiles"
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed left-3 xl:left-5 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-center gap-3"
    >
      <span
        className="text-[#8a5a44] mb-1 select-none"
        style={{ fontFamily: "var(--font-caveat), cursive", fontSize: 19, writingMode: "vertical-rl", transform: "rotate(180deg)" }}
        aria-hidden
      >
        find me ✦
      </span>
      {LINKS.map((l) => (
        <a
          key={l.label}
          href={l.href}
          target={l.href.startsWith("mailto") ? undefined : "_blank"}
          rel="noreferrer"
          aria-label={`${l.label} — ${l.handle}`}
          className="group relative block"
        >
          <span
            className="relative z-10 w-11 h-11 flex items-center justify-center text-[#1d1d1f] border-[1.5px] border-[#1d1d1f] rounded-[4px] transition-all duration-200 ease-out group-hover:-translate-y-0.5 group-hover:!rotate-0 group-hover:shadow-[4px_4px_0_#1d1d1f] group-focus-visible:!rotate-0"
            style={{ background: l.bg, transform: `rotate(${l.rot}deg)`, boxShadow: "2px 2px 0 #1d1d1f" }}
          >
            {l.icon}
          </span>
          {/* paper label that slides out on hover */}
          <span
            className="pointer-events-none absolute left-full top-1/2 ml-3 -translate-y-1/2 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 group-focus-visible:opacity-100 group-focus-visible:translate-x-0 transition-all duration-200 ease-out whitespace-nowrap"
          >
            <span
              className="block px-3 py-1.5 bg-[#fbf9f4] border border-[#d2cbbb] text-[12px] text-[#1d1d1f] -rotate-2"
              style={{ fontFamily: "var(--font-plex), monospace", boxShadow: "0 6px 14px -8px rgba(0,0,0,0.35)" }}
            >
              <span className="text-accent">{l.label}</span> · {l.handle} ↗
            </span>
          </span>
        </a>
      ))}
      <span className="w-px h-16 bg-[#1d1d1f]/30 mt-1" aria-hidden />
    </motion.nav>
  );
}
