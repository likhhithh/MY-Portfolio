"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { metrics } from "@/lib/data";

const testimonials: { name: string; role: string; body: string; quote: string; company: string }[] = [];
import CountUp from "@/components/ui/CountUp";

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="bg-bg-alt border-t border-border section-pad">
      <div ref={ref} className="container-main">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12"
        >
          <p className="eyebrow mb-4">Testimonials</p>
          <h2 className="section-heading text-fg">WHAT MY CLIENTS SAY</h2>
        </motion.div>

        {/* Testimonial cards */}
        <div className="grid md:grid-cols-2 gap-5 mb-12">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 }}
              className="card-base bg-card p-6 md:p-8"
            >
              {/* Quote mark */}
              <div
                className="text-5xl text-accent/20 font-bold leading-none mb-3 select-none"
                style={{ fontFamily: "var(--font-antonio)" }}
              >
                &ldquo;
              </div>
              <p className="text-fg-muted text-sm leading-relaxed mb-5">
                {t.quote}
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="w-9 h-9 rounded-full bg-accent/10 flex items-center justify-center text-accent text-sm font-bold flex-shrink-0">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-medium text-sm text-fg">{t.name}</p>
                  <p className="text-xs text-fg-muted">{t.role} · {t.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats row — Portavia style: "I've worked with 50+ happy clients" */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid grid-cols-2 gap-4"
        >
          <div className="card-base bg-card p-6">
            <p className="text-fg-muted text-sm leading-relaxed mb-3">
              Trusted by builders and teams across India and beyond
            </p>
            <div className="flex items-baseline gap-1">
              <span
                className="font-bold text-4xl text-fg"
                style={{ fontFamily: "var(--font-antonio)" }}
              >
                <CountUp end={metrics[0].value} suffix={metrics[0].suffix} />
              </span>
              <span className="text-fg-muted text-sm">projects shipped</span>
            </div>
          </div>
          <div className="card-base bg-card p-6">
            <p className="text-fg-muted text-sm leading-relaxed mb-3">
              Clients consistently report measurable impact after working together
            </p>
            <div className="flex items-baseline gap-1">
              <span
                className="font-bold text-4xl text-fg"
                style={{ fontFamily: "var(--font-antonio)" }}
              >
                <CountUp end={100} suffix="%" />
              </span>
              <span className="text-fg-muted text-sm">satisfaction rate</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
