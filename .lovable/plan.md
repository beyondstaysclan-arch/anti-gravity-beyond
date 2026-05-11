## Beyond Stays Clan — Premium PG Hostel Website

Going with the **Modern Tech-Luxe** direction (cinematic hero with dark overlay, brand orange #ff5a00, Plus Jakarta Sans, glass nav, hover-lift cards) — best matches your spec for a premium fullscreen hero and luxury coliving aesthetic. The uploaded **Beyond Clan** logo will be used in the navbar and footer.

### Routes

```text
src/routes/
  __root.tsx       Sticky glass nav, footer, floating WhatsApp + Call, scroll-to-top
  index.tsx        Home (Hero, About, Pricing, Facilities, Gallery, Testimonials, CTA)
  contact.tsx      Contact page (form, map, contact cards)
```

### Sections (Home)

1. **Hero** — Fullscreen with generated coliving lounge image + dark gradient overlay. Headline "Affordable Premium PG Living in Hyderabad", subheading, "Book Now" + "Contact Us" CTAs, animated scroll indicator.
2. **About Us** — Two-column copy + image. Highlights: safe & secure, fully furnished, food included, modern amenities, ideal for students & IT pros.
3. **Room Pricing** — Two animated cards: 2-Sharing ₹20,000/mo (Popular) and 3-Sharing ₹17,000/mo, each with room image, Food Included + WiFi badges, feature list, Enquiry button, hover-lift.
4. **Facilities** — Grid of 8 cards with Lucide icons: Food, WiFi, CCTV, Laundry, Housekeeping, Power Backup, 24/7 Water, Parking.
5. **Gallery** — Masonry/grid of generated photos (rooms, dining, common area) with hover zoom.
6. **Testimonials** — 3 cards with avatar, name, role (student / software engineer / professional), 5-star rating.
7. **CTA strip** — Booking nudge driving to Contact / WhatsApp.

### Contact Page

- Phone, email, address cards with click-to-call / mailto
- Contact form (name, phone, email, room type, message) — frontend with toast confirmation
- Google Maps iframe embed for the Nanakramguda address
- Prominent WhatsApp + Call buttons

### Global (in __root.tsx)

- Sticky glass navbar: logo (uploaded image) + nav links + "Book Your Stay" CTA, mobile hamburger
- Footer: logo, quick links, social icons, contact details, copyright, clanbeyond.com
- Floating WhatsApp button → wa.me/919100531555
- Floating Call button → tel:+919100531555
- Scroll-to-top button (appears after scroll)

### Design System (src/styles.css)

- Brand tokens in oklch: `--brand` (≈ #ff5a00), `--brand-dark`, neutral surfaces, dark slate footer
- Plus Jakarta Sans via Google Fonts
- Custom utilities: `.hover-lift`, `.glass-nav`, fade/slide keyframes

### Components

`Navbar`, `Footer`, `FloatingActions`, `ScrollToTop`, `Hero`, `About`, `Pricing`, `Facilities`, `Gallery`, `Testimonials`, `CtaStrip`, `ContactForm`

### Images (generated to src/assets/)

- `hero-lounge.jpg` — cinematic coliving lounge with warm lighting
- `about-room.jpg` — modern furnished PG room
- `room-2sharing.jpg`, `room-3sharing.jpg`
- `gallery-1..6.jpg` — bedrooms, dining, common area, workspace, exterior, kitchen
- Logo: copy uploaded file to `src/assets/logo.png`

### Tech & Animations

- `motion` for fade/slide/stagger reveals and card hovers
- `lucide-react` for icons
- Mobile-first responsive (test at 375 / 768 / 1280)
- SEO: per-route `head()` with title, description, og tags; semantic `<h1>`/`<h2>`; alt text on all images

### Out of Scope

- No backend / database — form shows toast only
- No booking system — CTAs route to WhatsApp / phone / contact form