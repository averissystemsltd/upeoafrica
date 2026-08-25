import type { Metadata } from "next";
import Image from "next/image";
import { MapPin, Target, Compass, Heart, Code2, PenTool, Megaphone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/Section";
import { PageHeader } from "@/components/site/PageHeader";
import { StatsBand } from "@/components/sections/StatsBand";
import { CTA } from "@/components/sections/CTA";
import { company, differentiators } from "@/lib/content";
import { pageImages } from "@/lib/images";

export const metadata: Metadata = {
  title: "About",
  description:
    "Upeo Africa Technologies is a software company in Mombasa, Kenya, delivering engineering, design, and marketing under one roof for businesses across Africa since 2019.",
};

const pillars = [
  {
    icon: Target,
    title: "Our mission",
    body: "To help African businesses grow through technology and marketing that is genuinely built for them: practical, reliable, and effective.",
  },
  {
    icon: Compass,
    title: "How we work",
    body: "Senior people, close collaboration, honest communication. We treat your goals as our own and sweat the details that matter to you.",
  },
  {
    icon: Heart,
    title: "What we value",
    body: "Craft over shortcuts, clarity over jargon, and long-term partnerships over one-off projects. We are here for the whole journey with you.",
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
        title="About Upeo Africa Technologies"
        intro={`We are a software, design, and marketing team based on Moi Avenue in Mombasa, Kenya, building for businesses across Africa since ${company.founded}. Work with us and you get one team accountable for the whole thing.`}
        image={pageImages.aboutHeader}
        imageAlt="Four colleagues talking together in a modern office reception area"
      />

      {/* Story */}
      <section className="bg-white py-24 lg:py-32">
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
                  Today, from our base in Mombasa, we are the long-term partner behind
                  products, brands, and campaigns used every day across Africa, and we are
                  just getting started.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-3 gap-3">
                {teams.map((t) => (
                  <div
                    key={t.label}
                    className="rounded-2xl border border-line bg-surface-2 p-4"
                  >
                    <t.icon className="h-5 w-5 text-brand-600" />
                    <p className="mt-3 text-sm font-semibold text-ink-900">{t.label}</p>
                    <p className="text-xs text-muted">{t.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <Reveal delay={0.1}>
              <div className="relative">
                <div className="absolute -inset-4 -z-10 rounded-[2.25rem] bg-brand-500/10 blur-2xl" aria-hidden />
                <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-line shadow-[0_30px_80px_-40px_rgba(11,14,20,0.45)]">
                  <Image
                    src={pageImages.aboutTeam}
                    alt="Three members of the Upeo Africa Technologies team reviewing project plans together around a table"
                    fill
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    className="object-cover object-[50%_60%]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950/50 to-transparent" />
                  <div className="absolute bottom-5 left-5 flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-ink-900 backdrop-blur">
                    <MapPin className="h-4 w-4 text-brand-600" />
                    {company.addressLine}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <StatsBand />

      {/* Pillars */}
      <section className="bg-surface-2 py-24 lg:py-32">
        <Container>
          <SectionHeading
            eyebrow="What We Stand For"
            intro="Before we write a line of code for you, this is what you are signing up for: what we are here to do, how we will work with you, and what we will not cut corners on."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.07}>
                <div className="flex h-full flex-col rounded-2xl border border-line bg-white p-8">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                    <p.icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold text-ink-900">{p.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-body">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Values grid */}
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
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-line bg-surface-2 text-brand-600 transition-colors duration-300 group-hover:border-brand-200 group-hover:bg-brand-50">
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
