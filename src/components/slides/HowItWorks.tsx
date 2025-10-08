import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GitBranch, Search, Wrench, Zap } from "lucide-react";

export const HowItWorks = () => {
  const steps = [
    {
      number: "1",
      icon: GitBranch,
      title: "Connect GitHub",
      description: "OAuth in 30 seconds. Private repos supported.",
      technical: "NextAuth v5 • AES-256-GCM token encryption • Multi-tenant isolation",
      metric: "1,250 repos indexed",
    },
    {
      number: "2",
      icon: Search,
      title: "Deep Indexing Engine",
      description: "TypeScript Compiler API parses every file into AST",
      technical: "Symbol extraction • Dependency graphs • Function call tracking • Content hashing for incremental updates",
      metric: "45 seconds for 1,250 files",
    },
    {
      number: "3",
      icon: Wrench,
      title: "MCP Tools Expose Knowledge",
      description: "Model Context Protocol servers expose queryable tools",
      technical: "who_calls() • impact_of() • search_code() • get_file_symbols() • file_change_impact_analysis()",
      metric: "0.3s query response",
    },
    {
      number: "4",
      icon: Zap,
      title: "AI Gets Ground Truth",
      description: "Claude Sonnet 4.5 with agentic loop (up to 25 iterations)",
      technical: "Sequential thinking • Tool calling • Blast radius analysis • Production-safe suggestions",
      metric: "100% accurate call graphs",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] p-8">
      <h2 className="text-5xl font-bold tracking-tight mb-4">
        How It Works
      </h2>
      <p className="text-xl text-muted-foreground mb-12">
        Deep technical architecture (not just another wrapper)
      </p>
      
      <div className="grid grid-cols-2 gap-8 max-w-6xl w-full">
        {steps.map((step) => {
          const IconComponent = step.icon;
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
              
              <IconComponent className="h-12 w-12 mb-4" />
              
              <h3 className="text-2xl font-bold mb-3">
                {step.title}
              </h3>
              
              <p className="text-sm leading-relaxed mb-4">
                {step.description}
              </p>

              <div className="border-l-4 border-l-foreground pl-4 mb-4 bg-muted p-3">
                <p className="text-xs font-mono text-muted-foreground leading-relaxed">
                  {step.technical}
                </p>
              </div>

              <Badge variant="outline" className="border-2 border-foreground">
                ⚡ {step.metric}
              </Badge>
            </Card>
          );
        })}
      </div>
    </div>
  );
};
