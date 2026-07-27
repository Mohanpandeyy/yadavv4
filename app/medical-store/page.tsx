import type { Metadata } from "next";
import { siteConfig as s } from "@/lib/config";
import { buildBusinessJsonLd } from "@/lib/schema";
import { BusinessPageHero } from "@/components/business/BusinessPageHero";
import { BusinessServices } from "@/components/business/BusinessServices";
import { BusinessGallery } from "@/components/business/BusinessGallery";
import { BusinessFAQ } from "@/components/business/BusinessFAQ";
import { BusinessContact } from "@/components/business/BusinessContact";

const business = s.businesses.medicalStore;
const pageUrl = `${s.url}/medical-store`;

export const metadata: Metadata = {
  title: `${business.name} | ${business.tagline}`,
  description: business.description,
  alternates: { canonical: "/medical-store" },
  openGraph: {
    title: `${business.name} – ${business.tagline}`,
    description: business.description,
    url: pageUrl,
    images: [{ url: "/og-store.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${business.name} – ${business.tagline}`,
    description: business.description,
    images: ["/og-store.jpg"],
  },
};

export default function MedicalStorePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildBusinessJsonLd("medicalStore", pageUrl)) }}
      />
      <BusinessPageHero
        icon="💊"
        title={business.name}
        tagline={business.tagline}
        description={business.description}
        whatsapp={business.whatsapp}
        phone={business.phone}
      />
      <BusinessServices services={business.services} />
      <BusinessGallery images={["store.jpg", "medicines.jpg", "shop-front.jpg"]} />
      <BusinessFAQ faqs={business.faqs} />
      <BusinessContact business={business} />
    </>
  );
}
