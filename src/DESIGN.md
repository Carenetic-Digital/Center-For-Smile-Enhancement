# Design System — Center for Smile Enhancement

## Brand Direction

Premium, editorial, warm. Target demographic is adults 45+, fee-for-service patients who prioritize quality over cost. Think Nordstrom editorial pages or Ritz-Carlton print materials — refined but never cold. Heavy white space, open contemporary feel.

---

## Colors

### Brand Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `--color-primary` | `#1e3460` | Headings, CTA buttons, nav, key UI elements |
| `--color-primary-hover` | `#162850` | Button hover states |
| `--color-brand-light` | `#c5cde3` | Accents, section dividers, tag/badge backgrounds, card top borders |

### Text Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `--color-text-base` | `#1a1f2e` | Body copy, primary text |
| `--color-text-muted` | `#6b7280` | Secondary text, descriptions, captions |

### Backgrounds

| Token | Hex | Usage |
|-------|-----|-------|
| `white` | `#ffffff` | Primary page background, card backgrounds |
| `--color-surface` | `#f8f9fb` | Section alternation, hero, 404 bg |
| `--color-border` | `#e4e8f0` | Card borders, dividers, nav border |
| `--color-primary` | `#1e3460` | Dark CTA sections, footer |
| `--color-brand-light` | `#c5cde3` | Patient resources section background |

### Semantic Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `--color-success` | `#10b981` | Success states |
| `--color-warning` | `#f59e0b` | Star ratings (5-star yellow) |
| `--color-error` | `#ef4444` | Error states |
| `--color-info` | `#3b82f6` | Info states |

---

## Typography

### Fonts

**Playfair Display** — Display/Heading font
- Weights: 600 (Semibold), 700 (Bold)
- `font-family: var(--font-display)` or CSS token `--font-display`
- Google Fonts URL: `https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&display=swap`

**Lato** — Body/UI font
- Weights: 300 (Light), 400 (Regular), 500 (Medium)
- `font-family: var(--font-body)` or CSS token `--font-body`
- Google Fonts URL: `https://fonts.googleapis.com/css2?family=Lato:wght@300;400;500&display=swap`

### Type Scale

| Element | Font | Size | Weight |
|---------|------|------|--------|
| H1 (hero) | Playfair Display | `clamp(2.25rem, 5vw, 3.75rem)` | 700 |
| H2 (section) | Playfair Display | `clamp(1.75rem, 3vw, 2.5rem)` | 700 |
| H3 (card) | Playfair Display | `1rem–1.125rem` | 600 |
| Body | Lato | `0.9375rem–1rem` | 400 |
| Eyebrow labels | Lato | `0.75rem` | 500, uppercase, tracked |
| Button text | Lato | `0.8125rem` | 500, uppercase, tracked |
| Small/captions | Lato | `0.8125rem` | 300–400 |

### Usage Rules

- H1–H2: Playfair Display 700
- H3–H4: Playfair Display 600
- H5–H6: Lato 500, uppercase, tracked
- Body: Lato 400, line-height 1.65–1.75
- CTAs/Buttons: Lato 500, `letter-spacing: 0.09em`, uppercase

---

## Buttons

Pill-shaped, three variants, defined as CSS component classes:

```html
<!-- Primary: dark navy fill, soft drop shadow, lifts 1px on hover -->
<a href="..." class="btn btn-primary">Schedule Appointment</a>

<!-- Outline: dark navy border, transparent fill (inverts on hover) -->
<a href="..." class="btn btn-outline">Learn More</a>

<!-- Outline White: white border for dark backgrounds -->
<a href="..." class="btn btn-outline-white">Contact Us</a>
```

Spec: `border-radius: 999px` (full pill), 2px solid border, `padding: 0.9375rem 2rem`, uppercase tracking, 0.2s transition. `.btn-primary` carries `box-shadow: 0 8px 24px rgba(30, 52, 96, 0.22)` and translates up 1px on hover.

---

## Layout

### Container

Use `.site-container` for all sections:
```html
<div class="site-container">...</div>
```
- Max-width: 1280px
- Padding: 1.5rem mobile → 2rem tablet → 2.5rem desktop

### Section Padding

Use `.section-py` for standard vertical section spacing:
- Mobile: `4rem` top/bottom
- Tablet: `5rem`
- Desktop: `6rem`

### Homepage Section Color Alternation

Stats float as an overlapping card rather than a separate strip; interior photo and final CTA are framed "islands" rather than full-bleed bands.

