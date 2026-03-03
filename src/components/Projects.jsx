/**
 * Projects.jsx — Enhanced
 * New: 3D tilt on hover, shimmer sweep effect, staggered entrance,
 * animated top border gradient, tech tag pop animation, floating card effect.
 */

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FiGithub, FiExternalLink, FiCode, FiStar } from "react-icons/fi";
import data from "../data/portfolioData.json";

// 3D tilt card wrapper
function TiltCard({ children, className }) {
  const ref = useRef(null);
  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect();
    const x = ((e.clientX - r.left)  / r.width  - 0.5) * 14;
    const y = ((e.clientY - r.top)   / r.height - 0.5) * -14;
    ref.current.style.transform = `perspective(800px) rotateX(${y}deg) rotateY(${x}deg) translateZ(10px)`;
  };
  const onLeave = () => {
    ref.current.style.transform = "perspective(800px) rotateX(0) rotateY(0) translateZ(0)";
  };
  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={className}
      style={{ transition: "transform 0.25s ease", transformStyle: "preserve-3d" }}
    >
      {children}
    </div>
  );
}

export default function Projects() {
  const { projects } = data;
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="section-padding relative">
      <div className="section-divider max-w-6xl mx-auto mb-16" />
      <div className="max-w-6xl mx-auto" ref={ref}>

        {/* ── Heading ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="font-mono text-cyan-400 text-sm tracking-[0.3em] uppercase">03.</span>
            <div className="flex-1 h-px bg-gradient-to-r from-cyan-400/30 to-transparent" />
          </div>
          <h2 className="font-display font-extrabold text-5xl md:text-6xl">
            <span className="gradient-text">Projects</span>
            <span className="text-slate-700"> I've Built</span>
          </h2>
        </motion.div>

        {/* ── Cards Grid ── */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 60, filter: "blur(6px)" }}
              animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
              transition={{ duration: 0.7, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              <TiltCard className="h-full">
                <ProjectCard project={project} />
              </TiltCard>
            </motion.div>
          ))}
        </div>

        {/* GitHub CTA */}
        {data.contact.github && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.9 }}
            className="text-center mt-14"
          >
            <motion.a
              href={data.contact.github}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl glass border border-slate-700/40
                         font-mono text-sm text-slate-400 hover:text-cyan-400 hover:border-cyan-400/30
                         transition-all duration-300 group"
            >
              <FiGithub size={16} />
              <span>More projects on GitHub</span>
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                →
              </motion.span>
            </motion.a>
          </motion.div>
        )}
      </div>
    </section>
  );
}

// ── Single Project Card ────────────────────────────────────────
function ProjectCard({ project }) {
  return (
    <div className="relative glass rounded-3xl border border-slate-700/30 overflow-hidden flex flex-col
                    hover:border-cyan-400/25 transition-all duration-500 group h-full">

      {/* Animated top border */}
      <div className="absolute top-0 left-0 right-0 h-[2px] overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500"
          initial={{ x: "-100%" }}
          whileHover={{ x: "0%" }}
          transition={{ duration: 0.4 }}
          style={{ width: "200%" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/30 via-purple-500/30 to-pink-500/30" />
      </div>

      {/* Shimmer sweep on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.02] to-transparent
                      -translate-x-full group-hover:translate-x-full transition-transform duration-700
                      pointer-events-none" />

      <div className="p-7 flex flex-col flex-1">

        {/* Featured badge */}
        {project.featured && (
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-1.5 mb-4 px-3 py-1 rounded-full text-xs font-mono
                       bg-yellow-400/10 text-yellow-300 border border-yellow-400/20 w-fit"
          >
            <FiStar size={10} />
            Featured
          </motion.span>
        )}

        {/* Icon */}
        <motion.div
          whileHover={{ rotate: 15, scale: 1.1 }}
          className="w-12 h-12 rounded-2xl glass border border-slate-700/40 flex items-center justify-center mb-5
                     group-hover:border-cyan-400/30 group-hover:bg-cyan-400/5 transition-all duration-300"
        >
          <FiCode size={20} className="text-cyan-400" />
        </motion.div>

        {/* Title */}
        <h3 className="font-display font-bold text-xl text-slate-100 mb-3
                       group-hover:text-cyan-400 transition-colors duration-300">
          {project.title}
        </h3>

        {/* Description */}
        <p className="font-body text-slate-400 text-sm leading-relaxed mb-6 flex-1">
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech, ti) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: ti * 0.05 }}
              whileHover={{ scale: 1.1, y: -2 }}
              className="px-2.5 py-1 rounded-lg text-xs font-mono
                         bg-slate-800/60 text-slate-400 border border-slate-700/40
                         hover:text-cyan-400 hover:border-cyan-400/20 cursor-default
                         transition-colors duration-200"
            >
              {tech}
            </motion.span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-5 pt-5 border-t border-slate-700/20">
          {project.github && (
            <motion.a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              whileHover={{ x: 3 }}
              className="flex items-center gap-2 text-sm font-mono text-slate-500
                         hover:text-cyan-400 transition-colors"
            >
              <FiGithub size={14} /> Code
            </motion.a>
          )}
          {project.demo && (
            <motion.a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              whileHover={{ x: 3 }}
              className="flex items-center gap-2 text-sm font-mono text-slate-500
                         hover:text-purple-400 transition-colors"
            >
              <FiExternalLink size={14} /> Live Demo
            </motion.a>
          )}
        </div>
      </div>
    </div>
  );
}