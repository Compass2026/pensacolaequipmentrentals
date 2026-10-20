import { Metadata } from "next";
import { QuoteSection } from "@/components/QuoteSection";
import { HowItWorks } from "@/components/HowItWorks";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Request Equipment Quote & Availability | Pensacola Equipment Rentals",
  description: "Request daily, weekly, or monthly equipment rental rates for mini excavators, skid steers, trailers, and mowers delivered in Pensacola, FL.",
};

export default function RequestQuotePage() {
  return (
    <>
      <PageHero
        eyebrow="Fast jobsite delivery reservations"
        title={
          <>
            Request an equipment <span className="text-sun">quote.</span>
          </>
        }
        description="Pick your machine and rental dates. We'll verify the schedule and send a formal quote promptly."
        breadcrumbs={[{ name: "Home", href: "/" }, { name: "Request a Quote" }]}
      />
      <QuoteSection
        eyebrow="Reserve your machine"
        title="Tell us what you need."
        description="Most requests are confirmed the same day. Need it sooner? Give us a call."
      />
      <HowItWorks />
    </>
  );
}
