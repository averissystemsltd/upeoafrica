import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";
import { LogoMark } from "@/components/brand/Logo";

export function Eyebrow({
  children,
  className,
  tone = "dark",
  as: Tag = "span",
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "dark" | "light";
  /** Render as `h2` when the kicker is the section's only heading. */
  as?: "span" | "h2";
}) {
  return (
    <Tag
      className={cn(
        "inline-flex items-center gap-2 font-sans text-xs font-semibold uppercase tracking-[0.18em]",
        tone === "dark" ? "text-brand-600" : "text-brand-400",
        className,
      )}
    >
      <LogoMark className="h-4 w-4" />
      {children}
    </Tag>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  tone = "dark",
  className,
}: {
  eyebrow?: string;
  /**
   * Omit to drop the display heading entirely. The kicker then becomes the
   * section's `h2` and the intro is promoted to a lead paragraph, so the
   * document outline stays intact without stacking two headings.
   */
  title?: React.ReactNode;
  intro?: React.ReactNode;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
}) {
  const headless = !title;

  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center mx-auto max-w-2xl",
        align === "left" && "max-w-2xl",
        className,
      )}
    >
      {eyebrow && (
        <Reveal>
          <Eyebrow tone={tone} as={headless ? "h2" : "span"}>
            {eyebrow}
          </Eyebrow>
        </Reveal>
      )}

      {title && (
        <Reveal delay={0.05}>
          <h2
            className={cn(
              "text-3xl sm:text-4xl md:text-[2.75rem] font-bold leading-[1.08]",
              tone === "light" && "text-white",
            )}
          >
            {title}
          </h2>
        </Reveal>
      )}

      {intro && (
        <Reveal delay={headless ? 0.05 : 0.1}>
          <p
            className={cn(
              headless
                ? "font-display text-xl leading-[1.45] sm:text-[1.6rem]"
                : "text-lg leading-relaxed",
              tone === "light"
                ? headless
                  ? "text-white/85"
                  : "text-white/70"
                : headless
                  ? "text-slate-ink"
                  : "text-body",
            )}
          >
            {intro}
          </p>
        </Reveal>
      )}
    </div>
  );
}
