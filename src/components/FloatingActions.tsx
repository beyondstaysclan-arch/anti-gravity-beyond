import { useEffect, useState } from "react";
import { Phone, MessageCircle, ArrowUp } from "lucide-react";

export function FloatingActions() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Scroll to top"
          className="size-12 grid place-items-center rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-white shadow-xl hover:bg-white/20 hover:scale-110 active:scale-95 transition-all animate-fade-in"
        >
          <ArrowUp className="size-5" />
        </button>
      )}
      <a
        href="tel:+919100531555"
        aria-label="Call us"
        className="size-12 grid place-items-center rounded-full bg-primary text-primary-foreground shadow-xl shadow-primary/30 hover:scale-110 active:scale-95 transition-transform"
      >
        <Phone className="size-5" />
      </a>
      <a
        href="https://wa.me/919100531555?text=Hi%20Beyond%20Clan%2C%20I%27d%20like%20to%20enquire%20about%20a%20room."
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp us"
        className="size-14 grid place-items-center rounded-full bg-[#25D366] text-white shadow-2xl shadow-[#25D366]/40 hover:scale-110 active:scale-95 transition-transform"
      >
        <MessageCircle className="size-6" fill="currentColor" />
      </a>
    </div>
  );
}
