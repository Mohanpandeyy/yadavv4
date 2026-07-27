"use client";
import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiArrowRight, FiClock, FiMapPin, FiStar } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

/* ─────────────────────────────────────────────────────────
   Constants
───────────────────────────────────────────────────────── */
const POPUP_KEY = "ym_popup_v4";
const POPUP_DELAY = 7000;
const SCROLL_THRESHOLD = 0.35;
const WA = "918840202806";

/* ─────────────────────────────────────────────────────────
   Service Cards Data
   Inspired by: Apollo (NABL badge, test pricing),
   PharmEasy (discount ribbon, urgency), MeriPharmacy (Hindi, trust)
───────────────────────────────────────────────────────── */
const SERVICES = [
  {
    id: "medicine",
    emoji: "💊",
    label: "Medicines",
    hindi: "दवाइयाँ",
    tag: "Genuine Stock",
    tagColor: "#007a78",
    tagBg: "#e6f7f6",
    desc: "All prescriptions & OTC medicines available. Same-day pickup.",
    offer: "Trusted since 1993",
    offerColor: "#007a78",
    borderColor: "#b2e0dd",
    cardBg: "#f0fdfa",
    darkCardBg: "#061f1e",
    darkBorder: "#0d4a47",
    waMsg:
      "🙏 Hello Yadav Medicals!\n\nI saw your website and need help with *Medicines / Prescription*.\n\nKindly assist me. Thank you!",
    btnLabel: "Order via WhatsApp",
  },
  {
    id: "blood",
    emoji: "🧪",
    label: "Blood Test",
    hindi: "ब्लड टेस्ट",
    tag: "NABL Certified",
    tagColor: "#b45309",
    tagBg: "#fef3c7",
    desc: "Pathkind Lab — digital reports in 24 hrs. CBC, Thyroid, Sugar & more.",
    offer: "From ₹299 onwards",
    offerColor: "#d97706",
    borderColor: "#fcd34d",
    cardBg: "#fffbeb",
    darkCardBg: "#1a1200",
    darkBorder: "#78350f",
    waMsg:
      "🙏 Hello Yadav Medicals!\n\nI want to *book a Blood Test / Lab Test* at Pathkind Lab.\n\nPlease share price list and timings. Thank you!",
    btnLabel: "Book Test via WhatsApp",
  },
  {
    id: "opd",
    emoji: "🩺",
    label: "Doctor OPD",
    hindi: "डॉक्टर OPD",
    tag: "Multiple Specialists",
    tagColor: "#4f46e5",
    tagBg: "#eef2ff",
    desc: "General Physician, ENT, Gynaecologist & Skin Doctor OPD support.",
    offer: "Walk-in & pre-booking",
    offerColor: "#4f46e5",
    borderColor: "#c7d2fe",
    cardBg: "#f5f3ff",
    darkCardBg: "#0d0b1f",
    darkBorder: "#3730a3",
    waMsg:
      "🙏 Hello Yadav Medicals!\n\nI want to enquire about *Doctor OPD / Consultation*.\n\nKindly share available doctors and timings. Thank you!",
    btnLabel: "Enquire via WhatsApp",
  },
  {
    id: "home",
    emoji: "🏠",
    label: "Home Sample",
    hindi: "होम ब्लड कलेक्शन",
    tag: "100% FREE",
    tagColor: "#0e7490",
    tagBg: "#ecfeff",
    desc: "Trained phlebotomist at your door in Khalilabad. Zero extra charge.",
    offer: "Doorstep collection",
    offerColor: "#0e7490",
    borderColor: "#67e8f9",
    cardBg: "#ecfeff",
    darkCardBg: "#051419",
    darkBorder: "#164e63",
    waMsg:
      "🙏 Hello Yadav Medicals!\n\nI want to book *Free Home Blood Sample Collection* in Khalilabad.\n\nPlease confirm slot and address. Thank you!",
    btnLabel: "Book at Home via WhatsApp",
  },
];

/* ─────────────────────────────────────────────────────────
   Countdown timer hook (resets each popup open)
───────────────────────────────────────────────────────── */
function useCountdown(initial: number) {
  const [secs, setSecs] = useState(initial);
  useEffect(() => {
    setSecs(initial);
    const id = setInterval(() => setSecs((s) => (s > 0 ? s - 1 : 0)), 1000);
    return () => clearInterval(id);
  }, [initial]);
  const m = String(Math.floor(secs / 60)).padStart(2, "0");
  const s = String(secs % 60).padStart(2, "0");
  return `${m}:${s}`;
}

