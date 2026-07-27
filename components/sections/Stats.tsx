"use client";
import { useCounter } from "@/hooks/useCounter";

const stats = [
  { value: 30, suffix: "+", label: "Years Experience" },
  { value: 1000, suffix: "+", label: "Happy Families" },
  { value: 100, suffix: "%", label: "Certified Diagnostics" },
  { value: 24, suffix: "/7", label: "Trusted Healthcare" },
];

function Stat({ value, suffix, label }: (typeof stats)[number]) {
  const { ref, value: v } = useCounter(value);
  return (
    <div className="text-center">
      <span ref={ref} className="font-display text-5xl font-bold text-gradient md:text-6xl">
        {v}{suffix}
      </span>
      <p className="mt-3 text-sm font-medium uppercase tracking-widest opacity-60">{label}</p>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="section grid grid-cols-2 gap-12 md:grid-cols-4" aria-label="Why choose us">
      {stats.map((st) => <Stat key={st.label} {...st} />)}
    </section>
  );
}
