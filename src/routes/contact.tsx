import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { motion } from "motion/react";
import { Phone, Mail, MapPin, MessageCircle, Send } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Beyond Stays Clan — PG Hostel in Nanakramguda, Hyderabad" },
      {
        name: "description",
        content:
          "Get in touch with Beyond Stays Clan PG and coliving in Nanakramguda. Call +91 91005 31555, email beyondstays.clan@gmail.com, or visit us.",
      },
    ],
  }),
  component: ContactPage,
});

const INFO = [
  {
    icon: Phone,
    title: "Call Us",
    value: "+91 91005 31555",
    href: "tel:+919100531555",
  },
  {
    icon: Mail,
    title: "Email Us",
    value: "beyondstays.clan@gmail.com",
    href: "mailto:beyondstays.clan@gmail.com",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    value: "Sr no 93, near Wave Rock Road, Nanakramguda, Hyderabad 500032",
    href: "https://maps.google.com/?q=Nanakramguda,+Hyderabad",
  },
];

function ContactPage() {
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 600));
    setSubmitting(false);
    toast.success("Enquiry sent!", {
      description: "Our team will reach out shortly. For urgent help, WhatsApp us at +91 91005 31555.",
    });
    (e.target as HTMLFormElement).reset();
  };

  return (
    <>
      {/* Page header */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-surface to-background">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Contact</span>
            <h1 className="mt-3 text-4xl lg:text-6xl font-extrabold tracking-tight text-ink text-balance">
              Let's get you <span className="text-gradient-brand">moved in.</span>
            </h1>
            <p className="mt-5 text-ink-soft text-lg max-w-xl mx-auto">
              Drop us a message, give us a call, or pop in for a tour. We respond within a few hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Info cards */}
      <section className="pb-12">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid md:grid-cols-3 gap-5">
            {INFO.map((item, i) => (
              <motion.a
                key={item.title}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group p-7 rounded-2xl bg-surface ring-1 ring-border hover-lift block"
              >
                <div className="size-12 grid place-items-center rounded-xl bg-primary text-primary-foreground mb-5 group-hover:scale-110 transition-transform">
                  <item.icon className="size-5" />
                </div>
                <h3 className="font-bold text-ink text-lg">{item.title}</h3>
                <p className="mt-2 text-sm text-ink-soft leading-relaxed">{item.value}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Map */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 grid lg:grid-cols-2 gap-10">
          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-surface rounded-3xl p-8 lg:p-10 ring-1 ring-border"
          >
            <h2 className="text-2xl font-extrabold text-ink mb-2">Send an enquiry</h2>
            <p className="text-ink-soft text-sm mb-8">We'll get back to you within a few hours.</p>

            <div className="grid sm:grid-cols-2 gap-4">
              <Field name="name" label="Full name" placeholder="Your name" required />
              <Field name="phone" label="Phone" type="tel" placeholder="+91 ..." required />
              <div className="sm:col-span-2">
                <Field name="email" label="Email" type="email" placeholder="you@email.com" required />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-ink mb-2">Room type</label>
                <select
                  name="room"
                  required
                  className="w-full bg-background border border-border rounded-xl px-4 py-3 text-ink focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition"
                >
                  <option value="">Select a plan</option>
                  <option>2-Sharing Premium · ₹20,000/mo</option>
                  <option>3-Sharing Classic · ₹17,000/mo</option>
                  <option>Not sure yet</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-ink mb-2">Message</label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Tell us about your move-in date and any questions..."
                  className="w-full bg-background border border-border rounded-xl px-4 py-3 text-ink focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition resize-none"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="mt-6 w-full inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-primary-foreground font-semibold py-4 rounded-xl shadow-lg shadow-primary/20 transition-all hover:scale-[1.01] active:scale-[0.98] disabled:opacity-60"
            >
              {submitting ? "Sending..." : (<>Send enquiry <Send className="size-4" /></>)}
            </button>

            <a
              href="https://wa.me/919100531555"
              target="_blank"
              rel="noreferrer"
              className="mt-3 w-full inline-flex items-center justify-center gap-2 bg-[#25D366] text-white font-semibold py-4 rounded-xl hover:opacity-90 transition"
            >
              <MessageCircle className="size-4" />
              Chat on WhatsApp
            </a>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl overflow-hidden ring-1 ring-border min-h-[420px] lg:min-h-0"
          >
            <iframe
              title="Beyond Stays Clan location"
              src="https://www.google.com/maps?q=Nanakramguda,+Hyderabad,+Telangana+500032&output=embed"
              className="w-full h-full min-h-[420px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </section>
    </>
  );
}

function Field({
  name,
  label,
  type = "text",
  placeholder,
  required,
}: {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-ink mb-2">{label}</label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full bg-background border border-border rounded-xl px-4 py-3 text-ink placeholder:text-ink-soft/60 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition"
      />
    </div>
  );
}
