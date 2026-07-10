import Image from "next/image";
import { Home, Sun, Leaf } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

const features = [
  { icon: Home, label: "Indoor Seating" },
  { icon: Sun, label: "Outdoor Seating" },
];

export function About() {
  return (
    <Section id="about" tone="cream">
      <div className="container-x">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="relative">
              <div className="absolute -left-5 -top-5 -z-10 h-28 w-28 rounded-full bg-sea/10" />
              <div className="absolute -bottom-5 -right-5 -z-10 h-36 w-36 rounded-full bg-green/10" />
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-[0_40px_80px_-40px_rgba(10,23,16,0.5)]">
                <Image
                  src="/images/park-patio.jpg"
                  alt="The seating patio at World of Flavors, with food carts, tables, and a shaded tent"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div>
              <p className="eyebrow mb-3 flex items-center gap-2 text-green">
                <Leaf className="h-4 w-4" /> Our Story
              </p>
              <h2 className="font-display text-4xl leading-tight text-ink-soft sm:text-5xl">
                A Global Culinary Hub in Salem
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-ink-soft/75">
                World of Flavors is a vibrant food cart park in North Salem,
                Oregon, bringing together a diverse array of cuisines from around
                the globe — something for every palate.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-ink-soft/75">
                Whether you&apos;re craving Middle Eastern shawarma, Pacific
                Island plate lunches, or local favorites, our park is a welcoming
                space for families and foodies alike. Enjoy your meal in our
                comfortable indoor seating or soak up the Oregon sun outdoors.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4">
                {features.map(({ icon: FeatureIcon, label }) => (
                  <div
                    key={label}
                    className="flex items-center gap-3 rounded-2xl border border-ink-soft/10 bg-paper px-4 py-3.5"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-green/10 text-green">
                      <FeatureIcon className="h-5 w-5" strokeWidth={1.75} />
                    </span>
                    <span className="font-semibold text-ink-soft">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
