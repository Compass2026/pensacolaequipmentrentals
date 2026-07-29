# Local SEO Architecture & Optimization Strategy

## Overview
This document outlines the local search engine optimization (SEO) framework for Pensacola Equipment Rentals. The strategy focuses on establishing strong organic rankings for high-intent equipment rental and land-clearing keywords across Pensacola and surrounding Florida Panhandle markets.

---

## 1. Primary Keyword Targets & Search Intent

### Commercial Equipment Keywords:
* `mini excavator rental Pensacola FL` (Intent: Rent Bobcat E26)
* `skid steer rental Pensacola` (Intent: Rent Bobcat T66 / Kubota SVL)
* `dump trailer rental Pensacola FL` (Intent: Rent 14ft Iron Bull Dump Trailer)
* `zero turn mower rental Pensacola` (Intent: Rent Gravely Pro-Turn)
* `equipment rental near me Pensacola`
* `land clearing services Pensacola FL`

### Localized Location Keywords:
* `equipment rental Gulf Breeze FL`
* `skid steer rental Milton FL`
* `dump trailer rental Navarre FL`
* `brush clearing Pensacola FL`

---

## 2. Technical SEO Standards (Next.js App Router)
1. **Dynamic Metadata API**: Each page utilizes Next.js `generateMetadata` or static `export const metadata` to generate unique Title Tags, Meta Descriptions, OpenGraph, Twitter Cards, and Canonical URLs.
2. **XML Sitemap (`/sitemap.xml`)**: Automated sitemap generator (`src/app/sitemap.ts`) detailing all active routes, priority scores, and last-modified dates.
3. **Robots.txt (`/robots.txt`)**: Crawl directives allowing standard search engine bots while blocking admin/api routes.
4. **Web App Manifest (`/manifest.json`)**: Configured for PWA branding, mobile home screen saving, and mobile app signals.

---

## 3. Structured Data (JSON-LD) Implementation

### Implemented Schema Schemas:
* **`LocalBusiness` / `EquipmentRental` Schema**: Contains business name, logo, address (`7013 Chapel St, Pensacola, FL 32504`), telephone (`850-407-6566`), coordinates, service area, and priceRange.
* **`Product` / `Offer` Schema**: Embedded in equipment detail pages containing equipment specifications, daily/weekly/monthly pricing, and availability.
* **`Service` Schema**: Embedded in the Land Clearing page detailing clearing capabilities and service area coverage.
* **`BreadcrumbList` Schema**: Dynamic breadcrumbs on all inner routes.
* **`FAQPage` Schema**: Visible FAQs on equipment pages and homepage.
