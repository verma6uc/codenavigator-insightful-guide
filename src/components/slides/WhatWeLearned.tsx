import { Card } from "@/components/ui/card";
import { Zap, Target, Users, CheckCircle } from "lucide-react";

const learnings = [
  {
    icon: Zap,
    title: "Speed is the Hook",
    metric: "Average time-to-value: 8 minutes",
    insight: "They don't want to read docs, they want instant answers. 89% of users who completed indexing made a query within 3 minutes.",
    color: "border-accent-blue",
  },
  {
    icon: Target,
    title: "Accuracy Builds Trust",
    metric: "0 reported hallucinations in 547 queries",
    insight: "MCP tools delivering on the promise of ground truth. Users are making critical architecture decisions based on our outputs.",
    color: "border-accent-green",
  },
  {
    icon: Users,
    title: "Teams > Individuals",
    metric: "67% of pilots added teammates within 48 hours",
    insight: "This is a team collaboration tool, not just personal productivity. Usage patterns show it's most valuable for cross-team communication.",
    color: "border-accent-blue",
  },
];

export const WhatWeLearned = () => {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-3">
        <h1 className="text-4xl font-bold tracking-tight">
          What We Learned
        </h1>
        <p className="text-lg text-muted-foreground">
          Validated product-market fit signals
        </p>
      </div>

      {/* Learning Cards */}
      <div className="space-y-4">
        {learnings.map((learning, index) => {
          const Icon = learning.icon;
          return (
            <Card key={index} className={`p-6 border-l-4 ${learning.color}`}>
              <div className="flex gap-4">
                <Icon className="h-8 w-8 text-accent-blue flex-shrink-0" />
                <div className="flex-1 space-y-3">
                  <div>
                    <div className="text-xl font-bold mb-1">{learning.title}</div>
                    <div className="text-sm font-semibold text-accent-blue">
                      {learning.metric}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {learning.insight}
                  </p>
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Key Takeaway */}
      <Card className="p-6 bg-accent-green/10 border-2 border-accent-green/30">
        <div className="flex items-start gap-3">
          <CheckCircle className="h-8 w-8 text-accent-green flex-shrink-0" />
          <div>
            <div className="text-xl font-bold mb-3">The Pattern is Clear</div>
            <div className="grid grid-cols-3 gap-4 text-sm">
              <div>
                <div className="font-bold text-accent-green mb-1">Fast onboarding</div>
                <div className="text-muted-foreground">8 min to value</div>
              </div>
              <div>
                <div className="font-bold text-accent-green mb-1">High trust</div>
                <div className="text-muted-foreground">0% error rate</div>
              </div>
              <div>
                <div className="font-bold text-accent-green mb-1">Team adoption</div>
                <div className="text-muted-foreground">67% add teammates</div>
              </div>
            </div>
          </div>
        </div>
      </Card>

      <div className="text-center pt-2">
        <p className="text-xl font-medium">
          We're not guessing anymore. We're <span className="text-accent-green font-bold">following the data</span>.
        </p>
      </div>
    </div>
  );
};
