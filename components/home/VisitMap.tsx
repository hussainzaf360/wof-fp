import { MapPin, Clock, Navigation } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/lib/site";

export function VisitMap() {
  return (
    <Section id="visit" tone="ink">
      <div className="container-x">
        <Reveal className="mb-14 text-center">
          <div>
            <h2 className="font-display text-4xl italic text-cream sm:text-5xl">
              Plan Your Visit
            </h2>
            <p className="mt-4 text-lg text-cream/60">
              We&apos;re in the heart of North Salem, ready to serve you.
            </p>
          </div>
        </Reveal>

        <div className="grid items-stretch gap-8 md:grid-cols-2">
          <Reveal>
            <div className="flex h-full flex-col justify-between rounded-3xl border border-brass/12 bg-forest-700 p-8 sm:p-10">
              <div className="space-y-8">
                <div className="flex gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-green/15 text-brass">
                    <MapPin className="h-6 w-6" strokeWidth={1.75} />
                  </span>
                  <div>
                    <h3 className="font-display text-xl text-cream">
                      Our Location
                    </h3>
                    <p className="mt-1 text-cream/65">
                      {site.address.line1}
                      <br />
                      {site.address.line2}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-green/15 text-brass">
                    <Clock className="h-6 w-6" strokeWidth={1.75} />
                  </span>
                  <div>
                    <h3 className="font-display text-xl text-cream">
                      Hours of Operation
                    </h3>
                    <p className="mt-1 font-semibold text-cream/80">
                      Open 7 Days a Week
                    </p>
                    <p className="text-cream/65">
                      {site.openHourLabel} – {site.closeHourLabel}
                    </p>
                  </div>
                </div>
              </div>

              <a
                href={site.mapsDirections}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-flex items-center justify-center gap-3 self-start rounded-full bg-brass px-7 py-3.5 font-semibold text-ink transition-all duration-300 hover:bg-brass-200"
              >
                Get Directions
                <Navigation className="h-5 w-5" strokeWidth={2} />
              </a>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="h-full min-h-[420px] overflow-hidden rounded-3xl border border-brass/12">
              <iframe
                title="Map to World of Flavors Food Park"
                src={site.mapsEmbed}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: 420 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
