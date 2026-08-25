import type { LucideIcon } from "lucide-react";
import {
  Code2,
  Smartphone,
  Globe,
  PenTool,
  Plug,
  Cloud,
  Palette,
  Megaphone,
  Search,
  CreditCard,
  ShieldCheck,
  Handshake,
  LifeBuoy,
  Award,
  KeyRound,
  Search as SearchIcon,
  DraftingCompass,
  Rocket,
  RefreshCw,
  HeartPulse,
  Landmark,
  ShoppingBag,
  GraduationCap,
  Tractor,
  Truck,
  AppWindow,
  Puzzle,
  Store,
} from "lucide-react";
import { images } from "./images";

export const company = {
  name: "Upeo Africa Technologies",
  legalName: "Upeo Africa Technologies Ltd",
  shortName: "Upeo Africa",
  tagline: "Software, design and marketing, built for African businesses",
  location: "Mombasa, Kenya",
  email: "hello@upeoafricatechnologies.co.ke",
  phone: "+254 105 374738",
  addressLine: "Moi Avenue, Mombasa, Kenya",
  founded: 2019,
  googleRating: "5.0",
  // Replace with your exact Google Business "share" link (g.page/r/…) for the direct review flow.
  googleReviewUrl:
    "https://www.google.com/maps/search/?api=1&query=Upeo+Africa+Technologies+Ltd+Mombasa",
  domain: "https://upeoafricatechnologies.co.ke",
};

export const nav = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const legalNav = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Service Level Agreement", href: "/sla" },
];

// Mega-menu groupings (slugs reference `services` below).
export const megaServices = [
  { group: "Build", slugs: ["web-applications", "mobile-apps", "api-payments", "cloud-devops"] },
  { group: "Design", slugs: ["websites-portals", "product-design", "branding-creative"] },
  { group: "Grow", slugs: ["digital-marketing", "seo-content"] },
];

/* ── Hero rotating showcase ─────────────────────────────────────────────── */
export type HeroSlide = {
  label: string;
  caption: string;
  image: string;
  icon: LucideIcon;
  accent: string;
};

export const heroSlides: HeroSlide[] = [
  {
    label: "Custom Software",
    caption: "Web, mobile and enterprise apps that run your operations.",
    image: images.software,
    icon: Code2,
    accent: "text-brand-400",
  },
  {
    label: "Web & Product Design",
    caption: "High-converting websites and interfaces people love.",
    image: images.digital,
    icon: PenTool,
    accent: "text-sky-400",
  },
  {
    label: "Digital Marketing",
    caption: "SEO, social and campaigns that grow your brand.",
    image: images.marketing,
    icon: Megaphone,
    accent: "text-pink-400",
  },
  {
    label: "Payments & Integrations",
    caption: "M-Pesa, Airtel Money, bank and card, built right in.",
    image: images.payments,
    icon: CreditCard,
    accent: "text-green-400",
  },
];

/* ── Services ───────────────────────────────────────────────────────────── */
export type Service = {
  slug: string;
  title: string;
  icon: LucideIcon;
  short: string;
  description: string;
  features: string[];
};

