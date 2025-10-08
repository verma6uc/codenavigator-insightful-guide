import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export const SolutionHero = () => {
  return (
    <div className="flex items-center justify-center min-h-[80vh] p-8">
      <Card className="max-w-6xl w-full p-12 border-2 border-foreground/20">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-8 border-2 border-foreground px-4 py-1.5">
            Built in 6 months • Live in production • 45,000 files indexed
          </Badge>
          
          <h1 className="text-6xl font-bold tracking-tight mb-6">
            So We Built It
          </h1>
          
          <div className="text-5xl font-bold mb-8 border-l-4 border-l-foreground pl-6 inline-block">
            CodeNavigator.io
          </div>
          
          <p className="text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
            The Missing Middle Layer between AI and your codebase
          </p>
        </div>

        <div className="grid grid-cols-3 gap-6 border-t-2 border-foreground/20 pt-8">
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">0.3s</div>
            <div className="text-sm text-muted-foreground">Query response time</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">100%</div>
            <div className="text-sm text-muted-foreground">Accurate call graphs</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">28M</div>
            <div className="text-sm text-muted-foreground">Developers globally (TAM)</div>
          </div>
        </div>
      </Card>
    </div>
  );
};
