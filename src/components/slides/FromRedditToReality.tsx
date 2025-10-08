import { Card } from "@/components/ui/card";
import { ArrowRight, Users, TrendingUp } from "lucide-react";

export const FromRedditToReality = () => {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-3">
        <h1 className="text-4xl font-bold tracking-tight">
          From Reddit to Reality
        </h1>
        <p className="text-lg text-muted-foreground">
          We gave them early access. Here's what happened...
        </p>
      </div>

      {/* Funnel */}
      <div className="flex items-center justify-center gap-6">
        <Card className="p-6 bg-background border-2">
          <div className="flex flex-col items-center gap-2">
            <TrendingUp className="h-8 w-8 text-accent-blue" />
            <div className="text-4xl font-bold text-accent-blue">1,200+</div>
            <div className="text-sm text-muted-foreground text-center">Upvotes on Reddit</div>
          </div>
        </Card>

        <ArrowRight className="h-8 w-8 text-muted-foreground" />

        <Card className="p-6 bg-background border-2">
          <div className="flex flex-col items-center gap-2">
            <Users className="h-8 w-8 text-accent-blue" />
            <div className="text-4xl font-bold text-accent-blue">87</div>
            <div className="text-sm text-muted-foreground text-center">Beta Signups</div>
          </div>
        </Card>

        <ArrowRight className="h-8 w-8 text-muted-foreground" />

        <Card className="p-6 bg-accent-blue/10 border-2 border-accent-blue">
          <div className="flex flex-col items-center gap-2">
            <Users className="h-8 w-8 text-accent-blue" />
            <div className="text-4xl font-bold text-accent-blue">23</div>
            <div className="text-sm text-muted-foreground text-center">Active Pilot Users</div>
          </div>
        </Card>
      </div>

      {/* Timeline */}
      <Card className="p-6 bg-accent-blue/5 border-accent-blue/20">
        <div className="flex items-center justify-between text-sm">
          <div className="flex flex-col items-center">
            <div className="font-bold text-accent-blue mb-1">Jan 15, 2025</div>
            <div className="text-muted-foreground">Reddit post goes live</div>
          </div>
          <div className="h-px flex-1 bg-accent-blue/30 mx-4" />
          <div className="flex flex-col items-center">
            <div className="font-bold text-accent-blue mb-1">Jan 22, 2025</div>
            <div className="text-muted-foreground">First pilot user</div>
          </div>
          <div className="h-px flex-1 bg-accent-blue/30 mx-4" />
          <div className="flex flex-col items-center">
            <div className="font-bold text-accent-blue mb-1">Feb 5, 2025</div>
            <div className="text-muted-foreground">23 active users</div>
          </div>
        </div>
      </Card>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4">
        <Card className="p-4 text-center">
          <div className="text-2xl font-bold text-accent-blue mb-1">26%</div>
          <div className="text-xs text-muted-foreground">Signup conversion rate</div>
        </Card>
        <Card className="p-4 text-center">
          <div className="text-2xl font-bold text-accent-blue mb-1">14 days</div>
          <div className="text-xs text-muted-foreground">Time to 23 active users</div>
        </Card>
        <Card className="p-4 text-center">
          <div className="text-2xl font-bold text-accent-blue mb-1">$0</div>
          <div className="text-xs text-muted-foreground">Spent on marketing</div>
        </Card>
      </div>
    </div>
  );
};
