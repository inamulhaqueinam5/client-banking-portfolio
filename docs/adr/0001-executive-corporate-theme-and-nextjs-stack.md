# 1. Executive Corporate Minimalist Theme & Next.js Stack Selection

- **Status**: Approved
- **Date**: 2026-08-30

## Context

The target portfolio is being built from `resume.pdf` for **Zannat Ara Nishat**, a 10+ year Senior Banking & Foreign Trade Specialist at National Bank PLC. Standard developer portfolio templates typically feature developer terminal interfaces, dark neon bento grids, or software engineering code snippets. 

We needed to decide on:
1. The visual identity and design system theme.
2. The web application framework and rendering architecture.
3. Content presentation for non-developer operational experience.

## Decision

1. **Visual Aesthetic**: We adopted an **Executive Corporate Minimalist & Financial Elegance** theme (Midnight Navy background `#0a1120`, Gold `#d4af37` / Slate accents, subtle glassmorphism cards, and clean typography).
2. **Framework & Tech Stack**: We selected **Next.js 14/15 (App Router) + TypeScript + Tailwind CSS + Framer Motion + Shadcn UI + Lucide Icons**.
3. **Content Adaptation**: We adapted standard code repository showcases into **Key Operational Milestones** focusing on Foreign Trade & Export Settlement, Cash Risk Mitigation & AML/CFT Compliance, and Core Banking Operations.

## Consequences

### Positive
- Delivers a high-trust, authoritative executive portfolio tailored for banking recruiters, financial institutions, and corporate stakeholders.
- Next.js App Router provides optimal SEO, server rendering, fast page loads, and seamless static export capability for single-page portfolio hosting.
- Framer Motion and Shadcn UI enable sleek micro-interactions without compromising professional elegance.

### Negative
- Requires custom color token scale and tailwind extensions for the gold/slate financial palette.
