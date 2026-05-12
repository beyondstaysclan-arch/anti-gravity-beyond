import { motion } from "motion/react";
import { ShieldCheck, BedDouble, UtensilsCrossed, Sparkles } from "lucide-react";
import about from "@/assets/about-signboard.jpg";

const FEATURES = [
  { icon: ShieldCheck, title: "Safe & Secure", desc: "24/7 CCTV and access-controlled entry." },
  { icon: BedDouble, title: "Fully Furnished", desc: "Designer rooms, premium linen and storage." },
  { icon: UtensilsCrossed, title: "Food Included", desc: "Three nutritious home-style meals daily." },
  { icon: Sparkles, title: "Modern Amenities", desc: "Hotel-grade comfort meets coliving warmth." },
];

const STATS = [
  { value: "100+", label: "Happy Residents" },
  { value: "3", label: "Daily Meals" },
  { value: "24/7", label: "Security" },
  { value: "98%", label: "Satisfaction" },
];

export function About() {
  return (
    <section id="about" className="py-28 lg:py-36 bg-background">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* Section header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-20">
          <div className="max-w-2xl">
            <span className="section-label mb-5 block">About Us · metrics & milestones</span>
            <h2 className="text-4xl lg:text-[3.5rem] font-bold tracking-tight text-white text-balance leading-[1.1]">
              Behind every statistic<br />pulses a <em className="text-gradient-brand not-italic">human story</em>
            </h2>
          </div>
          <p className="text-white/40 max-w-sm text-[17px] leading-relaxed font-light">
            Transforming student and professional living, room by thoughtfully designed room.
          </p>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px mb-24 bg-white/[0.04] rounded-3xl overflow-hidden">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-background p-8 lg:p-10 text-center"
            >
              <p className="text-4xl lg:text-5xl font-bold text-primary leading-none font-[Playfair_Display,serif]">{stat.value}</p>
              <p className="mt-3 text-xs text-white/30 uppercase tracking-[0.2em] font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Gradient separator */}
        <div className="hr-gradient mb-24" />

        {/* Image + Features grid */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-[24px] overflow-hidden shadow-2xl shadow-black/40 grain-overlay">
              <img
                src={about}
                alt="Premium furnished bedroom at Beyond Stays Clan"
                width={1200}
                height={1500}
                loading="lazy"
                className="w-full aspect-[4/5] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-[1]" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7"
          >
            <h3 className="text-3xl lg:text-4xl font-bold tracking-tight text-white text-balance leading-[1.15] font-[Playfair_Display,serif]">
              A new standard for student & professional living.
            </h3>
            <p className="mt-6 text-white/40 text-[17px] leading-relaxed font-light">
              Beyond Stays Clan is a premium PG and coliving residence in Nanakramguda, designed for
              students and IT professionals who want comfort, community, and zero hassle.
            </p>

            <div className="mt-12 grid sm:grid-cols-2 gap-4">
              {FEATURES.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="flex gap-4 p-5 rounded-2xl bg-white/[0.02] border border-white/[0.05] card-glow group"
                >
                  <div className="size-11 grid place-items-center rounded-xl bg-primary/10 text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <f.icon className="size-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-[15px]">{f.title}</h4>
                    <p className="mt-1 text-sm text-white/35 leading-relaxed">{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
