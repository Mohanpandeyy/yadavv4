"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { FiPhone, FiMapPin, FiCheckCircle, FiArrowRight, FiRotateCw } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { waLink, telLink } from "@/lib/config";

export function BusinessCards() {
  const [activeCard, setActiveCard] = useState<"front" | "back">("front");
  const router = useRouter();

  return (
    <section id="business-card" className="section bg-slate-50 dark:bg-[#061817]">
      <div className="text-center max-w-3xl mx-auto">
        <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.3em] text-[#007a78] dark:text-[#5eead4]">
          Authentic Business Card Design
        </p>
        <h2 className="mt-3 font-display text-3xl font-extrabold text-slate-900 dark:text-white md:text-5xl">
          Visit <span className="text-gradient">Yadav Medicals & Pathkind Lab</span>
        </h2>
        <p className="mt-4 text-slate-600 dark:text-slate-300 text-sm sm:text-base">
          Interactive digital replica of our official physical store business card.
        </p>

        {/* Toggle buttons for Front / Back */}
        <div className="mt-8 flex justify-center gap-3">
          <button
            onClick={() => setActiveCard("front")}
            className={`flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-bold transition-all ${
              activeCard === "front"
                ? "bg-[#007a78] text-white shadow-lg shadow-[#007a78]/30 scale-105"
                : "bg-white text-slate-700 hover:bg-slate-100 dark:bg-slate-800 dark:text-slate-200"
            }`}
          >
            Side 1: Yadav Medical Store
          </button>
          <button
            onClick={() => setActiveCard("back")}
            className={`flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-bold transition-all ${
              activeCard === "back"
                ? "bg-[#007a78] text-white shadow-lg shadow-[#007a78]/30 scale-105"
                : "bg-white text-slate-700 hover:bg-slate-100 dark:bg-slate-800 dark:text-slate-200"
            }`}
          >
            Side 2: Pathkind Labs
          </button>
        </div>
      </div>

      {/* Main Business Card Replica Display */}
      <div className="mx-auto mt-12 max-w-4xl px-2">
        <div className="relative overflow-hidden rounded-3xl border border-[#ccece9] bg-white shadow-card dark:border-[#004d4b] dark:bg-[#082a28]">
          <AnimatePresence mode="wait">
            {activeCard === "front" ? (
              /* FRONT CARD (Yadav Medical Stores) */
              <motion.div
                key="front-card"
                initial={{ opacity: 0, rotateY: -15 }}
                animate={{ opacity: 1, rotateY: 0 }}
                exit={{ opacity: 0, rotateY: 15 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 lg:grid-cols-12 min-h-[380px]"
              >
                {/* Left Side: White Section */}
                <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between relative bg-white dark:bg-[#0a2321] text-slate-800 dark:text-slate-100">
                  <div>
                    {/* Header Logo */}
                    <div className="flex items-center gap-3">
                      {/* Logo Icon */}
                      <div className="relative w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-xl bg-gradient-to-br from-amber-500 via-orange-500 to-[#007a78] text-white text-xl font-bold shadow-md">
                        Y
                      </div>
                      <div>
                        <h3 className="font-hindi text-2xl sm:text-3xl font-extrabold text-[#d97706] dark:text-amber-400 tracking-tight leading-tight">
                          यादव <span className="text-[#007a78] dark:text-[#5eead4]">मेडिकल स्टोर्स</span>
                        </h3>
                        <p className="text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-300">
                          कैमिस्ट & ड्रगिस्ट खलीलाबाद · <span className="text-amber-600 font-bold">सींस 1993</span>
                        </p>
                      </div>
                    </div>

                    <hr className="my-5 border-slate-200 dark:border-teal-900" />

                    {/* QR Code & Phone numbers */}
                    <div className="flex flex-wrap items-center gap-4 my-4 bg-teal-50/70 dark:bg-teal-950/40 p-3.5 rounded-2xl border border-teal-100 dark:border-teal-900">
                      <div className="w-16 h-16 bg-white dark:bg-slate-900 rounded-xl p-1 overflow-hidden border border-slate-200 dark:border-teal-800 flex flex-col items-center justify-center shrink-0 shadow-sm relative">
                        <img
                          src="/images/qr-code.png"
                          alt="QR Code"
                          className="w-full h-full object-contain"
                          onError={(e) => {
                            // Fallback if user hasn't uploaded qr-code.png yet
                            (e.currentTarget as HTMLElement).style.display = "none";
                            if (e.currentTarget.nextElementSibling) {
                              (e.currentTarget.nextElementSibling as HTMLElement).style.display = "flex";
                            }
                          }}
                        />
                        <div className="hidden w-full h-full bg-slate-900 dark:bg-white rounded-md items-center justify-center text-[9px] font-bold text-white dark:text-slate-900 text-center leading-tight">
                          QR CODE
                        </div>
                      </div>
                      <div className="space-y-1 text-xs sm:text-sm font-semibold">
                        <a href="tel:8858876210" className="flex items-center gap-2 text-[#007a78] dark:text-[#5eead4] hover:underline">
                          <FiPhone className="shrink-0" /> 8858876210
                        </a>
                        <a href="tel:8840202806" className="flex items-center gap-2 text-[#007a78] dark:text-[#5eead4] hover:underline">
                          <FaWhatsapp className="shrink-0 text-emerald-500" /> 88402 02806
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Address at bottom */}
                  <div className="mt-4 pt-3 border-t border-slate-100 dark:border-teal-900 text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 flex items-start gap-2">
                    <FiMapPin className="text-[#007a78] dark:text-amber-400 mt-1 shrink-0 text-base" />
                    <span>
                      सामु. स्वा. केन्द्र के सामने, शुगर मिल रोड खलीलाबाद-संत कबीर नगर
                    </span>
                  </div>
                </div>

                {/* Right Side: Signature Teal Section */}
                <div className="lg:col-span-5 bg-[#007a78] text-white p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden">
                  {/* Paint Splash & Halftone pattern effect */}
                  <div className="absolute inset-0 card-halftone-pattern-white opacity-20 pointer-events-none" />
                  
                  <div className="relative z-10">
                    <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-wider text-amber-300 mb-4">
                      Services & Facilities
                    </span>
                    <ul className="grid grid-cols-2 gap-2.5 text-xs sm:text-sm font-medium">
                      <li className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-white/10">
                        <span>💊</span> Pharmacy
                      </li>
                      <li className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-white/10">
                        <span>🧪</span> Pathology
                      </li>
                      <li className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-white/10">
                        <span>🩺</span> Phy. OPD
                      </li>
                      <li className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-white/10">
                        <span>👂</span> ENT OPD
                      </li>
                      <li className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-white/10">
                        <span>👩‍⚕️</span> Gyne OPD
                      </li>
                      <li className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-white/10">
                        <span>✨</span> Skin Care
                      </li>
                      <li className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-white/10">
                        <span>🏥</span> Surgical
                      </li>
                      <li className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-white/10">
                        <span>👶</span> Baby Care
                      </li>
                      <li className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-white/10 col-span-2">
                        <span>🌿</span> Ayurvedic Medicines
                      </li>
                    </ul>
                  </div>

                  <div className="relative z-10 mt-6 pt-4 border-t border-white/20">
                    <button
                      onClick={() => router.push("/medical-store")}
                      className="w-full flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold py-2.5 px-4 rounded-xl transition shadow-md text-xs sm:text-sm"
                    >
                      Explore Store <FiArrowRight />
                    </button>
                  </div>
                </div>
              </motion.div>
            ) : (
              /* BACK CARD (Pathkind Labs side) */
              <motion.div
                key="back-card"
                initial={{ opacity: 0, rotateY: 15 }}
                animate={{ opacity: 1, rotateY: 0 }}
                exit={{ opacity: 0, rotateY: -15 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 lg:grid-cols-12 min-h-[380px]"
              >
                {/* Left Side: Deep Teal Note Section */}
                <div className="lg:col-span-6 bg-[#007a78] text-white p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden">
                  <div className="absolute inset-0 card-halftone-pattern-white opacity-20 pointer-events-none" />
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="w-3 h-3 rounded-full bg-amber-400 animate-pulse" />
                      <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
                        Hospital Tie-Ups & Medicines
                      </span>
                    </div>

                    <h4 className="font-hindi text-base sm:text-lg font-bold leading-relaxed bg-white/10 p-4 rounded-2xl border border-white/20 text-teal-50">
                      नोट-हमारे यहां <strong className="text-amber-300">PGI, सहारा, एम्स, मेदांता, KGMC, Apollo, Max, BRD</strong>, सहित सभी अस्पतालों की दवाईयाँ उचित मूल्य पर उपलब्ध है।
                    </h4>

                    <div className="mt-4 space-y-2 text-xs sm:text-sm">
                      <div className="flex items-center gap-2 text-teal-100">
                        <FiCheckCircle className="text-amber-400 shrink-0" />
                        <span>100% Genuine Medicines Guarantee</span>
                      </div>
                      <div className="flex items-center gap-2 text-teal-100">
                        <FiCheckCircle className="text-amber-400 shrink-0" />
                        <span>Special Discounts on Chronic Medications</span>
                      </div>
                    </div>
                  </div>

                  <div className="relative z-10 mt-6">
                    <a
                      href={waLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white font-bold py-2.5 px-4 rounded-xl transition shadow-md text-xs sm:text-sm"
                    >
                      <FaWhatsapp className="text-lg" /> Order Medicine on WhatsApp
                    </a>
                  </div>
                </div>

                {/* Right Side: Pathkind Lab White Section */}
                <div className="lg:col-span-6 p-6 sm:p-8 flex flex-col justify-between bg-white dark:bg-[#0a2321] text-slate-800 dark:text-slate-100">
                  <div>
                    {/* Pathkind Logo */}
                    <div className="flex items-center gap-3 bg-amber-50 dark:bg-amber-950/30 p-3.5 rounded-2xl border border-amber-200 dark:border-amber-900/40">
                      <div className="w-10 h-10 bg-amber-400 text-slate-900 rounded-xl flex items-center justify-center text-2xl font-black shrink-0">
                        🔬
                      </div>
                      <div>
                        <h3 className="font-display text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
                          Pathkind<span className="text-[#007a78] dark:text-[#5eead4]">Labs</span>
                        </h3>
                        <p className="text-xs font-bold text-amber-700 dark:text-amber-400 uppercase tracking-wider">
                          NABL Certified Diagnostics
                        </p>
                      </div>
                    </div>

                    {/* Hindi Pathology tag */}
                    <div className="mt-5 p-4 rounded-2xl bg-teal-50/80 dark:bg-teal-950/40 border border-teal-100 dark:border-teal-900">
                      <p className="font-hindi text-base sm:text-lg font-extrabold text-[#007a78] dark:text-[#5eead4] leading-snug">
                        सभी प्रकार की जाँच की सुविधा व फ्री होम ब्लड कलेक्शन
                      </p>
                    </div>

                    <ul className="mt-4 space-y-2 text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-300">
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#007a78]" /> Free Home Sample Blood Collection
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#007a78]" /> Same-day Digital Reports on WhatsApp
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#007a78]" /> NABL & ISO 9001 Certified Quality
                      </li>
                    </ul>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 dark:border-teal-900 flex gap-3">
                    <button
                      onClick={() => router.push("/pathkind-lab")}
                      className="flex-1 flex items-center justify-center gap-2 bg-[#007a78] hover:bg-[#006361] text-white font-bold py-2.5 px-4 rounded-xl transition shadow-md text-xs sm:text-sm"
                    >
                      Book Blood Test <FiArrowRight />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
