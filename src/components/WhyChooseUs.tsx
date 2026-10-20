import Image from "next/image";
import { PhoneCall } from "lucide-react";
import { BUSINESS_INFO } from "@/data/business";
import { Reveal } from "./ui/Reveal";

const POINTS = [
  {
    title: "Father & son values",
    description: "When you call, you speak directly with the owners. We treat your jobsite with care and personal commitment.",
  },
  {
    title: "Modern, maintained fleet",
    description: "2022–2023 Bobcat, Kubota, Iron Bull and Gravely equipment, serviced regularly for maximum uptime.",
  },
  {
    title: "Prompt jobsite delivery",
    description: "We haul equipment straight to your property or jobsite within 20 miles of Pensacola.",
  },
  {
    title: "Rent it — or hire us",
    description: "Run the machine yourself, or hand the whole job to our crew for full land and brush clearing.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="relative isolate overflow-hidden bg-hero py-24 text-white lg:py-32">
      <div className="absolute inset-0 -z-10 bg-blueprint" />
      <div className="container">
        <div className="grid items-center gap-16 lg:grid-cols-12 lg:gap-20">
          {/* Photo collage */}
          <Reveal className="relative mx-auto w-full max-w-md lg:col-span-5 lg:max-w-none">
            <div className="absolute -left-10 -top-10 h-56 w-56 rounded-full bg-sun opacity-80 blur-[2px]" />
            <div className="relative aspect-[3/4] w-[82%] overflow-hidden rounded-[28px] border border-white/10 shadow-2xl">
              <Image
                src="https://www.bnbcoastalcuts.com/wp-content/uploads/2025/05/pensacola2.jpg"
                alt="Bobcat track loader grading red clay on a Pensacola jobsite"
                fill
                sizes="(min-width: 1024px) 35vw, 80vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-10 right-0 aspect-[3/4] w-[52%] overflow-hidden rounded-[24px] border-[6px] border-brand-navy shadow-2xl">
              <Image
                src="https://www.bnbcoastalcuts.com/wp-content/uploads/2025/05/pensacola1.jpg"
                alt="Bobcat mini excavator and skid steer clearing a lot"
                fill
                sizes="(min-width: 1024px) 20vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="absolute left-4 top-6 rounded-2xl border border-white/15 bg-brand-black/70 px-5 py-4 backdrop-blur-md sm:left-6">
              <div className="font-heading text-3xl font-extrabold text-brand-yellow">Est. 2023</div>
              <div className="text-xs font-medium text-white/70">Family owned in Pensacola</div>
            </div>
          </Reveal>

          {/* Copy */}
          <div className="space-y-10 pt-10 lg:col-span-7 lg:pt-0">
            <Reveal className="space-y-5">
              <span className="eyebrow-light">Why Pensacola Equipment Rentals</span>
              <h2 className="display text-4xl sm:text-5xl lg:text-[3.5rem]">
                Built for local contractors &amp; <span className="text-sun">DIY homeowners.</span>
              </h2>
              <p className="max-w-2xl text-base leading-relaxed text-white/65 sm:text-lg">
                Whether you&apos;re clearing a backyard lot in Gulf Breeze, trenching utilities in Milton, or hauling
                tear-off debris in Pensacola, our team brings reliable machinery and friendly, local support.
              </p>
            </Reveal>

            <div className="grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-2">
              {POINTS.map((pt, idx) => (
                <Reveal key={pt.title} delay={idx * 90} className="group bg-brand-navy/80 p-7 transition hover:bg-brand-navy">
                  <span className="font-heading text-sm font-bold text-brand-red">0{idx + 1}</span>
                  <h3 className="mt-3 font-heading text-lg font-bold">{pt.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">{pt.description}</p>
                </Reveal>
              ))}
            </div>

            <Reveal>
              <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="btn-primary">
                <PhoneCall className="h-4 w-4" />
                Call the owners: {BUSINESS_INFO.phone}
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
