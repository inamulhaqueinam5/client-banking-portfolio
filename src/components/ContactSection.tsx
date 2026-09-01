'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  X,
  Building2,
  UserCheck,
  Landmark,
  Copy,
  Check,
} from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [toast, setToast] = useState<{
    show: boolean;
    message: string;
  }>({
    show: false,
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const mailtoSubject = encodeURIComponent(
      formData.subject || 'Executive Banking Inquiry - Zannat Ara Nishat'
    );
    const mailtoBody = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:nishatzannatara@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;

    setToast({
      show: true,
      message:
        'Inquiry Transmitted! Direct communication channel initiated with Zannat Ara Nishat.',
    });

    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });

    setTimeout(() => {
      setToast((prev) => ({ ...prev, show: false }));
    }, 6000);
  };

  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText('nishatzannatara@gmail.com');
      setCopied(true);
      setToast({
        show: true,
        message: 'Official email address copied to clipboard: nishatzannatara@gmail.com',
      });
      setTimeout(() => setCopied(false), 3000);
      setTimeout(() => setToast((prev) => ({ ...prev, show: false })), 6000);
    } catch {
      // Fallback
    }
  };

  return (
    <section
      id="contact"
      className="relative py-20 md:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden text-slate-800 dark:text-obsidian-100"
    >
      {/* Toast Notification */}
      <AnimatePresence>
        {toast.show && (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-6 right-4 sm:right-6 z-50 max-w-md w-full glass-panel-elevated p-5 rounded-2xl shadow-glass-lg border border-emerald-500/40 dark:border-amber-500/40"
            role="alert"
          >
            <div className="flex items-start gap-3.5">
              <div className="p-2 rounded-xl bg-emerald-50 text-emerald-800 border-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/20 shrink-0 mt-0.5">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div className="flex-1 pr-2">
                <div className="text-xs font-bold text-emerald-800 dark:text-amber-400 uppercase tracking-wider font-sans">
                  Transmission Initiated
                </div>
                <p className="text-xs text-slate-600 dark:text-obsidian-200 mt-1 leading-relaxed font-sans">
                  {toast.message}
                </p>
              </div>
              <button
                onClick={() => setToast({ show: false, message: '' })}
                className="text-slate-400 hover:text-emerald-950 dark:text-obsidian-400 dark:hover:text-white p-1 rounded-lg transition-colors shrink-0"
                aria-label="Close notification"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-emerald-950 dark:text-white font-heading">
          Get In Touch &amp; Professional References
        </h2>

        <p className="text-slate-600 dark:text-obsidian-300 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
          Direct communication channels for executive banking opportunities, trade finance inquiries, and verifiable professional credentials.
        </p>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
        {/* Left Column: Direct Contact Info & References */}
        <div className="lg:col-span-5 space-y-8">
          {/* Direct Contact Info Cards */}
          <div className="space-y-4">
            <h3 className="text-xs font-sans font-bold dark:font-semibold text-emerald-800 dark:text-amber-400 uppercase tracking-wider">
              Direct Communication Channels
            </h3>

            <div className="grid grid-cols-1 gap-3">
              {/* Email Card */}
              <a
                href="mailto:nishatzannatara@gmail.com"
                className="glass-panel glass-panel-interactive p-5 rounded-2xl flex items-center gap-4 group"
              >
                <div className="p-3 rounded-xl bg-emerald-50 text-emerald-800 border-emerald-200 dark:bg-white/[0.04] dark:text-amber-400 dark:border-white/10 group-hover:border-emerald-500/40 dark:group-hover:border-amber-400/40 group-hover:scale-105 transition-all shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-[11px] text-slate-500 dark:text-obsidian-400 font-medium uppercase tracking-wider">
                    Official Email
                  </p>
                  <p className="text-sm font-semibold text-emerald-950 dark:text-white truncate group-hover:text-emerald-700 dark:group-hover:text-amber-300 transition-colors">
                    nishatzannatara@gmail.com
                  </p>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-400 dark:text-obsidian-400 group-hover:text-emerald-700 dark:group-hover:text-amber-300 shrink-0 transition-colors" />
              </a>

              {/* Phone Card */}
              <a
                href="tel:+8801927265191"
                className="glass-panel glass-panel-interactive p-5 rounded-2xl flex items-center gap-4 group"
              >
                <div className="p-3 rounded-xl bg-emerald-50 text-emerald-800 border-emerald-200 dark:bg-white/[0.04] dark:text-amber-400 dark:border-white/10 group-hover:border-emerald-500/40 dark:group-hover:border-amber-400/40 group-hover:scale-105 transition-all shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-[11px] text-slate-500 dark:text-obsidian-400 font-medium uppercase tracking-wider">
                    Direct Phone / WhatsApp
                  </p>
                  <p className="text-sm font-semibold text-emerald-950 dark:text-white truncate group-hover:text-emerald-700 dark:group-hover:text-amber-300 transition-colors font-mono tabular-nums">
                    +8801927265191
                  </p>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-400 dark:text-obsidian-400 group-hover:text-emerald-700 dark:group-hover:text-amber-300 shrink-0 transition-colors" />
              </a>

              {/* Location Card */}
              <div className="glass-panel p-5 rounded-2xl flex items-center gap-4">
                <div className="p-3 rounded-xl bg-teal-50 text-teal-800 border-teal-200 dark:bg-white/[0.04] dark:text-sky-400 dark:border-white/10 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-[11px] text-slate-500 dark:text-obsidian-400 font-medium uppercase tracking-wider">
                    Operating Base
                  </p>
                  <p className="text-sm font-semibold text-emerald-950 dark:text-white">
                    Dhaka, Bangladesh
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Verifiable References */}
          <div className="space-y-4 pt-2">
            <h3 className="text-xs font-sans font-bold dark:font-semibold text-emerald-800 dark:text-amber-400 uppercase tracking-wider">
              Verifiable Professional References
            </h3>

            <div className="space-y-3">
              {/* Reference 1 */}
              <div className="glass-panel p-5 rounded-2xl space-y-2.5 relative overflow-hidden">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-800 border-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/20">
                      <Building2 className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-emerald-950 dark:text-white font-heading">
                        Reference 1
                      </h4>
                      <p className="text-xs text-emerald-700 dark:text-emerald-400 font-sans font-semibold dark:font-medium">
                        Central Banking Governance
                      </p>
                    </div>
                  </div>
                  <span className="text-[11px] font-sans px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border-emerald-200 dark:bg-white/[0.04] dark:text-obsidian-300 dark:border-white/10 font-medium">
                    Regulator
                  </span>
                </div>
                <div className="border-t border-emerald-900/10 dark:border-white/[0.08] pt-2.5 space-y-0.5 text-xs font-sans">
                  <p className="font-semibold text-emerald-950 dark:text-white">
                    Former Senior Official / Executive Director
                  </p>
                  <p className="text-slate-600 dark:text-obsidian-300">
                    Bangladesh Bank (Central Bank of Bangladesh)
                  </p>
                </div>
              </div>

              {/* Reference 2 */}
              <div className="glass-panel p-5 rounded-2xl space-y-2.5 relative overflow-hidden">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-800 border-emerald-200 dark:bg-amber-500/10 dark:text-amber-400 dark:border-amber-500/20">
                      <UserCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-emerald-950 dark:text-white font-heading">
                        Reference 2
                      </h4>
                      <p className="text-xs text-emerald-800 dark:text-amber-400 font-sans font-semibold dark:font-medium">
                        Commercial Branch Leadership
                      </p>
                    </div>
                  </div>
                  <span className="text-[11px] font-sans px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border-emerald-200 dark:bg-white/[0.04] dark:text-obsidian-300 dark:border-white/10 font-medium">
                    Executive
                  </span>
                </div>
                <div className="border-t border-emerald-900/10 dark:border-white/[0.08] pt-2.5 space-y-0.5 text-xs font-sans">
                  <p className="font-semibold text-emerald-950 dark:text-white">
                    Vice President / Senior Branch Manager
                  </p>
                  <p className="text-slate-600 dark:text-obsidian-300">
                    National Bank PLC
                  </p>
                </div>
              </div>
            </div>

            {/* Note Badge */}
            <div className="p-4 rounded-2xl glass-panel flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-emerald-700 dark:text-amber-400 shrink-0" />
              <p className="text-xs text-slate-600 dark:text-obsidian-300 font-sans">
                Verifiable references and formal recommendation letters available upon request.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Contact Form */}
        <div className="lg:col-span-7">
          <div className="glass-panel-elevated p-7 sm:p-9 rounded-3xl space-y-6 shadow-glass-lg border border-emerald-900/10 dark:border-white/[0.12]">
            <div className="space-y-2 border-b border-emerald-900/10 dark:border-white/[0.08] pb-5">
              <div className="flex items-center gap-2 text-emerald-800 dark:text-amber-400 text-xs font-sans font-bold dark:font-semibold uppercase tracking-wider">
                <Landmark className="w-4 h-4" />
                <span>Executive Communication Channel</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-emerald-950 dark:text-white font-heading">
                Transmit Official Message
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-obsidian-300 font-sans">
                Submit your message below to dispatch a direct inquiry or schedule a formal consultation.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name Field */}
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="block text-xs text-slate-700 dark:text-obsidian-300 font-medium"
                  >
                    Your Name <span className="text-emerald-700 dark:text-amber-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Md. Tanvir Hasan"
                    className="w-full px-4 py-3 rounded-xl glass-input text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-obsidian-500 text-sm font-sans"
                  />
                </div>

                {/* Email Field */}
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="block text-xs text-slate-700 dark:text-obsidian-300 font-medium"
                  >
                    Your Email <span className="text-emerald-700 dark:text-amber-400">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. tanvir@bank.com"
                    className="w-full px-4 py-3 rounded-xl glass-input text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-obsidian-500 text-sm font-sans"
                  />
                </div>
              </div>

              {/* Subject Field */}
              <div className="space-y-2">
                <label
                  htmlFor="subject"
                  className="block text-xs text-slate-700 dark:text-obsidian-300 font-medium"
                >
                  Subject <span className="text-emerald-700 dark:text-amber-400">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="e.g. Executive Banking Opportunity / Foreign Trade Inquiry"
                  className="w-full px-4 py-3 rounded-xl glass-input text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-obsidian-500 text-sm font-sans"
                />
              </div>

              {/* Message Field */}
              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="block text-xs text-slate-700 dark:text-obsidian-300 font-medium"
                >
                  Message <span className="text-emerald-700 dark:text-amber-400">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Detail your operational inquiry or executive role specifications..."
                  className="w-full px-4 py-3 rounded-xl glass-input text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-obsidian-500 text-sm font-sans resize-none"
                />
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                {/* Submit Button */}
                <button
                  type="submit"
                  className="flex-1 inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-700 to-emerald-800 hover:from-emerald-600 hover:to-emerald-700 text-white dark:from-amber-500 dark:to-amber-600 dark:hover:from-amber-400 dark:hover:to-amber-500 dark:text-obsidian-950 font-bold transition-all text-sm shadow-emerald-900/20 dark:shadow-glass-glow-gold hover:-translate-y-0.5 active:translate-y-0"
                >
                  <Send className="w-4 h-4" />
                  <span>Transmit Inquiry</span>
                </button>

                {/* Copy Email Button */}
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl glass-panel hover:border-emerald-400 dark:hover:border-amber-500/40 text-slate-700 dark:text-obsidian-200 hover:text-emerald-950 dark:hover:text-amber-300 font-semibold text-sm transition-all"
                  title="Copy official email to clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                      <span className="text-emerald-600 dark:text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-emerald-700 dark:text-amber-400" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>

                {/* Direct Mailto Option */}
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl glass-panel hover:border-emerald-400 dark:hover:border-amber-500/40 text-slate-700 dark:text-obsidian-200 hover:text-emerald-950 dark:hover:text-amber-300 font-semibold text-sm transition-all"
                  title="Trigger mailto: link in default email client"
                >
                  <ExternalLink className="w-4 h-4 text-emerald-700 dark:text-amber-400" />
                  <span>Mail Client</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
