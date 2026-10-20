import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { ChevronRight } from "lucide-react";

interface Crumb {
  name: string;
  href?: string;
}

interface PageHeroProps {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  breadcrumbs?: Crumb[];
  image?: { src: string; alt: string };
  children?: ReactNode;
}

/** Dark, blueprint-textured page header shared by every inner page. */
export function PageHero({ eyebrow, title, description, breadcrumbs, image, children }: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-hero text-white">
      <div className="absolute inset-0 -z-10 bg-blueprint" />
      <div className="absolute inset-0 -z-10 bg-noise opacity-[0.05] mix-blend-overlay" />
      {/* Sunset disc */}
      <div className="absolute -right-40 -top-40 -z-10 h-[520px] w-[520px] rounded-full bg-sun opacity-20 blur-3xl" />

      <div className="container relative py-16 sm:py-20 lg:py-24">
        <div className={`grid items-center gap-12 ${image ? "lg:grid-cols-12" : ""}`}>
          <div className={`${image ? "lg:col-span-7" : "max-w-3xl"} space-y-6`}>
            {breadcrumbs && (
              <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-xs font-medium text-white/50">
                {breadcrumbs.map((crumb, idx) => (
                  <span key={crumb.name} className="flex items-center gap-1.5">
                    {crumb.href ? (
                      <Link href={crumb.href} className="transition hover:text-white">
                        {crumb.name}
                      </Link>
                    ) : (
                      <span className="text-brand-yellow">{crumb.name}</span>
                    )}
                    {idx < breadcrumbs.length - 1 && <ChevronRight className="h-3 w-3" />}
                  </span>
                ))}
              </nav>
            )}
            <span className="eyebrow-light">{eyebrow}</span>
            <h1 className="display text-4xl sm:text-5xl lg:text-6xl">{title}</h1>
            {description && <p className="max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">{description}</p>}
            {children && <div className="flex flex-wrap items-center gap-3 pt-2">{children}</div>}
          </div>

          {image && (
            <div className="relative hidden lg:col-span-5 lg:block">
              <div className="absolute inset-x-10 top-1/2 aspect-square -translate-y-1/2 rounded-full bg-sun opacity-90" />
              <div className="absolute inset-x-10 top-1/2 aspect-square -translate-y-1/2 rounded-full border border-white/10 scale-[1.18]" />
              <div className="relative aspect-[4/3]">
                <Image src={image.src} alt={image.alt} fill priority sizes="40vw" className="object-contain drop-shadow-[0_30px_40px_rgba(0,0,0,0.5)]" />
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </section>
  );
}
