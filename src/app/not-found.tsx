import Link from "next/link";
import { Truck, Home, Phone } from "lucide-react";
import { BUSINESS_INFO } from "@/data/business";

export default function NotFound() {
  return (
    <div className="container py-24 text-center space-y-6 max-w-xl mx-auto">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-yellow/10 text-brand-yellow border border-brand-yellow/30">
        <Truck className="h-8 w-8" />
      </div>

      <div className="space-y-2">
        <span className="text-xs font-bold uppercase tracking-widest text-brand-yellow">
          404 Error - Page Not Found
        </span>
        <h1 className="font-heading text-3xl font-extrabold text-white sm:text-4xl">
          Looks Like That Page Moved
        </h1>
        <p className="text-sm text-gray-400 leading-relaxed">
          The page or equipment link you requested could not be located. Browse our main catalog or contact us directly.
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
        <Link
          href="/"
          className="flex items-center gap-2 rounded-lg bg-brand-yellow px-6 py-3 font-bold text-brand-black hover:bg-brand-yellow-dark transition"
        >
          <Home className="h-4 w-4" />
          <span>Return Home</span>
        </Link>
        <Link
          href="/equipment"
          className="flex items-center gap-2 rounded-lg border border-brand-surface-border bg-brand-charcoal px-6 py-3 font-bold text-white hover:border-brand-yellow transition"
        >
          <span>View Equipment Catalog</span>
        </Link>
      </div>
    </div>
  );
}
