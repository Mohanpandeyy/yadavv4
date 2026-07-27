import { FiMapPin, FiClock, FiPhone, FiMail, FiNavigation } from "react-icons/fi";
import { getBusinessTelLink } from "@/lib/config";

interface Props {
  business: {
    address: string;
    hours: string;
    phone: string;
    email: string;
    mapsEmbed: string;
    mapsDirection: string;
  };
}

export function BusinessContact({ business }: Props) {
  const telLink = getBusinessTelLink(business.phone);
  return (
    <section className="section">
      <h2 className="text-center font-display text-4xl font-bold md:text-5xl">
        Visit <span className="text-gradient">Us</span>
      </h2>
      <div className="mt-16 mx-auto max-w-xl">
        <div className="glass space-y-6 rounded-3xl p-9 shadow-soft">
          <p className="flex items-start gap-3">
            <FiMapPin className="mt-1 shrink-0 text-brand-500" aria-hidden />
            {business.address}
          </p>
          <p className="flex items-center gap-3">
            <FiClock className="text-brand-500" aria-hidden /> {business.hours}
          </p>
          <a href={telLink} className="flex items-center gap-3 hover:text-brand-500">
            <FiPhone className="text-brand-500" aria-hidden /> {business.phone}
          </a>
          <a href={`mailto:${business.email}`} className="flex items-center gap-3 hover:text-brand-500">
            <FiMail className="text-brand-500" aria-hidden /> {business.email}
          </a>
          <a
            href={business.mapsDirection}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-brand-500 px-6 py-3 font-semibold text-white shadow-glow transition hover:bg-brand-600"
          >
            <FiNavigation aria-hidden /> Get Directions
          </a>
        </div>
      </div>
    </section>
  );
}
