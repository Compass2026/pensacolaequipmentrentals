import Link from "next/link";
import Image from "next/image";
import { TreePine, ArrowRight, CheckCircle2, PhoneCall } from "lucide-react";
import { BUSINESS_INFO } from "@/data/business";

export function LandClearingSection() {
  return (
    <section className="bg-gradient-to-br from-brand-black via-brand-charcoal to-brand-black py-20 border-b border-brand-surface-border relative overflow-hidden">
      {/* Background Accent Grid */}
      <div className="absolute inset-0 bg-industrial-grid opacity-30 pointer-events-none" />

      <div className="container relative z-10">
        <div className="rounded-3xl border border-brand-blue/40 bg-brand-charcoal/90 p-8 md:p-12 backdrop-blur-md shadow-2xl">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-brand-red/40 bg-brand-red/10 px-3.5 py-1 text-xs font-bold text-brand-red">
                <TreePine className="h-4 w-4" />
                <span>Need Complete Turnkey Land Clearing?</span>
              </div>

              <h2 className="font-heading text-3xl font-extrabold text-white sm:text-4xl leading-tight">
                Don&apos;t Want to Operate Equipment Yourself? <br className="hidden sm:inline" />
                <span className="text-gradient-red">We Offer Professional Land &amp; Brush Clearing</span>
              </h2>

              <p className="text-sm text-gray-300 leading-relaxed max-w-xl">
                If you prefer to hand off the heavy work, hire our experienced father-and-son team to clear brush, remove trees, grade property, and level sites fast across Pensacola, Gulf Breeze, Milton, and Navarre.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  "Overgrown Lot & Brush Removal",
                  "Stump & Root Excavation",
                  "Site Prep & Yard Leveling",
                  "Free On-Site Job Estimates",
                ].map((item) => (
                  <div key={item} className="flex items-center space-x-2 text-xs font-semibold text-gray-200">
                    <CheckCircle2 className="h-4 w-4 text-brand-red shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-4">
                <Link
                  href="/land-clearing"
                  className="flex items-center gap-2 rounded-xl bg-brand-red px-6 py-3 text-sm font-extrabold text-white transition hover:bg-brand-blue shadow-lg"
                >
                  <span>Explore Land Clearing Services</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="flex items-center gap-2 rounded-xl border border-brand-surface-border bg-brand-black px-5 py-3 text-sm font-bold text-white transition hover:border-brand-blue"
                >
                  <PhoneCall className="h-4 w-4 text-brand-yellow" />
                  <span>Call {BUSINESS_INFO.phone}</span>
                </a>
              </div>
            </div>

            {/* Right Media Preview */}
            <div className="lg:col-span-5 relative h-72 lg:h-[360px] rounded-2xl overflow-hidden border border-brand-surface-border bg-brand-black shadow-xl">
              <Image
                src="https://www.bnbcoastalcuts.com/wp-content/uploads/2025/05/448692327_122093289428383926_1578460628476692250_n.jpg"
                alt="Pensacola Land Clearing and Skid Steer Work"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-brand-black/30 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-center">
                <span className="text-xs font-bold text-white bg-brand-blue/80 px-3 py-1 rounded-lg border border-brand-blue-dark">
                  Pensacola, FL Land Clearing &amp; Tree Services
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
