import { Card } from "@/components/ui/card";
import { ArrowRight, TrendingUp } from "lucide-react";

export const ThePathForward = () => {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-3">
        <h1 className="text-4xl font-extrabold tracking-tight">
          The Path Forward
        </h1>
        <p className="text-lg text-muted-foreground">
          From pilots to scale
        </p>
      </div>

      {/* Current State vs Next 90 Days */}
      <div className="grid grid-cols-[1fr,auto,1fr] gap-6 items-center">
        {/* Current State */}
        <Card className="p-6 border-2 border-white/20">
          <div className="text-center mb-4">
            <div className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-4">
              Current State
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Active pilots</span>
              <span className="text-2xl font-bold text-accent-blue">23</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">MRR</span>
              <span className="text-2xl font-bold text-muted-foreground">$0</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Retention</span>
              <span className="text-2xl font-bold text-accent-green">89%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Waitlist</span>
              <span className="text-2xl font-bold text-accent-blue">312</span>
            </div>
          </div>
        </Card>

        {/* Arrow */}
        <div className="flex flex-col items-center gap-2">
          <ArrowRight className="h-12 w-12 text-accent-green" />
          <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
            90 days
          </span>
        </div>

        {/* Next 90 Days */}
        <Card className="p-6 bg-accent-green/10 border-2 border-accent-green">
          <div className="text-center mb-4">
            <div className="text-sm font-bold text-accent-green uppercase tracking-wider mb-4">
              Next 90 Days
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Paid users</span>
              <span className="text-2xl font-bold text-accent-green">100</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">MRR @ $99/mo</span>
              <span className="text-2xl font-bold text-accent-green">$9,900</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Target retention</span>
              <span className="text-2xl font-bold text-accent-green">90%+</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Referral rate</span>
              <span className="text-2xl font-bold text-accent-green">3x</span>
            </div>
          </div>
        </Card>
      </div>

      {/* Pricing Validation */}
      <Card className="p-6 bg-accent-blue/5 border-accent-blue/20">
        <div className="flex items-start gap-3">
          <TrendingUp className="h-6 w-6 text-accent-blue flex-shrink-0" />
          <div className="flex-1">
            <div className="font-bold text-lg mb-2">Pricing Already Validated</div>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-3xl font-bold text-accent-green">18</span>
                <span className="text-muted-foreground"> / 23 pilots</span>
                <div className="text-xs text-muted-foreground mt-1">Said they'd pay $99/month</div>
              </div>
              <div>
                <span className="text-3xl font-bold text-accent-green">5</span>
                <span className="text-muted-foreground"> / 23 pilots</span>
                <div className="text-xs text-muted-foreground mt-1">Asked about team pricing (higher ACV)</div>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Go-to-Market Strategy */}
      <div className="grid grid-cols-3 gap-4">
        <Card className="p-4 text-center">
          <div className="text-2xl font-bold text-accent-blue mb-1">Week 1-4</div>
          <div className="text-sm text-muted-foreground">Convert waitlist to paid</div>
        </Card>
        <Card className="p-4 text-center">
          <div className="text-2xl font-bold text-accent-blue mb-1">Week 5-8</div>
          <div className="text-sm text-muted-foreground">Referral program launch</div>
        </Card>
        <Card className="p-4 text-center">
          <div className="text-2xl font-bold text-accent-blue mb-1">Week 9-12</div>
          <div className="text-sm text-muted-foreground">Team tier rollout</div>
        </Card>
      </div>

      {/* Bottom Statement */}
      <div className="text-center pt-4">
        <p className="text-2xl font-bold">
          We're not guessing. The market is <span className="text-accent-green">pulling us forward</span>.
        </p>
      </div>
    </div>
  );
};
