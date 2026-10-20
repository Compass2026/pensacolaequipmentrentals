import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, ArrowUpRight, ArrowRight } from "lucide-react";
import { BUSINESS_INFO } from "@/data/business";
import { EQUIPMENT_CATALOG } from "@/data/equipment";

const COMPANY_LINKS = [
  { name: "About us", href: "/about" },
  { name: "Land clearing", href: "/land-clearing" },
  { name: "Customer reviews", href: "/reviews" },
  { name: "Resources", href: "/resources" },
  { name: "Request a quote", href: "/request-a-quote" },
  { name: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="relative isolate overflow-hidden bg-brand-black text-white/70">
      {/* CTA band */}
      <div className="container pt-24">
        <div className="relative overflow-hidden rounded-[32px] bg-brand-blue px-8 py-14 sm:px-12 lg:flex lg:items-center lg:justify-between lg:gap-12 lg:px-20 lg:py-20">
          <div className="absolute inset-0 bg-blueprint opacity-60" />
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-sun opacity-60 blur-2xl" />
          <div className="relative max-w-3xl space-y-4">
            <span className="eyebrow-light">Need reliable equipment fast?</span>
            <h2 className="display text-4xl text-white sm:text-5xl lg:text-6xl">Let&apos;s get your project moving.</h2>
            <p className="text-lg text-white/75">Mini excavators, skid steers &amp; trailers delivered across Pensacola.</p>
          </div>
          <div className="relative mt-8 flex flex-wrap gap-3 lg:mt-0 lg:shrink-0">
            <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="btn-primary !px-8 !py-4 text-base">
              <Phone className="h-5 w-5" />
              {BUSINESS_INFO.phone}
            </a>
            <Link href="/request-a-quote" className="btn-outline-light !px-8 !py-4 text-base">
              Request availability
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Link columns */}
      <div className="container py-24 lg:py-28">
        <div className="grid gap-14 sm:grid-cols-2 lg:grid-cols-12">
          <div className="space-y-7 lg:col-span-4">
            <Link href="/" className="inline-block" aria-label="Pensacola Equipment Rentals home">
              <Image src="/brand/logo.png" alt="Pensacola Equipment Rentals Logo" width={394} height={290} className="h-32 w-auto lg:h-40" />
            </Link>
            <p className="max-w-sm text-base leading-relaxed text-white/60">{BUSINESS_INFO.story}</p>
            <p className="max-w-sm text-sm leading-relaxed text-brand-yellow/90">{BUSINESS_INFO.deliveryNote}</p>
          </div>

          <div className="space-y-6 lg:col-span-3">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white">Equipment</h3>
            <ul className="space-y-3.5 text-base">
              {EQUIPMENT_CATALOG.map((item) => (
                <li key={item.id}>
                  <Link href={`/equipment/${item.slug}`} className="transition hover:text-white">
                    {item.shortName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6 lg:col-span-2">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white">Company</h3>
            <ul className="space-y-3.5 text-base">
              {COMPANY_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition hover:text-white">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="pt-4 text-xs font-bold uppercase tracking-[0.2em] text-white">Service areas</h3>
            <ul className="space-y-3.5 text-base">
              {BUSINESS_INFO.serviceAreas.map((area) => (
                <li key={area.slug}>
                  <Link href={`/service-areas/${area.slug}`} className="transition hover:text-white">
                    {area.name}, {area.state}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6 lg:col-span-3">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white">Get in touch</h3>
            <ul className="space-y-6 text-base">
              <li>
                <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="group flex items-start gap-3 transition hover:text-white">
                  <Phone className="mt-1 h-5 w-5 shrink-0 text-brand-red" />
                  <span>
                    <span className="block font-heading text-2xl font-bold text-white">{BUSINESS_INFO.phone}</span>
                    <span className="text-sm">Call or text the owners</span>
                  </span>
                </a>
              </li>
              <li>
                <a href={`mailto:${BUSINESS_INFO.email}`} className="flex items-center gap-3 break-all transition hover:text-white">
                  <Mail className="h-5 w-5 shrink-0 text-brand-red" />
                  {BUSINESS_INFO.email}
                </a>
              </li>
              <li>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(BUSINESS_INFO.address.formatted)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 transition hover:text-white"
                >
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand-red" />
                  <span>
                    {BUSINESS_INFO.address.street}
                    <br />
                    {BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.state} {BUSINESS_INFO.address.zip}
                    <span className="mt-1.5 flex items-center gap-1 text-sm font-semibold text-brand-yellow">
                      Get directions <ArrowUpRight className="h-3.5 w-3.5" />
                    </span>
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Oversized wordmark, outlined in brand orange and stretched to the full container width */}
      <div className="pointer-events-none select-none" aria-hidden>
        <div className="container pb-10 lg:pb-14">
          <svg viewBox="0 0 1000 124" className="h-auto w-full overflow-visible">
            <text
              x="500"
              y="118"
              textAnchor="middle"
              textLength="1000"
              lengthAdjust="spacingAndGlyphs"
              fill="none"
              stroke="#D74E31"
              strokeWidth="1.5"
              vectorEffect="non-scaling-stroke"
              style={{ fontFamily: "var(--font-geologica), sans-serif", fontWeight: 800, fontSize: 159 }}
            >
              PENSACOLA
            </text>
          </svg>
        </div>
      </div>

      <div className="relative border-t border-white/10 bg-brand-black">
        <div className="container flex flex-col items-center justify-between gap-4 pb-28 pt-7 text-sm text-white/45 md:flex-row md:pb-7">
          <p>
            © {new Date().getFullYear()} {BUSINESS_INFO.legalName}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/contact" className="hover:text-white">
              Contact
            </Link>
            <Link href="/sitemap.xml" className="hover:text-white">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
