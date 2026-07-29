import { Metadata } from "next";
import Link from "next/link";
import { EQUIPMENT_CATALOG } from "@/data/equipment";
import { EquipmentCard } from "@/components/EquipmentCard";
import { ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Equipment Rentals Milton FL | Pensacola Equipment Rentals",
  description: "Rent mini excavators, skid steers, and dump trailers delivered to Milton, FL. Fast jobsite drop-off from a local father-and-son team.",
};

export default function MiltonLocationPage() {
  return (
    <div className="space-y-0">
      <section className="border-b border-brand-surface-border bg-gradient-to-b from-brand-black via-brand-charcoal to-brand-black py-16">
        <div className="container max-w-4xl space-y-4 text-center mx-auto">
          <nav className="flex justify-center items-center space-x-2 text-xs text-gray-400">
            <Link href="/" className="hover:text-brand-yellow">Home</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link href="/service-areas" className="hover:text-brand-yellow">Service Areas</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-brand-yellow font-medium">Milton, FL</span>
          </nav>
          <h1 className="font-heading text-4xl font-extrabold text-white sm:text-5xl">
            Equipment Rentals &amp; Delivery in Milton, FL
          </h1>
          <p className="text-sm text-gray-300 max-w-2xl mx-auto">
            Serving Milton builders, agricultural property owners, and DIYers with excavators, skid steers, trailers, and land clearing.
          </p>
        </div>
      </section>

      <section className="bg-brand-black py-20">
        <div className="container space-y-8">
          <h2 className="font-heading text-2xl font-bold text-white">Milton Equipment Catalog</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {EQUIPMENT_CATALOG.slice(0, 3).map((item) => (
              <EquipmentCard key={item.id} equipment={item} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
