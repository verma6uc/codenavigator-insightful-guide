import { Card } from "@/components/ui/card";
import { FileSearch, Search, MessageSquare, HelpCircle } from "lucide-react";

const painPoints = [
  {
    icon: FileSearch,
    title: "Documentation Diving",
    description: "Searching README files and Confluence docs with outdated architecture diagrams",
  },
  {
    icon: Search,
    title: "Grep & Manual Tracing",
    description: "git grep and 'Find All References' — opening 10+ files to trace one dependency",
  },
  {
    icon: MessageSquare,
    title: "Tribal Knowledge Dependency",
    description: "Slack: 'Hey, does anyone know how X works?' — waiting for senior devs to explain",
  },
  {
    icon: HelpCircle,
    title: "Guesswork Estimation",
    description: "'This feels like a 2-week task' — padding estimates for unknown unknowns",
  },
];

export const DIYSolutions = () => {
  return (
    <div className="space-y-6">
      <div className="text-center space-y-3">
        <h1 className="text-4xl font-bold tracking-tight">
          Current State: Manual Code Archaeology
        </h1>
        <p className="text-lg text-muted-foreground">
          How developers understand codebases today
        </p>
      </div>

      <Card className="p-6 border-2 border-foreground/20 space-y-4">
        <p className="text-base font-medium">
          The reality of feature planning:
        </p>

        <div className="grid grid-cols-2 gap-3">
          {painPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <div 
                key={index}
                className="flex items-start gap-2 p-3 border border-border/50"
              >
                <div className="p-1.5 border border-foreground/30">
                  <Icon className="h-4 w-4 text-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm mb-0.5">{point.title}</h3>
                  <p className="text-xs text-muted-foreground">{point.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Card>

      <div className="text-center space-y-2">
        <p className="text-xl font-bold">
          HOURS per feature just to understand what needs to change.
        </p>
        <p className="text-base text-muted-foreground">
          And estimates are still wrong 60% of the time.
        </p>
      </div>
    </div>
  );
};
