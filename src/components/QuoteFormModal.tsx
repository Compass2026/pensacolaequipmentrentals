"use client";

import { useEffect } from "react";
import { X, Phone, Truck, Clock, ShieldCheck } from "lucide-react";
import { QuoteForm } from "./QuoteForm";
import { BUSINESS_INFO } from "@/data/business";

interface QuoteFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedEquipment?: string;
}

export function QuoteFormModal({ isOpen, onClose, preselectedEquipment }: QuoteFormModalProps) {
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[70] flex items-start justify-center overflow-y-auto bg-brand-black/70 p-4 backdrop-blur-md sm:items-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby="quote-modal-title"
      onClick={onClose}
    >
      <div
        className="relative my-8 grid w-full max-w-5xl overflow-hidden rounded-[28px] bg-white shadow-2xl lg:grid-cols-12"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 transition hover:rotate-90 hover:text-brand-black"
          aria-label="Close modal"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Info rail */}
        <aside className="relative hidden overflow-hidden bg-hero p-10 text-white lg:col-span-4 lg:block">
          <div className="absolute inset-0 bg-blueprint" />
          <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-sun opacity-30 blur-2xl" />
          <div className="relative space-y-8">
            <span className="eyebrow-light">Fast reply</span>
            <p className="font-heading text-2xl font-bold leading-tight">
              Talk directly with the owners — not a call center.
            </p>
            <ul className="space-y-4 text-sm text-white/75">
              <li className="flex gap-3">
                <Truck className="h-5 w-5 shrink-0 text-brand-yellow" />
                Delivery &amp; pickup within {BUSINESS_INFO.deliveryRadiusMiles} miles
              </li>
              <li className="flex gap-3">
                <Clock className="h-5 w-5 shrink-0 text-brand-yellow" />
                Daily, weekly &amp; monthly rates
              </li>
              <li className="flex gap-3">
                <ShieldCheck className="h-5 w-5 shrink-0 text-brand-yellow" />
                Inspected, job-ready machines
              </li>
            </ul>
            <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="block rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10">
              <span className="block text-[10px] font-bold uppercase tracking-[0.18em] text-white/50">Prefer to call?</span>
              <span className="mt-1 flex items-center gap-2 font-heading text-xl font-bold">
                <Phone className="h-4 w-4 text-brand-yellow" />
                {BUSINESS_INFO.phone}
              </span>
            </a>
          </div>
        </aside>

        <div className="p-6 sm:p-10 lg:col-span-8">
          <div className="mb-8 space-y-2 pr-10">
            <span className="eyebrow">Request availability</span>
            <h2 id="quote-modal-title" className="display text-3xl text-brand-black sm:text-4xl">
              Get your quote
            </h2>
            <p className="text-sm text-gray-500">
              Tell us about your project and delivery location — we&apos;ll confirm the schedule promptly.
            </p>
          </div>
          <QuoteForm preselectedEquipment={preselectedEquipment} onSuccess={onClose} />
        </div>
      </div>
    </div>
  );
}
