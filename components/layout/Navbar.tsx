"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { FiMoon, FiSun, FiPhone, FiMenu, FiX } from "react-icons/fi";
import { useTheme } from "@/components/providers/ThemeProvider";
import { telLink } from "@/lib/config";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/#business-card", label: "Business Card" },
  { href: "/medical-store", label: "Medical Store" },
  { href: "/pathkind-lab", label: "Pathkind Lab" },
  { href: "/#contact", label: "Contact" },
];

export function Navbar() {
  const { dark, toggle } = useTheme();
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <header className="fixed inset-x-0 top-3 z-50 mx-auto w-[94%] max-w-6xl rounded-2xl glass px-4 py-3 md:px-5">
        <div className="flex items-center justify-between">
          <a href="/" className="font-display text-base font-extrabold tracking-tight sm:text-lg text-[#007a78] dark:text-teal-300">
            YADAV <span className="text-amber-500 font-hindi">मेडिकल</span>
          </a>
        </div>
      </header>
    );
  }

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
      className="fixed inset-x-0 top-3 z-50 mx-auto w-[94%] max-w-6xl rounded-2xl glass px-4 py-3 md:px-5 border border-teal-100 dark:border-teal-900/60"
    >
      <div className="flex items-center justify-between">
        <a href="/" className="font-display text-base font-black tracking-tight sm:text-lg flex items-center gap-1.5">
          <span className="w-7 h-7 rounded-lg bg-[#007a78] text-white flex items-center justify-center font-bold text-xs">Y</span>
          <span className="text-slate-900 dark:text-white">YADAV</span>
          <span className="font-hindi text-[#007a78] dark:text-[#5eead4] font-bold">मेडिकल</span>
        </a>

        <nav aria-label="Primary" className="hidden gap-6 text-sm font-semibold lg:flex">
          {links.map((l) => {
            const isActive =
              pathname === l.href ||
              (l.href !== "/" && pathname.startsWith(l.href));
            return (
              <a
                key={l.href}
                href={l.href}
                className={cn(
                  "relative opacity-80 transition hover:opacity-100 hover:text-[#007a78] dark:hover:text-amber-300",
                  isActive && "opacity-100 text-[#007a78] dark:text-amber-400 font-bold"
                )}
              >
                {l.label}
                {isActive && (
                  <motion.span
                    layoutId="navbar-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#007a78] dark:bg-amber-400 rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <button
            aria-label="Toggle dark mode"
            onClick={toggle}
            className="rounded-full p-2 text-slate-700 dark:text-slate-200 transition hover:bg-teal-50 dark:hover:bg-teal-900/40"
          >
            {dark ? <FiSun className="text-amber-400" /> : <FiMoon className="text-[#007a78]" />}
          </button>
          <a
            href={telLink}
            className="hidden items-center gap-2 rounded-full bg-[#007a78] hover:bg-[#006361] px-4 py-2 text-sm font-bold text-white shadow-md transition sm:flex"
          >
            <FiPhone aria-hidden /> Call Now
          </a>
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className="rounded-full p-2 text-xl lg:hidden text-slate-800 dark:text-slate-200"
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            aria-label="Mobile"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden lg:hidden"
          >
            <div className="flex flex-col gap-1 pb-3 pt-4 border-t border-teal-100 dark:border-teal-900 mt-2">
              {links.map((l) => {
                const isActive =
                  pathname === l.href ||
                  (l.href !== "/" && pathname.startsWith(l.href));
                return (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "rounded-xl px-4 py-3 font-semibold transition hover:bg-teal-50 dark:hover:bg-teal-900/30",
                      isActive && "bg-teal-100/50 dark:bg-teal-900/50 text-[#007a78] dark:text-amber-300"
                    )}
                  >
                    {l.label}
                  </a>
                );
              })}
              <a
                href={telLink}
                className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-[#007a78] px-4 py-3 font-bold text-white shadow-md"
              >
                <FiPhone aria-hidden /> Call Now
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
