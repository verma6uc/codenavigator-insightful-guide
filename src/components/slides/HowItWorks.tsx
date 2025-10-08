import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GitBranch, Search, Wrench, Zap } from "lucide-react";

export const HowItWorks = () => {
  const steps = [
    {
      number: "1",
      icon: GitBranch,
      title: "Connect GitHub",
      description: "OAuth in 30 seconds. Support for private repos.",
    },
    {
      number: "2",
      icon: Search,
      title: "Deep Indexing",
      description: "AST parsing • Symbol extraction • Call graphs • Dependency mapping",
    },
    {
      number: "3",
      icon: Wrench,
      title: "MCP Tools Expose Knowledge",
      description: "who_calls() • impact_of() • search_code()",
    },
    {
      number: "4",
      icon: Zap,
      title: "AI Gets Truth",
      description: "No more hallucinations. Production-ready code.",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] p-8">
      <h2 className="text-5xl font-bold tracking-tight mb-16">
        How It Works
      </h2>
      
      <div className="grid grid-cols-2 gap-8 max-w-5xl w-full">
        {steps.map((step) => {
          const Icon = step.icon;
          return (
            <Card
              key={step.number}
              className="p-8 border-2 border-foreground/20 relative"
            >
              <Badge
                variant="outline"
                className="absolute -top-4 -left-4 h-12 w-12 flex items-center justify-center text-2xl font-bold border-4 border-foreground bg-background"
              >
                {step.number}
              </Badge>
              
              <Icon className="h-12 w-12 mb-4" />
              
              <h3 className="text-2xl font-bold mb-3">
                {step.title}
              </h3>
              
              <p className="text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </Card>
          );
        })}
      </div>
    </div>
  );
};
