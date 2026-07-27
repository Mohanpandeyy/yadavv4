"use client";
import Image from "next/image";
import { motion } from "framer-motion";

interface Props {
  images: string[];
}

export function BusinessGallery({ images }: Props) {
  return (
    <section className="section">
      <h2 className="text-center font-display text-4xl font-bold md:text-5xl">
        See <span className="text-gradient">inside</span>
      </h2>
      <div className="mt-12 grid grid-cols-2 gap-5 md:grid-cols-3">
        {images.map((img, i) => (
          <motion.div
            key={img}
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.6 }}
            whileHover={{ scale: 1.03 }}
            className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-soft"
          >
            <Image src={`/images/${img}`} alt="" fill sizes="(max-width: 768px) 50vw, 33vw" className="object-cover" loading="lazy" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
