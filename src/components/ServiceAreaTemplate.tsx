import { EQUIPMENT_CATALOG } from "@/data/equipment";
import { BUSINESS_INFO } from "@/data/business";
import { EquipmentCard } from "./EquipmentCard";
import { ServiceAreaMap } from "./ServiceAreaMap";
import { QuoteSection } from "./QuoteSection";
import { PageHero } from "./ui/PageHero";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";
import { ArrowRight, Phone } from "lucide-react";

interface ServiceAreaTemplateProps {
  city: string;
  description: string;
  catalogTitle: string;
  catalogIntro: string;
  equipmentCount?: number;
}

/** Shared layout for the individual /service-areas/[city] landing pages. */
export function ServiceAreaTemplate({ city, description, catalogTitle, catalogIntro, equipmentCount = 3 }: ServiceAreaTemplateProps) {
  return (
    <>
      <PageHero
        eyebrow={`${city}, FL service area`}
        title={
          <>
            Equipment rentals &amp; delivery in <span className="text-sun">{city}, FL.</span>
          </>
        }
        description={description}
        breadcrumbs={[{ name: "Home", href: "/" }, { name: "Service Areas", href: "/service-areas" }, { name: `${city}, FL` }]}
        image={{
          src: "https://www.bnbcoastalcuts.com/wp-content/uploads/2025/05/Untitled-design-4.png",
          alt: `Iron Bull dump trailer delivered to ${city}, FL`,
        }}
      >
        <a href="#quote-section" className="btn-primary">
          Reserve in {city}
          <ArrowRight className="h-4 w-4" />
        </a>
        <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="btn-outline-light">
          <Phone className="h-4 w-4" />
          {BUSINESS_INFO.phone}
        </a>
      </PageHero>

      <section className="bg-slate-50 py-20 lg:py-28">
        <div className="container space-y-14">
          <SectionHeading eyebrow={`Serving ${city}`} title={catalogTitle} description={catalogIntro} />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {EQUIPMENT_CATALOG.slice(0, equipmentCount).map((item, idx) => (
              <Reveal key={item.id} delay={idx * 90} className="h-full">
                <EquipmentCard equipment={item} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ServiceAreaMap />

      <QuoteSection
        eyebrow={`${city} deliveries`}
        title={`Reserve equipment in ${city}.`}
        description={`Share your ${city} address or jobsite location and we'll set up delivery.`}
      />
    </>
  );
}
