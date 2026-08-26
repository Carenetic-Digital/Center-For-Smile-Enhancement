# BH-3: Announcement bar missing "the"

**Task ID:** 30509905 (global) / 3 (local)
**Project:** PDP - Center for Smile Enhancement (528535)
**URL:** https://cse.spark0.io/
**Priority:** not set
**Status:** backlog
**Triaged:** 2026-08-26T20:15:00Z
**Actionable:** Yes

## Description
"the" first dental practice :)

## Screenshot Analysis
Pin on the top announcement bar: "Now offering Galleri® early cancer detection — first dental practice in Minnesota."

## Page Analysis
`src/components/Header.astro:30`. Other pages already use the correct phrasing ("proud to be **the** first dental practice in Minnesota") — the announcement bar is the outlier.

## Assessment
Actionable. Single-word insertion.

## Plan
`src/components/Header.astro:30` — "— first dental practice in Minnesota." → "— the first dental practice in Minnesota."
Note: if BH-11/BH-12 change the Galleri framing, this string will be rewritten again; sequence BH-3 before or fold into that change.

## Fix Applied

**Branch:** bugherd/11
**Commit:** e65a2d2b0
**Date:** 2026-08-26T21:10:00Z
**Before screenshot:** https://cse.spark0.io/ (live)
**After screenshot:** http://localhost:4331/ (local preview)

### Changes Made
- `src/components/Header.astro`: Announcement bar copy
