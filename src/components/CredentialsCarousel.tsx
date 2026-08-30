'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Award,
  GraduationCap,
  ShieldCheck,
  Building2,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  CheckCircle2,
  BookOpen,
  Sparkles,
  ExternalLink,
  Layers
} from 'lucide-react';

export interface CredentialItem {
  id: string;
  code: string;
  title: string;
  organization: string;
  completionDate: string;
  category: 'all' | 'banking' | 'academic' | 'training';
  categoryLabel: string;
  type: string;
  description: string;
  keyModules: string[];
  verificationBadge: string;
  verifiedStatus: 'Completed' | 'Certified' | 'Acquired';
  iconType: 'award' | 'graduation' | 'shield' | 'building';
}

export const CREDENTIALS_DATA: CredentialItem[] = [
  {
    id: 'jaibb',
    code: 'JAIBB',
    title: 'Junior Associate of the Institute of Bankers, Bangladesh',
    organization: 'Institute of Bankers, Bangladesh (IBB)',
    completionDate: 'Completed Dec 2022',
    category: 'banking',
    categoryLabel: 'Banking Examination',
    type: 'Professional Banking Certification',
    description: 'Foundational professional banking examination certifying comprehensive mastery in core commercial banking operations, financial accounting standards, and banking laws.',
    keyModules: [
      'Core Banking Operations',
      'Banking Laws & Practices',
      'Financial Accounting',
      'Commercial Geography',
      'Organization & Management'
    ],
    verificationBadge: 'Verified Professional Certification',
    verifiedStatus: 'Completed',
    iconType: 'award'
  },
  {
    id: 'aibb',
    code: 'AIBB',
    title: 'Associate of the Institute of Bankers, Bangladesh',
    organization: 'Institute of Bankers, Bangladesh (IBB)',
    completionDate: 'Completed Apr 2026',
    category: 'banking',
    categoryLabel: 'Banking Examination',
    type: 'Advanced Banking Diploma',
    description: 'Advanced professional banking qualification covering international trade finance, credit management, foreign exchange compliance, and institutional risk governance.',
    keyModules: [
      'International Trade Finance',
      'Foreign Exchange Operations',
      'Credit Management & Assessment',
      'Legal Aspects of Banking',
      'Treasury & Capital Markets'
    ],
    verificationBadge: 'Verified Advanced Certification',
    verifiedStatus: 'Completed',
    iconType: 'award'
  },
  {
    id: 'ma-english',
    code: 'M.A. English',
    title: 'Master of Arts (M.A.) in English',
    organization: 'Govt. Titumir College (National University)',
    completionDate: 'Postgraduate Degree',
    category: 'academic',
    categoryLabel: 'Academic Degree',
    type: 'Academic Excellence',
    description: 'Postgraduate degree specializing in advanced linguistics, executive discourse, corporate communication, and literary critical analysis.',
    keyModules: [
      'Advanced Linguistics',
      'Executive Correspondence',
      'Analytical Research Methodology',
      'English Literature & Criticism',
      'Cross-Cultural Discourse'
    ],
    verificationBadge: 'Verified Academic Degree',
    verifiedStatus: 'Acquired',
    iconType: 'graduation'
  },
  {
    id: 'ba-english',
    code: 'B.A. English',
    title: 'Bachelor of Arts (B.A.) in English',
    organization: 'Govt. Titumir College (National University)',
    completionDate: 'Undergraduate Graduation',
    category: 'academic',
    categoryLabel: 'Academic Degree',
    type: 'Higher Secondary & Graduation',
    description: 'Undergraduate academic degree establishing deep competency in structured written English, critical thinking, organizational communication, and literature.',
    keyModules: [
      'English Language & Syntax',
      'Structured Business Writing',
      'Critical Analysis',
      'World Literature',
      'Organizational Communication'
    ],
    verificationBadge: 'Verified Academic Degree',
    verifiedStatus: 'Acquired',
    iconType: 'graduation'
  },
  {
    id: 'cash-risk-training',
    code: 'CMRM',
    title: 'Cash Management & Operational Risk Training',
    organization: 'National Bank Training Institute',
    completionDate: 'Specialized Institutional Module',
    category: 'training',
    categoryLabel: 'Specialized Training',
    type: 'Operational Risk Certification',
    description: 'Intensive professional training focusing on institutional cash vault protocols, dual-control teller operations, cash reserve reconciliation, and operational risk mitigation.',
    keyModules: [
      'Cash Vault Security Protocols',
      'Dual-Control Teller Management',
      'Operational Risk Mitigation',
      'Cash Reserve Reconciliation',
      'Vault Security & Audit Compliance'
    ],
    verificationBadge: 'Institutional Certification',
    verifiedStatus: 'Certified',
    iconType: 'building'
  },
  {
    id: 'aml-cft-seminar',
    code: 'AML/CFT',
    title: 'AML/CFT Prevention & Regulatory Compliance Seminar',
    organization: 'Bangladesh Bank & NBL Training Academy',
    completionDate: 'Regulatory Compliance Seminar',
    category: 'training',
    categoryLabel: 'Specialized Training',
    type: 'Regulatory Compliance Seminar',
    description: 'Specialized compliance seminar covering Bangladesh Bank BFIU guidelines, Suspicious Transaction Reporting (STR), Know Your Customer (KYC/CDD) policies, and anti-money laundering controls.',
    keyModules: [
      'Anti-Money Laundering (AML)',
      'Combating Financing of Terrorism (CFT)',
      'Suspicious Transaction Reporting (STR)',
      'KYC & Customer Due Diligence (CDD)',
      'Bangladesh Bank BFIU Directives'
    ],
    verificationBadge: 'Regulatory Compliance Certificate',
    verifiedStatus: 'Certified',
    iconType: 'shield'
  }
];

