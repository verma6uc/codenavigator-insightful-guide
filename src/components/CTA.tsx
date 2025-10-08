import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const CTA = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="relative rounded-3xl overflow-hidden max-w-5xl mx-auto">
          {/* Background with gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-accent -z-10" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(0_0%_100%/0.1)_1px,transparent_1px),linear-gradient(to_bottom,hsl(0_0%_100%/0.1)_1px,transparent_1px)] bg-[size:3rem_3rem] -z-10" />
          
          <div className="relative px-8 py-16 sm:px-16 sm:py-24 text-center space-y-8">
            <h2 className="text-4xl sm:text-5xl font-bold text-white">
              Ready to understand your codebase?
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Join developers who are shipping faster with instant code intelligence. No credit card required.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                variant="secondary"
                className="group bg-white text-primary hover:bg-white/90 hover:scale-105 transition-all"
              >
                Start Free Today
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="group border-white text-white hover:bg-white/10"
              >
                View Demo
              </Button>
            </div>
            <p className="text-sm text-white/80 pt-4">
              3 repositories free · No credit card · 2 minute setup
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
