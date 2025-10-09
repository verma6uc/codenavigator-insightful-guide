import { Card } from "@/components/ui/card";
import { DollarSign, Clock, Users } from "lucide-react";

export const TheMoneyQuote = () => {
  return (
    <div className="flex flex-col justify-center h-full space-y-8">
      {/* Main Quote Card */}
      <Card className="p-8 border-l-8 border-l-accent-green bg-accent-green/5">
        <blockquote className="text-2xl leading-relaxed italic mb-6 text-center">
          "I was about to hire a consultant to document our legacy codebase. <span className="font-bold text-accent-green">$15K quote</span>. Glue.tools generated the docs in <span className="font-bold text-accent-blue">6 minutes</span>. I'm canceling the consultant."
        </blockquote>
        <div className="text-center">
          <div className="font-bold text-lg">Sarah K.</div>
          <div className="text-sm text-muted-foreground">Engineering Manager at [Redacted SaaS]</div>
        </div>
      </Card>

      {/* Metric Callouts */}
      <div className="grid grid-cols-3 gap-6">
        <Card className="p-6 text-center bg-accent-green/10 border-2 border-accent-green/30">
          <DollarSign className="h-10 w-10 text-accent-green mx-auto mb-3" />
          <div className="text-4xl font-bold text-accent-green mb-2">$15,000</div>
          <div className="text-sm text-muted-foreground">Cost avoided</div>
        </Card>

        <Card className="p-6 text-center bg-accent-blue/10 border-2 border-accent-blue/30">
          <Clock className="h-10 w-10 text-accent-blue mx-auto mb-3" />
          <div className="text-4xl font-bold text-accent-blue mb-2">6 min</div>
          <div className="text-sm text-muted-foreground">vs 2 weeks</div>
        </Card>

        <Card className="p-6 text-center bg-accent-green/10 border-2 border-accent-green/30">
          <Users className="h-10 w-10 text-accent-green mx-auto mb-3" />
          <div className="text-4xl font-bold text-accent-green mb-2">3 teams</div>
          <div className="text-sm text-muted-foreground">Already recommended to</div>
        </Card>
      </div>

      {/* Bottom Statement */}
      <div className="text-center pt-4">
        <p className="text-xl font-medium">
          This isn't a <span className="text-muted-foreground">nice-to-have</span>. It's a <span className="text-accent-green font-bold">budget line item</span>.
        </p>
      </div>
    </div>
  );
};
