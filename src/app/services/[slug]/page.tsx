import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { stagger } from "@/components/ui/stagger";
import { PageHeader } from "@/components/site/PageHeader";
import { ServiceCard } from "@/components/site/ServiceCard";
import { OpenInquiry } from "@/components/site/OpenInquiry";
import { Process } from "@/components/sections/Process";
import { CTA } from "@/components/sections/CTA";
import { services, company } from "@/lib/content";

/**
 * One template, nine pages. Every service renders through here, so adding a
 * service to `content.ts` publishes a full page with no new layout code.
 */

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};

  return {
    title: service.title,
    description: `${service.description} ${company.name} works with businesses in Mombasa, across Kenya, and throughout Africa.`,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: `${service.title} · ${company.name}`,
      description: service.description,
      url: `${company.domain}/services/${service.slug}`,
    },
  };
}

export default async function ServicePage({ params }: Params) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const others = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <PageHeader
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.title },
        ]}
        title={service.title}
        intro={service.detail.lead}
      />

      {/* What we do about it, and what you walk away with */}
      <section className="bg-white py-24 lg:py-32">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,420px)] lg:gap-16">
            <div>
              <Reveal>
                <h2 className="font-display text-2xl font-bold text-ink-900 sm:text-3xl">
                  How we help
                </h2>
              </Reveal>
              {service.detail.body.map((para, i) => (
                <Reveal key={i} delay={stagger(i + 1, 3)}>
                  <p className="mt-5 text-[17px] leading-relaxed text-body">{para}</p>
                </Reveal>
              ))}

              <Reveal delay={0.18}>
                <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4 border-t border-line pt-8">
                  <OpenInquiry className="group inline-flex cursor-pointer items-center gap-2 bg-ink-900 px-6 py-3.5 text-sm font-medium text-white transition-colors duration-300 ease-out-expo hover:bg-brand-600">
                    Get this service
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 ease-out-expo group-hover:translate-x-1" />
                  </OpenInquiry>
                  <p className="text-sm text-muted">
                    A short call, a clear plan, and a quote before you commit.
                  </p>
                </div>
              </Reveal>
            </div>

            {/* What you get */}
            <Reveal delay={0.1}>
              <aside className="border border-line bg-surface-2 p-8">
                <h2 className="font-display text-lg font-semibold text-ink-900">
                  What you get
                </h2>
                <ul className="mt-6 space-y-4">
                  {service.detail.outcomes.map((o) => (
                    <li key={o} className="flex gap-3 text-[15px] leading-relaxed text-body">
                      <Check className="mt-0.5 h-[18px] w-[18px] shrink-0 text-brand-500" />
                      {o}
                    </li>
                  ))}
                </ul>

                <h3 className="mt-8 border-t border-line pt-6 text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                  Included
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {service.features.map((f) => (
                    <span
                      key={f}
                      className="border border-line bg-white px-3 py-1.5 text-xs font-medium text-slate-ink"
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </aside>
            </Reveal>
          </div>
        </Container>
      </section>

      <Process />

      {/* Related services */}
      <section className="bg-surface-2 py-24 lg:py-32">
        <Container>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <Reveal>
              <h2 className="max-w-xl font-display text-2xl font-bold text-ink-900 sm:text-3xl">
                Often paired with
              </h2>
            </Reveal>
            <Reveal>
              <Link
                href="/services"
                className="group inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-ink-900 transition-colors duration-300 ease-out-expo hover:text-brand-600"
              >
                All services
                <ArrowRight className="h-4 w-4 text-brand-500 transition-transform duration-300 ease-out-expo group-hover:translate-x-1" />
              </Link>
            </Reveal>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {others.map((s, i) => (
              <Reveal key={s.slug} delay={stagger(i, 3)} className="flex">
                <ServiceCard service={s} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Title is not lower-cased: it would mangle SEO, UI/UX, and API. */}
      <CTA
        title={`Ready to start with ${service.title}?`}
        intro="Tell us what you are trying to solve. We will scope it with you and put a clear plan, timeline, and quote in front of you before you commit to anything."
      />
    </>
  );
}
