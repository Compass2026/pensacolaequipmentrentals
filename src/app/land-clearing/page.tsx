import { Metadata } from "next";
import Image from "next/image";
import { BUSINESS_INFO } from "@/data/business";
import { QuoteSection } from "@/components/QuoteSection";
import { FaqAccordion } from "@/components/FaqAccordion";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Phone, ArrowRight, TreePine, Tractor, Shovel, Ruler, ClipboardCheck, Users, Truck } from "lucide-react";

export const metadata: Metadata = {
  title: "Professional Land Clearing Services Pensacola FL | Pensacola Equipment Rentals",
  description: "Need lot clearing, brush removal, or stump excavation in Pensacola, Gulf Breeze, Milton, or Navarre? Hire our local father-and-son land clearing team for free estimates.",
};

const SERVICES = [
  {
    icon: TreePine,
    title: "Brush & vegetation removal",
    description: "Clearing thick underbrush, palmettos, vines and overgrown vegetation to reclaim your property lines.",
  },
  {
    icon: Tractor,
    title: "Lot & site preparation",
    description: "Clearing trees and debris to prepare residential building lots, driveways, sheds and commercial sites.",
  },
  {
    icon: Shovel,
    title: "Stump & root excavation",
    description: "Bobcat excavators with hydraulic thumbs pull large stumps, heavy roots and buried debris.",
  },
  {
    icon: Ruler,
    title: "Yard leveling & rough grading",
    description: "Grading uneven terrain, spreading topsoil and eliminating drainage low spots.",
  },
];

const PROMISES = [
  { icon: ClipboardCheck, title: "Free on-site estimates", text: "We walk the property with you and quote the job up front." },
  { icon: Users, title: "Owner-operated crew", text: "The same father-and-son team that maintains our fleet runs your job." },
  { icon: Truck, title: "Our own equipment", text: "No subcontracting — we bring our own excavators and track loaders." },
];

export default function LandClearingPage() {
  return (
    <>
      <PageHero
        eyebrow="Full-service land & brush clearing"
        title={
          <>
            Professional land clearing in <span className="text-sun">Pensacola.</span>
          </>
        }
        description="Don't want to operate heavy machinery yourself? Hire our father-and-son crew to handle brush removal, tree clearing, stump digging and lot prep."
        breadcrumbs={[{ name: "Home", href: "/" }, { name: "Land Clearing" }]}
        image={{
          src: "https://www.bnbcoastalcuts.com/wp-content/uploads/2025/05/Untitled-1000-x-1000-px.png",
          alt: "Bobcat mini excavator used for land clearing in Pensacola",
        }}
      >
        <a href="#quote-section" className="btn-primary">
          Get a free estimate
          <ArrowRight className="h-4 w-4" />
        </a>
        <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="btn-outline-light">
          <Phone className="h-4 w-4" />
          {BUSINESS_INFO.phone}
        </a>
      </PageHero>

      {/* Services */}
      <section className="bg-white py-24 lg:py-32">
        <div className="container space-y-16">
          <SectionHeading
            eyebrow="What we do"
            title="Complete property clearing, start to finish."
            description="From a single overgrown backyard to multi-acre lots, we handle the heavy work so you don't have to."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((s, idx) => {
              const Icon = s.icon;
              return (
                <Reveal key={s.title} delay={idx * 90}>
                  <div className="group h-full rounded-[28px] border border-gray-200 bg-white p-8 shadow-card transition duration-500 hover:-translate-y-1 hover:border-brand-red/30 hover:shadow-lift">
                    <span className="font-heading text-sm font-bold text-gray-300">0{idx + 1}</span>
                    <div className="mt-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-red/10 text-brand-red transition group-hover:bg-brand-red group-hover:text-white">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-6 font-heading text-xl font-bold text-brand-black">{s.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-gray-500">{s.description}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Proof / photo band */}
      <section className="bg-slate-50 py-24 lg:py-32">
        <div className="container">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <Reveal className="grid grid-cols-2 gap-4">
              <div className="relative aspect-[3/4] overflow-hidden rounded-[28px] shadow-lift">
                <Image
                  src="https://www.bnbcoastalcuts.com/wp-content/uploads/2025/05/pensacola1.jpg"
                  alt="Mini excavator and track loader clearing a lot near Pensacola"
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="relative mt-12 aspect-[3/4] overflow-hidden rounded-[28px] shadow-lift">
                <Image
                  src="https://www.bnbcoastalcuts.com/wp-content/uploads/2025/05/pensacola2.jpg"
                  alt="Track loader grading cleared land in Pensacola"
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
            <div className="space-y-10">
              <SectionHeading
                eyebrow="Why hire us"
                title={
                  <>
                    Local crew. <span className="text-brand-blue">Our own iron.</span>
                  </>
                }
                description="We clear land across Pensacola, Gulf Breeze, Milton and Navarre with the same well-kept machines we rent out every day."
              />
              <div className="space-y-4">
                {PROMISES.map((p, idx) => {
                  const Icon = p.icon;
                  return (
                    <Reveal key={p.title} delay={idx * 90}>
                      <div className="flex items-start gap-5 rounded-2xl border border-gray-200 bg-white p-5 shadow-card">
                        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-blue/[0.07] text-brand-blue">
                          <Icon className="h-5 w-5" />
                        </span>
                        <div>
                          <h3 className="font-heading font-bold text-brand-black">{p.title}</h3>
                          <p className="mt-1 text-sm text-gray-500">{p.text}</p>
                        </div>
                      </div>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <QuoteSection
        eyebrow="Free on-site quotes"
        title="Request a land clearing estimate."
        description="Tell us about your acreage, tree density and location in Pensacola or the surrounding towns."
        preselectedEquipment="Land Clearing Service"
      />

      <FaqAccordion
        title="Land clearing FAQs"
        subtitle="Common questions about lot clearing, permits, pricing, and turnaround times."
      />
    </>
  );
}
