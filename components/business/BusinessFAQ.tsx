"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiPlus } from "react-icons/fi";

interface Props {
  faqs: Array<{ q: string; a: string }>;
}

export function BusinessFAQ({ faqs }: Props) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="section max-w-3xl">
      <h2 className="text-center font-display text-4xl font-bold md:text-5xl">
        Frequently Asked <span className="text-gradient">Questions</span>
      </h2>
      <div className="mt-14 space-y-4">
        {faqs.map((f, i) => (
          <div key={f.q} className="glass overflow-hidden rounded-2xl">
            <button
              onClick={() => setOpen(open === i ? null : i)}
              aria-expanded={open === i}
              className="flex w-full items-center justify-between px-6 py-5 text-left font-semibold"
            >
              {f.q}
              <motion.span animate={{ rotate: open === i ? 45 : 0 }} transition={{ duration: 0.3 }}>
                <FiPlus aria-hidden />
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {open === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  <p className="px-6 pb-5 text-sm opacity-70">{f.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
