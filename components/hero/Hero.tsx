"use client";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { FiPhone, FiArrowRight } from "react-icons/fi";
import { Particles } from "./Particles";
import { waLink, telLink, bookLink, medicineLink } from "@/lib/config";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 40, filter: "blur(12px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

export function Hero() {
  return (
    <section className="relative flex min-h-[85vh] items-start justify-center overflow-hidden hero-gradient pt-28 md:pt-32">
      <div className="absolute inset-0 bg-teal-950/20" aria-hidden />
      <Particles />
      <div aria-hidden className="absolute -top-40 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-[#5eead4]/10 blur-[140px]" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto max-w-4xl px-6 text-center text-white"
      >
        <motion.p
          variants={item}
          className="mb-5 inline-block rounded-full border border-teal-200/30 bg-teal-900/40 px-5 py-2 text-sm font-semibold tracking-wide backdrop-blur-md text-amber-300"
        >
          Trusted in Khalilabad since 1993 · Front of CHC Hospital
        </motion.p>

        <motion.h1
          variants={item}
          className="font-display text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl md:text-7xl"
        >
          YADAV <span className="font-hindi text-amber-400">मेडिकल स्टोर्स</span>
          <br />
          <span className="text-gradient bg-gradient-to-r from-amber-300 via-teal-100 to-white bg-clip-text text-transparent">
            & Pathkind Labs
          </span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mx-auto mt-6 max-w-xl text-base font-medium tracking-wide text-teal-50 sm:text-lg"
        >
          Pharmacy · Pathology · OPD Services · Free Home Blood Collection
        </motion.p>

        <motion.div variants={item} className="mx-auto mt-10 flex max-w-xs flex-col items-stretch gap-3 sm:max-w-sm">
          <a
            href={bookLink}
            className="group flex items-center justify-center gap-2 rounded-full bg-amber-400 px-7 py-4 font-bold text-slate-950 shadow-lg transition hover:bg-amber-300 hover:scale-[1.03]"
          >
            Book Blood Test{" "}
            <FiArrowRight className="transition group-hover:translate-x-1" aria-hidden />
          </a>
          <a
            href={medicineLink}
            className="group flex items-center justify-center gap-2 rounded-full border-2 border-white/80 bg-white/10 px-7 py-4 font-semibold text-white backdrop-blur-sm transition hover:bg-white/20 hover:scale-[1.03]"
          >
            Order Medicines{" "}
            <FiArrowRight className="transition group-hover:translate-x-1" aria-hidden />
          </a>
        </motion.div>

        <motion.div
          variants={item}
          className="mt-6 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border border-white/30 bg-emerald-600/30 px-6 py-3.5 font-semibold backdrop-blur-sm transition hover:bg-emerald-600/50"
          >
            <FaWhatsapp className="text-[#25D366] text-xl" aria-hidden /> WhatsApp
          </a>
          <a
            href={telLink}
            className="flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3.5 font-semibold backdrop-blur-sm transition hover:bg-white/20"
          >
            <FiPhone aria-hidden /> Call Now
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        aria-hidden
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 h-10 w-6 -translate-x-1/2 rounded-full border-2 border-white/40"
      >
        <div className="mx-auto mt-2 h-2 w-1 rounded-full bg-amber-400" />
      </motion.div>
    </section>
  );
}
