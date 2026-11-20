import Image from "next/image";
import type { HeroImage } from "@/content/compass-blog";

/* The article's hero. Alt text only, no caption: the CRM's `illustrative`
   flag stays internal. overrideSrc keeps the committed /blog/images/ path in
   `src` (srcset stays optimised): the CRM's live verification
   (blog-publisher verifyLiveArticle) looks for an <img> whose src is exactly
   the approved path. */
export function BlogHero({ hero }: { hero: HeroImage }) {
  return (
    <figure className="mb-10 flex justify-center" data-blog-hero>
      <Image
        src={hero.src}
        overrideSrc={hero.src}
        alt={hero.alt}
        width={hero.width}
        height={hero.height}
        sizes="(min-width: 768px) 768px, 100vw"
        priority
        className="h-auto max-h-[34rem] w-auto max-w-full rounded-[24px] object-contain shadow-card"
      />
    </figure>
  );
}
