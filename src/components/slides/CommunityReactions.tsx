import { Card } from "@/components/ui/card";
import { MessageSquare, TrendingUp } from "lucide-react";

const reactions = [
  {
    quote: "Does this sound like you use an intelligent tool? For me it does not.",
    upvotes: 34,
    insight: "Frustration with current AI limitations",
  },
  {
    quote: "Context7 is great but it takes up so much of the context window. Just can't justify having a kitchen sink of tools that aren't being used all the time.",
    upvotes: 12,
    insight: "Existing solutions are inefficient",
  },
  {
    quote: "Exactly this! That's the key insight people miss - repeatable infrastructure is the whole point. You build the reverse mapping layer once, and every new project just plugs right into the same flow.",
    upvotes: 19,
    insight: "Demand for productized solution",
  },
  {
    quote: "I honestly wonder, if you have to do all this, what the point is of using AI. I work in a team of 4, we never did all of this to build things.",
    upvotes: 24,
    insight: "AI should work without heavy setup",
  },
];

export const CommunityReactions = () => {
  return (
    <div className="space-y-6">
      <div className="text-center space-y-3">
        <h1 className="text-4xl font-bold tracking-tight">
          Real world feedback validates the Problem
        </h1>
        <p className="text-lg text-muted-foreground">
          300+ developers responded with exact pain points
        </p>
      </div>

      <div className="grid grid-cols-1 gap-3">
        {reactions.map((reaction, index) => (
          <Card 
            key={index}
            className="p-4 border border-border"
          >
            <div className="flex gap-3">
              <div className="flex flex-col items-center gap-0.5 pt-0.5">
                <TrendingUp className="h-4 w-4 text-foreground" />
                <span className="text-sm font-bold">{reaction.upvotes}</span>
              </div>
              
              <div className="flex-1 space-y-2">
                <blockquote className="text-sm leading-relaxed">
                  "{reaction.quote}"
                </blockquote>
                <div className="flex items-center gap-2 text-xs">
                  <MessageSquare className="h-3 w-3 text-muted-foreground" />
                  <span className="font-medium text-muted-foreground">Translation:</span>
                  <span className="text-foreground">{reaction.insight}</span>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="text-center pt-3 space-y-2">
        <p className="text-xl font-medium">
          The feedback was clear:
        </p>
        <p className="text-lg font-bold">
          "We need this as a product, not a DIY project."
        </p>
      </div>
    </div>
  );
};
