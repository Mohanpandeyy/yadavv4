"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const photos = [
  { src: "/images/shop-front.jpg", alt: "Yadav Medical Store, front of CHC Hospital Khalilabad" },
  { src: "/images/store.jpg", alt: "Medicine counter at Yadav Medical Store" },
  { src: "/images/medicines.jpg", alt: "Medicine racks with genuine stock" },
  { src: "/images/lab.jpg", alt: "Pathkind Lab collection centre" },
  { src: "/images/blood.jpg", alt: "Pathkind Lab blood collection" },
  { src: "/images/reports.jpg", alt: "Digital lab reports" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="section">
      <h2 className="text-center font-display text-3xl font-bold sm:text-4xl md:text-5xl">
        A look <span className="text-gradient">inside</span>
      </h2>
      <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3">
        {photos.map((p, i) => (
          <motion.div
            key={p.src}
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: i * 0.06, duration: 0.6 }}
            whileHover={{ scale: 1.02 }}
            className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-soft"
          >
            <Image src={p.src} alt={p.alt} fill sizes="(max-width: 768px) 50vw, 33vw" className="object-cover" loading="lazy" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
