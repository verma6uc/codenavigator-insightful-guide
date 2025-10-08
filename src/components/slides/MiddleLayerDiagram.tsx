import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bot, Database, GitBranch, ArrowRight, X } from "lucide-react";

export const MiddleLayerDiagram = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] p-8">
      <h2 className="text-5xl font-bold tracking-tight mb-4">
        The Missing Middle Layer
      </h2>
      <p className="text-xl text-muted-foreground mb-12">
        Why AI hallucinates about code (and how we fix it)
      </p>
      
      {/* Without CodeNavigator */}
      <div className="mb-8 w-full max-w-6xl">
        <Badge variant="outline" className="mb-4 border-2 border-destructive/50 text-destructive">
          ❌ Current State: AI → Codebase (Direct)
        </Badge>
        <div className="flex items-center gap-6">
          <Card className="flex-1 p-6 border-2 border-foreground/20">
            <Bot className="h-10 w-10 mb-2" />
            <p className="text-sm font-mono">AI guesses structure</p>
          </Card>
          <X className="h-8 w-8 text-destructive" />
          <Card className="flex-1 p-6 border-2 border-foreground/20">
            <GitBranch className="h-10 w-10 mb-2" />
            <p className="text-sm font-mono">No semantic index</p>
          </Card>
        </div>
        <div className="mt-4 text-sm text-muted-foreground text-center">
          Result: Hallucinations, breaking changes, incorrect assumptions
        </div>
      </div>

      {/* With CodeNavigator */}
      <div className="w-full max-w-6xl">
        <Badge variant="outline" className="mb-4 border-2 border-foreground">
          ✅ With CodeNavigator: AI → MCP → Deep Index → Codebase
        </Badge>
        <div className="flex items-center gap-4">
          <Card className="flex-1 p-6 border-2 border-foreground/20">
            <Bot className="h-10 w-10 mb-3" />
            <h4 className="font-bold mb-2">AI Assistants</h4>
            <p className="text-xs text-muted-foreground">
              Claude • GPT • Cursor
            </p>
          </Card>

          <ArrowRight className="h-6 w-6 flex-shrink-0" />

          <Card className="flex-1 p-6 border-4 border-foreground bg-muted">
            <Database className="h-10 w-10 mb-3" />
            <h4 className="font-bold mb-2">CodeNavigator MCP</h4>
            <div className="text-xs font-mono space-y-1">
              <div>• who_calls()</div>
              <div>• impact_of()</div>
              <div>• search_code()</div>
            </div>
          </Card>

          <ArrowRight className="h-6 w-6 flex-shrink-0" />

          <Card className="flex-1 p-6 border-2 border-foreground/20">
            <Database className="h-10 w-10 mb-3" />
            <h4 className="font-bold mb-2">Deep Index</h4>
            <div className="text-xs text-muted-foreground space-y-1">
              <div>3,500 symbols</div>
              <div>8,200 imports</div>
              <div>12,000 calls tracked</div>
            </div>
          </Card>

          <ArrowRight className="h-6 w-6 flex-shrink-0" />

          <Card className="flex-1 p-6 border-2 border-foreground/20">
            <GitBranch className="h-10 w-10 mb-3" />
            <h4 className="font-bold mb-2">Your Repos</h4>
            <p className="text-xs text-muted-foreground">
              GitHub private/public
            </p>
          </Card>
        </div>
        <div className="mt-4 text-sm font-bold text-center">
          Result: Truth, not guesses. Production-safe code generation.
        </div>
      </div>
    </div>
  );
};
