import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import { BUSINESS_INFO } from "@/data/business";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";

/** Approximate map positions (1 mile = 8 units) relative to the Chapel St yard at (200, 200). */
const PINS: Record<string, { x: number; y: number; miles: string }> = {
  "pensacola-fl": { x: 200, y: 200, miles: "Home base" },
  "gulf-breeze-fl": { x: 226, y: 273, miles: "~10 mi" },
  "milton-fl": { x: 286, y: 122, miles: "~15 mi" },
  "navarre-fl": { x: 372, y: 250, miles: "~22 mi" },
};

export function ServiceAreaMap() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-24 lg:py-32">
      <div className="absolute inset-0 bg-blueprint-light" />
      <div className="container relative">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="space-y-10">
            <SectionHeading
              eyebrow="Local coverage"
              title={
                <>
                  Delivered across the <span className="text-brand-blue">Gulf Coast.</span>
                </>
              }
              description={`Rates include drop-off and pickup within ${BUSINESS_INFO.deliveryRadiusMiles} miles of our Pensacola yard. Farther out? We'll come to you for a custom rate.`}
            />
            <div className="grid gap-3 sm:grid-cols-2">
              {BUSINESS_INFO.serviceAreas.map((area, idx) => (
                <Reveal key={area.slug} delay={idx * 80}>
                  <Link
                    href={`/service-areas/${area.slug}`}
                    className="group flex items-center justify-between rounded-2xl border border-gray-200 bg-white p-5 shadow-card transition hover:-translate-y-0.5 hover:border-brand-blue hover:shadow-lift"
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-blue/[0.07] text-brand-blue transition group-hover:bg-brand-blue group-hover:text-white">
                        <MapPin className="h-4 w-4" />
                      </span>
                      <div>
                        <div className="font-heading font-bold text-brand-black">
                          {area.name}, {area.state}
                        </div>
                        <div className="text-xs text-gray-500">{PINS[area.slug]?.miles}</div>
                      </div>
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-gray-300 transition group-hover:text-brand-blue" />
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={150}>
            <div className="relative aspect-square overflow-hidden rounded-[32px] bg-hero p-6 shadow-lift">
              <div className="absolute inset-0 bg-blueprint" />
              <svg viewBox="0 0 400 400" className="relative h-full w-full" role="img" aria-label="Delivery radius map around Pensacola">
                <defs>
                  <radialGradient id="radius-fill" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#004AAD" stopOpacity="0.45" />
                    <stop offset="100%" stopColor="#004AAD" stopOpacity="0.05" />
                  </radialGradient>
                </defs>
                <circle cx="200" cy="200" r="160" fill="url(#radius-fill)" stroke="#F5B93F" strokeOpacity="0.7" strokeDasharray="4 6" />
                <circle cx="200" cy="200" r="80" fill="none" stroke="white" strokeOpacity="0.15" />
                <circle cx="200" cy="200" r="40" fill="none" stroke="white" strokeOpacity="0.15" />
                <text x="200" y="34" textAnchor="middle" className="fill-brand-yellow font-sans text-[10px] font-bold uppercase tracking-[0.2em]">
                  20-mile delivery radius
                </text>
                <text x="200" y="116" textAnchor="middle" className="fill-white/40 font-sans text-[9px]">10 mi</text>
                {BUSINESS_INFO.serviceAreas.map((area) => {
                  const pin = PINS[area.slug];
                  if (!pin) return null;
                  const home = area.slug === "pensacola-fl";
                  return (
                    <g key={area.slug}>
                      {!home && <line x1="200" y1="200" x2={pin.x} y2={pin.y} stroke="white" strokeOpacity="0.2" />}
                      {home && (
                        <circle cx={pin.x} cy={pin.y} r="10" fill="#D74E31" className="origin-center animate-pulse-ring [transform-box:fill-box]" />
                      )}
                      <circle cx={pin.x} cy={pin.y} r={home ? 8 : 5} fill={home ? "#D74E31" : "#ffffff"} stroke={home ? "#ffffff" : "#004AAD"} strokeWidth="2" />
                      <text
                        x={pin.x + (pin.x > 330 ? -12 : 12)}
                        y={pin.y + 4}
                        textAnchor={pin.x > 330 ? "end" : "start"}
                        className="fill-white font-heading text-[13px] font-bold"
                      >
                        {area.name}
                      </text>
                    </g>
                  );
                })}
              </svg>
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between rounded-2xl border border-white/10 bg-brand-black/60 px-5 py-4 text-white backdrop-blur-md">
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/50">Our yard</div>
                  <div className="text-sm font-semibold">{BUSINESS_INFO.address.formatted}</div>
                </div>
                <span className="h-3 w-3 rounded-full bg-brand-red ring-4 ring-brand-red/30" />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
