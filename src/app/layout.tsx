import type { Metadata } from "next";
import { Cinzel, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Zannat Ara Nishat | Senior Banking & Foreign Trade Specialist",
  description:
    "Executive Portfolio of Zannat Ara Nishat - First Executive Officer at National Bank PLC. 10+ Years of Specialization in Foreign Trade & Export Settlement, Cash Risk Mitigation, and Bangladesh Bank AML/CFT Regulatory Governance.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cinzel.variable} ${plusJakartaSans.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <body className="bg-obsidian-950 text-obsidian-50 min-h-screen antialiased selection:bg-amber-500/30 selection:text-amber-200 font-sans relative overflow-x-hidden">
        {/* Impeccable Direction Contract:
            THESIS: A surreal ethereal glass and sovereign luminescence executive banking portfolio refusing boxy slate cards, fake grid patterns, and standard SaaS monotony.
            OWN-WORLD: Obsidian Void (#020408, #040711), Frosted Liquid Glass (backdrop-blur-2xl with specular refraction), Ethereal Champagne Gold (#f59e0b, #fbbf24), and Sovereign Emerald (#10b981).
            STORY: Hiring managers and banking executives encounter an atmospheric, high-trust digital sanctuary showcasing 10+ years of foreign trade mastery, vault leadership, and verified central bank credentials.
            FIRST VIEWPORT: Floating frosted glass status emblem, executive typography with radiant gold/silver contrast, instant resume acquisition, and floating crystalline metric prisms.
            FORM: Surreal Ethereal Glass & Sovereign Luminescence. Seed key: 5872106e.
            FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance.
        */}

        {/* Global Surreal Ambient Lighting Caustics */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
          <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[140px] animate-aura-1" />
          <div className="absolute top-1/3 -right-40 w-[700px] h-[700px] bg-sky-500/10 rounded-full blur-[160px] animate-aura-2" />
          <div className="absolute bottom-10 left-1/4 w-[650px] h-[650px] bg-emerald-500/8 rounded-full blur-[150px] animate-aura-1" />
        </div>

        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
