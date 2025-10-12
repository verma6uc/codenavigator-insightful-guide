import { Card } from "@/components/ui/card";
import { Lightbulb } from "lucide-react";

export const TheBiggerPlay = () => {
  return (
    <div className="flex items-center justify-center min-h-[80vh]">
      <div className="max-w-5xl space-y-8 text-center">
        <div className="flex justify-center mb-6">
          <Lightbulb className="h-20 w-20 text-accent-blue" />
        </div>

        <h1 className="text-5xl font-bold tracking-tight">
          Then We Realized Something Bigger
        </h1>

        <Card className="p-12 border-2 border-accent-blue">
          <p className="text-3xl leading-relaxed">
            If we have <span className="font-bold text-accent-blue">complete codebase understanding</span>...
          </p>
          <p className="text-3xl leading-relaxed mt-6">
            We don't just help developers <span className="font-bold">query</span> code.
          </p>
          <p className="text-4xl font-bold mt-8 text-accent-blue">
            We can help them PLAN the next feature.
          </p>
        </Card>

        <div className="text-2xl text-muted-foreground pt-4">
          Same infrastructure. Exponentially more valuable.
        </div>
      </div>
    </div>
  );
};
