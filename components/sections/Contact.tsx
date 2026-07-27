import { FiMapPin, FiClock, FiPhone, FiMail, FiNavigation } from "react-icons/fi";
import { siteConfig as s, telLink } from "@/lib/config";

export default function Contact() {
  return (
    <section id="contact" className="section bg-slate-50 dark:bg-[#061817]">
      <h2 className="text-center font-display text-4xl font-extrabold text-slate-900 dark:text-white md:text-5xl">
        Visit Us, <span className="text-gradient">Right in Front of CHC Hospital</span>
      </h2>
      <div className="mt-16 mx-auto max-w-xl">
        <div className="glass space-y-6 rounded-3xl p-9 shadow-card border border-teal-100 dark:border-teal-900 bg-white dark:bg-[#082826]">
          <p className="flex items-start gap-3 font-medium text-slate-800 dark:text-slate-200">
            <FiMapPin className="mt-1 shrink-0 text-[#007a78] dark:text-amber-400 text-lg" aria-hidden />
            <span>{s.address.line1}, {s.address.city}, {s.address.district}, {s.address.state}, {s.address.pincode}</span>
          </p>
          <p className="flex items-center gap-3 font-medium text-slate-800 dark:text-slate-200">
            <FiClock className="text-[#007a78] dark:text-amber-400 text-lg" aria-hidden /> {s.hours}
          </p>
          <a href={telLink} className="flex items-center gap-3 font-bold text-slate-800 dark:text-slate-200 hover:text-[#007a78] dark:hover:text-amber-400 transition">
            <FiPhone className="text-[#007a78] dark:text-amber-400 text-lg" aria-hidden /> {s.phone}
          </a>
          <a href={`mailto:${s.email}`} className="flex items-center gap-3 font-medium text-slate-800 dark:text-slate-200 hover:text-[#007a78] dark:hover:text-amber-400 transition">
            <FiMail className="text-[#007a78] dark:text-amber-400 text-lg" aria-hidden /> {s.email}
          </a>
          <a
            href={s.mapsDirection}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#007a78] hover:bg-[#006361] px-7 py-3.5 font-bold text-white shadow-md transition hover:scale-105"
          >
            <FiNavigation aria-hidden /> Get Google Map Directions
          </a>
        </div>
      </div>
    </section>
  );
}
