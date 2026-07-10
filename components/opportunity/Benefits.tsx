import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { benefits } from "@/lib/opportunity";

export function Benefits() {
  return (
    <Section tone="cream">
      <div className="container-x">
        <SectionHeading
          title="Why Set Up Here"
          intro="Everything you need to focus on the food while we handle the space and the crowd."
          tone="light"
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, i) => (
            <Reveal key={benefit.title} delay={i * 80}>
              <div className="h-full rounded-3xl border border-ink-soft/8 bg-paper p-7">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green/10 text-green">
                  <Icon name={benefit.icon} className="h-7 w-7" />
                </span>
                <h3 className="mt-5 font-display text-xl text-ink-soft">
                  {benefit.title}
                </h3>
                <p className="mt-2 leading-relaxed text-ink-soft/70">
                  {benefit.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
