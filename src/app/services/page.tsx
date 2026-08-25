import type { Metadata } from "next";
import { Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/Section";
import { PageHeader } from "@/components/site/PageHeader";
import { Process } from "@/components/sections/Process";
import { CTA } from "@/components/sections/CTA";
import { services } from "@/lib/content";
import { pageImages } from "@/lib/images";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Custom web and mobile apps, UI/UX and branding, digital marketing, SEO, API and payment integration, and cloud management from Upeo Africa Technologies, a full-service software company in Mombasa, Kenya.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Software, Design and Marketing Services"
        intro="Everything you need to build, launch, and grow a digital product sits under one roof at Upeo Africa Technologies. Whichever service you come to us for, the same team stays with you from the first conversation through to support after launch."
        image={pageImages.servicesHeader}
        imageAlt="Software developer at his workstation with a code editor open on the monitor beside him"
      />

      <section className="bg-surface-2 py-24 lg:py-32">
        <Container>
          <SectionHeading
            eyebrow="What We Do"
            intro="Take one service on its own or combine several. Either way you sign one contract, work with one team, and always know who to call."
          />

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 2) * 0.06}>
                <article
                  id={s.slug}
                  className="group flex h-full flex-col rounded-2xl border border-line bg-white p-8 transition-all duration-300 hover:border-brand-200 hover:shadow-[0_24px_60px_-30px_rgba(11,14,20,0.3)]"
                >
                  <div className="flex items-start gap-4">
                    <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 transition-colors duration-300 group-hover:bg-brand-500 group-hover:text-white">
                      <s.icon className="h-7 w-7" />
                    </span>
                    <div>
                      <h3 className="text-xl font-semibold text-ink-900">{s.title}</h3>
                      <p className="mt-2 text-[15px] leading-relaxed text-body">
                        {s.description}
                      </p>
                    </div>
                  </div>
                  <ul className="mt-6 grid grid-cols-2 gap-2.5 border-t border-line pt-6">
                    {s.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-slate-ink">
                        <Check className="h-4 w-4 shrink-0 text-brand-500" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <Process />
      <CTA
        title="Start Your Project"
        intro="Tell us the problem you are trying to solve. We will scope the right approach with you and give you a clear plan, timeline, and quote before you commit to anything."
      />
    </>
  );
}
