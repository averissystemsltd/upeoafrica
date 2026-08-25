import { OpenInquiry } from "@/components/site/OpenInquiry";
import Image from "next/image";
import { Star } from "lucide-react";
import { stats, company } from "@/lib/content";

/**
 * The four things we sell, cycling behind the copy. Replaces a 7.6 MB looping
 * video with ~900 KB of stills: same sense of motion, a fraction of the bytes,
 * and no JS at all (see `.hero-slide` in globals.css).
 */
const HERO_SLIDES = [
  { src: "/hero/build.jpg", alt: "Engineer writing code for a client platform" },
  { src: "/hero/design.jpg", alt: "Interface wireframes sketched out during product design" },
  { src: "/hero/grow.jpg", alt: "Marketing team planning a digital campaign" },
  { src: "/hero/mobile.jpg", alt: "Mobile phone in use against an East African city skyline" },
];

/* Exact bar dataset from the Apogee reference (growth visualisation). */
const BAR_HEIGHTS = [
  23, 40, 53, 40, 33, 14, 7, 17, 75, 65,
  88, 75, 65, 47, 33, 88, 4, 7, 9, 14,
  95, 65, 79, 37, 7, 40, 17, 20, 62, 47,
  92, 72,
];

type Dir = "up" | "down" | "left" | "right" | "scale";

const dirClass: Record<Dir, string> = {
  up: "animate-fade-up",
  down: "animate-fade-down",
  left: "animate-fade-left",
  right: "animate-fade-right",
  scale: "animate-fade-scale",
};

function Animate({
  children,
  delay = 0,
  className = "",
  direction = "up",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  direction?: Dir;
}) {
  return (
    <div
      className={`opacity-0 ${dirClass[direction]} ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

type Viz = "bars" | "google" | "timeline" | "grid";

/**
 * Each stat gets its own visualisation rather than four identical cards: a
 * growth chart, Google review proof, a timeline, and a filled grid. The figures
 * still come from `stats`, so there is one source of truth for the numbers.
 */
const HERO_STATS: {
  label: string;
  value: number;
  suffix: string;
  badge: string;
  note: string;
  viz: Viz;
}[] = [
  { ...stats[0], badge: "+137", note: "delivered in 2026 so far", viz: "bars" },
  { ...stats[1], badge: company.googleRating, note: "average rating on Google", viz: "google" },
  { ...stats[2], badge: String(company.founded), note: "building since", viz: "timeline" },
  { ...stats[3], badge: "9 in 10", note: "come back or refer us", viz: "grid" },
];

const CYCLE_S = 28;
const STEP_S = CYCLE_S / HERO_STATS.length;
/** Offsets each card's identical animation so they take turns on one shared loop. */
const delay = (cardIndex: number, extra = 0) => `${-cardIndex * STEP_S + extra}s`;

function Bars({ d }: { d: number }) {
  const max = Math.max(...BAR_HEIGHTS);
  return (
    <div>
      <div className="relative flex items-end gap-[1.5px] h-[74px] sm:h-[92px]">
        {BAR_HEIGHTS.map((h, i) => (
          <span
            key={i}
            className="stat-bar flex-1 rounded-[0.5px]"
            style={{
              height: `${(h / max) * 100}%`,
              backgroundColor: i >= 28 ? "rgba(255,255,255,0.15)" : "#f97316",
              animationDelay: delay(d, i * 0.012),
            }}
          />
        ))}
        {[1, 2, 3, 4].map((i) => (
          <span
            key={`g${i}`}
            className="pointer-events-none absolute top-0 bottom-0 w-px bg-white/10"
            style={{ left: `${(i / 5) * 100}%` }}
            aria-hidden
          />
        ))}
      </div>
      <div className="flex justify-between mt-3">
        {["2022", "2023", "2024", "2025", "2026"].map((y, i) => (
          <span
            key={y}
            className="text-[9px] sm:text-[10px] font-[450] leading-[10px] text-white/80"
            style={{ opacity: i >= 3 ? 0.4 : 1 }}
          >
            {y}
          </span>
        ))}
      </div>
    </div>
  );
}

function GoogleReviews({ d }: { d: number }) {
  return (
    <div>
      <div className="flex h-[74px] sm:h-[92px] flex-col justify-center gap-3">
        <div className="flex items-center gap-2.5">
          <Image
            src="/logos/google-g.svg"
            alt=""
            width={24}
            height={24}
            unoptimized
            className="h-6 w-6 sm:h-7 sm:w-7"
          />
          <span className="text-white/90 text-[14px] sm:text-[15px] font-[450]">
            Google Reviews
          </span>
        </div>
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }, (_, i) => (
            <Star
              key={i}
              aria-hidden
              className="stat-pop h-5 w-5 sm:h-6 sm:w-6 fill-current"
              style={{ color: "#FBBC05", animationDelay: delay(d, i * 0.09) }}
            />
          ))}
        </div>
      </div>
      <div className="flex justify-between mt-3">
        <span className="text-[9px] sm:text-[10px] font-[450] leading-[10px] text-white/80">
          Verified client reviews
        </span>
        <span className="text-[9px] sm:text-[10px] font-[450] leading-[10px] text-white/80">
          {company.googleRating} / 5.0
        </span>
      </div>
    </div>
  );
}

function Timeline({ d }: { d: number }) {
  const years = Array.from({ length: 8 }, (_, i) => company.founded + i);
  return (
    <div>
      <div className="relative flex items-center justify-between h-[74px] sm:h-[92px]">
        <span className="pointer-events-none absolute inset-x-1 top-1/2 h-px bg-white/15" aria-hidden />
        {years.map((y, i) => (
          <span
            key={y}
            className="stat-pop relative block rounded-full bg-brand-500"
            style={{
              height: `${8 + i * 1.6}px`,
              width: `${8 + i * 1.6}px`,
              animationDelay: delay(d, i * 0.07),
            }}
          />
        ))}
      </div>
      <div className="flex justify-between mt-3">
        {years.map((y, i) => (
          <span
            key={y}
            className="text-[9px] sm:text-[10px] font-[450] leading-[10px] text-white/80"
            style={{ opacity: i % 2 ? 0.35 : 1 }}
          >
            {i % 2 ? "" : `'${String(y).slice(2)}`}
          </span>
        ))}
      </div>
    </div>
  );
}

