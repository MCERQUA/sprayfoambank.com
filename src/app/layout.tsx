import type { Metadata } from "next";
import { headingFont, bodyFont } from "@/lib/fonts";
import { SmoothScroll } from "@/components/animations/SmoothScroll";
import { StickyMobileCTA } from "@/components/shared/StickyMobileCTA";
import { site } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  alternates: { canonical: "/" },
  title: {
    default: `${site.businessName} — Costs, Tax Credits & Financing for Spray Foam Insulation`,
    template: `%s | ${site.businessName}`,
  },
  description:
    "Real cost breakdowns, an interactive cost calculator, the federal energy tax credit explained plainly, insulation rebates, and financing options for spray foam insulation projects.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    siteName: site.businessName,
    title: `${site.businessName} — Costs, Tax Credits & Financing for Spray Foam Insulation`,
    description:
      "Real cost breakdowns, a cost calculator, the federal energy tax credit explained plainly, insulation rebates, and financing options.",
    images: [
      {
        url: "/images/hero-planning-budget.jpg",
        width: 1200,
        height: 630,
        alt: site.businessName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.businessName} — Costs, Credits & Financing`,
    description:
      "Real cost breakdowns, a cost calculator, the federal energy tax credit explained plainly, insulation rebates, and financing options.",
    images: ["/images/hero-planning-budget.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.businessName,
  description:
    "A resource hub covering the real cost, tax credits, rebates, and financing options for spray foam insulation projects — connecting homeowners to vetted installers. Backed by Contractors Choice Agency. Not a financial institution.",
  url: site.url,
  telephone: site.phoneDigits,
  email: site.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    addressRegion: site.address.state,
    postalCode: site.address.zip,
    addressCountry: "US",
  },
  areaServed: "US",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${headingFont.variable} ${bodyFont.variable}`}>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <SmoothScroll>
          {children}
          <StickyMobileCTA />
        </SmoothScroll>
      </body>
    </html>
  );
}
