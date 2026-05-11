import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Pricing } from "@/components/sections/Pricing";
import { Facilities } from "@/components/sections/Facilities";
import { Gallery } from "@/components/sections/Gallery";
import { Testimonials } from "@/components/sections/Testimonials";
import { CtaStrip } from "@/components/sections/CtaStrip";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Beyond Stays Clan — Premium PG & Coliving in Nanakramguda, Hyderabad" },
      {
        name: "description",
        content:
          "Affordable premium PG living in Hyderabad with food, WiFi, CCTV and modern amenities. 2-sharing ₹20,000 and 3-sharing ₹17,000 per month at Nanakramguda.",
      },
    ],
  }),
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
      <CtaStrip />
    </>
  );
}
