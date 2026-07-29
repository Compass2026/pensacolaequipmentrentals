import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BUSINESS_INFO } from "@/data/business";
import { QuoteForm } from "@/components/QuoteForm";
import { FaqAccordion } from "@/components/FaqAccordion";
import { TreePine, Phone, CheckCircle2, ShieldCheck, ArrowRight, Wrench } from "lucide-react";

export const metadata: Metadata = {
  title: "Professional Land Clearing Services Pensacola FL | Pensacola Equipment Rentals",
  description: "Need lot clearing, brush removal, or stump excavation in Pensacola, Gulf Breeze, Milton, or Navarre? Hire our local father-and-son land clearing team for free estimates.",
};

export default function LandClearingPage() {
  const services = [
    {
      title: "Brush & Vegetation Removal",
      description: "Clearing thick underbrush, palmettos, vines, and overgrown vegetation to reclaim your property lines.",
    },
    {
      title: "Lot & Site Preparation",
      description: "Clearing trees and debris to prepare residential building lots, driveways, sheds, and commercial sites.",
    },
    {
      title: "Stump & Root Excavation",
      description: "Using heavy Bobcat excavators with hydraulic thumbs to pull large stumps, heavy roots, and boulders.",
    },
    {
      title: "Yard Leveling & Rough Grading",
      description: "Grading uneven terrain, spreading topsoil/dirt, and eliminating drainage low spots.",
    },
  ];

  return (
    <div className="space-y-0">
      {/* Banner */}
      <section className="border-b border-brand-surface-border bg-gradient-to-b from-brand-black via-brand-charcoal to-brand-black py-20">
        <div className="container max-w-4xl space-y-6 text-center mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-yellow/30 bg-brand-yellow/10 px-4 py-1 text-xs font-bold text-brand-yellow">
            <TreePine className="h-4 w-4" />
            <span>Full-Service Land & Brush Clearing</span>
          </div>
          <h1 className="font-heading text-4xl font-extrabold text-white sm:text-5xl">
            Professional Land Clearing in Pensacola, FL
          </h1>
          <p className="text-base text-gray-300 leading-relaxed max-w-2xl mx-auto">
            Don&apos;t want to operate heavy machinery yourself? Hire our father-and-son crew to handle brush removal, tree clearing, stump digging, and lot prep.
          </p>
          <div className="pt-2 flex justify-center gap-4">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="flex items-center gap-2 rounded-lg bg-brand-yellow px-6 py-3 font-bold text-brand-black hover:bg-brand-yellow-dark transition"
            >
              <Phone className="h-4 w-4" />
              <span>Call For Estimate: {BUSINESS_INFO.phone}</span>
            </a>
          </div>
        </div>
      </section>

      {/* Service Cards */}
      <section className="bg-brand-black py-20 border-b border-brand-surface-border">
        <div className="container space-y-12">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <h2 className="font-heading text-3xl font-bold text-white">Our Land Clearing Services</h2>
            <p className="text-xs text-gray-400">Complete property overhaul solutions for homeowners and developers.</p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <div key={s.title} className="rounded-2xl border border-brand-surface-border bg-brand-charcoal p-6 space-y-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-yellow/10 text-brand-yellow">
                  <Wrench className="h-5 w-5" />
                </div>
                <h3 className="font-heading text-lg font-bold text-white">{s.title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Estimate Request Form */}
      <section className="bg-brand-charcoal py-20">
        <div className="container max-w-3xl space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-yellow">
              Free On-Site Quotes
            </span>
            <h2 className="font-heading text-3xl font-bold text-white">Request a Land Clearing Quote</h2>
            <p className="text-xs text-gray-400">Tell us about your acreage, tree density, and location in Pensacola or surrounding towns.</p>
          </div>

          <div className="rounded-2xl border border-brand-surface-border bg-brand-black p-8 shadow-2xl">
            <QuoteForm preselectedEquipment="Land Clearing Service" />
          </div>
        </div>
      </section>

      <FaqAccordion
        title="Land Clearing FAQs"
        subtitle="Common questions about lot clearing, permits, pricing, and turnaround times."
      />
    </div>
  );
}
