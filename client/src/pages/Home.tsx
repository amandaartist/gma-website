/*
 * Home — GMA Website
 * Assembles all sections in order
 * Design: Editorial Luxury — Cormorant Garamond + Outfit
 */

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import SolutionsSection from "@/components/sections/SolutionsSection";
import ModelSection from "@/components/sections/ModelSection";
import AdvantagesSection from "@/components/sections/AdvantagesSection";
import PartnerSection from "@/components/sections/PartnerSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SolutionsSection />
        <ModelSection />
        <AdvantagesSection />
        <PartnerSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
