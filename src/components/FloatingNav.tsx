'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Landmark, Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '@/components/ThemeProvider';
import { getExecutiveProfile } from '@/domain/content';

const NAV_LINKS = [
  { label: 'Experience', href: '#career-experience' },
  { label: 'Competencies', href: '#competencies' },
  { label: 'Governance', href: '#credentials' },
  { label: 'Contact', href: '#contact' },
];

export function FloatingNav() {
  const profile = getExecutiveProfile();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isDark, toggleTheme, mounted } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-4 sm:top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <nav
        aria-label="Primary Executive Navigation"
        className={`pointer-events-auto transition-all duration-300 rounded-full glass-panel-elevated px-4 sm:px-6 py-2.5 flex items-center justify-between gap-3 sm:gap-6 shadow-glass-lg max-w-4xl w-full ${
          scrolled
            ? 'dark:bg-obsidian-950/85 bg-white/95 backdrop-blur-2xl shadow-glass-glow-gold/10'
            : 'dark:bg-obsidian-900/60 bg-white/85 backdrop-blur-xl'
        }`}
      >
        {/* Brand Emblem */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-2 group shrink-0"
        >
          <div className="w-7 h-7 rounded-full bg-emerald-500/10 dark:bg-amber-500/10 border border-emerald-500/20 dark:border-amber-500/20 flex items-center justify-center text-emerald-800 dark:text-amber-400 group-hover:scale-105 transition-transform">
            <Landmark className="w-3.5 h-3.5" />
          </div>
          <span className="font-heading font-bold text-sm sm:text-base text-emerald-950 dark:text-white group-hover:text-emerald-700 dark:group-hover:text-amber-300 transition-colors tracking-tight">
            {profile.shortName}
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-1 sm:gap-2 text-xs font-sans text-slate-600 dark:text-obsidian-300">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleScrollTo(e, link.href)}
              className="px-3 py-1.5 rounded-full hover:text-emerald-950 dark:hover:text-white hover:bg-emerald-500/10 dark:hover:bg-white/[0.06] transition-all duration-150 font-medium"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right Actions: Theme Toggle & CV Download */}
        <div className="flex items-center gap-2 shrink-0">
          {/* Luxury Theme Switcher Button */}
          <button
            onClick={toggleTheme}
            aria-label={isDark ? "Switch to Sovereign Emerald Light Mode" : "Switch to Obsidian Dark Mode"}
            title={isDark ? "Light Mode (Sovereign Emerald)" : "Dark Mode (Obsidian Void)"}
            className="w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-300 active:scale-90 bg-emerald-50 dark:bg-white/[0.06] text-emerald-800 dark:text-amber-300 border-emerald-200 dark:border-white/10 hover:border-emerald-400 dark:hover:border-amber-400/40 shadow-sm"
          >
            {mounted ? (
              isDark ? (
                <Sun className="w-4 h-4 text-amber-300 animate-spin-slow transition-transform" />
              ) : (
                <Moon className="w-4 h-4 text-emerald-800 transition-transform" />
              )
            ) : (
              <Sun className="w-4 h-4 text-amber-300" />
            )}
          </button>

          {/* Download CV CTA */}
          <a
            href={profile.resumePdfPath}
            download={profile.resumeDownloadFilename}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-emerald-700 to-emerald-800 hover:from-emerald-600 hover:to-emerald-700 text-white dark:from-amber-500 dark:to-amber-600 dark:hover:from-amber-400 dark:hover:to-amber-500 dark:text-obsidian-950 font-bold text-xs shadow-sm dark:shadow-glass-glow-gold hover:-translate-y-0.5 active:translate-y-0 transition-all font-sans"
          >
            <Download className="w-3.5 h-3.5 shrink-0" />
            <span className="hidden sm:inline">Download CV</span>
            <span className="sm:hidden">CV</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 rounded-full text-slate-600 dark:text-obsidian-300 hover:text-emerald-950 dark:hover:text-white hover:bg-emerald-500/10 dark:hover:bg-white/[0.06] transition-colors"
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-16 left-4 right-4 pointer-events-auto md:hidden rounded-2xl glass-panel-elevated p-4 shadow-glass-lg"
          >
            <div className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className="px-4 py-2.5 rounded-xl text-sm font-medium text-slate-700 dark:text-obsidian-200 hover:text-emerald-800 dark:hover:text-amber-300 hover:bg-emerald-500/10 dark:hover:bg-white/[0.04] transition-colors font-sans"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default FloatingNav;