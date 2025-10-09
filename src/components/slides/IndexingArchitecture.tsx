import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Database, Workflow, GitBranch, Cpu } from "lucide-react";

export const IndexingArchitecture = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] p-8">
      <h2 className="text-4xl font-extrabold tracking-tight mb-6">
        Deep Indexing Architecture
      </h2>
      <p className="text-xl text-muted-foreground mb-16">
        Why our indexing is different (and better)
      </p>

      <div className="grid grid-cols-2 gap-8 max-w-7xl w-full mb-8">
        {/* Traditional Code Search */}
        <Card className="p-6 border-2 border-foreground/20">
          <Badge variant="outline" className="mb-4 border-2 border-foreground/50">
            ❌ Traditional Code Search
          </Badge>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <Database className="h-5 w-5 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-bold mb-1 text-sm">Text-based indexing</h4>
                <p className="text-xs text-muted-foreground">
                  Grep-like string matching. No semantic understanding.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Database className="h-5 w-5 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-bold mb-1 text-sm">File-level granularity</h4>
                <p className="text-xs text-muted-foreground">
                  Can't query "who calls this function?" Only "what files mention this string?"
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Database className="h-5 w-5 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-bold mb-1 text-sm">No call graph</h4>
                <p className="text-xs text-muted-foreground">
                  Can't answer "what breaks if I change this?" Static analysis not available.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-4 p-3 bg-muted border-l-4 border-l-foreground/50">
            <p className="text-xs font-mono">
              Example: GitHub Code Search, Sourcegraph (basic tier)
            </p>
          </div>
        </Card>

        {/* Glue.tools Deep Indexing */}
        <Card className="p-8 border-4 border-accent-blue bg-accent-blue/10 shadow-xl">
          <Badge variant="outline" className="mb-4 border-2 border-accent-blue text-accent-blue font-bold">
            ✅ Glue.tools Deep Indexing
          </Badge>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <Cpu className="h-5 w-5 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-bold mb-1 text-sm">AST-based semantic parsing</h4>
                <p className="text-xs text-muted-foreground">
                  TypeScript Compiler API parses every file. Full type information.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Workflow className="h-5 w-5 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-bold mb-1 text-sm">Symbol-level granularity</h4>
                <p className="text-xs text-muted-foreground">
                  Every function, class, type tracked. Query: "Who calls useState?"
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <GitBranch className="h-5 w-5 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-bold mb-1 text-sm">Complete call graph</h4>
                <p className="text-xs text-muted-foreground">
                  12,000 function calls tracked. Blast radius analysis in 0.3s.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-4 p-4 border-l-8 border-l-accent-blue">
            <p className="text-sm font-mono font-bold text-accent-blue">
              Result: Production-safe refactoring. Zero hallucinations.
            </p>
          </div>
        </Card>
      </div>

      {/* Technical Deep Dive */}
      <Card className="max-w-7xl w-full p-12 border-2 border-foreground/20 shadow-xl">
        <h3 className="text-4xl font-extrabold mb-8 text-center">
          5-Step Indexing Pipeline
        </h3>
        <div className="grid grid-cols-5 gap-6">
          {[
            {
              step: "1",
              title: "Clone",
              tech: "simple-git",
              metric: "5s",
              detail: "Shallow clone with auth token",
            },
            {
              step: "2",
              title: "Scan",
              tech: "fs/promises",
              metric: "10s",
              detail: "Recursive traversal, exclude node_modules",
            },
            {
              step: "3",
              title: "Parse AST",
              tech: "TS Compiler API",
              metric: "20s",
              detail: "Extract 3,500 symbols per repo",
            },
            {
              step: "4",
              title: "Map Dependencies",
              tech: "resolveModuleName",
              metric: "8s",
              detail: "Build import graph: 8,200 edges",
            },
            {
              step: "5",
              title: "Build Call Graph",
              tech: "findReferences",
              metric: "7s",
              detail: "Track 12,000 function calls",
            },
          ].map((item) => (
            <Card key={item.step} className="p-6 border-2 border-foreground/20 text-center shadow-lg">
              <Badge variant="outline" className="border-2 border-accent-blue text-accent-blue mb-4 text-xl font-bold">
                {item.step}
              </Badge>
              <h4 className="font-bold mb-3 text-base">{item.title}</h4>
              <div className="text-xs text-muted-foreground space-y-3">
                <div className="font-mono bg-muted p-3 rounded">{item.tech}</div>
                <div className="font-bold text-accent-blue">⚡ {item.metric}</div>
                <div className="leading-relaxed">{item.detail}</div>
              </div>
            </Card>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Badge variant="outline" className="border-2 border-accent-blue text-accent-blue text-xl px-8 py-3 font-bold">
            Total: 45 seconds for 1,250 files • Incremental updates in 5 seconds
          </Badge>
        </div>
      </Card>

      {/* Key Differentiators */}
      <div className="grid grid-cols-3 gap-6 max-w-7xl w-full mt-8">
        <Card className="p-6 border-2 border-foreground/20">
          <h4 className="font-bold mb-3 text-center">Incremental Updates</h4>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Content hashing (SHA-256) detects changes. Only re-parse modified files. Full repo re-index not needed.
          </p>
        </Card>
        <Card className="p-6 border-2 border-foreground/20">
          <h4 className="font-bold mb-3 text-center">Branch Isolation</h4>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Each workspace = one branch. Outdated detection via commit SHA tracking. Safe multi-branch development.
          </p>
        </Card>
        <Card className="p-6 border-2 border-foreground/20">
          <h4 className="font-bold mb-3 text-center">Multi-Language</h4>
          <p className="text-sm text-muted-foreground leading-relaxed">
            TypeScript today. Python, Java, Go via Tree-sitter (Q2 2025). 80% of enterprise codebases covered.
          </p>
        </Card>
      </div>
    </div>
  );
};
