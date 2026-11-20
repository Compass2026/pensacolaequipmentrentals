# Content Audit & Data Discrepancy Log: Pensacola Equipment Rentals

## Overview
During the comprehensive audit of the live WordPress website (`https://www.bnbcoastalcuts.com/`), several content discrepancies, conflicting prices, and technical errors were identified in the legacy database. This log documents each issue, the resolution implemented in the centralized data layer, and the pending actions requiring business owner confirmation.

---

## 1. Conflicting Pricing Log

### ISSUE #1: Dump Trailer Weekly Rate Discrepancy (CRITICAL)
* **Location 1 (Homepage)**: Listed as **`$600` per week** (and `$275` for "If we deliver Day Rental").
* **Location 2 (Equipment Catalog Page `/equipment/`)**: Listed as **`$275` per week**.
* **Impact**: Customer confusion regarding whether a weekly dump trailer rental is $275 or $600.
* **Implementation Action**: In `src/data/equipment.ts`, the weekly rate is set to `$600` with a documented `TODO: Owner confirmation required for 2022 Iron Bull weekly rate`.
* **Action Required**: Owner must confirm if weekly dump trailer rental is $600 or $275.

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
* **Implementation Action**: The copied solar-services wording was removed first; `/privacy-policy/` is now an actual privacy policy **draft** written from what the Next.js site does (quote form fields, emailed via Resend to the business and Compass Marketing, no database, in-memory rate limit, optional Google Analytics, Google Maps embed on `/contact/`, Vercel hosting, no first-party cookies or browser storage). Effective date reads "Draft — pending owner review".
* **Action Required**: Owner review and approval of the draft (counsel if desired); then set the effective date in `src/app/privacy-policy/page.tsx`.

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

1. **OPEN — Iron Bull Dump Trailer weekly rate**: the homepage said `$600`/week, the `/equipment/` page `$275`/week. `src/data/equipment.ts` still uses `$600` (unchanged) until the owner confirms which is right.
2. **Mostly resolved — Phone number**: the Google Business Profile lists `850-407-6566`. Still worth confirming `850-407-6566` is the only active line. The live WordPress header dialed `850-637-4442` and four migrated blog posts used it; "Top 7 Reasons to Rent vs. Buy" also listed `573-864-8356`. Both were removed — the site uses `850-407-6566` everywhere.
3. **OPEN — Privacy policy**: `/privacy-policy/` is a draft written from what the site does. It needs the owner's approval (and counsel's, if wanted) before the "Draft — pending owner review" effective date is replaced.
4. **OPEN — GA4 measurement ID**: no GA4 property / measurement ID has been created yet, so `NEXT_PUBLIC_GA_ID` is unset and no analytics tag loads. Once it is set, the privacy policy's "Google Analytics (if enabled)" section applies.
5. **OPEN — GoHighLevel**: the WordPress quote form fed GoHighLevel form `wi42vrSXhsIIyErqECdb`. The new form emails quotes and, once `GHL_WEBHOOK_URL` is set in Vercel (a GHL workflow's Inbound Webhook URL), also posts each quote to GoHighLevel. Redeploy after setting it.
6. **Delivery Radius** (verified, no action): legacy site states "Prices include drop-off and pick-up within 20 miles of Pensacola. Will go farther for additional cost." Preserved.
