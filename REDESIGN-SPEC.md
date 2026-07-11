# Redesign Spec — African Puzzle WORKS website (2026)

Working doc for the `redesign-2026` branch. Delete after ship.

## Decisions (locked)

- Restyle + modernize within brand; converge site colors on the app brand: purple `#3D2664` + gold `#FFAA00` lead, teal `#1a7a6d` demoted to supporting accent.
- App status: launch planned autumn 2026 → pre-launch framing. Primary CTA: watch intro video; conversion: "Être prévenu au lancement" (contact/sign-up). Kill all "version test" copy.
- Structure: artisan-first single flow; partner/credibility section low on page.
- Screenshots: real iOS simulator captures (FR, light mode) in CSS device frames. Replace multi-MB GIFs.

## Feature story (from app inventory)

Six marketed features, app terminology, FR source:

1. **Programmes** (was "Programmes / Projets") — projets clients avec médias, notes, prix et paiements (Prix / Payé / Reste à payer).
2. **Contacts** (was "Clients") — carnet de clients: photos, notes vocales, fichiers, historique.
3. **Mesures** — NEW headline differentiator: mesures par contact et par programme, règle tactile, cm/pouces.
4. **Albums** — vitrine du travail, groupes, couvertures, photos aimées par les contacts.
5. **Rendez-vous** — agenda avec rappels (le jour même → 1 semaine avant) et notifications.
6. **Collaboration** — NEW: partager un programme par lien/code, rôles (lecture seule / peut modifier / peut gérer).

Two cross-cutting claims woven into the page (not feature cards):
- **Audio-first**: "Plus besoin de lire ni d'écrire" — notes vocales + explications audio dans chaque écran. Belief-ladder linchpin; gets its own proof band.
- **Payez une fois**: "Rien ne se renouvelle" — Works Pass + recharges de sauvegarde, pas d'abonnement. One line near CTA.

## Page structure (homepage, per locale)

1. **Hero** — rewritten headline (sentence case, shorter), render subtitle + explicit CTA pair (▶ video primary, "Être prévenu" secondary). Device mockup with real screenshot instead of/next to illustration. Purple `#3D2664` background, gold accents.
2. **Audio-first band** (NEW) — "Plus besoin de lire ni d'écrire." Audio icon/waveform motif; short sentence; this is the memorable line.
3. **Features** — 6 alternating full-width bands (keep the pattern; it works). Each: tinted card + CSS phone frame with sim screenshot, scroll-reveal animation (screens slide/fade into frame; reduced-motion: static). App-term titles. Gold/purple-derived tints replacing arbitrary pastels where needed.
4. **Benefits** — render existing `_desc` strings sentence-case under each claim; rewrite "Optimisez votre workflow" → plain language. Possibly merge into 3 short proof statements.
5. **Pricing line** — "Payez une fois. Rien ne se renouvelle." + Works Pass mention. Small band, not a pricing table.
6. **Reach** — lead with ~8 focus countries (CI, CM, SN, GH, NG, BF, ML, TG...) as large tiles; collapse rest behind "et 60+ autres pays" disclosure.
7. **Partner section** (NEW, replaces nothing) — one calm block for NGOs/partners: what the project is, team link, contact CTA.
8. **CTA / launch band** — "Disponible cet automne" + notify/contact CTA + store badges marked "bientôt".
9. Footer unchanged (theme toggle stays).

Intro band: fold its job into Hero subtitle; delete section.

## Visual system changes

- **Color**: semantic tokens migrate: hero/features backgrounds → purple family (`#3D2664`, `#2A1A47`) with texture; gold `#FFAA00` for accents, eyebrows, arrows, highlights; teal reserved for one supporting band. Fix contrast failures (CTA title `#5c9666`→ darker; eyebrows white/90+). New tokens, no hardcoded hex.
- **Dark mode**: dark texture overlays (purple textures work in both), verify navbar token; full-page audit both themes.
- **Typography**: keep Montserrat/Nunito. Kill blanket uppercase — sentence case headings, uppercase only nav button. `text-wrap: balance` on headings.
- **Motion**: scroll-driven device-frame reveals (IntersectionObserver adding classes to visible-by-default content), phone screens gently parallax/tilt; ease-out only; `prefers-reduced-motion` alternatives everywhere.
- **Performance**: sim PNGs → optimized WebP/AVIF via `astro:assets` with width/height; kill 4 GIFs; lazy-load below fold. 3G budget matters (Aminata persona).

## Fixes rolled in (from critique)

- Render orphaned i18n strings (hero.subtitle, benefits descs, reach.label) or delete them.
- index.astro meta-refresh → proper redirect/`Astro.redirect` or static hreflang landing.
- Layout.astro: og:image, canonical, hreflang alternates.
- Video button accessible label; FR alt text on FR pages for store badges.
- Replace fragile `my-[-4rem]` frame overlaps with grid-based overlap.
- Privacy "depuis 2021" — leave content, but de-emphasize staleness (date format review).

## i18n

FR written first (source), then EN + PCM for every new/changed key. New keys: audio_first.*, pricing.*, partners.*, features.measurements_*, features.collab_*, cta rewritten, reach rewritten. Verify no unused keys remain.

## Out of scope

About/Contact/Media pages: color-token migration only, no structural redesign. CMS config untouched unless feature content collection needs new fields (it does: 2 new features → new entries in src/content/features/ + i18n keys; Sveltia config update if features are CMS-managed).

## Build order

1. Token migration (global.css) + dark-mode fixes
2. Screenshot assets in (from sim capture), device-frame component + motion
3. Section rebuilds in page order (Hero → ... → CTA)
4. i18n EN/pcm passes
5. `/responsive-audit` + impeccable detect + contrast check both themes
6. Build, preview, user review
