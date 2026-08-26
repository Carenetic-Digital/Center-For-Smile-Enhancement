# BH-4: Add a "Pay Online" box next to Schedule Appointment

**Task ID:** 30509926 (global) / 4 (local)
**Project:** PDP - Center for Smile Enhancement (528535)
**URL:** https://cse.spark0.io/
**Priority:** not set
**Status:** backlog
**Triaged:** 2026-08-26T20:15:00Z
**Actionable:** Needs clarity

## Description
this looks great! I love the easy to use/view dropdown - eventually I would love to have a pay online box next to the schedule appt box

## Screenshot Analysis
Homepage with the Services dropdown / header in view, showing the "SCHEDULE APPOINTMENT" button.

## Page Analysis
`src/components/Header.astro` — single primary CTA. `/patients/insurance-payment/` mentions CareCredit, Cherry, and a prepay discount but no online payment portal is wired up anywhere in the site.

## Assessment
Not actionable yet. Blocked on two things, and the client explicitly said "eventually":
1. **No payment URL.** There is no online payment provider or portal link anywhere in the codebase or intake.
2. **Header real estate.** A second header CTA next to "Schedule Appointment" affects the mobile header and the sticky nav; needs a design call, not just a copy change.

## Plan
Questions for the client:
- Which payment provider/portal, and what is the URL? (CareCredit and Cherry are financing, not a pay-a-bill portal.)
- Is this a header button, or a card on `/patients/insurance-payment/`?
Once the URL exists this becomes a small, well-defined build.
