import { Metadata } from "next";
import { BUSINESS_INFO } from "@/data/business";
import { QuoteForm } from "@/components/QuoteForm";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Pensacola Equipment Rentals | Call 850-407-6566",
  description: "Contact Pensacola Equipment Rentals for equipment availability, rental rates, and land clearing quotes in Pensacola, FL. Call or text 850-407-6566.",
};

export default function ContactPage() {
  const channels = [
    {
      icon: Phone,
      label: "Call or text",
      value: BUSINESS_INFO.phone,
      href: `tel:${BUSINESS_INFO.phoneRaw}`,
      note: "Speak directly with the owners",
      accent: true,
    },
    {
      icon: Mail,
      label: "Email",
      value: BUSINESS_INFO.email,
      href: `mailto:${BUSINESS_INFO.email}`,
      note: "We reply as fast as we can",
    },
    {
      icon: MapPin,
      label: "Our yard",
      value: BUSINESS_INFO.address.formatted,
      href: `https://maps.google.com/?q=${encodeURIComponent(BUSINESS_INFO.address.formatted)}`,
      note: "Get directions",
      external: true,
    },
  ];

  return (
    <>
      <PageHero
        eyebrow="Direct owner communication"
        title={
          <>
            Let&apos;s talk about <span className="text-sun">your project.</span>
          </>
        }
        description="Questions about equipment availability, jobsite delivery or land clearing quotes? Reach out below or call us anytime."
        breadcrumbs={[{ name: "Home", href: "/" }, { name: "Contact" }]}
      />

      <section className="bg-slate-50 py-20 lg:py-28">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="space-y-4 lg:col-span-5">
              {channels.map((c, idx) => {
                const Icon = c.icon;
                return (
                  <Reveal key={c.label} delay={idx * 80}>
                    <a
                      href={c.href}
                      target={c.external ? "_blank" : undefined}
                      rel={c.external ? "noopener noreferrer" : undefined}
                      className={`group flex items-center gap-5 rounded-3xl border p-6 transition duration-300 hover:-translate-y-0.5 ${
                        c.accent
                          ? "border-transparent bg-hero text-white shadow-lift"
                          : "border-gray-200 bg-white text-brand-black shadow-card hover:shadow-lift"
                      }`}
                    >
                      <span
                        className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${
                          c.accent ? "bg-brand-red shadow-glow-red" : "bg-brand-blue/[0.07] text-brand-blue"
                        }`}
                      >
                        <Icon className="h-6 w-6" />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className={`block text-[10px] font-bold uppercase tracking-[0.18em] ${c.accent ? "text-white/50" : "text-gray-400"}`}>
                          {c.label}
                        </span>
                        <span className={`block break-words font-heading font-bold ${c.accent ? "text-2xl" : "text-base"}`}>{c.value}</span>
                        <span className={`text-xs ${c.accent ? "text-white/60" : "text-gray-500"}`}>{c.note}</span>
                      </span>
                      <ArrowUpRight className={`h-5 w-5 shrink-0 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 ${c.accent ? "text-brand-yellow" : "text-gray-300"}`} />
                    </a>
                  </Reveal>
                );
              })}

              <Reveal delay={260}>
                <div className="relative h-72 overflow-hidden rounded-3xl border border-gray-200 shadow-card">
                  <iframe
                    src="https://maps.google.com/maps?q=7013%20Chapel%20St%2C%20Pensacola%2C%20FL%2032504&t=m&z=11&output=embed&iwloc=near"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    title="Pensacola Equipment Rentals Location"
                    className="grayscale-[30%]"
                  />
                </div>
              </Reveal>
            </div>

            <Reveal delay={120} className="lg:col-span-7">
              <div className="rounded-[32px] border border-gray-200 bg-white p-6 shadow-lift sm:p-10">
                <div className="mb-8 space-y-2">
                  <span className="eyebrow">Send a message</span>
                  <h2 className="display text-3xl text-brand-black sm:text-4xl">Request info &amp; scheduling</h2>
                </div>
                <QuoteForm />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
