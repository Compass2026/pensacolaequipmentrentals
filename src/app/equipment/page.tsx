import { Metadata } from "next";
import { EQUIPMENT_CATALOG } from "@/data/equipment";
import { EquipmentCard } from "@/components/EquipmentCard";
import { TrustBar } from "@/components/TrustBar";
import { FaqAccordion } from "@/components/FaqAccordion";
import { Truck, Phone } from "lucide-react";
import { BUSINESS_INFO } from "@/data/business";

export const metadata: Metadata = {
  title: "Equipment Rentals Catalog | Mini Excavators, Skid Steers, Trailers & Mowers",
  description: "Browse Pensacola Equipment Rentals complete catalog of 2022-2023 Bobcat excavators, skid loaders, Iron Bull dump trailers, and Gravely mowers. Daily, weekly & monthly rates with delivery.",
};

export default function EquipmentPage() {
  return (
    <div className="space-y-0">
      {/* Header Banner */}
      <section className="border-b border-brand-surface-border bg-gradient-to-b from-brand-black via-brand-charcoal to-brand-black py-16">
        <div className="container space-y-4 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-yellow/30 bg-brand-yellow/10 px-4 py-1 text-xs font-bold text-brand-yellow">
            <Truck className="h-4 w-4" />
            <span>Delivered Direct To Your Pensacola Jobsite</span>
          </div>
          <h1 className="font-heading text-4xl font-extrabold text-white sm:text-5xl">
            Heavy Equipment &amp; Tool Rental Catalog
          </h1>
          <p className="text-sm text-gray-300 leading-relaxed">
            From 2023 Bobcat E26 mini excavators to enclosed-cab track skid steers, 14-foot dump trailers, and commercial mowers. Inspect our transparent daily, weekly, and monthly rates below.
          </p>
          <div className="pt-2">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="inline-flex items-center gap-2 rounded-lg bg-brand-yellow px-5 py-2.5 text-sm font-bold text-brand-black transition hover:bg-brand-yellow-dark"
            >
              <Phone className="h-4 w-4" />
              <span>Call For Immediate Reservation: {BUSINESS_INFO.phone}</span>
            </a>
          </div>
        </div>
      </section>

      {/* Equipment Grid */}
      <section className="bg-brand-black py-20 border-b border-brand-surface-border">
        <div className="container space-y-8">
          <div className="flex items-center justify-between border-b border-brand-surface-border pb-4">
            <h2 className="font-heading text-xl font-bold text-white">
              Available Machines ({EQUIPMENT_CATALOG.length})
            </h2>
            <span className="text-xs text-gray-400">
              Includes drop-off &amp; pickup within 20 miles of Pensacola
            </span>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {EQUIPMENT_CATALOG.map((item) => (
              <EquipmentCard key={item.id} equipment={item} />
            ))}
          </div>
        </div>
      </section>

      <TrustBar />

      <FaqAccordion
        title="Equipment Rental FAQs"
        subtitle="Common questions about machine specs, bucket attachments, and pickup/delivery terms."
      />
    </div>
  );
}
