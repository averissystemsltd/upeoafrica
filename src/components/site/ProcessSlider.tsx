"use client";

import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import type { ProcessStep } from "@/lib/services";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

/**
 * The engagement, as a horizontal timeline rather than a grid of boxes.
 *
 * A five-step grid always left an empty cell on the last row, and a rail reads
 * as a sequence in a way a grid never does. Scrolling is native scroll-snap, so
 * it works with no JavaScript and on touch; GSAP handles the entrance and the
 * eased jump when the arrows are used. Progress is written straight to the DOM
 * on scroll rather than held in React state, so the rail stays smooth.
 */
export function ProcessSlider({ steps }: { steps: ProcessStep[] }) {
  const rootRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLOListElement>(null);
  const progressRef = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      const track = trackRef.current;
      const progress = progressRef.current;
      if (!track) return;

      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const panels = track.querySelectorAll(".process-panel");

      if (reduce) {
        gsap.set(panels, { opacity: 1, y: 0 });
      } else {
        gsap.fromTo(
          panels,
          { opacity: 0, y: 28 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: { trigger: track, start: "top 82%", once: true },
          },
        );
      }

      // Progress rail follows the scroll position directly.
      const onScroll = () => {
        if (!progress) return;
        const max = track.scrollWidth - track.clientWidth;
        const pct = max > 0 ? (track.scrollLeft / max) * 100 : 100;
        progress.style.width = `${Math.max(12, pct)}%`;
      };
      onScroll();
      track.addEventListener("scroll", onScroll, { passive: true });
      window.addEventListener("resize", onScroll);
      return () => {
        track.removeEventListener("scroll", onScroll);
        window.removeEventListener("resize", onScroll);
      };
    },
    { scope: rootRef },
  );

  const nudge = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const panel = track.querySelector(".process-panel");
    const step = panel ? panel.getBoundingClientRect().width + 1 : track.clientWidth * 0.8;
    const target = Math.max(
      0,
      Math.min(track.scrollLeft + direction * step, track.scrollWidth - track.clientWidth),
    );

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      track.scrollLeft = target;
      return;
    }
    gsap.to(track, { scrollLeft: target, duration: 0.6, ease: "power3.out", overwrite: true });
  };

  return (
    <div ref={rootRef} className="mt-12">
      <div className="flex items-center justify-between gap-6">
        {/* Progress rail */}
        <div className="h-px flex-1 bg-ink-900/12">
          <span
            ref={progressRef}
            className="block h-px w-[12%] bg-brand-500 transition-[width] duration-200 ease-out"
            aria-hidden
          />
        </div>

        <div className="flex shrink-0 gap-2">
          <button
            type="button"
            onClick={() => nudge(-1)}
            aria-label="Previous step"
            className="inline-flex h-11 w-11 cursor-pointer items-center justify-center border border-ink-900/15 text-ink-900 transition-colors duration-300 ease-out-expo hover:border-brand-500 hover:bg-brand-500 hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => nudge(1)}
            aria-label="Next step"
            className="inline-flex h-11 w-11 cursor-pointer items-center justify-center border border-ink-900/15 text-ink-900 transition-colors duration-300 ease-out-expo hover:border-brand-500 hover:bg-brand-500 hover:text-white"
          >
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      <ol
        ref={trackRef}
        /* Deliberately no `scroll-smooth`: GSAP writes scrollLeft every frame,
           and CSS smooth scrolling would try to animate each of those writes,
           fighting the tween. Easing is the tween's job. */
        className="mt-8 flex snap-x snap-mandatory gap-px overflow-x-auto bg-ink-900/10 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {steps.map((step, i) => (
          <li
            key={step.title}
            className="process-panel w-[82%] shrink-0 snap-start bg-white sm:w-[52%] lg:w-[32%]"
          >
            <article className="group relative flex h-full flex-col p-8 lg:p-9">
              {/* Ghost numeral, and the dot that sits on the rail above it */}
              <span
                className="pointer-events-none absolute right-7 top-6 font-display text-[4.5rem] font-light leading-none text-ink-900/[0.05] transition-colors duration-500 ease-out-expo group-hover:text-brand-500/15"
                aria-hidden
              >
                {String(i + 1).padStart(2, "0")}
              </span>

              <span className="flex items-center gap-3">
                <span className="h-2.5 w-2.5 shrink-0 bg-brand-500" aria-hidden />
                {/* No digit here: the ghost numeral above already carries it,
                    and printing it twice in one panel just reads as a mistake. */}
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-600">
                  Step
                </span>
              </span>

              <h3 className="mt-5 max-w-[16ch] font-display text-xl font-semibold leading-tight text-ink-900">
                {step.title}
              </h3>
              <p className="mt-4 text-[15px] leading-relaxed text-body">{step.description}</p>
            </article>
          </li>
        ))}
      </ol>
    </div>
  );
}
