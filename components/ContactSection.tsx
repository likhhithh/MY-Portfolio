"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight, ExternalLink, Mail, MapPin } from "lucide-react";
import { siteConfig, socials } from "@/lib/data";
import Button from "@/components/ui/Button";

const GithubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const socialLinks = [
  { icon: <GithubIcon />, href: socials.github, label: "GitHub", sub: "@likhhithh" },
  { icon: <LinkedInIcon />, href: socials.linkedin, label: "LinkedIn", sub: "likhithmalothu01" },
  { icon: <Mail size={16} />, href: `mailto:${siteConfig.email}`, label: "Email", sub: siteConfig.email },
  { icon: <ExternalLink size={16} />, href: "https://www.samachr.in", label: "Samachr AI", sub: "www.samachr.in · Live" },
];

export default function ContactSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="bg-bg border-t border-border section-pad">
      <div ref={ref} className="container-main">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12"
        >
          <p className="eyebrow mb-4">Contact</p>
          <h2 className="section-heading text-fg">LET&apos;S WORK<br />TOGETHER</h2>
          <p className="text-fg-muted text-base max-w-xl mt-4 leading-relaxed">
            Open to internships, research collaborations, and interesting builds. I usually respond within 24 hours.
          </p>
        </motion.div>

        {/* Two columns */}
        <div className="grid md:grid-cols-2 gap-8 items-start">

          {/* Left — main CTA card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="card-base bg-accent p-8 md:p-10"
          >
            <div className="inline-flex items-center gap-2 border border-white/20 bg-white/10 text-white text-xs rounded-full px-4 py-2 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-green animate-pulse flex-shrink-0" />
              Available · Open to Work
            </div>
            <h3
              className="font-bold text-2xl text-white uppercase mb-3"
              style={{ fontFamily: "var(--font-antonio)", letterSpacing: "-0.02em" }}
            >
              GOT AN IDEA OR OPPORTUNITY?
            </h3>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Whether it&apos;s a project idea, internship, or just a conversation about AI — I&apos;m all ears.
            </p>
            <Button variant="white" href={`mailto:${siteConfig.email}`}>
              Say Hello →
            </Button>
            <div className="mt-6 flex items-center gap-2 text-xs text-white/60">
              <MapPin size={11} />
              Based in India · Remote-friendly
            </div>
          </motion.div>

          {/* Right — social cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="flex flex-col gap-3"
          >
            {socialLinks.map(({ icon, href, label, sub }, i) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noreferrer"
                initial={{ opacity: 0, y: 12 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                className="card-base bg-card px-5 py-4 flex items-center gap-4 group no-underline hover:border-accent transition-colors duration-200"
              >
                <div className="w-9 h-9 rounded-full bg-bg-alt flex items-center justify-center text-fg flex-shrink-0 group-hover:bg-accent group-hover:text-white transition-colors duration-200">
                  {icon}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-sm text-fg">{label}</p>
                  <p className="text-xs text-fg-muted mt-0.5 truncate">{sub}</p>
                </div>
                <ArrowUpRight size={14} className="text-fg-muted group-hover:text-accent transition-colors flex-shrink-0" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
