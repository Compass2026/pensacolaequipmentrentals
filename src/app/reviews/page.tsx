import { Metadata } from "next";
import { Star, ShieldCheck, Phone } from "lucide-react";
import { BUSINESS_INFO } from "@/data/business";

export const metadata: Metadata = {
  title: "Customer Reviews & Testimonials | Pensacola Equipment Rentals",
  description: "Read customer reviews from Pensacola contractors, builders, and homeowners who rent mini excavators, skid steers, and dump trailers from Pensacola Equipment Rentals.",
};

export default function ReviewsPage() {
  const reviews = [
    {
      name: "Mark S.",
      role: "General Contractor",
      location: "Pensacola, FL",
      text: "Great local father and son team! They delivered the Bobcat E26 excavator right on time for our foundation project. The hydraulic thumb made tree root removal effortless. Machine operated flawlessly.",
    },
    {
      name: "David L.",
      role: "Homeowner",
      location: "Gulf Breeze, FL",
      text: "Rented the Iron Bull dump trailer to haul storm debris around our yard. Super smooth drop-off and pickup. Transparent pricing with no surprise fees.",
    },
    {
      name: "Robert T.",
      role: "Property Owner",
      location: "Milton, FL",
      text: "We hired Pensacola Equipment Rentals for brush clearing on a 2-acre lot. They completed it fast and cleared everything down to dirt. Excellent family-owned service.",
    },
    {
      name: "Chris M.",
      role: "Landscaping Specialist",
      location: "Navarre, FL",
      text: "The Kubota SVL track skid steer was clean, tight, and delivered with a full tank. We will definitely be renting from them for future Panhandle site prep jobs.",
    },
  ];

  return (
    <div className="space-y-0">
      <section className="border-b border-brand-surface-border bg-gradient-to-b from-brand-black via-brand-charcoal to-brand-black py-16">
        <div className="container max-w-3xl space-y-4 text-center mx-auto">
          <div className="flex items-center justify-center gap-1 text-amber-400 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-amber-400" />
            ))}
          </div>
          <h1 className="font-heading text-4xl font-extrabold text-white sm:text-5xl">
            Customer Reviews &amp; Feedback
          </h1>
          <p className="text-sm text-gray-300">
            Real feedback from local contractors and homeowners across Pensacola and Santa Rosa county.
          </p>
        </div>
      </section>

      <section className="bg-brand-black py-20">
        <div className="container">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 max-w-5xl mx-auto">
            {reviews.map((rev, idx) => (
              <div key={idx} className="rounded-2xl border border-brand-surface-border bg-brand-charcoal p-8 space-y-4">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-gray-300 italic leading-relaxed">
                  &quot;{rev.text}&quot;
                </p>
                <div className="pt-4 border-t border-brand-surface-border">
                  <h3 className="font-heading text-base font-bold text-white">{rev.name}</h3>
                  <span className="text-xs text-brand-yellow font-medium">{rev.role} • {rev.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
