# Context & Domain Model: Resume-to-Portfolio Conversion

This document defines the canonical domain language, settled decisions, agentic environment requirements, tool configs, visual QA loops, and design system rules for transforming resume data into high-converting portfolio applications.

---

## Finalized Architecture & Design Decisions

- **Candidate Profile**: Zannat Ara Nishat — Senior Banking & Foreign Trade Specialist (10+ years at National Bank PLC).
- **Visual Aesthetic**: **Executive Corporate Minimalist & Financial Elegance** (Midnight Navy background `#0a1120`, Gold `#d4af37` / Slate accents, subtle glassmorphism cards, clean typography).
- **Typography & Font Tokens**:
  - Headings & Titles: `Cinzel` / `Playfair Display` (High-trust executive serif).
  - Body & UI Controls: `Plus Jakarta Sans` / `Inter` (Modern clean sans-serif).
- **Color Palette Tokens**:
  - `bg-primary`: `#0a1120` (Midnight Navy)
  - `bg-surface`: `#0f172a` / `backdrop-blur-md` (Glassmorphism dark slate)
  - `accent-gold`: `#d4af37` (Metallic Slate Gold)
  - `text-primary`: `#f8fafc` (Slate 50)
  - `text-muted`: `#94a3b8` (Slate 400)
- **Tech Stack**: **Next.js 14/15 (App Router) + React + TypeScript + Tailwind CSS + Framer Motion + Shadcn UI + Lucide Icons**.
- **Contact & Delivery System**:
  - Contact Form: Interactive Client-side Toast notification + direct `mailto:` to `nishatzannatara@gmail.com`.
  - Resume Download: Direct static asset download serving `resume.pdf` from `/public/resume.pdf`.
- **Content Adaptation**: "Key Operational Milestones" focusing on Foreign Trade & Export Settlement, Cash Risk Mitigation & AML/CFT Compliance, Core Banking Software Operations, and Branch Leadership.
- **Core Interactivity (5 Sections)**:
  1. **Hero Banner**: Identity, Executive Summary, "Download Resume" CTA, Quick Contact.
  2. **Interactive Experience Timeline**: Expandable career history across Mohakhali, Banani, and Gulshan branches.
  3. **Filterable Competency Matrix**: Banking Ops, Compliance, Customer Service, Languages.
  4. **Qualifications & Certifications Carousel**: JAIBB, AIBB, Cash Management, AML/CFT.
  5. **Contact & Reference Showcase**: Working contact form with toast feedback, direct mailto/tel triggers, and references.
- **Visual QA Loop**: Automated Playwright MCP screenshot capture after building each section across 3 breakpoints (Desktop: 1440px, Tablet: 768px, Mobile: 375px) saved in `.qa-snapshots/`.

---

## Agentic Environment Setup & Autonomous Tooling Protocol

### 1. Autonomous Tooling & Zero-Hallucination Protocol
- **Auto-Detect & Local Installation**: Automatically run `npm install` for any missing dependencies (`framer-motion`, `lucide-react`, `clsx`, `tailwind-merge`, etc.) locally within the project directory without system-wide conflicts.
- **Up-to-Date Documentation Protocol**: Always verify module exports, TypeScript types, and library configurations before writing code to prevent outdated API hallucinations.
- **MCP Server Synchronization**: Utilize Playwright MCP for rendering and visual self-QA, Filesystem MCP for parsing local resume files, and Fetch MCP for fetching external design benchmarks when needed.

### 2. Required Agentic Skills & Roles
- **`component-architect`**: Modular structure for Hero, Timeline, Skill Grid, Credentials, and Contact/Inquiry forms.
- **`tailwind-design-system`**: Design tokens, color scales (Midnight Navy `#0a1120`, Gold `#d4af37`, Slate `#94a3b8`, Surface `#0f172a`), typography hierarchy, and spacing scale.
- **`framer-motion-animator`**: Micro-interactions, scroll-triggered visual reveals, hover states, and smooth layout transitions.
- **`document-parser` / `pdf-doc-reader`**: Parsing structured data directly from `resume.pdf` / `resume.json`.

### 3. Required MCP Tools & Servers
- **Playwright MCP / Browser MCP**: 
  - Render local dev server (`http://localhost:3000`).
  - Capture screenshots after each major UI section completion.
  - Perform visual QA for viewport responsiveness (Mobile: 375px, Tablet: 768px, Desktop: 1440px).
- **Filesystem MCP**: File reading/parsing of source resumes (`resume.pdf`, `resume.json`) and workspace synchronization.
- **Fetch MCP**: Retrieve modern portfolio design benchmarks and component specs when required.

### 4. Context & Config Files
- **Source Resume**: `resume.pdf` (Zannat Ara Nishat - Senior Banking & Foreign Trade Specialist)
- **Design System Config**: `tailwind.config.ts` / `src/app/globals.css`
- **Manifest**: `package.json`

### 5. Visual QA & Verification Process
1. Build individual UI section component.
2. Launch/verify dev preview on local server via Playwright.
3. Capture full-page & section-specific screenshots across Desktop (1440x900), Tablet (768x1024), and Mobile (375x812).
4. Run self-inspection checklist:
   - Text contrast ratio compliance (WCAG AA).
   - Layout shift / overflow checks on mobile viewports.
   - Smooth animation frame-rates without layout jank.
5. Record visual QA log in `.qa-snapshots/` prior to approving component state.

---

## Glossary & Domain Concepts

### Resume Source Data (`resume.pdf`)
- **Header Identity**: Full Name, Title, Contact Info (Email, Phone, Location).
- **Executive Summary**: Core professional value proposition.
- **Professional Experience**: Chronological roles at National Bank PLC (Mohakhali, Banani, Gulshan branches).
- **Qualifications & Training**: Professional certifications (JAIBB, AIBB) and specialized training modules (Cash Management, AML/CFT).
- **Education**: M.A. & B.A. in English (Govt. Titumir College), H.S.C & S.S.C.
- **Skill Matrix**: Categorized competencies (Banking Operations, Compliance, Customer Service, Languages).
- **References**: Verifiable professional references.

### Portfolio Sections
- **Hero Banner**: High-impact header displaying candidate identity, title, summary, and CTA buttons.
- **Executive Timeline**: Interactive, filterable career progression map detailing positions and key responsibilities.
- **Competency Matrix**: Grouped badges and interactive tags highlighting key operational skills.
- **Certifications & Governance**: Dedicated highlight section for professional certifications and regulatory compliance expertise.
- **Contact & Inquiry Section**: Interactive contact form with direct mailto/contact triggers.
