import { Download, ShieldCheck, Landmark } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-navy-bg flex flex-col items-center justify-center p-6 md:p-12 relative overflow-hidden">
      {/* Background Subtle Gradient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl w-full text-center space-y-8 z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel text-gold-accent text-sm font-medium tracking-wide border border-gold-accent/20">
          <Landmark className="w-4 h-4" />
          <span>Executive Corporate Minimalist</span>
        </div>

        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-50 font-heading">
            Zannat Ara Nishat
          </h1>
          <p className="text-xl md:text-2xl font-medium gold-gradient-text">
            Senior Banking & Foreign Trade Specialist
          </p>
          <p className="text-slate-400 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            10+ years of institutional banking excellence at National Bank PLC across Mohakhali, Banani, and Gulshan branches. Specialized in Foreign Trade, Cash Operations, and AML/CFT Compliance.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <a
            href="/resume.pdf"
            download="Zannat_Ara_Nishat_Resume.pdf"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-gold-accent hover:bg-gold-hover text-navy-bg font-semibold transition-all duration-200 shadow-lg shadow-gold-accent/10"
          >
            <Download className="w-5 h-5" />
            <span>Download Resume</span>
          </a>
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-lg glass-panel text-slate-300 font-medium">
            <ShieldCheck className="w-5 h-5 text-gold-accent" />
            <span>JAIBB & AIBB Certified</span>
          </div>
        </div>
      </div>
    </main>
  );
}
