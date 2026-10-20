import { Metadata } from "next";
import Link from "next/link";
import { BUSINESS_INFO } from "@/data/business";
import { ServiceAreaMap } from "@/components/ServiceAreaMap";
import { QuoteSection } from "@/components/QuoteSection";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { MapPin, ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Service Areas | Equipment Rental Delivery Near Pensacola FL",
  description: "Pensacola Equipment Rentals delivers mini excavators, skid steers, dump trailers, and mowers to Pensacola, Gulf Breeze, Milton, Navarre, and Panhandle communities.",
};

export default function ServiceAreasPage() {
  return (
    <>
      <PageHero
        eyebrow="Florida Panhandle coverage"
        title={
          <>
            Equipment delivery <span className="text-sun">service areas.</span>
          </>
        }
        description={`We deliver heavy machinery to residential properties and commercial jobsites within ${BUSINESS_INFO.deliveryRadiusMiles} miles of Pensacola — and farther for a custom rate.`}
        breadcrumbs={[{ name: "Home", href: "/" }, { name: "Service Areas" }]}
      />

      <section className="bg-white py-20 lg:py-28">
        <div className="container">
          <div className="grid gap-6 sm:grid-cols-2">
            {BUSINESS_INFO.serviceAreas.map((area, idx) => (
              <Reveal key={area.slug} delay={idx * 90}>
                <Link
                  href={`/service-areas/${area.slug}`}
                  className="group relative flex h-full flex-col justify-between overflow-hidden rounded-[28px] border border-gray-200 bg-white p-8 shadow-card transition duration-500 hover:-translate-y-1 hover:shadow-lift sm:p-10"
                >
                  <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-sun opacity-0 blur-2xl transition duration-500 group-hover:opacity-20" />
                  <div className="relative space-y-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-blue/[0.07] text-brand-blue transition group-hover:bg-brand-blue group-hover:text-white">
                      <MapPin className="h-5 w-5" />
                    </span>
                    <h2 className="display text-3xl text-brand-black sm:text-4xl">
                      {area.name}, {area.state}
                    </h2>
                    <p className="max-w-md text-sm leading-relaxed text-gray-500">
                      Daily, weekly and monthly equipment rentals delivered to {area.name} jobsites — mini excavators, skid
                      steers and dump trailers.
                    </p>
                  </div>
                  <span className="relative mt-8 inline-flex items-center gap-2 text-sm font-bold text-brand-blue group-hover:text-brand-red">
                    Explore {area.name} delivery
                    <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ServiceAreaMap />

      <QuoteSection />
    </>
  );
}
