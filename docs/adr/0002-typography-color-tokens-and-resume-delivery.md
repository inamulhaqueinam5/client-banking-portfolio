# 2. Typography, Color Tokens, and Delivery System Decisions

- **Status**: Approved
- **Date**: 2026-08-30

## Context

Following the selection of the Executive Corporate Minimalist theme in ADR 0001, detailed specifications for typography pairing, exact Tailwind CSS color variables, contact form actions, and resume download mechanisms needed to be formalized.

## Decision

1. **Typography**: Paired `Cinzel` / `Playfair Display` for executive headings with `Plus Jakarta Sans` / `Inter` for clean body readability.
2. **Color Palette Tokens**:
   - Primary Background: `#0a1120` (Midnight Navy)
   - Glassmorphism Card Surface: `#0f172a` (80% opacity)
   - Metallic Gold Accent: `#d4af37`
   - Primary Text: `#f8fafc`
   - Muted Text: `#94a3b8`
3. **Contact Action**: Implemented client-side interactive Toast feedback combined with a `mailto:` fallback trigger to `nishatzannatara@gmail.com`.
4. **Resume Delivery**: Implemented static asset delivery serving `resume.pdf` directly from `/public/resume.pdf`.

## Consequences

### Positive
- High contrast, WCAG AA compliant visual hierarchy.
- Zero external API dependency required for basic contact submission and resume downloads.
- Fast performance and instant user responsiveness.
