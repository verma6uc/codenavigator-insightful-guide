import { Card } from "@/components/ui/card";
import { Code, CheckCircle } from "lucide-react";

const topQueries = [
  {
    query: '"Show me everywhere UserService.createUser is called"',
    result: "23 uses across 8 files in 2.1 seconds",
    uses: 47,
  },
  {
    query: '"What breaks if I change the Order schema?"',
    result: "Impact analysis: 12 files, 34 functions",
    uses: 34,
  },
  {
    query: '"Generate a PRD for the authentication flow"',
    result: "3-page spec auto-generated from actual code",
    uses: 28,
  },
];

export const WhatTheyreActuallyDoing = () => {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-3">
        <h1 className="text-4xl font-extrabold tracking-tight">
          What They're Actually Doing
        </h1>
        <p className="text-lg text-muted-foreground">
          Real use cases from production logs
        </p>
      </div>

      {/* Top Queries */}
      <div className="space-y-4">
        {topQueries.map((item, index) => (
          <Card key={index} className="p-5 border-2 border-white/20">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-accent-blue/10 flex items-center justify-center">
                  <span className="text-xl font-bold text-accent-blue">#{index + 1}</span>
                </div>
              </div>
              <div className="flex-1 space-y-3">
                <div className="flex items-start gap-2">
                  <Code className="h-5 w-5 text-accent-blue flex-shrink-0 mt-0.5" />
                  <code className="text-sm bg-muted px-3 py-1.5 rounded font-mono flex-1">
                    {item.query}
                  </code>
                </div>
                <div className="pl-7 space-y-2">
                  <div className="text-sm text-muted-foreground">
                    → {item.result}
                  </div>
                  <div className="text-xs font-bold text-accent-blue">
                    Used {item.uses} times by different users
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Insight Box */}
      <Card className="p-6 bg-accent-green/10 border-2 border-accent-green/30">
        <div className="flex items-start gap-3">
          <CheckCircle className="h-6 w-6 text-accent-green flex-shrink-0" />
          <div>
            <div className="font-bold text-lg mb-2">Pattern Validated</div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              They're using it for the <span className="font-bold text-foreground">exact pain points</span> Reddit validated: understanding dependencies, impact analysis, and documentation generation. Zero feature requests outside our roadmap.
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};
