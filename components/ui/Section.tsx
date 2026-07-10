import { Reveal } from "./Reveal";

type Tone = "ink" | "forest" | "cream" | "sea";

const tones: Record<Tone, string> = {
  ink: "bg-ink text-cream",
  forest: "bg-forest text-cream",
  cream: "bg-cream text-ink-soft",
  sea: "bg-sea text-white",
};

export function Section({
  id,
  tone = "ink",
  className = "",
  children,
}: {
  id?: string;
  tone?: Tone;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className={`relative py-20 sm:py-28 ${tones[tone]} ${className}`}
    >
      {children}
    </section>
  );
}

/** Centered eyebrow + heading + optional intro used at the top of sections. */
export function SectionHeading({
  eyebrow,
  title,
  intro,
  tone = "dark",
  align = "center",
  className = "",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  intro?: string;
  tone?: "dark" | "light";
  align?: "center" | "left";
  className?: string;
}) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";
  const introColor = tone === "dark" ? "text-cream/65" : "text-clay";
  const titleColor = tone === "dark" ? "text-cream" : "text-ink-soft";

  return (
    <Reveal className={`${align === "center" ? "max-w-3xl mx-auto" : ""} ${className}`}>
      <div className={alignment}>
        {eyebrow && (
          <p className="eyebrow text-brass mb-3">{eyebrow}</p>
        )}
        <h2
          className={`font-display text-4xl sm:text-5xl leading-[1.05] ${titleColor}`}
        >
          {title}
        </h2>
        {intro && (
          <p className={`mt-5 text-lg leading-relaxed ${introColor}`}>{intro}</p>
        )}
      </div>
    </Reveal>
  );
}
