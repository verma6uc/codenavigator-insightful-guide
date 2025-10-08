import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, CheckCircle2 } from "lucide-react";

export const BeforeAfter = () => {
  const scenarios = [
    {
      scenario: "Refactoring a Core Function",
      without: {
        prompt: 'User: "Can I safely rename handlePayment to processPayment?"',
        ai: 'AI: "Yes, looks like it\'s only used in a few places. Safe to rename."',
        result: "❌ Breaks production in 47 call sites across 12 files",
        cost: "3 hours debugging • $50K revenue lost • 2 engineers pulled from sprint",
      },
      with: {
        prompt: 'User: "Can I safely rename handlePayment to processPayment?"',
        ai: 'AI uses who_calls("handlePayment")\n→ Returns: 47 call sites in 12 files\nAI: "This function has 47 callers. Here\'s a safe migration strategy: 1) Add new function 2) Deprecate old 3) Update callers in 3 PRs..."',
        result: "✅ Production-safe refactor with automated migration plan",
        cost: "15 minutes • Zero downtime • Full test coverage",
      },
    },
    {
      scenario: "Understanding Impact of a Change",
      without: {
        prompt: 'User: "What\'s affected if I change this auth file?"',
        ai: 'AI: "Probably just the login flow. Should be safe."',
        result: "❌ Breaks authentication system-wide • 23 downstream files affected",
        cost: "Hotfix deployment • Post-mortem • Customer complaints",
      },
      with: {
        prompt: 'User: "What\'s affected if I change this auth file?"',
        ai: 'AI uses impact_of("src/auth/jwt.ts")\n→ Blast radius: 23 files, 89 functions\n→ Risk: HIGH - Core auth module\nAI: "This affects the entire auth system. Requires: Integration tests, staged rollout, DB migration..."',
        result: "✅ Full impact analysis before making changes",
        cost: "Planning meeting • Safe deployment • Zero incidents",
      },
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] p-8">
      <h2 className="text-5xl font-bold tracking-tight mb-4">
        Before vs After
      </h2>
      <p className="text-xl text-muted-foreground mb-12">
        Real scenarios, real cost savings
      </p>
      
      <div className="space-y-12 max-w-7xl w-full">
        {scenarios.map((item, idx) => (
          <div key={idx} className="space-y-4">
            <Badge variant="outline" className="border-2 border-foreground text-lg px-4 py-2">
              Scenario {idx + 1}: {item.scenario}
            </Badge>
            
            <div className="grid grid-cols-2 gap-6">
              {/* Before */}
              <Card className="p-6 border-4 border-destructive/50 bg-destructive/5">
                <div className="flex items-start gap-3 mb-4">
                  <AlertTriangle className="h-6 w-6 text-destructive flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold mb-1">Without CodeNavigator</h3>
                    <p className="text-xs text-muted-foreground">AI guessing structure</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="p-3 bg-background border border-foreground/20 rounded">
                    <p className="font-mono text-xs leading-relaxed whitespace-pre-line">
                      {item.without.prompt}<br/><br/>
                      <span className="font-bold">AI:</span> {item.without.ai}
                    </p>
                  </div>
                  
                  <div className="p-3 bg-destructive/10 border-2 border-destructive rounded">
                    <p className="text-xs font-bold mb-1">ACTUAL RESULT:</p>
                    <p className="text-xs leading-relaxed mb-2">{item.without.result}</p>
                    <p className="text-xs text-muted-foreground font-mono">
                      Cost: {item.without.cost}
                    </p>
                  </div>
                </div>
              </Card>

              {/* After */}
              <Card className="p-6 border-4 border-foreground bg-muted">
                <div className="flex items-start gap-3 mb-4">
                  <CheckCircle2 className="h-6 w-6 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold mb-1">With CodeNavigator</h3>
                    <p className="text-xs text-muted-foreground">AI with MCP tools</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="p-3 bg-background border border-foreground/20 rounded">
                    <p className="font-mono text-xs leading-relaxed whitespace-pre-line">
                      {item.with.prompt}<br/><br/>
                      <span className="font-bold">AI:</span> {item.with.ai}
                    </p>
                  </div>
                  
                  <div className="p-3 bg-muted border-2 border-foreground rounded">
                    <p className="text-xs font-bold mb-1">ACTUAL RESULT:</p>
                    <p className="text-xs leading-relaxed mb-2">{item.with.result}</p>
                    <p className="text-xs text-muted-foreground font-mono">
                      Cost: {item.with.cost}
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        ))}
      </div>

      <Card className="max-w-5xl mt-12 p-8 border-l-4 border-l-foreground bg-background">
        <div className="text-center">
          <p className="text-3xl font-bold mb-4">
            From guessing to knowing in 0.3 seconds
          </p>
          <div className="grid grid-cols-3 gap-6 mt-6 pt-6 border-t-2 border-foreground/20">
            <div>
              <div className="text-2xl font-bold">$50K+</div>
              <div className="text-sm text-muted-foreground">Prevented per incident</div>
            </div>
            <div>
              <div className="text-2xl font-bold">3 hours</div>
              <div className="text-sm text-muted-foreground">Saved per refactor</div>
            </div>
            <div>
              <div className="text-2xl font-bold">100%</div>
              <div className="text-sm text-muted-foreground">Accurate call graphs</div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};
