import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { EQUIPMENT_CATALOG, getEquipmentBySlug, getRelatedEquipment } from "@/data/equipment";
import { BUSINESS_INFO } from "@/data/business";
import { EquipmentCard } from "@/components/EquipmentCard";
import { QuoteForm } from "@/components/QuoteForm";
import { FaqAccordion } from "@/components/FaqAccordion";
import { Reveal } from "@/components/ui/Reveal";
import { generateEquipmentSchema, generateBreadcrumbSchema } from "@/lib/jsonld";
import { Phone, Check, Truck, ChevronRight, ArrowRight, ShieldCheck, Plus } from "lucide-react";

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

const money = (n: number) => `$${n.toLocaleString("en-US")}`;

export default async function EquipmentDetailPage({ params }: Props) {
  const { slug } = await params;
  const equipment = getEquipmentBySlug(slug);

  if (!equipment) {
    return (
      <div className="container space-y-4 py-24 text-center">
        <h1 className="display text-4xl text-brand-black">Machine not found</h1>
        <p className="text-gray-500">The requested equipment item does not exist.</p>
        <Link href="/equipment" className="btn-primary">
          Back to equipment
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

  const { rates } = equipment;
  const rateTiles = [
    { label: "Daily", value: rates.daily },
    { label: "Delivered day", value: rates.dailyDelivered },
    { label: "Weekly", value: rates.weekly },
    { label: "2 weeks", value: rates.twoWeek },
    { label: "Monthly", value: rates.monthly },
  ].filter((tile): tile is { label: string; value: number } => typeof tile.value === "number");

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Product hero */}
      <section className="relative overflow-hidden bg-slate-50">
        <div className="absolute inset-0 bg-blueprint-light" />
        <div className="container relative py-10 lg:py-16">
          <nav aria-label="Breadcrumb" className="mb-8 flex flex-wrap items-center gap-1.5 text-xs font-medium text-gray-500">
            <Link href="/" className="hover:text-brand-black">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <Link href="/equipment" className="hover:text-brand-black">Equipment</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-brand-red">{equipment.shortName}</span>
          </nav>

          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
            <Reveal className="lg:col-span-7">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[32px] border border-gray-200 bg-white shadow-card">
                <div className="absolute left-1/2 top-1/2 h-[78%] aspect-square -translate-x-1/2 -translate-y-1/2 rounded-full bg-sun opacity-90" />
                <div className="absolute left-1/2 top-1/2 h-[92%] aspect-square -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-gray-200" />
                <Image
                  src={equipment.primaryImage}
                  alt={equipment.imageAltText}
                  fill
                  priority
                  sizes="(min-width: 1024px) 55vw, 100vw"
                  className="object-contain p-6 drop-shadow-[0_30px_30px_rgba(17,24,39,0.35)]"
                />
                <span className="absolute left-5 top-5 rounded-full bg-brand-black px-3.5 py-1.5 text-xs font-semibold text-white">
                  {equipment.category}
                </span>
                <span className="absolute right-5 top-5 flex items-center gap-1.5 rounded-full border border-gray-200 bg-white/90 px-3.5 py-1.5 text-xs font-semibold text-brand-black backdrop-blur">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  {equipment.availabilityLabel}
                </span>
              </div>
            </Reveal>

            <Reveal delay={120} className="space-y-7 lg:col-span-5">
              <div className="space-y-4">
                <span className="eyebrow">
                  {equipment.year ? `${equipment.year} · ` : ""}
                  {equipment.brand} {equipment.model}
                </span>
                <h1 className="display text-4xl text-brand-black sm:text-5xl">{equipment.pageHeading}</h1>
                <p className="text-base leading-relaxed text-gray-600 sm:text-lg">{equipment.shortDescription}</p>
              </div>

              {rateTiles.length > 0 ? (
                <div className="grid grid-cols-3 gap-px overflow-hidden rounded-2xl border border-gray-200 bg-gray-200">
                  {rateTiles.slice(0, 3).map((tile, idx) => (
                    <div key={tile.label} className="bg-white p-4">
                      <div className="text-[10px] font-bold uppercase tracking-[0.16em] text-gray-400">{tile.label}</div>
                      <div className={`mt-1 font-heading text-2xl font-extrabold tracking-tight ${idx === 0 ? "text-brand-red" : "text-brand-black"}`}>
                        {money(tile.value)}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="rounded-2xl border border-gray-200 bg-white p-5">
                  <div className="text-[10px] font-bold uppercase tracking-[0.16em] text-gray-400">Pricing</div>
                  <div className="mt-1 font-heading text-2xl font-bold text-brand-black">Call or text for current rates</div>
                </div>
              )}

              <ul className="space-y-2.5 text-sm text-gray-700">
                {equipment.attachments
                  .filter((att) => att.included)
                  .map((att) => (
                    <li key={att.name} className="flex items-center gap-2.5">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-red/10">
                        <Check className="h-3 w-3 text-brand-red" />
                      </span>
                      {att.name} included
                    </li>
                  ))}
                <li className="flex items-center gap-2.5">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-blue/10">
                    <Truck className="h-3 w-3 text-brand-blue" />
                  </span>
                  Delivery &amp; pickup within {BUSINESS_INFO.deliveryRadiusMiles} miles
                </li>
              </ul>

              <div className="flex flex-wrap gap-3">
                <a href="#reserve" className="btn-primary">
                  Check availability
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="btn-outline-dark">
                  <Phone className="h-4 w-4" />
                  {BUSINESS_INFO.phone}
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container">
          <div className="grid gap-14 lg:grid-cols-12">
            <div className="space-y-16 lg:col-span-7">
              <Reveal className="space-y-4">
                <span className="eyebrow">Overview</span>
                <h2 className="display text-3xl text-brand-black sm:text-4xl">Machine overview</h2>
                <p className="text-base leading-relaxed text-gray-600">{equipment.longDescription}</p>
              </Reveal>

              <Reveal className="space-y-6">
                <h2 className="font-heading text-2xl font-bold text-brand-black">Specifications</h2>
                <dl className="divide-y divide-gray-100 overflow-hidden rounded-3xl border border-gray-200">
                  {equipment.specifications.map((spec) => (
                    <div key={spec.label} className="grid gap-1 px-6 py-4 text-sm sm:grid-cols-3 sm:gap-4">
                      <dt className="font-semibold text-gray-500">{spec.label}</dt>
                      <dd className="font-medium text-brand-black sm:col-span-2">{spec.value}</dd>
                    </div>
                  ))}
                </dl>
              </Reveal>

              <Reveal className="space-y-6">
                <h2 className="font-heading text-2xl font-bold text-brand-black">Included &amp; optional attachments</h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  {equipment.attachments.map((att) => (
                    <div key={att.name} className="flex items-start gap-4 rounded-2xl border border-gray-200 p-5">
                      <span
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${
                          att.included ? "bg-emerald-50 text-emerald-600" : "bg-brand-yellow/15 text-brand-yellow-dark"
                        }`}
                      >
                        {att.included ? <Check className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
                      </span>
                      <div className="space-y-1">
                        <div className="font-semibold text-brand-black">{att.name}</div>
                        {att.included ? (
                          <div className="text-xs font-semibold uppercase tracking-wider text-emerald-600">Included</div>
                        ) : (
                          <div className="text-xs text-gray-500">
                            Add-on{att.dailyRate ? `: $${att.dailyRate}/day · $${att.weeklyRate}/wk · $${att.monthlyRate}/mo` : ""}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>

              <Reveal className="space-y-6">
                <h2 className="font-heading text-2xl font-bold text-brand-black">Great for</h2>
                <div className="flex flex-wrap gap-2">
                  {equipment.recommendedUses.map((use) => (
                    <span key={use} className="rounded-full border border-gray-200 bg-slate-50 px-4 py-2 text-sm font-medium text-gray-700">
                      {use}
                    </span>
                  ))}
                </div>
              </Reveal>

              <Reveal>
                <div className="flex items-start gap-5 rounded-3xl bg-hero p-7 text-white">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/10">
                    <Truck className="h-6 w-6 text-brand-yellow" />
                  </span>
                  <div>
                    <h3 className="font-heading text-lg font-bold">Delivery &amp; pickup</h3>
                    <p className="mt-1 text-sm leading-relaxed text-white/65">{equipment.deliveryInfo}</p>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Sticky reservation card */}
            <aside id="reserve" className="lg:col-span-5">
              <div className="space-y-6 rounded-[32px] border border-gray-200 bg-white p-6 shadow-lift sm:p-8 lg:sticky lg:top-28">
                <div className="flex items-center justify-between gap-4 border-b border-gray-100 pb-6">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-gray-400">Reserve</span>
                    <h2 className="font-heading text-xl font-bold text-brand-black">{equipment.shortName}</h2>
                  </div>
                  <ShieldCheck className="h-8 w-8 text-brand-blue" />
                </div>

                {rateTiles.length > 0 && (
                  <dl className="space-y-2.5">
                    {rateTiles.map((tile) => (
                      <div key={tile.label} className="flex items-baseline justify-between text-sm">
                        <dt className="text-gray-500">{tile.label} rate</dt>
                        <dd className="font-heading text-lg font-bold text-brand-black">{money(tile.value)}</dd>
                      </div>
                    ))}
                  </dl>
                )}
                {rates.customPricingNote && (
                  <p className="rounded-xl bg-brand-yellow/10 px-4 py-3 text-xs leading-relaxed text-brand-charcoal">{rates.customPricingNote}</p>
                )}

                <div className="border-t border-gray-100 pt-6">
                  <QuoteForm preselectedEquipment={equipment.name} compact />
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {equipment.faqs && equipment.faqs.length > 0 && (
        <FaqAccordion faqs={equipment.faqs} title={`${equipment.shortName} FAQs`} subtitle="Quick answers about this machine, its rates and delivery." />
      )}

      {related.length > 0 && (
        <section className="bg-white py-20 lg:py-28">
          <div className="container space-y-10">
            <div className="flex items-end justify-between gap-6">
              <div className="space-y-3">
                <span className="eyebrow">Pairs well with</span>
                <h2 className="display text-3xl text-brand-black sm:text-4xl">Related equipment</h2>
              </div>
              <Link href="/equipment" className="hidden text-sm font-bold text-brand-blue hover:text-brand-red sm:inline-flex sm:items-center sm:gap-2">
                Full fleet <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => (
                <EquipmentCard key={item.id} equipment={item} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
