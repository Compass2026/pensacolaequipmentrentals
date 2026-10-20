import { Metadata } from "next";
import { ServiceAreaTemplate } from "@/components/ServiceAreaTemplate";

export const metadata: Metadata = {
  title: "Equipment Rentals Navarre FL | Pensacola Equipment Rentals",
  description: "Rent mini excavators, skid steers, and dump trailers delivered to Navarre, FL. Jobsite delivery and brush clearing available.",
};

export default function NavarreLocationPage() {
  return (
    <ServiceAreaTemplate
      city="Navarre"
      description="Delivering heavy equipment and land clearing services to Navarre contractors, landscapers and homeowners."
      catalogTitle="Navarre equipment catalog"
      catalogIntro="Navarre sits just past our standard 20-mile radius — we can deliver there for a small additional mileage fee."
      equipmentCount={3}
    />
  );
}
