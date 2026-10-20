import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check, PhoneCall } from "lucide-react";
import { BUSINESS_INFO } from "@/data/business";
import { Reveal } from "./ui/Reveal";

const SERVICES = [
  "Overgrown lot & brush removal",
  "Stump & root excavation",
  "Site prep & yard leveling",
  "Free on-site estimates",
];

export function LandClearingSection() {
  return (
    <section className="relative isolate overflow-hidden bg-brand-black py-28 text-white lg:py-36">
      <Image
        src="https://www.bnbcoastalcuts.com/wp-content/uploads/2025/05/448692327_122093289428383926_1578460628476692250_n.jpg"
        alt=""
        fill
        sizes="100vw"
        className="-z-20 object-cover object-right"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-brand-black via-brand-black/90 to-brand-black/30" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-brand-black/80 via-transparent to-transparent" />

      <div className="container">
        <Reveal className="max-w-2xl space-y-8">
          <span className="eyebrow-light">Full-service land clearing</span>
          <h2 className="display text-4xl sm:text-5xl lg:text-6xl">
            Don&apos;t want to run the machine? <span className="text-sun">We&apos;ll clear it for you.</span>
          </h2>
          <p className="text-base leading-relaxed text-white/70 sm:text-lg">
            Hand off the heavy work. Our father-and-son crew clears brush, removes trees, grades property and preps sites
            fast across Pensacola, Gulf Breeze, Milton and Navarre.
          </p>
          <ul className="grid gap-3 sm:grid-cols-2">
            {SERVICES.map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm font-medium text-white/90">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-red">
                  <Check className="h-3.5 w-3.5" />
                </span>
                {item}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-3 pt-2">
            <Link href="/land-clearing" className="btn-primary">
              Explore land clearing
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="btn-outline-light">
              <PhoneCall className="h-4 w-4" />
              {BUSINESS_INFO.phone}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
