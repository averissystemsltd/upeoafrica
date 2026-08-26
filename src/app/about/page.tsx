import type { Metadata } from "next";
import Image from "next/image";
import {
  MapPin,
  Target,
  Telescope,
  Gem,
  Code2,
  PenTool,
  Megaphone,
  ArrowRight,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { stagger } from "@/components/ui/stagger";
import { SectionHeading } from "@/components/ui/Section";
import { PageHeader } from "@/components/site/PageHeader";
import { OpenInquiry } from "@/components/site/OpenInquiry";
import { StatsBand } from "@/components/sections/StatsBand";
import { CTA } from "@/components/sections/CTA";
import { company, differentiators } from "@/lib/content";
import { pageImages } from "@/lib/images";

export const metadata: Metadata = {
  title: "About",
  /* Same string as the header intro below: hero copy is the meta description. */
  description:
    "Upeo Africa Technologies is a software company on Moi Avenue in Mombasa, Kenya, building for businesses across Africa since 2019. We have delivered 791 projects across software engineering, design, and digital marketing, and nine in ten of our clients either come back or refer someone.",
};

/* Mission, vision, values — the classic three, with icons that mean something
   rather than a decorative heart. */
const pillars = [
  {
    icon: Target,
    title: "Our mission",
    body: "To help African businesses grow through technology and marketing that is genuinely built for them: practical, reliable, and effective.",
  },
  {
    icon: Telescope,
    title: "Our vision",
    body: "An Africa where any ambitious business can reach world-class software and marketing, close to home, from a team that understands its context.",
  },
  {
    icon: Gem,
    title: "Our values",
    body: "Craft over shortcuts, clarity over jargon, and long-term partnerships over one-off projects. We sweat the details that decide whether work actually lasts.",
  },
];

const teams = [
  { icon: Code2, label: "Engineering", desc: "Web, mobile & cloud" },
  { icon: PenTool, label: "Design", desc: "Brand & product" },
  { icon: Megaphone, label: "Marketing", desc: "Growth & content" },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        breadcrumb={[{ label: "Home", href: "/" }, { label: "About" }]}
        title="About Upeo Africa Technologies"
        intro="Upeo Africa Technologies is a software company on Moi Avenue in Mombasa, Kenya, building for businesses across Africa since 2019. We have delivered 791 projects across software engineering, design, and digital marketing, and nine in ten of our clients either come back or refer someone."
        image={pageImages.aboutHeader}
        imageAlt="Four colleagues talking together in a modern office reception area"
      />

      {/* Story */}
      <section className="border-t border-line bg-surface-2 py-24 lg:py-32">
        <Container>
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div>
              <SectionHeading
                eyebrow="Our Story"
                intro="&ldquo;Upeo&rdquo; speaks to reach and possibility, and that is exactly what we set out to give you."
              />
              <div className="mt-8 space-y-4 text-[15px] leading-relaxed text-body">
                <p>
                  We started with a simple belief: businesses across Africa deserve
                  world-class digital work, built by people who understand their context
                  and who can take them all the way from idea to growth.
                </p>
                <p>
                  So we built one team that does it all: engineers, designers, and
                  marketers working side by side. You never juggle three agencies or lose
                  work in the handover, because one partner is accountable for the outcome.
                </p>
                <p>
                  Today, from our base on Moi Avenue in Mombasa, we are the long-term
                  partner behind products, brands, and campaigns used every day across
                  Africa, and we are just getting started.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-3 gap-3">
                {teams.map((t) => (
                  <div key={t.label} className="border border-line bg-white p-4">
                    <t.icon className="h-5 w-5 text-brand-600" />
                    <p className="mt-3 text-sm font-semibold text-ink-900">{t.label}</p>
                    <p className="text-xs text-muted">{t.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <Reveal delay={0.1}>
              <div className="relative aspect-[4/5] overflow-hidden border border-line">
                <Image
                  src={pageImages.aboutTeam}
                  alt="Members of the Upeo Africa Technologies team reviewing project plans together around a table"
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover object-[50%_60%]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/60 to-transparent" />
                <div className="absolute inset-x-5 bottom-5 flex items-center gap-2 bg-white/90 px-4 py-2.5 text-sm font-medium text-ink-900 backdrop-blur">
                  <MapPin className="h-4 w-4 shrink-0 text-brand-600" />
                  {company.addressLine}
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Mission / Vision / Values */}
      <section className="bg-white py-24 lg:py-32">
        <Container>
          <SectionHeading
            eyebrow="What We Stand For"
            intro="Before we write a line of code for you, this is what you are signing up for: what we are here to do, where we are headed, and what we will not cut corners on."
          />
          <div className="mt-14 grid gap-px border border-ink-900/10 bg-ink-900/10 md:grid-cols-3">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={stagger(i, 3)} className="flex">
                <div className="group flex h-full w-full flex-col bg-white p-8 transition-colors duration-300 ease-out-expo hover:bg-surface-2">
                  <span className="inline-flex h-12 w-12 items-center justify-center bg-brand-50 text-brand-600 transition-colors duration-300 ease-out-expo group-hover:bg-brand-500 group-hover:text-white">
                    <p.icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-semibold text-ink-900">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-body">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Founder */}
      <section className="bg-white py-24 lg:py-32">
        <Container>
          <div className="grid items-stretch gap-12 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1fr)] lg:gap-16">
            <Reveal className="lg:h-full">
              <div className="relative h-full">
                <div className="relative aspect-[4/5] w-full overflow-hidden border border-line lg:h-full lg:aspect-auto">
                  <Image
                    src={pageImages.founder}
                    alt="Emanuel Soita, Founder and Chief Executive Officer of Upeo Africa Technologies"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover object-top"
                  />
                </div>
                {/* Name plate, sitting on the image's lower edge */}
                <div className="absolute inset-x-4 bottom-4 border border-white/15 bg-ink-950/85 p-5 backdrop-blur-sm">
                  <p className="font-display text-lg font-bold text-white">Emanuel Soita</p>
                  <p className="mt-1 text-sm font-medium text-brand-400">
                    Founder &amp; Chief Executive Officer
                  </p>
                  <p className="text-xs text-white/60">Full-Stack Developer</p>
                </div>
              </div>
            </Reveal>

            <div className="flex flex-col justify-center">
              <SectionHeading
                eyebrow="Leadership"
                intro="Uniting African Talent to Build for Africa"
              />
              <div className="mt-8 space-y-4 text-[15px] leading-relaxed text-body">
                <p>
                  Upeo Africa Technologies was founded in 2019 by Emanuel Soita with a
                  clear vision: to make the African continent feel like one connected
                  village where we engineer and scale our own solutions.
                </p>
                <p>
                  We bring together founders, builders, and creators from across Africa to
                  form a formidable, unified team. As Chief Executive Officer, Emanuel
                  remains a full-stack developer who still ships code alongside the team,
                  ensuring that our high-level vision is grounded in technical rigor, honest
                  timelines, and reliable execution.
                </p>
                <p>
                  By combining regional expertise in engineering, design, and growth
                  marketing under one banner, we empower African businesses to solve local
                  challenges with world-class software.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4 border-t border-line pt-8">
                <OpenInquiry className="group inline-flex cursor-pointer items-center gap-2 bg-ink-900 px-6 py-3.5 text-sm font-medium text-white transition-colors duration-300 ease-out-expo hover:bg-brand-600">
                  Work with our team
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 ease-out-expo group-hover:translate-x-1" />
                </OpenInquiry>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <StatsBand />

      {/* Why clients choose us */}
      <section className="bg-white py-24 lg:py-32">
        <Container>
          <SectionHeading
            align="center"
            eyebrow="Why Clients Choose Us"
            intro="These are the commitments you can hold us to on every project, from the first scope through to the support you get long after launch."
          />
          <div className="mt-16 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {differentiators.map((d, i) => (
              <Reveal key={d.title} delay={(i % 3) * 0.06}>
                <div className="group">
                  <span className="inline-flex h-12 w-12 items-center justify-center border border-line bg-surface-2 text-brand-600 transition-colors duration-300 ease-out-expo group-hover:border-brand-200 group-hover:bg-brand-50">
                    <d.icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold text-ink-900">{d.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-body">
                    {d.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTA
        title="Work With Us"
        intro="Tell us what you are building and we will tell you honestly whether we are the right team for it."
      />
    </>
  );
}
