# Design System

<!-- impeccable:design-schema 1 -->

## Direction & Thesis

**Theme**: Dual-World Surreal Ethereal Glass (Locked Default: Obsidian Void & Champagne Gold; On-Demand: Sovereign Emerald & Alabaster Light)
**Thesis**: Merges the institutional trust, reserve dignity, and regulatory rigor of premier central banking with a modern, surreal glassmorphic visual language. First-time and default visits enter the atmospheric **Obsidian Void** dark world. Toggling activates the **Sovereign Emerald & Alabaster Glass** light world with milky frosted glass, deep emerald typography, and crisp central banking clarity.

## Palette & Dual-Surface System

### Default Dark Mode: Obsidian Void & Luminescent Gold
- **Void Obsidian Ground**: `#020408` to `#040711` (Deep cosmic background with ambient light diffusion)
- **Frosted Glass Panel**: `rgba(11, 19, 38, 0.52)` with `backdrop-blur-xl` and `border-white/[0.08]`
- **Elevated Glass Vault**: `rgba(15, 23, 42, 0.65)` with `inset 0 1px 1px 0 rgba(255, 255, 255, 0.12)`
- **Ethereal Champagne Gold**: `#f59e0b` / `#fbbf24` (Primary interactive luminescence, CTA buttons, metrics)
- **Sovereign Cyan & Sky**: `#0ea5e9` / `#38bdf8` (Specialized secondary accents & badges)
- **Central Bank Emerald**: `#10b981` / `#34d399` (Audit clearance seals & live deployment indicators)
- **Text Primary**: `#ffffff` / `#f8fafc` (High-contrast headings, drop-shadowed titles)
- **Text Secondary**: `#cbd5e1` / `#94a3b8` (WCAG AAA compliant readable prose)

### Sovereign Emerald Light Mode: Alabaster & Forest Jade
- **Alabaster Snow Ground**: `#F8FAFC` to `#FFFFFF` (Clean, spacious backdrop with subtle emerald/amber caustics)
- **Milky Frosted Glass Panel**: `rgba(255, 255, 255, 0.88)` with `backdrop-blur-xl` and `border-emerald-900/[0.08]`
- **Elevated Glass Vault**: `rgba(255, 255, 255, 0.95)` with `inset 0 1px 1px 0 rgba(255, 255, 255, 1)` and `shadow-[0_20px_40px_-12px_rgba(6,78,59,0.08)]`
- **Sovereign Emerald**: `#064e3b` / `#047857` (Primary executive headings, badges, and high-contrast accents)
- **Forest Jade CTA**: `bg-gradient-to-r from-emerald-700 to-emerald-800 hover:from-emerald-600 hover:to-emerald-700 text-white`
- **Text Primary**: `#064e3b` / `#0f172a` (11.8:1 WCAG AAA contrast ratio)
- **Text Secondary**: `#475569` / `#64748b` (Readable slate prose on alabaster surfaces)

### Glassmorphic Tokens & Shadows
- `.glass-panel`: Translucent ground with 1px hairline translucent borders and inner specular reflection.
- `.glass-panel-elevated`: 3D depth elevation with subtle inset lighting.
- `.glass-pill`: Capsule badges and filter controls with hover refraction.
- `.glass-input`: Frosted form fields with luminous focus ring (Amber in Dark, Emerald in Light).
- Shadows: `shadow-glass-glow-gold`, `shadow-glass-glow-cyan`, `shadow-glass-glow-emerald`, `shadow-glass-lg`, `shadow-emerald-900/20`.

## Typography & Hierarchy

- **Executive Headings**: `Cinzel` (Google Font serif, 500/600/700 weight, `-0.025em` tracking)
- **Body & Controls**: `Plus Jakarta Sans` (Google Font sans-serif, legible, spacious measure)
- **Telemetry & Numerals**: `JetBrains Mono` with `tabular-nums` for monetary metrics, percentages, and phone numbers

## Component Architecture

1. **FloatingNav**:
   - Floating frosted glass pill navigation bar (`.glass-panel-elevated`)
   - Interactive rotating Sun (☀️) / Moon (🌙) theme switcher with spring micro-interaction
   - Gradient CTA (Champagne Gold in Dark, Forest Jade in Light) and mobile drawer

2. **HeroSection**:
   - Floating frosted status pill (`.glass-pill`) with animated emerald luminescent indicator
   - Grand executive identity heading (`Cinzel`) with dual-theme subtitle
   - Primary CV download CTA and frosted glass inquiry button
   - 3 floating crystalline glass metric prisms (`.glass-panel-interactive`)

3. **CareerTimeline**:
   - Dual-gradient luminous vertical spine connecting career nodes
   - Multi-branch career records (Mohakhali, Banani, Gulshan) in floating frosted glass cards
   - Category filter pills and interactive accordion inspection drawers

4. **CompetencyGrid**:
   - Institutional accreditation highlight cards (Bangladesh Bank, JAIBB, AIBB)
   - Multi-category skill matrix with liquid-crystal glowing proficiency bars
   - Category filtering and accreditations-only toggle

5. **CredentialsCarousel**:
   - 3D floating frosted glass vault cards (`.glass-panel-elevated`) with interactive touch/keyboard navigation
   - Formal banking examinations (JAIBB, AIBB), degrees (M.A./B.A.), and risk certifications (CMRM, AML/CFT)
   - Frosted pill pagination controls and smooth spring transitions

6. **ContactSection**:
   - Frosted glass dispatch console (`.glass-panel-elevated`) with luminous form inputs
   - Direct communication channels (Email, Phone, WhatsApp) and verifiable regulator references
   - Floating frosted glass toast confirmation banner upon inquiry dispatch

## Motion Grammar

- Organic ambient auroras (`animate-aura-1`, `animate-aura-2`) floating smoothly behind the layout
- Staggered entrance animations via `framer-motion` (duration `0.5s - 0.65s`, ease `[0.16, 1, 0.3, 1]`)
- Pulse luminescence indicators (`3s` cycle) for verified and active status badges
- Smooth fluid spring drag gestures for the credential carousel
