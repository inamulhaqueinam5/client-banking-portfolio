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
  ArrowUpRight,
  LucideIcon,
} from "lucide-react";
import { getExecutiveProfile } from "@/domain/content";

const METRIC_ICONS: Record<string, LucideIcon> = {
  "trending-up": TrendingUp,
  "shield-check": ShieldCheck,
  "file-check": FileCheck2,
};

export function HeroSection() {
  const profile = getExecutiveProfile();

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

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-center items-center overflow-hidden py-20 md:py-28 px-4 sm:px-6 lg:px-8">
      {/* Surreal Foreground Light Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] md:w-[800px] h-[380px] md:h-[480px] bg-emerald-500/10 dark:bg-amber-500/8 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-16 right-10 w-72 h-72 bg-teal-500/10 dark:bg-sky-500/8 rounded-full blur-[110px] pointer-events-none" />

      <motion.div
        className="max-w-5xl w-full mx-auto text-center space-y-8 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Floating Frosted Glass Status Badge */}
        <motion.div variants={itemVariants} className="inline-block">
          <div className="glass-pill inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs font-sans tracking-wide text-slate-700 dark:text-obsidian-200 shadow-glass-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-luminescence shrink-0 shadow-[0_0_8px_#34d399]" />
            <span className="text-emerald-800 dark:text-amber-400 font-bold dark:font-medium">Available for Executive Deployment</span>
            <span className="text-slate-400 dark:text-obsidian-500">•</span>
            <span className="text-slate-500 dark:text-obsidian-300">National Bank PLC</span>
          </div>
        </motion.div>

        {/* Candidate Identity */}
        <motion.div variants={itemVariants} className="space-y-3.5">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-emerald-950 dark:text-white font-heading leading-tight dark:drop-shadow-[0_4px_24px_rgba(0,0,0,0.5)]">
            Zannat Ara Nishat
          </h1>
          <div className="flex items-center justify-center gap-2">
            <span className="text-lg sm:text-2xl md:text-3xl font-semibold tracking-wide text-emerald-700 dark:text-amber-300/90 font-heading">
              Senior Banking &amp; Foreign Trade Specialist
            </span>
          </div>
        </motion.div>

        {/* Executive Summary */}
        <motion.div variants={itemVariants} className="max-w-3xl mx-auto">
          <p className="text-slate-600 dark:text-obsidian-200 text-base sm:text-lg md:text-xl leading-relaxed font-normal">
            Distinguished banking professional with over{" "}
            <span className="text-emerald-800 dark:text-amber-400 font-bold dark:font-semibold">10+ years</span> of
            institutional leadership at{" "}
            <span className="text-emerald-950 dark:text-white font-semibold dark:font-medium">National Bank PLC</span>{" "}
            across Mohakhali, Banani, and Gulshan branches. Specialized in high-volume{" "}
            <span className="text-emerald-950 dark:text-white font-semibold dark:font-medium">Foreign Trade &amp; Export L/C Settlement</span>,
            rigorous <span className="text-emerald-950 dark:text-white font-semibold dark:font-medium">Cash Risk Mitigation</span>, and complete adherence to{" "}
            <span className="text-emerald-950 dark:text-white font-semibold dark:font-medium">Bangladesh Bank &amp; ICCD AML/CFT</span> governance frameworks.
          </p>
        </motion.div>

        {/* Action CTAs */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2"
        >
          {/* Primary CTA: Resume Download */}
          <a
            href={profile.resumePdfPath}
            download={profile.resumeDownloadFilename}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-700 to-emerald-800 hover:from-emerald-600 hover:to-emerald-700 text-white dark:from-amber-500 dark:to-amber-600 dark:hover:from-amber-400 dark:hover:to-amber-500 dark:text-obsidian-950 font-bold transition-all duration-300 shadow-emerald-900/20 dark:shadow-glass-glow-gold hover:-translate-y-0.5 active:translate-y-0 text-base font-sans"
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
                window.location.href = `mailto:${profile.contact.email}`;
              }
            }}
            className="w-full sm:w-auto glass-panel glass-panel-interactive inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-emerald-950 dark:text-white hover:text-emerald-700 dark:hover:text-amber-300 font-semibold dark:font-medium transition-all duration-300 text-base font-sans shadow-sm"
          >
            <Mail className="w-5 h-5 text-emerald-600 dark:text-amber-400 shrink-0" />
            <span>Initiate Direct Inquiry</span>
            <ArrowUpRight className="w-4 h-4 text-slate-400 dark:text-obsidian-400 group-hover:text-emerald-700 dark:group-hover:text-amber-300" />
          </a>
        </motion.div>

        {/* Quick Contact Frosted Strip */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-1 text-xs sm:text-sm text-slate-600 dark:text-obsidian-300"
        >
          <a
            href={`mailto:${profile.contact.email}`}
            className="glass-pill inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full hover:text-emerald-800 dark:hover:text-amber-300 transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-emerald-600 dark:text-amber-400" />
            <span>{profile.contact.email}</span>
          </a>
          <a
            href={`tel:${profile.contact.phone}`}
            className="glass-pill inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full hover:text-emerald-800 dark:hover:text-amber-300 transition-colors font-mono"
          >
            <Phone className="w-3.5 h-3.5 text-emerald-600 dark:text-amber-400" />
            <span>{profile.contact.phone}</span>
          </a>
          <div className="glass-pill inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full">
            <MapPin className="w-3.5 h-3.5 text-teal-600 dark:text-sky-400" />
            <span>{profile.contact.location}</span>
          </div>
        </motion.div>

        {/* Crystalline Glass Metric Cards */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-6 max-w-4xl mx-auto text-left"
        >
          {profile.metrics.map((item, idx) => {
            const Icon = (item.iconKey && METRIC_ICONS[item.iconKey]) || TrendingUp;
            return (
              <div
                key={idx}
                className={`glass-panel glass-panel-interactive p-6 rounded-2xl group ${item.accentGlow}`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200/80 dark:bg-white/[0.04] dark:border-white/10 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <Icon className={`w-5 h-5 ${item.iconColor} shrink-0`} />
                  </div>
                  <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-sans font-medium border ${item.badgeColor}`}>
                    {item.badgeText || "Verified Track Record"}
                  </span>
                </div>
                <div className="space-y-1.5">
                  <div className="font-mono font-bold text-2xl sm:text-3xl text-emerald-950 dark:text-white tabular-nums tracking-tight">
                    {item.value}
                  </div>
                  <div className="text-sm font-bold dark:font-semibold text-emerald-700 dark:text-amber-300 font-sans">
                    {item.label}
                  </div>
                  <p className="text-xs text-slate-500 dark:text-obsidian-300 leading-relaxed font-sans pt-0.5">
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
