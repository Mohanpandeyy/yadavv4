import { siteConfig as s } from "./config";

export function buildJsonLd() {
  const address = {
    "@type": "PostalAddress",
    streetAddress: s.address.line1,
    addressLocality: s.address.city,
    addressRegion: s.address.state,
    postalCode: s.address.pincode,
    addressCountry: s.address.country,
  };
  return [
    {
      "@context": "https://schema.org",
      "@type": ["Pharmacy", "MedicalBusiness"],
      "@id": `${s.url}/#pharmacy`,
      name: s.businessName,
      alternateName: s.brandName,
      url: s.url,
      telephone: s.phone,
      email: s.email,
      address,
      geo: {
        "@type": "GeoCoordinates",
        latitude: s.geo.lat,
        longitude: s.geo.lng,
      },
      openingHours: "Mo-Su 08:00-22:00",
      foundingDate: "1993",
      priceRange: "₹₹",
      department: [
        { "@type": "MedicalClinic", name: "Pathkind Lab & Blood Collection Centre" },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": `${s.url}/#org`,
      name: s.brandName,
      url: s.url,
      logo: `${s.url}/icon.png`,
      contactPoint: {
        "@type": "ContactPoint",
        telephone: s.phone,
        contactType: "customer service",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: s.faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: s.url },
      ],
    },
  ];
}

export function buildBusinessJsonLd(
  businessKey: "medicalStore" | "pathkindLab" | "bloodCollection",
  pageUrl: string
) {
  const b = s.businesses[businessKey];
  return [
    {
      "@context": "https://schema.org",
      "@type": businessKey === "medicalStore" ? "Pharmacy" : "MedicalClinic",
      "@id": `${pageUrl}#business`,
      name: b.name,
      description: b.description,
      url: pageUrl,
      telephone: b.phone,
      email: b.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: b.address.split(",")[0],
        addressLocality: s.address.city,
        addressRegion: s.address.state,
        postalCode: s.address.pincode,
        addressCountry: s.address.country,
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: b.geo.lat,
        longitude: b.geo.lng,
      },
      openingHours: b.hours.includes("7:00 AM")
        ? "Mo-Su 07:00-21:00"
        : "Mo-Su 08:00-22:00",
      priceRange: "₹₹",
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: b.faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: s.url },
        { "@type": "ListItem", position: 2, name: b.name, item: pageUrl },
      ],
    },
  ];
}
