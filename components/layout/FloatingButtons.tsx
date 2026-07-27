"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { waLink, telLink } from "@/lib/config";

export function FloatingButtons() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <motion.a
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring" }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-2xl text-white shadow-soft"
      >
        <FaWhatsapp aria-hidden />
      </motion.a>
      <motion.a
        href={telLink}
        aria-label="Call Yadav Medicals"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.15, type: "spring" }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="grid h-14 w-14 place-items-center rounded-full bg-brand-500 text-xl text-white shadow-glow"
      >
        <FiPhone aria-hidden />
      </motion.a>
    </div>
  );
}
