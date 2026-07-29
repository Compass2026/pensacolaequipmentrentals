import { Metadata } from "next";
import Link from "next/link";
import { BUSINESS_INFO } from "@/data/business";
import { MapPin, Truck, ChevronRight, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Service Areas | Equipment Rental Delivery Near Pensacola FL",
  description: "Pensacola Equipment Rentals delivers mini excavators, skid steers, dump trailers, and mowers to Pensacola, Gulf Breeze, Milton, Navarre, and Panhandle communities.",
};

export default function ServiceAreasPage() {
  return (
    <div className="space-y-0">
      <section className="border-b border-brand-surface-border bg-gradient-to-b from-brand-black via-brand-charcoal to-brand-black py-16">
        <div className="container max-w-3xl space-y-4 text-center mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-yellow">
            Florida Panhandle Coverage
          </span>
          <h1 className="font-heading text-4xl font-extrabold text-white sm:text-5xl">
            Equipment Delivery Service Areas
          </h1>
          <p className="text-sm text-gray-300">
            We deliver heavy machinery directly to residential properties and commercial jobsites within 20 miles of Pensacola, FL.
          </p>
        </div>
      </section>

      <section className="bg-brand-black py-20 border-b border-brand-surface-border">
        <div className="container max-w-5xl space-y-10">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {BUSINESS_INFO.serviceAreas.map((area) => (
              <div key={area.slug} className="rounded-2xl border border-brand-surface-border bg-brand-charcoal p-8 space-y-4 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-brand-yellow">
                    <MapPin className="h-5 w-5" />
                    <span className="text-xs font-bold uppercase tracking-wider">{area.state} Service Hub</span>
                  </div>
                  <h2 className="font-heading text-2xl font-bold text-white">{area.name}, FL Equipment Rental</h2>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    Full daily, weekly, and monthly equipment rental options delivered directly to {area.name} jobsites. Mini excavators, skid steers, and dump trailers.
                  </p>
                </div>
                <Link
                  href={`/service-areas/${area.slug}`}
                  className="inline-flex items-center justify-between rounded-lg bg-brand-surface px-5 py-3 text-xs font-bold text-white hover:border hover:border-brand-yellow hover:text-brand-yellow transition"
                >
                  <span>Explore {area.name} Equipment Delivery</span>
                  <ChevronRight className="h-4 w-4 text-brand-yellow" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
