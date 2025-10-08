import { ExternalLink, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";

export const RedditHook = () => {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-3">
        <h1 className="text-4xl font-bold tracking-tight">
          We Posted This to Validate the Problem
        </h1>
        <p className="text-lg text-muted-foreground">
          Before building anything, we asked developers what they really wanted
        </p>
      </div>

      {/* Reddit Post Card */}
      <Card className="p-6 border-2 border-foreground/20 bg-background">
        <div className="flex items-start gap-4">
          <div className="flex flex-col items-center gap-1">
            <TrendingUp className="h-5 w-5 text-foreground" />
            <span className="text-xl font-bold">1.2K</span>
            <span className="text-xs text-muted-foreground">upvotes</span>
          </div>
          
          <div className="flex-1 space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-muted-foreground">r/ClaudeCode</span>
            </div>
            
            <h2 className="text-xl font-semibold">
              I stopped vibe coding by giving Claude Code the context it was missing
            </h2>
            
            <p className="text-sm text-muted-foreground leading-relaxed">
              "Claude code isn't dumb, it's context-starved. I was thrown into a project with years of 
              accumulated business logic, edge cases, and interconnected systems..."
            </p>

            <div className="flex items-center gap-4 pt-1">
              <span className="text-sm text-muted-foreground">💬 300+ comments</span>
            </div>
          </div>
        </div>
      </Card>

      {/* Key Insight */}
      <div className="text-center space-y-3">
        <div className="inline-block px-4 py-1.5 border-2 border-foreground">
          <p className="text-xs font-bold uppercase tracking-wider">Market Research</p>
        </div>
        <p className="text-xl font-medium text-foreground">
          We shared our approach and <span className="font-bold underline decoration-2">1,200+ developers</span> validated the problem.
        </p>
        <p className="text-base text-muted-foreground">
          300+ comments revealing pain points and feature requests.
        </p>
      </div>
    </div>
  );
};
