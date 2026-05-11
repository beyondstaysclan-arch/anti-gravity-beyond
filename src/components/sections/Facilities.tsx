import { motion } from "motion/react";
import {
  UtensilsCrossed,
  Wifi,
  ShieldCheck,
  Shirt,
  Sparkles,
  Zap,
  Droplets,
  Car,
} from "lucide-react";

const FACILITIES = [
  { icon: UtensilsCrossed, title: "Food Provided", desc: "Home-style meals served three times daily." },
  { icon: Wifi, title: "High-Speed WiFi", desc: "Fiber optic connectivity throughout the property." },
  { icon: ShieldCheck, title: "CCTV Security", desc: "24/7 monitoring with on-site security staff." },
  { icon: Shirt, title: "Laundry Service", desc: "Professional laundry and ironing on request." },
  { icon: Sparkles, title: "Daily Housekeeping", desc: "Spotless rooms and common areas every day." },
  { icon: Zap, title: "Power Backup", desc: "100% backup so you never miss a beat." },
  { icon: Droplets, title: "24/7 Water Supply", desc: "RO drinking water and round-the-clock supply." },
  { icon: Car, title: "Parking Facility", desc: "Secure two-wheeler and car parking available." },
];

export function Facilities() {
  return (
    <section id="facilities" className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <div className="max-w-xl">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Facilities</span>
            <h2 className="mt-3 text-4xl lg:text-5xl font-extrabold tracking-tight text-ink text-balance">
              Everything you need, already included.
            </h2>
          </div>
          <p className="text-ink-soft max-w-md">
            We sweat the small stuff so you can focus on your career, studies, and life. Hotel-grade
            amenities as standard.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {FACILITIES.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
              className="group p-6 rounded-2xl bg-surface ring-1 ring-border hover-lift"
            >
              <div className="size-12 grid place-items-center rounded-xl bg-primary/10 text-primary mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <f.icon className="size-5" />
              </div>
              <h3 className="font-bold text-ink">{f.title}</h3>
              <p className="mt-2 text-sm text-ink-soft leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
