import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
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

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-nav border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex h-16 lg:h-20 items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="size-9 rounded-lg overflow-hidden bg-primary ring-1 ring-primary/20 shadow-sm">
              <img src={logo} alt="Beyond Clan logo" className="size-full object-cover" />
            </div>
            <span
              className={`text-base font-bold tracking-tight transition-colors ${
                scrolled ? "text-ink" : "text-white"
              }`}
            >
              Beyond <span className="text-primary">Clan</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                hash={link.hash}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  scrolled ? "text-ink-soft" : "text-white/85"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-primary hover:bg-primary-dark text-primary-foreground text-sm font-semibold px-5 py-2.5 rounded-full shadow-lg shadow-primary/25 transition-all hover:scale-[1.03] active:scale-95"
            >
              Book Your Stay
            </Link>
          </nav>

          <button
            onClick={() => setOpen((o) => !o)}
            className={`lg:hidden p-2 rounded-md ${scrolled ? "text-ink" : "text-white"}`}
            aria-label="Toggle menu"
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden glass-nav border-t border-border animate-fade-in">
          <div className="px-5 py-6 flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                hash={link.hash}
                onClick={() => setOpen(false)}
                className="text-ink font-medium py-3 border-b border-border last:border-0"
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-4 bg-primary text-primary-foreground text-center font-semibold py-3 rounded-full"
            >
              Book Your Stay
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