| Section | Background |
|---------|-----------|
| Hero (+ floating stats card) | `#ffffff` |
| What Sets Us Apart | `#ebeef5` (`.section-wash`) |
| Practice Interior | `--color-surface` |
| Services | `#ffffff` |
| Testimonials | `--color-brand-light` (`.section-brand`) |
| Patient Resources | `#ffffff`, with an inset rounded "blob" wash behind the grid |
| Final CTA | `#ffffff` page background, with a `--color-primary` rounded island containing the CTA |
| Footer | `--color-primary` (dark navy) |

---

## Shape Language

Warm/soft direction layered on top of the navy/light-blue/white palette:

- **Pill shapes** — buttons, eyebrow badges, icon badges (`border-radius: 999px`)
- **Rounded cards** — `border-radius: 1.5rem`, layered box-shadow (a tight 2px shadow + a soft 12–24px shadow), never a hard 1px-border-only card
- **Asymmetric photo frames** — hero/feature photos use `border-radius: 3.5rem 3.5rem 1rem 3.5rem` (three rounded corners, one square) with a `--color-brand-light` decorative "blob" offset behind the frame
- **Floating/overlapping elements** — e.g. a stats card that overlaps the hero on desktop (negative `margin-top`), or a CTA "island" that sits inset within its section rather than spanning full-bleed
- **Section wash colors** — alternate `#ffffff`, `#ebeef5`, `--color-surface`, and `--color-brand-light` rather than only white/surface, to keep long pages from feeling flat

Apply this language to new pages' hero/CTA sections and card grids; don't reintroduce the old flat 1px-bordered card or square-cornered button style.

---

## Cards

Use `.card` class for standard soft cards:
```html
<div class="card">...</div>
```
- White background
- `border-radius: 1.5rem`
- Faint 1px border (`rgba(30, 52, 96, 0.07)`)
- `padding: 2rem 1.75rem`
- Layered box-shadow (tight + soft), hover: deeper shadow + 3px translate up

Feature-style cards may add an `.icon-badge` (pill, `--color-brand-light` fill) above the heading instead of a top border accent.

---

## Spacing Conventions

- Section vertical padding: see `.section-py`
- Card padding: `1.5rem–1.75rem`
- Between section heading and content: `3rem–3.5rem`
- Between elements within a card: `0.5rem–1rem`
- Button gaps: `1rem`

---

## Grid Patterns

### Features (2→4 columns)
```
mobile: 1 col
sm: 2 col
lg: 4 col
```

### Services (1→2→3→5 columns)
```
mobile: 1 col
sm: 2 col
lg: 3 col
xl: 5 col
```

### Testimonials (1→3 columns)
```
mobile: 1 col
md: 3 col
```

### Patient Resources (1→2→4 columns)
```
mobile: 1 col
sm: 2 col
lg: 4 col
```

### Footer (1→2→4 columns)
```
mobile: 1 col
sm: 2 col (brand spans 2)
lg: 1.5fr + 3×1fr
```

---

## Accessibility

- Color contrast: all text/bg combinations meet WCAG 2.1 AA (4.5:1 for body, 3:1 for large text)
- Primary (`#1e3460`) on white: ~12.2:1 ✓
- Muted (`#6b7280`) on white: ~4.8:1 ✓ (borderline; prefer `--color-text-base` for critical copy)
- White on primary (`#1e3460`): ~12.2:1 ✓
- **⚠ Warning:** `--color-text-muted` (`#6b7280`) on `--color-brand-light` (`#c5cde3`) = 3.04:1 — **WCAG AA FAIL** for body text. Never place muted text directly on the brand-light background. Use `--color-primary` or `--color-text-base` for any text on brand-light sections (e.g. `.section-sub` inside a `.section-brand` block needs a `color: var(--color-text-base)` override — see the Testimonials section on the homepage). The default `.section-eyebrow` is already safe (`--color-primary` on `--color-brand-light`); use the `--muted`, `--onDark`, `--onBrand` modifiers for eyebrows on other backgrounds.
- All interactive elements have visible focus states
- SVG icons include `aria-hidden="true"` when decorative
- Semantic HTML: `<header>`, `<main>`, `<footer>`, `<nav>`, `<section aria-labelledby>`, `<article>`

---

## Component Conventions

- Components in `src/components/` use PascalCase
- Inline styles for dynamic/per-instance values, CSS classes for structural patterns
- `<style>` block per component for component-scoped responsive rules
- No Tailwind utility classes in `.astro` template markup for layout — use semantic CSS classes from `global.css` instead
- Images: always provide `width`, `height`, `loading`, and `alt`; hero image uses `loading="eager" fetchpriority="high"`
