# PRD — Little Lion · Big Help Landing Page

## 1. Overview

A single-page marketing site for **Little Lion · Big Help**, a one-person neighborhood handyman business in Memphis, TN. The goal is a clean, warm, professional page that builds trust and makes it dead-simple for a visitor to see what he offers and get in touch. One scroll, three sections, looks great on a phone and a laptop.

**Primary goal:** Get the visitor to call, text, or message.
**Secondary goal:** Communicate the friendly, neighborly, "small but mighty" brand.

## 2. Business details (pulled from his Instagram)

| Field | Value |
|---|---|
| Business name | Little Lion · Big Help |
| Tagline | Neighborhood Handyman |
| Location | Memphis, Tennessee (Cooper Young, East Memphis, midtown-ish) |
| Phone | (901) 461-9573 |
| Instagram | [@littlelionbighelp](https://instagram.com/littlelionbighelp) |
| Facebook | littlelionbighelp |
| Mascot | Sam, his golden retriever (aka "Little Lion") |

**Brand voice:** humble, warm, neighborly. Real phrases he uses: *"Always happy to help."* · *"Small but mighty."* · *"Let me get you on my calendar."* Keep copy in this register — first person, friendly, no corporate fluff.

## 3. Target audience

Memphis homeowners (skews midtown/East Memphis) who need small-to-medium home and yard tasks done by someone trustworthy and local. Many visitors will arrive from his Instagram on mobile, so **mobile-first is non-negotiable**.

## 4. Tech stack

- **Build:** Vite + React (JavaScript or TypeScript — your call).
- **Styling:** Your preference; Tailwind keeps it fast, plain CSS modules also fine.
- **Motion:** `motion` (Framer Motion). Keep it *light* — fade/slide-in on scroll, gentle hover lifts, a subtle hero entrance. No parallax circuses.
- **Hosting target:** static deploy (Netlify / Vercel / GitHub Pages). No backend required.
- **Contact form:** if you want a working form without a backend, use a service like Formspree or a `mailto:`/`tel:` fallback. A plain "Call / Text / Email" set of buttons is perfectly acceptable for v1.

## 5. Brand & visual direction

The logo is a hand-drawn cursive "Little Lion" in warm copper-brown with a sketched golden retriever. There's also a sage/teal variant. Lean into a **warm, earthy, handcrafted** feel — this is a neighbor, not a franchise.

**Suggested palette**
- Copper / rust brown `#A8552E` (primary, from the script logo)
- Warm golden tan `#D8A24A` (the dog / accents)
- Sage-teal `#3F6B66` (secondary accent, from the alt logo)
- Cream / off-white `#F7F1E6` (background)
- Charcoal `#2B2622` (text)

**Type:** a friendly humanist sans for body (e.g. Inter, Nunito Sans) paired with something with a bit of warmth/character for headings. Avoid anything cold or techy.

**Imagery:** use his real photos — the portrait with the dog, the before/after pressure-washing shots. These are his strongest asset and prove the work is real.

## 6. Page sections

### 6.1 Hero
- Logo / business name + "Neighborhood Handyman" tagline.
- One-line value prop, e.g. *"Friendly, reliable help for the jobs around your house — right here in Memphis."*
- Primary CTA button: **Call/Text (901) 461-9573**. Secondary: "See what I do" (scrolls to services).
- Hero image: the portrait of him with Sam (warm, personal, on-brand) or a clean photo with a soft overlay so text stays readable.
- Light motion: headline + CTA fade/slide up on load.

### 6.2 Services
A simple, scannable grid (2 columns on desktop, 1 on mobile). Each item = small icon + label, no long descriptions needed. Services to list:
- Yard cleanup
- Garden work
- Pressure washing
- Gutter cleaning
- Light hauling
- Small repairs
- Dog walking
- Odds & ends

Optional touch: a short line above the grid — *"If it's on your list, it's probably on mine."* Light motion: cards stagger-fade in on scroll.

### 6.3 Contact
- Heading + warm one-liner (*"Let me get you on my calendar."*).
- Big, tappable contact buttons: **Call**, **Text**, **Email** (use `tel:` and `mailto:` links so they work natively on mobile).
- Instagram + Facebook links.
- Service area note: "Serving Memphis & surrounding neighborhoods."
- Optional: simple name/email/message form via Formspree if you want lead capture.

### 6.4 Footer
Business name, phone, social links, copyright. Keep minimal.

## 7. Functional requirements
- Fully responsive, mobile-first; test at 375px width first.
- All phone/email/social links must be real, tappable links.
- Smooth scroll from hero CTA to relevant section.
- Fast load (optimize the photos — compress, use modern formats).
- Accessible: real semantic headings, alt text on images, sufficient color contrast, focus states on buttons.

## 8. Non-functional requirements
- Lighthouse: aim 90+ on mobile performance & accessibility.
- No tracking/analytics required for v1 (add later if wanted).
- Motion respects `prefers-reduced-motion`.

## 9. Out of scope (v1)
- Online booking / calendar integration
- Payments
- Blog / multi-page navigation
- Reviews/testimonials section (can add in v2 — he has happy commenters who'd make great quotes)

## 10. Open questions for your friend
1. Best contact method to feature first — call, text, or email?
2. Does he have a business email address to use?
3. Exact neighborhoods/radius he serves?
4. OK to use his Instagram photos on the site? (Confirm the dog portrait + before/afters.)
5. Want the working contact form, or are tap-to-call/text buttons enough for now?