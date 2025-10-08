import { Card } from "@/components/ui/card";

export const MCPTools = () => {
  const tools = [
    {
      call: 'who_calls("handlePayment")',
      result: "→ Returns: 47 call sites across 12 files",
      impact: "→ Impact: Payment flow, refund logic, webhook handlers",
    },
    {
      call: 'impact_of("src/auth/jwt.ts")',
      result: "→ Blast radius: 23 files, 89 functions",
      impact: "→ Risk: HIGH - Core authentication module",
    },
    {
      call: 'search_code("database transaction patterns")',
      result: "→ Found: 34 transaction handlers",
      impact: "→ Context: All use sequelize with retry logic",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] p-8">
      <h2 className="text-5xl font-bold tracking-tight mb-4">
        The Magic: MCP Tools
      </h2>
      
      <p className="text-xl text-muted-foreground mb-12">
        The exact capabilities developers asked for
      </p>
      
      <div className="space-y-6 max-w-4xl w-full">
        {tools.map((tool, index) => (
          <Card
            key={index}
            className="p-6 border-2 border-foreground/20 border-l-4 border-l-foreground bg-muted"
          >
            <div className="font-mono space-y-2">
              <div className="text-lg font-bold mb-3">
                {tool.call}
              </div>
              <div className="text-sm text-muted-foreground pl-4">
                {tool.result}
              </div>
              <div className="text-sm text-muted-foreground pl-4">
                {tool.impact}
              </div>
            </div>
          </Card>
        ))}
      </div>

      <Card className="max-w-3xl mt-12 p-4 border-2 border-foreground/20 bg-background">
        <p className="text-center text-muted-foreground">
          "The tools developers asked for in those Reddit threads"
        </p>
      </Card>
    </div>
  );
};
