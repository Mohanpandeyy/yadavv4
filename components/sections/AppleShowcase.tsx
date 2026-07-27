"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const cards = [
  {
    icon: "💊",
    title: "Yadav Medical Store",
    bg: "#007a78",
    img: "/images/store.jpg",
    items: ["Genuine Medicines", "Prescription Drugs", "OTC & Baby Care", "Surgical & OPD Supplies", "AYUSH & Ayurvedic", "Fast Availability"],
  },
  {
    icon: "🧪",
    title: "Pathkind Lab & Blood Collection",
    bg: "#004d4b",
    img: "/images/lab.jpg",
    items: [
      "Book Blood Test",
      "NABL & ISO Certified",
      "Health Packages",
      "Accurate Same-day Reports",
      "Free Home Sample Collection",
      "Emergency Lab Support",
    ],
  },
];

function Card({ c }: { c: (typeof cards)[number] }) {
  return (
    <article className="showcase-card w-full max-w-sm overflow-hidden rounded-3xl border border-teal-200/30 bg-[#082a28]/90 text-center text-white shadow-card will-change-transform">
      <div className="relative h-40 w-full sm:h-44">
        <Image
          src={c.img}
          alt={c.title}
          fill
          sizes="(max-width: 768px) 90vw, 380px"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#052220] via-black/40 to-transparent" aria-hidden />
        <span
          className="absolute bottom-3 left-1/2 -translate-x-1/2 text-4xl shadow-md"
          role="img"
          aria-label={c.title}
        >
          {c.icon}
        </span>
      </div>
      <div className="p-7">
        <h3 className="font-display text-xl font-bold sm:text-2xl text-amber-300">{c.title}</h3>
        <ul className="mt-4 space-y-1.5 text-sm text-teal-50">
          {c.items.map((item) => (
            <li key={item} className="flex items-center justify-center gap-1.5">
              <span className="text-amber-400 font-bold">•</span> {item}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export function AppleShowcase() {
  const wrap = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !wrap.current) return;

    const bgColors = ["#007a78", "#004d4b"];
    let cleanup: (() => void) | null = null;

    const init = async () => {
      try {
        const gsap = (await import("gsap")).default;
        const { ScrollTrigger } = await import("gsap/ScrollTrigger");
        gsap.registerPlugin(ScrollTrigger);

        const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
        if (!isDesktop || !wrap.current) return;

        const els = wrap.current.querySelectorAll<HTMLElement>(".showcase-card");
        const bg = wrap.current.querySelector<HTMLElement>(".showcase-bg");

        if (!els.length || !bg || els.length < 2) return;

        const elArray = Array.from(els);

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: wrap.current,
            start: "top top",
            end: "+=200%",
            pin: true,
            scrub: 1,
          },
        });

        elArray.forEach((el, i) => {
          const color = bgColors[i];
          if (!color) return;

          tl.to(bg, { backgroundColor: color, duration: 1 }, i)
            .fromTo(
              el,
              { scale: 0.85, rotateY: -8, opacity: 0.35, filter: "blur(4px)" },
              { scale: 1.05, rotateY: 0, opacity: 1, filter: "blur(0px)", duration: 1 },
              i
            )
            .to(el, { scale: 0.9, opacity: 0.35, duration: 1 }, i + 0.9);
        });

        cleanup = () => {
          tl.kill();
          ScrollTrigger.getAll().forEach((t) => t.kill());
        };
      } catch (err) {
        console.warn("GSAP init failed:", err);
      }
    };

    init();
    return () => cleanup?.();
  }, []);

  return (
    <section id="showcase" ref={wrap} className="relative overflow-hidden lg:h-screen">
      <div
        className="showcase-bg absolute inset-0 transition-colors duration-700"
        style={{ backgroundColor: "#007a78" }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-teal-950/40" aria-hidden />

      <div className="relative z-10 hidden h-full items-center justify-center gap-10 px-6 lg:flex [perspective:1200px]">
        {cards.map((c) => (
          <Card key={c.title} c={c} />
        ))}
      </div>

      <div className="relative z-10 flex flex-col items-center gap-8 px-5 py-16 lg:hidden">
        <h2 className="text-center font-display text-3xl font-extrabold text-white">
          Two Services. <br /><span className="text-amber-300">One Trusted Medical Hub.</span>
        </h2>
        {cards.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: i * 0.1 }}
            className="w-full max-w-sm"
          >
            <Card c={c} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
