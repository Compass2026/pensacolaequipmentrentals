import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Equipment & Landscaping Resources | Pensacola Equipment Rentals",
  description: "Read helpful equipment rental guides, skid steer operation tips, jobsite efficiency ideas, and DIY landscaping advice from Pensacola Equipment Rentals.",
};

const ARTICLES = [
  {
    title: "Renting a Skid Steer? Here’s What You Can Do With It",
    slug: "renting-a-skid-steer-heres-what-you-can-do-with-it",
    excerpt: "A skid steer might be one of the most versatile pieces of equipment you can rent. Whether you’re clearing land, moving dirt, grading a yard, or loading trailers, this machine handles it all.",
    image: "https://www.bnbcoastalcuts.com/wp-content/uploads/2026/01/heavy-construction-ready-backhoe-excavator-and-bul-2026-01-05-00-18-11-utc-1024x683.jpg",
  },
  {
    title: "How to Speed Up Jobsite Efficiency with the Right Rentals",
    slug: "how-to-speed-up-jobsite-efficiency-with-the-right-rentals",
    excerpt: "The right rental equipment can make or break your schedule. Whether running a full crew or knocking out a small job solo, renting the right tools helps you move faster and finish strong.",
    image: "https://www.bnbcoastalcuts.com/wp-content/uploads/2025/05/448692327_122093289428383926_1578460628476692250_n.jpg",
  },
  {
    title: "DIY Landscaping Projects Made Easy with the Right Rental Equipment",
    slug: "diy-landscaping-projects-made-easy-with-the-right-rental-equipment",
    excerpt: "You don’t need to hire a contractor to level your yard, clear brush, or remove stumps. With a Bobcat mini excavator or skid steer, you can tackle landscaping projects like a pro.",
    image: "https://www.bnbcoastalcuts.com/wp-content/uploads/2025/09/beautiful-two-story-house-surrounded-by-lush-green-2025-02-11-23-57-28-utc-1024x683.jpg",
  },
];

export default function ResourcesPage() {
  const [featured, ...rest] = ARTICLES;

  return (
    <>
      <PageHero
        eyebrow="Equipment guides & insights"
        title={
          <>
            Equipment &amp; landscaping <span className="text-sun">resources.</span>
          </>
        }
        description="Free guides and tips to help you pick the right machine for your jobsite in Pensacola."
        breadcrumbs={[{ name: "Home", href: "/" }, { name: "Resources" }]}
      />

      <section className="bg-slate-50 py-20 lg:py-28">
        <div className="container space-y-8">
          <Reveal>
            <Link
              href={`/resources/${featured.slug}`}
              className="group grid overflow-hidden rounded-[32px] border border-gray-200 bg-white shadow-card transition duration-500 hover:shadow-lift lg:grid-cols-2"
            >
              <div className="relative aspect-[16/10] overflow-hidden lg:aspect-auto lg:min-h-[420px]">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col justify-center space-y-5 p-8 sm:p-12">
                <span className="eyebrow">Featured guide</span>
                <h2 className="display text-3xl text-brand-black transition group-hover:text-brand-red sm:text-4xl">{featured.title}</h2>
                <p className="text-base leading-relaxed text-gray-600">{featured.excerpt}</p>
                <span className="inline-flex items-center gap-2 text-sm font-bold text-brand-blue">
                  Read article <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </div>
            </Link>
          </Reveal>

          <div className="grid gap-8 md:grid-cols-2">
            {rest.map((art, idx) => (
              <Reveal key={art.slug} delay={idx * 90}>
                <Link
                  href={`/resources/${art.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-[28px] border border-gray-200 bg-white shadow-card transition duration-500 hover:-translate-y-1 hover:shadow-lift"
                >
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={art.image}
                      alt={art.title}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col space-y-3 p-8">
                    <h2 className="font-heading text-2xl font-bold text-brand-black transition group-hover:text-brand-red">{art.title}</h2>
                    <p className="line-clamp-3 text-sm leading-relaxed text-gray-500">{art.excerpt}</p>
                    <span className="mt-auto inline-flex items-center gap-2 pt-3 text-sm font-bold text-brand-blue">
                      Read article <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
