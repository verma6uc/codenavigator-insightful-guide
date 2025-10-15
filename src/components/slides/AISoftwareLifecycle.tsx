import lifecycleImage from "@/assets/ai-software-lifecycle.png";

export const AISoftwareLifecycle = () => {
  return (
    <div className="flex items-center justify-center min-h-[80vh] p-8">
      <div className="w-full max-w-7xl flex flex-col lg:flex-row items-center gap-8">
        <div className="flex-1 rounded-lg overflow-hidden border border-border shadow-2xl">
          <img 
            src={lifecycleImage} 
            alt="AI Software Development Lifecycle" 
            className="w-full h-auto"
          />
        </div>
        <div className="flex-1 space-y-6">
          <h2 className="text-4xl font-bold text-foreground">
            Glue.tools plays in 3 steps of the AI Software Development Lifecycle:
          </h2>
          <ol className="space-y-4 text-2xl text-foreground/90">
            <li className="flex items-start">
              <span className="font-bold mr-3">1.</span>
              <span>Aggregate Feedback</span>
            </li>
            <li className="flex items-start">
              <span className="font-bold mr-3">2.</span>
              <span>Planning & Architecture</span>
            </li>
            <li className="flex items-start">
              <span className="font-bold mr-3">3.</span>
              <span>PR Review</span>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};
