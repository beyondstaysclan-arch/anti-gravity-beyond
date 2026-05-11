import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowRight, Phone } from "lucide-react";
import hero from "@/assets/hero-lounge.jpg";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img
          src={hero}
          alt="Premium coliving lounge at Beyond Stays Clan"
          width={1920}
          height={1280}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-overlay" />
      </div>

      <div className="mx-auto max-w-7xl px-5 lg:px-8 w-full py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
          className="max-w-2xl text-white"
        >
          <span className="inline-flex items-center gap-2 bg-primary/15 border border-primary/30 backdrop-blur-sm rounded-full px-4 py-1.5 text-primary text-[11px] font-bold uppercase tracking-[0.18em] mb-6">
            <span className="size-1.5 rounded-full bg-primary animate-pulse" />
            Premium Coliving · Nanakramguda
          </span>
          <h1 className="text-[2.75rem] sm:text-5xl lg:text-7xl font-extrabold leading-[1.05] mb-6 text-balance">
            Affordable <span className="text-gradient-brand">Premium</span> PG Living in Hyderabad.
          </h1>
          <p className="text-lg text-white/80 mb-10 leading-relaxed max-w-lg text-pretty">
            Comfortable stay with food included for students and working professionals — designer rooms,
            curated meals, and a community that feels like home.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-primary-foreground px-7 py-4 rounded-xl font-semibold shadow-2xl shadow-primary/30 transition-all hover:scale-[1.03] active:scale-95"
            >
              Book Now
              <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="tel:+919100531555"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/25 text-white px-7 py-4 rounded-xl font-semibold transition-all"
            >
              <Phone className="size-4" />
              Contact Us
            </a>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-white/60">
        <span className="text-[10px] uppercase tracking-[0.2em] font-medium">Scroll to explore</span>
        <div className="w-px h-10 bg-gradient-to-b from-primary to-transparent animate-scroll-bounce" />
      </div>
    </section>
  );
}
