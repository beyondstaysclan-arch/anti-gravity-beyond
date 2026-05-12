import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";

const FACILITY_GROUPS = [
  {
    num: "01",
    title: "Living",
    desc: "Everything you need for a comfortable daily life — from home-style meals to spotless spaces.",
    items: [
      { name: "Food Provided", detail: "Home-style meals served three times daily." },
      { name: "Daily Housekeeping", detail: "Spotless rooms and common areas every day." },
      { name: "Laundry Service", detail: "Professional laundry and ironing on request." },
    ],
  },
  {
    num: "02",
    title: "Connectivity",
    desc: "Stay connected and powered up 24/7 with zero interruptions.",
    items: [
      { name: "High-Speed WiFi", detail: "Fiber optic connectivity throughout the property." },
      { name: "Power Backup", detail: "100% backup so you never miss a beat." },
      { name: "24/7 Water Supply", detail: "RO drinking water and round-the-clock supply." },
    ],
  },
  {
    num: "03",
    title: "Security",
    desc: "Your safety is our priority with round-the-clock monitoring and access control.",
    items: [
      { name: "CCTV Security", detail: "24/7 monitoring with on-site security staff." },
      { name: "Parking Facility", detail: "Secure two-wheeler and car parking available." },
      { name: "Access Control", detail: "Controlled entry and exit for all residents." },
    ],
  },
];

function FacilityGroup({ group, index }: { group: (typeof FACILITY_GROUPS)[0]; index: number }) {
  const [isOpen, setIsOpen] = useState(index === 0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="numbered-item"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-start gap-6 py-8 px-2 text-left group"
      >
        <span className="text-primary/60 font-mono text-sm mt-1 shrink-0">{`{${group.num}}`}</span>
        <div className="flex-1 min-w-0">
          <h3 className="text-2xl lg:text-3xl font-extrabold text-white group-hover:text-primary transition-colors">
            {group.title} —
          </h3>
          <p className="mt-2 text-white/40 text-sm leading-relaxed max-w-xl">
            {group.desc}
          </p>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="shrink-0 size-10 grid place-items-center rounded-full border border-white/10 text-white/40 group-hover:border-primary/30 group-hover:text-primary transition-colors mt-1"
        >
          <ChevronDown className="size-5" />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-8 pl-14 flex flex-wrap gap-3">
              {group.items.map((item) => (
                <div
                  key={item.name}
                  className="group/tag bg-white/[0.04] border border-white/[0.06] rounded-xl px-5 py-3 hover:border-primary/30 hover:bg-primary/5 transition-all cursor-default"
                >
                  <p className="font-semibold text-white text-sm">{item.name}</p>
                  <p className="text-xs text-white/35 mt-0.5">{item.detail}</p>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function Facilities() {
  return (
    <section id="facilities" className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-3xl mb-14">
          <span className="section-label mb-4">What's Included · Facilities</span>
          <h2 className="mt-4 text-4xl lg:text-5xl font-extrabold tracking-tight text-white text-balance">
            Perfectly aligned amenities to maximize your daily comfort.
          </h2>
        </div>

        <div>
          {FACILITY_GROUPS.map((group, i) => (
            <FacilityGroup key={group.num} group={group} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 flex flex-wrap gap-4">
          <a
            href="#rooms"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-primary-foreground px-6 py-3 rounded-full text-sm font-semibold transition-all hover:scale-[1.03]"
          >
            View Room Plans
          </a>
          <a
            href="#gallery"
            className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white px-6 py-3 rounded-full text-sm font-semibold transition-all"
          >
            Explore Gallery
          </a>
        </div>
      </div>
    </section>
  );
}
