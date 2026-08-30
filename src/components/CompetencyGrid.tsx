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
  Sparkles,
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
  proficiencyLevel: number; // 0 to 100
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
    name: "L/C Scrutiny",
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
    name: "Automated Clearing House (BACPS/BEFTN)",
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
    name: "English Fluency (Native/Professional)",
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
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10"
    >
      {/* Background Subtle Accent Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-accent/5 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Header Section */}
      <div className="text-center space-y-4 max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-accent/10 border border-gold-accent/30 text-gold-accent text-xs sm:text-sm font-semibold tracking-wider uppercase">
          <Sparkles className="w-4 h-4 text-gold-accent" />
          <span>Professional Expertise</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-slate-50 tracking-tight">
          Core Competency & Skill Matrix
        </h2>

        <p className="text-slate-400 text-sm sm:text-base md:text-lg leading-relaxed">
          Categorized operational breakdown spanning Foreign Trade, Regulatory Compliance,
          Cash Operations, and Core Banking Technologies developed over 10+ years at
          National Bank PLC.
        </p>
      </div>

      {/* Regulatory Certification Highlight Cards Banner */}
      <div className="mb-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-4 rounded-xl glass-panel border border-gold-accent/25 flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gold-accent/15 border border-gold-accent/30 flex items-center justify-center text-gold-accent shrink-0">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs font-semibold text-gold-accent uppercase tracking-wider">
              Central Bank Directive
            </div>
            <div className="text-sm font-bold text-slate-100">
              Bangladesh Bank Compliance
            </div>
          </div>
        </div>

        <div className="p-4 rounded-xl glass-panel border border-gold-accent/25 flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gold-accent/15 border border-gold-accent/30 flex items-center justify-center text-gold-accent shrink-0">
            <Award className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs font-semibold text-gold-accent uppercase tracking-wider">
              Banking Diploma
            </div>
            <div className="text-sm font-bold text-slate-100">
              JAIBB Certified Specialist
            </div>
          </div>
        </div>

        <div className="p-4 rounded-xl glass-panel border border-gold-accent/25 flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gold-accent/15 border border-gold-accent/30 flex items-center justify-center text-gold-accent shrink-0">
            <BadgeCheck className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs font-semibold text-gold-accent uppercase tracking-wider">
              Advanced Diploma
            </div>
            <div className="text-sm font-bold text-slate-100">
              AIBB Certified Executive
            </div>
          </div>
        </div>
      </div>

      {/* Category Filter Controls */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
        {/* Scrollable / Wrapping Tabs */}
        <div className="w-full overflow-x-auto pb-2 md:pb-0 scrollbar-none">
          <div
            className="inline-flex flex-nowrap md:flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-navy-surface/90 border border-slate-800/80 backdrop-blur-md min-w-full md:min-w-0"
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
                    "relative px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 whitespace-nowrap flex items-center gap-2 select-none",
                    isActive
                      ? "text-navy-bg font-semibold"
                      : "text-slate-400 hover:text-slate-100 hover:bg-slate-800/50"
                  )}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeCategoryTab"
                      className="absolute inset-0 bg-gold-accent rounded-xl shadow-lg shadow-gold-accent/20"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{category}</span>
                  <span
                    className={cn(
                      "relative z-10 px-1.5 py-0.5 rounded-full text-[10px] font-bold transition-colors",
                      isActive
                        ? "bg-navy-bg/20 text-navy-bg"
                        : "bg-slate-800 text-slate-400"
                    )}
                  >
                    {categoryCounts[category]}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Optional Certification Toggle Button */}
        <button
          onClick={() => setShowOnlyCertified(!showOnlyCertified)}
          className={cn(
            "w-full md:w-auto shrink-0 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium border transition-all duration-200",
            showOnlyCertified
              ? "bg-gold-accent/20 border-gold-accent text-gold-accent font-semibold"
              : "glass-panel border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700"
          )}
        >
          <Filter className="w-4 h-4" />
          <span>Certifications Only</span>
          {showOnlyCertified && (
            <span className="w-2 h-2 rounded-full bg-gold-accent animate-pulse" />
          )}
        </button>
      </div>

      {/* Grid of Skill Cards */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredSkills.map((skill) => {
            const IconComponent = skill.icon;
            return (
              <motion.div
                key={skill.id}
                layout
                initial={{ opacity: 0, scale: 0.92, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.92, y: -15 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className={cn(
                  "group relative rounded-xl glass-panel p-6 flex flex-col justify-between overflow-hidden border transition-all duration-300",
                  skill.keyHighlight
                    ? "border-gold-accent/40 hover:border-gold-accent"
                    : "border-slate-800/80 hover:border-gold-accent/30"
                )}
              >
                {/* Background Subtle Gradient for Highlighted Cards */}
                {skill.keyHighlight && (
                  <div className="absolute top-0 right-0 w-28 h-28 bg-gold-accent/5 rounded-full blur-2xl pointer-events-none" />
                )}

                <div>
                  {/* Top Row: Icon & Certification Badge */}
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gold-accent/10 border border-gold-accent/25 flex items-center justify-center text-gold-accent group-hover:bg-gold-accent group-hover:text-navy-bg transition-colors duration-300 shrink-0">
                      <IconComponent className="w-6 h-6" />
                    </div>

                    {skill.certification && (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-gold-accent/15 text-gold-accent border border-gold-accent/30">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        <span>{skill.certification}</span>
                      </span>
                    )}
                  </div>

                  {/* Skill Title */}
                  <h3 className="text-lg sm:text-xl font-bold font-heading text-slate-100 group-hover:text-gold-accent transition-colors duration-200">
                    {skill.name}
                  </h3>

                  {/* Category Pill Tag */}
                  <div className="mt-1 mb-3">
                    <span className="text-[11px] font-medium text-slate-400 tracking-wide uppercase">
                      {skill.category}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                    {skill.description}
                  </p>
                </div>

                {/* Card Footer: Proficiency Bar & Percentage Indicator */}
                <div className="pt-4 border-t border-slate-800/60 mt-auto">
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="text-slate-400 font-medium">
                      Proficiency:{" "}
                      <span className="text-slate-200 font-semibold">
                        {skill.proficiencyLabel}
                      </span>
                    </span>
                    <span className="font-bold text-gold-accent">
                      {skill.proficiencyLevel}%
                    </span>
                  </div>

                  <div className="w-full h-1.5 bg-slate-800/80 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.proficiencyLevel}%` }}
                      transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-gold-muted via-gold-accent to-gold-light rounded-full"
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
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-16 px-4 rounded-2xl glass-panel border border-slate-800"
        >
          <Filter className="w-10 h-10 text-slate-500 mx-auto mb-3" />
          <h4 className="text-lg font-bold text-slate-200 mb-1">No Skills Found</h4>
          <p className="text-slate-400 text-sm max-w-md mx-auto">
            No competencies match your current filter settings. Try toggling off
            &quot;Certifications Only&quot; or selecting a different category.
          </p>
          <button
            onClick={() => {
              setSelectedCategory("All");
              setShowOnlyCertified(false);
            }}
            className="mt-4 px-4 py-2 rounded-xl bg-gold-accent text-navy-bg font-semibold text-sm hover:bg-gold-hover transition-colors"
          >
            Reset Filters
          </button>
        </motion.div>
      )}
    </section>
  );
};

export default CompetencyGrid;
