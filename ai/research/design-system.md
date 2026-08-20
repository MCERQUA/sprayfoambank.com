# Design System — sprayfoambank.com

Generated via real Google Stitch AI mockups (`stitch-mcp.sh`, raw-HTTP path), called directly by
the main build process (not a fork). 4/4 screens generated on the first attempt, zero quota
issues, no hand-authored fallback needed.

- Stitch project: `projects/15499674702973958621` ("Spray Foam Bank — site design")
- Design system asset: `assets/15337597407768709444`
- Model: `GEMINI_3_1_PRO`, `deviceType: DESKTOP`

## Palette (strict warm earth tones + natural green — no purple/pink/blue/cyan/finance-cliche colors)

| Role | Name | Hex |
|---|---|---|
| Primary / brand | Amber / Bronze | `#A6672E` |
| Secondary | Clay / Copper | `#8B5A2E` |
| Accent | Warm Gold | `#D0A050` |
| Natural accent | Sage Green | `#6B7A4C` |
| Background (base) | Warm off-white | `#FAF6EF` |
| Text | Charcoal-brown | `#2B2015` |
| Inverted dark band | Deep bronze-brown | `#4A2E18` |

Design brief explicitly banned finance clichés (piggy banks, vaults, cash stacks, corporate-finance
blue, cash green) in addition to the standard purple/pink/blue ban — palette stays strictly
warm-earth despite the financial topic.

## Typography

- Headline: **Space Grotesk**
- Body: **Work Sans**
- Roundness: `ROUND_TWELVE`

## Motif / image style

Real photos of spray foam job sites and homeowners/contractors reviewing paperwork, budgets, and
calculators together. Explicitly NOT piggy banks, bank vaults, cash stacks, or generic finance
clipart. Hero scrim held to >=50% opacity per hard rule.

## Section rhythm

No two adjacent sections share a background: white/off-white base <-> sand-tinted band <-> inverted
dark bronze-brown band (trust bar / stats / final CTA) <-> full-bleed photo band with scrim.

## Screens generated (`.stitch-pages/`)

| File | Stitch title | Notes |
|---|---|---|
| `home.html` | Spray Foam Bank - Home Page | Hero, trust bar, 6-topic grid, credibility band, process, inverted stats, FAQ, final CTA, footer |
| `spray-foam-insulation-cost.html` | How Much Does Spray Foam Insulation Actually Cost? | Representative long-form pillar template — the site's real-demand money page (6,600/mo keyword) |
| `about.html` | About / Credibility | Team/credibility split hero, values band, inverted stats, footer |
| `get-a-quote.html` | Get a Free Quote | Soft-conversion contact/form page |

## Proactive scrim fix

Found the same decorative card-hover-overlay pattern seen on the prior build (bg-earth-900/20 on
topic-card thumbnails, not hero text scrims) — raised to /50 directly in home.html before the gate
check ran, to avoid a repeat of that failure mode.

## Honesty confirmation

designMd explicitly instructed: "Bank" used as a resource-repository metaphor (like "food bank"),
not a literal financial institution; no fabricated financing-partner names; tax-credit content
hedged as not financial/tax advice.

## Downstream build note

Screens are art-direction references — the Next.js build applies these as the locked style
contract (palette, type pairing, section rhythm, motif) via Tailwind CSS variables, not by
transplanting the raw HTML.
