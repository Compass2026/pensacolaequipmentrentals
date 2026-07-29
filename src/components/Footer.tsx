import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, ShieldCheck, ChevronRight } from "lucide-react";
import { BUSINESS_INFO } from "@/data/business";
import { EQUIPMENT_CATALOG } from "@/data/equipment";

export function Footer() {
  return (
    <footer className="border-t border-brand-surface-border bg-brand-black text-gray-300">
      {/* Upper Footer Banner */}
      <div className="border-b border-brand-blue-dark bg-brand-blue py-10">
        <div className="container flex flex-col items-center justify-between gap-6 md:flex-row">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-brand-yellow">
              Need Reliable Equipment Fast?
            </span>
            <h3 className="font-heading text-2xl font-extrabold text-white md:text-3xl">
              Delivering Mini Excavators, Skid Steers &amp; Trailers Across Pensacola
            </h3>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="flex items-center gap-2 rounded-xl bg-brand-red px-6 py-3 text-base font-extrabold text-white transition hover:bg-brand-black shadow-lg"
            >
              <Phone className="h-5 w-5" />
              <span>Call {BUSINESS_INFO.phone}</span>
            </a>
            <Link
              href="/request-a-quote"
              className="rounded-xl border border-white/30 bg-white/10 px-6 py-3 text-base font-bold text-white transition hover:bg-white hover:text-brand-blue"
            >
              Request Availability
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="container py-16">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Company Profile */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-3">
              <div className="relative h-12 w-12 overflow-hidden rounded-xl border border-brand-blue/30 bg-white p-1">
                <Image
                  src="https://www.bnbcoastalcuts.com/wp-content/uploads/2025/07/Untitled-500-x-500-px.png"
                  alt="Pensacola Equipment Rentals Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="font-heading text-lg font-bold text-white">
                Pensacola Equipment Rentals
              </span>
            </Link>
            <p className="text-xs text-gray-400 leading-relaxed">
              Locally owned and operated father-and-son equipment rental and land-clearing company. Providing dependable machines and fast jobsite delivery for Pensacola contractors and homeowners.
            </p>
            <div className="flex items-center space-x-2 text-xs font-semibold text-brand-red">
              <ShieldCheck className="h-4 w-4" />
              <span>{BUSINESS_INFO.deliveryNote}</span>
            </div>
          </div>

          {/* Column 2: Equipment Links */}
          <div className="space-y-4">
            <h4 className="font-heading text-xs font-extrabold text-white uppercase tracking-wider">
              Equipment Rentals
            </h4>
            <ul className="space-y-2 text-xs">
              {EQUIPMENT_CATALOG.slice(0, 6).map((item) => (
                <li key={item.id}>
                  <Link
                    href={`/equipment/${item.slug}`}
                    className="flex items-center space-x-1.5 transition hover:text-brand-red"
                  >
                    <ChevronRight className="h-3.5 w-3.5 text-brand-red" />
                    <span>{item.shortName}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Service Areas */}
          <div className="space-y-4">
            <h4 className="font-heading text-xs font-extrabold text-white uppercase tracking-wider">
              Service Areas
            </h4>
            <ul className="space-y-2 text-xs">
              {BUSINESS_INFO.serviceAreas.map((area) => (
                <li key={area.slug}>
                  <Link
                    href={`/service-areas/${area.slug}`}
                    className="flex items-center space-x-1.5 transition hover:text-brand-red"
                  >
                    <ChevronRight className="h-3.5 w-3.5 text-brand-red" />
                    <span>{area.name}, FL Equipment Rental</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/land-clearing"
                  className="flex items-center space-x-1.5 transition hover:text-brand-red font-bold text-brand-red"
                >
                  <ChevronRight className="h-3.5 w-3.5" />
                  <span>Land Clearing Services</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Business Hours */}
          <div className="space-y-4">
            <h4 className="font-heading text-xs font-extrabold text-white uppercase tracking-wider">
              Direct Contact
            </h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-brand-red shrink-0 mt-0.5" />
                <span>{BUSINESS_INFO.address.formatted}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-brand-red shrink-0" />
                <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="hover:text-brand-red font-bold text-white">
                  {BUSINESS_INFO.phone}
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-brand-red shrink-0" />
                <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-brand-red">
                  {BUSINESS_INFO.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-brand-surface-border bg-brand-charcoal py-6 text-xs text-gray-400">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <p>© {new Date().getFullYear()} {BUSINESS_INFO.legalName}. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link href="/privacy-policy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/contact" className="hover:text-white">
              Contact Us
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
