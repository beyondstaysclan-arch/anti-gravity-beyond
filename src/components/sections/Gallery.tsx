import { motion } from "motion/react";
import roomCozy from "@/assets/gallery-room-cozy.jpg";
import muralDining from "@/assets/gallery-mural-dining.jpg";
import studyDesk from "@/assets/gallery-study-desk.jpg";
import indoorPlant from "@/assets/gallery-indoor-plant.jpg";
import deskArea from "@/assets/gallery-desk-area.jpg";
import neonCard from "@/assets/gallery-neon-card.jpg";
import colorfulCard from "@/assets/gallery-colorful-card.jpg";
import wavyWorkspace from "@/assets/gallery-wavy-workspace.jpg";
import bedCloseup from "@/assets/gallery-bed-closeup.jpg";
import roomWorkspace from "@/assets/room-workspace.jpg";

const IMAGES = [
  { src: roomCozy, alt: "Cozy room with study desk", className: "md:col-span-2 md:row-span-2 aspect-square md:aspect-auto" },
  { src: muralDining, alt: "Vibrant mural dining area", className: "aspect-[4/3]" },
  { src: neonCard, alt: "Beyond Stays neon branding", className: "aspect-[4/3]" },
  { src: wavyWorkspace, alt: "Study area with wavy rug", className: "aspect-[4/3]" },
  { src: bedCloseup, alt: "Cozy bed with pillows", className: "aspect-[4/3]" },
  { src: colorfulCard, alt: "Beyond Stays colorful card", className: "md:col-span-2 aspect-[16/9]" },
  { src: studyDesk, alt: "Sunlit study desk", className: "aspect-[4/3]" },
  { src: indoorPlant, alt: "Indoor plant décor", className: "aspect-[4/3]" },
  { src: roomWorkspace, alt: "Workspace with striped rug", className: "md:col-span-2 aspect-[16/9]" },
  { src: deskArea, alt: "Workspace overhead view", className: "md:col-span-2 aspect-[16/9]" },
];

export function Gallery() {
  return (
    <section id="gallery" className="py-28 lg:py-36 bg-surface">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="section-label justify-center mb-5 block">Gallery · Spaces</span>
          <h2 className="text-4xl lg:text-[3.5rem] font-bold tracking-tight text-white text-balance leading-[1.1]">
            A peek inside <em className="text-gradient-brand not-italic">Beyond Clan.</em>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[220px] gap-3">
          {IMAGES.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.93 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, delay: (i % 4) * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className={`group relative overflow-hidden rounded-[18px] border border-white/[0.04] grain-overlay ${img.className}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                width={1200}
                height={900}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 z-[3]" />
              <span className="absolute bottom-4 left-4 text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-3 group-hover:translate-y-0 z-[4]">
                {img.alt}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