export const services: Service[] = [
  {
    slug: "web-applications",
    title: "Custom Web Applications",
    icon: Code2,
    short: "Scalable, secure platforms that run your operations.",
    description:
      "Bespoke web platforms, from internal tools to customer-facing products, built to scale with your business and secure by default.",
    features: ["Enterprise dashboards", "Workflow automation", "Role-based access", "Real-time data"],
  },
  {
    slug: "mobile-apps",
    title: "Mobile App Development",
    icon: Smartphone,
    short: "Native-grade Android and iOS apps people love to use.",
    description:
      "Beautiful, high-performance mobile experiences for Android and iOS that combine thoughtful design with rock-solid engineering.",
    features: ["iOS & Android", "Offline-first", "Push & M-Pesa", "App Store launch"],
  },
  {
    slug: "websites-portals",
    title: "Websites & Portals",
    icon: Globe,
    short: "Fast, responsive sites that build trust and convert.",
    description:
      "Professional, responsive websites and self-service portals engineered for speed, search visibility, and conversion.",
    features: ["SEO-ready", "CMS integration", "Blazing performance", "Analytics"],
  },
  {
    slug: "product-design",
    title: "UI/UX & Product Design",
    icon: PenTool,
    short: "Intuitive interfaces focused on real engagement.",
    description:
      "Research-driven product design that turns complex requirements into clean, intuitive interfaces your users understand instantly.",
    features: ["Product design", "Design systems", "Prototyping", "Usability testing"],
  },
  {
    slug: "branding-creative",
    title: "Branding & Creative",
    icon: Palette,
    short: "Brand identities people remember and trust.",
    description:
      "Logos, visual identity, and creative assets that make your business look as capable as it truly is, consistent across every touchpoint.",
    features: ["Logo & identity", "Brand guidelines", "Graphics & assets", "Pitch decks"],
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    icon: Megaphone,
    short: "Campaigns that reach the right people and convert.",
    description:
      "Full-service digital marketing across social media, paid ads, email, and content, run by a team that lives and breathes growth.",
    features: ["Social media", "Paid ads", "Email & content", "Campaign analytics"],
  },
  {
    slug: "seo-content",
    title: "SEO & Content",
    icon: Search,
    short: "Get found by the customers already searching.",
    description:
      "Technical SEO, content strategy, and optimisation that lift your visibility and bring in qualified, high-intent traffic.",
    features: ["Technical SEO", "Keyword strategy", "Content writing", "Local SEO"],
  },
  {
    slug: "api-payments",
    title: "API & Payment Integration",
    icon: Plug,
    short: "Connect your tools, services, and payment rails.",
    description:
      "Robust APIs and integrations, including M-Pesa, Airtel Money, bank, and card payments, wired cleanly into your products.",
    features: ["REST & GraphQL", "M-Pesa & Airtel", "Bank & card", "Webhooks"],
  },
  {
    slug: "cloud-devops",
    title: "Cloud & Server Management",
    icon: Cloud,
    short: "24/7 hosting, monitoring, and optimisation.",
    description:
      "Cloud infrastructure, deployment pipelines, and round-the-clock server management that keep your products secure and online.",
    features: ["CI/CD pipelines", "Monitoring & alerts", "Security hardening", "24/7 uptime"],
  },
];

/* ── Capabilities (alternating image + CTA rows) ────────────────────────── */
export type Capability = {
  eyebrow: string;
  title: string;
  description: string;
  bullets: string[];
  image: string;
  imageAlt: string;
  cta: { label: string; href: string };
};

export const capabilities: Capability[] = [
  {
    eyebrow: "Build",
    title: "Software and products, engineered to last",
    description:
      "Our engineers design and build web platforms, mobile apps, and integrations that are fast, secure, and ready to scale as you grow.",
    bullets: ["Web & mobile apps", "APIs & payment integrations", "Cloud & DevOps"],
    image: images.software,
    imageAlt: "Software engineer building an application",
    cta: { label: "Explore development", href: "/services" },
  },
  {
    eyebrow: "Design",
    title: "Brands and interfaces people remember",
    description:
      "From brand identity to product UI, our design team crafts experiences that look the part and feel effortless to use.",
    bullets: ["Brand identity & creative", "UI/UX & product design", "Design systems"],
    image: images.strategy,
    imageAlt: "Design and strategy team collaborating",
    cta: { label: "See design work", href: "/services" },
  },
  {
    eyebrow: "Grow",
    title: "Marketing that reaches and converts",
    description:
      "Our marketing team turns attention into customers with SEO, social, paid campaigns, and content built around real results.",
    bullets: ["SEO & content", "Social & paid ads", "Analytics & reporting"],
    image: images.marketing,
    imageAlt: "Marketing professional driving growth",
    cta: { label: "Grow with us", href: "/contact" },
  },
];

export type Differentiator = { title: string; description: string; icon: LucideIcon };

export const differentiators: Differentiator[] = [
  {
    title: "End-to-End Services",
    description:
      "Strategy, design, engineering, and marketing sit on one team under one contract. There is no gap between your developer, your designer, and your agency, because there is only one of us to call.",
    icon: Handshake,
  },
  {
    title: "Local Payment Expertise",
    description:
      "We have shipped M-Pesa, Airtel Money, bank transfer, and card integrations into live products. Payment rails across Africa carry rules an offshore team learns at your expense.",
    icon: CreditCard,
  },
  {
    title: "A Proven Track Record",
    description:
      "791 projects delivered since 2019, and nine in ten come from repeat clients or referrals. The people who have seen our work closest are the ones who keep hiring us.",
    icon: Award,
  },
  {
    title: "Secure by Design",
    description:
      "Encryption, backups, access control, and monitoring are scoped into the build from day one. Security is not a line item we sell you after something has already gone wrong.",
    icon: ShieldCheck,
  },
  {
    title: "Full Code Ownership",
    description:
      "On final payment we assign you the intellectual property in everything built for you, in writing. Your code, your repositories, your accounts. We keep clients because the work is good, not because leaving is hard.",
    icon: KeyRound,
  },
  {
    title: "SLA-Backed Support",
    description:
      "Our service level agreement sets a one-hour response target on critical incidents, not a vague promise to get back to you. Hosting, monitoring, and maintenance carry on long after launch.",
    icon: LifeBuoy,
  },
];

