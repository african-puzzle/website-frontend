# African Puzzle - Stuttgart v2

Marketing website for African Puzzle WORKS mobile app, rebuilt with Astro + Tailwind CSS.

## Stack
- **Framework**: Astro (static output)
- **Styling**: Tailwind CSS
- **CMS**: Sveltia CMS (content stored as Markdown/JSON in `src/content/`, admin at `admin.africanpuzzle.com` via separate `website-cms` repo)
- **Hosting**: GitHub Pages with custom domain (africanpuzzle.com), repo: `african-puzzle/website-frontend`
- **i18n**: 3 locales — French (default), English, Pidgin

## Project Structure
```
src/
  content.config.ts → Content collection schemas (Zod + Content Layer API)
  components/    → Astro components (ui/, sections/, layout/)
  content/       → Content collections (team, features, media, countries)
  i18n/          → Translation files (fr.json, en.json, pcm.json) + utils
  layouts/       → Base layout with SEO, nav, footer
  pages/         → Route pages organized by locale (fr/, en/, pcm/)
  styles/        → Global styles, Tailwind config
public/
  images/        → Static images, CNAME, favicon
```

## Commands
- `npm run dev` — Start dev server
- `npm run build` — Production build to `dist/`
- `npm run preview` — Preview production build

## Skills Available
- `/astro-component [name] [desc]` — Create Astro components
- `/astro-page [name] [locale]` — Create pages with i18n
- `/astro-content [collection] [action]` — Manage CMS content
- `/tailwind-section [type] [desc]` — Build UI sections
- `/i18n [action] [key]` — Manage translations
- `/sveltia-cms [action] [collection]` — Manage Sveltia CMS config
- `/deploy` — Build and deploy to GitHub Pages
- `/perf-audit` — Performance audit
- `/responsive-audit` — Responsive design audit
- `design-system` — (auto-loaded) Brand tokens and patterns

## Conventions
- French is the source locale — always start with FR content
- Mobile-first responsive design
- Minimal client-side JS — use Astro islands only when needed
- All translatable strings go through i18n system, not hardcoded
