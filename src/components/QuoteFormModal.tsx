"use client";

import { X } from "lucide-react";
import { QuoteForm } from "./QuoteForm";

interface QuoteFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedEquipment?: string;
}

export function QuoteFormModal({ isOpen, onClose, preselectedEquipment }: QuoteFormModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/80 p-4 backdrop-blur-sm">
      <div className="relative w-full max-w-2xl rounded-2xl border border-brand-surface-border bg-brand-charcoal p-6 shadow-2xl sm:p-8 my-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-lg border border-brand-surface-border bg-brand-surface p-2 text-gray-400 hover:text-white transition"
          aria-label="Close modal"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6 space-y-1">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-yellow">
            Pensacola Equipment Rentals
          </span>
          <h2 className="font-heading text-2xl font-bold text-white sm:text-3xl">
            Request Equipment Availability & Quote
          </h2>
          <p className="text-xs text-gray-400">
            Tell us about your project and delivery location. We&apos;ll confirm equipment schedule promptly.
          </p>
        </div>

        {/* Quote Form */}
        <QuoteForm preselectedEquipment={preselectedEquipment} onSuccess={onClose} />
      </div>
    </div>
  );
}
