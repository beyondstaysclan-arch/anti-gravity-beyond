import { Link } from "@tanstack/react-router";
import { ArrowRight, MessageCircle } from "lucide-react";

export function CtaStrip() {
  return (
    <section className="py-24 lg:py-32 bg-surface">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/10 via-surface to-surface border border-white/[0.06] p-10 lg:p-20">
          {/* Decorative elements */}
          <div className="absolute -top-32 -right-32 size-96 rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute -bottom-40 -left-20 size-80 rounded-full bg-primary/5 blur-3xl" />

          <div className="relative text-center max-w-3xl mx-auto">
            <span className="section-label justify-center mb-6">Be Part of Our Journey</span>
            <h2 className="text-4xl lg:text-6xl font-extrabold text-white tracking-tight text-balance">
              We transform spaces. Your comfort is next.
            </h2>
            <p className="mt-6 text-white/45 text-lg max-w-xl mx-auto leading-relaxed">
              Start your journey now by booking a visit or chatting with our team. Limited rooms available this season.
            </p>
            <div className="mt-10 flex flex-wrap gap-4 justify-center">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-primary-foreground px-8 py-4 rounded-xl font-semibold shadow-2xl shadow-primary/25 transition-all hover:scale-[1.03] active:scale-95"
              >
                Book a Visit
                <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="https://wa.me/919100531555"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white px-8 py-4 rounded-xl font-semibold transition-all"
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
