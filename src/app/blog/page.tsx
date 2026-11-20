import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CalendarDays } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { BLOG_POSTS, SITE_URL, formatPostDate, readTime } from "@/content/compass-blog";

export const metadata: Metadata = {
  title: "Equipment Rental Blog | Guides & Tips",
  description:
    "Equipment rental guides from Pensacola Equipment Rentals: skid steer and mini excavator projects, jobsite efficiency, renting vs. buying and DIY landscaping tips.",
  alternates: { canonical: `${SITE_URL}/blog/` },
};

export default function BlogIndexPage() {
  const [featured, ...rest] = BLOG_POSTS;

  return (
    <>
      <PageHero
        eyebrow="Equipment guides & insights"
        title={
          <>
            Equipment rental <span className="text-sun">blog.</span>
          </>
        }
        description="Free guides and tips to help you pick the right machine for your jobsite in Pensacola."
        breadcrumbs={[{ name: "Home", href: "/" }, { name: "Blog" }]}
        image={{
          src: "/images/equipment/bobcat-t66-skid-steer.png",
          alt: "Bobcat T66 track loader from the Pensacola Equipment Rentals fleet",
        }}
      />

      <section className="bg-slate-50 py-20 lg:py-28">
        <div className="container space-y-8">
          {featured && (
            <Reveal>
              <Link
                href={`/${featured.slug}/`}
                className="group grid overflow-hidden rounded-[32px] border border-gray-200 bg-white shadow-card transition duration-500 hover:shadow-lift lg:grid-cols-2"
              >
                {featured.heroImage && (
                  <div className="relative aspect-[16/10] overflow-hidden bg-brand-black lg:aspect-auto lg:min-h-[420px]">
                    <Image
                      src={featured.heroImage.src}
                      alt={featured.heroImage.alt}
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                )}
                <div className="flex flex-col justify-center space-y-5 p-8 sm:p-12">
                  <span className="eyebrow">Latest article</span>
                  <h2 className="display text-3xl text-brand-black transition group-hover:text-brand-red sm:text-4xl">{featured.title}</h2>
                  <p className="text-base leading-relaxed text-gray-600">{featured.description}</p>
                  <span className="inline-flex items-center gap-2 text-sm font-bold text-brand-blue">
                    Read article <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            </Reveal>
          )}

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((post, idx) => (
              <Reveal key={post.slug} delay={(idx % 3) * 90}>
                <Link
                  href={`/${post.slug}/`}
                  className="group flex h-full flex-col overflow-hidden rounded-[28px] border border-gray-200 bg-white shadow-card transition duration-500 hover:-translate-y-1 hover:shadow-lift"
                >
                  {post.heroImage && (
                    <div className="relative aspect-[16/10] overflow-hidden bg-brand-black">
                      <Image
                        src={post.heroImage.src}
                        alt={post.heroImage.alt}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                  )}
                  <div className="flex flex-1 flex-col space-y-3 p-7">
                    <p className="flex items-center gap-2 text-xs font-medium text-gray-500">
                      <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
                      <time dateTime={post.datePublished}>{formatPostDate(post.datePublished)}</time>
                      <span aria-hidden="true">·</span> {readTime(post.bodyMarkdown)}
                    </p>
                    <h2 className="font-heading text-xl font-bold text-brand-black transition group-hover:text-brand-red">{post.title}</h2>
                    <p className="line-clamp-3 text-sm leading-relaxed text-gray-500">{post.description}</p>
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
