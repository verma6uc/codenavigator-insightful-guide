import { Card } from "@/components/ui/card";
import { Code2, Database, Network, Boxes } from "lucide-react";

const solutions = [
  {
    icon: Code2,
    title: "Tree-sitter Parsers",
    description: "Extract code graphs from raw source files",
  },
  {
    icon: Network,
    title: "Symbol Maps",
    description: "File → imports → functions → callers relationships",
  },
  {
    icon: Boxes,
    title: "Framework Extractors",
    description: "Next.js routes, NestJS DI, Django ORM, cron jobs",
  },
  {
    icon: Database,
    title: "Postgres + pgvector",
    description: "Store embeddings and enable semantic search",
  },
];

export const DIYSolutions = () => {
  return (
    <div className="space-y-6">
      <div className="text-center space-y-3">
        <h1 className="text-4xl font-bold tracking-tight">
          Current State
        </h1>
        <p className="text-lg text-muted-foreground">
          DIY solutions from scratch
        </p>
      </div>

      <Card className="p-6 border-2 border-foreground/20 space-y-4">
        <p className="text-base font-medium">
          Real developers building custom infrastructure:
        </p>

        <div className="grid grid-cols-2 gap-3">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <div 
                key={index}
                className="flex items-start gap-2 p-3 border border-border/50"
              >
                <div className="p-1.5 border border-foreground/30">
                  <Icon className="h-4 w-4 text-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm mb-0.5">{solution.title}</h3>
                  <p className="text-xs text-muted-foreground">{solution.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="pt-2 space-y-2">
          <p className="text-sm font-medium">Plus MCP servers exposing:</p>
          <div className="flex flex-wrap gap-2">
            {['who_calls()', 'impact_of()', 'search_code()'].map((method) => (
              <code key={method} className="px-2 py-1 border border-foreground/30 font-mono text-xs">
                {method}
              </code>
            ))}
          </div>
        </div>
      </Card>

      <div className="text-center space-y-2">
        <p className="text-xl font-bold">
          MONTHS of work per developer.
        </p>
        <p className="text-base text-muted-foreground">
          And it only works for their specific tech stack.
        </p>
      </div>
    </div>
  );
};
