import { Zap, Brain, RefreshCw, Target, Code2, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast Setup",
    description: "Connect your repository and get insights in 5 minutes. No weeks of enterprise onboarding required.",
  },
  {
    icon: Brain,
    title: "Continuous Intelligence",
    description: "Real-time understanding that updates with every commit. Not just one-time analysis.",
  },
  {
    icon: RefreshCw,
    title: "Auto-Generated Docs",
    description: "Always-current documentation that writes itself as your code evolves.",
  },
  {
    icon: Target,
    title: "Smart Code Review",
    description: "Understand what each PR actually changes and its impact across your codebase.",
  },
  {
    icon: Code2,
    title: "Fast Onboarding",
    description: "New developers understand the codebase in hours instead of weeks.",
  },
  {
    icon: TrendingUp,
    title: "Technical Debt Tracker",
    description: "Identify refactoring opportunities and track improvement over time.",
  },
];

export const Features = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[var(--gradient-subtle)]">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold">
            Built for developers who
            <span className="text-primary"> actually write code</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Not enterprise modernization. Not legacy migration. Daily developer productivity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="p-6 hover:shadow-[var(--shadow-elevated)] transition-all duration-300 hover:-translate-y-1 border-border/50 bg-card/50 backdrop-blur"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
