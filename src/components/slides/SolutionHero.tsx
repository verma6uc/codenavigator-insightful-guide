import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export const SolutionHero = () => {
  return (
    <div className="flex items-center justify-center min-h-[80vh] p-8">
      <Card className="max-w-4xl w-full p-12 border-2 border-foreground/20 text-center">
        <Badge variant="outline" className="mb-8 border-2 border-foreground px-4 py-1.5">
          Built in 6 months • Live in production
        </Badge>
        
        <h1 className="text-6xl font-bold tracking-tight mb-6">
          So We Built It
        </h1>
        
        <div className="text-5xl font-bold mb-8 border-l-4 border-l-foreground pl-6 inline-block">
          CodeNavigator.io
        </div>
        
        <p className="text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          The Missing Middle Layer between AI and your codebase
        </p>
      </Card>
    </div>
  );
};
