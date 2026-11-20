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
* **Implementation Action**: `/privacy-policy/` reproduces the live text except the contact block, which uses `BUSINESS_INFO` (850-407-6566), and section 1, where the copied solar-services wording is replaced with this business's services (equipment rental, delivery and pickup, land clearing).
* **Action Required**: Owner (or counsel) should replace it with an actual privacy policy and remove the solar wording.

---

## 5. Summary of Business Confirmations Needed

1. **Iron Bull Dump Trailer**: Confirm weekly rental rate ($600 vs $275).
2. **Primary Phone Number**: Confirm `850-407-6566` is the sole active phone line.
3. **Privacy Policy**: Replace the Terms-of-Service text (with its "solar sales" line) with a real privacy policy.
4. **Delivery Radius**: Legacy site states "Prices include drop-off and pick-up within 20 miles of Pensacola. Will go farther for additional cost." (Verified & preserved).
