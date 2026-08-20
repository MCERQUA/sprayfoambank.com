import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerChildren, StaggerItem } from "@/components/animations/StaggerChildren";

const steps = [
  {
    number: "01",
    title: "Get a Real Cost Estimate",
    text: "Use our cost calculator or read the full cost breakdown to know what to expect before you talk to anyone.",
  },
  {
    number: "02",
    title: "Check What You Might Get Back",
    text: "Learn what the federal tax credit and local rebate programs actually cover for your project.",
  },
  {
    number: "03",
    title: "Explore How to Pay for It",
    text: "Understand the real financing paths available, so you can ask an installer the right questions.",
  },
  {
    number: "04",
    title: "Get a Free, Written Quote",
    text: "When you're ready, we connect you with a vetted installer from CCA's network &mdash; free, no obligation.",
  },
];

export function ProcessSteps() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <FadeIn className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">How to Use This Site</p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold">From Estimate to a Real Quote</h2>
        </FadeIn>

        <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {steps.map((step) => (
            <StaggerItem key={step.number}>
              <div className="relative">
                <span className="text-5xl font-heading font-bold text-primary/20">{step.number}</span>
                <h3 className="mt-3 text-lg font-heading font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: step.text }} />
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
