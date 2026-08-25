import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { stagger } from "@/components/ui/stagger";
import { SectionHeading } from "@/components/ui/Section";
import { PageHeader } from "@/components/site/PageHeader";
import { ServiceCard } from "@/components/site/ServiceCard";
import { Process } from "@/components/sections/Process";
import { GoogleRating } from "@/components/sections/GoogleRating";
import { CTA } from "@/components/sections/CTA";
import { services } from "@/lib/content";
import { pageImages } from "@/lib/images";

export const metadata: Metadata = {
  title: "Services",
  /* Same string as the header intro below: hero copy is the meta description. */
  description:
    "Upeo Africa Technologies delivers software, design, and marketing services from Mombasa, Kenya: custom web application and mobile app development, UI/UX and branding, SEO, digital marketing, M-Pesa and Airtel Money payment integration, and managed cloud hosting for businesses across Africa.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Services" }]}
        title="Software, Design and Marketing Services"
        intro="Upeo Africa Technologies delivers software, design, and marketing services from Mombasa, Kenya: custom web application and mobile app development, UI/UX and branding, SEO, digital marketing, M-Pesa and Airtel Money payment integration, and managed cloud hosting for businesses across Africa."
        image={pageImages.servicesHeader}
        imageAlt="Software developer at his workstation with a code editor open on the monitor beside him"
      />

      <section className="bg-surface-2 py-24 lg:py-32">
        <Container>
          <SectionHeading
            eyebrow="What We Do"
            intro="Take one service on its own or combine several. Either way you sign one contract, work with one team, and always know who to call."
          />

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={stagger(i, 3)} className="flex">
                <ServiceCard service={s} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <Process />
      <GoogleRating />
      <CTA
        title="Start Your Project"
        intro="Tell us the problem you are trying to solve. We will scope the right approach with you and give you a clear plan, timeline, and quote before you commit to anything."
      />
    </>
  );
}
