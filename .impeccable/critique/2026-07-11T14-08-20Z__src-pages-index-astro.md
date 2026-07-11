---
target: homepage redesign-2026 (src/pages/index.astro)
total_score: 31
p0_count: 2
p1_count: 2
timestamp: 2026-07-11T14-08-20Z
slug: src-pages-index-astro
---
Method: dual-agent (A: design review · B: detector)

# Design Health Score (redesign-2026 build)

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | Pre-launch badged; nav "Télécharger" contradicts |
| 2 | Match System / Real World | 4 | Concrete artisan FR vocabulary; native Pidgin |
| 3 | User Control and Freedom | 3 | No back-to-top/skip-link |
| 4 | Consistency and Standards | 2 | Nav CTA vs "bientôt"; footer badge active vs banner grayscale; footer column mislabeled |
| 5 | Error Prevention | 3 | Grayscale badge prevents dead-link click |
| 6 | Recognition Rather Than Recall | 4 | Every feature = real screen next to name |
| 7 | Flexibility and Efficiency | 3 | Anchor + countries disclosure; no skip-link |
| 8 | Aesthetic and Minimalist Design | 3 | Feature cards ~50% empty middle at 1440px |
| 9 | Error Recovery | 3 | 404 fine |
| 10 | Help and Documentation | 3 | Video + audio hint |
| **Total** | | **31/40** | Good (was 25/40) |

# Anti-Patterns Verdict
Not slop. Real screenshots, hand-tuned waveform, per-feature tints. One template-like moment: Benefits band (3 floating headline pairs).
Detector: 1 real finding (broken-image x6: two team members with empty photo in src/content/team, AboutContent.astro renders img unconditionally). 14 dist warnings = Tailwind compiling utilities from .claude/.github skill scripts into the bundle (hygiene, not design). Montserrat x18 = confirmed brand, ignored. Numbered-markers x5 = dates/legal numbering, false positive.

# Priority Issues
- [P0] audio_first.hint white/70 on #1a7a6d = 3.40:1, fails AA in the literacy-critical section. Fix: white/90+.
- [P0] Nav "Télécharger" pill + footer full-color Play badge contradict pre-launch. Fix: nav → "Être prévenu"; footer badge muted "bientôt".
- [P1] Feature cards at 1440px: huge empty middle; phone pop clips top of card 1. Fix: max-w-5xl cards or bigger phone/text.
- [P1] Page weight 1.14MB: background-hero.png 310KB→WebP, moussa-tailor.jpg 220KB, logo-footer.svg 104KB (embedded raster), Google Fonts blocking. Target <600KB, self-host fonts.
- [P2] Footer column labeled "Fonctionnalités" holds About/Contact/Media links.
- [P2] Dark-mode: full-brightness banner illustration + light feature tints alternate blinding/black.
- [P2] programmes-tab.webp shows clipped row below tab bar (hero, all locales). Re-capture.
- [P2] broken-image: 2 team members photo:"" render empty <img>. Conditional render.
- [P3] Reveal + anchor jump can catch cards mid-fade.
- [P3] Pricing (#fff1c2) → CTA (#eae0ab) merge into one beige zone.

# Personas
Aminata: 1.14MB on 3G, blocking font CSS, hint contrast fail, phantom Télécharger. Casey: good thumb targets. Jordan: gets it <1min; "$" prices may raise FCFA question.

# Questions
1. Audio-first claim but silent site: add 10s voice-note sample?
2. Conversion via contact form (reading+writing) vs WhatsApp deep-link?
3. Demo data "$" + Paris signals vs FCFA re-seed?
