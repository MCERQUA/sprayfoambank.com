"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import { Calculator, ArrowRight } from "lucide-react";

// Realistic, publicly-documented industry price-per-board-foot ranges (board foot = 1 sq ft at 1 inch thick).
// Open-cell: ~$0.45-$0.65/bf installed. Closed-cell: ~$1.00-$1.50/bf installed.
const RATES = {
  "open-cell": { low: 0.45, high: 0.65, defaultThickness: 6, rValuePerInch: 3.6 },
  "closed-cell": { low: 1.0, high: 1.5, defaultThickness: 3, rValuePerInch: 6.5 },
} as const;

type FoamType = keyof typeof RATES;

export function CostCalculator() {
  const [sqft, setSqft] = useState(1000);
  const [thickness, setThickness] = useState(RATES["open-cell"].defaultThickness);
  const [foamType, setFoamType] = useState<FoamType>("open-cell");

  const rates = RATES[foamType];
  const boardFeet = sqft * thickness;
  const low = Math.round(boardFeet * rates.low);
  const high = Math.round(boardFeet * rates.high);
  const rValue = useMemo(() => Math.round(thickness * rates.rValuePerInch), [thickness, rates.rValuePerInch]);

  function handleFoamTypeChange(type: FoamType) {
    setFoamType(type);
    setThickness(RATES[type].defaultThickness);
  }

  return (
    <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
          <Calculator className="w-5 h-5 text-primary" />
        </div>
        <div>
          <h3 className="font-heading font-semibold text-lg">Estimate Your Project</h3>
          <p className="text-sm text-muted-foreground">A real-number starting point, not a final quote.</p>
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2">Foam Type</label>
          <div className="grid grid-cols-2 gap-3">
            {(Object.keys(RATES) as FoamType[]).map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => handleFoamTypeChange(type)}
                className={`px-4 py-3 rounded-lg border text-sm font-semibold transition-colors cursor-pointer ${
                  foamType === type
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-background border-border text-foreground hover:border-primary/50"
                }`}
              >
                {type === "open-cell" ? "Open-Cell" : "Closed-Cell"}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label htmlFor="sqft" className="block text-sm font-medium mb-2">
            Area to Insulate: <span className="text-primary font-semibold">{sqft.toLocaleString()} sq ft</span>
          </label>
          <input
            id="sqft"
            type="range"
            min={100}
            max={5000}
            step={100}
            value={sqft}
            onChange={(e) => setSqft(Number(e.target.value))}
            className="w-full accent-primary cursor-pointer"
          />
        </div>

        <div>
          <label htmlFor="thickness" className="block text-sm font-medium mb-2">
            Target Thickness: <span className="text-primary font-semibold">{thickness}&quot;</span> (R-{rValue})
          </label>
          <input
            id="thickness"
            type="range"
            min={foamType === "open-cell" ? 3 : 1}
            max={foamType === "open-cell" ? 10 : 6}
            step={1}
            value={thickness}
            onChange={(e) => setThickness(Number(e.target.value))}
            className="w-full accent-primary cursor-pointer"
          />
        </div>

        <div className="rounded-xl bg-muted/50 border border-border p-6 text-center">
          <p className="text-sm text-muted-foreground mb-1">Estimated Cost Range</p>
          <p className="text-3xl md:text-4xl font-heading font-bold text-primary">
            ${low.toLocaleString()} &ndash; ${high.toLocaleString()}
          </p>
          <p className="mt-2 text-xs text-muted-foreground">
            Based on {boardFeet.toLocaleString()} board feet at typical {foamType === "open-cell" ? "open-cell" : "closed-cell"}{" "}
            installed pricing. Actual cost depends on accessibility, prep work, and your region.
          </p>
        </div>

        <Link
          href="/get-a-quote"
          className="group flex items-center justify-center gap-2 w-full px-6 py-4 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 transition-all cursor-pointer"
        >
          Get an Exact Quote
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
