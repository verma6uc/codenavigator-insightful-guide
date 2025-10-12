import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Upload, MessageSquare, FileText, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: Upload,
    title: "Connect Codebase",
    description: "Deep index already built",
    time: "0s",
  },
  {
    icon: MessageSquare,
    title: "Describe Feature",
    description: '"Add user roles and permissions"',
    time: "30s",
  },
  {
    icon: CheckCircle,
    title: "Impact Analysis",
    description: "See what exists, what conflicts, what patterns to follow",
    time: "15s",
  },
  {
    icon: FileText,
    title: "Get Full Dev Plan",
    description: "Entities, relationships, API routes, UI components - all matching your architecture",
    time: "45s",
  },
];

export const FeaturePlanningWorkflow = () => {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-3">
        <Badge variant="outline" className="border-2 border-accent-blue text-accent-blue px-4 py-2">
          The New Workflow
        </Badge>
        <h1 className="text-4xl font-bold tracking-tight">
          From Idea to Dev Plan in 90 Seconds
        </h1>
      </div>

      <div className="flex items-center justify-center gap-6">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <div key={index} className="flex items-center gap-6">
              <Card className="p-6 text-center min-w-[200px] border-2">
                <Icon className="h-10 w-10 mx-auto mb-3 text-accent-blue" />
                <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{step.description}</p>
                <Badge variant="secondary" className="text-xs">{step.time}</Badge>
              </Card>
              {index < steps.length - 1 && (
                <ArrowRight className="h-6 w-6 text-muted-foreground" />
              )}
            </div>
          );
        })}
      </div>

      <Card className="p-8 border-2 border-accent-blue">
        <div className="text-center space-y-4">
          <p className="text-2xl font-bold">
            What You Get:
          </p>
          <div className="grid grid-cols-2 gap-4 text-left max-w-3xl mx-auto">
            <div className="space-y-1">
              <p className="font-semibold">✓ Database schema matching your patterns</p>
              <p className="font-semibold">✓ API routes consistent with existing endpoints</p>
              <p className="font-semibold">✓ UI components using your design system</p>
            </div>
            <div className="space-y-1">
              <p className="font-semibold">✓ Migration scripts that won't break production</p>
              <p className="font-semibold">✓ Test coverage recommendations</p>
              <p className="font-semibold">✓ Accurate time estimates per task</p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};
