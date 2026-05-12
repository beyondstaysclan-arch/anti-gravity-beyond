import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Check, UtensilsCrossed, Wifi, ArrowRight } from "lucide-react";
import room2 from "@/assets/room-green-bed.jpg";
import room3 from "@/assets/room-overhead.jpg";

const ROOMS = [
  {
    img: room2,
    name: "2-Sharing Premium",
    price: "₹20,000",
    popular: true,
    features: [
      "Three nutritious meals daily",
      "Fully furnished with premium linen",
      "Attached bathroom",
      "Spacious wardrobes & study desk",
      "Daily housekeeping",
    ],
  },
  {
    img: room3,
    name: "3-Sharing Classic",
    price: "₹17,000",
    popular: false,
    features: [
      "Three nutritious meals daily",
      "Individual storage & study desk",
      "Shared premium bathroom",
      "High-speed dedicated WiFi",
      "Daily housekeeping",
    ],
  },
];

export function Pricing() {
  return (
    <section id="rooms" className="py-28 lg:py-36 bg-surface">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="section-label justify-center mb-5 block">Room Plans · Pricing</span>
          <h2 className="text-4xl lg:text-[3.5rem] font-bold tracking-tight text-white text-balance leading-[1.1]">
            Your passport to<br /><em className="text-gradient-brand not-italic">premium coliving.</em>
          </h2>
          <p className="mt-6 text-white/35 text-[17px] font-light">
            Simple pricing, powerful features, no hidden fees.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {ROOMS.map((room, i) => (
            <motion.div
              key={room.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="relative bg-background rounded-[24px] border border-white/[0.05] p-5 card-glow overflow-hidden group"
            >
              {room.popular && (
                <span className="absolute top-8 right-8 z-10 bg-primary text-white text-[10px] font-bold uppercase tracking-[0.15em] px-4 py-2 rounded-full shadow-lg shadow-primary/30">
                  Most Popular
                </span>
              )}
              <div className="relative rounded-[18px] overflow-hidden aspect-[4/3] mb-7 grain-overlay">
                <img
                  src={room.img}
                  alt={`${room.name} room`}
                  width={1200}
                  height={900}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-[1]" />
                <div className="absolute bottom-4 left-4 flex gap-2 z-[3]">
                  <span className="inline-flex items-center gap-1.5 bg-black/60 backdrop-blur-md text-white text-[11px] font-medium px-3 py-1.5 rounded-full border border-white/10">
                    <UtensilsCrossed className="size-3.5 text-primary" /> Food Included
                  </span>
                  <span className="inline-flex items-center gap-1.5 bg-black/60 backdrop-blur-md text-white text-[11px] font-medium px-3 py-1.5 rounded-full border border-white/10">
                    <Wifi className="size-3.5 text-primary" /> WiFi
                  </span>
                </div>
              </div>

              <div className="px-2 pb-2">
                <div className="flex justify-between items-start mb-7">
                  <div>
                    <h3 className="text-2xl font-bold text-white">{room.name}</h3>
                    <p className="text-sm text-white/30 mt-1 font-light">All-inclusive monthly</p>
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-bold text-white leading-none font-[Playfair_Display,serif]">{room.price}</p>
                    <p className="text-[10px] text-white/30 uppercase tracking-[0.2em] mt-1.5">/ month</p>
                  </div>
                </div>

                <ul className="space-y-3.5 mb-8">
                  {room.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-white/50">
                      <span className="mt-0.5 size-5 grid place-items-center rounded-full bg-primary/15 text-primary shrink-0">
                        <Check className="size-3" strokeWidth={3} />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`group/btn flex items-center justify-center gap-2 w-full py-4 rounded-2xl font-semibold text-[15px] transition-all duration-300 ${
                    room.popular
                      ? "bg-primary hover:bg-primary-dark text-white shadow-lg shadow-primary/20 hover:shadow-primary/40"
                      : "bg-white/[0.04] hover:bg-primary border border-white/[0.08] hover:border-primary text-white"
                  }`}
                >
                  Enquire Availability
                  <ArrowRight className="size-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
