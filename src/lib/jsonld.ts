import { BUSINESS_INFO } from "@/data/business";
import { EquipmentItem } from "@/data/equipment";

export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "EquipmentRental"],
    "@id": "https://www.bnbcoastalcuts.com/#organization",
    name: BUSINESS_INFO.name,
    legalName: BUSINESS_INFO.legalName,
    url: "https://www.bnbcoastalcuts.com",
    logo: "https://www.bnbcoastalcuts.com/images/brand/logo-500.png",
    image: "https://www.bnbcoastalcuts.com/images/brand/logo-500.png",
    telephone: BUSINESS_INFO.phone,
    email: BUSINESS_INFO.email,
    priceRange: "$$",
    description: BUSINESS_INFO.story,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS_INFO.address.street,
      addressLocality: BUSINESS_INFO.address.city,
      addressRegion: BUSINESS_INFO.address.state,
      postalCode: BUSINESS_INFO.address.zip,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: BUSINESS_INFO.geo.latitude,
      longitude: BUSINESS_INFO.geo.longitude,
    },
    areaServed: BUSINESS_INFO.serviceAreas.map((area) => ({
      "@type": "AdministrativeArea",
      name: `${area.name}, FL`,
    })),
    sameAs: [BUSINESS_INFO.socials.facebook, BUSINESS_INFO.socials.twitter],
  };
}

export function generateEquipmentSchema(item: EquipmentItem, baseUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: item.name,
    description: item.shortDescription,
    image: item.primaryImage.startsWith("/") ? `${baseUrl}${item.primaryImage}` : item.primaryImage,
    brand: {
      "@type": "Brand",
      name: item.brand,
    },
    offers: {
      "@type": "Offer",
      url: `${baseUrl}/equipment/${item.slug}`,
      priceCurrency: "USD",
      price: item.rates.daily || 0,
      availability: "https://schema.org/InStock",
      itemCondition: "https://schema.org/UsedCondition",
      seller: {
        "@type": "Organization",
        name: BUSINESS_INFO.name,
      },
    },
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function generateFaqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