/* ─────────────────────────────────────────────────────────
   Main Component
───────────────────────────────────────────────────────── */
export default function HealthcarePopup() {
  const [show, setShow] = useState(false);
  const [mounted, setMounted] = useState(false);
  const countdown = useCountdown(show ? 900 : 0); // 15-min "offer" timer

  /* SSR guard */
  useEffect(() => setMounted(true), []);

  /* Trigger once per 24 h: scroll 35% OR 7 s */
  useEffect(() => {
    if (!mounted) return;
    const last = localStorage.getItem(POPUP_KEY);
    if (last && Date.now() - +last < 86400000) return;

    let fired = false;
    const fire = () => {
      if (fired) return;
      fired = true;
      setShow(true);
      localStorage.setItem(POPUP_KEY, String(Date.now()));
    };
    const t = setTimeout(fire, POPUP_DELAY);
    const onScroll = () => {
      const pct = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight || 1);
      if (pct >= SCROLL_THRESHOLD) { clearTimeout(t); fire(); }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { clearTimeout(t); window.removeEventListener("scroll", onScroll); };
  }, [mounted]);

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {show && (
        /* ── Backdrop ── */
        <motion.div
          key="popup-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={() => setShow(false)}
          className="fixed inset-0 z-[200] flex items-end justify-center sm:items-center"
          style={{
            backdropFilter: "blur(18px) saturate(1.6)",
            WebkitBackdropFilter: "blur(18px) saturate(1.6)",
            backgroundColor: "rgba(1,14,13,0.82)",
          }}
        >
          {/* ── Modal ── */}
          <motion.div
            key="popup-modal"
            initial={{ opacity: 0, y: 60, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.96 }}
            transition={{ type: "spring", stiffness: 340, damping: 32, mass: 0.9 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-[580px] overflow-hidden rounded-t-[28px] bg-white shadow-2xl dark:bg-[#061816] sm:rounded-[24px]"
          >

            {/* ── 1. Header band (inspired by Apollo + PharmEasy hero) ── */}
            <div
              className="relative overflow-hidden px-6 pb-5 pt-7 text-center"
              style={{ background: "linear-gradient(135deg, #004d4b 0%, #007a78 50%, #0d9488 100%)" }}
            >
              {/* Dot pattern */}
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  backgroundImage: "radial-gradient(rgba(255,255,255,0.15) 1px, transparent 1px)",
                  backgroundSize: "16px 16px",
                }}
              />
              {/* Amber glow blob */}
              <div
                className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full opacity-25"
                style={{ background: "radial-gradient(circle, #f59e0b, transparent 70%)" }}
              />

              {/* Close */}
              <button
                onClick={() => setShow(false)}
                aria-label="Close"
                className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm transition hover:bg-white/30"
              >
                <FiX size={15} />
              </button>

              {/* ⚡ Urgency timer pill — inspired by PharmEasy countdown */}
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-amber-300/40 bg-amber-400/20 px-3 py-1">
                <FiClock className="text-amber-300" size={11} />
                <span className="text-[10px] font-black tracking-widest text-amber-200 uppercase">
                  Special offer expires in&nbsp;
                  <span className="font-mono text-amber-300">{countdown}</span>
                </span>
              </div>

              <h2 className="text-[22px] font-black leading-tight text-white sm:text-[26px]">
                How Can We{" "}
                <span
                  className="bg-clip-text text-transparent"
                  style={{ backgroundImage: "linear-gradient(90deg, #fde68a, #f59e0b)" }}
                >
                  Help You Today?
                </span>
              </h2>
              <p className="mt-1 text-[12px] font-semibold text-white/70">
                Tap any service below to WhatsApp us instantly — हम तुरंत जवाब देते हैं!
              </p>

              {/* ── Trust strip — inspired by Apollo Diagnostics ── */}
              <div className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
                {[
                  { icon: "✅", label: "Genuine Medicines" },
                  { icon: "🏅", label: "NABL Certified" },
                  { icon: "⚡", label: "Fast Reports" },
                  { icon: "🏠", label: "Free Home Sample" },
                ].map((t) => (
                  <span
                    key={t.label}
                    className="flex items-center gap-1 text-[10px] font-bold text-white/80"
                  >
                    <span>{t.icon}</span> {t.label}
                  </span>
                ))}
              </div>
            </div>

            {/* ── 2. 4-service cards grid ── */}
            <div className="grid grid-cols-2 gap-3 p-4 sm:p-5">
              {SERVICES.map((svc, i) => {
                const waUrl = `https://wa.me/${WA}?text=${encodeURIComponent(svc.waMsg)}`;
                return (
                  <motion.div
                    key={svc.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.08 + i * 0.07, duration: 0.35 }}
                    className="group relative flex flex-col overflow-hidden rounded-2xl border transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
                    style={{
                      background: svc.cardBg,
                      borderColor: svc.borderColor,
                    }}
                  >
                    {/* Color-coded top bar */}
                    <div
                      className="h-1 w-full"
                      style={{ background: `linear-gradient(90deg, ${svc.tagColor}, ${svc.tagColor}aa)` }}
                    />

                    <div className="flex flex-col flex-1 gap-2 p-3">
                      {/* Icon + label row */}
                      <div className="flex items-start justify-between gap-1">
                        <div className="flex items-center gap-2">
                          {/* Emoji icon in soft bg */}
                          <span
                            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-lg"
                            style={{ background: `${svc.tagColor}18` }}
                          >
                            {svc.emoji}
                          </span>
                          <div className="min-w-0">
                            {/* English title */}
                            <p className="text-[13px] font-extrabold leading-tight text-slate-900">
                              {svc.label}
                            </p>
                            {/* Hindi subtitle — font-hindi */}
                            <p
                              className="font-hindi text-[11px] font-bold leading-tight"
                              style={{ color: svc.tagColor }}
                            >
                              {svc.hindi}
                            </p>
                          </div>
                        </div>

                        {/* Apollo-style certification badge */}
                        <span
                          className="shrink-0 rounded-full px-1.5 py-0.5 text-[8.5px] font-black uppercase leading-none tracking-wide"
                          style={{
                            color: svc.tagColor,
                            background: svc.tagBg,
                            border: `1px solid ${svc.tagColor}30`,
                          }}
                        >
                          {svc.tag}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-[11px] leading-relaxed text-slate-600">{svc.desc}</p>

                      {/* PharmEasy-style offer line */}
                      <div className="flex items-center gap-1">
                        <FiStar size={9} style={{ color: svc.offerColor }} />
                        <span
                          className="text-[10px] font-bold"
                          style={{ color: svc.offerColor }}
                        >
                          {svc.offer}
                        </span>
                      </div>

                      {/* WhatsApp CTA button */}
                      <a
                        href={waUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-auto flex items-center justify-center gap-1.5 rounded-xl py-2.5 text-[11px] font-black text-white shadow transition-all duration-200 hover:scale-[1.03] hover:shadow-md active:scale-[0.98]"
                        style={{
                          background: "linear-gradient(135deg, #075E54, #25D366)",
                        }}
                      >
                        <FaWhatsapp size={13} className="opacity-90" />
                        <span className="leading-none">{svc.btnLabel}</span>
                      </a>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* ── 3. Rating bar — inspired by PharmEasy social proof ── */}
            <div className="mx-4 mb-4 flex items-center justify-between gap-2 rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <span key={s} className="text-amber-400 text-[13px]">★</span>
                  ))}
                </div>
                <span className="text-[11px] font-bold text-slate-700">
                  4.9 · 500+ happy customers in Khalilabad
                </span>
              </div>
              <span className="text-[10px] font-bold text-[#007a78]">Since 1993</span>
            </div>

            {/* ── 4. Footer ── */}
            <div className="flex items-center justify-between border-t border-slate-100 px-5 py-3">
              <div className="flex items-center gap-1 text-[10px] font-semibold text-slate-500">
                <FiMapPin size={10} className="text-[#007a78]" />
                <span>CHC Hospital Road, Khalilabad</span>
                <span className="mx-1 opacity-40">·</span>
                <FiClock size={10} className="text-[#007a78]" />
                <span>8 AM – 10 PM</span>
              </div>
              <button
                onClick={() => setShow(false)}
                className="flex items-center gap-1 text-[10px] font-black uppercase tracking-wide text-[#007a78] hover:underline"
              >
                Close <FiArrowRight size={10} />
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
