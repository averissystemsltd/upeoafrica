import type { Metadata, Viewport } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { InquiryModal } from "@/components/site/InquiryModal";
import { company } from "@/lib/content";

// Outfit is the single typeface for the whole site — it reads well as both
// display and body, so both --font-display and --font-sans resolve to it.
const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const siteUrl = "https://upeoafricatechnologies.co.ke";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${company.name} · Software, Design & Marketing Agency in Mombasa`,
    template: `%s · ${company.name}`,
  },
  /* Matches the hero paragraph in Hero.tsx word for word. The hero copy IS
     the meta description on every page of this site: see the note on
     `detail.lead` in src/lib/services.ts. */
  description:
    "Upeo Africa Technologies is a software company in Mombasa, Kenya. We design and build custom web and mobile apps, M-Pesa and Airtel Money payment integrations, branding, and digital marketing that help businesses across Africa launch, rank, and grow.",
  keywords: [
    "software company Mombasa",
    "app development Kenya",
    "custom software Kenya",
    "web development Mombasa",
    "mobile app development Kenya",
    "UI UX design Kenya",
    "M-Pesa integration Kenya",
    "Airtel Money integration",
    "payment integration Kenya",
    "WordPress plugin developer Kenya",
    "POS system Kenya",
    "Upeo Africa Technologies",
  ],
  authors: [{ name: company.name }],
  creator: company.name,
  verification: {
    google: "WvISEi4b4smIm2spDJfIUWGCecyCqRq-WS5bdXAyj_M",
  },
  openGraph: {
    type: "website",
    locale: "en_KE",
    url: siteUrl,
    siteName: company.name,
    title: `${company.name} · Software, Design & Marketing`,
    description:
      "Upeo Africa Technologies is a software company in Mombasa, Kenya. We design and build custom web and mobile apps, M-Pesa and Airtel Money payment integrations, branding, and digital marketing that help businesses across Africa launch, rank, and grow.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${company.name} · Software, Design & Marketing`,
    description:
      "Upeo Africa Technologies is a software company in Mombasa, Kenya. We design and build custom web and mobile apps, M-Pesa and Airtel Money payment integrations, branding, and digital marketing that help businesses across Africa launch, rank, and grow.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0b0e14",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={outfit.variable}>
      <body className="min-h-screen antialiased">
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: company.legalName,
              description:
                "Full-service digital agency in Mombasa: custom software, web & mobile apps, UI/UX and branding, digital marketing, WordPress and POS plugins, and payment integrations (M-Pesa, Airtel Money, bank, card).",
              url: siteUrl,
              email: company.email,
              telephone: company.phone,
              areaServed: "KE",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Yunis Building, Moi Avenue",
                postOfficeBoxNumber: "88225-80100",
                addressLocality: "Mombasa",
                postalCode: "80100",
                addressCountry: "KE",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: company.googleRating,
                reviewCount: 1,
                bestRating: 5,
              },
            }),
          }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-ink-900 focus:px-5 focus:py-2.5 focus:text-sm focus:font-medium focus:text-white"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
        <InquiryModal />
      </body>
    </html>
  );
}
