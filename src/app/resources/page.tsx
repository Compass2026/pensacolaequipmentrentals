import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BookOpen, ArrowRight } from "lucide-react";

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
  return (
    <div className="space-y-0">
      <section className="border-b border-brand-surface-border bg-gradient-to-b from-brand-black via-brand-charcoal to-brand-black py-16">
        <div className="container max-w-3xl space-y-4 text-center mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-yellow/30 bg-brand-yellow/10 px-4 py-1 text-xs font-bold text-brand-yellow">
            <BookOpen className="h-4 w-4" />
            <span>Equipment Guides &amp; Insights</span>
          </div>
          <h1 className="font-heading text-4xl font-extrabold text-white sm:text-5xl">
            Equipment &amp; Landscaping Resources
          </h1>
          <p className="text-sm text-gray-300">
            Free operational guides and tips to help you pick the right machine for your jobsite in Pensacola.
          </p>
        </div>
      </section>

      <section className="bg-brand-black py-20">
        <div className="container">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 max-w-6xl mx-auto">
            {ARTICLES.map((art) => (
              <div key={art.slug} className="group rounded-2xl border border-brand-surface-border bg-brand-charcoal overflow-hidden flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="relative h-48 w-full bg-brand-black overflow-hidden">
                    <Image
                      src={art.image}
                      alt={art.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6 space-y-2">
                    <h2 className="font-heading text-xl font-bold text-white group-hover:text-brand-yellow transition">
                      {art.title}
                    </h2>
                    <p className="text-xs text-gray-400 line-clamp-3 leading-relaxed">
                      {art.excerpt}
                    </p>
                  </div>
                </div>
                <div className="p-6 pt-0">
                  <Link
                    href={`/resources/${art.slug}`}
                    className="inline-flex items-center gap-2 text-xs font-bold text-brand-yellow hover:underline"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
