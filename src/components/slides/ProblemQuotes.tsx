import { Card } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";

const quotes = [
  {
    text: "Claude suggested clean, elegant code. I trusted it. Then testing revealed it broke a critical batch job, crashed the API, and interfered with a legacy import system handling 30% of enterprise customers.",
    impact: "Production disaster from 'elegant' code",
  },
  {
    text: "Claude Code isn't dumb, it's context-starved. It had no idea about hidden dependencies and business context.",
    impact: "AI can't see the full picture",
  },
  {
    text: "After 4 weeks of vibe coding, I was losing grip on the codebase and the 'why' behind the code.",
    impact: "Loss of control and understanding",
  },
];

export const ProblemQuotes = () => {
  return (
    <div className="space-y-6">
      <div className="text-center space-y-3">
        <h1 className="text-4xl font-bold tracking-tight">
          The Problem, In Their Words
        </h1>
        <p className="text-lg text-muted-foreground">
          Real developers, real pain points
        </p>
      </div>

      <div className="space-y-4">
        {quotes.map((quote, index) => (
          <Card 
            key={index} 
            className="p-5 border-l-4 border-l-foreground"
          >
            <div className="flex gap-3">
              <AlertCircle className="h-5 w-5 text-foreground flex-shrink-0 mt-0.5" />
              <div className="space-y-2">
                <blockquote className="text-base leading-relaxed italic">
                  "{quote.text}"
                </blockquote>
                <div className="flex items-center gap-2">
                  <div className="h-px flex-1 bg-border" />
                  <span className="text-xs font-bold uppercase tracking-wider">
                    {quote.impact}
                  </span>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="text-center pt-4">
        <p className="text-xl font-medium">
          Happening to <span className="font-bold underline decoration-2">thousands of developers</span>, every day.
        </p>
      </div>
    </div>
  );
};
