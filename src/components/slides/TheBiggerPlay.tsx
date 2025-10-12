import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Lightbulb, TrendingUp } from "lucide-react";

export const TheBiggerPlay = () => {
  return (
    <div className="flex items-center justify-center min-h-[80vh]">
      <div className="max-w-5xl space-y-8">
        <div className="text-center space-y-6">
          <div className="flex justify-center mb-6">
            <Lightbulb className="h-20 w-20 text-accent-blue" />
          </div>

          <h1 className="text-5xl font-bold tracking-tight">
            Then We Realized Something Bigger
          </h1>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We built the infrastructure to prevent AI hallucinations. But that same infrastructure unlocks a far more valuable problem...
          </p>
        </div>

        <Card className="p-10 border-2 border-accent-blue space-y-6">
          <div className="text-center">
            <p className="text-2xl leading-relaxed">
              If our AI has <span className="font-bold text-accent-blue">complete codebase understanding</span>...
            </p>
            <p className="text-2xl leading-relaxed mt-4">
              It doesn't just answer <span className="font-bold">"where is this function called?"</span>
            </p>
          </div>
          
          <div className="flex items-center justify-center gap-6 py-4">
            <Badge variant="outline" className="text-lg px-4 py-2">Query Code</Badge>
            <TrendingUp className="h-8 w-8 text-accent-blue" />
            <Badge className="text-lg px-4 py-2 bg-accent-blue">Plan Features</Badge>
          </div>

          <div className="text-center border-t-2 border-accent-blue/20 pt-6">
            <p className="text-3xl font-bold text-accent-blue">
              It can PLAN HOW to build it.
            </p>
          </div>
        </Card>

        <div className="grid grid-cols-2 gap-6">
          <Card className="p-6 bg-muted/30">
            <h3 className="font-bold text-lg mb-2">What We Built:</h3>
            <p className="text-muted-foreground">Developer tool for querying codebases</p>
            <p className="text-sm text-muted-foreground mt-2">$10-20/seat/month • Bottom-up adoption</p>
          </Card>
          <Card className="p-6 bg-accent-blue/10 border-2 border-accent-blue">
            <h3 className="font-bold text-lg mb-2">What We Discovered:</h3>
            <p className="font-semibold">Team productivity platform for feature planning</p>
            <p className="text-sm font-semibold text-accent-blue mt-2">$100-500/seat/month • Top-down sales</p>
          </Card>
        </div>

        <div className="text-center pt-2">
          <p className="text-xl text-muted-foreground">
            Same infrastructure. <span className="font-bold text-foreground">10x more valuable use case.</span>
          </p>
        </div>
      </div>
    </div>
  );
};
