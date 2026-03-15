---
name: design-system
description: Reference for the African Puzzle design system — colors, typography, spacing, component patterns. Loaded by other skills for consistency.
user-invocable: false
---

# African Puzzle Design System

## Brand Colors (Tailwind config)

```js
colors: {
  brand: {
    purple: { 50: '#f3e8ff', 100: '#e9d5ff', 500: '#a855f7', 600: '#8c30f5', 700: '#7c3aed', 900: '#3d2664' },
    blue: { 500: '#3b82f6', 600: '#1F5BFF' },
  },
  feature: {
    projects: '#fff1c2',  // yellow
    clients: '#c5bed1',   // lavender
    album: '#ffba42',     // orange
    appointments: '#aad3fa', // blue
  },
  about: {
    tan: '#eae0ab',       // about page background
    name: '#340975',      // team member name text
    role: '#a5a29b',      // team member role text
  }
}
```

**Usage**:
- Primary actions, CTAs, active states → `brand-purple-600`
- Gradients → `from-brand-purple-600 to-brand-blue-600`
- Feature cards → `bg-feature-projects`, `bg-feature-clients`, `bg-feature-album`, `bg-feature-appointments`
- Hero background → teal `#1a7a6d` with `/images/background-hero.png` overlay
- Features section background → teal `#1a7a6d` with `/images/features-texture.svg` overlay
- Benefits/CTA background → deep purple `#340975` with `/images/speckled-block.png` overlay
- About page → `bg-about-tan` background, `text-[#340975]` headings, `text-[#a5a29b]` roles
- Body text → `slate-700` (light)
- Headings → `slate-900` (light) / `white` (on dark backgrounds)

## Typography

- **Body font**: `'Montserrat', system-ui, sans-serif`
- **Display font**: `'Nunito', system-ui, sans-serif` (headings — open-source substitute for CirceRounded)
- **Scale**: `text-sm` (14px) → `text-base` (16px) → `text-lg` (18px) → `text-xl` (20px) → `text-2xl` (24px) → `text-4xl` (36px) → `text-5xl` (48px)
- **Weights**: `font-normal` (body), `font-semibold` (subheadings), `font-bold` (headings)
- **Line height**: `leading-relaxed` for body text, `leading-tight` for headings
- Use `font-display` class on headings for Nunito

## Background Images

All background images have CSS color fallbacks. Drop the image file into `public/images/` to activate:
- `/images/background-hero.png` — teal room scene (fallback: `#1a7a6d`)
- `/images/features-texture.svg` — teal diagonal-line pattern (fallback: `#1a7a6d`)
- `/images/speckled-block.png` — purple confetti pattern (fallback: `#340975`)
- `/images/about-hero.jpg` — about page hero photograph
- `/images/team/*.jpg` — team member photos (260x260px)

## Spacing

- Section vertical padding: `py-20 lg:py-28`
- Container: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- Card padding: `p-6 lg:p-8` or `p-8 lg:p-12` (feature cards)
- Stack spacing: `space-y-4` (tight), `space-y-6` (normal), `space-y-8` (loose)
- Grid gaps: `gap-6` (tight), `gap-8` (normal), `gap-12` (loose)

## Component Patterns

### Button
```html
<a class="inline-flex items-center px-8 py-4 bg-brand-purple-600 text-white font-semibold rounded-full shadow-lg hover:bg-brand-purple-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5">
```

### Feature Card (stacked, full-width)
```html
<div class="bg-feature-projects rounded-2xl p-8 lg:p-12">
  <div class="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8">
    <!-- icon + text -->
  </div>
</div>
```

### Section Heading (on dark bg)
```html
<div class="text-center max-w-3xl mx-auto mb-16">
  <span class="text-white/70 font-semibold text-sm uppercase tracking-wider">Label</span>
  <h2 class="mt-3 text-4xl font-bold font-display text-white">Heading</h2>
  <p class="mt-4 text-xl text-white/80">Subtext</p>
</div>
```

### Video Modal
Native `<dialog>` element with iframe. Triggered by `data-video-url` attribute on any button. Component: `src/components/ui/VideoModal.astro` (included in Layout).

## Animations

- **Hover lift**: `hover:-translate-y-1 hover:shadow-xl transition-all duration-300`
- **Fade in**: Use `@keyframes fadeIn` with Intersection Observer for scroll reveals
- **Gradient shift**: `bg-[length:200%_200%] animate-gradient` for animated gradient backgrounds

## Icons

Use inline SVGs with consistent sizing: `w-5 h-5` (inline), `w-7 h-7` (feature icons), `w-8 h-8` (benefit icons), `w-12 h-12` (large decorative).