export type Step = { n: string; title: string; description: string; icon: LucideIcon };

export const process: Step[] = [
  {
    n: "01",
    title: "Discover",
    description: "We dig into your goals, users, and constraints to define what success looks like.",
    icon: SearchIcon,
  },
  {
    n: "02",
    title: "Design",
    description: "We map the architecture and craft the experience, validated with prototypes first.",
    icon: DraftingCompass,
  },
  {
    n: "03",
    title: "Build",
    description: "We engineer in tested, reviewable increments with regular demos, never a black box.",
    icon: Code2,
  },
  {
    n: "04",
    title: "Launch",
    description: "We ship to production with confidence, monitoring, and a clear rollout plan.",
    icon: Rocket,
  },
  {
    n: "05",
    title: "Grow",
    description: "We market, measure, and improve, turning your product into a compounding advantage.",
    icon: RefreshCw,
  },
];

export const stats = [
  { value: 791, suffix: "", label: "Projects delivered" },
  { value: 98, suffix: "%", label: "Client satisfaction" },
  { value: 6, suffix: "+", label: "Years of expertise" },
  { value: 90, suffix: "%", label: "Repeat & referral clients" },
];

/* Tech stack, keyed to Simple Icons slugs for real brand marks. */
export const techStack: { name: string; slug: string }[] = [
  { name: "React", slug: "react" },
  { name: "Next.js", slug: "nextdotjs" },
  { name: "TypeScript", slug: "typescript" },
  { name: "Node.js", slug: "nodedotjs" },
  { name: "React Native", slug: "react" },
  { name: "Flutter", slug: "flutter" },
  { name: "Python", slug: "python" },
  { name: "PostgreSQL", slug: "postgresql" },
  { name: "MongoDB", slug: "mongodb" },
  { name: "Tailwind CSS", slug: "tailwindcss" },
  { name: "Docker", slug: "docker" },
  { name: "Figma", slug: "figma" },
];

export type Product = { title: string; icon: LucideIcon; description: string; tags: string[] };

export const products: Product[] = [
  {
    title: "Apps & SaaS products",
    icon: AppWindow,
    description:
      "Web and mobile products we've designed, launched, and continue to run. Reliable, scalable, and a pleasure to use.",
    tags: ["Web apps", "Mobile apps", "Dashboards"],
  },
  {
    title: "WordPress plugins",
    icon: Puzzle,
    description:
      "Custom plugins that extend WordPress with exactly the features your site needs, with no bloat and no compromises.",
    tags: ["Custom features", "Integrations", "Maintenance"],
  },
  {
    title: "POS systems & plugins",
    icon: Store,
    description:
      "Point-of-sale software and plugins that keep retail and hospitality businesses running smoothly, on and offline.",
    tags: ["Retail", "Hospitality", "Inventory"],
  },
];

export const payments = ["M-Pesa", "Airtel Money", "Bank transfers", "Card payments"];

export type Industry = { title: string; icon: LucideIcon };

export const industries: Industry[] = [
  { title: "Healthcare", icon: HeartPulse },
  { title: "Financial Services", icon: Landmark },
  { title: "Retail & E-commerce", icon: ShoppingBag },
  { title: "Education", icon: GraduationCap },
  { title: "Agriculture", icon: Tractor },
  { title: "Logistics & Transport", icon: Truck },
];

export const faqs = [
  {
    q: "Where is Upeo Africa Technologies based?",
    a: "We're a software and digital agency headquartered on Moi Avenue, Mombasa, Kenya, working with clients across the country and the wider African continent, both on-site and remotely.",
  },
  {
    q: "Do you only build software, or marketing too?",
    a: "Both. We're a full-service team spanning software engineering, design and branding, and digital marketing, so you can build, launch, and grow with one accountable partner.",
  },
  {
    q: "How do engagements usually start?",
    a: "With a short discovery conversation. We learn your goals, recommend an approach, and give you a clear plan, timeline, and quote before any commitment.",
  },
  {
    q: "Do you support products after launch?",
    a: "Yes. Ongoing maintenance, monitoring, marketing, and iterative improvement are core to how we work, and most of our clients stay with us long after go-live.",
  },
];
