import type { Metadata } from "next";
import { ArrowRight, Tag, Calendar } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Benefits } from "@/components/opportunity/Benefits";
import { HowItWorks } from "@/components/opportunity/HowItWorks";
import { InquiryForm } from "@/components/forms/InquiryForm";
import { opportunityDetails } from "@/lib/opportunity";

export const metadata: Metadata = {
  title: "Rent Space",
  description:
    "Bring your food cart to World of Flavors in Salem, Oregon — built-in foot traffic, utility hookups, shared seating, and marketing support.",
};

export default function OpportunityPage() {
  return (
    <>
      <PageHero
        eyebrow="Vendor Opportunities"
        title="Bring Your Cart to Salem"
        subtitle="Whether you're an established food cart owner or an entrepreneur with a big idea, World of Flavors gives you a ready-made home with built-in foot traffic and a supportive community."
        image="https://images.unsplash.com/photo-1567129937968-cdad8f07e2f8?auto=format&fit=crop&q=80&w=1920"
        imageAlt="Food cart at a park"
      >
        <Button href="#inquire" size="lg">
          Inquire About Space
          <ArrowRight className="h-5 w-5" strokeWidth={2} />
        </Button>
      </PageHero>

      <Benefits />

      {/* Pricing + Availability */}
      <Section tone="sea">
        <div className="container-x max-w-5xl">
          <div className="grid gap-6 md:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-3xl border border-white/15 bg-white/10 p-8">
                <h3 className="flex items-center gap-3 font-display text-2xl text-white">
                  <Tag className="h-6 w-6 text-brass-200" strokeWidth={1.75} />
                  Pricing
                </h3>
                <p className="mt-4 leading-relaxed text-white/90">
                  {opportunityDetails.pricing}
                </p>
                <p className="mt-4 italic text-white/60">
                  {opportunityDetails.pricingNote}
                </p>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="h-full rounded-3xl border border-white/15 bg-white/10 p-8">
                <h3 className="flex items-center gap-3 font-display text-2xl text-white">
                  <Calendar
                    className="h-6 w-6 text-brass-200"
                    strokeWidth={1.75}
                  />
                  Availability
                </h3>
                <p className="mt-4 leading-relaxed text-white/90">
                  {opportunityDetails.availability}
                </p>
                <p className="mt-4 italic text-white/60">
                  {opportunityDetails.availabilityNote}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      <HowItWorks />

      {/* Inquiry form */}
      <Section id="inquire" tone="cream">
        <div className="container-x max-w-4xl">
          <SectionHeading
            title="Inquire About Space"
            intro="Tell us a little about your food concept and we'll get back to you with next steps. No pressure, just a conversation."
            tone="light"
          />
          <Reveal className="mt-12">
            <div className="rounded-3xl border border-ink-soft/10 bg-paper p-7 sm:p-10 md:p-12">
              <InquiryForm />
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
