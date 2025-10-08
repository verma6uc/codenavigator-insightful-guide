import { Card } from "@/components/ui/card";
import { AlertTriangle, Layers, Wrench } from "lucide-react";

const painPoints = [
  {
    icon: AlertTriangle,
    title: "Context Starvation",
    problems: [
      "LLMs can't see dependencies, DI containers, framework 'magic'",
      "Results in 'elegant but wrong' code that breaks production",
      "No visibility into blast radius of changes",
    ],
    color: "text-red-500",
  },
  {
    icon: Layers,
    title: "The Missing Middle Layer",
    problems: [
      "Between chaotic vibe coding and slow manual work",
      "No tools provide blast-radius analysis or living docs",
      "Gap between code generation and production readiness",
    ],
    color: "text-orange-500",
  },
  {
    icon: Wrench,
    title: "DIY Hell",
    problems: [
      "Smart developers building custom solutions (months of work)",
      "Not scalable, not shareable, breaks on framework updates",
      "Every team reinventing the same wheel",
    ],
    color: "text-yellow-500",
  },
];

export const ValidatedPainPoints = () => {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-bold tracking-tight">
          The Gap Is Crystal Clear
        </h1>
        <p className="text-xl text-muted-foreground">
          Three validated pain points from the community
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {painPoints.map((point, index) => {
          const Icon = point.icon;
          return (
            <Card 
              key={index}
              className="p-6 bg-card/50 backdrop-blur border-l-4"
              style={{ borderLeftColor: `var(--${point.color.split('-')[1]}-500)` }}
            >
              <div className="flex gap-4">
                <div className={`p-3 rounded-lg bg-background ${point.color}`}>
                  <Icon className="h-6 w-6" />
                </div>
                
                <div className="flex-1 space-y-3">
                  <h3 className="text-xl font-bold">{point.title}</h3>
                  <ul className="space-y-2">
                    {point.problems.map((problem, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-muted-foreground mt-1">•</span>
                        <span className="text-muted-foreground leading-relaxed">{problem}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      <div className="text-center pt-4">
        <p className="text-xl text-muted-foreground">
          These aren't hypothetical problems.
        </p>
        <p className="text-2xl font-bold mt-2">
          1,200+ developers confirmed them <span className="text-primary">this week</span>.
        </p>
      </div>
    </div>
  );
};
