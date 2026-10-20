import { Metadata } from "next";
import { EquipmentGrid } from "@/components/EquipmentGrid";
import { TrustBar } from "@/components/TrustBar";
import { FaqAccordion } from "@/components/FaqAccordion";
import { HowItWorks } from "@/components/HowItWorks";
import { PageHero } from "@/components/ui/PageHero";
import { ArrowRight, Phone } from "lucide-react";
import { BUSINESS_INFO } from "@/data/business";

export const metadata: Metadata = {
  title: "Equipment Rentals Catalog | Mini Excavators, Skid Steers, Trailers & Mowers",
  description: "Browse Pensacola Equipment Rentals complete catalog of 2022-2023 Bobcat excavators, skid loaders, Iron Bull dump trailers, and Gravely mowers. Daily, weekly & monthly rates with delivery.",
};

export default function EquipmentPage() {
  return (
    <>
      <PageHero
        eyebrow="Delivered direct to your jobsite"
        title={
          <>
            Heavy equipment &amp; tool <span className="text-sun">rentals.</span>
          </>
        }
        description="From 2023 Bobcat mini excavators to enclosed-cab track loaders, 14-foot dump trailers and commercial mowers — with transparent daily, weekly and monthly rates."
        breadcrumbs={[{ name: "Home", href: "/" }, { name: "Equipment" }]}
        image={{
          src: "https://www.bnbcoastalcuts.com/wp-content/uploads/2025/05/Pensacola-Equipment-1-2.png",
          alt: "Bobcat T66 track loader available for rent in Pensacola",
        }}
      >
        <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="btn-primary">
          <Phone className="h-4 w-4" />
          Reserve: {BUSINESS_INFO.phone}
        </a>
        <a href="#fleet" className="btn-outline-light">
          See rates
          <ArrowRight className="h-4 w-4" />
        </a>
      </PageHero>

      <section id="fleet" className="bg-slate-50 py-20 lg:py-28">
        <div className="container">
          <EquipmentGrid />
        </div>
      </section>

      <TrustBar />

      <HowItWorks />

      <FaqAccordion
        title="Equipment rental FAQs"
        subtitle="Common questions about machine specs, bucket attachments, and pickup/delivery terms."
      />
    </>
  );
}
