import { Hero } from "@/components/home/Hero";
import { Marquee } from "@/components/home/Marquee";
import { About } from "@/components/home/About";
import { VendorsPreview } from "@/components/home/VendorsPreview";
import { Testimonials } from "@/components/home/Testimonials";
import { OpportunityCTA } from "@/components/home/OpportunityCTA";
import { VisitMap } from "@/components/home/VisitMap";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <About />
      <VendorsPreview />
      <Testimonials />
      <OpportunityCTA />
      <VisitMap />
    </>
  );
}
