"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

/**
 * Counts a numeric value up when scrolled into view (GSAP). Preserves any
 * prefix/suffix (e.g. "%", "+"). Renders the final value immediately under
 * reduced-motion.
 */
export function CountUp({
  value,
  className,
  prefix = "",
  suffix = "",
}: {
  value: number;
  className?: string;
  prefix?: string;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        el.textContent = `${prefix}${value}${suffix}`;
        return;
      }
      const obj = { n: 0 };
      gsap.to(obj, {
        n: value,
        duration: 1.6,
        ease: "power2.out",
        scrollTrigger: { trigger: el, start: "top 85%", once: true },
        onUpdate: () => {
          el.textContent = `${prefix}${Math.round(obj.n)}${suffix}`;
        },
      });
    },
    { scope: ref },
  );

  return (
    <span ref={ref} className={className}>
      {prefix}0{suffix}
    </span>
  );
}
