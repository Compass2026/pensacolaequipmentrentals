import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BUSINESS_INFO } from "@/data/business";
import { TrustBar } from "@/components/TrustBar";
import { ReviewsSection } from "@/components/ReviewsSection";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { Phone, ArrowRight, Check } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Father & Son Equipment Rentals Pensacola FL",
  description: "Learn about Pensacola Equipment Rentals, a locally owned and operated father-and-son business providing heavy machinery rentals and land clearing across Pensacola.",
};

const VALUES = [
  "Father & son hands-on ownership and accountability",
  "Fully inspected modern Bobcat, Kubota, Iron Bull & Gravely fleet",
  "Direct jobsite drop-off and pickup within 20 miles",
  "Dual offering: DIY machine rentals or turnkey land clearing",
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Locally owned & family operated"
        title={
          <>
            Reliable machines from local folks <span className="text-sun">who care.</span>
          </>
        }
        description="A Pensacola father-and-son company built on honest communication, reliable equipment and personal dedication to local contractors and homeowners."
        breadcrumbs={[{ name: "Home", href: "/" }, { name: "About" }]}
      />

      <section className="bg-white py-24 lg:py-32">
        <div className="container">
          <div className="grid items-center gap-16 lg:grid-cols-12">
            <Reveal className="relative lg:col-span-6">
              <div className="absolute -left-6 -top-6 h-40 w-40 rounded-full bg-sun opacity-90" />
              <div className="relative aspect-[4/5] overflow-hidden rounded-[32px] shadow-lift">
                <Image
                  src="https://www.bnbcoastalcuts.com/wp-content/uploads/2025/05/pensacola1.jpg"
                  alt="Pensacola Equipment Rentals team at work"
                  fill
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-8 right-6 flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-4 pr-6 shadow-lift">
                <Image src="/brand/logo.png" alt="" width={394} height={290} className="h-14 w-auto" />
                <div>
                  <div className="font-heading text-lg font-bold text-brand-black">Est. 2023</div>
                  <div className="text-xs text-gray-500">{BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.state}</div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={120} className="space-y-7 lg:col-span-6">
              <span className="eyebrow">Our story &amp; values</span>
              <h2 className="display text-4xl text-brand-black sm:text-5xl">Straightforward rentals, the way they should be.</h2>
              <p className="text-base leading-relaxed text-gray-600 sm:text-lg">
                Pensacola Equipment Rentals was founded with a simple goal: give local builders, landscapers, homeowners
                and DIYers access to top-quality equipment with transparent pricing and fast local delivery.
              </p>
              <p className="text-base leading-relaxed text-gray-600 sm:text-lg">
                As a father-and-son operation, when you call{" "}
                <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="font-bold text-brand-red underline-offset-4 hover:underline">
                  {BUSINESS_INFO.phone}
                </a>
                , you speak directly with the owners who deliver and maintain the equipment. We take pride in helping you
                finish your job smoothly.
              </p>
              <ul className="grid gap-3 pt-2 sm:grid-cols-2">
                {VALUES.map((item) => (
                  <li key={item} className="flex items-start gap-3 rounded-2xl border border-gray-200 bg-slate-50 p-4 text-sm font-medium text-brand-charcoal">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-red text-white">
                      <Check className="h-3 w-3" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-3 pt-2">
                <Link href="/equipment" className="btn-primary">
                  See the fleet
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="btn-outline-dark">
                  <Phone className="h-4 w-4" />
                  Call the owners
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <TrustBar />

      <ReviewsSection />
    </>
  );
}
