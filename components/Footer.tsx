import Link from "next/link";
import { Mail } from "lucide-react";
import { navItems, siteConfig, socials } from "@/lib/data";

const GithubIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-bg-alt border-t border-border">
      <div className="container-main section-pad">
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="font-bold text-xl text-fg no-underline uppercase"
              style={{ fontFamily: "var(--font-antonio)", letterSpacing: "-0.02em" }}
            >
              {siteConfig.name}
            </Link>
            <p className="text-sm text-fg-muted mt-3 max-w-xs leading-relaxed">
              {siteConfig.tagline}
            </p>
            <div className="mt-4 inline-flex items-center gap-2 text-xs text-fg-muted">
              <span className="w-1.5 h-1.5 rounded-full bg-green animate-pulse" />
              available for work
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="eyebrow mb-4">Navigation</p>
            <ul className="flex flex-col gap-2">
              {navItems.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-fg-muted hover:text-fg transition-colors no-underline"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="eyebrow mb-4">Get In Touch</p>
            <div className="flex gap-3 mb-4">
              <a
                href={socials.github}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-fg-muted hover:text-accent hover:border-accent transition-colors"
                aria-label="GitHub"
              >
                <GithubIcon />
              </a>
              <a
                href={socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-fg-muted hover:text-accent hover:border-accent transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedInIcon />
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-fg-muted hover:text-accent hover:border-accent transition-colors"
                aria-label="Email"
              >
                <Mail size={15} />
              </a>
            </div>
            <p className="text-sm text-fg-muted">{siteConfig.email}</p>
          </div>
        </div>

        {/* Bottom */}
        <div className="h-divider mt-10 mb-6" />
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2 text-xs text-fg-muted">
          <span>© 2025 Likhith M. All rights reserved.</span>
          <span>Built with Next.js &amp; Framer Motion</span>
        </div>
      </div>
    </footer>
  );
}
