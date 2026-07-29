# SEO Migration & 301 Redirect Mapping: Pensacola Equipment Rentals

## Overview
This document tracks existing WordPress URLs from `https://www.bnbcoastalcuts.com/` and defines the corresponding 301 redirects and migration rules for the Next.js site deployment to protect current organic search authority.

---

## 1. URL Migration Map

| Existing WordPress URL | New Next.js App Router Route | Status / Action | Priority |
| :--- | :--- | :--- | :--- |
| `https://www.bnbcoastalcuts.com/` | `/` | Preserved | High |
| `https://www.bnbcoastalcuts.com/about/` | `/about` | Preserved | High |
| `https://www.bnbcoastalcuts.com/contact/` | `/contact` | Preserved | High |
| `https://www.bnbcoastalcuts.com/equipment/` | `/equipment` | Preserved | High |
| `https://www.bnbcoastalcuts.com/land-clearing/` | `/land-clearing` | Preserved | High |
| `https://www.bnbcoastalcuts.com/privacy-policy/` | `/privacy-policy` | Preserved | Medium |
| `https://www.bnbcoastalcuts.com/renting-a-skid-steer-heres-what-you-can-do-with-it/` | `/resources/renting-a-skid-steer-heres-what-you-can-do-with-it` | 301 Redirect | High |
| `https://www.bnbcoastalcuts.com/how-to-speed-up-jobsite-efficiency-with-the-right-rentals/` | `/resources/how-to-speed-up-jobsite-efficiency-with-the-right-rentals` | 301 Redirect | High |
| `https://www.bnbcoastalcuts.com/diy-landscaping-projects-made-easy-with-the-right-rental-equipment/` | `/resources/diy-landscaping-projects-made-easy-with-the-right-rental-equipment` | 301 Redirect | High |

---

## 2. Next.js Redirect Configuration (`next.config.mjs`)

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/renting-a-skid-steer-heres-what-you-can-do-with-it',
        destination: '/resources/renting-a-skid-steer-heres-what-you-can-do-with-it',
        permanent: true,
      },
      {
        source: '/how-to-speed-up-jobsite-efficiency-with-the-right-rentals',
        destination: '/resources/how-to-speed-up-jobsite-efficiency-with-the-right-rentals',
        permanent: true,
      },
      {
        source: '/diy-landscaping-projects-made-easy-with-the-right-rental-equipment',
        destination: '/resources/diy-landscaping-projects-made-easy-with-the-right-rental-equipment',
        permanent: true,
      },
    ];
  },
};
```

---

## 3. WordPress Archive Clean-up & Pre-Launch Checklist
* [ ] Verify all 301 redirects function cleanly without redirect loops.
* [ ] Submit updated `/sitemap.xml` to Google Search Console upon domain DNS cutover.
* [ ] Ensure legacy WP feeds (`/feed/`, `/comments/feed/`) return clean 410 Gone or redirect to `/sitemap.xml`.
