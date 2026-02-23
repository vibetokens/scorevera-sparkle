

# Interior Page System for Scorevera

## Overview
Create a reusable interior page layout and build out the key inner pages: About, Onboarding Flow, and legal pages (Terms, Privacy, Disclaimer). All pages will share a consistent design language with the landing page -- same navbar, footer, typography, colors, and animation patterns.

---

## What Gets Built

### 1. Shared Interior Layout
A reusable `InteriorLayout` component that wraps every non-landing page with:
- The existing Navbar (already built)
- A page header area with title, optional subtitle, and breadcrumbs
- Consistent max-width content container
- The existing Footer

### 2. About Page (`/about`)
- Hero banner with navy gradient background (matching landing hero style)
- Mission statement section
- "Why We Built This" story section with founder narrative
- Trust/values cards (Transparency, Security, Empowerment) using the existing card + icon pattern
- CTA at bottom linking to pricing/signup

### 3. Onboarding Flow (`/get-started`)
A multi-step guided flow:
- **Step 1 -- Welcome**: Explain what to expect, what they'll need (credit report)
- **Step 2 -- Upload Report**: File upload area (UI only for now, no backend)
- **Step 3 -- Review Items**: Preview of detected negative items (mock data)
- **Step 4 -- Confirmation**: Summary + link to Stripe checkout

Uses a progress bar at top, animated step transitions with framer-motion, and back/next navigation.

### 4. Legal Pages (`/terms`, `/privacy`, `/disclaimer`)
Simple, readable long-form text pages with:
- Clean typography and proper heading hierarchy
- Placeholder legal content clearly marked for replacement
- Consistent interior layout wrapper

---

## Technical Details

### New Files
- `src/components/layout/InteriorLayout.tsx` -- shared wrapper (navbar + header + footer)
- `src/components/layout/PageHeader.tsx` -- reusable hero-style page header
- `src/pages/About.tsx`
- `src/pages/GetStarted.tsx` -- onboarding multi-step flow
- `src/pages/Terms.tsx`
- `src/pages/Privacy.tsx`
- `src/pages/Disclaimer.tsx`

### Modified Files
- `src/App.tsx` -- add routes for `/about`, `/get-started`, `/terms`, `/privacy`, `/disclaimer`
- `src/components/landing/Navbar.tsx` -- add "About" link to nav
- `src/components/landing/Footer.tsx` -- ensure legal links use React Router (`Link` instead of `<a>`)

### Design Patterns
- Reuse existing Tailwind tokens: `bg-gradient-hero`, `text-gradient`, `shadow-card`, navy/blue color vars
- Reuse existing UI components: `Card`, `Button`, `Progress`, `Accordion`
- Framer-motion entrance animations consistent with landing page (fade-up on scroll)
- All pages fully responsive (mobile-first)
- Interior pages use a lighter background (the default `--background` cream) with the navy gradient reserved for page headers only

