# Design System

<!-- impeccable:design-schema 1 -->

## Direction & Thesis

**Theme**: Surreal Ethereal Glass & Sovereign Financial Luminescence
**Thesis**: Merges the institutional trust and regulatory rigor of premier central banking with a modern, surreal glassmorphic visual language. Replaces flat cards, boxy slate boxes, and fake grid backgrounds with multi-layered frosted glass (`backdrop-blur-2xl`), specular highlights, organic ethereal ambient light caustics, and radiant champagne-gold accents.

## Palette & Surface System

### Color Tokens
- **Void Obsidian Ground**: `#020408` to `#040711` (Deep cosmic background with ambient light diffusion)
- **Frosted Glass Panel**: `rgba(11, 19, 38, 0.52)` with `backdrop-blur-xl` and `border-white/[0.08]`
- **Elevated Glass Vault**: `rgba(15, 23, 42, 0.65)` with `inset 0 1px 1px 0 rgba(255, 255, 255, 0.12)`
- **Ethereal Champagne Gold**: `#f59e0b` / `#fbbf24` (Primary interactive luminescence, CTA buttons, metrics)
- **Sovereign Cyan & Sky**: `#0ea5e9` / `#38bdf8` (Specialized secondary accents & badges)
- **Central Bank Emerald**: `#10b981` / `#34d399` (Audit clearance seals & live deployment indicators)
- **Text Primary**: Obsidian-50 `#ffffff` / `#f8fafc` (High-contrast headings, drop-shadowed titles)
- **Text Secondary**: Obsidian-200 / Obsidian-300 `#cbd5e1` / `#94a3b8` (WCAG AA/AAA compliant readable prose)

### Glassmorphic Tokens & Shadows
- `.glass-panel`: Translucent ground with 1px hairline translucent borders and inner specular reflection.
- `.glass-panel-elevated`: 3D depth elevation with subtle inset lighting.
- `.glass-pill`: Capsule badges and filter controls with hover refraction.
- `.glass-input`: Frosted form fields with luminous amber focus ring.
- Shadows: `shadow-glass-glow-gold`, `shadow-glass-glow-cyan`, `shadow-glass-glow-emerald`, `shadow-glass-lg`.

## Typography & Hierarchy

- **Executive Headings**: `Cinzel` (Google Font serif, 500/600/700 weight, `-0.02em` tracking, white with gold accents)
- **Body & Controls**: `Plus Jakarta Sans` (Google Font sans-serif, legible, spacious measure)
- **Telemetry & Numerals**: `JetBrains Mono` with `tabular-nums` for precise monetary metrics, percentages, and phone numbers

## Component Architecture

1. **HeroSection**:
   - Floating frosted glass status pill (`.glass-pill`) with animated emerald luminescent indicator
   - Grand executive identity heading (`Cinzel`) with warm champagne gold subtitle
   - Champagne gold gradient resume download CTA and frosted glass inquiry button
   - 3 floating crystalline glass metric prisms (`.glass-panel-interactive`) with hover aura glows

2. **CareerTimeline**:
   - Luminous gradient spine (`amber-400` -> `sky-400` -> `emerald-400`) connecting progressive milestones
   - Multi-branch career records (Mohakhali, Banani, Gulshan) wrapped in floating frosted glass cards
   - Frosted glass category filter pills and interactive accordion inspection drawers

3. **CompetencyGrid**:
   - Institutional accreditation highlight cards with frosted emerald, gold, and sky capsules
   - Multi-category skill matrix with liquid-crystal glowing gold proficiency bars
   - Category filtering and accreditations-only toggle

4. **CredentialsCarousel**:
   - 3D floating frosted glass vault cards (`.glass-panel-elevated`) with interactive touch/keyboard navigation
   - Formal banking examinations (JAIBB, AIBB), degrees (M.A./B.A.), and risk certifications (CMRM, AML/CFT)
   - Frosted pill pagination controls and smooth spring transitions

5. **ContactSection**:
   - Frosted glass dispatch console (`.glass-panel-elevated`) with luminous form inputs
   - Direct communication channels (Email, Phone, WhatsApp) and verifiable regulator references
   - Floating frosted glass toast confirmation banner upon inquiry dispatch

## Motion Grammar

- Organic ambient auroras (`animate-aura-1`, `animate-aura-2`) floating smoothly behind the layout
- Staggered entrance animations via `framer-motion` (duration `0.5s - 0.65s`, ease `[0.16, 1, 0.3, 1]`)
- Pulse luminescence indicators (`3s` cycle) for verified and active status badges
- Smooth fluid spring drag gestures for the credential carousel