function Grid({ d, pct }: { d: number; pct: number }) {
  const cells = 50;
  const filled = Math.round((pct / 100) * cells);
  return (
    <div className="grid grid-cols-10 gap-1 sm:gap-1.5">
      {Array.from({ length: cells }, (_, i) => (
        <span
          key={i}
          className={`stat-pop h-2 sm:h-2.5 w-full rounded-[2px] ${
            i < filled ? "bg-brand-500" : "bg-white/15"
          }`}
          style={{ animationDelay: delay(d, i * 0.01) }}
        />
      ))}
    </div>
  );
}

/** Four stat cards taking turns on one shared CSS loop. */
function StatCarousel() {
  return (
    <Animate delay={900} direction="scale" className="w-full">
      <div className="relative h-[318px] sm:h-[392px]">
        {HERO_STATS.map((s, i) => (
          <article
            key={s.label}
            className="stat-card absolute inset-0 flex flex-col bg-[rgba(17,16,15,0.35)] backdrop-blur-[20px] ring-1 ring-white/10 p-5 sm:p-8"
            style={{ animationDelay: delay(i) }}
          >
            <p className="text-white text-[16px] sm:text-[20px] font-[450] leading-[20px]">
              {s.label}
            </p>

            <p
              className="mt-3 sm:mt-4 flex items-baseline"
              aria-label={`${s.value}${s.suffix} ${s.label}`}
            >
              <span
                aria-hidden
                className="stat-num text-white text-[28px] sm:text-[46px] font-[450] leading-[1]"
                style={
                  { "--stat-target": s.value, animationDelay: delay(i) } as React.CSSProperties
                }
              />
              <span
                aria-hidden
                className="text-white/25 text-[28px] sm:text-[46px] font-[450] leading-[1]"
              >
                {s.suffix || "+"}
              </span>
            </p>

            <div className="mt-2 sm:mt-3 flex items-center gap-[10px]">
              <span className="px-[8px] py-[7px] bg-brand-500/90 rounded-[6px] text-white text-[12px] sm:text-[14px] font-[450] leading-[14px]">
                {s.badge}
              </span>
              <span className="text-white/80 text-[12px] sm:text-[14px] font-[450] leading-[14px] opacity-70">
                {s.note}
              </span>
            </div>

            <div className="mt-auto pt-6">
              {s.viz === "bars" && <Bars d={i} />}
              {s.viz === "google" && <GoogleReviews d={i} />}
              {s.viz === "timeline" && <Timeline d={i} />}
              {s.viz === "grid" && <Grid d={i} pct={s.value} />}
            </div>
          </article>
        ))}
      </div>

      {/* Which card you are on */}
      <div className="mt-4 flex justify-center gap-2" aria-hidden>
        {HERO_STATS.map((s, i) => (
          <span
            key={s.label}
            className="stat-pip h-1.5 w-6 rounded-full bg-brand-500"
            style={{ animationDelay: delay(i) }}
          />
        ))}
      </div>
    </Animate>
  );
}

