import { Link } from "@tanstack/react-router";
import { ArrowRight, MessageCircle } from "lucide-react";

const TRUST_ITEMS = ["Students", "IT Professionals", "MBA Graduates", "Startup Founders", "Remote Workers", "Research Scholars"];

export function CtaStrip() {
  return (
    <section className="py-28 lg:py-36 bg-surface">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* Trust ticker */}
        <div className="mb-12 flex items-center gap-3 flex-wrap">
          <span className="text-[11px] text-white/20 uppercase tracking-[0.2em] font-medium shrink-0">Trusted by</span>
          {TRUST_ITEMS.map((item, i) => (
            <span key={i} className="text-[11px] text-white/25 uppercase tracking-[0.15em] px-3 py-1.5 rounded-full border border-white/[0.06]">
              {item}
            </span>
          ))}
        </div>

        <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-primary/[0.08] via-background to-background border border-white/[0.05] p-12 lg:p-20">
          {/* Decorative orbs */}
          <div className="absolute -top-40 -right-40 size-[500px] rounded-full bg-primary/[0.04] blur-[100px]" />
          <div className="absolute -bottom-48 -left-24 size-[400px] rounded-full bg-primary/[0.03] blur-[80px]" />

          <div className="relative text-center max-w-3xl mx-auto">
            <span className="section-label justify-center mb-6 block">Be Part of Our Journey</span>
            <h2 className="text-4xl lg:text-[4rem] font-bold text-white tracking-tight leading-[1.05]">
              We transform spaces.<br />Your <em className="text-gradient-brand not-italic">comfort</em> is next.
            </h2>
            <p className="mt-7 text-white/35 text-lg max-w-xl mx-auto leading-relaxed font-light">
              Start your journey now by booking a visit or chatting with our team.
            </p>
            <div className="mt-10 flex flex-wrap gap-4 justify-center">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2.5 bg-primary hover:bg-primary-dark text-white px-9 py-4.5 rounded-2xl font-semibold text-[15px] shadow-2xl shadow-primary/25 transition-all duration-300 hover:scale-[1.03] hover:shadow-primary/40 active:scale-95"
              >
                Book a Visit
                <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <a
                href="https://wa.me/919100531555"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2.5 bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.08] hover:border-white/[0.15] text-white/80 hover:text-white px-9 py-4.5 rounded-2xl font-semibold text-[15px] transition-all duration-300"
              >
                <MessageCircle className="size-4" />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
