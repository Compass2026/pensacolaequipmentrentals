import { Metadata } from "next";
import { ServiceAreaTemplate } from "@/components/ServiceAreaTemplate";

export const metadata: Metadata = {
  title: "Equipment Rentals Gulf Breeze FL | Pensacola Equipment Rentals",
  description: "Rent mini excavators, skid steers, and dump trailers delivered to Gulf Breeze, FL. Locally owned father and son equipment delivery.",
};

export default function GulfBreezeLocationPage() {
  return (
    <ServiceAreaTemplate
      city="Gulf Breeze"
      description="Providing contractors and homeowners in Gulf Breeze with Bobcat excavators, track loaders, dump trailers and land clearing services."
      catalogTitle="Gulf Breeze equipment catalog"
      catalogIntro="Just across the bridge from our Pensacola yard — fast drop-off for Gulf Breeze homes, builders and landscapers."
      equipmentCount={3}
    />
  );
}
