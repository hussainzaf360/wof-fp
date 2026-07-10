import Image from "next/image";
import { Star, UtensilsCrossed, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { OpenStatusBadge } from "./OpenStatusBadge";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section
      id="hero"
      className="grain relative flex min-h-screen items-center justify-center overflow-hidden bg-ink pt-20"
    >
      <Image
        src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=1920"
        alt="A spread of global cuisine at the food park"
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/85 via-ink/80 to-ink" />
      <div className="spotlight absolute inset-0 opacity-70" />

      <div className="container-x relative z-10 flex flex-col items-center py-24 text-center">
        <Reveal>
          <div className="inline-flex items-center gap-2.5 rounded-full border border-brass/20 bg-cream/5 px-5 py-2.5 backdrop-blur">
            <span className="flex gap-1 text-brass">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" strokeWidth={0} />
              ))}
            </span>
            <span className="text-sm font-semibold uppercase tracking-wide text-cream/80">
              {site.rating} Stars on Google
            </span>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="mt-8 max-w-4xl font-display text-5xl font-medium leading-[1.03] text-cream sm:text-6xl md:text-7xl">
            Explore the World,{" "}
            <span className="text-gradient-brass italic">One Cart</span> at a
            Time
          </h1>
        </Reveal>

        <Reveal delay={140}>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-cream/70 md:text-xl">
            {site.description}
          </p>
        </Reveal>

        <Reveal delay={200}>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button href="/vendors" size="lg">
              <UtensilsCrossed className="h-5 w-5" strokeWidth={2} />
              View Vendor Menus
            </Button>
            <Button href="/#visit" variant="outline" size="lg">
              <MapPin className="h-5 w-5" strokeWidth={2} />
              Plan Your Visit
            </Button>
          </div>
        </Reveal>

        <Reveal delay={260} className="mt-16 w-full max-w-4xl">
          <div className="grid grid-cols-1 gap-8 rounded-3xl border border-brass/15 bg-cream/[0.04] p-8 backdrop-blur md:grid-cols-3">
            <OpenStatusBadge />

            <div className="flex flex-col items-center gap-2.5 md:border-x md:border-cream/10">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cream/5">
                <MapPin className="h-6 w-6 text-brass" strokeWidth={1.75} />
              </div>
              <span className="text-sm font-semibold uppercase tracking-wide text-cream">
                Location
              </span>
              <span className="text-center text-sm text-cream/55">
                {site.address.line1}
                <br />
                {site.address.line2}
              </span>
            </div>

            <div className="flex flex-col items-center gap-2.5">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cream/5">
                <Phone className="h-6 w-6 text-brass" strokeWidth={1.75} />
              </div>
              <span className="text-sm font-semibold uppercase tracking-wide text-cream">
                Call Us
              </span>
              <a
                href={site.phoneHref}
                className="text-sm text-cream/55 transition-colors hover:text-brass"
              >
                {site.phone}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
