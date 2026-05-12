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
        <span key={i} className="flex items-center gap-8 px-8 text-[13px] font-medium text-white/20 whitespace-nowrap uppercase tracking-[0.25em]">
          {item}
          <span className="size-1 rounded-full bg-primary/50" />
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.2, 0.8, 0.2, 1] }}
            className="lg:col-span-7"
          >
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="section-label mb-8 block"
            >
              Freedom beyond the traditional living scope
            </motion.span>

            <h1 className="text-[3rem] sm:text-[4rem] lg:text-[5.5rem] font-bold leading-[0.95] mb-8 text-white tracking-tight">
              <motion.span
                className="block overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.1 }}
              >
                <motion.span
                  className="block"
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                >
                  Living that
                </motion.span>
              </motion.span>
              <motion.span
                className="block overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.1 }}
              >
                <motion.span
                  className="block text-gradient-brand italic text-3xl sm:text-4xl lg:text-6xl"
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.9, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
                >
                  captivates today
                </motion.span>
              </motion.span>
              <motion.span
                className="block overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.1 }}
              >
                <motion.span
                  className="block"
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.9, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                  & inspires
                </motion.span>
              </motion.span>
              <motion.span
                className="block overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.1 }}
              >
                <motion.span
                  className="block"
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.9, delay: 0.75, ease: [0.22, 1, 0.36, 1] }}
                >
                  tomorrow.
                </motion.span>
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.1 }}
              className="text-[17px] text-white/45 mb-10 leading-relaxed max-w-md font-light"
            >
              Designer rooms, curated meals, and a community that feels like home — built for students and professionals.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.3 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2.5 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-2xl font-semibold text-[15px] shadow-2xl shadow-primary/25 transition-all duration-300 hover:scale-[1.03] hover:shadow-primary/40 active:scale-95"
              >
                Book Now
                <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <a
                href="tel:+919100531555"
                className="inline-flex items-center gap-2.5 bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.08] hover:border-white/[0.15] text-white/80 hover:text-white px-8 py-4 rounded-2xl font-semibold text-[15px] transition-all duration-300"
              >
                <Phone className="size-4" />
                Contact Us
              </a>
            </motion.div>
          </motion.div>

          {/* Right: Featured room card with film grain */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative ambient-glow"
          >
            <div className="relative rounded-[24px] overflow-hidden shadow-2xl shadow-black/50 grain-overlay">
              <img
                src={hero}
                alt="Premium coliving lounge at Beyond Stays Clan"
                width={1920}
                height={1280}
                className="w-full aspect-[4/5] lg:aspect-[3/4] object-cover group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-[1]" />
              <div className="absolute bottom-8 left-8 right-8 z-[3]">
                <span className="inline-block text-[10px] font-semibold uppercase tracking-[0.25em] text-primary mb-2">Featured</span>
                <h3 className="text-2xl font-bold text-white font-[Playfair_Display,serif]">Premium Coliving Space</h3>
                <p className="text-white/50 text-sm mt-1.5 font-light">Nanakramguda, Hyderabad</p>
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.5 }}
              className="absolute -top-4 -right-4 lg:-right-6 bg-primary text-white rounded-2xl px-5 py-4 shadow-xl shadow-primary/30 animate-float z-10"
            >
              <p className="text-2xl font-extrabold leading-none">100+</p>
              <p className="text-[9px] uppercase tracking-[0.2em] mt-1 text-white/80">Residents</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.6 }}
        className="hidden md:flex flex-col items-center gap-2 text-white/30 pb-6"
      >
        <span className="text-[10px] uppercase tracking-[0.25em] font-medium">Scroll to explore</span>
        <div className="w-px h-10 bg-gradient-to-b from-primary/60 to-transparent animate-scroll-bounce" />
      </motion.div>

      {/* Marquee ticker */}
      <div className="border-t border-white/[0.04] py-5 overflow-hidden">
        <MarqueeTrack />
      </div>
    </section>
  );
}
