import { Play } from "lucide-react";

export const ProductWalkthroughTitle = () => {
  return (
    <div className="flex items-center justify-center min-h-[80vh]">
      <div className="text-center space-y-8">
        <div className="text-9xl font-extrabold mb-12 border-l-8 border-l-accent-purple pl-8 inline-block">
          Glue.tools
        </div>
        
        <div className="flex items-center justify-center mb-8">
          <div className="p-6 rounded-full bg-accent-purple/20 border-2 border-accent-purple">
            <Play className="h-16 w-16 text-accent-purple" />
          </div>
        </div>
        
        <h1 className="text-6xl font-extrabold tracking-tight text-accent-purple">
          Product Walkthrough
        </h1>
        
        <p className="text-2xl text-muted-foreground max-w-2xl mx-auto">
          See it in action
        </p>
      </div>
    </div>
  );
};
