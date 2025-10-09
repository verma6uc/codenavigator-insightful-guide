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
      <h2 className="text-4xl font-extrabold tracking-tight mb-6">
        How It Works
      </h2>
      <p className="text-xl text-muted-foreground mb-16">
        Deep technical architecture (not just another wrapper)
      </p>
      
      <div className="grid grid-cols-2 gap-8 max-w-6xl w-full">
        {steps.map((step) => {
          const IconComponent = step.icon;
          return (
            <Card
              key={step.number}
              className="p-12 border-2 border-foreground/20 relative shadow-lg hover:shadow-xl transition-shadow"
            >
              <Badge
                variant="outline"
                className="absolute -top-5 -left-5 h-14 w-14 flex items-center justify-center text-3xl font-extrabold border-4 border-accent-blue bg-accent-blue text-accent-blue-foreground rounded-full shadow-lg"
              >
                {step.number}
              </Badge>
              
              <IconComponent className="h-14 w-14 mb-6 text-accent-blue" />
              
              <h3 className="text-3xl font-extrabold mb-4">
                {step.title}
              </h3>
              
              <p className="text-base leading-relaxed mb-6">
                {step.description}
              </p>

              <div className="border-l-4 border-l-accent-blue pl-4 mb-6 bg-muted p-4">
                <p className="text-xs font-mono text-muted-foreground leading-relaxed">
                  {step.technical}
                </p>
              </div>

              <Badge variant="outline" className="border-2 border-accent-blue text-accent-blue">
                ⚡ {step.metric}
              </Badge>
            </Card>
          );
        })}
      </div>
    </div>
  );
};
