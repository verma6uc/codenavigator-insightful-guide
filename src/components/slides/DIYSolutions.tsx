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
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-bold tracking-tight">
          What They're Actually Building
        </h1>
        <p className="text-xl text-muted-foreground">
          DIY solutions from scratch
        </p>
      </div>

      <Card className="p-8 bg-card/50 backdrop-blur space-y-6">
        <p className="text-lg text-muted-foreground">
          Real developers are building custom infrastructure:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <div 
                key={index}
                className="flex items-start gap-3 p-4 rounded-lg border border-border/50 bg-background/50"
              >
                <div className="p-2 rounded-lg bg-primary/10">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{solution.title}</h3>
                  <p className="text-sm text-muted-foreground">{solution.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="pt-4 space-y-3">
          <p className="text-lg font-medium">Plus MCP servers to expose:</p>
          <div className="flex flex-wrap gap-2">
            {['who_calls()', 'impact_of()', 'search_code()', 'diff_spec_vs_code()'].map((method) => (
              <code key={method} className="px-3 py-1 rounded-md bg-muted font-mono text-sm">
                {method}
              </code>
            ))}
          </div>
        </div>
      </Card>

      <div className="text-center space-y-4">
        <p className="text-2xl font-bold text-primary">
          This developer spent MONTHS building this.
        </p>
        <p className="text-xl text-muted-foreground">
          And it only works for their specific tech stack.
        </p>
      </div>
    </div>
  );
};
