# BH-8: Stat block reads "35+"

**Task ID:** 30745398 (global) / 8 (local)
**Project:** PDP - Center for Smile Enhancement (528535)
**URL:** https://cse.spark0.io/
**Priority:** not set
**Status:** feedback
**Triaged:** 2026-08-26T20:15:00Z
**Actionable:** Yes

## Description
40+

## Screenshot Analysis
Pin on the homepage "35+ / Years in Practice" stat card.

## Page Analysis
`src/pages/index.astro:160`

## Assessment
Actionable. Exact duplicate of BH-5.

## Plan
Covered by the BH-2 sitewide 35→40 sweep. Close alongside BH-5.

## Fix Applied

**Branch:** bugherd/2
**Commit:** 70209fdd1
**Date:** 2026-08-26T21:10:00Z
**Before screenshot:** https://cse.spark0.io/ (live)
**After screenshot:** http://localhost:4331/ (local preview)

### Changes Made
- `src/pages/index.astro`: Stat number 35+ -> 40+
