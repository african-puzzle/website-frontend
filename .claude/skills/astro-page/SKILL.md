---
name: astro-page
description: Create new Astro pages with i18n routing, SEO meta, and proper layout integration. Use when adding a new page to the site.
argument-hint: [page-name] [locale?]
---

Create an Astro page at the correct i18n path for `$ARGUMENTS`.

## i18n Routing Structure

```
src/pages/
  index.astro          → / (redirects to /fr/)
  fr/
    index.astro        → /fr/ (home)
    a-propos.astro     → /fr/a-propos
    contact.astro      → /fr/contact
    medias.astro       → /fr/medias
    confidentialite.astro
  en/
    index.astro        → /en/ (home)
    about.astro        → /en/about
    contact.astro      → /en/contact
    media.astro        → /en/media
    privacy.astro
  pcm/                 → Pidgin English
    index.astro
    ...
```

## Page Template

Matches `src/pages/fr/a-propos.astro`. Page-level `title`/`description` are plain strings in the page file; body text lives in a section component that calls `t(lang, 'key')`.

```astro
---
import Layout from '../../layouts/Layout.astro';
import AboutContent from '../../components/sections/AboutContent.astro';
const lang = 'fr'; // or 'en' or 'pcm'
---
<Layout title="À propos" description="..." lang={lang}>
  <AboutContent lang={lang} />
</Layout>
```

Layout props: `title` (required, " | African Puzzle" is appended), `description?` (per-locale default), `lang: Locale`, `schemaType?` (default `WebPage`, e.g. `AboutPage`, `ContactPage`).

## Adding a Route
1. Create the page in `src/pages/fr/`, `en/`, and `pcm/`.
2. Add the route key to all three locales in `localePaths` in `src/i18n/utils.ts` (language switcher and `getEquivalentPath` depend on it).
3. If the FR slug differs from en/pcm, add it to `SLUG_MAP` in `src/layouts/Layout.astro` (hreflang).
4. Run `npm run check && npm run build`.

## Checklist
- [ ] Uses `Layout` wrapper with `title`, `description`, `lang`
- [ ] Body strings go through `t(lang, 'key')` in section components; new keys added to fr, en, pcm (`npm run i18n:check`)
- [ ] Composes page from section components (not raw HTML)
- [ ] Has equivalent pages in all 3 locales and a `localePaths` entry for each
- [ ] `npm run check` passes
- [ ] Open Graph and meta tags set via Layout props
