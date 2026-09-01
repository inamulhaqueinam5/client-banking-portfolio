"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FileCheck,
  TrendingUp,
  CircleDollarSign,
  BookOpenCheck,
  FileText,
  ShieldCheck,
  Building2,
  AlertTriangle,
  ClipboardCheck,
  ShieldAlert,
  Landmark,
  Lock,
  RefreshCw,
  CheckCircle2,
  UserCheck,
  Cpu,
  Zap,
  Network,
  Server,
  Languages,
  MessageSquare,
  Users,
  Lightbulb,
  BadgeCheck,
  Award,
  Filter,
  LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

import {
  getCompetencyMatrix,
  getCompetencyCategories,
  getCompetencyCategoryCounts,
  SkillCategory,
  CompetencyItem,
} from "@/domain/content";

export type { SkillCategory, CompetencyItem };

const SKILL_ICONS: Record<string, LucideIcon> = {
  "file-check": FileCheck,
  "trending-up": TrendingUp,
  "circle-dollar-sign": CircleDollarSign,
  "book-open-check": BookOpenCheck,
  "file-text": FileText,
  "shield-check": ShieldCheck,
  "building": Building2,
  "alert-triangle": AlertTriangle,
  "clipboard-check": ClipboardCheck,
  "shield-alert": ShieldAlert,
  "landmark": Landmark,
  "lock": Lock,
  "refresh-cw": RefreshCw,
  "check-circle-2": CheckCircle2,
  "user-check": UserCheck,
  "cpu": Cpu,
  "zap": Zap,
  "network": Network,
  "server": Server,
  "languages": Languages,
  "message-square": MessageSquare,
  "users": Users,
  "lightbulb": Lightbulb,
  "badge-check": BadgeCheck,
};

