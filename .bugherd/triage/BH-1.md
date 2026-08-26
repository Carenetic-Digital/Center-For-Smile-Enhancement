# BH-1: "This is now 40+ years"

**Task ID:** 30477230 (global) / 1 (local)
**Project:** PDP - Center for Smile Enhancement (528535)
**URL:** http://localhost:4321/home-warm/
**Priority:** not set
**Status:** backlog
**Triaged:** 2026-08-26T20:15:00Z
**Actionable:** Yes

## Description
This is now 40+ years

## Screenshot Analysis
Early localhost capture of the warm homepage variant. Pin sits on the hero paragraph "For over 35 years, Dr. Michael Sudit has delivered boutique dental care in Minnetonka..."

## Page Analysis
`/home-warm/` no longer exists — the warm variant was promoted to the primary homepage (commit 2c70270) and `public/_redirects:46` 301s `/home-warm` to `/`. The copy now lives at `src/pages/index.astro:127`. Duplicate of BH-2 / BH-6.

## Assessment
Actionable. Same underlying copy change as BH-2, BH-5, BH-6, BH-8. The "35 years" claim is stale sitewide, not just in the hero.

## Plan
Covered by the sitewide 35→40 sweep (see BH-2). Occurrences:
- `src/layouts/BaseLayout.astro:15` — default meta "35+ years"
- `src/pages/index.astro:109,127,160` — meta, hero paragraph, stat number
- `src/pages/schedule/index.astro:75` — "more than 35 years"
- `src/pages/about/index.astro:12,30,38,54`
- `src/pages/about/our-doctors/index.astro:30,38,143`

## Fix Applied

**Branch:** bugherd/2
**Commit:** 70209fdd1
**Date:** 2026-08-26T21:10:00Z
**Before screenshot:** https://cse.spark0.io/home-warm/ (live)
**After screenshot:** http://localhost:4331/ (local preview)

### Changes Made
- `src/pages/index.astro`: Hero lede and meta 35 -> 40
- `src/layouts/BaseLayout.astro`: Default meta description 35+ -> 40+
