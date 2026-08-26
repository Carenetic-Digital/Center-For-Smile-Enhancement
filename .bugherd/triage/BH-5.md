# BH-5: Stat block reads "35+"

**Task ID:** 30737828 (global) / 5 (local)
**Project:** PDP - Center for Smile Enhancement (528535)
**URL:** https://cse.spark0.io/
**Priority:** not set
**Status:** backlog
**Triaged:** 2026-08-26T20:15:00Z
**Actionable:** Yes

## Description
40+

## Screenshot Analysis
Pin on the homepage stat card: "35+ / Years in Practice" (second of four: 272 · 35+ · Hall of Fame · Since 2001).

## Page Analysis
`src/pages/index.astro:160` — `<span class="stats-number">35+</span>`

## Assessment
Actionable. Duplicate of BH-8; part of the BH-2 sweep.

## Plan
`src/pages/index.astro:160` — "35+" → "40+". Covered by the BH-2 sitewide sweep.

## Fix Applied

**Branch:** bugherd/2
**Commit:** 70209fdd1
**Date:** 2026-08-26T21:10:00Z
**Before screenshot:** https://cse.spark0.io/ (live)
**After screenshot:** http://localhost:4331/ (local preview)

### Changes Made
- `src/pages/index.astro`: Stat number 35+ -> 40+
