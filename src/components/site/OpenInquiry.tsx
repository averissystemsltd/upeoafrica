"use client";

import { OPEN_INQUIRY_EVENT } from "./InquiryModal";

/** A button that opens the gamified inquiry modal. Styling is passed via className. */
export function OpenInquiry({
  className,
  children,
  ariaLabel,
}: {
  className?: string;
  children: React.ReactNode;
  ariaLabel?: string;
}) {
  return (
    <button
      type="button"
      aria-label={ariaLabel}
      className={className}
      onClick={() => window.dispatchEvent(new Event(OPEN_INQUIRY_EVENT))}
    >
      {children}
    </button>
  );
}
