import { Quote, Star } from "lucide-react";
import type { Review } from "@/data/reviews";

const AVATAR_COLORS = ["bg-brand-blue", "bg-brand-red", "bg-brand-navy", "bg-brand-blue-dark"];

export function ReviewCard({ review, index = 0 }: { review: Review; index?: number }) {
  return (
    <figure className="group relative flex h-full flex-col justify-between rounded-[28px] border border-gray-200/80 bg-white p-8 shadow-card transition duration-500 hover:-translate-y-1 hover:shadow-lift">
      <Quote className="absolute right-7 top-7 h-10 w-10 text-gray-100 transition group-hover:text-brand-yellow/30" />
      <div className="space-y-5">
        <div className="flex gap-0.5 text-brand-yellow">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-current" />
          ))}
        </div>
        <blockquote className="text-[15px] leading-relaxed text-gray-700">&ldquo;{review.text}&rdquo;</blockquote>
      </div>
      <figcaption className="mt-8 flex items-center gap-3 border-t border-gray-100 pt-6">
        <span
          className={`flex h-11 w-11 items-center justify-center rounded-full font-heading text-sm font-bold text-white ${
            AVATAR_COLORS[index % AVATAR_COLORS.length]
          }`}
        >
          {review.name.charAt(0)}
        </span>
        <div>
          <div className="font-heading text-sm font-bold text-brand-black">{review.name}</div>
          <div className="text-xs text-gray-500">
            {review.role} · {review.location}
          </div>
        </div>
      </figcaption>
    </figure>
  );
}
