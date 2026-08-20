import type { FAQItem } from "@/components/sections/FAQ";

export interface TopicSection {
  heading: string;
  paragraphs: string[];
}

export interface TopicContent {
  slug: string;
  heroImage: string;
  heroImageAlt: string;
  intro: string[];
  sections: TopicSection[];
  keyTakeaways: string[];
  faqs: FAQItem[];
  hasCalculator?: boolean;
}

export const topicContent: Record<string, TopicContent> = {
  "spray-foam-insulation-cost": {
    slug: "spray-foam-insulation-cost",
    heroImage: "/images/topic-cost-estimate.jpg",
    heroImageAlt: "A written spray foam insulation cost estimate being reviewed",
    intro: [
      "Spray foam insulation pricing questions are some of the most common searches homeowners run before starting a project — and the honest answer depends on several specific factors, not a single flat number. Here's a real breakdown.",
    ],
    sections: [
      {
        heading: "Priced by the Board Foot",
        paragraphs: [
          "Spray foam is typically priced by the board foot — one square foot of coverage at one inch of thickness. This is a more precise pricing unit than a flat per-square-foot number, but it also means the final price depends on both the area covered and the thickness applied, not area alone.",
        ],
      },
      {
        heading: "Foam Type Is the Biggest Variable",
        paragraphs: [
          "Open-cell foam typically runs roughly $0.45 to $0.65 per board foot installed. Closed-cell typically runs roughly $1.00 to $1.50 per board foot installed — two to three times more, reflecting higher material density and a more expensive blowing-agent system, along with the higher R-value and vapor-barrier properties it delivers.",
        ],
      },
      {
        heading: "Job Accessibility and Prep Work",
        paragraphs: [
          "An open, easily accessible attic or new-construction cavity costs less to spray than a cramped crawlspace or a space requiring substrate prep before application. An accurate quote requires an in-person walkthrough, not just a square-footage number over the phone.",
        ],
      },
      {
        heading: "Typical Whole-Project Ranges",
        paragraphs: [
          "For context: a typical 1,500 sq ft attic insulated with open-cell foam at 6 inches often lands somewhere in the $4,000-$9,000 range; the same job with closed-cell at 3 inches often lands higher, reflecting the material cost difference. These are general ranges, not a quote — your specific project's price depends on the factors above.",
        ],
      },
    ],
    keyTakeaways: [
      "Spray foam is priced by the board foot (area x thickness), not area alone.",
      "Open-cell runs roughly $0.45-$0.65/board foot installed; closed-cell runs roughly $1.00-$1.50/board foot.",
      "Job accessibility and prep work materially affect the final price beyond the material cost alone.",
      "General ranges are a starting point — an in-person walkthrough is the only way to get an accurate number.",
    ],
    faqs: [
      {
        question: "How much does spray foam insulation cost?",
        answer: "It depends on foam type, area, and thickness. Open-cell typically runs $0.45-$0.65 per board foot installed; closed-cell runs $1.00-$1.50 per board foot. A typical attic project often lands in the $4,000-$9,000+ range depending on these factors.",
      },
      {
        question: "Why does spray foam cost more than fiberglass?",
        answer: "Material cost, specialized equipment, and licensed-applicator labor all factor in — the comparison is most meaningful when air-sealing performance (spray foam's core advantage) is weighed alongside price, not price alone.",
      },
      {
        question: "What's the difference in cost between open-cell and closed-cell?",
        answer: "Closed-cell typically costs two to three times more per board foot than open-cell, reflecting higher material density and the additional R-value and vapor-barrier properties it delivers.",
      },
    ],
  },

  "cost-calculator": {
    slug: "cost-calculator",
    heroImage: "/images/topic-calculator.jpg",
    heroImageAlt: "Using a calculator to plan a spray foam insulation budget",
    intro: [
      "Use the calculator below to get a real, board-foot-based cost estimate for your project. It's a starting point based on typical installed pricing — not a final quote — but it's built on the same math a real estimate uses, not a guess.",
    ],
    sections: [
      {
        heading: "How This Calculator Works",
        paragraphs: [
          "The estimate is based on your selected foam type's typical installed price per board foot, multiplied by your area and target thickness. Open-cell and closed-cell use different pricing ranges and typical thickness targets, reflecting how each is actually specified in the field.",
        ],
      },
      {
        heading: "What This Estimate Doesn't Include",
        paragraphs: [
          "This calculator doesn't account for job accessibility, substrate prep, regional labor cost differences, or minimum job charges — all of which affect a real quote. Treat the result as a realistic starting range to plan around, not a number to hold a contractor to sight unseen.",
        ],
      },
    ],
    keyTakeaways: [
      "The calculator uses real board-foot pricing math, not a flat guess.",
      "Open-cell and closed-cell use different price ranges and typical thickness targets.",
      "The estimate doesn't account for accessibility, prep work, or regional cost differences — get a real quote for an exact number.",
    ],
    faqs: [
      {
        question: "Is this cost calculator accurate?",
        answer: "It's a realistic starting-point estimate based on typical board-foot pricing, not a final quote. Accessibility, prep work, and regional labor costs all affect the real number — an in-person walkthrough is the only way to get an exact price.",
      },
      {
        question: "Why does the calculator ask for thickness, not just square footage?",
        answer: "Spray foam is priced by the board foot — square footage times thickness — so thickness is a required input for an accurate estimate, not an optional detail.",
      },
    ],
    hasCalculator: true,
  },

  "energy-tax-credit": {
    slug: "energy-tax-credit",
    heroImage: "/images/topic-tax-credit.jpg",
    heroImageAlt: "Paperwork in a home-office tax-planning context",
    intro: [
      "The federal Energy Efficient Home Improvement Credit can cover a portion of insulation costs — but the specifics (exact percentages, dollar caps, and eligibility rules) can change from year to year. Here's how the credit generally works, explained plainly. This is not tax advice — verify current-year details with a tax professional or IRS.gov before filing.",
    ],
    sections: [
      {
        heading: "The General Mechanism",
        paragraphs: [
          "The credit has generally worked by covering a percentage of the cost of qualifying energy-efficiency home improvements — including insulation materials — up to an annual dollar cap, claimed on your federal tax return for the year the work was completed. It's a tax credit (reduces the tax you owe), not a rebate paid at the time of purchase.",
        ],
      },
      {
        heading: "What Has Typically Qualified",
        paragraphs: [
          "Insulation materials that meet relevant energy-efficiency criteria have generally qualified, including spray foam insulation, when properly documented. Installation labor cost eligibility and specific product certification requirements have varied by year — this is exactly the kind of detail worth confirming for the current tax year rather than assuming it matches a prior year's rules.",
        ],
      },
      {
        heading: "What You Need to Document",
        paragraphs: [
          "Keep your itemized invoice showing material costs, any manufacturer certification statements for the products used, and proof of the work being completed in the tax year you're claiming. Your installer should be able to provide documentation — ask for it as part of the project, not after the fact when you're filing.",
        ],
      },
      {
        heading: "Why We're Not Giving You a Specific Number",
        paragraphs: [
          "Tax credit percentages, annual caps, and eligibility rules are set by federal law and can change. Presenting a specific dollar figure as guaranteed-current fact would risk being wrong by the time you read this. The mechanism described above has been consistent in recent years, but the specifics need to be verified for your actual filing year — a tax professional or IRS.gov (search “Energy Efficient Home Improvement Credit”) is the reliable source for current numbers.",
        ],
      },
    ],
    keyTakeaways: [
      "The federal Energy Efficient Home Improvement Credit can cover a portion of qualifying insulation costs, claimed on your tax return.",
      "It's a tax credit, not an instant rebate — it reduces taxes owed for the year the work was completed.",
      "Keep itemized invoices and manufacturer certification documentation for your records.",
      "Specific percentages and caps change — verify current-year details with a tax professional or IRS.gov before filing.",
    ],
    faqs: [
      {
        question: "Does spray foam insulation qualify for a federal tax credit?",
        answer: "Insulation materials meeting relevant energy-efficiency criteria have generally qualified for the federal Energy Efficient Home Improvement Credit in recent years, but specific eligibility rules can change — verify for your filing year with a tax professional or IRS.gov.",
      },
      {
        question: "Is the tax credit a rebate I get right away?",
        answer: "No — it's a tax credit claimed on your federal return for the year the work was completed, reducing the tax you owe, not an instant discount at purchase.",
      },
      {
        question: "What documentation do I need to claim it?",
        answer: "An itemized invoice showing material costs and any manufacturer certification statements for the products used, plus proof the work was completed in the tax year you're claiming. Ask your installer for this documentation as part of the project.",
      },
    ],
  },

  "insulation-rebates": {
    slug: "insulation-rebates",
    heroImage: "/images/topic-rebate-savings.jpg",
    heroImageAlt: "Attic insulation being installed for energy efficiency",
    intro: [
      "Beyond the federal tax credit, many utility companies and state energy offices run their own rebate programs for insulation upgrades — but availability and amounts vary enormously by location and change over time. Here's how to actually find what applies to you.",
    ],
    sections: [
      {
        heading: "Utility Company Rebate Programs",
        paragraphs: [
          "Many electric and gas utilities offer rebates for insulation upgrades that reduce energy demand, often funded through state energy-efficiency mandates. These vary by utility — some offer a flat per-project rebate, others a per-square-foot or per-R-value-improvement amount. Check your utility's own website (search “[your utility name] insulation rebate”) for current offerings.",
        ],
      },
      {
        heading: "State and Regional Energy Office Programs",
        paragraphs: [
          "Many states run their own energy-efficiency incentive programs, sometimes layered on top of utility rebates. The U.S. Department of Energy's Database of State Incentives for Renewables & Efficiency (DSIRE, at dsireusa.org) is a real, free, regularly updated resource for finding state-level programs by ZIP code.",
        ],
      },
      {
        heading: "Why You Can't Assume a Program Exists",
        paragraphs: [
          "Rebate program availability changes based on utility budgets and state policy — a program that existed last year may be paused or fully subscribed this year, and vice versa. The only reliable way to know what's currently available is checking directly, not assuming based on what a neighbor mentioned or what existed previously.",
        ],
      },
      {
        heading: "Stacking Rebates With the Federal Tax Credit",
        paragraphs: [
          "In many cases, a utility or state rebate can be combined with the federal tax credit for the same project, though the tax credit calculation may be based on your cost after other rebates are applied — another detail worth confirming with a tax professional when you file.",
        ],
      },
    ],
    keyTakeaways: [
      "Many utilities and state energy offices offer insulation rebates — check your specific utility's website for current programs.",
      "DSIRE (dsireusa.org) is a real, free federal database for finding state-level energy-efficiency incentives by ZIP code.",
      "Rebate availability changes over time — don't assume a program exists without checking directly.",
      "Rebates and the federal tax credit can often be combined, but confirm the interaction with a tax professional.",
    ],
    faqs: [
      {
        question: "How do I find insulation rebates in my area?",
        answer: "Check your utility company's website directly (search “[your utility] insulation rebate”), and use DSIRE (dsireusa.org), the federal database of state and local energy-efficiency incentive programs searchable by ZIP code.",
      },
      {
        question: "Can I combine a utility rebate with the federal tax credit?",
        answer: "In many cases, yes, though the tax credit calculation may be based on cost after other rebates are applied. Confirm the specific interaction with a tax professional when you file.",
      },
      {
        question: "Do rebate programs change from year to year?",
        answer: "Yes — availability depends on utility budgets and state policy, and can pause, resume, or change amounts. Always check current availability directly rather than assuming based on a prior year.",
      },
    ],
  },

  "financing-options": {
    slug: "financing-options",
    heroImage: "/images/topic-financing.jpg",
    heroImageAlt: "A homeowner and contractor at a project sign-off moment",
    intro: [
      "For many homeowners, spray foam insulation is a project worth financing rather than paying for entirely upfront. Here are the real paths homeowners typically use, and what to ask before signing anything.",
    ],
    sections: [
      {
        heading: "Contractor-Arranged Financing",
        paragraphs: [
          "Many insulation contractors partner with home-improvement lending companies to offer financing directly at the point of sale — sometimes including promotional 0% or low-interest periods. This is a real, common path, but the terms (interest rate after any promotional period, fees, repayment length) vary by lender and deserve the same scrutiny as any loan.",
        ],
      },
      {
        heading: "Home Equity Options",
        paragraphs: [
          "Homeowners with sufficient equity sometimes use a home equity loan or line of credit (HELOC) to fund an insulation project, often at a lower interest rate than unsecured financing since the loan is secured by the home. This path involves your home as collateral, which is a meaningfully different risk profile than an unsecured personal loan.",
        ],
      },
      {
        heading: "Personal Loans",
        paragraphs: [
          "An unsecured personal loan through a bank or credit union is another path, typically at a higher interest rate than home-equity-secured options but without putting the home up as collateral. Comparing actual APRs across a few lenders before committing is worth the time it takes.",
        ],
      },
      {
        heading: "Questions Worth Asking Before You Sign",
        paragraphs: [
          "What's the interest rate after any promotional period ends? Are there prepayment penalties? What's the total cost over the full loan term, not just the monthly payment? A contractor or lender who can't answer these clearly and specifically is worth a second look before you commit.",
        ],
      },
    ],
    keyTakeaways: [
      "Contractor-arranged financing, home equity loans/HELOCs, and personal loans are the three main real paths homeowners use.",
      "Promotional 0% financing periods have real terms after they end — ask what the rate becomes.",
      "Home equity options use your home as collateral — a different risk profile than unsecured financing.",
      "Compare total cost over the full loan term, not just the monthly payment, before signing.",
    ],
    faqs: [
      {
        question: "What financing options exist for spray foam insulation?",
        answer: "Contractor-arranged financing (often through a home-improvement lending partner), home equity loans or HELOCs, and personal loans are the main real paths homeowners use.",
      },
      {
        question: "Is 0% financing for spray foam insulation real?",
        answer: "Promotional 0% periods are real and commonly offered, but ask what the interest rate becomes after the promotional period ends and whether there are deferred-interest terms — the details matter as much as the headline rate.",
      },
      {
        question: "Should I use home equity to finance an insulation project?",
        answer: "It can offer a lower interest rate than unsecured financing, but it uses your home as collateral, which is a meaningfully different risk than a personal loan. Consider your comfort with that tradeoff before choosing.",
      },
    ],
  },

  "is-it-worth-it": {
    slug: "is-it-worth-it",
    heroImage: "/images/hero-application-context.jpg",
    heroImageAlt: "Spray foam insulation being applied on a real job site",
    intro: [
      "Spray foam costs more upfront than fiberglass — the honest question is whether that difference pays for itself, and over what timeframe. Here's a real look at the numbers, not a sales pitch.",
    ],
    sections: [
      {
        heading: "Energy Savings: The Real Driver",
        paragraphs: [
          "Spray foam's return on investment comes primarily from air sealing, not R-value alone — it eliminates the convective air leakage that batt insulation, even installed well, doesn't stop. Homes that switch from poorly air-sealed insulation to spray foam commonly see meaningful reductions in heating and cooling costs, though the exact percentage depends heavily on your home's prior condition and local climate.",
        ],
      },
      {
        heading: "Typical Payback Period",
        paragraphs: [
          "For a whole-home application replacing genuinely leaky, underperforming insulation, payback periods in the range of 5-10 years on energy savings alone are commonly cited in industry sources — faster in extreme climates with high energy costs, slower in mild climates with cheap energy. This is a general range, not a promise for your specific home.",
        ],
      },
      {
        heading: "Beyond Energy Bills",
        paragraphs: [
          "Spray foam's air-sealing benefit also often shows up as improved comfort (fewer drafts, more consistent room-to-room temperature) and reduced HVAC cycling, which can extend equipment life — real value that doesn't show up directly on a utility bill but is worth factoring into the honest cost-benefit picture.",
        ],
      },
      {
        heading: "Resale Value",
        paragraphs: [
          "Energy-efficiency upgrades generally have a positive, if hard-to-precisely-quantify, effect on resale value and buyer interest — but as covered on our sister site's building-science content, spray foam specifically also carries some real reputation and inspection-visibility concerns some buyers and lenders are cautious about. The honest answer is that a correctly documented, professionally installed job is generally a net positive for resale; an undocumented or poorly installed one can complicate a sale.",
        ],
      },
      {
        heading: "The Honest Bottom Line",
        paragraphs: [
          "Spray foam is generally worth the added cost for homeowners planning to stay in the home long enough to realize the payback period, in climates where energy costs are meaningful, and when installed by a qualified contractor who documents the work properly. It's a less clear win for a short-term hold in a mild climate with cheap energy — worth running the actual numbers for your specific situation rather than assuming either way.",
        ],
      },
    ],
    keyTakeaways: [
      "Spray foam's ROI comes primarily from air sealing, not R-value alone.",
      "Typical payback periods for whole-home applications commonly cited are in the 5-10 year range on energy savings — climate and prior insulation condition matter a lot.",
      "Comfort and reduced HVAC cycling are real value beyond the utility bill.",
      "A correctly documented, professionally installed job is generally positive for resale; the value depends on your specific timeline and climate.",
    ],
    faqs: [
      {
        question: "Is spray foam insulation worth the extra cost?",
        answer: "Generally, yes, for homeowners staying long enough to realize the payback period (commonly cited in the 5-10 year range for whole-home applications) in climates with meaningful energy costs. It's a less clear win for a short-term hold in a mild climate.",
      },
      {
        question: "How long does it take for spray foam to pay for itself?",
        answer: "Commonly cited industry ranges are 5-10 years on energy savings alone for whole-home applications replacing leaky insulation, though this varies significantly by climate, energy costs, and your home's prior condition.",
      },
      {
        question: "Does spray foam insulation increase home resale value?",
        answer: "Energy-efficiency upgrades generally have a positive effect on resale interest, and a correctly documented, professionally installed spray foam job is typically a net positive — though undocumented or poorly installed work can complicate a sale.",
      },
    ],
  },
};
