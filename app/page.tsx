import dynamic from "next/dynamic";
import { Hero } from "@/components/hero/Hero";
import { AppleShowcase } from "@/components/sections/AppleShowcase";
import { BusinessCards } from "@/components/sections/BusinessCards";

const Stats = dynamic(() => import("@/components/sections/Stats"));
const Features = dynamic(() => import("@/components/sections/Features"));
const Gallery = dynamic(() => import("@/components/sections/Gallery"));
const Pathkind = dynamic(() => import("@/components/sections/Pathkind"));
const MedicalStore = dynamic(() => import("@/components/sections/MedicalStore"));
const Reviews = dynamic(() => import("@/components/sections/Reviews"));
const FAQ = dynamic(() => import("@/components/sections/FAQ"));
const Contact = dynamic(() => import("@/components/sections/Contact"));
const HealthcarePopup = dynamic(() => import("@/components/HealthcarePopup"));

export default function Home() {
  return (
    <>
      <Hero />
      <BusinessCards />
      <AppleShowcase />
      <Stats />
      <Features />
      <Gallery />
      <Pathkind />
      <MedicalStore />
      <Reviews />
      <FAQ />
      <Contact />
      <HealthcarePopup />
    </>
  );
}
