import { Card } from "@/components/ui/card";
import { AlertTriangle, CheckCircle2 } from "lucide-react";

export const BeforeAfter = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] p-8">
      <h2 className="text-5xl font-bold tracking-tight mb-16">
        Before vs After
      </h2>
      
      <div className="grid grid-cols-2 gap-8 max-w-6xl w-full mb-8">
        {/* Before */}
        <Card className="p-8 border-4 border-destructive/50 bg-destructive/5">
          <div className="flex items-start gap-4 mb-6">
            <AlertTriangle className="h-8 w-8 text-destructive flex-shrink-0" />
            <div>
              <h3 className="text-2xl font-bold mb-2">Without CodeNavigator</h3>
              <p className="text-sm text-muted-foreground">AI operating blind</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="p-4 bg-background border-2 border-foreground/20 rounded">
              <p className="font-mono text-sm mb-2">
                <span className="font-bold">AI:</span> "Just rename this function, it looks unused"
              </p>
            </div>
            
            <div className="p-4 bg-destructive/10 border-2 border-destructive rounded">
              <p className="text-sm font-bold mb-1">❌ Result:</p>
              <p className="text-sm text-muted-foreground">
                Breaks production in 47 places
              </p>
            </div>
          </div>
        </Card>

        {/* After */}
        <Card className="p-8 border-4 border-foreground bg-muted">
          <div className="flex items-start gap-4 mb-6">
            <CheckCircle2 className="h-8 w-8 flex-shrink-0" />
            <div>
              <h3 className="text-2xl font-bold mb-2">With CodeNavigator</h3>
              <p className="text-sm text-muted-foreground">AI with ground truth</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="p-4 bg-background border-2 border-foreground/20 rounded">
              <p className="font-mono text-sm mb-2">
                <span className="font-bold">AI:</span> "This function has 47 callers. Safe refactoring requires..."
              </p>
            </div>
            
            <div className="p-4 bg-muted border-2 border-foreground rounded">
              <p className="text-sm font-bold mb-1">✅ Result:</p>
              <p className="text-sm text-muted-foreground">
                Production-safe with migration plan
              </p>
            </div>
          </div>
        </Card>
      </div>

      <Card className="max-w-3xl p-6 border-l-4 border-l-foreground bg-background">
        <p className="text-2xl text-center font-bold">
          From guessing to knowing in 0.3 seconds
        </p>
      </Card>
    </div>
  );
};
