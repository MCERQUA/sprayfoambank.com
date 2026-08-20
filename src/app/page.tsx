import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { TopicsGrid } from "@/components/sections/TopicsGrid";
import { WhyThisMatters } from "@/components/sections/WhyThisMatters";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { Stats } from "@/components/sections/Stats";
import { TrustSignals } from "@/components/sections/TrustSignals";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";
import { Footer } from "@/components/sections/Footer";
import { site } from "@/lib/site";

const homeFAQs = [
  {
    question: "How much does spray foam insulation cost?",
    answer:
      "It depends on foam type, area, and thickness. Open-cell typically runs $0.45-$0.65 per board foot installed; closed-cell runs $1.00-$1.50 per board foot. A typical attic project often lands in the $4,000-$9,000+ range depending on these factors.",
  },
  {
    question: "Does spray foam insulation qualify for a federal tax credit?",
    answer:
      "Insulation materials meeting relevant energy-efficiency criteria have generally qualified for the federal Energy Efficient Home Improvement Credit in recent years, but specific eligibility rules can change — verify for your filing year with a tax professional or IRS.gov.",
  },
  {
    question: "How do I find insulation rebates in my area?",
    answer:
      "Check your utility company's website directly, and use DSIRE (dsireusa.org), the federal database of state and local energy-efficiency incentive programs searchable by ZIP code.",
  },
  {
    question: "What financing options exist for spray foam insulation?",
    answer:
      "Contractor-arranged financing (often through a home-improvement lending partner), home equity loans or HELOCs, and personal loans are the main real paths homeowners use.",
  },
  {
    question: "Is spray foam insulation worth the extra cost?",
    answer:
      "Generally, yes, for homeowners staying long enough to realize the payback period (commonly cited in the 5-10 year range for whole-home applications) in climates with meaningful energy costs.",
  },
  {
    question: "Is Spray Foam Bank a lender or financial institution?",
    answer:
      "No. We're an information resource — 'bank' is used the way 'food bank' uses the word, not a literal financial institution. Content here is not financial or tax advice.",
  },
];

export default function HomePage() {
  return (
    <main>
      <Navbar businessName={site.businessName} phone={site.phone} />

      <Hero
        title="Real Numbers on Spray Foam Cost, Credits & Financing"
        subtitle="What a spray foam insulation project actually costs, what the federal tax credit and local rebates cover, and how homeowners actually pay for it — explained honestly, backed by Contractors Choice Agency's 20+ years of contractor experience."
        image="/images/hero-planning-budget.jpg"
        imageAlt="A homeowner and contractor reviewing a project budget together"
      />

      <TopicsGrid />
      <WhyThisMatters />
      <ProcessSteps />
      <Stats />
      <TrustSignals />

      <FAQ
        title="The Money Side, Answered"
        subtitle="Real questions people ask before starting a project."
        faqs={homeFAQs}
      />

      <CTA />
      <Footer />
    </main>
  );
}
