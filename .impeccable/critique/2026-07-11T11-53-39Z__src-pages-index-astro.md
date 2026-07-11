---
target: homepage (src/pages/index.astro)
total_score: 25
p0_count: 2
p1_count: 2
timestamp: 2026-07-11T11-53-39Z
slug: src-pages-index-astro
---
Method: dual-agent (A: design review · B: detector)

# Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 2 | No video loading state, no active-nav indicator |
| 2 | Match System / Real World | 2 | "Programmes/Projets", "workflow", "version test" jargon; audio-first story absent |
| 3 | User Control and Freedom | 3 | Dialog closable; no back-to-top on very long page |
| 4 | Consistency and Standards | 2 | Two CTA button shapes; Hero ignores its own subtitle/CTA strings; dark mode half-applied |
| 5 | Error Prevention | 3 | Little to go wrong |
| 6 | Recognition Rather Than Recall | 3 | 70-country flag wall forces scanning |
| 7 | Flexibility and Efficiency | 3 | 3 locales, theme toggle; no skip-link |
| 8 | Aesthetic and Minimalist Design | 3 | Benefits = 3 context-free slogans; Reach = 70-item dump |
| 9 | Error Recovery | 2 | 404 only |
| 10 | Help and Documentation | 2 | No FAQ/how-it-works/support path |
| **Total** | | **25/40** | Acceptable |

# Anti-Patterns Verdict

LLM: mostly clean, would NOT read as AI-made. Real identity (teal/purple blocks, textures, device frames, hand-drawn arrow). Tics: one uppercase eyebrow, purple gradient band on Intro. Real issue: uppercase everywhere flattens hierarchy and hurts low-literacy readers.
Detector: 1 finding — `overused-font` warning, Montserrat via Google Fonts in Layout.astro:46 (advisory). No other rules triggered. Browser overlay skipped.

# Priority Issues

- **[P0] Homepage never states the key claim.** "Plus besoin de lire ni d'écrire" / audio-first absent; hero.subtitle + hero.cta strings exist in fr.json but Hero.astro never renders them. Belief-ladder rungs 3-4 (audio-first, pay-once) missing. Fix: render subtitle + explicit CTA; add audio-first proof band.
- **[P0] Stale beta conversion copy.** "Participez à la version test" (CTA + DownloadBanner), privacy "en vigueur depuis 2021" → reads abandoned. Fix: launch copy.
- **[P1] Dark mode half-implemented.** Light PNG textures override dark tokens on Hero/Features/Benefits; CTA muddy #1c1a0e; navbar renders light in dark mode. Fix: dark texture variants/overlays or deliberate scoping.
- **[P1] Contrast failures.** CTA title #5c9666 on #eae0ab = 2.62:1; features eyebrow white/70 on teal ≈3.3:1. Fix: darker CTA title token; eyebrow white/90 or gold.
- **[P2] Reach section undermines credibility.** European flags equal-weight with Côte d'Ivoire. Fix: lead with focus countries, collapse rest.
- **[P2] Benefits wastes content.** benefits.*_desc strings translated but never rendered; "workflow" jargon. Fix: render descs sentence-case or cut.

# Product currency
Site markets 4 features with dated terminology (Projects/Clients vs app's Programmes/Contacts); app now has measurements, collaborators/teams, Works Pass pay-once, transactions, audio onboarding, PIN security. GIF demos + beta copy = "promising 2021 beta". Core strategic gap.

# Persona Red Flags
- Jordan (first-timer): hero doesn't say what the product IS; "Album" ambiguous; conflicting download CTAs.
- Casey (mobile): headline eats 60% of 390px viewport, "!" orphan-wraps; ~8300px page, no sticky CTA; video below thumb zone.
- Aminata (low-literacy tailor, 3G): all-caps FR headline hardest to read; 4 multi-MB GIFs + PNGs brutal on 3G; no audio path; "workflow"/"version test" exclude her; her country visually equal to Finland.

# Minor Observations
index.astro meta-refresh redirect (SEO); no og:image/canonical/hreflang; video button a11y label; unused i18n strings (reach.label, benefits.label); InstagramFeed built but unused; EN alt text on FR page; fragile my-[-4rem] phone-frame overlaps; flag-based language switcher.

# Questions to Consider
1. Would a homepage that literally talks (audio in FR/pcm) convert Aminata better than any copy?
2. Should the homepage fork artisan vs partner paths instead of averaging them?
3. Site is teal-dominant but app brand is purple #3D2664 + gold #FFAA00 — is the site building equity in a brand the product doesn't have?
