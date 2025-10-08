import { Card } from "@/components/ui/card";
import { Users, TrendingUp, UserPlus, Sparkles } from "lucide-react";

const growthIndicators = [
  {
    icon: Users,
    metric: "64",
    label: "Referrals in 14 days",
    subtext: "From 23 pilot users",
    color: "text-accent-green",
  },
  {
    icon: TrendingUp,
    metric: "2.78x",
    label: "Viral coefficient",
    subtext: "Each user refers ~3 others",
    color: "text-accent-green",
  },
  {
    icon: UserPlus,
    metric: "312",
    label: "Waitlist signups",
    subtext: "No paid ads, organic only",
    color: "text-accent-blue",
  },
];

export const OrganicGrowth = () => {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-3">
        <h1 className="text-4xl font-bold tracking-tight">
          Organic Growth is Already Happening
        </h1>
        <p className="text-lg text-muted-foreground">
          They're not just using it. They're telling everyone.
        </p>
      </div>

      {/* Growth Indicators */}
      <div className="grid grid-cols-3 gap-6">
        {growthIndicators.map((indicator, index) => {
          const Icon = indicator.icon;
          return (
            <Card key={index} className="p-6 border-2 border-white/20 text-center">
              <Icon className={`h-10 w-10 ${indicator.color} mx-auto mb-4`} />
              <div className={`text-5xl font-bold ${indicator.color} mb-2`}>
                {indicator.metric}
              </div>
              <div className="text-sm font-semibold mb-1">{indicator.label}</div>
              <div className="text-xs text-muted-foreground">{indicator.subtext}</div>
            </Card>
          );
        })}
      </div>

      {/* Timeline Chart */}
      <Card className="p-6 bg-accent-green/5 border-accent-green/20">
        <div className="mb-4 font-bold text-center">Waitlist Growth (14-day period)</div>
        <div className="flex items-end justify-between gap-2 h-32">
          {[12, 23, 41, 68, 97, 134, 178, 221, 256, 280, 298, 305, 310, 312].map((value, index) => {
            const height = (value / 312) * 100;
            return (
              <div key={index} className="flex-1 flex flex-col items-center">
                <div 
                  className="w-full bg-accent-green rounded-t transition-all"
                  style={{ height: `${height}%` }}
                />
                {index === 13 && (
                  <div className="text-xs font-bold text-accent-green mt-1">{value}</div>
                )}
              </div>
            );
          })}
        </div>
      </Card>

      {/* Quote */}
      <Card className="p-5 border-l-4 border-l-accent-green bg-accent-green/5">
        <div className="flex items-start gap-3">
          <Sparkles className="h-5 w-5 text-accent-green flex-shrink-0 mt-0.5" />
          <div>
            <div className="text-lg font-bold mb-2">12 of 23 pilots came from referrals</div>
            <p className="text-sm text-muted-foreground">
              Not from Reddit. From users telling their teammates and friends.
            </p>
          </div>
        </div>
      </Card>

      <div className="text-center pt-2">
        <p className="text-xl font-medium">
          Network effects are <span className="text-accent-green font-bold">already working</span> at 23 users.
        </p>
      </div>
    </div>
  );
};
