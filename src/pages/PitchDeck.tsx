import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { RedditHook } from "@/components/slides/RedditHook";
import { ProblemQuotes } from "@/components/slides/ProblemQuotes";
import { DIYSolutions } from "@/components/slides/DIYSolutions";
import { CommunityReactions } from "@/components/slides/CommunityReactions";
import { ValidatedPainPoints } from "@/components/slides/ValidatedPainPoints";
import { WhatTheyWant } from "@/components/slides/WhatTheyWant";
import { SolutionHero } from "@/components/slides/SolutionHero";
import { MiddleLayerDiagram } from "@/components/slides/MiddleLayerDiagram";
import { HowItWorks } from "@/components/slides/HowItWorks";
import { MCPTools } from "@/components/slides/MCPTools";
import { BeforeAfter } from "@/components/slides/BeforeAfter";
import { IndexingArchitecture } from "@/components/slides/IndexingArchitecture";
import { TechnicalDifferentiation } from "@/components/slides/TechnicalDifferentiation";
import { FromRedditToReality } from "@/components/slides/FromRedditToReality";
import { Week1Results } from "@/components/slides/Week1Results";
import { WhatTheyreActuallyDoing } from "@/components/slides/WhatTheyreActuallyDoing";
import { TheMoneyQuote } from "@/components/slides/TheMoneyQuote";
import { OrganicGrowth } from "@/components/slides/OrganicGrowth";
import { WhatWeLearned } from "@/components/slides/WhatWeLearned";
import { ThePathForward } from "@/components/slides/ThePathForward";

const slides = [
  { id: 1, component: RedditHook, title: "We Found This on Reddit" },
  { id: 2, component: ProblemQuotes, title: "The Problem, In Their Words" },
  { id: 3, component: DIYSolutions, title: "What They're Building (DIY)" },
  { id: 4, component: CommunityReactions, title: "The Comments Reveal the Market" },
  { id: 5, component: ValidatedPainPoints, title: "The Gap Is Crystal Clear" },
  { id: 6, component: WhatTheyWant, title: "What They Actually Want" },
  { id: 7, component: SolutionHero, title: "So We Built It" },
  { id: 8, component: MiddleLayerDiagram, title: "The Missing Middle Layer" },
  { id: 9, component: HowItWorks, title: "How It Works" },
  { id: 10, component: MCPTools, title: "MCP Tools" },
  { id: 11, component: BeforeAfter, title: "Before vs After" },
  { id: 12, component: IndexingArchitecture, title: "Deep Indexing Architecture" },
  { id: 13, component: TechnicalDifferentiation, title: "Technical Differentiation" },
  { id: 14, component: FromRedditToReality, title: "From Reddit to Reality" },
  { id: 15, component: Week1Results, title: "Week 1 Results" },
  { id: 16, component: WhatTheyreActuallyDoing, title: "What They're Actually Doing" },
  { id: 17, component: TheMoneyQuote, title: "The Money Quote" },
  { id: 18, component: OrganicGrowth, title: "Organic Growth" },
  { id: 19, component: WhatWeLearned, title: "What We Learned" },
  { id: 20, component: ThePathForward, title: "The Path Forward" },
];

const PitchDeck = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        nextSlide();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        prevSlide();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentSlide]);

  const CurrentSlideComponent = slides[currentSlide].component;

  return (
    <div className="h-screen bg-background flex flex-col overflow-hidden">
      {/* Slide Content */}
      <div className="flex-1 flex items-center justify-center p-8 overflow-hidden">
        <div className="w-full max-w-6xl h-full flex items-center justify-center animate-fade-in">
          <div className="w-full max-h-full overflow-y-auto">
            <CurrentSlideComponent />
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="border-t border-border bg-background">
        <div className="container mx-auto px-8 py-4">
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              size="sm"
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className="hover:bg-accent-blue/10 hover:text-accent-blue"
            >
              <ChevronLeft className="mr-2 h-4 w-4" />
              Previous
            </Button>

            <div className="flex items-center gap-2">
              {slides.map((slide, index) => (
                <button
                  key={slide.id}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentSlide
                      ? "w-8 bg-accent-blue"
                      : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="ghost"
              size="sm"
              onClick={nextSlide}
              disabled={currentSlide === slides.length - 1}
              className="hover:bg-accent-blue/10 hover:text-accent-blue"
            >
              Next
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="text-center mt-2 text-sm text-muted-foreground">
            {currentSlide + 1} / {slides.length} - {slides[currentSlide].title}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PitchDeck;
