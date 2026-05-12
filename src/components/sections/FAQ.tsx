import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, MessageCircle, Phone } from "lucide-react";

const FAQS = [
  {
    q: "Is food included in the rent?",
    a: "Yes! All our plans include three nutritious home-style meals daily — breakfast, lunch, and dinner. We use fresh ingredients and offer a rotating weekly menu.",
  },
  {
    q: "What's the security deposit and booking process?",
    a: "The security deposit is equivalent to one month's rent, refundable at the end of your stay. To book, simply contact us via WhatsApp or fill out our enquiry form, schedule a visit, and move in within 48 hours.",
  },
  {
    q: "How fast is the WiFi?",
    a: "We provide dedicated high-speed fiber optic internet with speeds up to 100 Mbps. Each room has strong coverage, and there's zero throttling — perfect for work-from-home and streaming.",
  },
  {
    q: "What's your visitor policy?",
    a: "Visitors are welcome during designated hours (8 AM – 9 PM). All visitors must register at the front desk. Overnight guests are not permitted to ensure security and comfort for all residents.",
  },
  {
    q: "Can I cancel or leave early?",
    a: "We require a minimum one-month notice before vacating. The security deposit is refunded after inspection. No lock-in period beyond the first month — flexibility is key for us.",
  },
  {
    q: "What amenities are included?",
    a: "Everything you need: daily housekeeping, laundry service, 24/7 power backup, RO drinking water, CCTV security, secure parking, and a fully furnished room with premium linen and storage.",
  },
];

function FAQItem({ faq, index }: { faq: (typeof FAQS)[0]; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className="numbered-item"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between gap-4 py-6 px-2 text-left group"
      >
        <h3 className="text-lg lg:text-xl font-semibold text-white group-hover:text-primary transition-colors">
          {faq.q}
        </h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="shrink-0 size-10 grid place-items-center rounded-full border border-white/10 text-white/40 group-hover:border-primary/30 group-hover:text-primary transition-colors"
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
            <p className="text-white/50 leading-relaxed pb-6 px-2 max-w-2xl">
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FAQ() {
  return (
    <section id="faq" className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left: heading */}
          <div className="lg:col-span-5">
            <span className="section-label mb-4">Popular Queries · FAQ</span>
            <h2 className="mt-4 text-4xl lg:text-5xl font-extrabold tracking-tight text-white text-balance">
              Quick and clear answers to your key questions
            </h2>
            <p className="mt-5 text-white/50 text-lg leading-relaxed">
              Get the clarity you need about our coliving experience and services.
            </p>
          </div>

          {/* Right: accordion */}
          <div className="lg:col-span-7">
            {FAQS.map((faq, i) => (
              <FAQItem key={i} faq={faq} index={i} />
            ))}

            {/* Bottom CTA */}
            <div className="mt-10 pt-8 border-t border-white/8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <p className="text-white/40 text-sm">
                Still looking for answers or need a good chat?
              </p>
              <div className="flex gap-3">
                <a
                  href="tel:+919100531555"
                  className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-primary-foreground px-5 py-2.5 rounded-full text-sm font-semibold transition-all hover:scale-[1.03]"
                >
                  <Phone className="size-4" />
                  Call Us
                </a>
                <a
                  href="https://wa.me/919100531555"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all"
                >
                  <MessageCircle className="size-4" />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
