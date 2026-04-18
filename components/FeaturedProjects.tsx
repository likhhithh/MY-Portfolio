"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { projects } from "@/lib/data";
import Button from "@/components/ui/Button";

const gradients = [
  "from-violet-100 via-indigo-50 to-blue-100",
  "from-emerald-50 via-teal-50 to-cyan-100",
  "from-amber-50 via-orange-50 to-yellow-100",
  "from-rose-50 via-pink-50 to-fuchsia-100",
];

function ProjectLogo({ project }: { project: typeof projects[0] }) {
  if (project.image) {
    return (
      <div className="flex items-center justify-center w-20 h-20 rounded-2xl overflow-hidden shadow-md">
        <Image
          src={project.image}
          alt={project.title}
          width={80}
          height={80}
          className="object-cover w-full h-full"
        />
      </div>
    );
  }
  return (
    <span
      className="font-bold text-5xl text-fg/10 uppercase select-none"
      style={{ fontFamily: "var(--font-antonio)" }}
    >
      {project.title[0]}
    </span>
  );
}

export default function FeaturedProjects() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const featured = projects.filter((p) => p.featured);

  return (
    <section className="bg-bg-alt border-t border-border section-pad">
      <div ref={ref} className="container-main">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-end justify-between mb-12"
        >
          <div>
            <p className="eyebrow mb-4">Portfolio</p>
            <h2 className="section-heading text-fg">FEATURED PROJECTS</h2>
          </div>
          <div className="hidden md:block">
            <Button variant="outline" href="/projects">Browse All</Button>
          </div>
        </motion.div>

        {/* Projects */}
        <div className="flex flex-col gap-6">
          {featured.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 36 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
              className="card-base overflow-hidden flex flex-col md:flex-row"
            >
              {/* Left — visual */}
              <div
                className={`relative md:w-64 lg:w-72 aspect-video md:aspect-auto bg-gradient-to-br ${gradients[i % gradients.length]} flex items-center justify-center flex-shrink-0`}
              >
                <ProjectLogo project={project} />

                {/* WIP badge */}
                {project.wip && (
                  <span className="absolute top-3 right-3 bg-amber-400 text-amber-900 text-[10px] font-semibold px-2.5 py-1 rounded-full">
                    WIP
                  </span>
                )}
                <span className="absolute top-3 left-3 tag-chip">{project.category}</span>
              </div>

              {/* Right — content */}
              <div className="p-6 md:p-8 flex flex-col flex-1">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3
                    className="font-bold text-xl text-fg uppercase leading-tight"
                    style={{ fontFamily: "var(--font-antonio)", letterSpacing: "-0.02em" }}
                  >
                    {project.title}
                  </h3>
                  <span className="text-xs text-fg-muted bg-bg-alt px-2.5 py-1 rounded-full flex-shrink-0">
                    {project.year}
                  </span>
                </div>

                <p className="text-fg-muted text-sm leading-relaxed mb-5 flex-1">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tech.map((t) => (
                    <span key={t} className="tag-chip">{t}</span>
                  ))}
                </div>

                {/* CTAs */}
                <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-border">
                  <Button variant="primary" href={`/projects/${project.slug}`} size="sm">
                    Case Study →
                  </Button>
                  {project.live && (
                    <Button variant="outline" href={project.live} size="sm">
                      Live ↗
                    </Button>
                  )}
                  {project.github && (
                    <Button variant="outline" href={project.github} size="sm">
                      GitHub ↗
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 md:hidden">
          <Button variant="outline" href="/projects">Browse All Projects</Button>
        </div>
      </div>
    </section>
  );
}
