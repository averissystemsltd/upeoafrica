"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { OPEN_INQUIRY_EVENT } from "@/components/site/InquiryModal";
import { services, megaServices, products, payments } from "@/lib/content";
import { cn } from "@/lib/utils";

type MegaKey = "services" | "products";

const navItems: { label: string; href: string; mega?: MegaKey }[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services", mega: "services" },
  { label: "Products", href: "/#products", mega: "products" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const bySlug = Object.fromEntries(services.map((s) => [s.slug, s]));
const openInquiry = () => window.dispatchEvent(new Event(OPEN_INQUIRY_EVENT));

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mega, setMega] = useState<MegaKey | null>(null);
  const pathname = usePathname();

  // Navigating closes both menus. This is React's documented "reset state when
  // an input changes" pattern rather than an effect: adjusting during render
  // re-renders immediately, before the browser paints, so an open panel never
  // flashes onto the new page the way an effect-based reset does.
  const [lastPath, setLastPath] = useState(pathname);
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setOpen(false);
    setMega(null);
  }

  const isHome = pathname === "/";
  const overHero = isHome && !scrolled && !open && !mega;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      onMouseLeave={() => setMega(null)}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        overHero
          ? "border-b border-transparent bg-transparent"
          : "border-b border-line bg-white/90 backdrop-blur-xl",
      )}
    >
      <Container className="flex h-18 items-center justify-between">
        <Logo variant={overHero ? "light" : "default"} priority />

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {navItems.map((item) => {
            const base = item.href.split("#")[0];
            const active =
              item.href === "/"
                ? pathname === "/"
                : base !== "/"
                  ? pathname.startsWith(base)
                  : false;
            return (
              <div
                key={item.label}
                onMouseEnter={() => setMega(item.mega ?? null)}
                className="relative"
              >
                <Link
                  href={item.href}
                  className={cn(
                    "inline-flex items-center gap-1 rounded-none px-4 py-2 text-[15px] font-medium transition-colors duration-300 ease-out-expo",
                    overHero
                      ? "text-white/75 hover:text-white"
                      : active || mega === item.mega
                        ? "text-brand-600"
                        : "text-slate-ink hover:text-brand-600",
                  )}
                >
                  {item.label}
                  {item.mega && (
                    <ChevronDown
                      className={cn(
                        "h-3.5 w-3.5 transition-transform duration-300 ease-out-expo",
                        mega === item.mega && "rotate-180",
                      )}
                    />
                  )}
                </Link>
              </div>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button onClick={openInquiry} size="sm" withArrow>
            Start a project
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className={cn(
            "inline-flex h-11 w-11 cursor-pointer items-center justify-center transition-colors duration-300 ease-out-expo lg:hidden",
            overHero
              ? "bg-[rgba(10,7,7,0.35)] text-white backdrop-blur-[17px] hover:bg-white/10"
              : "text-ink-900 hover:bg-surface-3",
          )}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </Container>

      {/* Mega panel (desktop) */}
      <AnimatePresence>
        {mega && (
          <motion.div
            key={mega}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-x-0 top-full hidden border-b border-line bg-white lg:block"
          >
            <Container className="py-8">
              {mega === "services" ? <ServicesMega /> : <ProductsMega />}
            </Container>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile menu */}
      <div
        className={cn(
          "overflow-y-auto border-t bg-white transition-[max-height] duration-300 ease-out lg:hidden",
          open ? "max-h-[80vh] border-line" : "max-h-0 border-transparent",
        )}
      >
        <Container className="flex flex-col gap-1 py-4">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="rounded-none px-3 py-3 text-base font-semibold text-ink-900 transition-colors duration-300 ease-out-expo hover:bg-surface-3"
            >
              {item.label}
            </Link>
          ))}

          <p className="mt-4 px-3 text-xs font-semibold uppercase tracking-[0.18em] text-brand-600">
            Services
          </p>
          {megaServices.map((g) => (
            <div key={g.group} className="px-3 py-1.5">
              <p className="text-xs font-medium uppercase tracking-wide text-muted">
                {g.group}
              </p>
              <div className="mt-1 flex flex-col">
                {g.slugs.map((slug) => (
                  <Link
                    key={slug}
                    href={`/services#${slug}`}
                    className="py-1.5 text-sm text-slate-ink transition-colors duration-300 ease-out-expo hover:text-brand-600"
                  >
                    {bySlug[slug]?.title}
                  </Link>
                ))}
              </div>
            </div>
          ))}

          <button
            type="button"
            onClick={() => {
              setOpen(false);
              openInquiry();
            }}
            className="group mt-3 inline-flex w-full cursor-pointer items-center justify-center gap-2 bg-brand-500 px-5 py-3 text-sm font-medium text-white transition-colors duration-300 ease-out-expo hover:bg-brand-600"
          >
            Start a project
            <ArrowRight
              className="h-4 w-4 transition-transform duration-300 ease-out-expo group-hover:translate-x-0.5"
              aria-hidden
            />
          </button>
        </Container>
      </div>
    </header>
  );
}

