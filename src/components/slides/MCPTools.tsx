import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const MCPTools = () => {
  const tools = [
    {
      name: "who_calls()",
      call: 'who_calls("handlePayment")',
      result: "→ Returns: 47 call sites across 12 files",
      impact: "→ Context: Payment flow, refund logic, webhook handlers",
      header: "Safe refactoring",
      description: "Know every caller before changing a function",
      tech: "Uses: TypeScript Language Service • findReferences API • Symbol resolution",
    },
    {
      name: "impact_of()",
      call: 'impact_of("src/auth/jwt.ts")',
      result: "→ Blast radius: 23 files, 89 functions, 156 call sites",
      impact: "→ Risk: HIGH - Core authentication module",
      header: "Change risk analysis",
      description: "See downstream impact before modifying",
      tech: "Uses: Dependency graph traversal • Recursive CTE queries • PostgreSQL",
    },
    {
      name: "search_code()",
      call: 'search_code("database transaction patterns")',
      result: "→ Found: 34 transaction handlers in 18 files",
      impact: "→ Patterns: All use sequelize • 28 have retry logic • 6 missing error handling",
      header: "Semantic search",
      description: "Find patterns, not just text matches",
      tech: "Uses: Symbol indexing • AST pattern matching • Framework detection",
    },
    {
      name: "get_file_symbols()",
      call: 'get_file_symbols("src/api/users.ts", visibility="export")',
      result: "→ Found: 12 exported symbols (8 functions, 3 types, 1 class)",
      impact: "→ Public API surface: UserController, createUser(), User type",
      header: "API discovery",
      description: "Understand public interfaces without reading code",
      tech: "Uses: TypeScript Compiler API • Type checker • JSDoc extraction",
    },
    {
      name: "file_change_impact_analysis()",
      call: 'file_change_impact_analysis("src/db/schema.ts")',
      result: "→ Upstream: 3 migration files • Downstream: 47 model files, 89 services",
      impact: "→ Breaking change risk: HIGH - Database schema change affects entire app",
      header: "Pre-merge analysis",
      description: "Understand full impact before code review",
      tech: "Uses: Bidirectional dependency graph • Impact scoring • Risk classification",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] p-8">
      <h2 className="text-4xl font-extrabold tracking-tight mb-6">
        The Glue.tools Magic
      </h2>
      
      <p className="text-xl text-muted-foreground mb-16">
        5 tools that give AI superpowers (the exact capabilities developers asked for)
      </p>
      
      <div className="space-y-8 max-w-6xl w-full">
        {tools.map((tool, index) => (
          <Card
            key={index}
            className="p-8 border-2 border-foreground/20 border-l-8 border-l-accent-blue bg-muted shadow-lg"
          >
            <div className="grid grid-cols-[1fr,2fr] gap-8">
              {/* Left: Tool call */}
              <div className="font-mono space-y-4">
                <Badge variant="outline" className="border-2 border-accent-blue text-accent-blue mb-3 font-bold">
                  {tool.name}
                </Badge>
                <div className="text-sm font-bold">
                  <span className="text-accent-blue">{tool.name}</span>
                  <span className="text-muted-foreground">(</span>
                  <span className="text-accent-green">"{tool.call.split('"')[1]}"</span>
                  <span className="text-muted-foreground">)</span>
                </div>
                <div className="text-xs text-muted-foreground leading-relaxed">
                  <div className="mb-2">{tool.result}</div>
                  <div>{tool.impact}</div>
                </div>
              </div>

              {/* Right: Context + tech */}
              <div className="space-y-4 border-l-2 border-accent-blue/30 pl-6">
                <div>
                  <div className="text-base font-bold mb-2">{tool.header}</div>
                  <div className="text-sm leading-relaxed text-muted-foreground">{tool.description}</div>
                </div>
                <div>
                  <div className="text-xs font-bold mb-2 text-muted-foreground">TECHNICAL:</div>
                  <div className="text-xs text-muted-foreground font-mono leading-relaxed">
                    {tool.tech}
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <Card className="max-w-4xl mt-12 p-8 border-2 border-foreground/20 shadow-lg">
        <p className="text-center text-lg leading-relaxed">
          <span className="font-bold text-accent-blue">Model Context Protocol (MCP)</span> by Anthropic<br/>
          <span className="text-muted-foreground text-sm">
            Our custom MCP server exposes these tools to any AI that supports MCP (Claude, ChatGPT, local models)
          </span>
        </p>
      </Card>
    </div>
  );
};
