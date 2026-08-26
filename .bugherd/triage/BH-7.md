# BH-7: Hero image is not right for the landing page

**Task ID:** 30745397 (global) / 7 (local)
**Project:** PDP - Center for Smile Enhancement (528535)
**URL:** https://cse.spark0.io/
**Priority:** not set
**Status:** feedback
**Triaged:** 2026-08-26T20:15:00Z
**Actionable:** Yes

## Description
Not a good picture for the landing page

## Screenshot Analysis
Homepage hero. The image is a stock portrait of an older woman with short white hair, hand to cheek, pale blue shirt on a pale blue background.

## Page Analysis
Homepage hero image in `src/pages/index.astro`, asset under `public/images/`.

## User Context

Dev (2026-08-26): "By just finding another image that would look good for a hero." — no client photography is coming for this one; source a replacement directly.

Asset check: `intake/images/` is **empty**. No client-supplied photography exists anywhere in the repo, so this must be licensed stock downloaded into `public/images/` (CLAUDE.md: never hotlink).

Current asset: `public/images/hero-patient.jpg`.

## Assessment

Actionable with the dev's go-ahead. The client never said what was wrong with the current image, so the working interpretation is the obvious read of the screenshot: it is generic pale-blue stock of an older model that does not match a boutique cosmetic-dentistry positioning, and it does not look like the practice.

**Assumptions to verify at review:** aiming for a warmer, more premium feel consistent with the site's navy/cream palette, and a subject whose smile is actually the focal point — this is a smile-enhancement practice and the current photo hides the teeth behind a hand.

## Plan

1. Source 2-3 licensed candidates (Unsplash/Pexels license permitting commercial use). Criteria:
   - Genuine, confident smile as the focal point — teeth visible
   - Warm or neutral lighting that sits with the navy/cream palette, not the current cold blue
   - Portrait/vertical crop that works in the existing hero grid
   - Age range consistent with the practice's cosmetic + family positioning
2. Download into `public/images/` — no hotlinking. Optimize (WebP where supported, sensible dimensions for the hero slot).
3. Swap the hero `src`/`alt` in `src/pages/index.astro`; write descriptive alt text.
4. Screenshot at 375px / 768px / 1440px to confirm the crop holds and the subject is not cut off.
5. Present the candidates to the dev before deleting `hero-patient.jpg`.

**Note:** BH-9, BH-10 and BH-18 are still waiting on office photography. If real practice photos arrive later, revisit this choice so the homepage does not end up half-stock, half-real.

## Fix Applied

**Branch:** bugherd/7
**Commit:** 09588ddb5
**Date:** 2026-08-26T21:10:00Z
**Before screenshot:** https://cse.spark0.io/ (live)
**After screenshot:** http://localhost:4331/ (local preview)

### Changes Made
- `src/pages/index.astro`: Hero img src, alt, and dimensions
- `public/images/hero-patient-warm.webp`: New 1600x2000 WebP, 268KB, Unsplash license
