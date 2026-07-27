"use client";
import { motion } from "framer-motion";
import { waLink } from "@/lib/config";

const categories = [
  { name: "OTC Medicines", emoji: "💊", bg: "bg-teal-50/70 border-teal-200 dark:bg-teal-950/40 dark:border-teal-900" },
  { name: "Prescription", emoji: "📋", bg: "bg-amber-50/70 border-amber-200 dark:bg-amber-950/40 dark:border-amber-900" },
  { name: "Baby Care", emoji: "🍼", bg: "bg-emerald-50/70 border-emerald-200 dark:bg-emerald-950/40 dark:border-emerald-900" },
  { name: "Personal Care", emoji: "🧴", bg: "bg-cyan-50/70 border-cyan-200 dark:bg-cyan-950/40 dark:border-cyan-900" },
  { name: "Healthcare", emoji: "❤️", bg: "bg-rose-50/70 border-rose-200 dark:bg-rose-950/40 dark:border-rose-900" },
  { name: "Medical Equipment", emoji: "🩺", bg: "bg-teal-50/70 border-teal-200 dark:bg-teal-950/40 dark:border-teal-900" },
];

export default function MedicalStore() {
  return (
    <section id="store" className="section bg-white dark:bg-[#061817]">
      <p className="text-center text-xs sm:text-sm font-bold uppercase tracking-[0.3em] text-[#007a78] dark:text-[#5eead4]">
        Yadav Medical Store 1993
      </p>
      <h2 className="mt-3 text-center font-display text-4xl font-extrabold text-slate-900 dark:text-white md:text-5xl">
        Genuine Medicines, <span className="text-gradient">Since 1993</span>
      </h2>
      <p className="mx-auto mt-4 max-w-xl text-center text-slate-600 dark:text-slate-300 text-sm sm:text-base">
        Enquire on WhatsApp and collect from our store in front of CHC Hospital, Sugar Mill Road, Khalilabad.
      </p>
      <div className="mt-14 grid grid-cols-2 gap-5 md:grid-cols-3">
        {categories.map((c, i) => (
          <motion.a
            key={c.name}
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            whileHover={{ y: -6 }}
            className={`rounded-3xl border p-8 text-center shadow-soft transition ${c.bg}`}
          >
            <span className="text-4xl" role="img" aria-label={c.name}>{c.emoji}</span>
            <p className="mt-4 font-bold text-slate-900 dark:text-white">{c.name}</p>
            <p className="mt-1 text-xs font-bold text-[#007a78] dark:text-amber-400">Enquire →</p>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
