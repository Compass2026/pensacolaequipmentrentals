import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { EQUIPMENT_CATALOG, getEquipmentBySlug, getRelatedEquipment } from "@/data/equipment";
import { BUSINESS_INFO } from "@/data/business";
import { EquipmentCard } from "@/components/EquipmentCard";
import { QuoteForm } from "@/components/QuoteForm";
import { FaqAccordion } from "@/components/FaqAccordion";
import { generateEquipmentSchema, generateBreadcrumbSchema } from "@/lib/jsonld";
import { Phone, CheckCircle2, Truck, ShieldCheck, ChevronRight, AlertCircle, Wrench } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return EQUIPMENT_CATALOG.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const equipment = getEquipmentBySlug(slug);

  if (!equipment) {
    return {
      title: "Equipment Not Found",
    };
  }

  return {
    title: equipment.seoTitle,
    description: equipment.metaDescription,
    openGraph: {
      title: equipment.seoTitle,
      description: equipment.metaDescription,
      images: [{ url: equipment.primaryImage, alt: equipment.imageAltText }],
    },
  };
}

export default async function EquipmentDetailPage({ params }: Props) {
  const { slug } = await params;
  const equipment = getEquipmentBySlug(slug);

  if (!equipment) {
    return (
      <div className="container py-20 text-center space-y-4">
        <h1 className="font-heading text-3xl font-bold text-white">Machine Not Found</h1>
        <p className="text-gray-400">The requested equipment item does not exist.</p>
        <Link href="/equipment" className="inline-block rounded-lg bg-brand-yellow px-6 py-2.5 font-bold text-brand-black">
          Back to Equipment Hub
        </Link>
      </div>
    );
  }

  const related = getRelatedEquipment(equipment.relatedEquipmentSlugs);
  const baseUrl = "https://www.bnbcoastalcuts.com";
  const productSchema = generateEquipmentSchema(equipment, baseUrl);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: baseUrl },
    { name: "Equipment", url: `${baseUrl}/equipment` },
    { name: equipment.name, url: `${baseUrl}/equipment/${equipment.slug}` },
  ]);

  return (
    <div className="space-y-0">
      {/* Inject JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Header Banner & Breadcrumbs */}
      <section className="border-b border-brand-surface-border bg-gradient-to-b from-brand-black to-brand-charcoal py-10">
        <div className="container space-y-4">
          {/* Breadcrumbs */}
          <nav className="flex items-center space-x-2 text-xs text-gray-400">
            <Link href="/" className="hover:text-brand-yellow">Home</Link>
            <ChevronRight className="h-3.5 w-3.5 text-gray-600" />
            <Link href="/equipment" className="hover:text-brand-yellow">Equipment</Link>
            <ChevronRight className="h-3.5 w-3.5 text-gray-600" />
            <span className="text-brand-yellow font-medium">{equipment.shortName}</span>
          </nav>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-yellow">
                {equipment.category} • {equipment.brand}
              </span>
              <h1 className="font-heading text-3xl font-extrabold text-white sm:text-4xl">
                {equipment.pageHeading}
              </h1>
            </div>

            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="flex items-center gap-2 rounded-xl bg-brand-yellow px-5 py-3 text-sm font-bold text-brand-black hover:bg-brand-yellow-dark transition self-start md:self-auto"
            >
              <Phone className="h-4 w-4" />
              <span>Call Owner: {BUSINESS_INFO.phone}</span>
            </a>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="bg-brand-black py-16 border-b border-brand-surface-border">
        <div className="container">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            {/* Left Column: Image, Specifications & Description */}
            <div className="lg:col-span-7 space-y-10">
              {/* Primary Image Display */}
              <div className="relative h-[320px] sm:h-[420px] w-full rounded-2xl border border-brand-surface-border bg-brand-charcoal p-6 overflow-hidden">
                <Image
                  src={equipment.primaryImage}
                  alt={equipment.imageAltText}
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              {/* Pricing Discrepancy Note Warning if Applicable */}
              {equipment.pricingDiscrepancyNote && (
                <div className="rounded-xl border border-amber-500/30 bg-amber-500/10 p-4 flex items-start space-x-3 text-amber-300 text-xs">
                  <AlertCircle className="h-5 w-5 shrink-0 text-amber-400 mt-0.5" />
                  <div>
                    <span className="font-bold uppercase tracking-wider">Pricing Note:</span>
                    <p className="mt-0.5">{equipment.pricingDiscrepancyNote}</p>
                  </div>
                </div>
              )}

              {/* Long Description */}
              <div className="space-y-3">
                <h2 className="font-heading text-2xl font-bold text-white">Machine Overview</h2>
                <p className="text-sm text-gray-300 leading-relaxed">
                  {equipment.longDescription}
                </p>
              </div>

              {/* Verified Specifications */}
              <div className="space-y-4">
                <h3 className="font-heading text-xl font-bold text-white flex items-center gap-2">
                  <Wrench className="h-5 w-5 text-brand-yellow" />
                  <span>Technical Specifications</span>
                </h3>
                <div className="rounded-xl border border-brand-surface-border bg-brand-charcoal overflow-hidden divide-y divide-brand-surface-border">
                  {equipment.specifications.map((spec) => (
                    <div key={spec.label} className="grid grid-cols-1 sm:grid-cols-3 p-4 text-xs">
                      <span className="font-bold text-gray-400 sm:col-span-1">{spec.label}</span>
                      <span className="font-medium text-white sm:col-span-2 mt-1 sm:mt-0">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Attachments Section */}
              <div className="space-y-4">
                <h3 className="font-heading text-xl font-bold text-white">Included &amp; Optional Attachments</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {equipment.attachments.map((att) => (
                    <div
                      key={att.name}
                      className="rounded-xl border border-brand-surface-border bg-brand-charcoal p-4 space-y-1"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-sm text-white">{att.name}</span>
                        {att.included ? (
                          <span className="rounded bg-emerald-500/20 px-2 py-0.5 text-[10px] font-bold text-emerald-400 border border-emerald-500/30">
                            INCLUDED
                          </span>
                        ) : (
                          <span className="rounded bg-brand-yellow/20 px-2 py-0.5 text-[10px] font-bold text-brand-yellow border border-brand-yellow/30">
                            OPTIONAL
                          </span>
                        )}
                      </div>
                      {!att.included && att.dailyRate && (
                        <p className="text-xs text-gray-400">
                          Add-on: ${att.dailyRate}/day | ${att.weeklyRate}/week | ${att.monthlyRate}/month
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Best Uses */}
              <div className="space-y-4">
                <h3 className="font-heading text-xl font-bold text-white">Recommended Applications</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {equipment.recommendedUses.map((use) => (
                    <div key={use} className="flex items-center space-x-2 text-xs text-gray-300">
                      <CheckCircle2 className="h-4 w-4 text-brand-yellow shrink-0" />
                      <span>{use}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Delivery Details */}
              <div className="rounded-2xl border border-brand-surface-border bg-brand-charcoal p-6 space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-yellow/10 text-brand-yellow">
                    <Truck className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-heading text-base font-bold text-white">Delivery &amp; Pickup Policy</h4>
                    <p className="text-xs text-gray-400">{equipment.deliveryInfo}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Rate Card & Quote Form */}
            <div className="lg:col-span-5 space-y-8">
              {/* Rate Card */}
              <div className="rounded-2xl border border-brand-yellow/40 bg-brand-charcoal p-6 space-y-6 shadow-2xl sticky top-24">
                <div className="border-b border-brand-surface-border pb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-yellow">
                    Rental Rate Schedule
                  </span>
                  <h3 className="font-heading text-2xl font-bold text-white mt-1">
                    {equipment.shortName}
                  </h3>
                </div>

                <div className="space-y-3">
                  {equipment.rates.daily && (
                    <div className="flex items-center justify-between border-b border-brand-surface-border/50 pb-2">
                      <span className="text-sm font-medium text-gray-300">Daily Rate</span>
                      <span className="font-heading text-xl font-bold text-brand-yellow">
                        ${equipment.rates.daily}
                      </span>
                    </div>
                  )}
                  {equipment.rates.dailyDelivered && (
                    <div className="flex items-center justify-between border-b border-brand-surface-border/50 pb-2">
                      <span className="text-sm font-medium text-gray-300">Daily Rate (We Deliver)</span>
                      <span className="font-heading text-xl font-bold text-brand-yellow">
                        ${equipment.rates.dailyDelivered}
                      </span>
                    </div>
                  )}
                  {equipment.rates.weekly && (
                    <div className="flex items-center justify-between border-b border-brand-surface-border/50 pb-2">
                      <span className="text-sm font-medium text-gray-300">Weekly Rate</span>
                      <span className="font-heading text-xl font-bold text-white">
                        ${equipment.rates.weekly}
                      </span>
                    </div>
                  )}
                  {equipment.rates.twoWeek && (
                    <div className="flex items-center justify-between border-b border-brand-surface-border/50 pb-2">
                      <span className="text-sm font-medium text-gray-300">2-Week Rate</span>
                      <span className="font-heading text-xl font-bold text-white">
                        ${equipment.rates.twoWeek}
                      </span>
                    </div>
                  )}
                  {equipment.rates.monthly && (
                    <div className="flex items-center justify-between border-b border-brand-surface-border/50 pb-2">
                      <span className="text-sm font-medium text-gray-300">Monthly Rate</span>
                      <span className="font-heading text-xl font-bold text-white">
                        ${equipment.rates.monthly}
                      </span>
                    </div>
                  )}
                  {equipment.rates.customPricingNote && (
                    <p className="text-xs text-brand-yellow italic">
                      {equipment.rates.customPricingNote}
                    </p>
                  )}
                </div>

                {/* Form Header */}
                <div className="pt-4 border-t border-brand-surface-border">
                  <h4 className="font-heading text-lg font-bold text-white mb-4">
                    Check Availability for {equipment.shortName}
                  </h4>
                  <QuoteForm preselectedEquipment={equipment.name} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment Specific FAQs */}
      {equipment.faqs && equipment.faqs.length > 0 && (
        <FaqAccordion faqs={equipment.faqs} title={`${equipment.shortName} FAQs`} />
      )}

      {/* Related Equipment */}
      {related.length > 0 && (
        <section className="bg-brand-charcoal py-16 border-t border-brand-surface-border">
          <div className="container space-y-8">
            <h2 className="font-heading text-2xl font-bold text-white">Related Equipment</h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {related.map((item) => (
                <EquipmentCard key={item.id} equipment={item} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
