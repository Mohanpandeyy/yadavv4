"use client";
import { motion } from "framer-motion";
import { FiHome, FiMessageCircle, FiFileText, FiZap, FiTag, FiShield } from "react-icons/fi";

const features = [
  { icon: FiHome, title: "Home Sample Collection", text: "Certified phlebotomists at your doorstep across Khalilabad." },
  { icon: FiMessageCircle, title: "WhatsApp Booking", text: "Book tests and enquire about medicines in one message." },
  { icon: FiFileText, title: "Digital Reports", text: "NABL certified reports delivered digitally, fast." },
  { icon: FiZap, title: "Fast Response", text: "Emergency medicines and urgent collections prioritised." },
  { icon: FiTag, title: "Affordable Prices", text: "Fair, transparent pricing for every family." },
  { icon: FiShield, title: "Quality Medicines", text: "Only genuine, verified stock since 1993." },
];

export default function Features() {
  return (
    <section className="section">
      <h2 className="text-center font-display text-4xl font-bold md:text-5xl">Designed around <span className="text-gradient">your care</span></h2>
      <div className="mt-16 grid gap-6 md:grid-cols-3">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.6 }}
            className="glass rounded-3xl p-8 shadow-soft"
          >
            <f.icon className="text-3xl text-brand-500" aria-hidden />
            <h3 className="mt-5 font-display text-lg font-semibold">{f.title}</h3>
            <p className="mt-2 text-sm opacity-70">{f.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