const CATEGORIES = [
  { id: 'all', label: 'All Credentials' },
  { id: 'banking', label: 'Banking Exams (JAIBB / AIBB)' },
  { id: 'academic', label: 'Academic (M.A. / B.A.)' },
  { id: 'training', label: 'Specialized Training' },
] as const;

export default function CredentialsCarousel() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [direction, setDirection] = useState<number>(1);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Filter items based on category
  const filteredCredentials = CREDENTIALS_DATA.filter((item) =>
    activeCategory === 'all' ? true : item.category === activeCategory
  );

  // Keep index in bounds when category changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [activeCategory]);

  const handleNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % filteredCredentials.length);
  }, [filteredCredentials.length]);

  const handlePrev = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + filteredCredentials.length) % filteredCredentials.length);
  }, [filteredCredentials.length]);

  // Auto-play timer (5 seconds)
  useEffect(() => {
    if (!isPlaying || isHovered || filteredCredentials.length <= 1) return;

    const timer = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(timer);
  }, [isPlaying, isHovered, handleNext, filteredCredentials.length]);

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      handlePrev();
    } else if (e.key === 'ArrowRight') {
      handleNext();
    }
  };

  const currentCard = filteredCredentials[currentIndex] || filteredCredentials[0];

  const getCategoryIcon = (iconType: CredentialItem['iconType']) => {
    switch (iconType) {
      case 'award':
        return <Award className="w-5 h-5 text-gold-accent" />;
      case 'graduation':
        return <GraduationCap className="w-5 h-5 text-gold-accent" />;
      case 'shield':
        return <ShieldCheck className="w-5 h-5 text-gold-accent" />;
      case 'building':
        return <Building2 className="w-5 h-5 text-gold-accent" />;
      default:
        return <BookOpen className="w-5 h-5 text-gold-accent" />;
    }
  };

  // Variants for Framer Motion slide transition
  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.98,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.25 },
        scale: { duration: 0.25 },
      },
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 100 : -100,
      opacity: 0,
      scale: 0.98,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      },
    }),
  };

  return (
    <section
      id="credentials"
      className="w-full py-16 md:py-24 bg-navy-bg relative overflow-hidden text-slate-50"
      aria-label="Qualifications, Certifications & Governance"
    >
      {/* Background Decorative Glow Elements */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 bg-gold-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-gold-accent/30 text-gold-accent text-xs md:text-sm font-semibold tracking-wider uppercase">
            <Sparkles className="w-4 h-4 text-gold-accent" />
            <span>Professional Credentials</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold tracking-tight font-heading text-slate-50">
            Qualifications, Certifications & Governance
          </h2>

          <p className="text-slate-300 text-sm md:text-base leading-relaxed">
            Formal banking examinations, postgraduate literature background, and accredited specialized risk management modules driving operational excellence and regulatory compliance.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-lg text-xs md:text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gold-accent/50 ${
                  isActive
                    ? 'bg-gold-accent text-navy-bg font-semibold shadow-md shadow-gold-accent/20'
                    : 'glass-panel text-slate-300 hover:text-slate-100 hover:border-gold-accent/40'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Main Carousel Area */}
        <div
          ref={carouselRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          className="relative outline-none focus:ring-1 focus:ring-gold-accent/30 rounded-2xl p-2 md:p-4"
        >
          {/* Card Container */}
          <div className="relative min-h-[460px] sm:min-h-[420px] md:min-h-[380px] flex items-center justify-center overflow-hidden px-2 py-4">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentCard.id}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={(_, info) => {
                  if (info.offset.x < -50) {
                    handleNext();
                  } else if (info.offset.x > 50) {
                    handlePrev();
                  }
                }}
                className="w-full max-w-3xl glass-panel rounded-2xl p-6 md:p-8 border border-gold-accent/25 shadow-xl shadow-black/40 relative flex flex-col justify-between cursor-grab active:cursor-grabbing"
              >
                {/* Card Top Row: Code Badge & Verification Tag */}
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-4 border-b border-slate-700/60">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-gold-accent/10 border border-gold-accent/30 flex items-center justify-center">
                        {getCategoryIcon(currentCard.iconType)}
                      </div>
                      <div>
                        <span className="inline-block px-2.5 py-0.5 rounded text-xs font-bold bg-gold-accent/20 text-gold-accent border border-gold-accent/30 uppercase tracking-wide">
                          {currentCard.code}
                        </span>
                        <span className="block text-xs text-slate-400 font-sans mt-0.5">
                          {currentCard.type}
                        </span>
                      </div>
                    </div>

                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/80 border border-gold-accent/40 text-gold-accent text-xs font-semibold shadow-inner">
                      <CheckCircle2 className="w-3.5 h-3.5 text-gold-accent" />
                      <span>{currentCard.verificationBadge}</span>
                    </div>
                  </div>

                  {/* Title & Organization */}
                  <div className="space-y-3 mb-5">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-50 font-heading leading-tight">
                      {currentCard.title}
                    </h3>

                    <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs md:text-sm text-slate-300">
                      <div className="flex items-center gap-1.5">
                        <Building2 className="w-4 h-4 text-gold-accent/80 shrink-0" />
                        <span className="font-medium text-slate-200">{currentCard.organization}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4 text-gold-accent/80 shrink-0" />
                        <span className="text-slate-400">{currentCard.completionDate}</span>
                      </div>
                    </div>

                    <p className="text-slate-300 text-sm md:text-base leading-relaxed pt-1">
                      {currentCard.description}
                    </p>
                  </div>
                </div>

                {/* Key Modules & Acquired Skills */}
                <div className="pt-4 border-t border-slate-700/60">
                  <h4 className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-3 flex items-center gap-2">
                    <Layers className="w-3.5 h-3.5 text-gold-accent" />
                    <span>Key Modules & Competencies Acquired</span>
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {currentCard.keyModules.map((module, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-md text-xs font-medium bg-slate-800/90 text-slate-200 border border-slate-700/80 hover:border-gold-accent/40 transition-colors"
                      >
                        {module}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Carousel Controls & Auto-play Toggle */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-6 px-2">
            {/* Prev / Next Buttons */}
            <div className="flex items-center gap-3">
              <button
                onClick={handlePrev}
                aria-label="Previous credential card"
                className="w-10 h-10 rounded-full glass-panel hover:bg-gold-accent/20 border border-gold-accent/30 text-slate-200 hover:text-gold-accent transition-all duration-200 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-gold-accent"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={() => setIsPlaying(!isPlaying)}
                aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
                className="w-10 h-10 rounded-full glass-panel hover:bg-gold-accent/20 border border-gold-accent/30 text-slate-200 hover:text-gold-accent transition-all duration-200 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-gold-accent"
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
              </button>

              <button
                onClick={handleNext}
                aria-label="Next credential card"
                className="w-10 h-10 rounded-full glass-panel hover:bg-gold-accent/20 border border-gold-accent/30 text-slate-200 hover:text-gold-accent transition-all duration-200 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-gold-accent"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Indicator Dots */}
            <div className="flex items-center gap-2">
              {filteredCredentials.map((item, idx) => {
                const isActive = idx === currentIndex;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setDirection(idx > currentIndex ? 1 : -1);
                      setCurrentIndex(idx);
                    }}
                    aria-label={`Go to slide ${idx + 1}: ${item.code}`}
                    className={`h-2.5 rounded-full transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-gold-accent ${
                      isActive
                        ? 'w-8 bg-gold-accent shadow-sm shadow-gold-accent/50'
                        : 'w-2.5 bg-slate-600 hover:bg-slate-400'
                    }`}
                  />
                );
              })}
            </div>

            {/* Counter Display */}
            <div className="text-xs font-mono text-slate-400">
              <span className="text-gold-accent font-bold">{currentIndex + 1}</span> / {filteredCredentials.length}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