function ServicesMega() {
  return (
    <div className="grid grid-cols-4 gap-8">
      {megaServices.map((g) => (
        <div key={g.group}>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-brand-600">
            {g.group}
          </p>
          <ul className="space-y-4">
            {g.slugs.map((slug) => {
              const s = bySlug[slug];
              if (!s) return null;
              return (
                <li key={slug}>
                  <Link href={`/services#${slug}`} className="group flex gap-3">
                    <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center border border-line text-brand-600 transition-[color,background-color,border-color] duration-300 ease-out-expo group-hover:border-brand-500 group-hover:bg-brand-500 group-hover:text-white">
                      <s.icon className="h-4.5 w-4.5" />
                    </span>
                    <span>
                      <span className="block text-sm font-semibold text-ink-900 transition-colors duration-300 ease-out-expo group-hover:text-brand-600">
                        {s.title}
                      </span>
                      <span className="mt-0.5 block text-xs leading-snug text-muted">
                        {s.short}
                      </span>
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}

      {/* Featured CTA */}
      <div className="flex flex-col justify-between bg-ink-950 p-6 text-white">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-400">
            Not sure where to start?
          </p>
          <p className="mt-3 text-lg font-semibold leading-snug">
            Answer a few quick questions and we&apos;ll map it out with you.
          </p>
        </div>
        <button
          type="button"
          onClick={openInquiry}
          className="group mt-6 inline-flex cursor-pointer items-center justify-center gap-2 bg-brand-500 px-5 py-2.5 text-sm font-medium text-white transition-[background-color,box-shadow] duration-300 ease-out-expo hover:bg-brand-600 hover:shadow-[0_12px_28px_-12px_rgba(249,115,22,0.85)]"
        >
          Start a project
          <ArrowRight
            className="h-4 w-4 transition-transform duration-300 ease-out-expo group-hover:translate-x-0.5"
            aria-hidden
          />
        </button>
      </div>
    </div>
  );
}

function ProductsMega() {
  return (
    <div className="grid grid-cols-4 gap-8">
      <div className="col-span-2">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-brand-600">
          Our products
        </p>
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {products.map((p) => (
            <li key={p.title}>
              <Link href="/#products" className="group flex gap-3">
                <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center border border-line text-brand-600 transition-[color,background-color,border-color] duration-300 ease-out-expo group-hover:border-brand-500 group-hover:bg-brand-500 group-hover:text-white">
                  <p.icon className="h-4.5 w-4.5" />
                </span>
                <span>
                  <span className="block text-sm font-semibold text-ink-900 transition-colors duration-300 ease-out-expo group-hover:text-brand-600">
                    {p.title}
                  </span>
                  <span className="mt-0.5 block text-xs leading-snug text-muted">
                    {p.tags.join(" · ")}
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-brand-600">
          Payments
        </p>
        <ul className="space-y-2.5">
          {payments.map((pm) => (
            <li key={pm}>
              <Link
                href="/#products"
                className="group flex items-center gap-2 text-sm font-medium text-slate-ink transition-colors duration-300 ease-out-expo hover:text-brand-600"
              >
                <span className="h-1.5 w-1.5 bg-brand-500 transition-transform duration-300 ease-out-expo group-hover:scale-150" />
                {pm}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col justify-between bg-ink-950 p-6 text-white">
        <p className="text-lg font-semibold leading-snug">
          Get paid the way Africa pays.
        </p>
        <button
          type="button"
          onClick={openInquiry}
          className="group mt-6 inline-flex cursor-pointer items-center justify-center gap-2 bg-brand-500 px-5 py-2.5 text-sm font-medium text-white transition-[background-color,box-shadow] duration-300 ease-out-expo hover:bg-brand-600 hover:shadow-[0_12px_28px_-12px_rgba(249,115,22,0.85)]"
        >
          Integrate payments
          <ArrowRight
            className="h-4 w-4 transition-transform duration-300 ease-out-expo group-hover:translate-x-0.5"
            aria-hidden
          />
        </button>
      </div>
    </div>
  );
}
