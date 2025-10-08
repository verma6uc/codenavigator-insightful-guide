import { Card } from "@/components/ui/card";
import { X, Check } from "lucide-react";

const comparisons = [
  {
    feature: "Setup Time",
    traditional: "Weeks of enterprise onboarding",
    codenavigator: "5 minutes to first insight",
  },
  {
    feature: "Use Case",
    traditional: "One-time legacy modernization",
    codenavigator: "Daily developer productivity",
  },
  {
    feature: "Update Frequency",
    traditional: "Manual re-analysis required",
    codenavigator: "Real-time with every commit",
  },
  {
    feature: "Target User",
    traditional: "Enterprise architects",
    codenavigator: "Developers who write code",
  },
  {
    feature: "Pricing Model",
    traditional: "Custom enterprise deals",
    codenavigator: "Transparent, starts free",
  },
];

export const Comparison = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[var(--gradient-subtle)]">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold">
            Not your typical enterprise tool
          </h2>
          <p className="text-xl text-muted-foreground">
            Built for the GitHub generation, not legacy systems
          </p>
        </div>

        <Card className="max-w-4xl mx-auto overflow-hidden border-border/50">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-muted/50">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Feature</th>
                  <th className="px-6 py-4 text-left font-semibold">
                    <div className="flex items-center gap-2">
                      <X className="h-5 w-5 text-muted-foreground" />
                      Traditional Tools
                    </div>
                  </th>
                  <th className="px-6 py-4 text-left font-semibold">
                    <div className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-primary" />
                      CodeNavigator
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/50">
                {comparisons.map((item, index) => (
                  <tr key={index} className="hover:bg-muted/30 transition-colors">
                    <td className="px-6 py-4 font-medium">{item.feature}</td>
                    <td className="px-6 py-4 text-muted-foreground">{item.traditional}</td>
                    <td className="px-6 py-4 text-primary font-medium">{item.codenavigator}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </section>
  );
};
