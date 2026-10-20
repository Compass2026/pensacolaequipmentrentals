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
      <div className="fixed inset-x-3 bottom-3 z-40 md:hidden">
        <div className="grid grid-cols-[1fr_1fr_1.3fr] gap-1.5 rounded-full border border-white/10 bg-brand-black/90 p-1.5 shadow-2xl backdrop-blur-xl">
          <a
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            className="flex items-center justify-center gap-1.5 rounded-full py-3 text-xs font-bold text-white transition active:scale-95"
          >
            <Phone className="h-4 w-4 text-brand-yellow" />
            Call
          </a>
          <Link
            href="/equipment"
            className="flex items-center justify-center gap-1.5 rounded-full py-3 text-xs font-bold text-white transition active:scale-95"
          >
            <Truck className="h-4 w-4 text-brand-yellow" />
            Fleet
          </Link>
          <button
            onClick={() => setModalOpen(true)}
            className="flex items-center justify-center gap-1.5 rounded-full bg-brand-red py-3 text-xs font-bold text-white shadow-glow-red transition active:scale-95"
          >
            <CalendarCheck className="h-4 w-4" />
            Get a Quote
          </button>
        </div>
      </div>

      <QuoteFormModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
