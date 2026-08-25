import { Container } from "@/components/ui/Container";
import { techStack } from "@/lib/content";

export function TechMarquee() {
  const items = [...techStack, ...techStack];
  return (
    <section className="border-b border-line bg-white py-12">
      <Container>
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted">
          The modern stack we build on
        </p>
      </Container>
      <div
        className="relative mt-9 flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_9%,black_91%,transparent)]"
        aria-hidden
      >
        <div className="flex shrink-0 animate-marquee items-center gap-14 pr-14">
          {items.map((t, i) => (
            <span
              key={`${t.name}-${i}`}
              className="flex shrink-0 items-center gap-2.5 opacity-90 transition-opacity duration-300 ease-out-expo hover:opacity-100"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`/logos/${t.slug}.svg?v=color`}
                alt=""
                width={26}
                height={26}
                className="h-6 w-6"
                loading="lazy"
              />
              <span className="whitespace-nowrap font-display text-lg font-medium text-slate-ink/70">
                {t.name}
              </span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
