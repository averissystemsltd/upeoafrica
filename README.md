# Upeo Africa Technologies — Company Website

Marketing website for **Upeo Africa Technologies Ltd**, a full-service digital agency
(software · design · marketing) based on Moi Avenue, Mombasa, Kenya. Built with Next.js
(App Router), TypeScript, Tailwind CSS v4, Framer Motion, and GSAP (ScrollTrigger).

Live domain: https://upeoafricatechnologies.co.ke

## Brand assets & imagery

- The **official logo/favicon** live in `src/assets/` (`upeo-logo.png`, `upeo-mark.png`)
  and `src/app/icon.png`. These are the real files — do not recreate them.
- Photography is free-to-use **Pexels** stock, catalogued in `src/lib/images.ts`.
  Remote image hosts are allow-listed in `next.config.ts`.

## Getting started

```bash
npm run dev      # start the dev server at http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
npm run lint     # lint
```

## Project structure

```
src/
├── app/
│   ├── layout.tsx          # fonts, metadata, nav + footer shell, skip link
│   ├── page.tsx            # home page (composes the sections below)
│   ├── services/page.tsx   # detailed services
│   ├── about/page.tsx      # company story, values, stats
│   ├── contact/page.tsx    # contact form + details + FAQ
│   ├── icon.svg            # favicon (auto-detected by Next)
│   ├── opengraph-image.tsx # generated social share card
│   ├── sitemap.ts / robots.ts
│   └── globals.css         # design tokens (Tailwind v4 @theme)
├── components/
│   ├── brand/Logo.tsx      # SVG logo mark + wordmark
│   ├── site/               # Navbar, Footer, PageHeader, ContactForm
│   ├── sections/           # Hero, Services, WhyUs, Process, etc.
│   └── ui/                 # Container, Button, Reveal, Section primitives
└── lib/
    └── content.ts          # single source of truth for all site copy/data
```

Almost all copy, services, stats, testimonials, and FAQs live in
[`src/lib/content.ts`](src/lib/content.ts) — edit there to update the site.

## Things to customise before launch

- **Email** — `email` in `src/lib/content.ts` is a placeholder
  (`info@upeoafricatechnologies.co.ke`). Confirm or replace it. Phone and address are the
  real ones from the Google Business Profile.
- **Social links** — the LinkedIn / X / GitHub URLs in the footer are set to `#`.
- **Testimonials & product names** — testimonials are representative; the three product
  cards (`products` in `content.ts`) are generic — replace with your real named products.
- **Contact-page photo** — the support agent image is a stock placeholder; swap the
  `support` entry in `src/lib/images.ts` for a real team photo when available.
- **Contact form** — submissions open the visitor's email client (`mailto:`) prefilled.
  To capture leads server-side, wire the form in `src/components/site/ContactForm.tsx` to
  an API route or a service like Resend / Formspree.

## Design

Brand: vivid orange (`#f97316`) on deep charcoal ink, with Space Grotesk (display) +
Inter (body). Accessibility is built in — visible focus rings, a skip link, reduced-motion
support, semantic markup, and responsive layouts from 375px up.
