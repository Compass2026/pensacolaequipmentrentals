import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import { REVIEWS } from "@/data/reviews";
import { ReviewCard } from "./ReviewCard";
import { Reveal } from "./ui/Reveal";

export function ReviewsSection() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="container">
        <div className="grid gap-14 lg:grid-cols-12">
          <Reveal className="space-y-6 lg:sticky lg:top-32 lg:col-span-4 lg:self-start">
            <span className="eyebrow">Customer stories</span>
            <h2 className="display text-4xl text-brand-black sm:text-5xl">Trusted by Pensacola builders &amp; homeowners.</h2>
            <div className="flex items-center gap-4 rounded-2xl border border-gray-200 bg-slate-50 p-5">
              <span className="font-heading text-5xl font-extrabold tracking-tight text-brand-black">5.0</span>
              <div>
                <div className="flex gap-0.5 text-brand-yellow">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <div className="mt-1 text-xs text-gray-500">Average rating from local customers</div>
              </div>
            </div>
            <Link href="/reviews" className="inline-flex items-center gap-2 text-sm font-bold text-brand-blue transition hover:gap-3 hover:text-brand-red">
              Read all reviews
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:col-span-8">
            {REVIEWS.map((review, idx) => (
              <Reveal key={review.name} delay={idx * 90}>
                <div className={`h-full ${idx % 2 === 1 ? "sm:translate-y-10" : ""}`}>
                  <ReviewCard review={review} index={idx} />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
