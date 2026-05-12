import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Check, UtensilsCrossed, Wifi, ArrowRight } from "lucide-react";
import room2 from "@/assets/room-workspace.jpg";
import room3 from "@/assets/room-workspace.jpg";

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
    <section id="rooms" className="py-24 lg:py-32 bg-surface">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Room Plans</span>
          <h2 className="mt-3 text-4xl lg:text-5xl font-extrabold tracking-tight text-ink text-balance">
            Choose your comfort tier.
          </h2>
          <p className="mt-4 text-ink-soft text-lg">
            Transparent all-inclusive pricing. No hidden costs, just premium living.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-7 max-w-5xl mx-auto">
          {ROOMS.map((room, i) => (
            <motion.div
              key={room.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative bg-card rounded-3xl ring-1 ring-border p-5 hover-lift overflow-hidden"
            >
              {room.popular && (
                <span className="absolute top-8 right-8 z-10 bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-lg shadow-primary/30">
                  Most Popular
                </span>
              )}
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] mb-6 group">
                <img
                  src={room.img}
                  alt={`${room.name} room`}
                  width={1200}
                  height={900}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-4 left-4 flex gap-2">
                  <span className="inline-flex items-center gap-1.5 bg-white/95 backdrop-blur text-ink text-[11px] font-semibold px-3 py-1.5 rounded-full">
                    <UtensilsCrossed className="size-3.5 text-primary" /> Food Included
                  </span>
                  <span className="inline-flex items-center gap-1.5 bg-white/95 backdrop-blur text-ink text-[11px] font-semibold px-3 py-1.5 rounded-full">
                    <Wifi className="size-3.5 text-primary" /> WiFi
                  </span>
                </div>
              </div>

              <div className="px-3 pb-3">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-ink">{room.name}</h3>
                    <p className="text-sm text-ink-soft mt-1">All-inclusive monthly rent</p>
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-extrabold text-ink leading-none">{room.price}</p>
                    <p className="text-xs text-ink-soft uppercase tracking-wider mt-1">/ month</p>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {room.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-ink-soft">
                      <span className="mt-0.5 size-5 grid place-items-center rounded-full bg-primary/10 text-primary shrink-0">
                        <Check className="size-3" strokeWidth={3} />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`group flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-semibold transition-all ${
                    room.popular
                      ? "bg-primary hover:bg-primary-dark text-primary-foreground shadow-lg shadow-primary/20"
                      : "bg-ink hover:bg-primary text-white"
                  }`}
                >
                  Enquire Availability
                  <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
