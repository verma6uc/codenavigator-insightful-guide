import { Card } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";

const quotes = [
  {
    text: "Claude analyzed the files I showed it and suggested what looked like clean, elegant code. I trusted it. Then came the testing. The changes had unknowingly broken a critical batch job that processed user data overnight, crashed the API that relied on a specific response format, and somehow interfered with a legacy import system that still handled 30% of our enterprise customers.",
    impact: "Production disaster from 'elegant' code",
  },
  {
    text: "I was thrown into a project I knew nothing about... a sprawling codebase with years of accumulated business logic, edge cases, and interconnected systems. Claude Code isn't dumb, it's context-starved.",
    impact: "AI can't see hidden dependencies",
  },
  {
    text: "After 4 weeks of vibe coding, I realized I was losing a grip on the codebase and the 'why' behind the code. The code wasn't wrong in isolation. It just had no idea about the hidden dependencies and business context that made our system tick.",
    impact: "Loss of control and understanding",
  },
];

export const ProblemQuotes = () => {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-bold tracking-tight">
          The Problem, In Their Words
        </h1>
        <p className="text-xl text-muted-foreground">
          Real developers, real pain points
        </p>
      </div>

      <div className="space-y-6">
        {quotes.map((quote, index) => (
          <Card 
            key={index} 
            className="p-6 border-l-4 border-l-destructive bg-card/50 backdrop-blur hover:bg-card/80 transition-colors"
          >
            <div className="flex gap-4">
              <AlertCircle className="h-6 w-6 text-destructive flex-shrink-0 mt-1" />
              <div className="space-y-3">
                <blockquote className="text-lg leading-relaxed italic">
                  "{quote.text}"
                </blockquote>
                <div className="flex items-center gap-2">
                  <div className="h-px flex-1 bg-border" />
                  <span className="text-sm font-semibold text-destructive">
                    {quote.impact}
                  </span>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="text-center pt-6">
        <p className="text-2xl font-medium">
          This is happening to <span className="text-primary font-bold">thousands of developers</span>, every single day.
        </p>
      </div>
    </div>
  );
};
