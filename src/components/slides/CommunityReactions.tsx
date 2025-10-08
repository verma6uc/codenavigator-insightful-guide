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
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-bold tracking-tight">
          The Feedback Validated the Market
        </h1>
        <p className="text-xl text-muted-foreground">
          300+ developers responded with their exact pain points
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {reactions.map((reaction, index) => (
          <Card 
            key={index}
            className="p-6 bg-card/50 backdrop-blur hover:bg-card/80 transition-colors"
          >
            <div className="flex gap-4">
              <div className="flex flex-col items-center gap-1 pt-1">
                <TrendingUp className="h-4 w-4 text-primary" />
                <span className="text-sm font-bold text-primary">{reaction.upvotes}</span>
              </div>
              
              <div className="flex-1 space-y-3">
                <blockquote className="text-base leading-relaxed">
                  "{reaction.quote}"
                </blockquote>
                <div className="flex items-center gap-2 text-sm">
                  <MessageSquare className="h-4 w-4 text-muted-foreground" />
                  <span className="font-medium text-muted-foreground">
                    Translation:
                  </span>
                  <span className="text-foreground">{reaction.insight}</span>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="text-center pt-4 space-y-3">
        <p className="text-2xl font-medium">
          The feedback was clear: <br />
          <span className="text-primary font-bold">"We need this as a product, not a DIY project."</span>
        </p>
        <p className="text-lg text-muted-foreground">
          Validated demand before writing a single line of product code.
        </p>
      </div>
    </div>
  );
};
