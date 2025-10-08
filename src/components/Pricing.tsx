import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "$0",
    description: "Perfect for trying out CodeNavigator",
    features: [
      "3 repositories",
      "100 queries per month",
      "Basic code insights",
      "GitHub integration",
      "Community support",
    ],
    cta: "Start Free",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$29",
    description: "For individual developers",
    features: [
      "Unlimited repositories",
      "Unlimited queries",
      "Advanced code analysis",
      "Priority processing",
      "API access",
      "Email support",
    ],
    cta: "Start Free Trial",
    highlighted: true,
  },
  {
    name: "Team",
    price: "$99",
    description: "For development teams",
    features: [
      "Everything in Pro",
      "5 team members included",
      "Shared insights",
      "Team collaboration",
      "Advanced integrations",
      "Priority support",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
];

export const Pricing = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold">
            Simple, transparent pricing
          </h2>
          <p className="text-xl text-muted-foreground">
            Start free, scale as you grow. No hidden fees.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`p-8 ${
                plan.highlighted
                  ? "border-primary shadow-[var(--shadow-glow)] scale-105 bg-gradient-to-b from-card to-primary/5"
                  : "border-border/50"
              }`}
            >
              {plan.highlighted && (
                <div className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-primary to-accent text-white text-sm font-medium mb-4">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold">{plan.price}</span>
                {plan.price !== "$0" && (
                  <span className="text-muted-foreground">/month</span>
                )}
              </div>
              <p className="text-muted-foreground mb-6">{plan.description}</p>

              <Button
                className={`w-full mb-6 ${
                  plan.highlighted
                    ? "bg-gradient-to-r from-primary to-accent hover:shadow-[var(--shadow-glow)]"
                    : ""
                }`}
                variant={plan.highlighted ? "default" : "outline"}
              >
                {plan.cta}
              </Button>

              <ul className="space-y-3">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
