"use client";

import { motion } from "framer-motion";
import {
  Download,
  Mail,
  Phone,
  Award,
  Building2,
  Briefcase,
  MapPin,
} from "lucide-react";

export function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const badgeItems = [
    {
      icon: Award,
      title: "JAIBB & AIBB Certified",
      subtitle: "Professional Banking Diplomas",
    },
    {
      icon: Briefcase,
      title: "10+ Years Banking Excellence",
      subtitle: "Foreign Trade & Cash Operations",
    },
    {
      icon: Building2,
      title: "National Bank PLC",
      subtitle: "Mohakhali • Banani • Gulshan",
    },
  ];

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-center items-center overflow-hidden py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-navy-bg">
      {/* Background Decorative Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[500px] md:w-[650px] h-[350px] sm:h-[500px] md:h-[650px] bg-gold-accent/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-900/10 rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute top-10 left-10 w-72 h-72 bg-gold-accent/5 rounded-full blur-[80px] pointer-events-none" />

      {/* Background Subtle Gradient Texture */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900/20 via-navy-bg to-navy-bg pointer-events-none" />

      <motion.div
        className="max-w-5xl w-full mx-auto text-center space-y-8 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Top Status Pill / Identity Badge */}
        <motion.div variants={itemVariants} className="inline-block">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-gold-accent/30 text-gold-accent text-xs sm:text-sm font-medium tracking-wide shadow-lg shadow-gold-accent/5">
            <Building2 className="w-4 h-4 text-gold-accent shrink-0" />
            <span>Senior Banking Executive • National Bank PLC</span>
          </div>
        </motion.div>

        {/* Candidate Name & Title */}
        <motion.div variants={itemVariants} className="space-y-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-50 font-heading leading-tight">
            Zannat Ara Nishat
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold tracking-wide gold-gradient-text max-w-3xl mx-auto">
            Senior Banking & Foreign Trade Specialist
          </h2>
        </motion.div>

        {/* Executive Summary */}
        <motion.div variants={itemVariants} className="max-w-3xl mx-auto">
          <p className="text-slate-300 text-base sm:text-lg md:text-xl leading-relaxed font-normal">
            Distinguished banking professional with over{" "}
            <span className="text-gold-accent font-semibold">10+ years</span> of
            institutional experience at{" "}
            <span className="text-slate-100 font-semibold">National Bank PLC</span>{" "}
            spanning key commercial hubs across Mohakhali, Banani, and Gulshan branches.
            Specialized in managing complex{" "}
            <span className="text-slate-100 font-medium">Foreign Trade</span> operations,
            scrutinizing foreign exchange export bills, executing rigorous{" "}
            <span className="text-slate-100 font-medium">Cash Risk Mitigation</span>, and leading institutional{" "}
            <span className="text-slate-100 font-medium">AML/CFT Compliance</span> framework adherence.
          </p>
        </motion.div>

        {/* Action CTAs */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2 sm:pt-4"
        >
          {/* Primary CTA */}
          <a
            href="/resume.pdf"
            download="Zannat_Ara_Nishat_Resume.pdf"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-gold-accent hover:bg-gold-hover text-navy-bg font-semibold transition-all duration-300 shadow-lg shadow-gold-accent/20 hover:shadow-gold-accent/30 hover:-translate-y-0.5 active:translate-y-0 text-base"
          >
            <Download className="w-5 h-5 shrink-0" />
            <span>Download Resume</span>
          </a>

          {/* Secondary CTA */}
          <a
            href="#contact"
            onClick={(e) => {
              const contactElement = document.getElementById("contact");
              if (contactElement) {
                e.preventDefault();
                contactElement.scrollIntoView({ behavior: "smooth" });
              } else {
                window.location.href = "mailto:nishatzannatara@gmail.com";
              }
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl glass-panel hover:bg-navy-surface text-slate-100 hover:text-gold-accent border border-gold-accent/30 hover:border-gold-accent/60 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 text-base font-medium"
          >
            <Mail className="w-5 h-5 text-gold-accent shrink-0" />
            <span>Get in Touch</span>
          </a>
        </motion.div>

        {/* Quick Contact & Location Pills */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 pt-2 text-xs sm:text-sm text-slate-400"
        >
          <a
            href="mailto:nishatzannatara@gmail.com"
            className="inline-flex items-center gap-1.5 hover:text-gold-accent transition-colors"
          >
            <Mail className="w-4 h-4 text-gold-accent/80" />
            <span>nishatzannatara@gmail.com</span>
          </a>
          <span className="hidden sm:inline text-slate-600">•</span>
          <a
            href="tel:+8801927265191"
            className="inline-flex items-center gap-1.5 hover:text-gold-accent transition-colors"
          >
            <Phone className="w-4 h-4 text-gold-accent/80" />
            <span>+8801927265191</span>
          </a>
          <span className="hidden sm:inline text-slate-600">•</span>
          <div className="inline-flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-gold-accent/80" />
            <span>Dhaka, Bangladesh</span>
          </div>
        </motion.div>

        {/* Highlights / Badges Grid */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 pt-8 max-w-4xl mx-auto"
        >
          {badgeItems.map((badge, idx) => {
            const Icon = badge.icon;
            return (
              <div
                key={idx}
                className="glass-panel glass-panel-hover p-4 sm:p-5 rounded-2xl border border-gold-accent/15 flex flex-col items-center text-center space-y-2 group"
              >
                <div className="p-2.5 rounded-xl bg-gold-accent/10 border border-gold-accent/20 text-gold-accent group-hover:bg-gold-accent group-hover:text-navy-bg transition-colors duration-300">
                  <Icon className="w-6 h-6 shrink-0" />
                </div>
                <div>
                  <h3 className="text-slate-100 font-semibold text-sm sm:text-base font-sans group-hover:text-gold-accent transition-colors">
                    {badge.title}
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm font-normal mt-0.5">
                    {badge.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}

export default HeroSection;
