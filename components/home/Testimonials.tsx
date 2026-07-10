import { Star, Quote } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { testimonials } from "@/lib/testimonials";
import { site } from "@/lib/site";

export function Testimonials() {
  return (
    <Section id="testimonials" tone="cream">
      <div className="container-x">
        <Reveal className="mb-14 text-center">
          <div>
            <h2 className="font-display text-4xl italic text-ink-soft sm:text-5xl">
              What Our Community Says
            </h2>
            <div className="mt-4 flex items-center justify-center gap-1.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="h-5 w-5 fill-brass text-brass"
                  strokeWidth={0}
                />
              ))}
              <span className="ml-2 font-semibold text-ink-soft">
                {site.rating} Star Google Rating
              </span>
            </div>
          </div>
        </Reveal>

        <div className="grid gap-8 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 90}>
              <figure className="flex h-full flex-col rounded-3xl border border-ink-soft/8 bg-paper p-8 shadow-[0_24px_60px_-40px_rgba(10,23,16,0.5)]">
                <Quote className="h-8 w-8 text-brass" strokeWidth={1.75} />
                <blockquote className="mt-4 flex-grow text-lg italic leading-relaxed text-ink-soft/80">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-ink font-semibold text-cream">
                    {t.initials}
                  </span>
                  <span>
                    <span className="block font-semibold text-ink-soft">
                      {t.name}
                    </span>
                    <span className="block text-sm text-sea">{t.role}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
