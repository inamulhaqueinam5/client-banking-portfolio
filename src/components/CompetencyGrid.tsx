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

export type SkillCategory =
  | "All"
  | "Banking Operations"
  | "Compliance & AML/CFT"
  | "Customer Service"
  | "Core Systems"
  | "Languages & Soft Skills";

export interface SkillItem {
  id: string;
  name: string;
  category: Exclude<SkillCategory, "All">;
  description: string;
  proficiencyLabel: "Mastery" | "Expert" | "Advanced" | "Professional" | "Native";
  proficiencyLevel: number;
  icon: LucideIcon;
  certification?: "Bangladesh Bank Compliance" | "JAIBB" | "AIBB" | "ICCD Guidelines";
  keyHighlight?: boolean;
}

const CATEGORIES: SkillCategory[] = [
  "All",
  "Banking Operations",
  "Compliance & AML/CFT",
  "Customer Service",
  "Core Systems",
  "Languages & Soft Skills",
];

const SKILLS_DATA: SkillItem[] = [
  // 1. Banking Operations
  {
    id: "ft-1",
    name: "L/C Scrutiny & Settlement",
    category: "Banking Operations",
    description:
      "Comprehensive examination of Letters of Credit (L/C) documents, shipping bills, and invoices in strict alignment with UCP 600 & ISBP standards.",
    proficiencyLabel: "Mastery",
    proficiencyLevel: 98,
    icon: FileCheck,
    certification: "ICCD Guidelines",
    keyHighlight: true,
  },
  {
    id: "ft-2",
    name: "Export Bill Negotiation",
    category: "Banking Operations",
    description:
      "Expert negotiation and processing of export documents, discounting foreign bills, and minimizing foreign exchange credit risks.",
    proficiencyLabel: "Expert",
    proficiencyLevel: 92,
    icon: TrendingUp,
  },
  {
    id: "ft-3",
    name: "Foreign Exchange Settlement",
    category: "Banking Operations",
    description:
      "Managing multi-currency trade settlements, foreign currency clearing, and foreign exchange compliance under Bangladesh Bank regulations.",
    proficiencyLabel: "Expert",
    proficiencyLevel: 94,
    icon: CircleDollarSign,
    certification: "Bangladesh Bank Compliance",
    keyHighlight: true,
  },
  {
    id: "ft-4",
    name: "ICCD Guidelines",
    category: "Compliance & AML/CFT",
    description:
      "Direct operational adherence to International Chamber of Commerce (ICC) Banking Commission directives and trade finance frameworks.",
    proficiencyLabel: "Mastery",
    proficiencyLevel: 96,
    icon: BookOpenCheck,
    certification: "ICCD Guidelines",
  },
  {
    id: "ft-5",
    name: "Trade Finance Documentation",
    category: "Banking Operations",
    description:
      "Precision preparation and audit of EXP forms, Bills of Lading, Certificates of Origin, and import/export regulatory submissions.",
    proficiencyLabel: "Advanced",
    proficiencyLevel: 90,
    icon: FileText,
  },

  // 2. Compliance & AML/CFT
  {
    id: "rc-1",
    name: "AML/CFT Screening",
    category: "Compliance & AML/CFT",
    description:
      "Rigorous Know Your Customer (KYC) verification, sanction list screening, and anti-money laundering risk classification.",
    proficiencyLabel: "Mastery",
    proficiencyLevel: 97,
    icon: ShieldCheck,
    certification: "Bangladesh Bank Compliance",
    keyHighlight: true,
  },
  {
    id: "rc-2",
    name: "Bangladesh Bank Circular Compliance",
    category: "Compliance & AML/CFT",
    description:
      "Real-time interpretation and branch-wide enforcement of central bank monetary circulars, prudential guidelines, and policy shifts.",
    proficiencyLabel: "Mastery",
    proficiencyLevel: 98,
    icon: Building2,
    certification: "Bangladesh Bank Compliance",
    keyHighlight: true,
  },
  {
    id: "rc-3",
    name: "CTR/STR Reporting",
    category: "Compliance & AML/CFT",
    description:
      "Systematic generation and submission of Cash Transaction Reports (CTR) and Suspicious Transaction Reports (STR) to BFIU.",
    proficiencyLabel: "Expert",
    proficiencyLevel: 93,
    icon: AlertTriangle,
    certification: "AIBB",
  },
  {
    id: "rc-4",
    name: "Audit Preparation",
    category: "Compliance & AML/CFT",
    description:
      "Leading branch audit readiness for Bangladesh Bank inspections, internal compliance reviews, and external financial audits.",
    proficiencyLabel: "Expert",
    proficiencyLevel: 95,
    icon: ClipboardCheck,
    certification: "JAIBB",
  },
  {
    id: "rc-5",
    name: "Risk Mitigation",
    category: "Compliance & AML/CFT",
    description:
      "Proactive identification of operational vulnerabilities, cash variance prevention, and enforcement of internal control systems.",
    proficiencyLabel: "Expert",
    proficiencyLevel: 91,
    icon: ShieldAlert,
  },

  // 3. Banking Operations (Cash & Ops)
  {
    id: "cb-1",
    name: "Cash Management",
    category: "Banking Operations",
    description:
      "End-to-end administration of daily branch cash flow, vault balance limits, teller dispatch, and cash liquidity optimization.",
    proficiencyLabel: "Mastery",
    proficiencyLevel: 96,
    icon: Landmark,
    keyHighlight: true,
  },
  {
    id: "cb-2",
    name: "Vault Balance Auditing",
    category: "Banking Operations",
    description:
      "Strict physical cash counting, joint-custody vault security protocols, reserve verification, and daily balance sheet reconciliation.",
    proficiencyLabel: "Expert",
    proficiencyLevel: 94,
    icon: Lock,
    certification: "JAIBB",
  },
  {
    id: "cb-3",
    name: "High-Volume Clearing",
    category: "Banking Operations",
    description:
      "High-speed processing and verification of inter-bank checks, clearing house routines, and high-value financial instruments.",
    proficiencyLabel: "Advanced",
    proficiencyLevel: 90,
    icon: RefreshCw,
  },
  {
    id: "cb-4",
    name: "Transaction Verification",
    category: "Banking Operations",
    description:
      "Dual-signatory verification for high-value fund transfers, pay order issuance, demand drafts, and signature authentication.",
    proficiencyLabel: "Mastery",
    proficiencyLevel: 95,
    icon: CheckCircle2,
  },
  {
    id: "cb-5",
    name: "Customer Service Excellence",
    category: "Customer Service",
    description:
      "Elevating client satisfaction through high-touch corporate account maintenance, prompt dispute resolution, and VIP service.",
    proficiencyLabel: "Mastery",
    proficiencyLevel: 96,
    icon: UserCheck,
  },

  // 4. Core Systems
  {
    id: "cs-1",
    name: "Core Banking Software (CBS)",
    category: "Core Systems",
    description:
      "Expert-level operation of enterprise CBS infrastructure for customer account management, general ledgers, and day-end batch processing.",
    proficiencyLabel: "Mastery",
    proficiencyLevel: 97,
    icon: Cpu,
    keyHighlight: true,
  },
  {
    id: "cs-2",
    name: "Electronic Fund Transfers (EFT)",
    category: "Core Systems",
    description:
      "Execution and oversight of real-time electronic fund routing, electronic batch payments, and digital remittance channels.",
    proficiencyLabel: "Expert",
    proficiencyLevel: 93,
    icon: Zap,
  },
  {
    id: "cs-3",
    name: "SWIFT Operations",
    category: "Core Systems",
    description:
      "Authoring, verifying, and routing SWIFT financial messages (MT103, MT700, MT707) for international trade and remittances.",
    proficiencyLabel: "Expert",
    proficiencyLevel: 94,
    icon: Network,
    certification: "AIBB",
    keyHighlight: true,
  },
  {
    id: "cs-4",
    name: "Automated Clearing (BACPS/BEFTN)",
    category: "Core Systems",
    description:
      "Daily clearing settlement operations via Bangladesh Automated Cheque Processing System (BACPS) and Electronic Funds Transfer Network (BEFTN).",
    proficiencyLabel: "Mastery",
    proficiencyLevel: 96,
    icon: Server,
    certification: "Bangladesh Bank Compliance",
  },

  // 5. Languages & Soft Skills
  {
    id: "ls-1",
    name: "English Fluency (Professional)",
    category: "Languages & Soft Skills",
    description:
      "Professional business English articulation for international trade correspondences, executive reporting, and cross-border transactions.",
    proficiencyLabel: "Professional",
    proficiencyLevel: 95,
    icon: Languages,
  },
  {
    id: "ls-2",
    name: "Bengali (Native)",
    category: "Languages & Soft Skills",
    description:
      "Native verbal and written mastery for seamless client engagement, local regulatory documentation, and institutional communication.",
    proficiencyLabel: "Native",
    proficiencyLevel: 100,
    icon: MessageSquare,
  },
  {
    id: "ls-3",
    name: "Executive Communication",
    category: "Languages & Soft Skills",
    description:
      "High-impact presentation skills, inter-departmental liaison, and corporate leadership communication across branch operations.",
    proficiencyLabel: "Advanced",
    proficiencyLevel: 91,
    icon: Users,
  },
  {
    id: "ls-4",
    name: "Problem Solving",
    category: "Languages & Soft Skills",
    description:
      "Strategic resolution of complex trade discrepancies, compliance bottlenecks, and high-pressure operational challenges.",
    proficiencyLabel: "Expert",
    proficiencyLevel: 94,
    icon: Lightbulb,
  },
  {
    id: "ls-5",
    name: "Regulatory Auditing",
    category: "Languages & Soft Skills",
    description:
      "Analytical auditing mindset for identifying process gaps, ensuring strict regulatory adherence, and enforcing operational integrity.",
    proficiencyLabel: "Mastery",
    proficiencyLevel: 95,
    icon: BadgeCheck,
    certification: "JAIBB",
  },
];

export const CompetencyGrid: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<SkillCategory>("All");
  const [showOnlyCertified, setShowOnlyCertified] = useState<boolean>(false);

  const filteredSkills = useMemo(() => {
    return SKILLS_DATA.filter((skill) => {
      const matchesCategory =
        selectedCategory === "All" || skill.category === selectedCategory;
      const matchesCertification = !showOnlyCertified || Boolean(skill.certification);
      return matchesCategory && matchesCertification;
    });
  }, [selectedCategory, showOnlyCertified]);

  const categoryCounts = useMemo(() => {
    const counts: Record<SkillCategory, number> = {
      All: SKILLS_DATA.length,
      "Banking Operations": 0,
      "Compliance & AML/CFT": 0,
      "Customer Service": 0,
      "Core Systems": 0,
      "Languages & Soft Skills": 0,
    };

    SKILLS_DATA.forEach((skill) => {
      counts[skill.category] += 1;
    });

    return counts;
  }, []);

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
            {CATEGORIES.map((category) => {
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
            const IconComponent = skill.icon;
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
