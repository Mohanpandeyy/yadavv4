import type { Metadata } from "next";
import { siteConfig as s } from "@/lib/config";
import { buildBusinessJsonLd } from "@/lib/schema";
import { BusinessPageHero } from "@/components/business/BusinessPageHero";
import { BusinessServices } from "@/components/business/BusinessServices";
import { BusinessGallery } from "@/components/business/BusinessGallery";
import { BusinessFAQ } from "@/components/business/BusinessFAQ";
import { BusinessContact } from "@/components/business/BusinessContact";

const business = s.businesses.pathkindLab;
const pageUrl = `${s.url}/pathkind-lab`;

export const metadata: Metadata = {
  title: `${business.name} | ${business.tagline}`,
  description: business.description,
  alternates: { canonical: "/pathkind-lab" },
  openGraph: {
    title: `${business.name} – ${business.tagline}`,
    description: business.description,
    url: pageUrl,
    images: [{ url: "/og-lab.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${business.name} – ${business.tagline}`,
    description: business.description,
    images: ["/og-lab.jpg"],
  },
};

export default function PathkindLabPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildBusinessJsonLd("pathkindLab", pageUrl)) }}
      />
      <BusinessPageHero
        icon="🧪"
        title={business.name}
        tagline={business.tagline}
        description={business.description}
        whatsapp={business.whatsapp}
        phone={business.phone}
      />
      <BusinessServices services={business.services} />
      <BusinessGallery images={["lab.jpg", "reports.jpg", "shop-front.jpg"]} />
      <BusinessFAQ faqs={business.faqs} />
      <BusinessContact business={business} />
    </>
  );
}
