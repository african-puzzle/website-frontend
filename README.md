# African Puzzle website

Marketing site for African Puzzle WORKS, a mobile app that helps artisans run their craft business, even if they do not read or write. The site is in French (default), English and Pidgin.

It is static Astro and Tailwind. See `PRODUCT.md` for the audience and `DESIGN.md` for the visual system.

## Run it locally

Use Node 22.12 or later.

```sh
npm ci            # install the exact versions in package-lock.json
npm run dev       # dev server at http://localhost:4321
npm run build     # build the site into dist/
npm run preview   # serve the built dist/ locally
npm run check     # typecheck, lint and i18n key check
```

## Deploy

A merge to `main` deploys to production at africanpuzzle.com. `.github/workflows/deploy.yml` runs `npm ci`, `npm run check` and `npm run build` on Node 22, then publishes `dist/` to GitHub Pages. If the build fails on `main`, the workflow opens a `Deploy failed:` issue.

## Edit content

Editors use Pages CMS (pagescms.org). Its config is `.pages.yml` in this repo, and it covers `src/content/` and `src/i18n/translations/`. A CMS save is a commit, so a save on `main` deploys production. If you rename a file, folder, field or translation key that the CMS edits, change `.pages.yml` in the same PR.
