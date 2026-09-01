# 💼 Client Showcase & Case Study: Executive Banking Portfolio

> **Client:** Zannat Ara Nishat — *Senior Banking & Foreign Trade Specialist (10+ Years at National Bank PLC)*  
> **Developed & Engineered By:** [Inamul Haque (@inamulhaqueinam5)](https://github.com/inamulhaqueinam5)  
> **Project Type:** Client Production Application / Proof of Work  

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

## 📌 Project Overview & Client Context

This project is an **executive-grade personal portfolio and interactive digital resume** engineered for **Zannat Ara Nishat**, a seasoned banking officer with over a decade of distinguished service at **National Bank PLC**, specializing in **Foreign Trade (Export/Import), Cash Risk Mitigation, and AML/CFT Compliance**.

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

## 👨‍💻 Developer & Client Inquiries

If you are looking for custom executive portfolio development, high-performance web applications, or modern UI/UX engineering:

- **Developer:** Inamul Haque
- **GitHub:** [@inamulhaqueinam5](https://github.com/inamulhaqueinam5)
- **Email:** [inamuhaqueinam5@gmail.com](mailto:inamuhaqueinam5@gmail.com)

---

## 📄 License & Attribution

- **Source Code & Architecture:** © Inamul Haque. Open for inspection as Proof of Work.
- **Client Identity & Career Data:** Proprietary to **Zannat Ara Nishat**.
