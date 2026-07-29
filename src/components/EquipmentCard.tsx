"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { EquipmentItem } from "@/data/equipment";
import { Truck, Check, ArrowRight, CalendarCheck } from "lucide-react";
import { QuoteFormModal } from "./QuoteFormModal";

interface EquipmentCardProps {
  equipment: EquipmentItem;
}

export function EquipmentCard({ equipment }: EquipmentCardProps) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-gray-200 bg-white transition hover:border-[#185BA6] hover:shadow-2xl">
        <div>
          {/* Card Image Header */}
          <div className="relative h-64 w-full bg-slate-100 overflow-hidden">
            <Image
              src={equipment.primaryImage}
              alt={equipment.imageAltText}
              fill
              className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
            />
            {/* Category Tag */}
            <div className="absolute top-3 left-3 rounded-lg bg-[#185BA6] px-3 py-1 text-xs font-bold text-white shadow">
              {equipment.category}
            </div>
            {/* Availability Badge */}
            <div className="absolute top-3 right-3 rounded-lg bg-emerald-600 px-3 py-1 text-xs font-bold text-white shadow">
              {equipment.availabilityLabel}
            </div>
          </div>

          {/* Card Body */}
          <div className="p-6 space-y-4">
            <div className="space-y-1">
              <h3 className="font-heading text-xl font-extrabold text-gray-900 group-hover:text-[#D74E31] transition">
                <Link href={`/equipment/${equipment.slug}`}>{equipment.name}</Link>
              </h3>
              <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed">
                {equipment.shortDescription}
              </p>
            </div>

            {/* Pricing Summary */}
            <div className="rounded-xl border border-gray-200 bg-slate-50 p-3 space-y-1.5">
              <div className="flex items-center justify-between text-xs text-gray-500 font-medium">
                <span>Daily Rate</span>
                <span>Weekly Rate</span>
                <span>Monthly Rate</span>
              </div>
              <div className="flex items-center justify-between font-heading font-extrabold text-gray-900 text-base">
                <span className="text-[#D74E31]">
                  {equipment.rates.daily ? `$${equipment.rates.daily}` : "Call/Text"}
                </span>
                <span className="text-[#185BA6]">
                  {equipment.rates.weekly ? `$${equipment.rates.weekly}` : "Call"}
                </span>
                <span className="text-gray-700">
                  {equipment.rates.monthly ? `$${equipment.rates.monthly}` : "Call"}
                </span>
              </div>
            </div>

            {/* Included Spec Badges */}
            <div className="space-y-1">
              <span className="text-[11px] font-bold uppercase tracking-wider text-gray-500">
                Key Attachments / Features:
              </span>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {equipment.attachments.slice(0, 3).map((att) => (
                  <span
                    key={att.name}
                    className="inline-flex items-center gap-1 rounded-md bg-slate-100 px-2.5 py-1 text-[11px] font-semibold text-gray-700 border border-gray-200"
                  >
                    <Check className="h-3 w-3 text-[#D74E31] shrink-0" />
                    <span>{att.name}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Delivery Note */}
            <div className="flex items-center gap-2 text-xs text-gray-500 pt-1 border-t border-gray-100">
              <Truck className="h-4 w-4 text-[#185BA6] shrink-0" />
              <span className="truncate">{equipment.deliveryInfo}</span>
            </div>
          </div>
        </div>

        {/* Card Footer Actions */}
        <div className="grid grid-cols-2 gap-2 p-6 pt-0">
          <Link
            href={`/equipment/${equipment.slug}`}
            className="flex items-center justify-center gap-1.5 rounded-xl border border-gray-300 bg-white py-2.5 text-xs font-bold text-gray-800 transition hover:border-[#D74E31] hover:text-[#D74E31]"
          >
            <span>View Details</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
          <button
            onClick={() => setModalOpen(true)}
            className="flex items-center justify-center gap-1.5 rounded-xl bg-[#D74E31] py-2.5 text-xs font-extrabold text-white transition hover:bg-[#185BA6] shadow"
          >
            <CalendarCheck className="h-3.5 w-3.5 text-white" />
            <span>Check Availability</span>
          </button>
        </div>
      </div>

      {/* Quote Form Modal */}
      <QuoteFormModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        preselectedEquipment={equipment.name}
      />
    </>
  );
}
