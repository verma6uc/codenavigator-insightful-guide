import { Card } from "@/components/ui/card";
import { Bot, Database, GitBranch, ArrowRight } from "lucide-react";

export const MiddleLayerDiagram = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] p-8">
      <h2 className="text-5xl font-bold tracking-tight mb-16">
        The Missing Middle Layer
      </h2>
      
      <div className="flex items-center gap-6 mb-12 max-w-6xl w-full">
        {/* AI Side */}
        <Card className="flex-1 p-8 border-2 border-foreground/20 text-center">
          <Bot className="h-16 w-16 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-3">AI Coding Assistants</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Claude • GPT • Cursor • Windsurf • Copilot
          </p>
        </Card>

        <ArrowRight className="h-8 w-8 flex-shrink-0" />

        {/* Middle Layer */}
        <Card className="flex-1 p-8 border-4 border-foreground bg-muted text-center">
          <Database className="h-16 w-16 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-3">CodeNavigator.io</h3>
          <p className="text-sm text-muted-foreground leading-relaxed font-mono">
            MCP Tools • Deep Analysis • Truth Layer
          </p>
        </Card>

        <ArrowRight className="h-8 w-8 flex-shrink-0" />

        {/* Codebase Side */}
        <Card className="flex-1 p-8 border-2 border-foreground/20 text-center">
          <GitBranch className="h-16 w-16 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-3">Your Codebase</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            GitHub • Private repos • Any language
          </p>
        </Card>
      </div>

      <Card className="max-w-3xl p-6 border-l-4 border-l-foreground bg-muted">
        <p className="text-xl text-center">
          Truth, not guesses. Context, not hallucinations.
        </p>
      </Card>
    </div>
  );
};
