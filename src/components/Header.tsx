"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin, Menu, X, ChevronRight, ArrowRight } from "lucide-react";
import { BUSINESS_INFO } from "@/data/business";
import { QuoteFormModal } from "./QuoteFormModal";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Equipment", href: "/equipment" },
    { name: "Land Clearing", href: "/land-clearing" },
    { name: "Locations", href: "/service-areas" },
  ];

  return (
    <>
      <header className="sticky top-0 z-40 w-full shadow-md">
        {/* Top Info Bar matching live www.bnbcoastalcuts.com screenshot (#1F2D42 Navy Blue Bar) */}
        <div className="bg-[#1F2D42] py-2 text-xs font-semibold text-white">
          <div className="container flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="flex items-center gap-1.5 font-bold text-white transition hover:text-brand-yellow"
              >
                <Phone className="h-3.5 w-3.5 fill-white text-white" />
                <span>{BUSINESS_INFO.phone}</span>
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-3.5 w-3.5 text-white" />
              <span>7013 chapel st, Pensacola, FL United States, 32504</span>
            </div>
          </div>
        </div>

        {/* Main Header Navigation Bar (#FFFFFF Pure White Background matching screenshot) */}
        <div className="bg-white py-2 border-b border-gray-200 overflow-visible">
          <div className="container flex items-center justify-between">
            {/* Pensacola Equipment Logo (2.5x Larger) */}
            <Link href="/" className="flex items-center shrink-0 py-1">
              <Image
                src="https://www.bnbcoastalcuts.com/wp-content/uploads/2025/07/Untitled-500-x-500-px.png"
                alt="Pensacola Equipment Rentals Logo"
                width={260}
                height={100}
                className="h-20 sm:h-24 w-auto object-contain drop-shadow-md transition-transform duration-300 hover:scale-105"
                priority
              />
            </Link>

            {/* Desktop Nav Links separated by '|' matching exact screenshot */}
            <nav className="hidden items-center space-x-3 lg:flex">
              {navLinks.map((link, idx) => (
                <div key={link.name} className="flex items-center space-x-3">
                  <Link
                    href={link.href}
                    className="text-sm font-extrabold text-gray-900 transition hover:text-[#D74E31]"
                  >
                    {link.name}
                  </Link>
                  {idx < navLinks.length - 1 && (
                    <span className="text-gray-400 font-normal">|</span>
                  )}
                </div>
              ))}
            </nav>

            {/* Right Contact Us Coral Red Pill Button matching exact screenshot */}
            <div className="hidden items-center space-x-4 sm:flex">
              <button
                onClick={() => setQuoteModalOpen(true)}
                className="flex items-center gap-2 rounded-full bg-[#D74E31] px-6 py-2.5 text-sm font-bold text-white transition hover:bg-[#185BA6] shadow-md"
              >
                <span>Contact Us</span>
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/20 text-xs">
                  ›
                </span>
              </button>
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="flex items-center space-x-2 lg:hidden">
              <button
                onClick={() => setQuoteModalOpen(true)}
                className="rounded-full bg-[#D74E31] px-4 py-1.5 text-xs font-bold text-white sm:hidden"
              >
                Contact Us
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="rounded-lg border border-gray-300 bg-gray-100 p-2 text-gray-800"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="h-6 w-6 text-[#D74E31]" /> : <Menu className="h-6 w-6 text-gray-800" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="border-b border-gray-200 bg-white py-4 shadow-xl lg:hidden sticky top-[108px] z-30">
          <div className="container flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between border-b border-gray-100 py-2.5 text-base font-bold text-gray-900 transition hover:text-[#D74E31]"
              >
                <span>{link.name}</span>
                <ChevronRight className="h-4 w-4 text-[#D74E31]" />
              </Link>
            ))}
            <div className="pt-2 flex flex-col space-y-2">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="flex items-center justify-center gap-2 rounded-xl border border-[#185BA6] bg-[#185BA6]/10 py-3 font-bold text-[#185BA6]"
              >
                <Phone className="h-4 w-4" />
                <span>Call {BUSINESS_INFO.phone}</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setQuoteModalOpen(true);
                }}
                className="flex items-center justify-center gap-2 rounded-full bg-[#D74E31] py-3 font-bold text-white shadow-md"
              >
                <span>Contact Us</span>
                <span>›</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Quote Form Modal */}
      <QuoteFormModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
      />
    </>
  );
}
