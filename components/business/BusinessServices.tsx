"use client";
import { motion } from "framer-motion";
import { FiCheck } from "react-icons/fi";

interface Props {
  services: string[];
}

export function BusinessServices({ services }: Props) {
  return (
    <section className="section">
      <h2 className="text-center font-display text-4xl font-bold md:text-5xl">
        Our <span className="text-gradient">Services</span>
      </h2>
      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((svc, i) => (
          <motion.div
            key={svc}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06, duration: 0.6 }}
            className="glass flex items-center gap-3 rounded-2xl p-5 shadow-soft"
          >
            <FiCheck className="shrink-0 text-xl text-brand-500" aria-hidden />
            <span className="text-sm font-medium">{svc}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
