# 💼 Client Showcase & Case Study: Executive Banking Portfolio

> **Client:** Zannat Ara Nishat — *Senior Banking & Foreign Trade Specialist (10+ Years at National Bank PLC)*  
> **Engineered & Designed By:** **[Inamul Haque (@inamulhaqueinam5)](https://github.com/inamulhaqueinam5)**  
> **Project Classification:** Client Production Application / Proof of Work  
> **Production Status:** Live in Production (`v1.0.0`)  

[![Live Demo](https://img.shields.io/badge/Live%20Demo-zannat--ara--nishat.netlify.app-0ea5e9?style=for-the-badge&logo=netlify&logoColor=white)](https://zannat-ara-nishat.netlify.app)
[![GitHub Repository](https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/inamulhaqueinam5/zannat-banking-portfolio)
[![Next.js 14](https://img.shields.io/badge/Next.js-14_(App_Router)-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![CI/CD](https://img.shields.io/badge/CI%2FCD-GitHub_Actions_to_Netlify-2088FF?style=for-the-badge&logo=githubactions&logoColor=white)](https://github.com/inamulhaqueinam5/zannat-banking-portfolio/actions)

---

## 🌐 Live Production Deployment

- 🔗 **Live Website:** [https://zannat-ara-nishat.netlify.app](https://zannat-ara-nishat.netlify.app)
- 📂 **Source Repository:** [inamulhaqueinam5/zannat-banking-portfolio](https://github.com/inamulhaqueinam5/zannat-banking-portfolio)

---

## 👨‍💻 About This Project & Client Proof of Work

This repository serves as a **production-grade client case study** demonstrating how I engineer, architect, and deliver real-world bespoke web applications for corporate clients. 

Rather than building generic boilerplate templates or toy clones, this application was custom-crafted from the ground up for a real corporate executive — **Zannat Ara Nishat**, a seasoned banking officer with over a decade of distinguished service at **National Bank PLC**, specializing in **Foreign Trade (Export/Import), Cash Risk Mitigation, and AML/CFT Compliance**.

### 🌟 What this project demonstrates about my engineering standard:
1. **End-to-End Client Delivery:** Converting raw corporate resume records and regulatory credentials into a high-converting, authoritative digital presence.
2. **Domain-Driven Decoupled Architecture:** Clean separation between pure TypeScript domain data models (`src/domain/content/`) and modular React presentation components.
3. **Production-Grade Reliability:** 100% strict TypeScript typing (zero `any` policy), zero-DOM automated unit tests (`npm test`), and continuous deployment automation via GitHub Actions to Netlify.
4. **Bespoke UI/UX & Design Systems:** Custom dual-world theme system (*Obsidian Void Dark* & *Sovereign Emerald Light*) engineered with custom Tailwind CSS tokens, WCAG AA accessibility, and spring physics micro-interactions.

---

## 📌 The Client Challenge & Engineered Solution

### 🎯 The Challenge
Executive banking candidates possess extensive career histories, regulatory diplomas (JAIBB, AIBB), and branch-level achievements that are difficult to convey effectively through static paper resumes. The client required:
1. An **authoritative, institutional-grade visual presence** reflecting the trust, rigor, and prestige of the banking sector.
2. An **interactive storytelling experience** for hiring committees and executive recruiters to inspect 10+ years of branch milestones within seconds.
3. **Frictionless communication channels** with one-click CV access, interactive inquiry handling, and verified references.

### 💡 The Solution (Proof of Work)
I designed and developed a bespoke, high-performance web application utilizing **Next.js 14 App Router**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**. The application features a custom **Dual-World Theme System** (*Obsidian Void Dark* & *Sovereign Emerald Light*), a decoupled domain repository, and full CI/CD deployment automation.

---

## 🌟 Key Features & Implementation Details

### 1. 🏛️ Dual-World Executive Theme System
- **Obsidian Void & Champagne Gold (Dark Mode):** Tailored for high-trust executive atmosphere with deep obsidian layers, glowing gold accents, and subtle glassmorphic reflections.
- **Sovereign Emerald & Alabaster (Light Mode):** Central banking aesthetic featuring crisp emerald typography, milky frosted glass panels, and clean readability.
- **Interactive Theme Switcher:** Smooth spring-animated sun/moon toggling with zero flash-of-unstyled-content (FOUC).

### 2. ⏳ Interactive Multi-Branch Career Timeline
- Visualizes 10+ years of career progression across key commercial hubs (**Mohakhali, Banani, and Gulshan branches**).
- Dynamic branch filtering and expandable milestone drawers with verified operational metrics.

### 3. 📊 Categorized Competency & Compliance Matrix
- 24+ domain skill items structured across Foreign Trade, Compliance & AML/CFT, Core Banking Software, and General Banking.
- Accreditation badges and liquid-crystal animated proficiency bars.

### 4. 📜 Governance & Certifications 3D Carousel
- Interactive carousel showcasing professional banking qualifications (**JAIBB**, **AIBB**), academic degrees (M.A./B.A.), and specialized Bangladesh Bank regulatory training.
- Smooth touch-swipe, keyboard accessibility, and pagination indicators.

### 5. 📬 Interactive Contact & Dispatch Console
- Integrated inquiry console with instant client-side toast notifications.
- Direct communication channels (Email, WhatsApp, Phone) and verified institutional reference cards.
- Instant static asset download serving verified `resume.pdf`.

---

## 🛠️ Architecture & Technical Stack

| Area | Technologies / Tools Used |
| :--- | :--- |
| **Framework** | **Next.js 14** (App Router, Static Export Optimization) |
| **Language** | **TypeScript 5** (Strict typing, zero `any` policy) |
| **Styling & Design System** | **Tailwind CSS 3.4**, Custom Glassmorphism Tokens, CSS Variables |
| **Typography** | `Cinzel` (Executive Serif), `Plus Jakarta Sans`, `JetBrains Mono` |
| **Animations & UI** | **Framer Motion 11**, **Lucide Icons**, `clsx`, `tailwind-merge` |
| **Domain Architecture** | Decoupled Repository Pattern (`src/domain/content/`) |
| **Testing** | Automated Pure Domain Unit Tests (`tsx --test`) |
| **DevOps & CI/CD** | **GitHub Actions** automated pipeline deploying to **Netlify** |

---

## 📐 Software Engineering Best Practices

```
src/
├── app/                  # Next.js App Router root layout, page & metadata
├── components/           # Modular presentation components (Hero, Timeline, etc.)
│   ├── CareerTimeline.tsx
│   ├── CompetencyGrid.tsx
│   ├── CredentialsCarousel.tsx
│   ├── FloatingNav.tsx
│   ├── HeroSection.tsx
│   └── ContactSection.tsx
├── domain/               # Domain-Driven Design layer (types, selectors, content)
│   ├── types.ts          # Canonical TypeScript interfaces
│   └── content/          # Pure content repositories & automated unit test suite
└── public/               # Static assets & client resume (resume.pdf)
```

- **Domain-Driven Decoupling:** Content and business rules are separated from React presentation components into pure TypeScript selectors (`getExecutiveProfile()`, `getCareerTimeline()`, `getCompetencyMatrix()`), ensuring maintainability.
- **Performance & Static Generation:** Pre-rendered static build with fast initial load times and optimized Core Web Vitals.
- **Responsive & Accessible (WCAG AA):** Fully tested across Mobile (375px), Tablet (768px), and Desktop (1440px+).

---

## 🚀 Local Development Setup

```bash
# 1. Clone the repository
git clone https://github.com/inamulhaqueinam5/zannat-banking-portfolio.git

# 2. Navigate into project directory
cd zannat-banking-portfolio

# 3. Install dependencies
npm install

# 4. Start local development server
npm run dev

# 5. Run domain test suite
npm test

# 6. Build static production bundle
npm run build
```

---

## 👨‍💻 Engineering Services & Client Inquiries

I help startups, corporate executives, and business founders build **high-performance web applications, bespoke design systems, and production-grade digital products** with modern software engineering practices.

- **Developer & Architect:** Inamul Haque
- **GitHub:** [@inamulhaqueinam5](https://github.com/inamulhaqueinam5)
- **Email:** [inamuhaqueinam5@gmail.com](mailto:inamuhaqueinam5@gmail.com)
- **Core Engineering Services:**
  - 🚀 **Bespoke Executive Portfolios & Digital Resumes:** Institutional, high-converting personal branding applications.
  - ⚡ **Full-Stack Next.js / React Applications:** High-speed, SEO-optimized, production-ready web apps with clean architecture.
  - 🎨 **Custom Design Systems & Micro-Interactions:** Tailored typography, responsive glassmorphism, and spring-physics animations (Framer Motion).
  - 🛡️ **Domain-Driven Architecture & Automated Testing:** Robust TypeScript codebases with decoupled repositories and CI/CD pipelines.

> 💬 *Have a project in mind or looking for a production-grade software engineer? Feel free to reach out via email or GitHub!*

---

## 📄 License & Attribution

- **Source Code & Architecture:** © Inamul Haque. Open for inspection as Proof of Work.
- **Client Identity & Career Data:** Proprietary to **Zannat Ara Nishat**.
