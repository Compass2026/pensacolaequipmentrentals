import { Metadata } from "next";
import { QuoteForm } from "@/components/QuoteForm";
import { BUSINESS_INFO } from "@/data/business";
import { Phone, CalendarCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Request Equipment Quote & Availability | Pensacola Equipment Rentals",
  description: "Request daily, weekly, or monthly equipment rental rates for mini excavators, skid steers, trailers, and mowers delivered in Pensacola, FL.",
};

export default function RequestQuotePage() {
  return (
    <div className="space-y-0">
      <section className="border-b border-brand-surface-border bg-gradient-to-b from-brand-black via-brand-charcoal to-brand-black py-16">
        <div className="container max-w-3xl space-y-4 text-center mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-yellow/30 bg-brand-yellow/10 px-4 py-1 text-xs font-bold text-brand-yellow">
            <CalendarCheck className="h-4 w-4" />
            <span>Fast Jobsite Delivery Reservation</span>
          </div>
          <h1 className="font-heading text-4xl font-extrabold text-white sm:text-5xl">
            Request an Equipment Quote
          </h1>
          <p className="text-sm text-gray-300 leading-relaxed">
            Select your desired machine and rental dates. Our team will verify schedule and send a formal quote promptly.
          </p>
        </div>
      </section>

      <section className="bg-brand-black py-20">
        <div className="container max-w-3xl">
          <div className="rounded-3xl border border-brand-yellow/30 bg-brand-charcoal p-8 sm:p-12 shadow-2xl space-y-6">
            <QuoteForm />
          </div>
        </div>
      </section>
    </div>
  );
}
