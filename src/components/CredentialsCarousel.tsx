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
  Layers,
} from 'lucide-react';

import {
  getCredentials,
  getCredentialCategories,
  CredentialCategory,
  CredentialCategoryTab,
  CredentialItem,
} from '@/domain/content';

export type { CredentialItem, CredentialCategory, CredentialCategoryTab };

export default function CredentialsCarousel() {
  const [activeCategory, setActiveCategory] = useState<CredentialCategory>('all');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [direction, setDirection] = useState<number>(1);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  const categories = getCredentialCategories();
  const filteredCredentials = getCredentials({ category: activeCategory });

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

  useEffect(() => {
    if (!isPlaying || isHovered || filteredCredentials.length <= 1) return;

    const timer = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(timer);
  }, [isPlaying, isHovered, handleNext, filteredCredentials.length]);

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
        return <Award className="w-5 h-5 text-emerald-700 dark:text-amber-400" />;
      case 'graduation':
        return <GraduationCap className="w-5 h-5 text-teal-700 dark:text-sky-400" />;
      case 'shield':
        return <ShieldCheck className="w-5 h-5 text-emerald-700 dark:text-emerald-400" />;
      case 'building':
        return <Building2 className="w-5 h-5 text-emerald-800 dark:text-amber-400" />;
      default:
        return <BookOpen className="w-5 h-5 text-emerald-700 dark:text-amber-400" />;
    }
  };

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 90 : -90,
      opacity: 0,
      scale: 0.96,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 28 },
        opacity: { duration: 0.25 },
        scale: { duration: 0.25 },
      },
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 90 : -90,
      opacity: 0,
      scale: 0.96,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 28 },
        opacity: { duration: 0.2 },
      },
    }),
  };

  return (
    <section
      id="credentials"
      className="w-full py-20 md:py-28 relative overflow-hidden text-slate-800 dark:text-obsidian-100"
      aria-label="Qualifications, Certifications & Governance"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight font-heading text-emerald-950 dark:text-white">
            Qualifications, Certifications &amp; Governance
          </h2>

          <p className="text-slate-600 dark:text-obsidian-300 text-sm md:text-base leading-relaxed">
            Formal professional banking examinations, postgraduate background, and accredited specialized risk management modules driving operational governance and compliance.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-sans transition-all duration-200 ${
                  isActive
                    ? 'bg-emerald-700 text-white dark:bg-amber-500 dark:text-obsidian-950 font-bold shadow-sm dark:shadow-glass-glow-gold'
                    : 'glass-pill text-slate-700 dark:text-obsidian-300 hover:text-emerald-950 dark:hover:text-white hover:border-emerald-300 dark:hover:border-white/20'
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
          className="relative outline-none rounded-3xl p-2"
        >
          {/* Card Container */}
          <div className="relative min-h-[440px] sm:min-h-[400px] md:min-h-[360px] flex items-center justify-center overflow-hidden px-1 py-2">
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
                dragElastic={0.15}
                onDragEnd={(_, info) => {
                  if (info.offset.x < -50) {
                    handleNext();
                  } else if (info.offset.x > 50) {
                    handlePrev();
                  }
                }}
                className="w-full max-w-3xl glass-panel-elevated rounded-3xl p-7 md:p-9 shadow-glass-lg relative flex flex-col justify-between cursor-grab active:cursor-grabbing border border-emerald-900/10 dark:border-white/[0.12]"
              >
                {/* Card Top Row: Code Badge & Verification Tag */}
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-5 pb-4 border-b border-emerald-900/10 dark:border-white/[0.08]">
                    <div className="flex items-center gap-3.5">
                      <div className="w-11 h-11 rounded-xl bg-emerald-50 border border-emerald-200 dark:bg-white/[0.04] dark:border-white/10 flex items-center justify-center">
                        {getCategoryIcon(currentCard.iconType)}
                      </div>
                      <div>
                        <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-emerald-50 text-emerald-800 border border-emerald-200 dark:bg-amber-500/10 dark:text-amber-300 dark:border-amber-500/20 uppercase tracking-wide">
                          {currentCard.code}
                        </span>
                        <span className="block text-xs text-slate-500 dark:text-obsidian-400 font-sans mt-0.5">
                          {currentCard.type}
                        </span>
                      </div>
                    </div>

                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 dark:bg-emerald-500/10 dark:border-emerald-500/20 dark:text-emerald-300 text-xs font-sans font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                      <span>{currentCard.verificationBadge}</span>
                    </div>
                  </div>

                  {/* Title & Organization */}
                  <div className="space-y-2.5 mb-5">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-emerald-950 dark:text-white font-heading leading-tight">
                      {currentCard.title}
                    </h3>

                    <div className="flex flex-wrap items-center gap-y-1 gap-x-3 text-xs sm:text-sm text-slate-500 dark:text-obsidian-300 font-sans">
                      <div className="flex items-center gap-1.5">
                        <Building2 className="w-3.5 h-3.5 text-emerald-600 dark:text-amber-400 shrink-0" />
                        <span className="text-emerald-900 dark:text-obsidian-100 font-semibold">{currentCard.organization}</span>
                      </div>
                      <span className="text-slate-300 dark:text-obsidian-600">•</span>
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-teal-600 dark:text-sky-400 shrink-0" />
                        <span className="text-slate-600 dark:text-obsidian-300">{currentCard.completionDate}</span>
                      </div>
                    </div>

                    <p className="text-slate-600 dark:text-obsidian-200 text-xs sm:text-sm leading-relaxed pt-1.5 font-sans">
                      {currentCard.description}
                    </p>
                  </div>
                </div>

                {/* Key Modules */}
                <div className="pt-4 border-t border-emerald-900/10 dark:border-white/[0.08]">
                  <div className="text-[11px] font-sans font-bold dark:font-medium uppercase tracking-wider text-emerald-800 dark:text-amber-400 mb-2.5 flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5" />
                    <span>Key Competencies &amp; Examination Modules</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {currentCard.keyModules.map((module, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-xl text-xs font-sans glass-pill text-slate-700 dark:text-obsidian-200"
                      >
                        {module}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Carousel Controls */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-6 px-2">
            {/* Prev / Next Buttons */}
            <div className="flex items-center gap-2.5">
              <button
                onClick={handlePrev}
                aria-label="Previous credential card"
                className="w-10 h-10 rounded-full glass-panel hover:border-emerald-400 dark:hover:border-amber-500/40 text-slate-700 dark:text-obsidian-200 hover:text-emerald-900 dark:hover:text-amber-300 transition-colors flex items-center justify-center shadow-sm"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <button
                onClick={() => setIsPlaying(!isPlaying)}
                aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
                className="w-10 h-10 rounded-full glass-panel hover:border-emerald-400 dark:hover:border-amber-500/40 text-slate-700 dark:text-obsidian-200 hover:text-emerald-900 dark:hover:text-amber-300 transition-colors flex items-center justify-center shadow-sm"
              >
                {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 ml-0.5" />}
              </button>

              <button
                onClick={handleNext}
                aria-label="Next credential card"
                className="w-10 h-10 rounded-full glass-panel hover:border-emerald-400 dark:hover:border-amber-500/40 text-slate-700 dark:text-obsidian-200 hover:text-emerald-900 dark:hover:text-amber-300 transition-colors flex items-center justify-center shadow-sm"
              >
                <ChevronRight className="w-4 h-4" />
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
                    className={`h-2 rounded-full transition-all duration-300 ${
                      isActive
                        ? 'w-8 bg-emerald-600 shadow-[0_0_8px_#10b981] dark:bg-amber-400 dark:shadow-[0_0_8px_#fbbf24]'
                        : 'w-2 bg-slate-300 dark:bg-white/10 hover:bg-slate-400 dark:hover:bg-white/30'
                    }`}
                  />
                );
              })}
            </div>

            {/* Counter Display */}
            <div className="text-xs font-mono text-slate-500 dark:text-obsidian-400 tabular-nums">
              <span className="text-emerald-800 dark:text-amber-400 font-bold">{currentIndex + 1}</span> / {filteredCredentials.length}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
