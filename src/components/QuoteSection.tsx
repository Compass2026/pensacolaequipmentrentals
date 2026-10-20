import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { BUSINESS_INFO } from "@/data/business";
import { QuoteForm } from "./QuoteForm";
import { Reveal } from "./ui/Reveal";

interface QuoteSectionProps {
  eyebrow?: string;
  title?: string;
  description?: string;
  preselectedEquipment?: string;
}

/** Dark split section pairing contact details with the quote form on a white card. */
export function QuoteSection({
  eyebrow = "Get started today",
  title = "Ready to rent equipment or clear your land?",
  description = "Fill out the form or call us directly. We'll confirm machine availability and delivery timing right away.",
  preselectedEquipment,
}: QuoteSectionProps) {
  return (
    <section id="quote-section" className="relative isolate overflow-hidden bg-hero py-24 text-white lg:py-32">
      <div className="absolute inset-0 -z-10 bg-blueprint" />
      <div className="absolute -left-40 bottom-0 -z-10 h-[480px] w-[480px] rounded-full bg-sun opacity-20 blur-3xl" />
      <div className="container">
        <div className="grid gap-14 lg:grid-cols-12">
          <Reveal className="space-y-8 lg:col-span-5">
            <span className="eyebrow-light">{eyebrow}</span>
            <h2 className="display text-4xl sm:text-5xl">{title}</h2>
            <p className="max-w-md text-base leading-relaxed text-white/65 sm:text-lg">{description}</p>
            <ul className="space-y-5 border-t border-white/10 pt-8">
              <li>
                <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="group flex items-center gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-red shadow-glow-red">
                    <Phone className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-[10px] font-bold uppercase tracking-[0.18em] text-white/50">Call or text</span>
                    <span className="font-heading text-2xl font-bold transition group-hover:text-brand-yellow">{BUSINESS_INFO.phone}</span>
                  </span>
                </a>
              </li>
              <li className="flex items-center gap-4 text-sm text-white/70">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                  <Mail className="h-5 w-5 text-brand-yellow" />
                </span>
                <a href={`mailto:${BUSINESS_INFO.email}`} className="break-all hover:text-white">
                  {BUSINESS_INFO.email}
                </a>
              </li>
              <li className="flex items-center gap-4 text-sm text-white/70">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                  <MapPin className="h-5 w-5 text-brand-yellow" />
                </span>
                {BUSINESS_INFO.address.formatted}
              </li>
              <li className="flex items-center gap-4 text-sm text-white/70">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                  <Clock className="h-5 w-5 text-brand-yellow" />
                </span>
                Daily, weekly &amp; monthly rentals
              </li>
            </ul>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-7">
            <div className="rounded-[32px] bg-white p-6 text-brand-black shadow-2xl sm:p-10">
              <QuoteForm preselectedEquipment={preselectedEquipment} />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
