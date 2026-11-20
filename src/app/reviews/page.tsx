import { Metadata } from "next";
import { ArrowUpRight, Star } from "lucide-react";
import { GOOGLE_RATING, REVIEWS } from "@/data/reviews";
import { ReviewCard } from "@/components/ReviewCard";
import { QuoteSection } from "@/components/QuoteSection";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Customer Reviews & Testimonials | Pensacola Equipment Rentals",
  description: "Read Google reviews from Pensacola customers who rent mini excavators, skid steers, and dump trailers from Pensacola Equipment Rentals.",
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
        description="Reviews our customers posted on Google, word for word."
        breadcrumbs={[{ name: "Home", href: "/" }, { name: "Reviews" }]}
      >
        <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 backdrop-blur">
          <span className="font-heading text-3xl font-extrabold">{GOOGLE_RATING.value.toFixed(1)}</span>
          <span className="flex gap-0.5 text-brand-yellow">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-current" />
            ))}
          </span>
          <span className="text-sm text-white/70">{GOOGLE_RATING.count} Google reviews</span>
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
          <div className="mt-12 flex flex-wrap justify-center gap-4 text-sm font-bold">
            <a href={GOOGLE_RATING.profileUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-brand-blue transition hover:text-brand-red">
              See all {GOOGLE_RATING.count} reviews on Google
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <a href={GOOGLE_RATING.writeReviewUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-brand-blue transition hover:text-brand-red">
              Leave us a review
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <QuoteSection title="Ready to be our next happy customer?" />
    </>
  );
}
