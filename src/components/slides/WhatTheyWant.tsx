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
    <div className="space-y-6">
      <div className="text-center space-y-3">
        <h1 className="text-4xl font-bold tracking-tight">
          What They Actually Want
        </h1>
        <p className="text-lg text-muted-foreground">
          Validated demand from 300+ developers
        </p>
      </div>

      <div className="space-y-3">
        {demands.map((demand, index) => (
          <Card 
            key={index}
            className="p-4 border border-border"
          >
            <div className="flex gap-3">
              <CheckCircle2 className="h-5 w-5 text-foreground flex-shrink-0 mt-0.5" />
              
              <div className="flex-1 space-y-1.5">
                <h3 className="text-base font-bold">{demand.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {demand.description}
                </p>
                <code className="block text-xs bg-muted px-2 py-1.5 font-mono border border-border">
                  {demand.quote}
                </code>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="text-center pt-4 space-y-2">
        <div className="inline-block px-4 py-1.5 border-2 border-foreground mb-2">
          <p className="text-xs font-bold uppercase tracking-wider">Customer Discovery Complete</p>
        </div>
        <p className="text-xl font-medium">
          They told us exactly what to build.
        </p>
        <p className="text-lg font-bold">
          Now we're building it.
        </p>
      </div>
    </div>
  );
};
