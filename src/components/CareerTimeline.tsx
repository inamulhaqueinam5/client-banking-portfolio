'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Building2,
  MapPin,
  Calendar,
  ChevronDown,
  ChevronUp,
  Award,
  CheckCircle2,
  TrendingUp,
  ShieldCheck,
  Briefcase,
  Sparkles,
  Layers,
} from 'lucide-react';

export interface Milestone {
  title: string;
  description: string;
  impactTag?: string;
}

export interface KeyMetric {
  label: string;
  value: string;
}

export interface CareerRole {
  id: string;
  title: string;
  branch: string;
  company: string;
  period: string;
  location: string;
  isCurrent?: boolean;
  focusAreas: string[];
  overview: string;
  milestones: Milestone[];
  keyMetrics: KeyMetric[];
}

const CAREER_DATA: CareerRole[] = [
  {
    id: 'feo-gulshan',
    title: 'First Executive Officer',
    branch: 'Gulshan Branch',
    company: 'National Bank PLC',
    period: '2021 – Present',
    location: 'Gulshan, Dhaka',
    isCurrent: true,
    focusAreas: [
      'Foreign Trade & Export Settlement',
      'Foreign Exchange Bills Scrutiny',
      'ICCD Regulatory Compliance',
      'High-value Trade Documentation',
    ],
    overview:
      'Leading senior foreign trade operations, managing cross-border trade settlements, foreign currency export/import bill scrutiny, and ensuring strict compliance with Bangladesh Bank & ICCD audit directives.',
    milestones: [
      {
        title: 'Foreign Exchange Bills Scrutiny & Trade Settlement',
        description:
          'Evaluated and processed international Letters of Credit (L/C), export/import bill documentation, and foreign currency remittances with zero regulatory discrepancies.',
        impactTag: '100% Compliance Accuracy',
      },
      {
        title: 'ICCD Regulatory Compliance & BB Audit Readiness',
        description:
          'Spearheaded internal control and compliance (ICCD) protocols, ensuring complete adherence to Bangladesh Bank Foreign Exchange Guidelines and international trade norms.',
        impactTag: 'Zero-Penalty Audit Rating',
      },
      {
        title: 'High-Value Commercial Trade Advisory',
        description:
          'Provided expert guidance to major corporate clients on foreign trade financing, foreign currency risk management, and import/export regulatory clearance.',
        impactTag: 'Executive Advisory',
      },
    ],
    keyMetrics: [
      { label: 'Trade Audit Rating', value: '100% Clean' },
      { label: 'Compliance Level', value: 'Zero Violations' },
      { label: 'Branch Tier', value: 'Gulshan Trade Hub' },
    ],
  },
  {
    id: 'eo-banani',
    title: 'Executive Officer',
    branch: 'Banani Branch',
    company: 'National Bank PLC',
    period: '2017 – 2021',
    location: 'Banani, Dhaka',
    focusAreas: [
      'Cash Risk Mitigation & Branch Cash Operations',
      'Vault Balance Auditing',
      'Anti-Money Laundering (AML/CFT) Screening',
      'CTR/STR Compliance',
    ],
    overview:
      'Directed branch cash operations, daily vault balance reconciliation, and Anti-Money Laundering (AML/CFT) screening to mitigate operational risks and enforce central bank reporting standards.',
    milestones: [
      {
        title: 'Vault Balance Auditing & Cash Risk Mitigation',
        description:
          'Managed physical vault cash limits, dual-custody verification, and inter-branch cash movement, achieving zero cash discrepancy across all internal and central bank audits.',
        impactTag: 'Zero Cash Discrepancy',
      },
      {
        title: 'AML/CFT & CTR/STR Regulatory Reporting',
        description:
          'Enforced mandatory Cash Transaction Reports (CTR) and Suspicious Transaction Reports (STR) screening pipelines, conducting rigorous Customer Due Diligence (CDD).',
        impactTag: 'Full AML Compliance',
      },
      {
        title: 'Branch Cash Desk Workflow Optimization',
        description:
          'Reengineered front-counter cash processing routines during peak hours, accelerating teller throughput while safeguarding internal security controls.',
        impactTag: '+35% Efficiency',
      },
    ],
    keyMetrics: [
      { label: 'Vault Audit Match', value: 'Daily 100%' },
      { label: 'AML Screening', value: 'Zero Penalties' },
      { label: 'Branch Tier', value: 'Banani Commercial' },
    ],
  },
  {
    id: 'officer-mohakhali',
    title: 'Officer / Junior Officer',
    branch: 'Mohakhali Branch',
    company: 'National Bank PLC',
    period: '2013 – 2017',
    location: 'Mohakhali, Dhaka',
    focusAreas: [
      'Core Banking Operations',
      'Account Management',
      'Clearing & Electronic Fund Transfers',
      'Customer Service Excellence',
    ],
    overview:
      'Built foundational banking expertise managing core banking software, electronic clearing systems (BEFTN/RTGS), retail customer account lifecycle, and deposit mobilization.',
    milestones: [
      {
        title: 'Core Banking Software & Account Management',
        description:
          'Managed client account opening, KYC documentation, deposit products (FDR/DPS), and day-to-day ledger transactions on core banking systems.',
        impactTag: 'Account Lifecycle Management',
      },
      {
        title: 'Electronic Clearing & Settlement (BEFTN / RTGS)',
        description:
          'Executed high-volume Bangladesh Electronic Funds Transfer Network (BEFTN) and Real Time Gross Settlement (RTGS) transactions meeting strict daily clearing cutoffs.',
        impactTag: '99.9% Timely Clearing',
      },
      {
        title: 'Customer Service & Executive Relationship Support',
        description:
          'Delivered high-touch customer support to personal and commercial account holders, driving client satisfaction and supporting branch deposit mobilization.',
        impactTag: 'High Retention',
      },
    ],
    keyMetrics: [
      { label: 'Clearing Precision', value: '99.9%' },
      { label: 'Service Quality', value: 'Excellence Rating' },
      { label: 'Tenure', value: '4 Years Foundation' },
    ],
  },
];

