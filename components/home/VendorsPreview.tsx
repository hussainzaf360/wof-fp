import { ArrowRight } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { VendorCard } from "@/components/vendors/VendorCard";
import { vendors } from "@/lib/vendors";

export function VendorsPreview() {
  return (
    <Section id="vendors-preview" tone="ink">
      <div className="container-x">
        <SectionHeading
          eyebrow="Our Culinary Family"
          title={<span className="italic">Taste the Diversity</span>}
          intro="A growing lineup of local carts serving up flavor from every corner of the globe."
        />

        <div className="mt-14 grid gap-8 sm:grid-cols-2">
          {vendors.map((vendor, i) => (
            <Reveal key={vendor.slug} delay={i * 90}>
              <VendorCard vendor={vendor} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 text-center">
          <Button href="/vendors" size="lg">
            See All Vendors
            <ArrowRight className="h-5 w-5" strokeWidth={2} />
          </Button>
        </Reveal>
      </div>
    </Section>
  );
}
