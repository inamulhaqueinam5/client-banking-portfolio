# Feature Specification: Executive Banking & Foreign Trade Personal Portfolio Website

## Problem Statement

Recruiters, banking executives, and corporate clients evaluating executive candidates often struggle to parse dense multi-page resume PDFs to assess an individual's real operational impact, regulatory compliance leadership, and trade settlement track record. Static resumes lack interactive depth, visual engagement, instant accessibility, and modern personal branding.

## Solution

A high-converting, responsive, interactive personal portfolio website for Zannat Ara Nishat (Senior Banking & Foreign Trade Specialist with 10+ years of experience at National Bank PLC). The portfolio features an Executive Corporate Minimalist theme (Midnight Navy, Slate Gold accents, subtle glassmorphism), an interactive career timeline, filterable skill matrices, qualifications/certification showcases (JAIBB & AIBB), and an instant contact & resume download system.

## User Stories

1. As a corporate banking recruiter, I want to immediately see Zannat Ara Nishat's full name, professional title, and 10+ year summary upon landing on the site, so that I can instantly identify her candidate domain expertise.
2. As a hiring manager, I want to download her official `resume.pdf` with a single click from the Hero banner, so that I can archive or distribute her resume within my organization.
3. As a financial executive, I want an interactive career timeline detailing her roles across Mohakhali, Banani, and Gulshan branches, so that I can inspect her progression from Junior Officer to First Executive Officer.
4. As a compliance director, I want to filter her skills by Regulatory Compliance & AML/CFT, so that I can verify her knowledge of Bangladesh Bank and ICCD guidelines.
5. As a trade finance manager, I want to explore her operational achievements in Foreign Trade & Export Settlement, so that I can evaluate her experience scrutinizing and negotiating foreign exchange export bills.
6. As a bank auditor, I want a dedicated section displaying her professional banking examinations (JAIBB & AIBB certifications) and specialized training modules, so that I can confirm her formal qualifications.
7. As a prospective client or employer, I want an interactive contact form with instant toast feedback, so that I can easily send an inquiry or message.
8. As a mobile phone user, I want the portfolio to render fluidly without horizontal scroll or layout clipping on a 375px screen, so that I have a seamless reading experience on mobile devices.
9. As a desktop user, I want subtle hover states and Framer Motion visual reveals as I scroll down the page, so that the site feels polished, executive, and highly engaging.
10. As a site visitor, I want direct phone and email contact triggers, so that I can reach out via my device's default mail or dialer client without copy-pasting numbers.

## Implementation Decisions

- **Visual Theme & Palette**: Executive Corporate Minimalist theme using Midnight Navy (`#0a1120`) background, dark slate surface cards (`#0f172a`), metallic gold accents (`#d4af37`), and high-contrast slate text (`#f8fafc`).
- **Typography System**: Executive serif font pairing (`Cinzel` / `Playfair Display`) for headings and modern sans-serif (`Plus Jakarta Sans`) for body copy and UI components.
- **Application Architecture**: Next.js App Router structure with TypeScript, Tailwind CSS, Framer Motion for scroll-triggered micro-interactions, and Shadcn UI / Lucide icons.
- **Component Seam Architecture**:
  - `HeroSection`: Header identity, executive summary, CTA buttons.
  - `CareerTimeline`: Interactive branch progression map (Mohakhali, Banani, Gulshan) with expandable milestone cards.
  - `CompetencyGrid`: Category-filterable skill badges (Banking Operations, Compliance & AML, Customer Service, Languages).
  - `CredentialsCarousel`: Highlighting JAIBB, AIBB, Cash Management, and AML/CFT certifications.
  - `ContactSection`: Contact form with client-side toast notifications, `mailto:` triggers, and professional references.
- **Resume Delivery & Static Assets**: Static serving of source `resume.pdf` from the public assets directory.
- **Autonomous Tooling Protocol**: Local package installation (`npm install`) within the project workspace without global environmental pollution.

## Testing Decisions

- **Testing Seam Strategy**: The primary testing seam is at the client browser level and root page composition.
- **Automated Visual QA (Playwright MCP)**:
  - Automated headless browser rendering after completing each UI section component.
  - Snapshot captures across 3 standard viewports: Desktop (1440x900), Tablet (768x1024), and Mobile (375x812).
  - Visual regression inspection stored in local `.qa-snapshots/`.
- **Behavioral & Accessibility Verification**:
  - Keyboard navigation accessibility across interactive timeline items and filter buttons.
  - WCAG AA text contrast verification on dark navy and gold surfaces.
  - Zero layout overflow verification on mobile viewports.

## Out of Scope

- Backend database or CMS setup (portfolio content is driven directly by structured resume data).
- User authentication, login portals, or multi-tenant dashboard features.
- Third-party paid email SaaS setup (using client-side toast notifications and fallback `mailto:` links).

## Further Notes

- All design system rules, agentic skills, MCP tool configs, and ADRs are documented in `CONTEXT.md` and `docs/adr/`.
- The portfolio is optimized for deployment to Vercel, Netlify, or GitHub Pages as a static export or serverless Next.js deployment.
