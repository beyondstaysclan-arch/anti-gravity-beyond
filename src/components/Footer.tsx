import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone, Instagram } from "lucide-react";
import logo from "@/assets/logo.jpg";

const SOCIAL_LINKS = [
  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com" },
  { icon: Phone, label: "WhatsApp", href: "https://wa.me/919100531555" },
  { icon: Mail, label: "Email", href: "mailto:beyondstays.clan@gmail.com" },
];

export function Footer() {
  return (
    <footer className="bg-[#070707] text-white pt-20 pb-10 border-t border-white/[0.04]">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid md:grid-cols-12 gap-12 mb-16">
          {/* Brand column */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <div className="size-11 rounded-xl overflow-hidden ring-1 ring-white/10">
                <img src={logo} alt="Beyond Clan" className="size-full object-cover" />
              </div>
              <span className="text-2xl font-bold tracking-tight">
                Beyond <span className="text-primary">Clan</span>
              </span>
            </div>
            <p className="text-white/40 max-w-sm leading-relaxed mb-8">
              Premium PG and coliving in Nanakramguda, Hyderabad. Designer rooms, curated meals, and a
              vibrant community for students and professionals.
            </p>
            <div className="flex gap-3">
              {SOCIAL_LINKS.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="size-10 grid place-items-center rounded-full border border-white/[0.08] text-white/40 hover:bg-primary hover:border-primary hover:text-white transition-all"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>

            {/* Location badge */}
            <div className="mt-8 flex items-center gap-2 text-white/25 text-xs">
              <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Hyderabad, India · IST (GMT+5:30)
            </div>
          </div>

          {/* Quick links */}
          <div className="md:col-span-3">
            <h4 className="font-semibold mb-5 text-xs uppercase tracking-[0.2em] text-white/30">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { label: "About", to: "/" as const, hash: "about" },
                { label: "Rooms", to: "/" as const, hash: "rooms" },
                { label: "Facilities", to: "/" as const, hash: "facilities" },
                { label: "Gallery", to: "/" as const, hash: "gallery" },
                { label: "FAQ", to: "/" as const, hash: "faq" },
                { label: "Contact", to: "/contact" as const, hash: undefined },
              ].map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.to}
                    hash={l.hash}
                    className="text-white/50 hover:text-primary transition-colors text-sm"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div className="md:col-span-4">
            <h4 className="font-semibold mb-5 text-xs uppercase tracking-[0.2em] text-white/30">
              Get in Touch
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="size-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm text-white/50 leading-relaxed">
                  Sr no 93, near Wave Rock Road, Janachaithanya Colony, Nanakramguda, Hyderabad 500032
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="size-5 text-primary shrink-0" />
                <a href="tel:+919100531555" className="text-sm text-white/50 hover:text-primary transition-colors">
                  +91 91005 31555
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="size-5 text-primary shrink-0" />
                <a href="mailto:beyondstays.clan@gmail.com" className="text-sm text-white/50 hover:text-primary transition-colors">
                  beyondstays.clan@gmail.com
                </a>
              </li>
            </ul>

            {/* Newsletter */}
            <div className="mt-8">
              <h5 className="text-xs uppercase tracking-[0.2em] text-white/30 font-semibold mb-3">Stay in the Loop</h5>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 bg-white/[0.04] border border-white/[0.08] rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-white/25 focus:outline-none focus:ring-1 focus:ring-primary/50 focus:border-primary/30 transition"
                />
                <button className="bg-primary hover:bg-primary-dark text-primary-foreground px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors shrink-0">
                  Join
                </button>
              </div>
              <p className="text-[10px] text-white/20 mt-2">No spam, just valuable updates.</p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/[0.06] flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/25">
          <p>© {new Date().getFullYear()} Beyond Stays Clan. All rights reserved.</p>
          <p className="text-white/15">clanbeyond.com</p>
        </div>
      </div>
    </footer>
  );
}
