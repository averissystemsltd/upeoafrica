import { Container } from "@/components/ui/Container";
import { CountUp } from "@/components/ui/CountUp";
import { Reveal } from "@/components/ui/Reveal";
import { stagger } from "@/components/ui/stagger";
import { stats } from "@/lib/content";

export function StatsBand() {
  return (
    <section className="relative overflow-hidden bg-ink-900 py-16 lg:py-20">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-30" aria-hidden />
      <Container className="relative">
        <dl className="grid grid-cols-2 gap-x-6 gap-y-10 text-center lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={stagger(i, 4)} className="relative">
              <dt className="font-display text-4xl font-bold text-brand-500 sm:text-5xl">
                <CountUp value={s.value} suffix={s.suffix} />
              </dt>
              <dd className="mt-2 text-sm font-medium text-white/60">{s.label}</dd>
            </Reveal>
          ))}
        </dl>
      </Container>
    </section>
  );
}
