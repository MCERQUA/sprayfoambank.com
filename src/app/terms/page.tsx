import type { Metadata } from "next";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms of service for ${site.businessName}.`,
};

export default function TermsPage() {
  return (
    <main>
      <Navbar businessName={site.businessName} phone={site.phone} />
      <section className="pt-36 pb-24 md:pt-44">
        <div className="max-w-3xl mx-auto px-4 md:px-6">
          <h1 className="text-4xl font-heading font-bold mb-8">Terms of Service</h1>
          <div className="post-prose">
            <p>Last updated: 2026-08-20</p>
            <h2>Not a Financial Institution</h2>
            <p>
              {site.businessName} is an informational resource, not a bank, lender, broker, or
              financial institution of any kind. We do not originate, underwrite, or guarantee any
              loan, financing offer, or line of credit.
            </p>
            <h2>Not Financial or Tax Advice</h2>
            <p>
              Content describing tax credits, rebates, and financing options is provided for general
              informational purposes only and does not constitute financial, tax, or legal advice.
              Tax laws and rebate programs change; verify current details for your specific
              situation with a qualified tax professional, financial advisor, or IRS.gov before
              making any financial decision.
            </p>
            <h2>Cost Calculator</h2>
            <p>
              The cost calculator on this site provides a general estimate based on typical
              installed pricing and does not account for job-specific factors like accessibility,
              substrate prep, or regional labor costs. It is not a quote and should not be relied
              upon as a final price.
            </p>
            <h2>Installer Matching</h2>
            <p>
              Submitting a form constitutes a request to be contacted and does not create a binding
              agreement for services. Matched installers are independent businesses within CCA&apos;s
              network.
            </p>
            <h2>Contact</h2>
            <p>Questions about these terms can be directed to {site.email} or {site.phone}.</p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
