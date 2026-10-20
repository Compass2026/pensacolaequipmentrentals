import { Metadata } from "next";
import { Star } from "lucide-react";
import { REVIEWS } from "@/data/reviews";
import { ReviewCard } from "@/components/ReviewCard";
import { QuoteSection } from "@/components/QuoteSection";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Customer Reviews & Testimonials | Pensacola Equipment Rentals",
  description: "Read customer reviews from Pensacola contractors, builders, and homeowners who rent mini excavators, skid steers, and dump trailers from Pensacola Equipment Rentals.",
};

export default function ReviewsPage() {
  return (
    <>
      <PageHero
        eyebrow="Customer stories"
        title={
          <>
            What our customers <span className="text-sun">are saying.</span>
          </>
        }
        description="Real feedback from local contractors and homeowners across Escambia and Santa Rosa counties."
        breadcrumbs={[{ name: "Home", href: "/" }, { name: "Reviews" }]}
      >
        <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 backdrop-blur">
          <span className="font-heading text-3xl font-extrabold">5.0</span>
          <span className="flex gap-0.5 text-brand-yellow">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-current" />
            ))}
          </span>
        </div>
      </PageHero>

      <section className="bg-slate-50 py-20 lg:py-28">
        <div className="container">
          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
            {REVIEWS.map((review, idx) => (
              <Reveal key={review.name} delay={idx * 90}>
                <ReviewCard review={review} index={idx} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <QuoteSection title="Ready to be our next happy customer?" />
    </>
  );
}
