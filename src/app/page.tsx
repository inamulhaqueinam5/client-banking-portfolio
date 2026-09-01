import FloatingNav from "@/components/FloatingNav";
import HeroSection from "@/components/HeroSection";
import CareerTimeline from "@/components/CareerTimeline";
import CompetencyGrid from "@/components/CompetencyGrid";
import CredentialsCarousel from "@/components/CredentialsCarousel";
import ContactSection from "@/components/ContactSection";
import { getExecutiveProfile } from "@/domain/content";

export default function Home() {
  const profile = getExecutiveProfile();

  return (
    <main className="min-h-screen relative overflow-hidden flex flex-col justify-between">
      {/* Persistent Floating Executive Navigation HUD */}
      <FloatingNav />

      <div className="space-y-16 sm:space-y-24">
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
      </div>

      {/* Surreal Frosted Glass Footer */}
      <footer className="w-full py-8 border-t border-emerald-900/10 dark:border-white/[0.08] relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-obsidian-400 font-sans">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-emerald-950 dark:text-white">{profile.name}</span>
            <span className="text-slate-300 dark:text-obsidian-600">•</span>
            <span>{profile.title}, {profile.institution}</span>
          </div>
          <div>
            <span>© {new Date().getFullYear()} All Rights Reserved. Verified Banking Credentials.</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
