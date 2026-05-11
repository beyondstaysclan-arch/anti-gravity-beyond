import { Link } from "@tanstack/react-router";
import { ArrowRight, MessageCircle } from "lucide-react";

export function CtaStrip() {
  return (
    <section className="py-20 bg-background">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-brand p-10 lg:p-16 shadow-elegant">
          <div className="absolute -top-24 -right-24 size-72 rounded-full bg-white/10 blur-2xl" />
          <div className="absolute -bottom-32 -left-12 size-72 rounded-full bg-white/10 blur-2xl" />
          <div className="relative grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl lg:text-5xl font-extrabold text-white tracking-tight text-balance">
                Ready to make Beyond Clan home?
              </h2>
              <p className="mt-4 text-white/90 text-lg max-w-lg">
                Limited rooms available this season. Book a visit or chat with us on WhatsApp.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-white text-primary px-7 py-4 rounded-xl font-semibold shadow-xl hover:scale-[1.03] active:scale-95 transition-transform"
              >
                Book a Visit
                <ArrowRight className="size-4" />
              </Link>
              <a
                href="https://wa.me/919100531555"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-ink/30 hover:bg-ink/50 text-white border border-white/30 backdrop-blur px-7 py-4 rounded-xl font-semibold transition-colors"
              >
                <MessageCircle className="size-4" />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
