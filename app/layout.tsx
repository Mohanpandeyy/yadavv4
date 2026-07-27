import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Noto_Sans_Devanagari } from "next/font/google";
import "./globals.css";
import { siteConfig as s } from "@/lib/config";
import { buildJsonLd } from "@/lib/schema";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingButtons } from "@/components/layout/FloatingButtons";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const notoDevanagari = Noto_Sans_Devanagari({
  subsets: ["devanagari"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-devanagari",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(s.url),
  title: {
    default: `${s.brandName} | Pharmacy & Pathkind Lab in Khalilabad`,
    template: `%s | ${s.brandName}`,
  },
  description:
    "Yadav Medical Store 1993 – trusted pharmacy & Pathkind Lab collection centre in front of CHC Hospital, Khalilabad, Sant Kabir Nagar. Home sample collection, NABL certified reports & emergency medicines.",
  keywords: [
    "medical store Khalilabad",
    "Pathkind Lab Khalilabad",
    "blood test Sant Kabir Nagar",
    "pharmacy near CHC Hospital",
    "home sample collection Khalilabad",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: s.url,
    siteName: s.brandName,
    title: `${s.brandName} – Your Trusted Healthcare Partner Since 1993`,
    description: "Medicines, Pathology, Blood Collection & Home Healthcare in Khalilabad.",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: s.brandName }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${s.brandName} – Healthcare Since 1993`,
    description: "Medicines, Pathology, Blood Collection & Home Healthcare in Khalilabad.",
    images: ["/og.jpg"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { themeColor: "#007a78" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${plusJakarta.variable} ${notoDevanagari.variable} font-sans bg-slate-50 text-slate-900 antialiased dark:bg-[#061817] dark:text-slate-100`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(buildJsonLd()) }}
        />
        <ThemeProvider>
          <SmoothScroll>
            <Navbar />
            <main id="main">{children}</main>
            <Footer />
            <FloatingButtons />
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