export function Hero() {
  return (
    <section className="relative w-full min-h-[100svh] overflow-hidden bg-[#080A19] flex items-center pt-28 pb-16 sm:pt-32">
      <div className="absolute inset-0" aria-hidden>
        {HERO_SLIDES.map((slide, i) => (
          <div
            key={slide.src}
            className="hero-slide absolute inset-0"
            style={{ animationDelay: `-${i * 6}s` }}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              sizes="100vw"
              priority={i === 0}
              className="object-cover"
            />
          </div>
        ))}
      </div>
      {/* Legibility scrims (kept subtle) */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#080A19] via-[#080A19]/70 to-[#080A19]/20"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#080A19] to-transparent"
        aria-hidden
      />

      <div className="relative z-10 w-full">
        <div className="w-full max-w-[1800px] mx-auto px-5 sm:px-8 md:px-[82px] flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
          {/* Copy */}
          <div className="max-w-[560px]">
            {/* Who we are, in one line. The pitch belongs in the paragraph, not in
                a 72px headline that wraps to four lines and pushes the CTAs down. */}
            <Animate delay={300} direction="up">
              <h1 className="text-white text-[30px] sm:text-[38px] md:text-[44px] lg:text-[48px] font-normal leading-[1.06] mb-4 sm:mb-5">
                A software company in{" "}
                <span className="text-brand-500">Mombasa, Kenya</span>
              </h1>
            </Animate>

            <Animate delay={500} direction="up">
              <p className="text-white/80 text-[16px] sm:text-[17px] md:text-[18px] font-[450] leading-[1.5] max-w-[520px] mb-7 sm:mb-9">
                Upeo Africa Technologies designs and builds custom web and mobile apps,
                payment integrations, and the branding and marketing behind them, for
                businesses across Africa.
              </p>
            </Animate>

            <Animate delay={700} direction="up">
              <div className="flex flex-wrap gap-3 sm:gap-4">
                <OpenInquiry className="inline-flex cursor-pointer items-center justify-center h-[46px] sm:h-[51px] px-5 sm:px-[27px] bg-brand-500 rounded-[12px] text-white text-[14px] sm:text-[15.5px] font-[450] leading-[15.5px] transition-colors hover:bg-brand-600">
                  Start a project
                </OpenInquiry>
                <a
                  href="/services"
                  className="inline-flex items-center justify-center h-[46px] sm:h-[51px] px-5 sm:px-[27px] rounded-[12px] border border-white/70 text-white text-[14px] sm:text-[15.5px] font-[450] leading-[15.5px] transition-colors hover:bg-white/10"
                >
                  Explore our services
                </a>
              </div>
            </Animate>
          </div>

          <div className="w-full max-w-[405px] shrink-0 mx-auto lg:mx-0">
            <StatCarousel />
          </div>
        </div>
      </div>
    </section>
  );
}
