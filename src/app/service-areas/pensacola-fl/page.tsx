import { Metadata } from "next";
import { ServiceAreaTemplate } from "@/components/ServiceAreaTemplate";

export const metadata: Metadata = {
  title: "Equipment Rentals Pensacola FL | Mini Excavators, Skid Steers & Trailers",
  description: "Locally owned equipment rentals in Pensacola, FL. Rent 2023 Bobcat excavators, track skid steers, and Iron Bull dump trailers with jobsite delivery across Pensacola.",
};

export default function PensacolaLocationPage() {
  return (
    <ServiceAreaTemplate
      city="Pensacola"
      description="Dependable mini excavators, track skid loaders, hydraulic dump trailers and land clearing delivered directly to Pensacola homes and commercial construction sites."
      catalogTitle="Pensacola heavy machinery fleet"
      catalogIntro="Based right here at 7013 Chapel St in Pensacola, we're your local source for reliable machinery. All rates include delivery within 20 miles."
      equipmentCount={6}
    />
  );
}
