import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CalendarDays, Phone } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { BlogHero } from "@/components/BlogHero";
import { BlogMarkdown } from "@/components/BlogMarkdown";
import { BUSINESS_INFO } from "@/data/business";
import { generateBreadcrumbSchema } from "@/lib/jsonld";
import { BLOG_POSTS, SITE_URL, formatPostDate, getPost, postUrl, readTime } from "@/content/compass-blog";

/* Blog articles at the root, /{slug}/ — the Compass json_blog blog_route and
   the WordPress permalinks they replace. Only slugs in data/blog-posts.json
   are built; anything else is a 404. */
export const dynamicParams = false;

export function generateStaticParams() {
  return BLOG_POSTS.map(({ slug }) => ({ slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  const url = postUrl(post.slug);
  const image = post.heroImage
    ? [{ url: `${SITE_URL}${post.heroImage.src}`, width: post.heroImage.width, height: post.heroImage.height, alt: post.heroImage.alt }]
    : undefined;
  return {
    title: { absolute: post.metaTitle },
    description: post.description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title: post.title,
      description: post.description,
      publishedTime: post.datePublished,
      modifiedTime: post.dateModified,
      ...(image ? { images: image } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      ...(image ? { images: [image[0].url] } : {}),
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const url = postUrl(post.slug);
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.h1,
    description: post.description,
    url,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    datePublished: post.datePublished,
    dateModified: post.dateModified,
    ...(post.heroImage ? { image: `${SITE_URL}${post.heroImage.src}` } : {}),
    author: { "@type": "Organization", name: BUSINESS_INFO.name, url: `${SITE_URL}/` },
    publisher: { "@id": `${SITE_URL}/#organization` },
  };
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: `${SITE_URL}/` },
    { name: "Blog", url: `${SITE_URL}/blog/` },
    { name: post.title, url },
  ]);
  const json = (value: unknown) => ({ __html: JSON.stringify(value).replace(/</g, "\\u003c") });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={json(articleSchema)} />
      <script type="application/ld+json" dangerouslySetInnerHTML={json(breadcrumbSchema)} />

      <PageHero
        eyebrow="Equipment rental guides"
        title={post.h1}
        breadcrumbs={[{ name: "Home", href: "/" }, { name: "Blog", href: "/blog" }, { name: post.title }]}
      >
        <span className="inline-flex items-center gap-2 text-sm text-white/60">
          <CalendarDays className="h-4 w-4" aria-hidden="true" />
          <time dateTime={post.datePublished}>{formatPostDate(post.datePublished)}</time>
          <span aria-hidden="true">·</span>
          {readTime(post.bodyMarkdown)}
        </span>
      </PageHero>

      <article className="bg-white py-16 lg:py-24" data-compass-release={post.compass?.release_hash}>
        <div className="container max-w-3xl">
          {/* Order on the page: H1 → TL;DR → hero → article → CTA. */}
          {post.tldr && (
            <section aria-labelledby="tldr" className="mb-10 rounded-[24px] border border-brand-yellow/40 bg-brand-yellow/10 p-6 sm:p-7">
              <h2 id="tldr" className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-brand-red">
                TL;DR
              </h2>
              <p className="text-base leading-relaxed text-brand-charcoal sm:text-lg">{post.tldr}</p>
            </section>
          )}

          {post.heroImage && <BlogHero hero={post.heroImage} />}

          <BlogMarkdown markdown={post.bodyMarkdown} />

          {post.cta && (
            <p className="mt-10 text-lg font-bold text-brand-blue">
              {post.cta.url ? (
                <a href={post.cta.url} className="underline underline-offset-4 hover:text-brand-red">{post.cta.text}</a>
              ) : (
                post.cta.text
              )}
            </p>
          )}

          <aside className="mt-14 rounded-[28px] bg-brand-black p-8 text-white sm:p-10">
            <p className="font-heading text-2xl font-bold">Need a machine for your project?</p>
            <p className="mt-2 text-white/70">
              Local father-and-son rentals with jobsite delivery within {BUSINESS_INFO.deliveryRadiusMiles} miles of Pensacola.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="btn-primary">
                <Phone className="h-4 w-4" aria-hidden="true" /> {BUSINESS_INFO.phone}
              </a>
              <Link href="/request-a-quote" className="btn-outline-light">
                Request a quote <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </aside>

          <Link href="/blog" className="mt-10 inline-flex items-center gap-2 text-sm font-bold text-brand-blue hover:text-brand-red">
            <ArrowLeft className="h-4 w-4" aria-hidden="true" /> All articles
          </Link>
        </div>
      </article>
    </>
  );
}
