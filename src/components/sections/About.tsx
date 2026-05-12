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
    <section id="about" className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* Section header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <span className="section-label mb-4">About Us · metrics & milestones</span>
            <h2 className="mt-4 text-4xl lg:text-5xl font-extrabold tracking-tight text-white text-balance">
              Behind every statistic pulses a human story
            </h2>
          </div>
          <p className="text-white/50 max-w-md text-lg leading-relaxed">
            Transforming student and professional living, room by thoughtfully designed room.
          </p>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-surface rounded-2xl p-6 lg:p-8 border border-white/[0.06] text-center card-glow"
            >
              <p className="text-4xl lg:text-5xl font-extrabold text-primary leading-none">{stat.value}</p>
              <p className="mt-3 text-sm text-white/40 uppercase tracking-wider font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Image + Features grid */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-black/30">
              <img
                src={about}
                alt="Premium furnished bedroom at Beyond Stays Clan"
                width={1200}
                height={1500}
                loading="lazy"
                className="w-full aspect-[4/5] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </div>
            <div className="hidden md:block absolute -bottom-6 -right-6 bg-primary text-primary-foreground rounded-2xl px-6 py-5 shadow-elegant animate-pulse-glow">
              <p className="text-3xl font-extrabold leading-none">100+</p>
              <p className="text-xs uppercase tracking-widest mt-1 opacity-90">Happy Residents</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <h3 className="text-3xl lg:text-4xl font-extrabold tracking-tight text-white text-balance">
              A new standard for student & professional living.
            </h3>
            <p className="mt-5 text-white/50 text-lg leading-relaxed">
              Beyond Stays Clan is a premium PG and coliving residence in Nanakramguda, designed for
              students and IT professionals who want comfort, community, and zero hassle. Move in, settle
              down, and focus on what matters.
            </p>

            <div className="mt-10 grid sm:grid-cols-2 gap-4">
              {FEATURES.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="flex gap-4 p-5 rounded-2xl bg-surface border border-white/[0.06] card-glow"
                >
                  <div className="size-11 grid place-items-center rounded-xl bg-primary/10 text-primary shrink-0">
                    <f.icon className="size-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{f.title}</h4>
                    <p className="mt-1 text-sm text-white/45 leading-relaxed">{f.desc}</p>
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
