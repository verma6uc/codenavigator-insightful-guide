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
    <div className="space-y-6">
      <div className="text-center space-y-3">
        <h1 className="text-4xl font-bold tracking-tight">
          The Gap Is Crystal Clear
        </h1>
        <p className="text-lg text-muted-foreground">
          Three validated pain points
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {painPoints.map((point, index) => {
          const Icon = point.icon;
          return (
            <Card 
              key={index}
              className="p-5 bg-background border-l-4 border-l-foreground"
            >
              <div className="flex gap-3">
                <div className="p-2 border border-foreground/30">
                  <Icon className="h-5 w-5 text-foreground" />
                </div>
                
                <div className="flex-1 space-y-2">
                  <h3 className="text-lg font-bold">{point.title}</h3>
                  <ul className="space-y-1">
                    {point.problems.map((problem, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-muted-foreground text-sm mt-0.5">•</span>
                        <span className="text-sm text-muted-foreground leading-relaxed">{problem}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      <div className="text-center pt-3">
        <p className="text-xl font-bold">
          1,200+ developers confirmed these <span className="underline decoration-2">this week</span>.
        </p>
      </div>
    </div>
  );
};
