# African Puzzle website

Marketing site for the African Puzzle WORKS mobile app: static Astro + Tailwind on GitHub Pages (africanpuzzle.com).

## Ground rules
- npm is the package manager; CI runs `npm ci`.
- Done means `npm run check && npm run build` pass. `/verify` also confirms every locale route built.
- A merge to `main` deploys to production (`.github/workflows/deploy.yml`).
- A `Deploy failed:` issue means `main` is broken: fix the content, push, close the issue.

## CMS contract
Sveltia CMS lives in `african-puzzle/website-cms` (admin.africanpuzzle.com) and commits straight into this repo: the content folders and settings files under `src/content/`, and all three files in `src/i18n/translations/`. Its `config.yml` is the list. Pages CMS (pagescms.org) edits the same files from `.pages.yml` in this repo; both CMSs run until the operator retires Sveltia. When you rename or move a file, folder, field, or translation key the CMS edits, change `.pages.yml` in the same PR and open a matching issue in `website-cms` so both CMSs keep working. Never remove `settings.content.merge: true` from `.pages.yml`: without it, one save deletes every key the config does not list.

## Conventions
- Locales: `fr` (source, default), `en`, `pcm`. Write FR first, then en and pcm with the same keys.
- User-facing strings go through `t(lang, 'section.key')` from `src/i18n/utils.ts`.
- Colours come from the `--theme-*` tokens in `src/styles/global.css`, so light and dark both work.
- Mobile first: base styles target 360 px, then `sm:` / `lg:`.
- Ship static HTML and CSS; add a client script only when the feature needs one.
