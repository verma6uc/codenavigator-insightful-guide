import { Card, CardContent } from "@/components/ui/card";
import { Users, Code, Target, TrendingUp } from "lucide-react";

const personas = [
  {
    icon: Code,
    role: "Developers",
    what: "Stop wasting time on feature scoping",
    outcome: "Get accurate technical specs in minutes, not days"
  },
  {
    icon: Target,
    role: "Product Managers",
    what: "Get reliable engineering estimates without endless meetings",
    outcome: "Plan roadmaps with confidence and real data"
  },
  {
    icon: TrendingUp,
    role: "Engineering Managers",
    what: "Improve team velocity and predictability",
    outcome: "Ship 40% faster with fewer surprises"
  },
  {
    icon: Users,
    role: "CTOs & VPs",
    what: "Turn feature planning from weeks to minutes",
    outcome: "Scale engineering without scaling planning overhead"
  }
];

export const WhoItsFor = () => {
  return (
    <div className="space-y-10 py-8">
      <div className="text-center space-y-4">
        <h1 className="text-6xl font-bold gradient-text">
          Who It's For
        </h1>
        <p className="text-2xl text-muted-foreground max-w-3xl mx-auto">
          From solo developers to enterprise teams
        </p>
      </div>

      <div className="grid grid-cols-2 gap-6 max-w-5xl mx-auto">
        {personas.map((persona) => {
          const Icon = persona.icon;
          return (
            <Card key={persona.role} className="hover:scale-105 transition-transform duration-300">
              <CardContent className="p-8 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-accent-blue/20">
                    <Icon className="w-8 h-8 text-accent-blue" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">
                    {persona.role}
                  </h3>
                </div>
                
                <div className="space-y-3 pl-1">
                  <div>
                    <p className="text-sm font-semibold text-accent-blue uppercase tracking-wide">
                      What They Need
                    </p>
                    <p className="text-lg text-foreground mt-1">
                      {persona.what}
                    </p>
                  </div>
                  
                  <div>
                    <p className="text-sm font-semibold text-accent-green uppercase tracking-wide">
                      What They Get
                    </p>
                    <p className="text-lg text-foreground mt-1">
                      {persona.outcome}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="text-center pt-6">
        <Card className="inline-block bg-accent-purple/10 border-accent-purple/30">
          <CardContent className="p-6">
            <p className="text-xl text-foreground">
              <span className="font-bold text-accent-purple">One platform.</span>{" "}
              Every role in the development process gets what they need.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
