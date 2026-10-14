# African Puzzle website

Marketing site for the African Puzzle WORKS mobile app: static Astro + Tailwind on GitHub Pages (africanpuzzle.com).

## Ground rules
- npm is the package manager; CI runs `npm ci`.
- Done means `npm run check && npm run build` pass. `/verify` also confirms every locale route built.
- A merge to `main` deploys to production (`.github/workflows/deploy.yml`).
- A `Deploy failed:` issue means `main` is broken: fix the content, push, close the issue.

## CMS contract
Pages CMS (pagescms.org) edits this repo from `.pages.yml`: the content folders and settings files under `src/content/`, and all files in `src/i18n/translations/`. A save is a commit to the branch the editor selects; a save on `main` deploys production. When you rename or move a file, folder, field, or translation key the CMS edits, change `.pages.yml` in the same PR. Never remove `settings.content.merge: true` from `.pages.yml`: without it, one save deletes every key the config does not list.

## Conventions
- Locales: `fr` (source, default), `en`, `pcm`. Write FR first, then en and pcm with the same keys.
- User-facing strings go through `t(lang, 'section.key')` from `src/i18n/utils.ts`.
- Colours come from the `--theme-*` tokens in `src/styles/global.css`, so light and dark both work.
- Mobile first: base styles target 360 px, then `sm:` / `lg:`.
- Ship static HTML and CSS; add a client script only when the feature needs one.
