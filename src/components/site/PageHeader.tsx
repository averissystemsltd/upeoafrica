import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

/**
 * The one heading a page gets. There is deliberately no kicker above the `h1`:
 * a label that restates the title in smaller type is two headings pretending to
 * be one, which is exactly what the homepage sections were cleaned up to avoid.
 *
 * `image` turns the header into a photographic hero in the same key as the
 * homepage hero: photo, a left-to-right scrim so copy always sits on ink, and a
 * bottom fade into the section that follows. Without it the header falls back
 * to the grid-and-glow treatment, which suits the legal documents.
 */
export function PageHeader({
  title,
  intro,
  meta,
  image,
  imageAlt,
}: {
  title: React.ReactNode;
  intro?: React.ReactNode;
  /** Small supporting line under the intro, e.g. legal effective dates. */
  meta?: React.ReactNode;
  image?: string;
  imageAlt?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-ink-950 pt-36 pb-20 text-white lg:pt-44 lg:pb-24">
      {image ? (
        <>
          <Image
            src={image}
            alt={imageAlt ?? ""}
            fill
            sizes="100vw"
            preload
            className="object-cover object-center"
          />
          {/* Copy sits left, so the scrim is heaviest there and never lets the
              photo push text contrast below what the brand type needs. */}
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/88 to-ink-950/55"
            aria-hidden
          />
          <div className="pointer-events-none absolute inset-0 bg-ink-950/35" aria-hidden />
        </>
      ) : (
        <>
          <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" aria-hidden />
          <div
            className="pointer-events-none absolute -top-32 right-0 h-[28rem] w-[28rem] rounded-full bg-brand-500/20 blur-[120px]"
            aria-hidden
          />
        </>
      )}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-ink-950 to-transparent"
        aria-hidden
      />

      <Container className="relative">
        <div className="max-w-3xl">
          <Reveal>
            <h1 className="text-4xl font-bold leading-[1.08] text-white sm:text-5xl lg:text-[3.25rem]">
              {title}
            </h1>
          </Reveal>
          {intro && (
            <Reveal delay={0.06}>
              <p className="mt-6 max-w-2xl font-display text-xl leading-[1.45] text-white/85 sm:text-[1.6rem]">
                {intro}
              </p>
            </Reveal>
          )}
          {meta && (
            <Reveal delay={0.12}>
              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-white/50">
                {meta}
              </p>
            </Reveal>
          )}
        </div>
      </Container>
    </section>
  );
}
