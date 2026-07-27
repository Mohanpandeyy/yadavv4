"use client";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { getBusinessWaLink, getBusinessTelLink } from "@/lib/config";

interface Props {
  icon: string;
  title: string;
  tagline: string;
  description: string;
  whatsapp: string;
  phone: string;
}

export function BusinessPageHero({ icon, title, tagline, description, whatsapp, phone }: Props) {
  const waLink = getBusinessWaLink(whatsapp, `Hello, I visited ${title} page. I would like to enquire.`);
  const telLink = getBusinessTelLink(phone);

  return (
    <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden hero-gradient pt-20">
      <div className="absolute inset-0 bg-teal-950/20" aria-hidden />
      <div aria-hidden className="absolute -top-40 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-[#5eead4]/10 blur-[140px]" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 mx-auto max-w-3xl px-6 text-center text-white"
      >
        <span className="text-7xl shadow-md" role="img" aria-label={title}>{icon}</span>
        <h1 className="mt-6 font-display text-4xl font-black leading-tight tracking-tight md:text-6xl text-amber-300">
          {title}
        </h1>
        <p className="mt-4 text-xl font-bold text-teal-100">{tagline}</p>
        <p className="mx-auto mt-6 max-w-2xl text-teal-50 font-medium">{description}</p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a href={waLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-full bg-emerald-500 hover:bg-emerald-400 px-7 py-4 font-bold text-white shadow-lg transition hover:scale-105">
            <FaWhatsapp className="text-xl" aria-hidden /> WhatsApp Enquiry
          </a>
          <a href={telLink} className="flex items-center gap-2 rounded-full bg-amber-400 hover:bg-amber-300 px-7 py-4 font-bold text-slate-950 shadow-lg transition hover:scale-105">
            <FiPhone aria-hidden /> Call Now
          </a>
        </div>
      </motion.div>
    </section>
  );
}
