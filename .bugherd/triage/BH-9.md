# BH-9: Practice/office picture needs updating

**Task ID:** 30745399 (global) / 9 (local)
**Project:** PDP - Center for Smile Enhancement (528535)
**URL:** https://cse.spark0.io/
**Priority:** not set
**Status:** feedback
**Triaged:** 2026-08-26T20:15:00Z
**Actionable:** No — blocked on client asset

## Description
Need an updated picture

## Screenshot Analysis
Homepage section with the overlay card "A boutique experience in the heart of Minnetonka — 10500 Wayzata Blvd · Mon–Thu 8am–5pm, Fri 8am–12pm". The backing image did not render in the capture, so the exact photo under the pin is not visible in the screenshot.

## Page Analysis
Practice/location section in `src/pages/index.astro`, image under `public/images/`.

## Assessment
Not actionable — blocked on an asset, same as BH-7/BH-10/BH-18. "Updated" implies they have or want a current photo of the actual office; none was provided.

## User Context

Dev (2026-08-26): "I will ask the office for one." — requesting a current photo of the practice from the client.

**Disposition:** blocked pending the client asset. Left in place; not moved to Ready to Dev.

## Plan

Parked until the photo arrives. On receipt:
1. Optimize and place in `public/images/` — never hotlink (CLAUDE.md).
2. Swap the `src` and rewrite the `alt` text to describe the real subject.
3. Check every page that carried the old asset, not just the pinned one.
4. Screenshot at 375px / 768px / 1440px to confirm the crop holds.

If no photo materializes within the launch window, escalate to the PM — BH-18 in particular blocks the About cluster and the client was emphatic about it.
