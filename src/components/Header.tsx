"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Phone, MapPin, Menu, X, ChevronDown, ArrowRight, ArrowUpRight } from "lucide-react";
import { BUSINESS_INFO } from "@/data/business";
import { EQUIPMENT_CATALOG } from "@/data/equipment";
import { QuoteFormModal } from "./QuoteFormModal";

const NAV_LINKS = [
  { name: "Equipment", href: "/equipment", mega: true },
  { name: "Land Clearing", href: "/land-clearing" },
  { name: "Service Areas", href: "/service-areas" },
  { name: "About", href: "/about" },
  { name: "Reviews", href: "/reviews" },
  { name: "Contact", href: "/contact" },
];

function startingRate(daily?: number) {
  return daily ? `From $${daily}/day` : "Call for rates";
}

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
  }, [mobileMenuOpen]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <>
      {/* Announcement bar */}
      <div className="relative z-50 bg-brand-navy text-white">
        <div className="container flex h-10 items-center justify-between gap-6 text-xs">
          <Link href="/land-clearing" className="group flex min-w-0 items-center gap-2.5 font-medium text-white/80 transition hover:text-white">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-brand-red" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-red" />
            </span>
            <span className="truncate">
              <span className="hidden sm:inline">Need someone to handle your </span>
              <span className="font-extrabold uppercase tracking-wide text-brand-red animate-attention">Land Clearing Project?</span>{" "}
              We&apos;ve got you covered.
            </span>
            <ArrowRight className="hidden h-3.5 w-3.5 shrink-0 transition group-hover:translate-x-0.5 sm:block" />
          </Link>
          <div className="hidden items-center gap-6 text-white/70 md:flex">
            <span className="flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5 text-brand-yellow" />
              {BUSINESS_INFO.address.formatted}
            </span>
            <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="flex items-center gap-1.5 font-bold text-white transition hover:text-brand-yellow">
              <Phone className="h-3.5 w-3.5 text-brand-yellow" />
              {BUSINESS_INFO.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <header
        className={`sticky top-0 z-40 w-full border-b transition-all duration-300 ${
          scrolled ? "border-gray-200/80 bg-white/95 shadow-[0_8px_30px_-12px_rgba(17,24,39,0.18)] backdrop-blur-xl" : "border-transparent bg-white"
        }`}
      >
        <div className={`container flex items-center justify-between gap-6 transition-all duration-300 ${scrolled ? "h-[72px] lg:h-[84px]" : "h-[88px] lg:h-[112px]"}`}>
          <Link href="/" className="flex shrink-0 items-center" aria-label="Pensacola Equipment Rentals home">
            <Image
              src="/brand/logo.png"
              alt="Pensacola Equipment Rentals Logo"
              width={394}
              height={290}
              priority
              className={`w-auto transition-all duration-300 ${scrolled ? "h-14 lg:h-[68px]" : "h-[68px] lg:h-[92px]"}`}
            />
          </Link>

          {/* Desktop nav */}
          <nav className="relative hidden items-center gap-1 lg:flex" aria-label="Primary">
            {NAV_LINKS.map((link) =>
              link.mega ? (
                <div key={link.name} className="group">
                  <Link
                    href={link.href}
                    className={`flex items-center gap-1 rounded-full px-4 py-2 text-sm font-semibold transition ${
                      isActive(link.href) ? "text-brand-red" : "text-brand-black hover:text-brand-red"
                    }`}
                  >
                    {link.name}
                    <ChevronDown className="h-3.5 w-3.5 transition group-hover:rotate-180" />
                  </Link>

                  {/* Equipment mega menu */}
                  <div className="invisible absolute left-1/2 top-full w-[860px] max-w-[calc(100vw-2rem)] -translate-x-1/2 pt-4 opacity-0 transition-all duration-200 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                    <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lift">
                      <div className="grid grid-cols-3 gap-1 p-3">
                        {EQUIPMENT_CATALOG.map((item) => (
                          <Link
                            key={item.id}
                            href={`/equipment/${item.slug}`}
                            className="group/item flex items-center gap-3 rounded-2xl p-2.5 transition hover:bg-gray-50"
                          >
                            <div className="relative h-14 w-16 shrink-0 overflow-hidden rounded-xl bg-gradient-to-br from-gray-100 to-gray-50">
                              <Image src={item.primaryImage} alt="" fill sizes="64px" className="object-contain p-1 transition group-hover/item:scale-110" />
                            </div>
                            <div className="min-w-0">
                              <div className="truncate text-sm font-bold text-brand-black group-hover/item:text-brand-red">{item.shortName}</div>
                              <div className="text-xs text-gray-500">{startingRate(item.rates.daily)}</div>
                            </div>
                          </Link>
                        ))}
                        <Link
                          href="/equipment"
                          className="flex items-center justify-between rounded-2xl bg-brand-navy p-4 text-white transition hover:bg-brand-blue"
                        >
                          <div>
                            <div className="text-sm font-bold">Full fleet</div>
                            <div className="text-xs text-white/60">Rates &amp; specs</div>
                          </div>
                          <ArrowUpRight className="h-5 w-5 text-brand-yellow" />
                        </Link>
                      </div>
                      <div className="flex items-center justify-between border-t border-gray-100 bg-gray-50 px-6 py-3 text-xs text-gray-600">
                        <span>Delivery &amp; pickup included within {BUSINESS_INFO.deliveryRadiusMiles} miles of Pensacola</span>
                        <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="font-bold text-brand-blue hover:text-brand-red">
                          {BUSINESS_INFO.phone}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative rounded-full px-4 py-2 text-sm font-semibold transition ${
                    isActive(link.href) ? "text-brand-red" : "text-brand-black hover:text-brand-red"
                  }`}
                >
                  {link.name}
                </Link>
              )
            )}
          </nav>

          {/* Desktop actions */}
          <div className="hidden items-center gap-5 lg:flex">
            <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="group hidden items-center gap-3 xl:flex">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue transition group-hover:bg-brand-blue group-hover:text-white">
                <Phone className="h-4 w-4" />
              </span>
              <span className="leading-tight">
                <span className="block text-[10px] font-bold uppercase tracking-[0.16em] text-gray-400">Call or text</span>
                <span className="block text-sm font-extrabold text-brand-black">{BUSINESS_INFO.phone}</span>
              </span>
            </a>
            <button onClick={() => setQuoteModalOpen(true)} className="btn-primary !px-6 !py-3">
              Get a Quote
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          {/* Mobile actions */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-red text-white shadow-glow-red"
              aria-label={`Call ${BUSINESS_INFO.phone}`}
            >
              <Phone className="h-4 w-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-brand-black"
              aria-label="Open navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile navigation drawer */}
      <div
        className={`fixed inset-0 z-[60] lg:hidden ${mobileMenuOpen ? "pointer-events-auto" : "pointer-events-none"}`}
        aria-hidden={!mobileMenuOpen}
      >
        <div
          className={`absolute inset-0 bg-brand-black/60 backdrop-blur-sm transition-opacity duration-300 ${mobileMenuOpen ? "opacity-100" : "opacity-0"}`}
          onClick={() => setMobileMenuOpen(false)}
        />
        <div
          className={`absolute inset-y-0 right-0 flex w-full max-w-sm flex-col bg-hero text-white shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
            <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-yellow">Menu</span>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white"
              aria-label="Close navigation menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <nav className="flex-1 overflow-y-auto px-6 py-6" aria-label="Mobile">
            <Link href="/" className="flex items-center justify-between border-b border-white/10 py-4 font-heading text-2xl font-bold">
              Home
              <ArrowUpRight className="h-5 w-5 text-white/30" />
            </Link>
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`flex items-center justify-between border-b border-white/10 py-4 font-heading text-2xl font-bold transition ${
                  isActive(link.href) ? "text-brand-yellow" : "text-white"
                }`}
              >
                {link.name}
                <ArrowUpRight className="h-5 w-5 text-white/30" />
              </Link>
            ))}
          </nav>
          <div className="space-y-3 border-t border-white/10 p-6">
            <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="btn-outline-light w-full">
              <Phone className="h-4 w-4" />
              Call {BUSINESS_INFO.phone}
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setQuoteModalOpen(true);
              }}
              className="btn-primary w-full"
            >
              Get a Quote
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      <QuoteFormModal isOpen={quoteModalOpen} onClose={() => setQuoteModalOpen(false)} />
    </>
  );
}
