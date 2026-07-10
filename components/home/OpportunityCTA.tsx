import { ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

export function OpportunityCTA() {
  return (
    <Section tone="sea" className="grain overflow-hidden">
      <div className="container-x">
        <Reveal className="narrow text-center">
          <div>
            <p className="eyebrow mb-3 text-white/80">Vendor Opportunities</p>
            <h2 className="font-display text-4xl italic leading-tight text-white sm:text-5xl">
              Have a Food Concept?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-white/85">
              We&apos;re always looking for passionate food entrepreneurs to
              bring new flavors to Salem. See what it takes to join the World of
              Flavors family.
            </p>
            <div className="mt-8">
              <Button href="/opportunity" size="lg" variant="paper">
                Explore Vendor Opportunities
                <ArrowRight className="h-5 w-5" strokeWidth={2} />
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
