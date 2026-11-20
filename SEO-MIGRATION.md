# SEO Migration & Redirect Map: Pensacola Equipment Rentals

## Overview
Every URL the WordPress site at `https://www.bnbcoastalcuts.com/` serves (pages, the
10 posts, feeds, sitemaps, archives and the images it links) either resolves at the
same path on the Next.js build or redirects once to its replacement. Redirects live in
`next.config.mjs`; image redirects are generated from `data/wp-media-redirects.json`.

`trailingSlash: true` keeps the WordPress URL shape (`/about/`, `/<post-slug>/`), so
preserved URLs are byte-for-byte the live ones. A path typed without the slash gets one
308 to the slashed form. Next's `permanent: true` redirects answer 308 (Google treats
308 like 301).

---

## 1. Preserved URLs (200, same path)

| WordPress URL | Next.js route |
| :--- | :--- |
| `/` | `src/app/page.tsx` |
| `/about/` | `src/app/about` |
| `/contact/` | `src/app/contact` |
| `/equipment/` | `src/app/equipment` |
| `/land-clearing/` | `src/app/land-clearing` |
| `/privacy-policy/` | `src/app/privacy-policy` (text of the WordPress page, solar line and old phone removed) |
| `/blog/` | `src/app/blog` (lists every post) |
| `/<post-slug>/` × 10 | `src/app/[slug]` from `data/blog-posts.json` (see below) |

The 10 posts, at their WordPress permalinks:

- `/renting-a-skid-steer-heres-what-you-can-do-with-it/`
- `/how-to-speed-up-jobsite-efficiency-with-the-right-rentals/`
- `/diy-landscaping-projects-made-easy-with-the-right-rental-equipment/`
- `/how-to-choose-the-right-equipment-for-your-project/`
- `/beginners-guide-to-renting-construction-equipment-in-pensacola/`
- `/the-ultimate-guide-to-renting-construction-equipment-in-pensacola/`
- `/top-7-reasons-to-rent-vs-buy-construction-equipment/`
- `/how-to-prepare-your-property-before-your-rental-equipment-arrives/`
- `/how-to-find-a-trustworthy-equipment-rental-company-at-a-fair-price/`
- `/top-5-projects-you-can-tackle-with-a-mini-excavator-rental/`

## 2. Redirects (permanent)

| Source | Destination | Why |
| :--- | :--- | :--- |
| `/locations/` | `/service-areas/` | Empty WordPress page; service areas replace it |
| `/sample-page/` | `/` | WordPress default page (Next config has no 410 rule; a 410 would need middleware) |
| `/feed/`, `/comments/feed/` | `/sitemap.xml` | RSS feeds retired |
| `/<slug>/feed/` | `/<slug>/` | Per-post comment feeds |
| `/wp-sitemap.xml`, `/wp-sitemap-*.xml` | `/sitemap.xml` | WordPress core sitemaps |
| `/category/*` | `/blog/` | `rent-equipment`, `uncategorized` archives |
| `/author/*` | `/blog/` | Author archive (listed in `wp-sitemap-users-1.xml`) |
| `/blog/page/:n` | `/blog/` | Blog pagination |
| `/resources/`, `/resources/<slug>/` | `/blog/`, `/<slug>/` | The pre-launch build's resources hub |
| `/wp-content/uploads/<file>` × 23 | `/images/…` or `/blog/images/…` | Every image the build or the posts used, now served from `/public` |

## 3. Sitemap
`src/app/sitemap.ts` lists the pages, equipment pages, service areas, `/privacy-policy/`,
`/blog/` and every post at canonical production URLs with trailing slashes.
`robots.txt` points at it and no longer blocks `/_next/` (that blocked Google from the
optimised images, CSS and JS).

## 4. Launch checklist
* [x] Redirects verified locally against `next start`: every URL above answers 200 or one
      redirect then 200 (two hops for slash-less forms of redirected paths).
* [ ] Add the custom domain on Vercel and cut DNS over (Tom approves the cutover).
* [ ] Resubmit `https://www.bnbcoastalcuts.com/sitemap.xml` in Google Search Console after
      cutover and spot-check the post URLs with URL Inspection.
