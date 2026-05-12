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
    <section className="py-28 lg:py-36 bg-background">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="section-label justify-center mb-5 block">Client Stories · Testimonials</span>
          <h2 className="text-4xl lg:text-[3.5rem] font-bold tracking-tight text-white text-balance leading-[1.1]">
            Inspiring resident <em className="text-gradient-brand not-italic">experiences</em>
          </h2>
          <p className="mt-6 text-white/35 text-[17px] font-light">
            Join us and become our next success story.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {REVIEWS.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="relative bg-white/[0.02] rounded-[24px] p-8 border border-white/[0.05] card-glow group"
            >
              <Quote className="absolute top-7 right-7 size-10 text-primary/10 group-hover:text-primary/20 transition-colors duration-500" />
              <div className="flex gap-0.5 mb-6">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star key={idx} className="size-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-white/60 leading-[1.8] mb-8 text-[15px] font-light">"{r.text}"</p>
              <div className="flex items-center gap-3.5 pt-6 border-t border-white/[0.05]">
                <div className="size-12 grid place-items-center rounded-full bg-gradient-brand text-white font-bold text-sm">
                  {r.initials}
                </div>
                <div>
                  <p className="font-semibold text-white text-[15px]">{r.name}</p>
                  <p className="text-xs text-white/35 mt-0.5">{r.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
