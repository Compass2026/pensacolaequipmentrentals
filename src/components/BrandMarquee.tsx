const ITEMS = [
  "Bobcat",
  "Mini Excavators",
  "Kubota",
  "Track Skid Steers",
  "Iron Bull",
  "Dump Trailers",
  "Gravely",
  "Zero-Turn Mowers",
  "Stihl",
  "Land Clearing",
];

/** Infinite scrolling strip of brands and services. */
export function BrandMarquee() {
  const row = [...ITEMS, ...ITEMS];
  return (
    <div className="relative overflow-hidden border-y border-white/10 bg-brand-black py-6 mask-fade-x" aria-label="Brands and services">
      <div className="flex w-max animate-marquee items-center gap-10 hover:[animation-play-state:paused]">
        {row.map((item, idx) => (
          <div key={idx} className="flex items-center gap-10" aria-hidden={idx >= ITEMS.length}>
            <span
              className={`whitespace-nowrap font-heading text-2xl font-extrabold uppercase tracking-tight sm:text-3xl ${
                idx % 2 === 0 ? "text-white" : "text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.45)]"
              }`}
            >
              {item}
            </span>
            <span className="h-2.5 w-2.5 rotate-45 bg-brand-red" />
          </div>
        ))}
      </div>
    </div>
  );
}
