import HeroSection from "@/components/HeroSection";
import CareerTimeline from "@/components/CareerTimeline";
import CompetencyGrid from "@/components/CompetencyGrid";
import CredentialsCarousel from "@/components/CredentialsCarousel";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-navy-bg relative overflow-hidden">
      {/* Hero Section */}
      <HeroSection />

      {/* Interactive Career Timeline Section */}
      <CareerTimeline />

      {/* Filterable Competency & Skill Matrix Section */}
      <CompetencyGrid />

      {/* Qualifications, Certifications & Governance Carousel */}
      <CredentialsCarousel />

      {/* Interactive Contact & Reference Showcase Section */}
      <ContactSection />
    </main>
  );
}

