import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { Container } from "@/components/ui/Container";
import { company, nav, services, legalNav } from "@/lib/content";

function LinkedInIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}
function XIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.66l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
    </svg>
  );
}
function GitHubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.8 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 24 12.5C24 5.87 18.63.5 12 .5z" />
    </svg>
  );
}

export function Footer() {
  const year = 2026;
  return (
    <footer className="bg-ink-950 text-white/70">
      <Container className="py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-6">
          <div className="lg:col-span-2 max-w-sm">
            <Logo variant="light" />
            <p className="mt-5 text-sm leading-relaxed text-white/60">
              A full-service digital agency building tailored software, brands, and
              marketing that help businesses across Africa build, launch, and grow.
            </p>
            <div className="mt-6 flex items-center gap-2.5">
              {[
                { icon: LinkedInIcon, label: "LinkedIn", href: "#" },
                { icon: XIcon, label: "X / Twitter", href: "#" },
                { icon: GitHubIcon, label: "GitHub", href: "#" },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="inline-flex h-10 w-10 items-center justify-center border border-white/10 text-white/70 transition-[color,background-color,border-color,transform] duration-300 ease-out-expo hover:-translate-y-0.5 hover:border-brand-500 hover:bg-brand-500 hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <FooterCol title="Company" links={nav} />

          <div className="min-w-0">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Services
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {services.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services#${s.slug}`}
                    className="transition-colors duration-300 ease-out-expo hover:text-brand-400"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <FooterCol title="Legal" links={legalNav} />

          <div className="min-w-0">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Get in touch
            </h3>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
                <span>{company.addressLine}</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
                <a
                  href={`mailto:${company.email}`}
                  className="min-w-0 break-all transition-colors duration-300 ease-out-expo hover:text-brand-400"
                >
                  {company.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
                <a
                  href={`tel:${company.phone.replace(/\s/g, "")}`}
                  className="transition-colors duration-300 ease-out-expo hover:text-brand-400"
                >
                  {company.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 text-sm text-white/50 sm:flex-row sm:items-center">
          <p>
            © {year} {company.legalName}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {legalNav.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="transition-colors duration-300 ease-out-expo hover:text-brand-400"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div className="min-w-0">
      <h3 className="text-sm font-semibold uppercase tracking-wider text-white">{title}</h3>
      <ul className="mt-5 space-y-3 text-sm">
        {links.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="transition-colors duration-300 ease-out-expo hover:text-brand-400"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