const branchBadgeStyles: Record<string, string> = {
  'Gulshan Branch': 'bg-gold-accent/15 text-gold-accent border-gold-accent/40 shadow-sm shadow-gold-accent/10',
  'Banani Branch': 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30',
  'Mohakhali Branch': 'bg-sky-500/15 text-sky-400 border-sky-500/30',
};

export default function CareerTimeline() {
  const [expandedRoles, setExpandedRoles] = useState<Record<string, boolean>>({
    'feo-gulshan': true,
  });

  const toggleRole = (id: string) => {
    setExpandedRoles((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const isAllExpanded = CAREER_DATA.every((role) => expandedRoles[role.id]);

  const toggleAll = () => {
    const newState: Record<string, boolean> = {};
    CAREER_DATA.forEach((role) => {
      newState[role.id] = !isAllExpanded;
    });
    setExpandedRoles(newState);
  };

  return (
    <section
      id="career-experience"
      aria-label="Executive Career Progression"
      className="py-16 md:py-24 bg-navy-bg relative overflow-hidden text-slate-100"
    >
      {/* Background Glow Accents */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-gold-accent/5 rounded-full blur-3xl pointer-events-none -translate-x-1/2" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-navy-surface/80 rounded-full blur-3xl pointer-events-none translate-x-1/2" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-14 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel text-gold-accent text-xs md:text-sm font-semibold tracking-wider uppercase border border-gold-accent/30"
          >
            <Briefcase className="w-4 h-4 text-gold-accent" />
            <span>10+ Years Banking Excellence</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading tracking-tight text-slate-50"
          >
            Executive Career Progression
          </motion.h2>

          {/* Gold Accent Decorative Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-1 w-28 mx-auto bg-gradient-to-r from-gold-accent via-gold-light to-gold-accent rounded-full shadow-sm shadow-gold-accent/30Origin-center"
          />

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed pt-1"
          >
            Institutional banking leadership journey at National Bank PLC across key financial hubs in Dhaka, specializing in foreign trade settlement, cash risk mitigation, and regulatory governance.
          </motion.p>

          {/* Toggle All Button */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="pt-2"
          >
            <button
              onClick={toggleAll}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg glass-panel text-xs sm:text-sm font-medium text-slate-300 hover:text-gold-accent hover:border-gold-accent/40 transition-all duration-200"
            >
              <Layers className="w-4 h-4 text-gold-accent" />
              <span>{isAllExpanded ? 'Collapse All Roles' : 'Expand All Operational Milestones'}</span>
            </button>
          </motion.div>
        </div>

        {/* Timeline Container */}
        <div className="relative pl-6 sm:pl-10 md:pl-12 space-y-10 md:space-y-12">
          {/* Vertical Connecting Line */}
          <div
            className="absolute left-2.5 sm:left-4 md:left-5 top-3 bottom-3 w-0.5 bg-gradient-to-b from-gold-accent via-gold-accent/40 to-gold-accent/10 rounded-full"
            aria-hidden="true"
          />

          {CAREER_DATA.map((role, index) => {
            const isExpanded = !!expandedRoles[role.id];
            const badgeClass = branchBadgeStyles[role.branch] || 'bg-slate-800 text-slate-300 border-slate-700';

            return (
              <motion.div
                key={role.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative group"
              >
                {/* Node / Marker */}
                <div
                  className="absolute -left-6 sm:-left-10 md:-left-12 top-6 flex items-center justify-center -translate-x-1/2 z-10"
                  aria-hidden="true"
                >
                  {role.isCurrent ? (
                    <div className="relative flex items-center justify-center">
                      <span className="animate-ping absolute inline-flex h-6 w-6 rounded-full bg-gold-accent opacity-40" />
                      <div className="w-5 h-5 rounded-full bg-gold-accent border-2 border-navy-bg shadow-md shadow-gold-accent/50 flex items-center justify-center">
                        <Sparkles className="w-2.5 h-2.5 text-navy-bg stroke-[3]" />
                      </div>
                    </div>
                  ) : (
                    <div className="w-4 h-4 rounded-full bg-navy-surface border-2 border-gold-accent/80 group-hover:border-gold-accent group-hover:bg-gold-accent/20 transition-all duration-300" />
                  )}
                </div>

                {/* Main Card */}
                <div className="glass-panel glass-panel-hover rounded-2xl border border-gold-accent/20 overflow-hidden shadow-xl">
                  {/* Card Header Section */}
                  <div className="p-5 sm:p-6 md:p-8 space-y-4">
                    {/* Top Row: Period & Location Badges */}
                    <div className="flex flex-wrap items-center justify-between gap-2.5 text-xs sm:text-sm">
                      <div className="flex items-center gap-2">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-navy-bg/90 border border-slate-700 text-slate-300 font-medium">
                          <Calendar className="w-3.5 h-3.5 text-gold-accent" />
                          {role.period}
                        </span>

                        {role.isCurrent && (
                          <span className="px-2.5 py-0.5 rounded-full bg-gold-accent/20 text-gold-accent text-xs font-semibold tracking-wide border border-gold-accent/40">
                            Present Role
                          </span>
                        )}
                      </div>

                      {/* Location & Branch Badge */}
                      <div className="flex items-center gap-2">
                        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${badgeClass}`}>
                          <MapPin className="w-3.5 h-3.5" />
                          {role.branch}
                        </span>
                      </div>
                    </div>

                    {/* Role Title & Organization */}
                    <div className="space-y-1 pt-1">
                      <div className="flex items-start justify-between gap-4">
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold font-heading text-slate-50 tracking-tight">
                          {role.title}
                        </h3>
                      </div>
                      <div className="flex items-center gap-2 text-slate-400 font-medium text-sm sm:text-base">
                        <Building2 className="w-4 h-4 text-gold-accent/80" />
                        <span>{role.company}</span>
                        <span className="text-slate-600">•</span>
                        <span className="text-slate-400">{role.location}</span>
                      </div>
                    </div>

                    {/* Overview Paragraph */}
                    <p className="text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed pt-1">
                      {role.overview}
                    </p>

                    {/* Focus Area Badges */}
                    <div className="pt-2">
                      <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-2 block">
                        Core Functional Areas:
                      </span>
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {role.focusAreas.map((area, idx) => (
                          <span
                            key={idx}
                            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-navy-bg/80 border border-slate-700/70 text-slate-200 text-xs font-medium"
                          >
                            <ShieldCheck className="w-3 h-3 text-gold-accent" />
                            {area}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Expandable Accordion Control */}
                    <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
                      <button
                        onClick={() => toggleRole(role.id)}
                        className="w-full flex items-center justify-between py-2 px-3 rounded-lg bg-navy-bg/50 hover:bg-gold-accent/10 border border-slate-800 hover:border-gold-accent/30 text-xs sm:text-sm font-semibold text-slate-200 hover:text-gold-accent transition-all duration-200 group/btn"
                        aria-expanded={isExpanded}
                      >
                        <span className="inline-flex items-center gap-2">
                          <Award className="w-4 h-4 text-gold-accent" />
                          <span>
                            Key Operational Milestones ({role.milestones.length})
                          </span>
                        </span>
                        <span className="inline-flex items-center gap-1 text-gold-accent text-xs font-medium">
                          <span>{isExpanded ? 'Hide Details' : 'View Achievements'}</span>
                          {isExpanded ? (
                            <ChevronUp className="w-4 h-4 transition-transform group-hover/btn:-translate-y-0.5" />
                          ) : (
                            <ChevronDown className="w-4 h-4 transition-transform group-hover/btn:translate-y-0.5" />
                          )}
                        </span>
                      </button>
                    </div>
                  </div>

                  {/* Expandable Accordion Panel */}
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        key="content"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.35, ease: 'easeInOut' }}
                        className="bg-navy-bg/60 border-t border-gold-accent/15 px-5 sm:px-6 md:px-8 py-6 space-y-6"
                      >
                        {/* Operational Milestones List */}
                        <div className="space-y-4">
                          <h4 className="text-xs font-semibold tracking-wider text-gold-accent uppercase flex items-center gap-1.5">
                            <TrendingUp className="w-4 h-4" />
                            <span>Verified Impact & Milestones</span>
                          </h4>

                          <div className="grid grid-cols-1 gap-4">
                            {role.milestones.map((milestone, mIdx) => (
                              <div
                                key={mIdx}
                                className="p-4 rounded-xl bg-navy-surface/90 border border-slate-800 space-y-2 hover:border-gold-accent/30 transition-colors duration-200"
                              >
                                <div className="flex flex-wrap items-start justify-between gap-2">
                                  <h5 className="font-semibold text-slate-100 text-sm sm:text-base flex items-center gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-gold-accent shrink-0" />
                                    <span>{milestone.title}</span>
                                  </h5>

                                  {milestone.impactTag && (
                                    <span className="px-2.5 py-0.5 rounded text-xs font-medium bg-gold-accent/10 text-gold-accent border border-gold-accent/20">
                                      {milestone.impactTag}
                                    </span>
                                  )}
                                </div>

                                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed pl-6">
                                  {milestone.description}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Key Quantifiable Metrics */}
                        <div className="pt-2">
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                            {role.keyMetrics.map((metric, kIdx) => (
                              <div
                                key={kIdx}
                                className="p-3 rounded-lg bg-navy-bg border border-slate-800/80 text-center space-y-0.5"
                              >
                                <div className="text-gold-accent font-bold text-sm sm:text-base">
                                  {metric.value}
                                </div>
                                <div className="text-slate-400 text-xs">
                                  {metric.label}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
