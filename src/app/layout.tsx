import type { Metadata } from "next";
import { Cinzel, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Zannat Ara Nishat | Senior Banking & Foreign Trade Specialist",
  description:
    "Executive portfolio of Zannat Ara Nishat - 10+ years of expertise in Foreign Trade, Cash Risk Mitigation, AML/CFT Compliance, and Core Banking Operations at National Bank PLC.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cinzel.variable} ${plusJakartaSans.variable}`}
    >
      <body className="bg-navy-bg text-slate-100 min-h-screen antialiased selection:bg-gold-accent selection:text-navy-bg">
        {children}
      </body>
    </html>
  );
}
