import { Metadata } from "next";
import { ServiceAreaTemplate } from "@/components/ServiceAreaTemplate";

export const metadata: Metadata = {
  title: "Equipment Rentals Milton FL | Pensacola Equipment Rentals",
  description: "Rent mini excavators, skid steers, and dump trailers delivered to Milton, FL. Fast jobsite drop-off from a local father-and-son team.",
};

export default function MiltonLocationPage() {
  return (
    <ServiceAreaTemplate
      city="Milton"
      description="Serving Milton builders, agricultural property owners and DIYers with excavators, skid steers, trailers and land clearing."
      catalogTitle="Milton equipment catalog"
      catalogIntro="From acreage clearing to driveway prep, we deliver job-ready machines to Milton and Santa Rosa County properties."
      equipmentCount={3}
    />
  );
}
