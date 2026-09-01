'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Building2,
  MapPin,
  Calendar,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  TrendingUp,
  ShieldCheck,
  Layers,
  FileText,
  Briefcase,
} from 'lucide-react';
import { cn } from '@/lib/utils';

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
  department: string;
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
    id: 'feo-export-mohakhali',
    title: 'First Executive Officer & Export Officer (Foreign Trade)',
    department: 'Foreign Trade & Export',
    branch: 'Mohakhali Branch',
    company: 'National Bank PLC',
    period: 'Jul 2026 – Present',
    location: 'Mohakhali Branch, Dhaka',
    isCurrent: true,
    focusAreas: [
      'Export Operations & L/C Settlement',
      'Packing Credits & Trade Financing',
      'Trade Data Analytics & Decision Support',
      'Bangladesh Bank & ICCD Audit Governance',
      'Corporate Exporter & Shipping Relations',
    ],
    overview:
      'Directing foreign trade export operations at Mohakhali Branch, scrutinizing foreign exchange export bills, negotiating and disbursing packing credits, analyzing trade flow data for strategic decisions, and enforcing strict compliance with Bangladesh Bank, Head Office, and ICCD directives.',
    milestones: [
      {
        title: 'Export Operations and Settlement',
        description:
          'Scrutinize and negotiate foreign exchange export bills while ensuring timely realization of export proceeds in full compliance with trade procedures.',
        impactTag: 'Timely Proceeds Realization',
      },
      {
        title: 'Trade Credit and Documentation',
        description:
          'Process, calculate, and disburse packing credits, and issue necessary export related certificates to facilitate seamless exporter operations.',
        impactTag: 'Seamless Exporter Support',
      },
      {
        title: 'Data Analysis and Decision Support',
        description:
          'Analyze export data and resolve complex trade issues to support strategic and sensitive operational decision making.',
        impactTag: 'Strategic Decision Support',
      },
      {
        title: 'Regulatory Compliance and Reporting',
        description:
          'Prepare accurate export statements and maintain strict compliance with guidelines set by Bangladesh Bank, Head Office, and ICCD.',
        impactTag: 'Strict Central Bank Adherence',
      },
      {
        title: 'Stakeholder and Client Relations',
        description:
          'Maintain active correspondence with banks, exporters, shipping lines, and regulatory bodies while delivering exceptional customer service to branch exporters.',
        impactTag: 'High-Touch Client Relations',
      },
    ],
    keyMetrics: [
      { label: 'Trade Audit Compliance', value: '100% Clean' },
      { label: 'Proceeds Realization', value: 'Zero Discrepancy' },
      { label: 'Primary Focus', value: 'Foreign Trade & Export' },
    ],
  },
  {
    id: 'jo-feo-cash-dept',
    title: 'Junior Officer to First Executive Officer (Cash Department)',
    department: 'Cash Department',
    branch: 'Gulshan, Banani & Mohakhali Branches',
    company: 'National Bank PLC',
    period: 'Oct 2015 – Jul 2026',
    location: 'Gulshan, Banani & Mohakhali Branches, Dhaka',
    isCurrent: false,
    focusAreas: [
      'Cash Department Leadership & Operations',
      'Vault Balancing & Risk Mitigation',
      'AML / CFT Regulatory Screening',
      'High-Net-Worth Client Relations',
      'Core Banking Software & Staff Mentoring',
    ],
    overview:
      'Progressed over a decade across premier commercial branches (Gulshan, Banani, and Mohakhali), spearheading daily cash operations, high-volume teller transactions, vault balancing, and enforcing rigorous Anti Money Laundering (AML/CFT) standards.',
    milestones: [
      {
        title: 'Expert in Cash Operations',
        description:
          'Spearheaded all daily functions of the Cash Department, including high volume teller transactions, vault balancing, and risk mitigation, ensuring strict accuracy and compliance.',
        impactTag: 'Zero-Variance Vault Accuracy',
      },
      {
        title: 'Compliance and Risk Mitigation',
        description:
          'Upheld and implemented rigorous standards for Anti Money Laundering (AML) and Combating the Financing of Terrorism (CFT), vigilantly monitoring transactions to protect the bank\'s integrity.',
        impactTag: 'Institutional AML/CFT Protection',
      },
      {
        title: 'Customer Relationship Management',
        description:
          'Delivered exceptional customer service by resolving complex inquiries and maintaining strict confidentiality, successfully fostering client loyalty and trust.',
        impactTag: 'Client Loyalty & Trust',
      },
      {
        title: 'Operational Proficiency',
        description:
          'Highly proficient in core banking software and all teller functions, adapting seamlessly to different branch environments and mentoring junior staff on best practices.',
        impactTag: 'Core Systems & Mentorship',
      },
    ],
    keyMetrics: [
      { label: 'Career Progression', value: 'Junior Officer → FEO' },
      { label: 'Vault Reconciliation', value: 'Daily 100% Match' },
      { label: 'Institutional Tenure', value: '10+ Years Excellence' },
    ],
  },
];

