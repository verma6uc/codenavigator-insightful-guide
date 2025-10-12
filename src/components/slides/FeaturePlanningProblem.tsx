import { Card } from "@/components/ui/card";
import { Clock, AlertTriangle, Users } from "lucide-react";

const painPoints = [
  {
    icon: Clock,
    title: "Feature Planning Takes Weeks",
    description: "Teams spend 2-3 weeks analyzing codebase, dependencies, and architectural patterns before writing a single line of code",
  },
  {
    icon: AlertTriangle,
    title: "Specs Don't Match Reality",
    description: "Product specs ignore existing patterns, leading to inconsistent architecture and technical debt",
  },
  {
    icon: Users,
    title: "Knowledge Silos",
    description: "Only senior engineers know where things belong. Juniors guess. Everyone wastes time in review cycles.",
  },
];

export const FeaturePlanningProblem = () => {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-3">
        <h1 className="text-4xl font-bold tracking-tight">
          The Feature Planning Problem
        </h1>
        <p className="text-xl text-muted-foreground">
          Even with perfect codebase knowledge, planning is still manual
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {painPoints.map((point, index) => {
          const Icon = point.icon;
          return (
            <Card key={index} className="p-6 border-l-4 border-l-accent-red">
              <div className="flex items-start gap-4">
                <Icon className="h-8 w-8 text-accent-red flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold mb-2">{point.title}</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      <Card className="p-8 bg-muted/30 border-2">
        <p className="text-2xl text-center font-medium">
          Result: <span className="font-bold text-accent-red">30-40% of sprint time</span> spent on planning instead of building
        </p>
      </Card>
    </div>
  );
};
