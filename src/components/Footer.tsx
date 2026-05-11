import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone, Instagram, Facebook, Linkedin } from "lucide-react";
import logo from "@/assets/logo.jpg";

export function Footer() {
  return (
    <footer className="bg-[oklch(0.18_0.02_250)] text-white pt-20 pb-10 mt-0">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid md:grid-cols-12 gap-12 mb-16">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <div className="size-11 rounded-xl overflow-hidden ring-1 ring-white/10">
                <img src={logo} alt="Beyond Clan" className="size-full object-cover" />
              </div>
              <span className="text-2xl font-bold tracking-tight">
                Beyond <span className="text-primary">Clan</span>
              </span>
            </div>
            <p className="text-white/65 max-w-sm leading-relaxed mb-8">
              Premium PG and coliving in Nanakramguda, Hyderabad. Designer rooms, curated meals, and a
              vibrant community for students and professionals.
            </p>
            <div className="flex gap-3">
              {[Instagram, Facebook, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="size-10 grid place-items-center rounded-full bg-white/5 ring-1 ring-white/10 hover:bg-primary hover:ring-primary transition-colors"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-3">
            <h4 className="font-semibold mb-5 text-sm uppercase tracking-wider text-white/50">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { label: "About", to: "/" as const, hash: "about" },
                { label: "Rooms", to: "/" as const, hash: "rooms" },
                { label: "Facilities", to: "/" as const, hash: "facilities" },
                { label: "Gallery", to: "/" as const, hash: "gallery" },
                { label: "Contact", to: "/contact" as const, hash: undefined },
              ].map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.to}
                    hash={l.hash}
                    className="text-white/70 hover:text-primary transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="font-semibold mb-5 text-sm uppercase tracking-wider text-white/50">
              Get in touch
            </h4>
            <ul className="space-y-4 text-white/75">
              <li className="flex items-start gap-3">
                <MapPin className="size-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm leading-relaxed">
                  Sr no 93, near Wave Rock Road, Janachaithanya Colony, Nanakramguda, Hyderabad 500032
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="size-5 text-primary shrink-0" />
                <a href="tel:+919100531555" className="text-sm hover:text-primary">
                  +91 91005 31555
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="size-5 text-primary shrink-0" />
                <a href="mailto:beyondstays.clan@gmail.com" className="text-sm hover:text-primary">
                  beyondstays.clan@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/50">
          <p>© {new Date().getFullYear()} Beyond Stays Clan. All rights reserved.</p>
          <p>clanbeyond.com</p>
        </div>
      </div>
    </footer>
  );
}
