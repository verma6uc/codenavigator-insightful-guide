import { Card } from "@/components/ui/card";
import { Activity, Users, Clock, Repeat } from "lucide-react";

const metrics = [
  {
    icon: Activity,
    value: "547",
    label: "Total queries processed",
    color: "text-accent-blue",
  },
  {
    icon: Users,
    value: "23.8",
    label: "Queries per user (avg)",
    color: "text-accent-blue",
  },
  {
    icon: Repeat,
    value: "89%",
    label: "Next-day retention",
    color: "text-accent-green",
  },
  {
    icon: Clock,
    value: "4.2 hrs",
    label: "Saved per user (self-reported)",
    color: "text-accent-green",
  },
];

export const Week1Results = () => {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-3">
        <h1 className="text-4xl font-bold tracking-tight">
          Week 1 Results: They Actually Used It
        </h1>
        <p className="text-lg text-muted-foreground">
          Real usage data from the first 7 days
        </p>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-2 gap-6">
        {metrics.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <Card key={index} className="p-6 bg-background border-2 hover:border-accent-blue/50 transition-colors">
              <div className="flex items-start gap-4">
                <Icon className={`h-8 w-8 ${metric.color} flex-shrink-0`} />
                <div>
                  <div className={`text-4xl font-bold ${metric.color} mb-2`}>
                    {metric.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {metric.label}
                  </div>
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Quote Card */}
      <Card className="p-6 border-l-4 border-l-accent-blue bg-accent-blue/5">
        <blockquote className="text-base leading-relaxed italic mb-3">
          "I indexed my React codebase in 45 seconds. search_feature_files found every auth reference instantly. This is the tool I've been trying to build for 3 months."
        </blockquote>
        <div className="flex items-center gap-2">
          <div className="h-px flex-1 bg-border" />
          <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
            @devUsername, Senior Engineer
          </span>
        </div>
      </Card>

      <div className="text-center pt-2">
        <p className="text-xl font-medium">
          They didn't just <span className="text-accent-blue font-bold">try it</span>. They <span className="text-accent-green font-bold">kept using it</span>.
        </p>
      </div>
    </div>
  );
};
