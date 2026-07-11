# Design

Visual system of the African Puzzle website (Astro + Tailwind 4). Source of truth for tokens: `src/styles/global.css` (`@theme` + semantic `--theme-*` vars with `.dark` overrides).

## Direction

Warm, capable, proud. The brand's own saturated colors carry the page — deep purple and teal blocks with texture overlays, gold/amber accents — never default cream/pastel washes. Real app screens in device mockups are the hero imagery. Mobile-first.

## Color

Brand (from the mobile app's design system, to converge on):
- Primary purple `#3D2664` (brand-purple-900); app also uses `#5E4A7D` light, `#2A1A47` dark
- Accent gold `#FFAA00` / `#FFAA2E` (app accent — underused on the site today)
- Action purple `#8c30f5` (brand-purple-600) for CTAs
- Teal `#1a7a6d` hero/features section background (site-specific)
- Success green `#00E096`, info blue `#0095FF` (app palette, for illustrative accents)

Semantic tokens: every surface/text color goes through `--theme-*` variables in `global.css`, with light values on `:root` and dark on `.dark`. Never hardcode hex in components; add a token.

Feature card tints: `--color-feature-*` (`#fff1c2` yellow, `#c5bed1` lavender, `#ffba42` orange, `#aad3fa` blue).

Contrast: WCAG AA minimum (4.5:1 body, 3:1 large) in both themes.

## Typography

- Body: Montserrat (`--font-sans`)
- Display/headings: Nunito (`--font-display`), bold, `leading-tight`
- Body `leading-relaxed`; cap line length ~70ch
- Scale: text-sm → text-5xl; hero clamp max ≤ 6rem
- (The app itself uses Open Sans; the site keeps Montserrat/Nunito as its established web voice.)

## Spacing & Layout

- Section padding: `py-20 lg:py-28`
- Container: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- Cards: `rounded-2xl`, `p-8 lg:p-12`
- Grid gaps 6/8/12; stacks space-y-4/6/8

## Components

- Buttons: pill (`rounded-full`), `bg-brand-purple-600`, hover lift `-translate-y-0.5`
- Feature cards: full-width tinted blocks, icon + text row
- Video modal: native `<dialog>` (`src/components/ui/VideoModal.astro`)
- Theme toggle: footer, light/dark/system (`.dark` class on root)
- Device mockups: CSS phone frames showing real simulator screenshots of the app

## Motion

- Hover lift + shadow, `duration-300`
- Scroll reveals: IntersectionObserver adding classes to already-visible defaults
- Ease-out curves only; every animation has a `prefers-reduced-motion: reduce` alternative
- Minimal JS: CSS animations + small Astro islands only

## Imagery

- Textured section backgrounds with CSS color fallbacks: `/images/background-hero.png` (teal), `/images/features-texture.svg`, `/images/speckled-block.png` (purple confetti)
- Team photos 260×260 in `/images/team/`
- App screenshots: simulator captures, stored under `/public/images/app/`

## i18n

Three locales (fr default, en, pcm); all strings via `src/i18n/*.json`. Design must tolerate FR/pcm string lengths.
