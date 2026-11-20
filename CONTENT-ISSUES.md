# Content Audit & Data Discrepancy Log: Pensacola Equipment Rentals

## Overview
During the comprehensive audit of the live WordPress website (`https://www.bnbcoastalcuts.com/`), several content discrepancies, conflicting prices, and technical errors were identified in the legacy database. This log documents each issue, the resolution implemented in the centralized data layer, and the pending actions requiring business owner confirmation.

---

## 1. Conflicting Pricing Log

### ISSUE #1: Dump Trailer Weekly Rate Discrepancy (CRITICAL)
* **Location 1 (Homepage)**: Listed as **`$600` per week** (and `$275` for "If we deliver Day Rental").
* **Location 2 (Equipment Catalog Page `/equipment/`)**: Listed as **`$275` per week**.
* **Impact**: Customer confusion regarding whether a weekly dump trailer rental is $275 or $600.
* **Cause**: The homepage table has four rows (Day $175 · If we deliver Day Rental $275 · Week $600 · Month $1350). The `/equipment/` table drops the "If we deliver" row, so its $275 landed in the Week slot.
* **Resolution (Nov 2026)**: Keep the old site's homepage pricing: weekly **$600**, delivered day rental $275. Set in `src/data/equipment.ts`.

---

## 2. Phone Number Discrepancies

### ISSUE #2: Desktop Header Phone Link Mismatch
* **Visible Text**: `850-407-6566`
* **HTML `href` Target**: `tel:850-637-4442`
* **Impact**: Mobile or desktop users clicking the call button on the legacy site dialed an unverified number (`850-637-4442`).
* **Implementation Action**: Standardized all phone links across the entire Next.js site to point cleanly to `850-407-6566` (`tel:8504076566`).

---

## 3. Machine Nomenclature & Year Clarifications

### ISSUE #3: Kubota Skid Steer Model Specifications
* **Website Listing**: Listed as "Kubota SVL enclosed-cab skid steer".
* **Specific Model Number**: The legacy site did not specify whether it is an SVL75, SVL95, or SVL97.
* **Implementation Action**: Cataloged as "Kubota SVL Series Enclosed Cab Skid Steer". Pricing kept accurate to site listing ($400/day, $1500/week, $3500/month).

### ISSUE #4: Stihl Tool Rate Transparency
* **Sprayer & Chainsaw**: Listed on legacy site as "Call or Text for pricing".
* **Implementation Action**: Preserved "Call or Text for Pricing" label with direct one-tap call buttons.

---

## 4. Blog Posts and Privacy Policy (migrated Nov 2026)

### ISSUE #5: Old phone numbers in four blog posts
* **Live posts**: "How to Prepare Your Property…", "How to Find a Trustworthy Equipment Rental Company…", "Top 5 Projects…" and "Top 7 Reasons to Rent vs. Buy…" ask readers to call **850-637-4442**; "Top 7 Reasons" also lists **573-864-8356**.
* **Implementation Action**: Migrated posts in `data/blog-posts.json` use **850-407-6566** only; the 573 number was dropped.

### ISSUE #6: The "Privacy Policy" page is a Terms of Service
* **Live page** `/privacy-policy/` (last updated June 15th, 2025) is titled Privacy Policy but its text is a Terms of Service, and section 1 lists "solar sales, installations, consultations" as services; its contact phone is 850-637-4442.
* **Resolution (Nov 2026)**: At the agency's request `/privacy-policy/` carries the WordPress page's text, with "solar sales, installations, consultations" removed and the phone corrected to 850-407-6566; "Last Updated" is the date of that change. It is still a Terms of Service rather than a privacy policy. A privacy policy written from what the site does is in git history (commit `4e38146`) if one is needed later — e.g. GoHighLevel SMS (A2P 10DLC) registration usually asks for a privacy policy covering text messaging.

---

## 5. Reviews, rating and social links (fixed Nov 2026)

### ISSUE #7: Invented testimonials
* **Problem**: The redesign shipped four made-up reviews ("Mark S.", "David L.", "Robert T.", "Chris M.") and a "5.0" rating. The live site shows real Google reviews through a Trustindex widget.
* **Implementation Action**: `src/data/reviews.ts` now holds the 10 reviews from that widget, word for word, with names and posting month. The rating reads **4.9 from 27 Google reviews** (Google Business Profile, Sept 2026) and `/reviews/` links to the profile and to "leave a review". Update `GOOGLE_RATING` when the numbers change. Don't add reviews that aren't on Google.

### ISSUE #8: Placeholder social links in structured data
* **Problem**: The LocalBusiness JSON-LD `sameAs` pointed at `https://www.facebook.com/` and `https://twitter.com/` (platform homepages, not the business).
* **Implementation Action**: `sameAs` now lists the Google Business Profile only. The WordPress site links no social accounts; add the real Facebook URL to `BUSINESS_INFO.profiles` if there is one.

---

## 6. Summary of Business Confirmations Needed

Status as of Nov 2026. Items marked **OPEN** still need the owner.

1. **Resolved — Iron Bull Dump Trailer weekly rate**: `$600`/week, per the old homepage (see Issue #1).
2. **Mostly resolved — Phone number**: the Google Business Profile lists `850-407-6566`. Still worth confirming `850-407-6566` is the only active line. The live WordPress header dialed `850-637-4442` and four migrated blog posts used it; "Top 7 Reasons to Rent vs. Buy" also listed `573-864-8356`. Both were removed — the site uses `850-407-6566` everywhere.
3. **Resolved — Privacy policy**: carries the WordPress page's text (see Issue #6).
4. **OPEN (agency is setting up) — GA4 measurement ID**: no GA4 property / measurement ID yet, so `NEXT_PUBLIC_GA_ID` is unset and no analytics tag loads. Set it in Vercel and redeploy.
5. **Interim — GoHighLevel quote form**: every quote form on the site (contact page, equipment pages, quote pop-ups) is the GoHighLevel "Website" form `wi42vrSXhsIIyErqECdb`, embedded the way the WordPress site did, so leads and existing GHL automations carry on unchanged. GHL is planned to be retired around Dec 2026: then set `QUOTE_FORM_PROVIDER = "site"` in `src/data/business.ts` to switch back to the site's own form (emails via Resend; `RESEND_API_KEY` is already set in Vercel). The GHL form carries an SMS marketing-consent checkbox linking to `/privacy-policy/`.
6. **Delivery Radius** (verified, no action): legacy site states "Prices include drop-off and pick-up within 20 miles of Pensacola. Will go farther for additional cost." Preserved.
