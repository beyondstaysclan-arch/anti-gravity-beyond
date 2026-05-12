import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, MessageCircle, Phone } from "lucide-react";

const FAQS = [
  { q: "Is food included in the rent?", a: "Yes! All plans include three nutritious home-style meals daily — breakfast, lunch, and dinner." },
  { q: "What's the security deposit?", a: "One month's rent, fully refundable. Book via WhatsApp, visit, and move in within 48 hours." },
  { q: "How fast is the WiFi?", a: "Dedicated fiber optic up to 100 Mbps. Strong coverage in every room, zero throttling." },
  { q: "What's your visitor policy?", a: "Visitors welcome 8 AM – 9 PM with registration. Overnight guests not permitted." },
  { q: "Can I cancel or leave early?", a: "One-month notice required. Deposit refunded after inspection. No lock-in beyond first month." },
  { q: "What amenities are included?", a: "Housekeeping, laundry, 24/7 power backup, RO water, CCTV, parking, premium furnished rooms." },
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
      <button onClick={() => setIsOpen(!isOpen)} className="w-full flex items-center justify-between gap-4 py-7 px-2 text-left group">
        <h3 className="text-lg lg:text-xl font-semibold text-white group-hover:text-primary transition-colors duration-300">{faq.q}</h3>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }} className="shrink-0 size-10 grid place-items-center rounded-full border border-white/[0.06] text-white/30 group-hover:border-primary/30 group-hover:text-primary transition-all duration-300">
          <ChevronDown className="size-5" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }} className="overflow-hidden">
            <p className="text-white/40 leading-relaxed pb-7 px-2 max-w-2xl font-light">{faq.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FAQ() {
  return (
    <section id="faq" className="py-28 lg:py-36 bg-background">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-5">
            <span className="section-label mb-5 block">Popular Queries · FAQ</span>
            <h2 className="text-4xl lg:text-[3.5rem] font-bold tracking-tight text-white text-balance leading-[1.1]">
              Quick answers to <em className="text-gradient-brand not-italic">key questions</em>
            </h2>
            <p className="mt-6 text-white/35 text-[17px] leading-relaxed font-light">Get clarity about our coliving experience.</p>
          </div>
          <div className="lg:col-span-7">
            {FAQS.map((faq, i) => (<FAQItem key={i} faq={faq} index={i} />))}
            <div className="mt-10 pt-8 border-t border-white/[0.05] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <p className="text-white/30 text-sm font-light">Still looking for answers?</p>
              <div className="flex gap-3">
                <a href="tel:+919100531555" className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-[1.03]"><Phone className="size-4" />Call Us</a>
                <a href="https://wa.me/919100531555" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.08] text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300"><MessageCircle className="size-4" />WhatsApp</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
