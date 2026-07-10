import Image from "next/image";
import { Reveal } from "./Reveal";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
  imageAlt = "",
  children,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: string;
  image?: string;
  imageAlt?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="grain relative overflow-hidden bg-ink pb-20 pt-40">
      {image && (
        <>
          <Image
            src={image}
            alt={imageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/85 via-ink/85 to-ink" />
        </>
      )}
      <div className="spotlight absolute inset-0 opacity-60" />

      <div className="container-x relative z-10">
        <Reveal className="narrow text-center">
          <div>
            {eyebrow && <p className="eyebrow mb-3 text-brass">{eyebrow}</p>}
            <h1 className="font-display text-5xl italic leading-[1.05] text-cream md:text-6xl">
              {title}
            </h1>
            {subtitle && (
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-cream/70 md:text-xl">
                {subtitle}
              </p>
            )}
            {children && <div className="mt-9">{children}</div>}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
