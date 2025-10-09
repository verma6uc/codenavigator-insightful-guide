import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export const SolutionHero = () => {
  return (
    <div className="flex items-center justify-center min-h-[80vh] p-8">
      <Card className="max-w-6xl w-full p-16 border-2 border-foreground/20 shadow-xl">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-8 border-2 border-accent-blue text-accent-blue px-6 py-2 text-sm font-semibold">
            Built in 6 months • Live in production • 45,000 files indexed
          </Badge>
          
          <h1 className="text-8xl font-extrabold tracking-tight mb-8">
            So We Built It
          </h1>
          
          <div className="text-6xl font-extrabold mb-12 border-l-8 border-l-accent-blue pl-8 inline-block">
            Glue.tools
          </div>
          
          <p className="text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
            The Missing Middle Layer between AI and your codebase
          </p>
        </div>

        <div className="grid grid-cols-3 gap-8 border-t-2 border-foreground/20 pt-12">
          <div className="text-center">
            <div className="text-5xl font-extrabold mb-3 text-accent-blue">0.3s</div>
            <div className="text-sm text-muted-foreground">Query response time</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-extrabold mb-3 text-accent-blue">100%</div>
            <div className="text-sm text-muted-foreground">Accurate call graphs</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-extrabold mb-3 text-accent-blue">28M</div>
            <div className="text-sm text-muted-foreground">Developers globally (TAM)</div>
          </div>
        </div>
      </Card>
    </div>
  );
};
