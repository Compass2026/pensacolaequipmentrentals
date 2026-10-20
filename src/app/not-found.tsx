import Link from "next/link";
import { Home, Phone, ArrowRight } from "lucide-react";
import { BUSINESS_INFO } from "@/data/business";

export default function NotFound() {
  return (
    <section className="relative isolate overflow-hidden bg-hero text-white">
      <div className="absolute inset-0 -z-10 bg-blueprint" />
      <div className="absolute left-1/2 top-1/2 -z-10 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sun opacity-20 blur-3xl" />
      <div className="container flex min-h-[70vh] flex-col items-center justify-center space-y-8 py-24 text-center">
        <span className="font-heading text-[8rem] font-extrabold leading-none tracking-tighter text-transparent [-webkit-text-stroke:2px_rgba(245,185,63,0.8)] sm:text-[11rem]">
          404
        </span>
        <div className="max-w-xl space-y-3">
          <h1 className="display text-4xl sm:text-5xl">Looks like that page moved.</h1>
          <p className="text-white/65">
            The page or equipment link you requested couldn&apos;t be found. Browse the fleet or reach out directly.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link href="/" className="btn-primary">
            <Home className="h-4 w-4" />
            Return home
          </Link>
          <Link href="/equipment" className="btn-outline-light">
            View equipment
            <ArrowRight className="h-4 w-4" />
          </Link>
          <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="btn-outline-light">
            <Phone className="h-4 w-4" />
            {BUSINESS_INFO.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
