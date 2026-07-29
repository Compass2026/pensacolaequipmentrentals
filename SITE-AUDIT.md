# Site Audit Report: Pensacola Equipment Rentals

## Executive Summary
This document provides a comprehensive technical, visual, and architectural audit of the current WordPress website for **Pensacola Equipment Rentals** (`https://www.bnbcoastalcuts.com/`). The goal of the audit is to capture brand identity, media assets, content architecture, SEO markers, and technical limitations to ensure a seamless migration to Next.js (App Router) hosted on Vercel.

---

## 1. Business Information Verified
* **Business Name**: Pensacola Equipment Rentals
* **Primary Phone**: `850-407-6566` (Note: Desktop header HTML contains an erroneous `href="tel:850-637-4442"` link)
* **Email Address**: `bnbcoastalcuts@gmail.com`
* **Physical Address**: `7013 Chapel St, Pensacola, FL 32504`
* **Primary Market**: Pensacola, Florida & Florida Panhandle
* **Tagline**: "Rent It. We Deliver."
* **Positioning**: Locally owned and operated father-and-son equipment rental and land-clearing company.
* **Target Audience**: Homeowners, DIYers, contractors, landscapers, builders, and construction crews.
* **Primary Service Areas**: Pensacola, Gulf Breeze, Milton, Navarre, and surrounding Panhandle communities.

---

## 2. Technical Stack Audit (Existing Site)
* **CMS**: WordPress 6.x
* **Theme**: Hello Elementor (`hello-elementor`)
* **Page Builder**: Elementor Pro + ElementsKit Lite
* **Plugins Installed**: Smush (Image compression/lazyload), Google Site Kit, Skyboot Custom Icons.
* **Form Handler**: GoHighLevel / LeadConnector iframe integration (`id="inline-wi42vrSXhsIIyErqECdb"`).
* **Performance Benchmark Issues**:
  * Heavy DOM payload (>2,300 lines of Elementor markup per page).
  * High cumulative layout shift (CLS) due to Smush lazyloading inline placeholders (`data:image/svg+xml`).
  * Render-blocking CSS (15+ external stylesheets loaded per request).
  * Misconfigured click-to-call link in desktop top bar (`850-637-4442` vs text `850-407-6566`).

---

## 3. Existing Page & URL Structure
1. `/` (Homepage)
2. `/about/` (About Us)
3. `/contact/` (Contact Us & Form)
4. `/equipment/` (Equipment Catalog Hub)
5. `/land-clearing/` (Dedicated Land Clearing Page)
6. `/privacy-policy/` (Privacy Policy)
7. Blog Posts:
   * `/renting-a-skid-steer-heres-what-you-can-do-with-it/`
   * `/how-to-speed-up-jobsite-efficiency-with-the-right-rentals/`
   * `/diy-landscaping-projects-made-easy-with-the-right-rental-equipment/`

---

## 4. Brand & Visual Identity Audit
* **Primary Brand Yellow**: `#F5B93F` (Hex value extracted from Elementor global theme variables `--e-global-color-d49ac81` / `--e-global-color-ec3c7a7`).
* **Dark Background / Neutral Black**: `#1A1918` and `#222120` (`--e-global-color-text`).
* **Secondary Surface Dark**: `#2D2C2A` / `#383838`.
* **Accent Gold / Highlight**: `#F8D244`.
* **Heading Typography**: `"Geologica"` (Google Font) - bold 700/800 weight with tight letter spacing (`-1px`).
* **Body Typography**: `"Inter"` (Google Font) - clean sans-serif 400/500 weight.
* **Logo**: `Untitled-500-x-500-px.png` (Father and Son silhouette with excavator emblem and bold yellow typography).

---

## 5. Key UX & Conversion Opportunities in Rebuild
1. **Clear Equipment Categorization**: Replace long accordions with structured equipment cards, spec tables, clear daily/weekly/monthly rates, and direct "Check Availability" modal/page actions.
2. **Local SEO Powerhouse**: Create dedicated equipment detail pages (`/equipment/bobcat-e26-mini-excavator`, `/equipment/bobcat-t66-skid-steer`, etc.) and dedicated location pages (`/service-areas/pensacola-fl`, etc.).
3. **Mobile Sticky Conversion Bar**: Provide quick access to Call, Equipment Catalog, and Quote Form on mobile viewports.
4. **Transparent Pricing Architecture**: Eliminate price discrepancies between homepage and catalog pages with centralized TypeScript data definitions.
