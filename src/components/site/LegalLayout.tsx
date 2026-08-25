import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/site/PageHeader";
import { legalNav } from "@/lib/content";
import Link from "next/link";

export function LegalLayout({
  title,
  intro,
  updated,
  effective,
  activeHref,
  children,
}: {
  title: string;
  /** Plain-English summary of the document, addressed to the reader. */
  intro?: React.ReactNode;
  updated: string;
  effective?: string;
  activeHref: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <PageHeader
        title={title}
        intro={intro}
        meta={
          effective
            ? `Effective ${effective} · Last updated ${updated}`
            : `Last updated ${updated}`
        }
      />
      <section className="bg-white py-16 lg:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[220px_1fr] lg:gap-16">
            {/* Document nav */}
            <aside className="hidden lg:block">
              <div className="sticky top-28">
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-brand-600">
                  Legal
                </p>
                <ul className="space-y-2 border-l border-line">
                  {legalNav.map((l) => (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        className={
                          l.href === activeHref
                            ? "-ml-px block border-l-2 border-brand-500 pl-4 text-sm font-medium text-brand-600"
                            : "-ml-px block border-l-2 border-transparent pl-4 text-sm text-muted transition-colors hover:border-brand-300 hover:text-ink-900"
                        }
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>

            {/* Document body */}
            <article
              className="
                max-w-3xl
                [&_h2]:mt-12 [&_h2]:scroll-mt-28 [&_h2]:border-t [&_h2]:border-line [&_h2]:pt-8 [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-ink-900 [&_h2]:sm:text-[1.6rem]
                [&_h2:first-child]:mt-0 [&_h2:first-child]:border-t-0 [&_h2:first-child]:pt-0
                [&_h3]:mt-8 [&_h3]:font-display [&_h3]:text-base [&_h3]:font-semibold [&_h3]:text-ink-900
                [&_p]:mt-4 [&_p]:text-[15px] [&_p]:leading-[1.75] [&_p]:text-body
                [&_ul]:mt-4 [&_ul]:space-y-2.5 [&_ul]:pl-6 [&_li]:list-disc [&_li]:pl-1 [&_li]:text-[15px] [&_li]:leading-[1.7] [&_li]:text-body [&_li]:marker:text-brand-500
                [&_ol]:mt-4 [&_ol]:space-y-3 [&_ol]:pl-6 [&_ol>li]:list-decimal [&_ol>li]:pl-1 [&_ol>li]:text-[15px] [&_ol>li]:leading-[1.7] [&_ol>li]:text-body [&_ol>li]:marker:font-medium [&_ol>li]:marker:text-ink-900
                [&_strong]:font-semibold [&_strong]:text-ink-900
                [&_a]:font-medium [&_a]:text-brand-600 hover:[&_a]:underline
                [&_.clause]:mt-4 [&_.clause]:flex [&_.clause]:gap-3
                [&_.clause>span:first-child]:shrink-0 [&_.clause>span:first-child]:font-medium [&_.clause>span:first-child]:text-ink-900
                [&_.clause>span:last-child]:text-[15px] [&_.clause>span:last-child]:leading-[1.75] [&_.clause>span:last-child]:text-body
                [&_.lead]:mt-0 [&_.lead]:text-[15px] [&_.lead]:leading-[1.8] [&_.lead]:text-body
                [&_table]:mt-5 [&_table]:w-full [&_table]:border [&_table]:border-line [&_table]:text-left [&_table]:text-sm
                [&_th]:border [&_th]:border-line [&_th]:bg-surface-2 [&_th]:px-4 [&_th]:py-2.5 [&_th]:font-semibold [&_th]:text-ink-900
                [&_td]:border [&_td]:border-line [&_td]:px-4 [&_td]:py-2.5 [&_td]:align-top [&_td]:text-body
              "
            >
              {children}
            </article>
          </div>
        </Container>
      </section>
    </>
  );
}
