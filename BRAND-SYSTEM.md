# Design System & Brand Palette: Pensacola Equipment Rentals

This document details the exact design tokens, typography rules, component patterns, and visual guidelines extracted directly from `https://www.bnbcoastalcuts.com/` and codified for the Next.js website.

---

## 1. Primary Color Tokens Extracted from Live Website

```css
:root {
  /* Brand Core Colors (Extracted from www.bnbcoastalcuts.com) */
  --color-brand-blue: #004AAD;        /* Primary Coastal Blue (Header Top Bar, Badges & Overlays) */
  --color-brand-blue-dark: #185BA6;   /* Dark Coastal Blue Overlay */
  --color-brand-red: #D74E31;         /* Primary Rust Red / Coral CTA (Contact Us, Active Links) */
  --color-brand-yellow: #F5B93F;      /* Equipment Gold Accent (Highlights & Pricing) */

  /* Neutral Dark Theme Scale */
  --color-brand-black: #111827;       /* Main Dark Background */
  --color-brand-charcoal: #1F2937;    /* Card & Navigation Fill */
  --color-brand-surface-border: #374151;/* Border & Separator Line */
  --color-brand-gray-text: #9CA3AF;   /* Muted Subtitles & Captions */
  
  /* Text & Foreground */
  --color-text-primary: #FFFFFF;      /* Main Headings & Primary Text */
  --color-text-secondary: #F3F4F6;    /* Body Text & Descriptions */
}
```

---

## 2. Typography System
1. **Headings**: `Geologica` (Weights: 500, 600, 700, 800)
2. **Body Text**: `Inter` (Weights: 400, 500, 600)

---

## 3. UI Component Patterns
* **Primary CTA Buttons**: Background `#D74E31` (Rust Red) with white text, hover state `#004AAD` (Coastal Blue).
* **Secondary CTA Buttons**: Background `#004AAD` (Coastal Blue) with white text, hover state `#D74E31` (Rust Red).
* **Top Bar**: Coastal Blue background `#004AAD` with bold white contact typography and gold icon accents.
* **Badges & Tags**: `#D74E31` Coral Red for active states and `#F5B93F` Gold for equipment availability.
