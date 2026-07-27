"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import { siteConfig as s } from "@/lib/config";

export default function Reviews() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % s.reviews.length), 5000);
    return () => clearInterval(t);
  }, []);
  const r = s.reviews[i];

  return (
    <section className="section text-center" aria-label="Customer reviews">
      <h2 className="font-display text-4xl font-bold md:text-5xl">Loved by <span className="text-gradient">Khalilabad</span></h2>
      <div className="relative mx-auto mt-14 min-h-[220px] max-w-2xl">
        <AnimatePresence mode="wait">
          <motion.figure
            key={i}
            initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -24, filter: "blur(6px)" }}
            transition={{ duration: 0.5 }}
            className="glass rounded-3xl p-10 shadow-soft"
          >
            <div className="flex justify-center gap-1" aria-label={`${r.stars} star rating`}>
              {Array.from({ length: r.stars }).map((_, k) => (
                <motion.span key={k} initial={{ scale: 0, rotate: -90 }} animate={{ scale: 1, rotate: 0 }} transition={{ delay: 0.15 + k * 0.08, type: "spring" }}>
                  <FaStar className="text-xl text-amber-400" aria-hidden />
                </motion.span>
              ))}
            </div>
            <blockquote className="mt-5 text-lg">"{r.text}"</blockquote>
            <figcaption className="mt-4 font-semibold opacity-70">{r.name}</figcaption>
          </motion.figure>
        </AnimatePresence>
      </div>
      <div className="mt-6 flex justify-center gap-2">
        {s.reviews.map((_, k) => (
          <button key={k} aria-label={`Review ${k + 1}`} onClick={() => setI(k)}
            className={`h-2 rounded-full transition-all ${k === i ? "w-6 bg-brand-500" : "w-2 bg-white/30"}`} />
        ))}
      </div>
    </section>
  );
}
