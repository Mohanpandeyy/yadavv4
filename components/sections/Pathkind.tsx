"use client";
import { motion } from "framer-motion";
import { siteConfig as s, bookLink } from "@/lib/config";
import { cn } from "@/lib/utils";

export default function Pathkind() {
  return (
    <section id="pathkind" className="section bg-teal-50/40 dark:bg-[#051c1b]">
      <p className="text-center text-xs sm:text-sm font-bold uppercase tracking-[0.3em] text-[#007a78] dark:text-[#5eead4]">
        Pathkind Lab & Blood Collection
      </p>
      <h2 className="mt-3 text-center font-display text-4xl font-extrabold text-slate-900 dark:text-white md:text-5xl">
        NABL Certified. <span className="text-gradient">Free Home Blood Collection.</span>
      </h2>
      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {s.packages.map((p, i) => (
          <motion.article
            key={p.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06, duration: 0.6 }}
            whileHover={{ y: -8, scale: 1.02 }}
            className={cn(
              "glass flex flex-col rounded-3xl p-7 shadow-soft border border-teal-100 dark:border-teal-900/60 bg-white dark:bg-[#082826]",
              p.featured && "sm:col-span-2 lg:col-span-1 ring-2 ring-[#007a78] shadow-card dark:ring-amber-400"
            )}
          >
            {p.featured && (
              <span className="mb-3 self-start rounded-full bg-amber-400 px-3 py-1 text-xs font-black text-slate-950 shadow-sm">
                Most Popular
              </span>
            )}
            <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white">{p.name}</h3>
            <p className="mt-3 font-display text-3xl font-black text-[#007a78] dark:text-amber-300">₹{p.price}</p>
            <ul className="mt-4 flex-1 space-y-1.5 text-sm font-medium text-slate-600 dark:text-slate-300">
              {p.items.map((it) => (
                <li key={it} className="flex items-center gap-1.5">
                  <span className="text-[#007a78] dark:text-amber-400 font-bold">•</span> {it}
                </li>
              ))}
            </ul>
            <a
              href={bookLink}
              className="mt-6 rounded-full bg-[#007a78] hover:bg-[#006361] py-3 text-center text-sm font-bold text-white transition shadow-md"
            >
              Book Test
            </a>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
