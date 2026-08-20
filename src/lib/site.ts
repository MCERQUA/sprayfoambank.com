export const site = {
  businessName: "Spray Foam Bank",
  tagline: "Your Resource for Spray Foam Insulation Costs, Credits & Financing",
  domain: "sprayfoambank.com",
  url: "https://www.sprayfoambank.com",
  phone: "844-967-5247",
  phoneDigits: "+18449675247",
  email: "josh@contractorschoiceagency.com",
  address: {
    street: "12220 E Riggs Rd",
    city: "Chandler",
    state: "AZ",
    zip: "85249",
  },
  addressFull: "12220 E Riggs Rd, Chandler, AZ 85249",
} as const;

export interface Topic {
  slug: string;
  name: string;
  shortName: string;
  summary: string;
}

export const topics: Topic[] = [
  {
    slug: "spray-foam-insulation-cost",
    name: "How Much Does Spray Foam Insulation Actually Cost?",
    shortName: "Real Cost Breakdown",
    summary: "Real cost-per-board-foot numbers, what drives the price, and how open-cell and closed-cell compare.",
  },
  {
    slug: "cost-calculator",
    name: "Spray Foam Cost Calculator",
    shortName: "Cost Calculator",
    summary: "Get an instant, real-number estimate for your project based on square footage and foam type.",
  },
  {
    slug: "energy-tax-credit",
    name: "The Energy Efficient Home Improvement Tax Credit, Explained",
    shortName: "Tax Credit",
    summary: "How the federal tax credit for insulation actually works, explained plainly — not tax advice.",
  },
  {
    slug: "insulation-rebates",
    name: "Insulation Rebates & Utility Programs",
    shortName: "Rebates & Programs",
    summary: "What rebate programs actually exist, and how to find the ones available in your area.",
  },
  {
    slug: "financing-options",
    name: "Financing Options for Spray Foam Insulation",
    shortName: "Financing Options",
    summary: "Real financing paths homeowners use to cover a spray foam project, and what to ask before signing.",
  },
  {
    slug: "is-it-worth-it",
    name: "Is Spray Foam Insulation Worth the Cost? A Real ROI Breakdown",
    shortName: "Is It Worth It?",
    summary: "A real look at energy savings, payback period, and resale value — not a sales pitch.",
  },
] as const;
