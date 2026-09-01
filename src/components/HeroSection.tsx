"use client";

import { motion } from "framer-motion";
import {
  Download,
  Mail,
  Phone,
  ShieldCheck,
  TrendingUp,
  MapPin,
  FileCheck2,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

export function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.14,
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
        duration: 0.65,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const metrics = [
    {
      icon: TrendingUp,
      value: "10+ Years",
      label: "Banking Operations",
      detail: "Mohakhali • Banani • Gulshan Branches",
      accentGlow: "group-hover:shadow-glass-glow-gold",
      iconColor: "text-amber-400",
      badgeColor: "bg-amber-500/10 text-amber-300 border-amber-500/20",
    },
    {
      icon: ShieldCheck,
      value: "JAIBB & AIBB",
      label: "Banking Governance",
      detail: "Institute of Bankers Bangladesh (IBB)",
      accentGlow: "group-hover:shadow-glass-glow-cyan",
      iconColor: "text-sky-400",
      badgeColor: "bg-sky-500/10 text-sky-300 border-sky-500/20",
    },
    {
      icon: FileCheck2,
      value: "Trade & L/C",
      label: "Export Settlement",
      detail: "Foreign Exchange & AML/CFT Audits",
      accentGlow: "group-hover:shadow-glass-glow-emerald",
      iconColor: "text-emerald-400",
      badgeColor: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
    },
  ];

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-center items-center overflow-hidden py-20 md:py-28 px-4 sm:px-6 lg:px-8">
      {/* Surreal Foreground Light Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] md:w-[800px] h-[380px] md:h-[480px] bg-amber-500/8 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-16 right-10 w-72 h-72 bg-sky-500/8 rounded-full blur-[110px] pointer-events-none" />

      <motion.div
        className="max-w-5xl w-full mx-auto text-center space-y-8 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Floating Frosted Glass Status Badge */}
        <motion.div variants={itemVariants} className="inline-block">
          <div className="glass-pill inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs font-sans tracking-wide text-obsidian-200 shadow-glass-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-luminescence shrink-0 shadow-[0_0_8px_#34d399]" />
            <span className="text-amber-400 font-medium">Available for Executive Deployment</span>
            <span className="text-obsidian-500">•</span>
            <span className="text-obsidian-300">National Bank PLC</span>
          </div>
        </motion.div>

        {/* Candidate Identity */}
        <motion.div variants={itemVariants} className="space-y-3.5">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white font-heading leading-tight drop-shadow-[0_4px_24px_rgba(0,0,0,0.5)]">
            Zannat Ara Nishat
          </h1>
          <div className="flex items-center justify-center gap-2">
            <span className="text-lg sm:text-2xl md:text-3xl font-medium tracking-wide text-amber-300/90 font-heading">
              Senior Banking &amp; Foreign Trade Specialist
            </span>
          </div>
        </motion.div>

        {/* Executive Summary */}
        <motion.div variants={itemVariants} className="max-w-3xl mx-auto">
          <p className="text-obsidian-200 text-base sm:text-lg md:text-xl leading-relaxed font-normal">
            Distinguished banking professional with over{" "}
            <span className="text-amber-400 font-semibold">10+ years</span> of
            institutional leadership at{" "}
            <span className="text-white font-medium">National Bank PLC</span>{" "}
            across Mohakhali, Banani, and Gulshan branches. Specialized in high-volume{" "}
            <span className="text-white font-medium">Foreign Trade &amp; Export L/C Settlement</span>,
            rigorous <span className="text-white font-medium">Cash Risk Mitigation</span>, and complete adherence to{" "}
            <span className="text-white font-medium">Bangladesh Bank &amp; ICCD AML/CFT</span> governance frameworks.
          </p>
        </motion.div>

        {/* Action CTAs */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2"
        >
          {/* Primary CTA: Resume Download */}
          <a
            href="/resume.pdf"
            download="Zannat_Ara_Nishat_Resume.pdf"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-obsidian-950 font-bold transition-all duration-300 shadow-glass-glow-gold hover:-translate-y-0.5 active:translate-y-0 text-base font-sans"
          >
            <Download className="w-5 h-5 shrink-0" />
            <span>Download Official Resume</span>
          </a>

          {/* Secondary CTA: Terminal Contact */}
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
            className="w-full sm:w-auto glass-panel glass-panel-interactive inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-white hover:text-amber-300 font-medium transition-all duration-300 text-base font-sans"
          >
            <Sparkles className="w-5 h-5 text-amber-400 shrink-0" />
            <span>Initiate Direct Inquiry</span>
            <ArrowUpRight className="w-4 h-4 text-obsidian-400 group-hover:text-amber-300" />
          </a>
        </motion.div>

        {/* Quick Contact Frosted Strip */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-1 text-xs sm:text-sm text-obsidian-300"
        >
          <a
            href="mailto:nishatzannatara@gmail.com"
            className="glass-pill inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full hover:text-amber-300 transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-amber-400" />
            <span>nishatzannatara@gmail.com</span>
          </a>
          <a
            href="tel:+8801927265191"
            className="glass-pill inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full hover:text-amber-300 transition-colors font-mono"
          >
            <Phone className="w-3.5 h-3.5 text-amber-400" />
            <span>+8801927265191</span>
          </a>
          <div className="glass-pill inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full">
            <MapPin className="w-3.5 h-3.5 text-sky-400" />
            <span>Dhaka, Bangladesh</span>
          </div>
        </motion.div>

        {/* Crystalline Glass Metric Cards */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-6 max-w-4xl mx-auto text-left"
        >
          {metrics.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`glass-panel glass-panel-interactive p-6 rounded-2xl group ${item.accentGlow}`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <Icon className={`w-5 h-5 ${item.iconColor} shrink-0`} />
                  </div>
                  <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-sans font-medium border ${item.badgeColor}`}>
                    Verified Track Record
                  </span>
                </div>
                <div className="space-y-1.5">
                  <div className="font-mono font-bold text-2xl sm:text-3xl text-white tabular-nums tracking-tight">
                    {item.value}
                  </div>
                  <div className="text-sm font-semibold text-amber-300 font-sans">
                    {item.label}
                  </div>
                  <p className="text-xs text-obsidian-300 leading-relaxed font-sans pt-0.5">
                    {item.detail}
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
