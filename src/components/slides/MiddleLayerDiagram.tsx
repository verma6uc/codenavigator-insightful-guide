import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bot, Database, GitBranch, ArrowRight, X } from "lucide-react";

export const MiddleLayerDiagram = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] p-8">
      <h2 className="text-4xl font-extrabold tracking-tight mb-6">
        The Missing Middle Layer
      </h2>
      <p className="text-xl text-muted-foreground mb-16">
        Why AI hallucinates about code (and how we fix it)
      </p>
      
      {/* Without Glue.tools */}
      <div className="mb-12 w-full max-w-6xl">
        <Badge variant="outline" className="mb-6 border-2 border-accent-red text-accent-red font-semibold px-4 py-2">
          ❌ Current State: AI → Codebase (Direct)
        </Badge>
        <div className="flex items-center gap-6">
          <Card className="flex-1 p-8 border-2 border-accent-red/30 bg-accent-red/5">
            <Bot className="h-12 w-12 mb-3 text-accent-red" />
            <p className="text-sm font-mono">AI guesses structure</p>
          </Card>
          <X className="h-10 w-10 text-accent-red" />
          <Card className="flex-1 p-8 border-2 border-accent-red/30 bg-accent-red/5">
            <GitBranch className="h-12 w-12 mb-3 text-accent-red" />
            <p className="text-sm font-mono">No semantic index</p>
          </Card>
        </div>
        <div className="mt-6 text-base text-muted-foreground text-center">
          Result: Hallucinations, breaking changes, incorrect assumptions
        </div>
      </div>

      {/* With Glue.tools */}
      <div className="w-full max-w-6xl">
        <Badge variant="outline" className="mb-6 border-2 border-accent-blue text-accent-blue font-semibold px-4 py-2">
          ✅ With Glue.tools: AI → MCP → Deep Index → Codebase
        </Badge>
        <div className="flex items-center gap-4">
          <Card className="flex-1 p-8 border-2 border-foreground/20 shadow-lg">
            <Bot className="h-12 w-12 mb-4 text-accent-blue" />
            <h4 className="font-bold mb-2 text-lg">AI Assistants</h4>
            <p className="text-xs text-muted-foreground">
              Claude • GPT • Cursor
            </p>
          </Card>

          <ArrowRight className="h-8 w-8 flex-shrink-0 text-accent-blue" />

          <Card className="flex-1 p-8 border-4 border-accent-blue bg-accent-blue/10 shadow-xl">
            <Database className="h-12 w-12 mb-4 text-accent-blue" />
            <h4 className="font-bold mb-3 text-lg">Glue.tools MCP</h4>
            <div className="text-xs font-mono space-y-1.5 text-accent-blue">
              <div>• <span className="font-bold">who_calls()</span></div>
              <div>• <span className="font-bold">impact_of()</span></div>
              <div>• <span className="font-bold">search_code()</span></div>
            </div>
          </Card>

          <ArrowRight className="h-8 w-8 flex-shrink-0 text-accent-blue" />

          <Card className="flex-1 p-8 border-2 border-foreground/20 shadow-lg">
            <Database className="h-12 w-12 mb-4" />
            <h4 className="font-bold mb-3 text-lg">Deep Index</h4>
            <div className="text-xs text-muted-foreground space-y-1.5">
              <div className="text-accent-blue font-bold">3,500 symbols</div>
              <div className="text-accent-blue font-bold">8,200 imports</div>
              <div className="text-accent-blue font-bold">12,000 calls</div>
            </div>
          </Card>

          <ArrowRight className="h-8 w-8 flex-shrink-0" />

          <Card className="flex-1 p-8 border-2 border-foreground/20 shadow-lg">
            <GitBranch className="h-12 w-12 mb-4" />
            <h4 className="font-bold mb-3 text-lg">Your Repos</h4>
            <p className="text-xs text-muted-foreground">
              GitHub private/public
            </p>
          </Card>
        </div>
        <div className="mt-6 text-base font-bold text-center">
          Result: Truth, not guesses. Production-safe code generation.
        </div>
      </div>
    </div>
  );
};
