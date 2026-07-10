import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, MapPin } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { VendorMenu } from "@/components/vendors/VendorMenu";
import { VendorContactForm } from "@/components/forms/VendorContactForm";
import { getVendor, vendorSlugs } from "@/lib/vendors";

export function generateStaticParams() {
  return vendorSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const vendor = getVendor(slug);
  if (!vendor) return { title: "Vendor Not Found" };
  return {
    title: vendor.name,
    description: vendor.heroBlurb,
  };
}

export default async function VendorPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const vendor = getVendor(slug);
  if (!vendor) notFound();

  return (
    <>
      {/* Hero */}
      <section className="grain relative overflow-hidden bg-ink pb-20 pt-40">
        <Image
          src={vendor.images.hero}
          alt={vendor.name}
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/85 via-ink/85 to-ink" />
        <div className="spotlight absolute inset-0 opacity-50" />

        <div className="container-x relative z-10">
          <Reveal>
            <Link
              href="/vendors"
              className="mb-8 inline-flex items-center gap-2 font-medium text-cream/70 transition-colors hover:text-cream"
            >
              <ArrowLeft className="h-4 w-4" strokeWidth={2} />
              Back to all vendors
            </Link>

            <div className="flex flex-col items-start gap-6">
              {vendor.logo && (
                <div className="rounded-3xl bg-black/40 p-3 ring-1 ring-brass/20">
                  <Image
                    src={vendor.logo}
                    alt={`${vendor.name} logo`}
                    width={160}
                    height={160}
                    className="h-32 w-32 rounded-2xl object-cover md:h-40 md:w-40"
                  />
                </div>
              )}

              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-brass/20 bg-cream/5 px-4 py-1.5 text-sm font-semibold uppercase tracking-wide text-brass">
                  <Icon name={vendor.icon} className="h-4 w-4" />
                  {vendor.category}
                </span>
                <h1 className="mt-4 font-display text-5xl italic leading-[1.05] text-cream md:text-6xl">
                  {vendor.name}
                </h1>
                <p className="mt-4 max-w-2xl text-lg leading-relaxed text-cream/70 md:text-xl">
                  {vendor.heroBlurb}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Story */}
      <Section tone="cream">
        <div className="container-x">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-[0_40px_80px_-40px_rgba(10,23,16,0.5)]">
                <Image
                  src={vendor.images.story}
                  alt={`${vendor.name} food`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div>
                <h2 className="font-display text-3xl leading-tight text-ink-soft sm:text-4xl">
                  {vendor.story.heading}
                </h2>
                {vendor.story.paragraphs.map((p, i) => (
                  <p
                    key={i}
                    className="mt-5 text-lg leading-relaxed text-ink-soft/75"
                  >
                    {p}
                  </p>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* Menu */}
      <Section tone="ink">
        <div className="container-x max-w-4xl">
          <SectionHeading
            eyebrow="Fresh & Made to Order"
            title={<span className="italic">The Menu</span>}
          />
          <div className="mt-12">
            <VendorMenu menu={vendor.menu} note={vendor.menuNote} />
          </div>
          <Reveal className="mt-12 text-center">
            <Button href="/#visit" size="lg">
              Come Find Us at the Park
              <MapPin className="h-5 w-5" strokeWidth={2} />
            </Button>
          </Reveal>
        </div>
      </Section>

      {/* Contact / Reviews */}
      {vendor.hasContactForm && (
        <Section id="vendor-contact" tone="cream">
          <div className="container-x max-w-3xl">
            <SectionHeading
              eyebrow="Reviews & Questions"
              title={<span className="italic">Say Hi to {vendor.name}</span>}
              intro="Loved your meal or have a question about the menu? Leave a review or send a message straight to the team."
              tone="light"
            />
            <Reveal className="mt-12">
              <div className="rounded-3xl border border-ink-soft/10 bg-paper p-7 sm:p-10 md:p-12">
                <VendorContactForm vendorName={vendor.name} />
              </div>
            </Reveal>
          </div>
        </Section>
      )}
    </>
  );
}
