import { Metadata } from "next";
import { BUSINESS_INFO } from "@/data/business";
import { QuoteForm } from "@/components/QuoteForm";
import { Phone, Mail, MapPin, Clock, MessageSquare } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Pensacola Equipment Rentals | Call 850-407-6566",
  description: "Contact Pensacola Equipment Rentals for equipment availability, rental rates, and land clearing quotes in Pensacola, FL. Call or text 850-407-6566.",
};

export default function ContactPage() {
  return (
    <div className="space-y-0">
      <section className="border-b border-brand-surface-border bg-gradient-to-b from-brand-black via-brand-charcoal to-brand-black py-16">
        <div className="container max-w-3xl space-y-4 text-center mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-yellow">
            Direct Owner Communication
          </span>
          <h1 className="font-heading text-4xl font-extrabold text-white sm:text-5xl">
            Contact Pensacola Equipment Rentals
          </h1>
          <p className="text-sm text-gray-300 leading-relaxed">
            Have questions about equipment availability, jobsite delivery, or land clearing quotes? Reach out directly below or call us anytime.
          </p>
        </div>
      </section>

      <section className="bg-brand-black py-20 border-b border-brand-surface-border">
        <div className="container">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            {/* Left Info Column */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <h2 className="font-heading text-2xl font-bold text-white">Get in Touch</h2>
                <p className="text-xs text-gray-400 leading-relaxed">
                  We are available for calls and texts. Speak with our father-and-son owners to confirm your machine rental schedule.
                </p>
              </div>

              <div className="space-y-4">
                <div className="rounded-xl border border-brand-surface-border bg-brand-charcoal p-5 flex items-start space-x-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-yellow/10 text-brand-yellow">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-heading text-sm font-bold text-white">Phone / Text Support</h3>
                    <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="text-base font-extrabold text-brand-yellow hover:underline block mt-0.5">
                      {BUSINESS_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="rounded-xl border border-brand-surface-border bg-brand-charcoal p-5 flex items-start space-x-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-yellow/10 text-brand-yellow">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-heading text-sm font-bold text-white">Email Address</h3>
                    <a href={`mailto:${BUSINESS_INFO.email}`} className="text-sm font-medium text-gray-200 hover:text-brand-yellow block mt-0.5">
                      {BUSINESS_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="rounded-xl border border-brand-surface-border bg-brand-charcoal p-5 flex items-start space-x-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-yellow/10 text-brand-yellow">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-heading text-sm font-bold text-white">Office Address</h3>
                    <p className="text-sm text-gray-300 mt-0.5">{BUSINESS_INFO.address.formatted}</p>
                  </div>
                </div>
              </div>

              {/* Google Map Embed */}
              <div className="rounded-2xl border border-brand-surface-border bg-brand-charcoal overflow-hidden h-64 relative">
                <iframe
                  src="https://maps.google.com/maps?q=7013%20Chapel%20St%2C%20Pensacola%2C%20FL%2032504&t=m&z=11&output=embed&iwloc=near"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Pensacola Equipment Rentals Location"
                />
              </div>
            </div>

            {/* Right Form Column */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl border border-brand-surface-border bg-brand-charcoal p-8 space-y-6 shadow-2xl">
                <div className="space-y-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-yellow">
                    Send a Message
                  </span>
                  <h2 className="font-heading text-2xl font-bold text-white">
                    Request Information &amp; Schedule
                  </h2>
                </div>
                <QuoteForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
