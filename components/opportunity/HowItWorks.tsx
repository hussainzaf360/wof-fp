import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { steps } from "@/lib/opportunity";

export function HowItWorks() {
  return (
    <Section tone="ink">
      <div className="container-x">
        <SectionHeading
          title={<span className="italic">How It Works</span>}
          intro="From first hello to opening day, three simple steps."
        />

        <div className="narrow mt-14 space-y-6">
          {steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 90}>
              <div className="flex gap-6 rounded-3xl border border-brass/12 bg-forest-700 p-7 sm:p-8">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brass font-display text-xl font-semibold text-ink">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-display text-xl text-cream">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 leading-relaxed text-cream/65">
                    {step.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
