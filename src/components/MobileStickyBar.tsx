"use client";

import { useState } from "react";
import Link from "next/link";
import { Phone, Truck, CalendarCheck } from "lucide-react";
import { BUSINESS_INFO } from "@/data/business";
import { QuoteFormModal } from "./QuoteFormModal";

export function MobileStickyBar() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-brand-surface-border bg-brand-black/95 p-2 backdrop-blur-md md:hidden">
        <div className="grid grid-cols-3 gap-2">
          {/* Call Action */}
          <a
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            className="flex flex-col items-center justify-center rounded-xl bg-brand-blue py-2 text-white border border-brand-blue-dark active:scale-95 transition shadow"
          >
            <Phone className="h-4 w-4 text-brand-yellow" />
            <span className="text-[11px] font-bold mt-1">Call Us</span>
          </a>

          {/* Equipment Catalog Action */}
          <Link
            href="/equipment"
            className="flex flex-col items-center justify-center rounded-xl bg-brand-charcoal py-2 text-white border border-brand-surface-border active:scale-95 transition"
          >
            <Truck className="h-4 w-4 text-brand-red" />
            <span className="text-[11px] font-bold mt-1">Equipment</span>
          </Link>

          {/* Quote Action */}
          <button
            onClick={() => setModalOpen(true)}
            className="flex flex-col items-center justify-center rounded-xl bg-brand-red py-2 text-white active:scale-95 transition shadow"
          >
            <CalendarCheck className="h-4 w-4 text-white" />
            <span className="text-[11px] font-extrabold mt-1">Get Quote</span>
          </button>
        </div>
      </div>

      <QuoteFormModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
