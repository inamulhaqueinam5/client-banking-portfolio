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
  Sparkles
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
    
    // Construct mailto link trigger
    const mailtoSubject = encodeURIComponent(
      formData.subject || 'Executive Banking Inquiry - Zannat Ara Nishat'
    );
    const mailtoBody = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:nishatzannatara@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;

    // Show custom toast notification
    setToast({
      show: true,
      message:
        'Message Sent! Thank you for reaching out to Zannat Ara Nishat. Your message has been received.',
    });

    // Reset form state
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });

    // Auto dismiss toast after 6 seconds
    setTimeout(() => {
      setToast((prev) => ({ ...prev, show: false }));
    }, 6000);
  };

  const handleDirectMailto = () => {
    const mailtoSubject = encodeURIComponent(
      formData.subject || 'Executive Banking Inquiry - Zannat Ara Nishat'
    );
    const mailtoBody = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:nishatzannatara@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;
  };

  return (
    <section
      id="contact"
      className="relative py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden"
    >
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-accent/5 rounded-full blur-3xl pointer-events-none" />

      {/* Toast Notification */}
      <AnimatePresence>
        {toast.show && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed bottom-6 right-4 sm:right-6 z-50 max-w-md w-full glass-panel p-4 rounded-xl shadow-2xl border border-gold-accent/40 bg-navy-surface/95 backdrop-blur-xl"
            role="alert"
          >
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-gold-accent/20 text-gold-accent shrink-0 mt-0.5">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div className="flex-1 pr-2">
                <h4 className="text-sm font-semibold text-slate-100 font-heading tracking-wide">
                  Submission Successful
                </h4>
                <p className="text-xs md:text-sm text-slate-300 mt-1 leading-relaxed">
                  {toast.message}
                </p>
              </div>
              <button
                onClick={() => setToast({ show: false, message: '' })}
                className="text-slate-400 hover:text-slate-100 p-1 rounded-lg transition-colors shrink-0"
                aria-label="Close notification"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-3xl mx-auto mb-12 md:mb-16 space-y-4"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel text-gold-accent text-xs md:text-sm font-medium tracking-wider uppercase border border-gold-accent/20">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Connect & Verify</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-50 font-heading">
          Get In Touch & Professional References
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold-accent to-transparent mx-auto rounded-full" />
        <p className="text-slate-400 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
          Direct communication channels for executive banking inquiries, foreign trade consultation, and verifiable professional credentials.
        </p>
      </motion.div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left Column: Direct Contact Info & References */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 space-y-8"
        >
          {/* Direct Contact Info Cards */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-slate-100 font-heading tracking-wide border-l-2 border-gold-accent pl-3">
              Direct Contact Details
            </h3>

            <div className="grid grid-cols-1 gap-3 sm:gap-4">
              {/* Email Card */}
              <motion.a
                whileHover={{ y: -3, scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                href="mailto:nishatzannatara@gmail.com"
                className="glass-panel glass-panel-hover p-4 rounded-xl flex items-center gap-4 group transition-all"
              >
                <div className="p-3 rounded-lg bg-navy-bg/80 text-gold-accent border border-gold-accent/20 group-hover:bg-gold-accent group-hover:text-navy-bg transition-colors shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-medium text-slate-400 uppercase tracking-wider">
                    Official Email
                  </p>
                  <p className="text-sm md:text-base font-semibold text-slate-100 truncate group-hover:text-gold-accent transition-colors">
                    nishatzannatara@gmail.com
                  </p>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-gold-accent shrink-0 transition-colors" />
              </motion.a>

              {/* Phone Card */}
              <motion.a
                whileHover={{ y: -3, scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                href="tel:+8801927265191"
                className="glass-panel glass-panel-hover p-4 rounded-xl flex items-center gap-4 group transition-all"
              >
                <div className="p-3 rounded-lg bg-navy-bg/80 text-gold-accent border border-gold-accent/20 group-hover:bg-gold-accent group-hover:text-navy-bg transition-colors shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-medium text-slate-400 uppercase tracking-wider">
                    Direct Phone / WhatsApp
                  </p>
                  <p className="text-sm md:text-base font-semibold text-slate-100 truncate group-hover:text-gold-accent transition-colors">
                    +8801927265191
                  </p>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-gold-accent shrink-0 transition-colors" />
              </motion.a>

              {/* Location Card */}
              <div className="glass-panel p-4 rounded-xl flex items-center gap-4">
                <div className="p-3 rounded-lg bg-navy-bg/80 text-gold-accent border border-gold-accent/20 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-medium text-slate-400 uppercase tracking-wider">
                    Primary Location
                  </p>
                  <p className="text-sm md:text-base font-semibold text-slate-100">
                    Dhaka, Bangladesh
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Verifiable Professional References Section */}
          <div className="space-y-4 pt-2">
            <h3 className="text-xl font-bold text-slate-100 font-heading tracking-wide border-l-2 border-gold-accent pl-3">
              Verifiable Professional References
            </h3>

            <div className="space-y-4">
              {/* Reference 1 */}
              <div className="glass-panel p-5 rounded-xl space-y-3 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gold-accent/5 rounded-bl-full pointer-events-none" />
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-gold-accent/10 text-gold-accent border border-gold-accent/20">
                      <Building2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-slate-100 font-heading">
                        Reference 1
                      </h4>
                      <p className="text-xs text-gold-accent font-medium">
                        Central Banking Regulator
                      </p>
                    </div>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700 uppercase font-semibold tracking-wider">
                    Official
                  </span>
                </div>
                <div className="border-t border-slate-800/80 pt-3 space-y-1">
                  <p className="text-sm font-semibold text-slate-200">
                    Former Senior Official / Executive Director
                  </p>
                  <p className="text-xs text-slate-400 font-medium">
                    Bangladesh Bank (Central Bank of Bangladesh)
                  </p>
                </div>
              </div>

              {/* Reference 2 */}
              <div className="glass-panel p-5 rounded-xl space-y-3 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gold-accent/5 rounded-bl-full pointer-events-none" />
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-gold-accent/10 text-gold-accent border border-gold-accent/20">
                      <UserCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-slate-100 font-heading">
                        Reference 2
                      </h4>
                      <p className="text-xs text-gold-accent font-medium">
                        Commercial Branch Leadership
                      </p>
                    </div>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700 uppercase font-semibold tracking-wider">
                    Executive
                  </span>
                </div>
                <div className="border-t border-slate-800/80 pt-3 space-y-1">
                  <p className="text-sm font-semibold text-slate-200">
                    Vice President / Senior Branch Manager
                  </p>
                  <p className="text-xs text-slate-400 font-medium">
                    National Bank PLC
                  </p>
                </div>
              </div>
            </div>

            {/* Note Badge */}
            <div className="p-4 rounded-xl glass-panel border border-gold-accent/30 bg-gold-accent/5 flex items-center gap-3.5">
              <div className="p-2 rounded-lg bg-gold-accent/20 text-gold-accent shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <p className="text-xs md:text-sm text-slate-300 font-medium leading-relaxed">
                Verifiable references and formal recommendation letters available upon request.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Interactive Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7"
        >
          <div className="glass-panel p-6 sm:p-8 rounded-2xl relative border border-gold-accent/20 space-y-6">
            <div className="space-y-2 border-b border-slate-800/80 pb-4">
              <h3 className="text-2xl font-bold text-slate-50 font-heading">
                Send an Executive Message
              </h3>
              <p className="text-xs sm:text-sm text-slate-400">
                Fill out the inquiry form below to initiate direct communication or send an official consultation request.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Name Field */}
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="block text-xs font-semibold text-slate-300 uppercase tracking-wider"
                  >
                    Your Name <span className="text-gold-accent">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Md. Tanvir Hasan"
                    className="w-full px-4 py-3 rounded-lg bg-navy-bg/90 border border-slate-700/80 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-gold-accent focus:ring-1 focus:ring-gold-accent transition-all text-sm"
                  />
                </div>

                {/* Email Field */}
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="block text-xs font-semibold text-slate-300 uppercase tracking-wider"
                  >
                    Your Email <span className="text-gold-accent">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. tanvir@bank.com"
                    className="w-full px-4 py-3 rounded-lg bg-navy-bg/90 border border-slate-700/80 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-gold-accent focus:ring-1 focus:ring-gold-accent transition-all text-sm"
                  />
                </div>
              </div>

              {/* Subject Field */}
              <div className="space-y-2">
                <label
                  htmlFor="subject"
                  className="block text-xs font-semibold text-slate-300 uppercase tracking-wider"
                >
                  Subject <span className="text-gold-accent">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="e.g. Executive Banking Opportunity / Foreign Trade Inquiry"
                  className="w-full px-4 py-3 rounded-lg bg-navy-bg/90 border border-slate-700/80 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-gold-accent focus:ring-1 focus:ring-gold-accent transition-all text-sm"
                />
              </div>

              {/* Message Field */}
              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="block text-xs font-semibold text-slate-300 uppercase tracking-wider"
                >
                  Message <span className="text-gold-accent">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Provide details regarding your inquiry or opportunity..."
                  className="w-full px-4 py-3 rounded-lg bg-navy-bg/90 border border-slate-700/80 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-gold-accent focus:ring-1 focus:ring-gold-accent transition-all text-sm resize-none"
                />
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                {/* Submit Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-gold-accent hover:bg-gold-hover text-navy-bg font-bold transition-all duration-200 shadow-lg shadow-gold-accent/10 text-sm"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Inquiry Message</span>
                </motion.button>

                {/* Direct Mailto Trigger Option */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="button"
                  onClick={handleDirectMailto}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg glass-panel hover:bg-slate-800 text-slate-200 font-semibold border border-slate-700/80 text-sm transition-all"
                  title="Trigger mailto: link in default email client"
                >
                  <ExternalLink className="w-4 h-4 text-gold-accent" />
                  <span>Open Mail Client</span>
                </motion.button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
