import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const demands = [
  {
    title: "Truth, Not Guesses",
    description: "Real dependency graphs with file/line citations, not hallucinated relationships",
    quote: "who_calls(UserService.create) with actual results",
  },
  {
    title: "Safety Nets",
    description: "Know what breaks before merging, not after deploying to production",
    quote: "impact_of(schema change) → show me the blast radius",
  },
  {
    title: "Living Documentation",
    description: "Specs that stay in sync with code automatically, no manual wiki updates",
    quote: "Auto-generate reverse PRDs from the codebase",
  },
  {
    title: "Repeatable Infrastructure",
    description: "Build the mapping layer once, use it across all projects forever",
    quote: "Not 'works on my machine' - works for the entire team",
  },
  {
    title: "MCP Integration",
    description: "Let AI query ground truth instead of guessing from token context",
    quote: "Give Claude the tools to ask the right questions",
  },
];

export const WhatTheyWant = () => {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-bold tracking-tight">
          What They Actually Want
        </h1>
        <p className="text-xl text-muted-foreground">
          Validated demand from the community
        </p>
      </div>

      <div className="space-y-4">
        {demands.map((demand, index) => (
          <Card 
            key={index}
            className="p-6 bg-card/50 backdrop-blur hover:bg-card/80 transition-colors"
          >
            <div className="flex gap-4">
              <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              
              <div className="flex-1 space-y-2">
                <h3 className="text-xl font-bold">{demand.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {demand.description}
                </p>
                <code className="block text-sm bg-muted px-3 py-2 rounded-md mt-2 font-mono">
                  {demand.quote}
                </code>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="text-center pt-6 space-y-4">
        <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-2">
          <p className="text-sm font-semibold text-primary">Customer Discovery Complete</p>
        </div>
        <p className="text-2xl font-medium">
          We asked what they wanted. <br />
          <span className="text-primary font-bold">They told us exactly what to build.</span>
        </p>
        <p className="text-xl text-muted-foreground">
          Now we're building it.
        </p>
      </div>
    </div>
  );
};
