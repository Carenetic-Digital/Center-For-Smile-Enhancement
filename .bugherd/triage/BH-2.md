# BH-2: Hero paragraph says "over 35 years"

**Task ID:** 30509874 (global) / 2 (local)
**Project:** PDP - Center for Smile Enhancement (528535)
**URL:** https://cse.spark0.io/
**Priority:** not set
**Status:** backlog
**Triaged:** 2026-08-26T20:15:00Z
**Actionable:** Yes

## Description
over 40 years now!

## Screenshot Analysis
Homepage hero. Pin on the lede: "For over 35 years, Dr. Michael Sudit has delivered boutique dental care in Minnetonka defined by clinical excellence and a patient experience inspired by the world's finest hospitality brands."

## Page Analysis
`src/pages/index.astro:127`. Confirmed 11 more instances of the stale "35 years" / "35+" claim across the site.

## Assessment
Actionable, unambiguous. This is the anchor task for a sitewide copy sweep — fixing only the pinned instance would leave the site internally inconsistent.

## Plan
1. Replace every "35 years" / "35+" tenure claim with the 40-year equivalent:
   - `src/layouts/BaseLayout.astro:15` — "35+ years" → "40+ years"
   - `src/pages/index.astro:109` (meta), `:127` ("For over 35 years" → "For over 40 years"), `:160` (stat "35+" → "40+")
   - `src/pages/schedule/index.astro:75` — "more than 35 years" → "more than 40 years"
   - `src/pages/about/index.astro:12,30,38,54`
   - `src/pages/about/our-doctors/index.astro:30,38,143`
2. Grep for stragglers: `grep -rn "35 years\|35+" src/`
3. Verify no JSON-LD or sitemap copy carries the old number.

Resolves BH-1, BH-5, BH-6, BH-8 and the numeric half of BH-19.

## Fix Applied

**Branch:** bugherd/2
**Commit:** 70209fdd1
**Date:** 2026-08-26T21:10:00Z
**Before screenshot:** https://cse.spark0.io/ (live)
**After screenshot:** http://localhost:4331/ (local preview)

### Changes Made
- `src/pages/index.astro`: Hero lede, meta, stat 35 -> 40
- `src/layouts/BaseLayout.astro`: Default meta
- `src/pages/schedule/index.astro`: "more than 40 years"
- `src/pages/about/index.astro`: 4 instances
- `src/pages/about/our-doctors/index.astro`: 3 instances