const FILTER_OPTIONS = [
  'All Roles',
  'Foreign Trade & Export',
  'Cash Department',
] as const;

export default function CareerTimeline() {
  const [activeFilter, setActiveFilter] = useState<string>('All Roles');
  const [expandedRoles, setExpandedRoles] = useState<Record<string, boolean>>({
    'feo-export-mohakhali': true,
    'jo-feo-cash-dept': true,
  });

  const filteredRoles = CAREER_DATA.filter((role) =>
    activeFilter === 'All Roles' ? true : role.department === activeFilter
  );

  const toggleRole = (id: string) => {
    setExpandedRoles((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const isAllExpanded =
    filteredRoles.length > 0 &&
    filteredRoles.every((role) => expandedRoles[role.id]);

  const toggleAll = () => {
    const newState: Record<string, boolean> = { ...expandedRoles };
    filteredRoles.forEach((role) => {
      newState[role.id] = !isAllExpanded;
    });
    setExpandedRoles(newState);
  };

  return (
    <section
      id="career-experience"
      aria-label="Executive Career Progression"
      className="py-20 md:py-28 relative overflow-hidden text-obsidian-100"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-14 md:mb-18">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading tracking-tight text-white">
            Executive Career Progression
          </h2>

          <p className="text-obsidian-300 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Institutional banking leadership track record at National Bank PLC across key metropolitan financial centers, specializing in foreign trade settlement, cash risk mitigation, and central bank governance.
          </p>

          {/* Filter & Control Bar */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 pt-3">
            {FILTER_OPTIONS.map((filter) => {
              const isActive = activeFilter === filter;
              return (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={cn(
                    "px-4 py-2 rounded-xl text-xs sm:text-sm font-sans transition-all duration-200",
                    isActive
                      ? "bg-amber-500 text-obsidian-950 font-bold shadow-glass-glow-gold"
                      : "glass-pill text-obsidian-300 hover:text-white hover:border-white/20"
                  )}
                >
                  {filter}
                </button>
              );
            })}

            <button
              onClick={toggleAll}
              className="glass-pill inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-sans text-obsidian-300 hover:text-amber-300 transition-all duration-200 ml-1"
            >
              <Layers className="w-3.5 h-3.5 text-amber-400" />
              <span>{isAllExpanded ? 'Collapse All' : 'Expand All Milestones'}</span>
            </button>
          </div>
        </div>

        {/* Timeline Container */}
        <div className="relative pl-6 sm:pl-10 md:pl-12 space-y-10 md:space-y-12">
          {/* Vertical Luminous Spine */}
          <div
            className="absolute left-2.5 sm:left-4 md:left-5 top-3 bottom-3 w-[2px] bg-gradient-to-b from-amber-400 via-sky-400/40 to-emerald-400/10 shadow-[0_0_8px_rgba(245,158,11,0.3)]"
            aria-hidden="true"
          />

          {filteredRoles.map((role, index) => {
            const isExpanded = !!expandedRoles[role.id];

            return (
              <motion.div
                key={role.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className="relative group"
              >
                {/* Node / Marker */}
                <div
                  className="absolute -left-6 sm:-left-10 md:-left-12 top-6 flex items-center justify-center -translate-x-1/2 z-10"
                  aria-hidden="true"
                >
                  {role.isCurrent ? (
                    <div className="relative flex items-center justify-center">
                      <span className="animate-ping absolute inline-flex h-5 w-5 rounded-full bg-amber-400 opacity-40" />
                      <div className="w-4 h-4 rounded-full bg-amber-400 border-2 border-obsidian-950 shadow-[0_0_12px_#fbbf24]" />
                    </div>
                  ) : (
                    <div className="w-3.5 h-3.5 rounded-full bg-obsidian-800 border-2 border-white/20 group-hover:border-amber-400 group-hover:bg-amber-400/20 transition-colors" />
                  )}
                </div>

                {/* Main Glass Card */}
                <div className="glass-panel glass-panel-interactive rounded-2xl overflow-hidden shadow-glass-md">
                  {/* Card Header Section */}
                  <div className="p-6 sm:p-7 md:p-8 space-y-4">
                    {/* Top Row: Period & Location Badges */}
                    <div className="flex flex-wrap items-center justify-between gap-2.5 text-xs">
                      <div className="flex items-center gap-2">
                        <span className="glass-pill inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-obsidian-200">
                          <Calendar className="w-3.5 h-3.5 text-amber-400" />
                          {role.period}
                        </span>

                        {role.isCurrent && (
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-300 font-medium border border-emerald-500/20">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-luminescence shrink-0" />
                            Active Deployment
                          </span>
                        )}
                      </div>

                      {/* Location & Branch Badge */}
                      <div className="flex items-center gap-2">
                        <span className="glass-pill inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-obsidian-300 text-xs">
                          <MapPin className="w-3.5 h-3.5 text-sky-400" />
                          {role.branch}
                        </span>
                      </div>
                    </div>

                    {/* Role Title & Organization */}
                    <div className="space-y-1.5 pt-0.5">
                      <h3 className="text-xl sm:text-2xl font-bold font-heading text-white tracking-tight">
                        {role.title}
                      </h3>
                      <div className="flex items-center gap-2 text-obsidian-300 text-sm font-sans">
                        <Building2 className="w-4 h-4 text-amber-400" />
                        <span className="font-semibold text-obsidian-100">{role.company}</span>
                        <span className="text-obsidian-600">•</span>
                        <span>{role.location}</span>
                      </div>
                    </div>

                    {/* Overview Paragraph */}
                    <p className="text-obsidian-200 text-sm leading-relaxed">
                      {role.overview}
                    </p>

                    {/* Focus Area Badges */}
                    <div className="pt-1">
                      <div className="flex flex-wrap gap-2">
                        {role.focusAreas.map((area, idx) => (
                          <span
                            key={idx}
                            className="glass-pill inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-obsidian-200 text-xs"
                          >
                            <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                            {area}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Expandable Accordion Control */}
                    <div className="pt-2 border-t border-white/[0.08] flex items-center justify-between">
                      <button
                        onClick={() => toggleRole(role.id)}
                        className="w-full flex items-center justify-between py-2.5 px-4 rounded-xl glass-pill text-xs sm:text-sm font-sans text-obsidian-200 hover:text-amber-300 transition-colors"
                        aria-expanded={isExpanded}
                      >
                        <span className="inline-flex items-center gap-2">
                          <FileText className="w-4 h-4 text-amber-400" />
                          <span>
                            Verified Milestones ({role.milestones.length})
                          </span>
                        </span>
                        <span className="inline-flex items-center gap-1 text-amber-400 text-xs font-semibold">
                          <span>{isExpanded ? 'Hide Records' : 'Inspect Milestones'}</span>
                          {isExpanded ? (
                            <ChevronUp className="w-4 h-4" />
                          ) : (
                            <ChevronDown className="w-4 h-4" />
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
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="bg-obsidian-900/60 border-t border-white/[0.08] px-6 sm:px-7 md:px-8 py-6 space-y-6"
                      >
                        {/* Operational Milestones List */}
                        <div className="space-y-3">
                          <div className="text-xs font-sans font-medium tracking-wide text-amber-400 uppercase flex items-center gap-2">
                            <TrendingUp className="w-4 h-4" />
                            <span>Operational Impact &amp; Settlement Log</span>
                          </div>

                          <div className="grid grid-cols-1 gap-3">
                            {role.milestones.map((milestone, mIdx) => (
                              <div
                                key={mIdx}
                                className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-2 hover:border-amber-500/20 transition-colors"
                              >
                                <div className="flex flex-wrap items-start justify-between gap-2">
                                  <h4 className="font-semibold text-white text-sm flex items-center gap-2.5 font-sans">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                                    <span>{milestone.title}</span>
                                  </h4>

                                  {milestone.impactTag && (
                                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-sans bg-amber-500/10 text-amber-300 border border-amber-500/20">
                                      {milestone.impactTag}
                                    </span>
                                  )}
                                </div>

                                <p className="text-obsidian-300 text-xs sm:text-sm leading-relaxed pl-6.5 font-sans">
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
                                className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] text-center space-y-1"
                              >
                                <div className="text-amber-400 font-mono font-bold text-base sm:text-lg tabular-nums">
                                  {metric.value}
                                </div>
                                <div className="text-obsidian-300 text-xs font-sans">
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
