import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowRight, Phone } from "lucide-react";
import hero from "@/assets/hero-brand-card.jpg";

const MARQUEE_ITEMS = [
  "Premium Coliving",
  "Nanakramguda",
  "Students",
  "Professionals",
  "Designer Rooms",
  "Food Included",
  "Community",
  "Hyderabad",
  "WiFi",
  "24/7 Security",
];

function MarqueeTrack() {
  return (
    <div className="marquee-track">
      {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
        <span key={i} className="flex items-center gap-6 px-6 text-sm font-medium text-white/30 whitespace-nowrap uppercase tracking-widest">
          {item}
          <span className="size-1.5 rounded-full bg-primary/40" />
        </span>
      ))}
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-between pt-20 overflow-hidden bg-background">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 w-full py-16 lg:py-24 flex-1 flex items-center">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center w-full">
          {/* Left: Text content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
            className="lg:col-span-7"
          >
            <span className="section-label mb-6">
              Premium Coliving · Nanakramguda, Hyderabad
            </span>

            <h1 className="text-[2.75rem] sm:text-6xl lg:text-[5.5rem] font-extrabold leading-[1.02] mb-6 text-white tracking-tight">
              <motion.span
                className="block"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15 }}
              >
                Living that
              </motion.span>
              <motion.span
                className="block text-gradient-brand"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
              >
                captivates today
              </motion.span>
              <motion.span
                className="block"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.45 }}
              >
                & inspires
              </motion.span>
              <motion.span
                className="block"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
              >
                tomorrow.
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.8 }}
              className="text-lg text-white/55 mb-10 leading-relaxed max-w-lg"
            >
              Comfortable stay with food included for students and working professionals — designer rooms,
              curated meals, and a community that feels like home.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex flex-wrap gap-3"
            >
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-primary-foreground px-7 py-4 rounded-xl font-semibold shadow-2xl shadow-primary/30 transition-all hover:scale-[1.03] active:scale-95"
              >
                Book Now
                <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="tel:+919100531555"
                className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white px-7 py-4 rounded-xl font-semibold transition-all"
              >
                <Phone className="size-4" />
                Contact Us
              </a>
            </motion.div>
          </motion.div>

          {/* Right: Featured room card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
            className="lg:col-span-5 relative group"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-black/40">
              <img
                src={hero}
                alt="Premium coliving lounge at Beyond Stays Clan"
                width={1920}
                height={1280}
                className="w-full aspect-[4/5] lg:aspect-[3/4] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-primary mb-2">Featured</span>
                <h3 className="text-xl font-bold text-white">Premium Coliving Space</h3>
                <p className="text-white/60 text-sm mt-1">Nanakramguda, Hyderabad</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hidden md:flex flex-col items-center gap-2 text-white/40 pb-6">
        <span className="text-[10px] uppercase tracking-[0.2em] font-medium">Scroll to explore</span>
        <div className="w-px h-10 bg-gradient-to-b from-primary to-transparent animate-scroll-bounce" />
      </div>

      {/* Marquee ticker */}
      <div className="border-t border-white/5 py-4 overflow-hidden">
        <MarqueeTrack />
      </div>
    </section>
  );
}
