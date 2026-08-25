import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { stagger } from "@/components/ui/stagger";
import { process } from "@/lib/content";

export function Process() {
  return (
    <section className="bg-surface-2 py-24 lg:py-32">
      <Container>
        {/* No kicker: "How we work" only restates the heading below it. */}
        <SectionHeading
          title="How a project runs, step by step"
          intro="Every engagement follows the same five stages, so you always know what is happening now and what comes next."
        />

        <ol className="mt-16 grid gap-6 md:grid-cols-3 lg:grid-cols-5">
          {process.map((step, i) => (
            <Reveal key={step.n} delay={stagger(i, 3)} as="li" className="flex">
              <div className="group relative flex h-full w-full flex-col rounded-2xl border border-line bg-white p-6 transition-[border-color,box-shadow,transform] duration-300 ease-out-expo hover:-translate-y-1 hover:border-brand-200 hover:shadow-[0_20px_50px_-28px_rgba(11,14,20,0.28)]">
                <div className="flex items-center justify-between">
                  <span className="font-display text-3xl font-bold text-surface-3 transition-colors duration-300 ease-out-expo group-hover:text-brand-100">
                    {step.n}
                  </span>
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-600 transition-[color,background-color] duration-300 ease-out-expo group-hover:bg-brand-500 group-hover:text-white">
                    <step.icon className="h-5 w-5" />
                  </span>
                </div>
                <h3 className="mt-4 text-base font-semibold text-ink-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-body">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
