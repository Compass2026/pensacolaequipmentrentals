import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BUSINESS_INFO } from "@/data/business";
import { TrustBar } from "@/components/TrustBar";
import { Phone, Users, ShieldCheck, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Father & Son Equipment Rentals Pensacola FL",
  description: "Learn about Pensacola Equipment Rentals, a locally owned and operated father-and-son business providing heavy machinery rentals and land clearing across Pensacola.",
};

export default function AboutPage() {
  return (
    <div className="space-y-0">
      <section className="border-b border-brand-surface-border bg-gradient-to-b from-brand-black via-brand-charcoal to-brand-black py-20">
        <div className="container max-w-4xl space-y-6 text-center mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-yellow/30 bg-brand-yellow/10 px-4 py-1 text-xs font-bold text-brand-yellow">
            <Users className="h-4 w-4" />
            <span>Locally Owned &amp; Family Operated</span>
          </div>
          <h1 className="font-heading text-4xl font-extrabold text-white sm:text-5xl">
            About Pensacola Equipment Rentals
          </h1>
          <p className="text-base text-gray-300 leading-relaxed max-w-2xl mx-auto">
            A local father-and-son company built on honest communication, reliable equipment delivery, and personal dedication to Pensacola contractors and homeowners.
          </p>
        </div>
      </section>

      <section className="bg-brand-black py-20 border-b border-brand-surface-border">
        <div className="container">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-yellow">
                Our Story &amp; Values
              </span>
              <h2 className="font-heading text-3xl font-bold text-white">
                Reliable Machines From Local Folks Who Care
              </h2>
              <p className="text-sm text-gray-300 leading-relaxed">
                Pensacola Equipment Rentals was founded with a straightforward goal: give local builders, landscapers, homeowners, and DIYers access to top-quality equipment with transparent pricing and fast local delivery.
              </p>
              <p className="text-sm text-gray-300 leading-relaxed">
                As a father-and-son operation, when you call <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="text-brand-yellow font-bold underline">{BUSINESS_INFO.phone}</a>, you speak directly with the owners who deliver and maintain the equipment. We take pride in helping you complete your job smoothly.
              </p>

              <div className="space-y-3 pt-2">
                {[
                  "Father & Son hands-on ownership and accountability",
                  "Fully inspected modern Bobcat, Kubota, Iron Bull & Gravely fleet",
                  "Direct jobsite drop-off and pickup within 20 miles",
                  "Dual offering: DIY machine rentals OR turnkey land clearing",
                ].map((item) => (
                  <div key={item} className="flex items-center space-x-2 text-xs text-gray-200">
                    <CheckCircle2 className="h-4 w-4 text-brand-yellow shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative h-[400px] w-full rounded-2xl border border-brand-surface-border bg-brand-charcoal overflow-hidden shadow-2xl">
              <Image
                src="https://www.bnbcoastalcuts.com/wp-content/uploads/2025/05/pensacola1.jpg"
                alt="Pensacola Equipment Rentals Team at work"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <TrustBar />
    </div>
  );
}
