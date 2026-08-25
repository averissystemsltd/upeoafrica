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
  /** One line for the homepage grid. */
  short: string;
  /** Card copy: the client's problem first, then what they get from us. */
  description: string;
  features: string[];
  /** Everything the individual service page needs. */
  detail: {
    /** The situation the client is in, in their words. */
    lead: string;
    /** How we work on it. */
    body: string[];
    /** What they actually walk away with. */
    outcomes: string[];
  };
};

export const services: Service[] = [
  {
    slug: "web-applications",
    title: "Custom Web Applications",
    icon: Code2,
    short: "Scalable, secure platforms that run your operations.",
    description:
      "Spreadsheets and off-the-shelf tools stop fitting once your business grows. We build web platforms around the way you actually work, so your team stops fighting software and gets on with the job.",
    features: ["Enterprise dashboards", "Workflow automation", "Role-based access", "Real-time data"],
    detail: {
      lead: "You are running a growing business on spreadsheets, WhatsApp groups, and software that was never built for you.",
      body: [
        "We start by sitting with the people who will use the system every day and mapping how the work really flows, not how a process document says it should. That is usually where the expensive surprises hide.",
        "Then we build the platform around it: your rules, your approvals, your reports. It runs on infrastructure we manage, it is secured from the first commit, and it is built to keep working when your team doubles.",
      ],
      outcomes: [
        "A platform shaped around your workflow, not a template you bend to fit",
        "Role-based access so staff see exactly what they should",
        "Dashboards and reports your managers actually use",
        "Documentation and handover so you are never locked in",
      ],
    },
  },
  {
    slug: "mobile-apps",
    title: "Mobile App Development",
    icon: Smartphone,
    short: "Native-grade Android and iOS apps people love to use.",
    description:
      "Your customers are on their phones, on patchy connections, paying with mobile money. We build Android and iOS apps that work in those conditions, so nothing stands between you and a sale.",
    features: ["iOS & Android", "Offline-first", "Push & M-Pesa", "App Store launch"],
    detail: {
      lead: "Your customers live on their phones, and a slow or fragile app is the fastest way to lose them.",
      body: [
        "We build for the conditions your users are actually in: intermittent data, older Android handsets, and mobile money as the default way to pay. Offline-first is a design decision we make early, not a patch we add later.",
        "You get one team covering design, build, store submission, and the updates afterwards. We handle the review process and the release notes so you are not learning App Store policy on a deadline.",
      ],
      outcomes: [
        "One codebase serving both Android and iOS users",
        "Works on poor connections instead of failing on them",
        "M-Pesa and Airtel Money built in, not bolted on",
        "Submitted, approved, and live on both stores",
      ],
    },
  },
  {
    slug: "websites-portals",
    title: "Websites & Portals",
    icon: Globe,
    short: "Fast, responsive sites that build trust and convert.",
    description:
      "A slow or dated website quietly costs you the customers who never call. We build fast, search-ready sites that load in seconds and give visitors a reason to trust you enough to get in touch.",
    features: ["SEO-ready", "CMS integration", "Blazing performance", "Analytics"],
    detail: {
      lead: "Most visitors decide whether to trust your business within seconds of your homepage loading, if it loads at all.",
      body: [
        "We build sites that are quick on a mid-range phone over mobile data, because that is how most of your visitors will see you. Performance is a requirement we test against, not a nice-to-have.",
        "Everything is structured for search from the start, and you get a content system your own team can run without calling us for every edit.",
      ],
      outcomes: [
        "Loads fast on mobile data, not just on office fibre",
        "Structured for search so you can rank rather than pay",
        "A CMS your team can update without a developer",
        "Analytics wired in so you can see what visitors do",
      ],
    },
  },
  {
    slug: "product-design",
    title: "UI/UX & Product Design",
    icon: PenTool,
    short: "Intuitive interfaces focused on real engagement.",
    description:
      "If people cannot work out your product in the first minute, they leave and rarely come back. We design interfaces your users understand instantly, so more of them finish what they came to do.",
    features: ["Product design", "Design systems", "Prototyping", "Usability testing"],
    detail: {
      lead: "A product that confuses people does not get a second chance, however good the engineering underneath it is.",
      body: [
        "We research before we draw. Who is using this, what are they trying to finish, and where do they currently give up? Those answers shape the interface far more than any trend does.",
        "You get clickable prototypes to react to before anything is built, which is the cheapest possible moment to change your mind. We test with real users and fix what trips them up.",
      ],
      outcomes: [
        "Prototypes you can click through before we build",
        "A design system that keeps every screen consistent",
        "Usability testing with real users, not internal opinion",
        "Fewer support calls because the interface explains itself",
      ],
    },
  },
  {
    slug: "branding-creative",
    title: "Branding & Creative",
    icon: Palette,
    short: "Brand identities people remember and trust.",
    description:
      "Buyers judge your business by how it looks long before they ever speak to you. We build an identity that makes you look as capable as you are, and keep it consistent everywhere you show up.",
    features: ["Logo & identity", "Brand guidelines", "Graphics & assets", "Pitch decks"],
    detail: {
      lead: "You are losing deals to competitors who are not better than you, but who look more established than you do.",
      body: [
        "We work out what your business should stand for in the eyes of the people you want to sell to, then build an identity that carries it: logo, colour, type, and the rules that hold it together.",
        "You get guidelines and source files, so the next person who makes a poster or a pitch deck does not quietly undo the work.",
      ],
      outcomes: [
        "A logo and identity that works at any size, in any medium",
        "Written brand guidelines your team and suppliers can follow",
        "Source files you own outright",
        "Templates for the documents you send out every week",
      ],
    },
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    icon: Megaphone,
    short: "Campaigns that reach the right people and convert.",
    description:
      "Running ads without a plan burns budget and teaches you nothing. We run campaigns against clear targets, show you what every shilling returned, and cut whatever is not working.",
    features: ["Social media", "Paid ads", "Email & content", "Campaign analytics"],
    detail: {
      lead: "You are spending on ads every month and cannot say with confidence which of it is working.",
      body: [
        "We agree what a result is worth to you before we spend anything, then build campaigns against that number. Reach and impressions are diagnostics, not the goal.",
        "You get a plain-language report each month: what we spent, what it returned, what we are changing next, and why.",
      ],
      outcomes: [
        "Campaigns measured against sales and leads, not vanity metrics",
        "Tracking set up properly so the numbers can be trusted",
        "A monthly report you can read without a marketing degree",
        "Budget moved to what works and pulled from what does not",
      ],
    },
  },
  {
    slug: "seo-content",
    title: "SEO & Content",
    icon: Search,
    short: "Get found by the customers already searching.",
    description:
      "Your customers are already searching for what you sell, and right now they are finding someone else. We get you onto the first page for the terms that convert, so you earn traffic instead of renting it.",
    features: ["Technical SEO", "Keyword strategy", "Content writing", "Local SEO"],
    detail: {
      lead: "Someone in your city is searching for exactly what you sell today, and a competitor is taking that call.",
      body: [
        "We start with the technical foundation, because no amount of content rescues a site that search engines struggle to read. Then we target the search terms that bring buyers, not just browsers.",
        "For businesses serving a specific area, local SEO usually pays back fastest: your Google Business profile, local listings, and pages built for the places you actually serve.",
      ],
      outcomes: [
        "Technical issues fixed so your pages can rank at all",
        "A keyword plan aimed at buying intent, not raw volume",
        "Content written for your customers and for search",
        "Local visibility in the places you actually trade",
      ],
    },
  },
  {
    slug: "api-payments",
    title: "API & Payment Integration",
    icon: Plug,
    short: "Connect your tools, services, and payment rails.",
    description:
      "Getting paid should not be the hardest part of your product. We wire M-Pesa, Airtel Money, bank, and card payments into your systems, properly reconciled and secure.",
    features: ["REST & GraphQL", "M-Pesa & Airtel", "Bank & card", "Webhooks"],
    detail: {
      lead: "Payments in this market have rules an offshore team learns at your expense, on your customers, in production.",
      body: [
        "We have put M-Pesa, Airtel Money, bank transfer, and card payments into live products, and we know where they bite: callback retries, timeouts, duplicate confirmations, and reconciliation that has to survive an audit.",
        "The same applies to the rest of your stack. We connect your accounting, CRM, inventory, and messaging tools so data stops being retyped between systems.",
      ],
      outcomes: [
        "M-Pesa and Airtel Money integrated and tested against real edge cases",
        "Card and bank rails for customers who prefer them",
        "Reconciliation you can hand to your accountant",
        "Your existing tools connected instead of manually re-keyed",
      ],
    },
  },
  {
    slug: "cloud-devops",
    title: "Cloud & Server Management",
    icon: Cloud,
    short: "24/7 hosting, monitoring, and optimisation.",
    description:
      "Downtime costs you sales and trust in the same afternoon. We host, monitor, and patch your systems around the clock, so you hear about a problem from us before you hear it from a customer.",
    features: ["CI/CD pipelines", "Monitoring & alerts", "Security hardening", "24/7 uptime"],
    detail: {
      lead: "The first time most businesses think about hosting is the morning it goes down.",
      body: [
        "We run your infrastructure properly: automated deployments, monitoring that pages a human, backups that are tested by restoring them, and security patches applied on a schedule rather than after an incident.",
        "Our service level agreement sets a one-hour response target on critical incidents, and we keep you informed while we work rather than going quiet.",
      ],
      outcomes: [
        "Monitoring that alerts us before your customers notice",
        "Backups that have actually been restored and verified",
        "A one-hour response target on critical incidents",
        "Deployments that are repeatable instead of nerve-racking",
      ],
    },
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
