import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";

const REVIEWS = [
  {
    name: "Aarav Sharma",
    role: "Software Engineer · Microsoft",
    initials: "AS",
    text: "Easily the best PG I've stayed in. The food is genuinely home-style, the WiFi never drops, and the rooms feel like a boutique hotel. Worth every rupee.",
  },
  {
    name: "Priya Reddy",
    role: "MBA Student · ISB",
    initials: "PR",
    text: "Moved here for grad school and ended up extending twice. Safe, clean, and the community is full of ambitious people. Housekeeping is on point.",
  },
  {
    name: "Rohan Iyer",
    role: "Product Designer · Freelance",
    initials: "RI",
    text: "Quiet enough to work from, social enough to never feel alone. The 2-sharing room with attached bath was a game changer for me.",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Testimonials</span>
          <h2 className="mt-3 text-4xl lg:text-5xl font-extrabold tracking-tight text-ink text-balance">
            Loved by students & professionals.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {REVIEWS.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative bg-surface rounded-3xl p-7 ring-1 ring-border hover-lift"
            >
              <Quote className="absolute top-6 right-6 size-8 text-primary/15" />
              <div className="flex gap-0.5 mb-5">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star key={idx} className="size-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-ink leading-relaxed mb-7">"{r.text}"</p>
              <div className="flex items-center gap-3 pt-5 border-t border-border">
                <div className="size-11 grid place-items-center rounded-full bg-gradient-brand text-white font-bold">
                  {r.initials}
                </div>
                <div>
                  <p className="font-semibold text-ink">{r.name}</p>
                  <p className="text-xs text-ink-soft">{r.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
