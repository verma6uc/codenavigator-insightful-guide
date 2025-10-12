import { Card } from "@/components/ui/card";
import { TrendingUp } from "lucide-react";

const metrics = [
  {
    before: "2-3 weeks",
    after: "90 seconds",
    label: "Planning time",
  },
  {
    before: "$15K",
    after: "$50",
    label: "Cost per feature spec",
  },
  {
    before: "5-10 review cycles",
    after: "1-2 review cycles",
    label: "Architecture debates",
  },
];

export const FeaturePlanningValue = () => {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-3">
        <h1 className="text-4xl font-bold tracking-tight">
          The Value Multiplier
        </h1>
        <p className="text-xl text-muted-foreground">
          Same deep index. 10x more valuable use case.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {metrics.map((metric, index) => (
          <Card key={index} className="p-8 text-center border-2">
            <div className="space-y-4">
              <div className="text-3xl font-bold text-muted-foreground line-through">
                {metric.before}
              </div>
              <TrendingUp className="h-8 w-8 mx-auto text-accent-blue" />
              <div className="text-5xl font-extrabold text-accent-blue">
                {metric.after}
              </div>
              <div className="text-sm text-muted-foreground font-medium">
                {metric.label}
              </div>
            </div>
          </Card>
        ))}
      </div>

      <Card className="p-10 bg-accent-blue/10 border-2 border-accent-blue">
        <div className="text-center space-y-4">
          <p className="text-3xl font-bold">
            Infrastructure Layer → Feature Planning Platform
          </p>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Developers pay for tools. <span className="font-bold text-foreground">Teams pay for productivity.</span>
          </p>
        </div>
      </Card>

      <div className="grid grid-cols-2 gap-6 pt-4">
        <Card className="p-6 border-l-4 border-l-muted">
          <h3 className="text-lg font-bold mb-2">Developer Tool Pricing</h3>
          <p className="text-muted-foreground">$10-20/seat/month</p>
          <p className="text-sm text-muted-foreground mt-2">Bottom-up adoption, usage-based</p>
        </Card>
        <Card className="p-6 border-l-4 border-l-accent-blue">
          <h3 className="text-lg font-bold mb-2">Team Productivity Tool Pricing</h3>
          <p className="text-accent-blue font-bold">$100-500/seat/month</p>
          <p className="text-sm text-muted-foreground mt-2">Top-down sales, ROI-driven</p>
        </Card>
      </div>
    </div>
  );
};
