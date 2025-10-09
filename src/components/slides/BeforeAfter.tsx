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
      <h2 className="text-4xl font-extrabold tracking-tight mb-6">
        Before vs After
      </h2>
      <p className="text-xl text-muted-foreground mb-16">
        Real scenarios, real cost savings
      </p>
      
      <div className="space-y-16 max-w-7xl w-full">
        {scenarios.map((item, idx) => (
          <div key={idx} className="space-y-6">
            <Badge variant="outline" className="border-2 border-foreground text-xl px-6 py-3 font-bold">
              Scenario {idx + 1}: {item.scenario}
            </Badge>
            
            <div className="grid grid-cols-2 gap-8">
              {/* Before */}
              <Card className="p-8 border-8 border-accent-red/50 bg-accent-red/5 shadow-xl">
                <div className="flex items-start gap-3 mb-6">
                  <AlertTriangle className="h-8 w-8 text-accent-red flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-extrabold mb-2">Without Glue.tools</h3>
                    <p className="text-xs text-muted-foreground">AI guessing structure</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="p-4 border border-foreground/20 rounded">
                    <p className="font-mono text-xs leading-relaxed whitespace-pre-line">
                      {item.without.prompt}<br/><br/>
                      <span className="font-bold">AI:</span> {item.without.ai}
                    </p>
                  </div>
                  
                  <div className="p-4 bg-accent-red/10 border-4 border-accent-red rounded">
                    <p className="text-xs font-bold mb-2">ACTUAL RESULT:</p>
                    <p className="text-sm leading-relaxed mb-3">{item.without.result}</p>
                    <p className="text-xs text-muted-foreground font-mono">
                      Cost: {item.without.cost}
                    </p>
                  </div>
                </div>
              </Card>

              {/* After */}
              <Card className="p-8 border-8 border-accent-green bg-accent-green/10 shadow-xl">
                <div className="flex items-start gap-3 mb-6">
                  <CheckCircle2 className="h-8 w-8 text-accent-green flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-extrabold mb-2">With Glue.tools</h3>
                    <p className="text-xs text-muted-foreground">AI with MCP tools</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="p-4 border border-foreground/20 rounded">
                    <p className="font-mono text-xs leading-relaxed whitespace-pre-line">
                      {item.with.prompt}<br/><br/>
                      <span className="font-bold">AI:</span> {item.with.ai}
                    </p>
                  </div>
                  
                  <div className="p-4 bg-accent-green/10 border-4 border-accent-green rounded">
                    <p className="text-xs font-bold mb-2">ACTUAL RESULT:</p>
                    <p className="text-sm leading-relaxed mb-3">{item.with.result}</p>
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

      <Card className="max-w-5xl mt-16 p-12 border-l-8 border-l-accent-blue shadow-xl">
        <div className="text-center">
          <p className="text-4xl font-extrabold mb-6">
            From guessing to knowing in 0.3 seconds
          </p>
          <div className="grid grid-cols-3 gap-8 mt-8 pt-8 border-t-2 border-foreground/20">
            <div>
              <div className="text-4xl font-extrabold text-accent-green">$50K+</div>
              <div className="text-sm text-muted-foreground">Prevented per incident</div>
            </div>
            <div>
              <div className="text-4xl font-extrabold text-accent-green">3 hours</div>
              <div className="text-sm text-muted-foreground">Saved per refactor</div>
            </div>
            <div>
              <div className="text-4xl font-extrabold text-accent-blue">100%</div>
              <div className="text-sm text-muted-foreground">Accurate call graphs</div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};
