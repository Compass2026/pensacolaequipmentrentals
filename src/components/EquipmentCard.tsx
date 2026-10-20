"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { EquipmentItem } from "@/data/equipment";
import { Check, ArrowUpRight, CalendarCheck } from "lucide-react";
import { QuoteFormModal } from "./QuoteFormModal";

interface EquipmentCardProps {
  equipment: EquipmentItem;
}

const money = (n: number) => `$${n.toLocaleString("en-US")}`;

export function EquipmentCard({ equipment }: EquipmentCardProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const { rates } = equipment;

  return (
    <>
      <article className="group relative flex h-full flex-col overflow-hidden rounded-[28px] border border-gray-200/80 bg-white shadow-card transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift">
        {/* Media */}
        <Link
          href={`/equipment/${equipment.slug}`}
          className="relative block aspect-[4/3] overflow-hidden bg-gradient-to-b from-slate-100 to-white"
          aria-label={`View ${equipment.name}`}
        >
          <div className="absolute left-1/2 top-[58%] h-[70%] aspect-square -translate-x-1/2 -translate-y-1/2 rounded-full bg-sun opacity-[0.12] transition-all duration-700 group-hover:scale-110 group-hover:opacity-25" />
          <div className="absolute inset-x-8 bottom-6 h-4 rounded-[50%] bg-brand-black/10 blur-md" />
          <Image
            src={equipment.primaryImage}
            alt={equipment.imageAltText}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
            className="object-contain p-3 transition-transform duration-700 ease-out group-hover:scale-[1.06]"
          />
          <span className="absolute left-4 top-4 rounded-full border border-white/60 bg-white/80 px-3 py-1 text-[11px] font-bold text-brand-navy backdrop-blur">
            {equipment.category}
          </span>
          <span className="absolute right-4 top-4 flex items-center gap-1.5 rounded-full bg-brand-black/80 px-3 py-1 text-[11px] font-semibold text-white backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            {equipment.availabilityLabel}
          </span>
        </Link>

        {/* Body */}
        <div className="flex flex-1 flex-col p-6">
          <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-gray-400">
            {equipment.year ? `${equipment.year} · ` : ""}
            {equipment.brand}
          </span>
          <h3 className="mt-1.5 font-heading text-xl font-bold leading-snug text-brand-black transition group-hover:text-brand-red">
            <Link href={`/equipment/${equipment.slug}`}>{equipment.shortName}</Link>
          </h3>
          <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-gray-500">{equipment.shortDescription}</p>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {equipment.attachments.slice(0, 3).map((att) => (
              <span
                key={att.name}
                className="inline-flex items-center gap-1 rounded-full bg-gray-100 px-2.5 py-1 text-[11px] font-medium text-gray-600"
              >
                <Check className="h-3 w-3 text-brand-red" />
                {att.name}
              </span>
            ))}
          </div>

          <div className="mt-auto pt-6">
            <div className="flex items-end justify-between border-t border-dashed border-gray-200 pt-5">
              {rates.daily ? (
                <div>
                  <span className="block text-[10px] font-bold uppercase tracking-[0.18em] text-gray-400">From</span>
                  <span className="font-heading text-3xl font-extrabold tracking-tight text-brand-black">
                    {money(rates.daily)}
                    <span className="text-sm font-medium text-gray-400">/day</span>
                  </span>
                </div>
              ) : (
                <div>
                  <span className="block text-[10px] font-bold uppercase tracking-[0.18em] text-gray-400">Pricing</span>
                  <span className="font-heading text-xl font-bold text-brand-black">Call or text</span>
                </div>
              )}
              {(rates.weekly || rates.monthly) && (
                <div className="space-y-0.5 text-right text-xs text-gray-500">
                  {rates.weekly && (
                    <div>
                      <span className="font-bold text-brand-blue">{money(rates.weekly)}</span> / week
                    </div>
                  )}
                  {rates.monthly && (
                    <div>
                      <span className="font-bold text-brand-blue">{money(rates.monthly)}</span> / month
                    </div>
                  )}
                </div>
              )}
            </div>

            <div className="mt-5 grid grid-cols-2 gap-2">
              <Link
                href={`/equipment/${equipment.slug}`}
                className="inline-flex items-center justify-center gap-1.5 rounded-full border border-gray-200 py-3 text-xs font-bold text-brand-black transition hover:border-brand-black hover:bg-brand-black hover:text-white"
              >
                Details
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
              <button
                onClick={() => setModalOpen(true)}
                className="inline-flex items-center justify-center gap-1.5 rounded-full bg-brand-red py-3 text-xs font-bold text-white transition hover:bg-brand-red-dark"
              >
                <CalendarCheck className="h-3.5 w-3.5" />
                Reserve
              </button>
            </div>
          </div>
        </div>
      </article>

      <QuoteFormModal isOpen={modalOpen} onClose={() => setModalOpen(false)} preselectedEquipment={equipment.name} />
    </>
  );
}
