import { Metadata } from "next";
import Link from "next/link";
import { EQUIPMENT_CATALOG } from "@/data/equipment";
import { BUSINESS_INFO } from "@/data/business";
import { EquipmentCard } from "@/components/EquipmentCard";
import { QuoteForm } from "@/components/QuoteForm";
import { FaqAccordion } from "@/components/FaqAccordion";
import { MapPin, Truck, Phone, CheckCircle2, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Equipment Rentals Pensacola FL | Mini Excavators, Skid Steers & Trailers",
  description: "Locally owned equipment rentals in Pensacola, FL. Rent 2023 Bobcat excavators, track skid steers, and Iron Bull dump trailers with jobsite delivery across Pensacola.",
};

export default function PensacolaLocationPage() {
  return (
    <div className="space-y-0">
      {/* Header Banner */}
      <section className="border-b border-brand-surface-border bg-gradient-to-b from-brand-black via-brand-charcoal to-brand-black py-16">
        <div className="container max-w-4xl space-y-4 text-center mx-auto">
          <nav className="flex justify-center items-center space-x-2 text-xs text-gray-400">
            <Link href="/" className="hover:text-brand-yellow">Home</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link href="/service-areas" className="hover:text-brand-yellow">Service Areas</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-brand-yellow font-medium">Pensacola, FL</span>
          </nav>

          <h1 className="font-heading text-4xl font-extrabold text-white sm:text-5xl">
            Equipment Rentals &amp; Delivery in Pensacola, FL
          </h1>
          <p className="text-sm text-gray-300 leading-relaxed max-w-2xl mx-auto">
            Dependable mini excavators, track skid loaders, hydraulic dump trailers, and land clearing services delivered directly to Pensacola homes and commercial construction sites.
          </p>
        </div>
      </section>

      {/* Local Intro & Equipment Catalog */}
      <section className="bg-brand-black py-20 border-b border-brand-surface-border">
        <div className="container space-y-12">
          <div className="space-y-4 max-w-3xl">
            <h2 className="font-heading text-3xl font-bold text-white">
              Pensacola Heavy Machinery Rental Fleet
            </h2>
            <p className="text-sm text-gray-300 leading-relaxed">
              Based right here at 7013 Chapel St in Pensacola, FL, Pensacola Equipment Rentals is your local source for reliable machinery. All rates include delivery within 20 miles. Inspect available machines below:
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {EQUIPMENT_CATALOG.slice(0, 6).map((item) => (
              <EquipmentCard key={item.id} equipment={item} />
            ))}
          </div>
        </div>
      </section>

      {/* Local Quote Form */}
      <section className="bg-brand-charcoal py-20">
        <div className="container max-w-3xl space-y-6">
          <div className="text-center space-y-2">
            <h2 className="font-heading text-3xl font-bold text-white">Reserve Equipment in Pensacola</h2>
            <p className="text-xs text-gray-400">Specify your Pensacola address or jobsite location for quick delivery setup.</p>
          </div>
          <div className="rounded-2xl border border-brand-surface-border bg-brand-black p-8">
            <QuoteForm />
          </div>
        </div>
      </section>
    </div>
  );
}
