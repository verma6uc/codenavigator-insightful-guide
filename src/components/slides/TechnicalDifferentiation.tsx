import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Zap, Target, Code2 } from "lucide-react";

export const TechnicalDifferentiation = () => {
  const competitors = [
    {
      name: "GitHub Copilot",
      icon: Code2,
      approach: "Code completion from training data",
      limitation: "No runtime codebase awareness. Hallucinates APIs that don't exist.",
      ourAdvantage: "We provide ground truth. AI knows exactly what exists in your codebase.",
    },
    {
      name: "Cursor / Windsurf",
      icon: Code2,
      approach: "RAG on file contents",
      limitation: "Text-based retrieval. Can't answer 'who calls this?' or 'what breaks?'",
      ourAdvantage: "Semantic indexing with call graphs. Query relationships, not just text.",
    },
    {
      name: "Sourcegraph",
      icon: Code2,
      approach: "Code search with regex",
      limitation: "Search tool, not AI middleware. No MCP integration. Manual workflows.",
      ourAdvantage: "MCP-native. AI agents query us directly. Zero manual search.",
    },
    {
      name: "Tabnine / CodeWhisperer",
      icon: Code2,
      approach: "Local/cloud code completion",
      limitation: "Autocomplete only. No refactoring intelligence or impact analysis.",
      ourAdvantage: "Full refactoring safety. Blast radius analysis before every change.",
    },
  ];

  const moats = [
    {
      icon: Shield,
      title: "Deep Technical Moat",
      points: [
        "TypeScript Compiler API expertise (AST parsing, type checking, module resolution)",
        "MCP server architecture (first to market with code analysis MCP)",
        "Call graph algorithms (recursive CTE queries, blast radius scoring)",
        "6 months of iteration on indexing performance (45s for 1,250 files)",
      ],
    },
    {
      icon: Zap,
      title: "Product Differentiation",
      points: [
        "Only solution that gives AI 'who_calls()' and 'impact_of()' superpowers",
        "Production-safe by design (prevent breaking changes before they happen)",
        "Workspace isolation per branch (multi-branch development without conflicts)",
        "Works with ANY MCP-compatible AI (Claude, ChatGPT, local models)",
      ],
    },
    {
      icon: Target,
      title: "Market Timing",
      points: [
        "MCP launched Oct 2024. We're first wave of MCP server builders.",
        "AI coding assistants exploding (Cursor $10M ARR in 6 months)",
        "Developers explicitly asking for this (2,400+ upvotes on Reddit)",
        "Enterprise need: compliance teams require 'AI with rails'",
      ],
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] p-8">
      <h2 className="text-5xl font-bold tracking-tight mb-4">
        Technical Differentiation
      </h2>
      <p className="text-xl text-muted-foreground mb-12">
        Why we win (and why it's hard to copy)
      </p>

      {/* Competitive Matrix */}
      <Card className="max-w-7xl w-full p-8 border-2 border-foreground/20 mb-12">
        <h3 className="text-2xl font-bold mb-6 text-center">
          Competitive Landscape
        </h3>
        <div className="space-y-6">
          {competitors.map((comp, idx) => {
            const IconComponent = comp.icon;
            return (
              <div key={idx} className="grid grid-cols-[1fr,2fr] gap-6 border-l-4 border-l-foreground/20 pl-6">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <IconComponent className="h-5 w-5" />
                    <h4 className="font-bold">{comp.name}</h4>
                  </div>
                  <Badge variant="outline" className="border-2 border-foreground/50 text-xs">
                    {comp.approach}
                  </Badge>
                </div>
                <div className="space-y-2">
                  <div>
                    <span className="text-xs font-bold text-destructive">LIMITATION:</span>
                    <p className="text-sm text-muted-foreground">{comp.limitation}</p>
                  </div>
                  <div>
                    <span className="text-xs font-bold">OUR ADVANTAGE:</span>
                    <p className="text-sm font-mono bg-muted p-2 rounded border-l-2 border-l-foreground">
                      {comp.ourAdvantage}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Card>

      {/* Three Moats */}
      <h3 className="text-3xl font-bold mb-8">
        Our Three Moats
      </h3>
      <div className="grid grid-cols-3 gap-6 max-w-7xl w-full mb-8">
        {moats.map((moat, idx) => {
          const IconComponent = moat.icon;
          return (
            <Card key={idx} className="p-6 border-4 border-foreground bg-muted">
              <IconComponent className="h-10 w-10 mb-4" />
              <h4 className="text-xl font-bold mb-4">{moat.title}</h4>
              <ul className="space-y-3">
                {moat.points.map((point, pidx) => (
                  <li key={pidx} className="text-xs leading-relaxed flex items-start gap-2">
                    <span className="text-foreground font-bold mt-0.5">•</span>
                    <span className="text-muted-foreground">{point}</span>
                  </li>
                ))}
              </ul>
            </Card>
          );
        })}
      </div>

      {/* Bottom Metrics */}
      <Card className="max-w-5xl w-full p-8 border-2 border-foreground/20 bg-background">
        <h3 className="text-2xl font-bold mb-6 text-center">
          Why It's Hard to Copy
        </h3>
        <div className="grid grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">6 months</div>
            <div className="text-xs text-muted-foreground">Engineering investment</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">15K</div>
            <div className="text-xs text-muted-foreground">Lines of TS compiler code</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">1st</div>
            <div className="text-xs text-muted-foreground">Code analysis MCP server</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">100%</div>
            <div className="text-xs text-muted-foreground">Accurate call graphs</div>
          </div>
        </div>
        <div className="mt-8 p-4 border-l-4 border-l-foreground bg-muted">
          <p className="text-sm text-center">
            <span className="font-bold">Network effect:</span> Every codebase indexed = better AI for everyone. 
            More repos = better pattern recognition = more valuable tool.
          </p>
        </div>
      </Card>
    </div>
  );
};
