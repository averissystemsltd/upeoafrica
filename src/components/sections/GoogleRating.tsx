import { Star, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { company } from "@/lib/content";

export function GoogleRating() {
  return (
    <section className="border-y border-line bg-surface-2 py-14">
      <Container>
        <Reveal>
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-5 text-center sm:flex-row sm:justify-center sm:gap-8 sm:text-left">
            <div className="flex items-center gap-3">
              <span className="flex text-brand-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </span>
              <span className="font-display text-3xl font-bold text-ink-900">
                {company.googleRating}
              </span>
            </div>

            <span className="hidden h-10 w-px bg-line sm:block" />

            <p className="text-[15px] leading-relaxed text-body">
              Rated {company.googleRating} by our clients on Google. We&apos;d love to earn
              yours too.
            </p>

            <a
              href={company.googleReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex shrink-0 items-center gap-1.5 border-b-2 border-brand-500 pb-0.5 text-sm font-semibold text-ink-900 transition-colors duration-300 ease-out-expo hover:text-brand-600"
            >
              Review us on Google
              <ArrowUpRight
                className="h-4 w-4 transition-transform duration-300 ease-out-expo group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden
              />
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
