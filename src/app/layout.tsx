import type { Metadata } from "next";
import { Cinzel, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
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
      className={`${cinzel.variable} ${plusJakartaSans.variable} ${jetbrainsMono.variable} scroll-smooth dark`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                var theme = localStorage.getItem('executive-portfolio-theme');
                if (theme === 'light') {
                  document.documentElement.classList.remove('dark');
                  document.documentElement.classList.add('light');
                } else {
                  document.documentElement.classList.add('dark');
                  document.documentElement.classList.remove('light');
                }
              } catch (e) {
                document.documentElement.classList.add('dark');
              }
            `,
          }}
        />
      </head>
      <body className="bg-slate-50 dark:bg-obsidian-950 text-slate-800 dark:text-obsidian-50 min-h-screen antialiased font-sans relative overflow-x-hidden transition-colors duration-300">
        <ThemeProvider>
          {/* Global Ambient Lighting Caustics - Adaptive Dark & Sovereign Emerald Light */}
          <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
            {/* Dark Mode Ambient Caustics */}
            <div className="hidden dark:block">
              <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[140px] animate-aura-1" />
              <div className="absolute top-1/3 -right-40 w-[700px] h-[700px] bg-sky-500/10 rounded-full blur-[160px] animate-aura-2" />
              <div className="absolute bottom-10 left-1/4 w-[650px] h-[650px] bg-emerald-500/8 rounded-full blur-[150px] animate-aura-1" />
            </div>

            {/* Sovereign Emerald Light Mode Ambient Caustics */}
            <div className="block dark:hidden">
              <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-emerald-500/12 rounded-full blur-[140px] animate-aura-1" />
              <div className="absolute top-1/3 -right-40 w-[700px] h-[700px] bg-teal-500/10 rounded-full blur-[160px] animate-aura-2" />
              <div className="absolute bottom-10 left-1/4 w-[650px] h-[650px] bg-amber-500/8 rounded-full blur-[150px] animate-aura-1" />
            </div>
          </div>

          <div className="relative z-10">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
