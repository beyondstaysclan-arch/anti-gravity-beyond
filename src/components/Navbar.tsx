import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, Instagram, Phone } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import logo from "@/assets/logo.jpg";

const NAV_LINKS: { label: string; to: "/" | "/contact"; hash?: string }[] = [
  { label: "Home", to: "/" },
  { label: "Rooms", to: "/", hash: "rooms" },
  { label: "Facilities", to: "/", hash: "facilities" },
  { label: "Gallery", to: "/", hash: "gallery" },
  { label: "Contact", to: "/contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled ? "glass-nav border-b border-border" : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex h-16 lg:h-20 items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5 group relative z-[60]">
              <div className="size-9 rounded-lg overflow-hidden ring-1 ring-white/10 shadow-sm">
                <img src={logo} alt="Beyond Clan logo" className="size-full object-cover" />
              </div>
              <span className="text-base font-bold tracking-tight text-white">
                Beyond <span className="text-primary">Clan</span>
              </span>
            </Link>

            {/* Desktop nav links */}
            <nav className="hidden lg:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  hash={link.hash}
                  className="text-sm font-medium transition-colors hover:text-primary text-white/60 hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Right side: social + CTA + hamburger */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noreferrer"
                className="hidden lg:grid size-9 place-items-center rounded-full border border-white/10 text-white/50 hover:text-primary hover:border-primary/30 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="size-4" />
              </a>
              <a
                href="https://wa.me/919100531555"
                target="_blank"
                rel="noreferrer"
                className="hidden lg:grid size-9 place-items-center rounded-full border border-white/10 text-white/50 hover:text-primary hover:border-primary/30 transition-colors"
                aria-label="WhatsApp"
              >
                <Phone className="size-4" />
              </a>
              <Link
                to="/contact"
                className="hidden lg:inline-flex bg-primary hover:bg-primary-dark text-primary-foreground text-sm font-semibold px-5 py-2.5 rounded-full shadow-lg shadow-primary/25 transition-all hover:scale-[1.03] active:scale-95"
              >
                Book Your Stay
              </Link>

              {/* Hamburger */}
              <button
                onClick={() => setOpen((o) => !o)}
                className="relative z-[60] p-2 rounded-md text-white"
                aria-label="Toggle menu"
              >
                {open ? <X className="size-6" /> : <Menu className="size-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Full-screen overlay menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-50 bg-[#0A0A0A]/98 backdrop-blur-xl"
          >
            <div className="flex flex-col justify-between h-full pt-24 pb-10 px-8 lg:px-16">
              {/* Nav links — large staggered */}
              <nav className="flex flex-col gap-2">
                {NAV_LINKS.map((link, i) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: i * 0.08, ease: [0.2, 0.8, 0.2, 1] }}
                  >
                    <Link
                      to={link.to}
                      hash={link.hash}
                      onClick={() => setOpen(false)}
                      className="block text-5xl lg:text-7xl font-extrabold text-white/90 hover:text-primary transition-colors py-3 tracking-tight"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Bottom bar: timezone + social */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-8 border-t border-white/10"
              >
                <div className="flex items-center gap-3 text-white/40 text-sm">
                  <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
                  Hyderabad, India · IST (GMT+5:30)
                </div>
                <div className="flex items-center gap-4">
                  <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="text-white/40 hover:text-primary text-xs font-bold uppercase tracking-widest transition-colors">IG</a>
                  <a href="https://wa.me/919100531555" target="_blank" rel="noreferrer" className="text-white/40 hover:text-primary text-xs font-bold uppercase tracking-widest transition-colors">WA</a>
                  <a href="mailto:beyondstays.clan@gmail.com" className="text-white/40 hover:text-primary text-xs font-bold uppercase tracking-widest transition-colors">EMAIL</a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
