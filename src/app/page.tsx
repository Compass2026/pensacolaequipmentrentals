import Image from "next/image";
import Link from "next/link";
import { EQUIPMENT_CATALOG } from "@/data/equipment";
import { BUSINESS_INFO } from "@/data/business";
import { EquipmentCard } from "@/components/EquipmentCard";
import { TrustBar } from "@/components/TrustBar";
import { HowItWorks } from "@/components/HowItWorks";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { LandClearingSection } from "@/components/LandClearingSection";
import { FaqAccordion } from "@/components/FaqAccordion";
import { QuoteForm } from "@/components/QuoteForm";
import { Phone, ArrowRight, Star, MapPin, Truck, CheckCircle2, ArrowUpRight } from "lucide-react";

export default function HomePage() {
  const featuredEquipment = EQUIPMENT_CATALOG.slice(0, 4);

  return (
    <div className="space-y-0 bg-white">
      {/* 1. TOP ANNOUNCEMENT BANNER MATCHING EXACT LIVE SCREENSHOT */}
      <section className="bg-white py-6 border-b border-gray-200 text-center">
        <div className="container">
          <h2 className="font-heading text-xl font-black text-brand-blue sm:text-2xl lg:text-3xl">
            Need someone to handle your{" "}
            <span className="relative inline-block text-[#D74E31] underline decoration-[#185BA6] decoration-wavy decoration-2 underline-offset-4">
              Land Clearing project?
            </span>{" "}
            We&apos;ve got you covered!!!
          </h2>
        </div>
      </section>

      {/* 2. HERO SECTION MATCHING EXACT LIVE SCREENSHOT */}
      <section className="relative bg-[#185BA6] py-16 lg:py-24 overflow-hidden">
        {/* Background Image Watermark */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-15 pointer-events-none"
          style={{
            backgroundImage: `url('https://www.bnbcoastalcuts.com/wp-content/uploads/2025/05/Pensacola-Equipment-1-2.png')`,
          }}
        />

        <div className="container relative z-10">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-center">
            {/* Left Hero Text Column */}
            <div className="lg:col-span-7 space-y-6 text-left">
              {/* Category Tag matching screenshot */}
              <span className="text-sm font-extrabold uppercase tracking-widest text-white/90">
                PENSACOLA EQUIPMENT RENTALS
              </span>

              {/* Main Headline matching screenshot */}
              <h1 className="font-heading text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.1]">
                Affordable &amp; Dependable Equipment Rentals in Pensacola
              </h1>

              {/* Subheading matching screenshot */}
              <p className="text-base text-white/90 sm:text-xl font-medium leading-relaxed max-w-2xl">
                Locally owned and operated – trusted by Pensacola contractors and homeowners alike.
              </p>

              {/* Outline Button matching exact screenshot: 'Discover more ↗' */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link
                  href="/equipment"
                  className="inline-flex items-center gap-2 rounded-lg border-2 border-white px-7 py-3.5 text-base font-extrabold text-white transition hover:bg-white hover:text-[#185BA6] shadow-lg"
                >
                  <span>Discover more</span>
                  <ArrowUpRight className="h-5 w-5" />
                </Link>
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="inline-flex items-center gap-2 rounded-lg bg-[#D74E31] px-7 py-3.5 text-base font-extrabold text-white transition hover:bg-white hover:text-[#D74E31] shadow-lg"
                >
                  <Phone className="h-5 w-5" />
                  <span>Call {BUSINESS_INFO.phone}</span>
                </a>
              </div>
            </div>

            {/* Right Hero Image Column (Kubota SVL Track Loader) */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              <div className="relative h-[380px] sm:h-[480px] lg:h-[540px] w-full">
                <Image
                  src="https://www.bnbcoastalcuts.com/wp-content/uploads/2025/05/Untitled-design-3.png"
                  alt="Kubota SVL Skid Steer Loader Pensacola Equipment Rentals"
                  fill
                  className="object-contain drop-shadow-2xl transition-transform duration-500 hover:scale-105"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. TRUST BAR */}
      <TrustBar />

      {/* 4. FEATURED EQUIPMENT SECTION */}
      <section className="bg-slate-50 py-20 border-b border-gray-200">
        <div className="container space-y-12">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div className="space-y-2">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#D74E31]">
                Heavy Machinery &amp; Tools
              </span>
              <h2 className="font-heading text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Featured Rental Fleet
              </h2>
              <p className="text-sm text-gray-600 max-w-xl">
                Explore our main equipment lineup. Every machine comes fully inspected, fueled, and ready for work with optional attachments.
              </p>
            </div>
            <Link
              href="/equipment"
              className="flex items-center gap-2 text-sm font-bold text-[#185BA6] hover:text-[#D74E31]"
            >
              <span>View All Equipment ({EQUIPMENT_CATALOG.length})</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {featuredEquipment.map((equip) => (
              <EquipmentCard key={equip.id} equipment={equip} />
            ))}
          </div>
        </div>
      </section>

      {/* 5. WHY CHOOSE US */}
      <WhyChooseUs />

      {/* 6. HOW IT WORKS */}
      <HowItWorks />

      {/* 7. LAND CLEARING PROMOTION */}
      <LandClearingSection />

      {/* 8. AREAS SERVED */}
      <section className="bg-white py-16 border-b border-gray-200">
        <div className="container text-center space-y-8">
          <div className="space-y-2 max-w-2xl mx-auto">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#D74E31]">
              Local Service Coverage
            </span>
            <h2 className="font-heading text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Serving Pensacola &amp; Surrounding Communities
            </h2>
            <p className="text-sm text-gray-600">
              We provide prompt equipment drop-off and pickup across Escambia and Santa Rosa counties.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 max-w-4xl mx-auto">
            {BUSINESS_INFO.serviceAreas.map((area) => (
              <Link
                key={area.slug}
                href={`/service-areas/${area.slug}`}
                className="group rounded-2xl border border-gray-200 bg-slate-50 p-5 text-center transition hover:border-[#185BA6] hover:bg-white shadow-sm hover:shadow-md"
              >
                <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-[#185BA6]/10 text-[#185BA6] group-hover:bg-[#D74E31] group-hover:text-white transition">
                  <MapPin className="h-5 w-5" />
                </div>
                <h3 className="font-heading text-base font-bold text-gray-900 group-hover:text-[#185BA6] transition">
                  {area.name}, FL
                </h3>
                <span className="text-xs text-gray-500">Delivery Available</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 9. REVIEWS SECTION */}
      <section className="bg-slate-900 py-20 text-white border-b border-gray-800">
        <div className="container space-y-12">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-1 text-amber-400 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-amber-400" />
              ))}
            </div>
            <h2 className="font-heading text-3xl font-extrabold text-white sm:text-4xl">
              Trusted by Local Pensacola Contractors &amp; Homeowners
            </h2>
            <p className="text-sm text-gray-400">
              Real feedback from local property owners and construction professionals.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              {
                quote: "Great local father and son team! They delivered the Bobcat E26 excavator right on time for our driveway project. Machine operated flawlessly.",
                author: "Mark S.",
                location: "Pensacola Contractor",
              },
              {
                quote: "Rented the Iron Bull dump trailer to clean up storm debris around our property in Gulf Breeze. Super smooth process and fair pricing.",
                author: "David L.",
                location: "Gulf Breeze Homeowner",
              },
              {
                quote: "We hired Pensacola Equipment Rentals for brush clearing on a 2-acre lot in Milton. They completed it quickly and cleared everything we needed.",
                author: "Robert T.",
                location: "Milton Property Owner",
              },
            ].map((rev, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-gray-800 bg-slate-800/80 p-6 space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs text-gray-300 italic leading-relaxed">
                    &quot;{rev.quote}&quot;
                  </p>
                </div>
                <div className="pt-3 border-t border-gray-700">
                  <h4 className="font-heading text-sm font-bold text-white">{rev.author}</h4>
                  <span className="text-[11px] text-[#D74E31] font-semibold">{rev.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. VISIBLE FAQS */}
      <FaqAccordion />

      {/* 11. FINAL CALL TO ACTION & QUOTE FORM */}
      <section className="bg-slate-50 py-20" id="quote-section">
        <div className="container max-w-5xl">
          <div className="rounded-3xl border border-gray-200 bg-white p-8 md:p-12 shadow-2xl space-y-8">
            <div className="text-center space-y-3 max-w-2xl mx-auto">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#D74E31]">
                Get Started Today
              </span>
              <h2 className="font-heading text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Ready to Rent Equipment or Request Land Clearing?
              </h2>
              <p className="text-sm text-gray-600">
                Fill out the form below or call us directly at <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="text-[#D74E31] font-bold underline">{BUSINESS_INFO.phone}</a>. We&apos;ll confirm machine availability immediately.
              </p>
            </div>

            {/* Embedded Quote Form */}
            <div className="max-w-3xl mx-auto">
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
