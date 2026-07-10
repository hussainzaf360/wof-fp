import { cuisines } from "@/lib/site";

export function Marquee() {
  const items = [...cuisines, ...cuisines];

  return (
    <div className="relative overflow-hidden border-y border-brass/15 bg-forest py-5">
      <div className="flex w-max animate-marquee items-center whitespace-nowrap">
        {items.map((cuisine, i) => (
          <span key={i} className="flex items-center text-cream/75">
            <span className="px-8 font-display text-xl italic">{cuisine}</span>
            <span className="text-brass" aria-hidden>
              &#10022;
            </span>
          </span>
        ))}
      </div>
      {/* edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-forest to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-forest to-transparent" />
    </div>
  );
}
