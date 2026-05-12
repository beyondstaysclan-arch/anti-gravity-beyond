import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Pricing } from "@/components/sections/Pricing";
import { Facilities } from "@/components/sections/Facilities";
import { Gallery } from "@/components/sections/Gallery";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { CtaStrip } from "@/components/sections/CtaStrip";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <About />
      <Pricing />
      <Facilities />
      <Gallery />
      <Testimonials />
      <FAQ />
      <CtaStrip />
    </>
  );
}
