import Image from "next/image";
import Link from "next/link";
import { EQUIPMENT_CATALOG } from "@/data/equipment";
import { BUSINESS_INFO } from "@/data/business";
import { EquipmentCard } from "@/components/EquipmentCard";
import { TrustBar } from "@/components/TrustBar";
import { BrandMarquee } from "@/components/BrandMarquee";
import { HowItWorks } from "@/components/HowItWorks";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { LandClearingSection } from "@/components/LandClearingSection";
import { ServiceAreaMap } from "@/components/ServiceAreaMap";
import { ReviewsSection } from "@/components/ReviewsSection";
import { FaqAccordion } from "@/components/FaqAccordion";
import { QuoteSection } from "@/components/QuoteSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Phone, ArrowRight, Truck, Star } from "lucide-react";

const HERO_MACHINE = EQUIPMENT_CATALOG.find((item) => item.id === "kubota-svl") ?? EQUIPMENT_CATALOG[2];

export default function HomePage() {
  const featuredEquipment = EQUIPMENT_CATALOG.slice(0, 4);

  const stats = [
    { value: `${BUSINESS_INFO.deliveryRadiusMiles} mi`, label: "Delivery radius" },
    { value: `${EQUIPMENT_CATALOG.length}`, label: "Machines & tools" },
    { value: "2022+", label: "Model-year fleet" },
    { value: "5.0", label: "Customer rating", star: true },
  ];

  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-hero text-white">
        <div className="absolute inset-0 -z-10 bg-blueprint" />
        <div className="absolute inset-0 -z-10 bg-noise opacity-[0.05] mix-blend-overlay" />

        <div className="container relative pb-20 pt-14 sm:pt-20 lg:pb-28 lg:pt-24">
          <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-8">
            {/* Copy */}
            <div className="space-y-8 lg:col-span-7">
              <Reveal>
                <span className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/5 py-1.5 pl-1.5 pr-4 text-xs font-semibold text-white/80 backdrop-blur">
                  <span className="rounded-full bg-brand-red px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">Local</span>
                  Father &amp; son owned · Pensacola, FL
                </span>
              </Reveal>

              <Reveal delay={80}>
                <h1 className="display text-[2.75rem] sm:text-6xl lg:text-7xl xl:text-[5.25rem]">
                  Affordable &amp; dependable equipment rentals in <span className="text-sun">Pensacola.</span>
                </h1>
              </Reveal>

              <Reveal delay={160}>
                <p className="max-w-xl text-lg leading-relaxed text-white/70 sm:text-xl">
                  Locally owned and operated — trusted by Pensacola contractors and homeowners alike. Excavators, skid
                  steers and trailers delivered straight to your jobsite.
                </p>
              </Reveal>

              <Reveal delay={240} className="flex flex-wrap items-center gap-3">
                <Link href="/equipment" className="btn-primary !px-8 !py-4 text-base">
                  Browse the fleet
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="btn-outline-light !px-8 !py-4 text-base">
                  <Phone className="h-4 w-4" />
                  {BUSINESS_INFO.phone}
                </a>
              </Reveal>

              <Reveal delay={320}>
                <dl className="grid max-w-2xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-4">
                  {stats.map((stat) => (
                    <div key={stat.label} className="flex flex-col-reverse bg-brand-black/40 px-5 py-4 backdrop-blur">
                      <dt className="text-[11px] font-medium text-white/50">{stat.label}</dt>
                      <dd className="flex items-center gap-1 font-heading text-2xl font-extrabold tracking-tight">
                        {stat.value}
                        {stat.star && <Star className="h-4 w-4 fill-brand-yellow text-brand-yellow" />}
                      </dd>
                    </div>
                  ))}
                </dl>
              </Reveal>
            </div>

            {/* Machine visual */}
            <div className="relative lg:col-span-5">
              <div className="relative mx-auto aspect-square w-full max-w-[560px]">
                <div className="absolute inset-[8%] rounded-full bg-sun shadow-[0_0_120px_-10px_rgba(215,78,49,0.6)]" />
                <div className="absolute inset-[2%] animate-spin-slow rounded-full border border-dashed border-white/20" />
                <div className="absolute inset-[-6%] rounded-full border border-white/5" />
                <div className="absolute inset-x-[-18%] bottom-[0%] top-[8%] animate-float">
                  <Image
                    src={HERO_MACHINE.primaryImage}
                    alt="Kubota SVL track skid steer available for rent in Pensacola"
                    fill
                    priority
                    sizes="(min-width: 1024px) 45vw, 100vw"
                    className="object-contain drop-shadow-[0_40px_40px_rgba(0,0,0,0.55)]"
                  />
                </div>

                {/* Floating chips */}
                <Link
                  href={`/equipment/${HERO_MACHINE.slug}`}
                  className="absolute bottom-0 left-0 flex items-center gap-3 rounded-2xl border border-white/15 bg-brand-black/70 p-3 pr-5 shadow-2xl backdrop-blur-xl transition hover:border-white/30 sm:-left-4"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10">
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 ring-4 ring-emerald-400/20" />
                  </span>
                  <span>
                    <span className="block text-[10px] font-bold uppercase tracking-[0.16em] text-white/50">Available now</span>
                    <span className="block text-sm font-bold">{HERO_MACHINE.shortName}</span>
                    {HERO_MACHINE.rates.daily && (
                      <span className="block text-xs text-brand-yellow">From ${HERO_MACHINE.rates.daily}/day</span>
                    )}
                  </span>
                </Link>
                <div className="absolute right-0 top-[6%] flex items-center gap-2.5 rounded-full border border-white/15 bg-white/10 px-4 py-2.5 text-xs font-semibold shadow-xl backdrop-blur-xl">
                  <Truck className="h-4 w-4 text-brand-yellow" />
                  Delivered to your jobsite
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BrandMarquee />

      <TrustBar />

      {/* FEATURED FLEET */}
      <section className="bg-slate-50 py-24 lg:py-32">
        <div className="container space-y-14">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="The fleet"
              title={
                <>
                  Job-ready machines, <span className="text-brand-blue">delivered.</span>
                </>
              }
              description="Every machine arrives inspected, fueled and ready to work — with the buckets and attachments you need."
            />
            <Reveal>
              <Link href="/equipment" className="btn-outline-dark shrink-0">
                View all {EQUIPMENT_CATALOG.length} rentals
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredEquipment.map((equip, idx) => (
              <Reveal key={equip.id} delay={idx * 90} className="h-full">
                <EquipmentCard equipment={equip} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <WhyChooseUs />

      <HowItWorks />

      <LandClearingSection />

      <ServiceAreaMap />

      <ReviewsSection />

      <FaqAccordion />

      <QuoteSection />
    </>
  );
}
