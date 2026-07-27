import { FiMapPin, FiPhone, FiMail, FiClock } from "react-icons/fi";
import { siteConfig as s, telLink, waLink } from "@/lib/config";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/#business-card", label: "Business Card" },
  { href: "/medical-store", label: "Medical Store" },
  { href: "/pathkind-lab", label: "Pathkind Lab" },
  { href: "/#contact", label: "Contact" },
];

const units = [
  { icon: "💊", name: "Yadav Medical Store", data: s.businesses.medicalStore },
  { icon: "🧪", name: "Pathkind Lab & Blood Collection", data: s.businesses.pathkindLab },
];

export function Footer() {
  return (
    <footer className="border-t border-teal-200/40 bg-slate-900 text-slate-100 dark:bg-[#031312] dark:border-teal-900/60 px-6 pb-28 pt-14 md:pb-14">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>
            <p className="font-display text-xl font-extrabold flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-[#007a78] text-white flex items-center justify-center font-bold text-sm">Y</span>
              <span>YADAV</span> <span className="text-amber-400 font-hindi">मेडिकल</span>
            </p>
            <p className="mt-3 text-sm text-slate-300 font-medium">{s.tagline}</p>
            <div className="mt-5 flex flex-col gap-2.5 text-sm font-semibold">
              <a
                href={telLink}
                className="flex items-center gap-2 text-slate-300 hover:text-amber-400 transition"
              >
                <FiPhone className="text-amber-400" aria-hidden /> {s.phone}
              </a>
              <a
                href={`mailto:${s.email}`}
                className="flex items-center gap-2 text-slate-300 hover:text-amber-400 transition"
              >
                <FiMail className="text-amber-400" aria-hidden /> {s.email}
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-bold text-amber-400 uppercase tracking-wider text-xs">Quick Links</h3>
            <ul className="mt-4 space-y-2 text-sm font-semibold">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-slate-300 transition hover:text-amber-300"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* All Business Addresses */}
          <div className="lg:col-span-2">
            <h3 className="font-display font-bold text-amber-400 uppercase tracking-wider text-xs">Our Store Locations</h3>
            <div className="mt-4 space-y-5">
              {units.map((u) => (
                <div key={u.name} className="text-sm bg-white/5 p-4 rounded-2xl border border-white/10">
                  <p className="flex items-center gap-2 font-bold text-white text-base">
                    <span role="img" aria-label={u.name}>{u.icon}</span>
                    {u.name}
                  </p>
                  <p className="mt-2 flex items-start gap-1.5 text-xs text-slate-300 font-medium">
                    <FiMapPin className="mt-0.5 shrink-0 text-amber-400 text-sm" aria-hidden />
                    {u.data.address}
                  </p>
                  <div className="mt-2 flex flex-wrap gap-4 text-xs font-semibold text-teal-200">
                    <a
                      href={`tel:${u.data.phone}`}
                      className="flex items-center gap-1 hover:text-amber-300"
                    >
                      <FiPhone className="text-amber-400" aria-hidden />
                      {u.data.phone}
                    </a>
                    <span className="flex items-center gap-1">
                      <FiClock className="text-amber-400" aria-hidden />
                      {u.data.hours}
                    </span>
                  </div>
                  <a
                    href={u.data.mapsDirection}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block text-xs font-bold text-amber-400 hover:underline"
                  >
                    Get Directions →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 flex flex-col items-center gap-3 border-t border-white/10 pt-8 text-center text-xs text-slate-400 font-medium">
          <p>
            © {new Date().getFullYear()} {s.businessName} · Front of CHC Hospital, Sugar Mill Road, Khalilabad · Trusted Since 1993
          </p>
          <div className="flex gap-4">
            <a href="/privacy-policy" className="hover:text-amber-400">
              Privacy Policy
            </a>
            <span>·</span>
            <a href="/terms" className="hover:text-amber-400">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
