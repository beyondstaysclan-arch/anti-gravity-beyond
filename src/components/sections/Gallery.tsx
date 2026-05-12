import { motion } from "motion/react";
import roomCozy from "@/assets/gallery-room-cozy.jpg";
import muralDining from "@/assets/gallery-mural-dining.jpg";
import studyDesk from "@/assets/gallery-study-desk.jpg";
import indoorPlant from "@/assets/gallery-indoor-plant.jpg";
import deskArea from "@/assets/gallery-desk-area.jpg";

const IMAGES = [
  { src: roomCozy, alt: "Cozy room with study desk", className: "md:col-span-2 md:row-span-2 aspect-square md:aspect-auto" },
  { src: muralDining, alt: "Vibrant mural dining area", className: "aspect-[4/3]" },
  { src: studyDesk, alt: "Sunlit study desk", className: "aspect-[4/3]" },
  { src: indoorPlant, alt: "Indoor plant décor", className: "aspect-[4/3]" },
  { src: deskArea, alt: "Workspace with striped rug", className: "md:col-span-2 aspect-[16/9]" },
];

export function Gallery() {
  return (
    <section id="gallery" className="py-24 lg:py-32 bg-surface">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Gallery</span>
          <h2 className="mt-3 text-4xl lg:text-5xl font-extrabold tracking-tight text-ink text-balance">
            A peek inside Beyond Clan.
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[220px] gap-4">
          {IMAGES.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.08 }}
              className={`group relative overflow-hidden rounded-2xl ring-1 ring-border ${img.className}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                width={1200}
                height={900}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="absolute bottom-4 left-4 text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                {img.alt}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