export const CompetencyGrid: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<SkillCategory>("All");
  const [showOnlyCertified, setShowOnlyCertified] = useState<boolean>(false);

  const categories = getCompetencyCategories();
  const categoryCounts = getCompetencyCategoryCounts();
  const filteredSkills = getCompetencyMatrix({
    category: selectedCategory,
    accreditedOnly: showOnlyCertified,
  });

  return (
    <section
      id="competencies"
      className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10 text-slate-800 dark:text-obsidian-100"
    >
      {/* Header Section */}
      <div className="text-center space-y-4 max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-emerald-950 dark:text-white tracking-tight">
          Core Competency &amp; Skill Matrix
        </h2>

        <p className="text-slate-600 dark:text-obsidian-300 text-sm sm:text-base leading-relaxed">
          Comprehensive operational breakdown across Foreign Trade, Regulatory Compliance,
          Cash Operations, and Core Banking Technologies cultivated over 10+ years at National Bank PLC.
        </p>
      </div>

      {/* Regulatory Certification Highlight Cards */}
      <div className="mb-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-4 rounded-2xl glass-panel glass-panel-interactive flex items-center gap-3.5 shadow-glass-sm">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 dark:bg-emerald-500/10 dark:border-emerald-500/20 flex items-center justify-center text-emerald-700 dark:text-emerald-400 shrink-0">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <div className="text-[11px] font-sans font-bold dark:font-medium text-emerald-700 dark:text-emerald-400 uppercase tracking-wider">
              Central Bank Directive
            </div>
            <div className="text-sm font-semibold text-emerald-950 dark:text-white">
              Bangladesh Bank Compliance
            </div>
          </div>
        </div>

        <div className="p-4 rounded-2xl glass-panel glass-panel-interactive flex items-center gap-3.5 shadow-glass-sm">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 dark:bg-amber-500/10 dark:border-amber-500/20 flex items-center justify-center text-emerald-800 dark:text-amber-400 shrink-0">
            <Award className="w-5 h-5" />
          </div>
          <div>
            <div className="text-[11px] font-sans font-bold dark:font-medium text-emerald-800 dark:text-amber-400 uppercase tracking-wider">
              Banking Diploma
            </div>
            <div className="text-sm font-semibold text-emerald-950 dark:text-white">
              JAIBB Certified Specialist
            </div>
          </div>
        </div>

        <div className="p-4 rounded-2xl glass-panel glass-panel-interactive flex items-center gap-3.5 shadow-glass-sm">
          <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-200 dark:bg-sky-500/10 dark:border-sky-500/20 flex items-center justify-center text-teal-700 dark:text-sky-400 shrink-0">
            <BadgeCheck className="w-5 h-5" />
          </div>
          <div>
            <div className="text-[11px] font-sans font-bold dark:font-medium text-teal-700 dark:text-sky-400 uppercase tracking-wider">
              Advanced Diploma
            </div>
            <div className="text-sm font-semibold text-emerald-950 dark:text-white">
              AIBB Certified Executive
            </div>
          </div>
        </div>
      </div>

      {/* Category Filter Controls */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-3.5 mb-8">
        <div className="w-full overflow-x-auto pb-2 md:pb-0 scrollbar-none">
          <div
            className="inline-flex flex-nowrap md:flex-wrap items-center gap-2 p-1.5 rounded-2xl glass-panel min-w-full md:min-w-0"
            role="tablist"
            aria-label="Competency categories"
          >
            {categories.map((category) => {
              const isActive = selectedCategory === category;
              return (
                <button
                  key={category}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setSelectedCategory(category)}
                  className={cn(
                    "px-4 py-2 rounded-xl text-xs sm:text-sm font-sans transition-all duration-200 whitespace-nowrap flex items-center gap-2 select-none",
                    isActive
                      ? "bg-emerald-700 text-white dark:bg-amber-500 dark:text-obsidian-950 font-bold shadow-sm dark:shadow-glass-glow-gold"
                      : "text-slate-700 dark:text-obsidian-300 hover:text-emerald-950 dark:hover:text-white hover:bg-emerald-500/10 dark:hover:bg-white/[0.04]"
                  )}
                >
                  <span>{category}</span>
                  <span
                    className={cn(
                      "px-1.5 py-0.5 rounded-md text-[10px] font-bold",
                      isActive
                        ? "bg-white/20 text-white dark:bg-obsidian-950/20 dark:text-obsidian-950"
                        : "bg-emerald-50 text-emerald-800 dark:bg-white/[0.06] dark:text-obsidian-400"
                    )}
                  >
                    {categoryCounts[category]}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Certification Only Filter Toggle */}
        <button
          onClick={() => setShowOnlyCertified(!showOnlyCertified)}
          className={cn(
            "w-full md:w-auto shrink-0 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-sans transition-all duration-200",
            showOnlyCertified
              ? "bg-emerald-700 text-white dark:bg-amber-500 dark:text-obsidian-950 font-bold shadow-sm dark:shadow-glass-glow-gold"
              : "glass-pill text-slate-700 dark:text-obsidian-300 hover:text-emerald-950 dark:hover:text-white"
          )}
        >
          <Filter className="w-3.5 h-3.5 text-emerald-600 dark:text-amber-400" />
          <span>Accreditations Only</span>
          {showOnlyCertified && (
            <span className="w-1.5 h-1.5 rounded-full bg-white dark:bg-obsidian-950 animate-luminescence" />
          )}
        </button>
      </div>

      {/* Grid of Skill Cards */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <AnimatePresence mode="popLayout">
          {filteredSkills.map((skill) => {
            const IconComponent = (skill.iconKey && SKILL_ICONS[skill.iconKey]) || ShieldCheck;
            return (
              <motion.div
                key={skill.id}
                layout
                initial={{ opacity: 0, scale: 0.96, y: 12 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: -12 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className={cn(
                  "glass-panel glass-panel-interactive group rounded-2xl p-6 flex flex-col justify-between overflow-hidden shadow-glass-sm",
                  skill.keyHighlight
                    ? "border-emerald-500/40 dark:border-amber-500/30"
                    : "border-emerald-900/10 dark:border-white/[0.08]"
                )}
              >
                <div>
                  {/* Top Row: Icon & Certification Badge */}
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="w-11 h-11 rounded-xl bg-emerald-50 border border-emerald-200/80 dark:bg-white/[0.04] dark:border-white/10 flex items-center justify-center text-emerald-800 dark:text-amber-400 group-hover:border-emerald-500/40 dark:group-hover:border-amber-400/40 group-hover:scale-105 transition-all duration-300 shrink-0">
                      <IconComponent className="w-5 h-5" />
                    </div>

                    {skill.certification && (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-sans font-medium bg-emerald-50 text-emerald-800 border-emerald-200 dark:bg-amber-500/10 dark:text-amber-300 dark:border-amber-500/20">
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-amber-400" />
                        <span>{skill.certification}</span>
                      </span>
                    )}
                  </div>

                  {/* Skill Title */}
                  <h3 className="text-lg font-bold font-heading text-emerald-950 dark:text-white group-hover:text-emerald-700 dark:group-hover:text-amber-300 transition-colors">
                    {skill.name}
                  </h3>

                  {/* Category Indicator */}
                  <div className="mt-1 mb-3">
                    <span className="text-[11px] font-sans text-slate-500 dark:text-obsidian-400 font-medium">
                      {skill.category}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-slate-600 dark:text-obsidian-300 text-xs sm:text-sm leading-relaxed mb-5 font-sans">
                    {skill.description}
                  </p>
                </div>

                {/* Card Footer: Executive Mastery Tier & Proficiency */}
                <div className="pt-3.5 border-t border-emerald-900/10 dark:border-white/[0.08] mt-auto">
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="inline-flex items-center gap-1 text-[11px] font-sans px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border-emerald-200 dark:bg-amber-500/10 dark:text-amber-300 dark:border-amber-500/20 font-medium">
                      {skill.proficiencyLabel}
                    </span>
                    <span className="font-mono font-bold text-emerald-800 dark:text-amber-400 tabular-nums text-xs">
                      {skill.proficiencyLevel}%
                    </span>
                  </div>

                  <div className="w-full h-1.5 bg-slate-200 dark:bg-obsidian-950/80 rounded-full overflow-hidden border border-emerald-900/10 dark:border-white/[0.05]">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.proficiencyLevel}%` }}
                      transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                      className="h-full bg-gradient-to-r from-emerald-600 to-teal-500 dark:from-amber-500 dark:to-amber-400 rounded-full shadow-[0_0_8px_rgba(16,185,129,0.3)] dark:shadow-[0_0_8px_rgba(245,158,11,0.4)]"
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>

      {/* Empty State Fallback */}
      {filteredSkills.length === 0 && (
        <div className="text-center py-14 px-6 rounded-2xl glass-panel">
          <Filter className="w-8 h-8 text-slate-400 dark:text-obsidian-400 mx-auto mb-3" />
          <h4 className="text-lg font-bold text-emerald-950 dark:text-white mb-1 font-heading">No Competencies Found</h4>
          <p className="text-slate-600 dark:text-obsidian-300 text-xs max-w-md mx-auto mb-4">
            No competencies match your current filter settings. Try resetting the category or accreditation filter.
          </p>
          <button
            onClick={() => {
              setSelectedCategory("All");
              setShowOnlyCertified(false);
            }}
            className="px-4 py-2 rounded-xl bg-emerald-700 text-white dark:bg-amber-500 dark:text-obsidian-950 font-bold text-xs hover:bg-emerald-600 dark:hover:bg-amber-400 transition-colors shadow-sm dark:shadow-glass-glow-gold"
          >
            Reset Filters
          </button>
        </div>
      )}
    </section>
  );
};

export default CompetencyGrid;
