import { ExternalLink, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";

export const RedditHook = () => {
  return (
    <div className="space-y-12">
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-bold tracking-tight">
          We Posted This to Validate the Problem
        </h1>
        <p className="text-xl text-muted-foreground">
          Before building anything, we asked developers what they really wanted
        </p>
      </div>

      {/* Reddit Post Card */}
      <Card className="p-8 border-2 border-primary/20 bg-card/50 backdrop-blur">
        <div className="flex items-start gap-4 mb-4">
          <div className="flex flex-col items-center gap-2">
            <TrendingUp className="h-6 w-6 text-primary" />
            <span className="text-2xl font-bold">1.2K</span>
            <span className="text-xs text-muted-foreground">upvotes</span>
          </div>
          
          <div className="flex-1 space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-muted-foreground">r/ClaudeCode</span>
              <span className="text-muted-foreground">•</span>
              <span className="text-sm text-muted-foreground">Posted 1 week ago</span>
            </div>
            
            <h2 className="text-2xl font-semibold">
              I stopped vibe coding by giving Claude Code the context it was missing
            </h2>
            
            <p className="text-muted-foreground leading-relaxed">
              "Claude code isn't dumb, it's context-starved. Here's what happened: I was thrown 
              into a project I knew nothing about... a sprawling codebase with years of accumulated 
              business logic, edge cases, and interconnected systems..."
            </p>

            <div className="flex items-center gap-4 pt-2">
              <span className="text-sm text-muted-foreground">💬 300+ comments</span>
              <a 
                href="https://www.reddit.com/r/ClaudeCode/comments/1ngxlqg/i_stopped_vibe_coding_by_giving_claude_code_the/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-primary hover:underline flex items-center gap-1"
              >
                View on Reddit <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>
        </div>
      </Card>

      {/* Key Insight */}
      <div className="text-center space-y-4">
        <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
          <p className="text-sm font-semibold text-primary">Market Research Strategy</p>
        </div>
        <p className="text-2xl font-medium text-foreground">
          We shared our technical approach and <span className="text-primary font-bold">1,200+ developers</span> told us they had the exact same problem.
        </p>
        <p className="text-xl text-muted-foreground">
          300+ comments of validated pain points and feature requests.
        </p>
      </div>
    </div>
  );
};
