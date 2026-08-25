import type { Metadata } from "next";
import Image from "next/image";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/Section";
import { PageHeader } from "@/components/site/PageHeader";
import { ContactForm } from "@/components/site/ContactForm";
import { company, faqs } from "@/lib/content";
import { images, pageImages } from "@/lib/images";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a project with Upeo Africa Technologies. Talk to our Mombasa team spanning software, design, and marketing under one roof. We reply within one business day.",
};

const details = [
  { icon: Mail, label: "Email", value: company.email, href: `mailto:${company.email}` },
  {
    icon: Phone,
    label: "Phone",
    value: company.phone,
    href: `tel:${company.phone.replace(/\s/g, "")}`,
  },
  { icon: MapPin, label: "Office", value: company.addressLine },
  { icon: Clock, label: "Hours", value: "Mon – Fri, 8:00 – 17:00 EAT" },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact Upeo Africa Technologies"
        intro="Bring us a detailed brief or just the beginnings of an idea, and we will take it from there. Tell us what you want to build and you will hear back from our Mombasa team within one business day."
        image={pageImages.contactHeader}
        imageAlt="Client support specialist talking a caller through a question at her desk"
      />

      <section className="bg-surface-2 py-24 lg:py-32">
        <Container>
          <SectionHeading
            eyebrow="Send Us Your Brief"
            intro="Fill in the form and the right person on our team answers you directly, or use whichever of the details below suits you better."
          />

          <div className="mt-14 grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            {/* Left: friendly face + details */}
            <div>
              <Reveal>
                <div className="relative overflow-hidden rounded-3xl border border-line shadow-[0_30px_80px_-45px_rgba(11,14,20,0.45)]">
                  <div className="relative aspect-[5/4] w-full">
                    <Image
                      src={images.support}
                      alt="Upeo Africa Technologies support specialist at her desk, ready to help"
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-950/75 via-ink-950/10 to-transparent" />
                  </div>
                  <div className="absolute inset-x-5 bottom-5">
                    <span className="inline-flex items-center gap-2 rounded-full bg-brand-500 px-3 py-1 text-xs font-semibold text-white">
                      <span className="h-1.5 w-1.5 rounded-full bg-white" /> We&apos;re here to
                      help
                    </span>
                    <p className="mt-3 text-lg font-semibold text-white">
                      Talk to a real person
                    </p>
                    <p className="mt-1 text-sm text-white/75">
                      No ticket queue. Our team replies within one business day.
                    </p>
                  </div>
                </div>
              </Reveal>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {details.map((d, i) => (
                  <Reveal key={d.label} delay={i * 0.05}>
                    <div className="flex items-center gap-3 rounded-2xl border border-line bg-white p-4">
                      <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                        <d.icon className="h-5 w-5" />
                      </span>
                      <div className="min-w-0">
                        <p className="text-xs font-medium uppercase tracking-wide text-muted">
                          {d.label}
                        </p>
                        {d.href ? (
                          <a
                            href={d.href}
                            className="block truncate text-[15px] font-medium text-ink-900 transition-colors hover:text-brand-600"
                          >
                            {d.value}
                          </a>
                        ) : (
                          <p className="truncate text-[15px] font-medium text-ink-900">
                            {d.value}
                          </p>
                        )}
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            {/* Right: form */}
            <Reveal delay={0.1}>
              <ContactForm />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="bg-white py-24 lg:py-32">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <SectionHeading
                eyebrow="Frequently Asked Questions"
                intro={
                  <>
                    Here are the questions clients ask us most. If yours is not below, email
                    us at{" "}
                    <a
                      href={`mailto:${company.email}`}
                      className="font-medium text-brand-600 hover:underline"
                    >
                      {company.email}
                    </a>{" "}
                    and we will answer it.
                  </>
                }
              />
            </div>

            <div className="divide-y divide-line">
              {faqs.map((f, i) => (
                <Reveal key={f.q} delay={i * 0.05}>
                  <details className="group py-5">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-ink-900 [&::-webkit-details-marker]:hidden">
                      {f.q}
                      <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-line text-muted transition-all duration-200 group-open:rotate-45 group-open:border-brand-300 group-open:text-brand-600">
                        +
                      </span>
                    </summary>
                    <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-body">
                      {f.a}
                    </p>
                  </details>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
