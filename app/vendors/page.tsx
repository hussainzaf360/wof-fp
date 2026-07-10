import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { VendorCard, ComingSoonCard } from "@/components/vendors/VendorCard";
import { vendors, comingSoonVendors } from "@/lib/vendors";

export const metadata: Metadata = {
  title: "Vendors",
  description:
    "Meet the food carts of World of Flavors — Middle Eastern shawarma, Pacific Island plate lunches, and more, all in one Salem food park.",
};

export default function VendorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Culinary Family"
        title="Meet the Vendors"
        subtitle="Every cart at World of Flavors brings its own story and its own corner of the globe. Tap any vendor to explore their menu."
        image="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=1920"
        imageAlt="Global cuisine spread"
      />

      <Section tone="cream">
        <div className="container-x">
          <div className="grid gap-8 md:grid-cols-2">
            {vendors.map((vendor, i) => (
              <Reveal key={vendor.slug} delay={i * 80}>
                <VendorCard vendor={vendor} />
              </Reveal>
            ))}
            {comingSoonVendors.map((vendor, i) => (
              <Reveal key={`soon-${i}`} delay={(vendors.length + i) * 80}>
                <ComingSoonCard vendor={vendor} />
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-16 text-center">
            <div>
              <p className="mb-6 text-lg text-ink-soft/75">
                Interested in bringing your own cart to the park?
              </p>
              <Button href="/opportunity" size="lg" variant="dark">
                Become a Vendor
                <ArrowRight className="h-5 w-5" strokeWidth={2} />
              </Button>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
