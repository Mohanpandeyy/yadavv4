import site from "@/config/site.json";
export const siteConfig = site;
export const waLink = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(site.whatsappMessage)}`;
export const telLink = `tel:${site.phone}`;
export const bookLink = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Hello, I would like to book a blood test.")}`;
export const medicineLink = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Hello, I would like to enquire about medicines.")}`;

export function getBusinessWaLink(whatsapp: string, message: string) {
  return `https://wa.me/${whatsapp}?text=${encodeURIComponent(message)}`;
}

export function getBusinessTelLink(phone: string) {
  return `tel:${phone}`;
}
