"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { faqs, siteConfig } from "@/lib/data";
import Button from "@/components/ui/Button";

export default function FAQ() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

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
          <p className="eyebrow mb-4">FAQ</p>
          <h2 className="section-heading text-fg">FREQUENTLY ASKED<br />QUESTIONS</h2>
        </motion.div>

        {/* Two-column: sticky sidebar + accordion */}
        <div className="grid md:grid-cols-[1fr_1.5fr] gap-12 items-start">

          {/* Left — sticky */}
          <motion.div
            className="md:sticky md:top-24"
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          >
            <p className="text-fg-muted text-sm leading-relaxed mb-6 max-w-xs">
              Have more questions? I'm happy to answer anything about my process, availability, or how we can work together.
            </p>
            <Button variant="primary" href={`mailto:${siteConfig.email}`}>
              Ask Me Anything →
            </Button>
          </motion.div>

          {/* Right — accordion */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          >
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <div key={i} className="border-b border-border">
                  <button
                    className="w-full flex justify-between items-center py-5 text-left"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                  >
                    <span className={`font-medium text-sm md:text-base transition-colors duration-200 pr-4 ${isOpen ? "text-accent" : "text-fg"}`}>
                      {faq.question}
                    </span>
                    <span
                      className={`text-xl text-fg-muted flex-shrink-0 transition-transform duration-300 ${isOpen ? "rotate-45 text-accent" : ""}`}
                    >
                      +
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="text-sm text-fg-muted leading-relaxed pb-5">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
