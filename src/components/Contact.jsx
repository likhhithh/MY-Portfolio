/**
 * Contact.jsx — Enhanced
 * New: rotating gradient border on card, floating social icons with stagger,
 * animated email button glow, location ping animation.
 */

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiTwitter, FiMapPin, FiSend } from "react-icons/fi";
import data from "../data/portfolioData.json";

export default function Contact() {
  const { contact, hero } = data;
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const socials = [
    contact.github   && { icon: <FiGithub   size={20} />, href: contact.github,            label: "GitHub",   color: "hover:text-white  hover:border-slate-400  hover:bg-slate-800/50" },
    contact.linkedin && { icon: <FiLinkedin size={20} />, href: contact.linkedin,          label: "LinkedIn", color: "hover:text-blue-400 hover:border-blue-400/50 hover:bg-blue-400/5"  },
    contact.twitter  && { icon: <FiTwitter  size={20} />, href: contact.twitter,           label: "Twitter",  color: "hover:text-sky-400 hover:border-sky-400/50 hover:bg-sky-400/5"    },
    contact.email    && { icon: <FiMail     size={20} />, href: `mailto:${contact.email}`, label: "Email",    color: "hover:text-cyan-400 hover:border-cyan-400/50 hover:bg-cyan-400/5" },
  ].filter(Boolean);

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="section-divider max-w-4xl mx-auto mb-16" />

      {/* Background radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px]
                        rounded-full opacity-10"
          style={{ background: "radial-gradient(ellipse, #22d3ee, transparent 70%)" }}
        />
      </div>

      <div className="max-w-3xl mx-auto text-center relative" ref={ref}>

        {/* ── Heading ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent to-cyan-400/30" />
            <span className="font-mono text-cyan-400 text-sm tracking-[0.3em] uppercase">05.</span>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent to-cyan-400/30" />
          </div>
          <h2 className="font-display font-extrabold text-5xl md:text-6xl">
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <p className="font-body text-slate-400 text-lg mt-4 max-w-xl mx-auto">
            I'm open to internships, collaborations, and cool projects.
            Let's build something amazing together.
          </p>
        </motion.div>

        {/* ── Main Card with spinning gradient border ── */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative mb-10"
        >
          {/* Spinning border (outer glow layer) */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-[1px] rounded-3xl opacity-50"
            style={{
              background: "conic-gradient(from 0deg, #22d3ee, #a78bfa, #f472b6, #22d3ee)",
              filter: "blur(3px)",
            }}
          />

          {/* Card body */}
          <div className="relative glass-strong rounded-3xl border border-slate-700/20 p-10">
            <p className="font-body text-slate-300 text-lg leading-relaxed mb-8">
              Whether you have a{" "}
              <span className="text-cyan-400 font-semibold">project idea</span>,
              an <span className="text-purple-400 font-semibold">opportunity</span>, or just want to{" "}
              <span className="text-pink-400 font-semibold">connect</span> — feel free to reach out.
              I try to respond within 24 hours!
            </p>

            {/* Email CTA */}
            {contact.email && (
              <motion.a
                href={`mailto:${contact.email}`}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 40px rgba(34,211,238,0.5), 0 0 80px rgba(167,139,250,0.2)",
                }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-3 px-10 py-4 rounded-2xl font-display font-bold
                           text-white tracking-wide relative overflow-hidden group"
                style={{ background: "linear-gradient(135deg, #22d3ee, #a78bfa, #f472b6)" }}
              >
                {/* Shimmer sweep */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent
                                 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <FiSend size={18} className="relative" />
                <span className="relative">Say Hello</span>
              </motion.a>
            )}

            {/* Location */}
            {contact.location && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.7 }}
                className="mt-6 flex items-center justify-center gap-2 text-slate-500 text-sm font-mono"
              >
                <motion.span
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <FiMapPin size={14} className="text-cyan-400/60" />
                </motion.span>
                {contact.location}
              </motion.p>
            )}
          </div>
        </motion.div>

        {/* ── Social Links ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="flex items-center justify-center gap-3 flex-wrap"
        >
          {socials.map(({ icon, href, label, color }, i) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ delay: 0.6 + i * 0.1, type: "spring", stiffness: 200 }}
              whileHover={{ y: -4, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-2.5 px-5 py-3 rounded-2xl glass border border-slate-700/40
                          text-slate-400 text-sm font-mono transition-all duration-300 ${color}`}
            >
              {icon}
              <span>{label}</span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}