@AGENTS.md

# Anavera Website

Marketing website for Anavera, an intelligent IoT platform for industrial and enterprise environments. Tagline: "Connectivity to Clarity".

## Dev commands

```bash
npm run dev      # Start dev server (localhost:3000)
npm run build    # Production build
npm run lint     # ESLint
```

## Stack

- **Next.js 16** with App Router (`src/app/`)
- **React 19**, **TypeScript 5** (strict mode), path alias `@/*` → `src/*`
- **Tailwind CSS v4** via `@tailwindcss/postcss` — no `tailwind.config.ts`, all tokens in `globals.css`
- **Framer Motion 12** for animations — all variants defined in `src/design-system/animations.ts`
- **Lucide React** for icons, **clsx + tailwind-merge** via `src/lib/cn.ts`

## Project structure

```
src/
├── app/                  # Pages (App Router)
│   ├── layout.tsx        # Root layout — fonts, metadata
│   ├── page.tsx          # Home (/)
│   ├── _home/            # Home page section components
│   ├── platform/
│   ├── hardware-ecosystem/
│   ├── about-us/
│   ├── contact/
│   └── applications/
│       ├── page.tsx      # Listing page
│       └── [slug]/       # Detail pages — data-driven from useCases.ts
├── components/
│   ├── atoms/            # Button, Badge, Heading, Text, GlowDot, Divider, Tag
│   ├── molecules/        # SectionLabel, FeatureItem, StatCard, GlowCard
│   ├── organisms/        # NavBar, Footer, HeroSection, DashboardCarousel, UseCaseCard
│   └── templates/        # PageLayout (wraps every page)
├── data/
│   ├── useCases.ts       # All 7 application definitions — edit here for content changes
│   ├── hardware.ts       # Hardware partner data
│   └── navigation.ts     # Nav links and dropdown structure
├── design-system/
│   ├── tokens.ts         # Design tokens (colors, fonts, spacing)
│   └── animations.ts     # Framer Motion variants (fadeUp, staggerContainer, cardHover, etc.)
└── lib/
    └── cn.ts             # clsx + tailwind-merge helper
```

## Component conventions

- **Atomic design**: atoms → molecules → organisms → templates
- Each component lives in its own folder with `index.tsx` + `types.ts` (for props)
- Barrel exports via `index.ts` in each tier (`components/atoms/index.ts`, etc.)
- Props interfaces extend relevant HTML element attributes where applicable
- Class composition always uses `cn()` — never string concatenation

## Styling conventions

- Design tokens are CSS custom properties in `src/app/globals.css` (`--color-teal`, `--font-space-grotesk`, etc.)
- Brand colors: Teal `#00A8B5` (primary), Sky `#00C2FF` (secondary), Navy `#1B3A6B`
- Fonts: **Space Grotesk** (headings) and **Inter** (body) — loaded via `next/font/google` in `layout.tsx`
- Custom utilities in `globals.css`: `.text-gradient-teal`, `.bg-grid-pattern`, `.glow-teal`, `.animate-float`
- Do not use inline `style` props — use Tailwind classes or CSS custom properties

## Animation conventions

- Import variants from `src/design-system/animations.ts`, do not define one-off variants inline
- Use `viewport` config (also from `animations.ts`) for scroll-triggered animations
- `staggerContainer` / `staggerFast` for lists, `fadeUp` for section entries, `cardHover` for interactive cards

## Content / data

- All application (use case) content lives in `src/data/useCases.ts` — this is the single source of truth
- Navigation structure (links, dropdown items) lives in `src/data/navigation.ts`
- Dashboard screenshots are in `public/dashboards/`, hardware logos in `public/`

## What NOT to do

- Don't add new npm packages without asking
- Don't use inline styles
- Don't define Framer Motion variants outside `design-system/animations.ts`
- Don't hardcode colors — use CSS custom properties or Tailwind classes mapped to tokens
- Don't create new pages without a corresponding entry in `navigation.ts` if they belong in the nav
- No backend/API routes exist — this is a static marketing site
