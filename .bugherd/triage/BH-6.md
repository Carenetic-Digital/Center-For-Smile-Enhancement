# BH-6: Hero paragraph says "over 35 years"

**Task ID:** 30745396 (global) / 6 (local)
**Project:** PDP - Center for Smile Enhancement (528535)
**URL:** https://cse.spark0.io/
**Priority:** not set
**Status:** feedback
**Triaged:** 2026-08-26T20:15:00Z
**Actionable:** Yes

## Description
over 40 years

## Screenshot Analysis
Homepage hero, pin on the same lede paragraph as BH-2.

## Page Analysis
`src/pages/index.astro:127`

## Assessment
Actionable. Exact duplicate of BH-2.

## Plan
Covered by the BH-2 sitewide 35→40 sweep. Close alongside BH-2.

## Fix Applied

**Branch:** bugherd/2
**Commit:** 70209fdd1
**Date:** 2026-08-26T21:10:00Z
**Before screenshot:** https://cse.spark0.io/ (live)
**After screenshot:** http://localhost:4331/ (local preview)

### Changes Made
- `src/pages/index.astro`: Hero lede 35 -> 40
