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
  { id: 1, component: RedditHook, title: "We Found This on Reddit", section: "Problem" },
  { id: 2, component: ProblemQuotes, title: "The Problem, In Their Words", section: "Problem" },
  { id: 3, component: DIYSolutions, title: "What They're Building (DIY)", section: "Problem" },
  { id: 4, component: CommunityReactions, title: "The Comments Reveal the Market", section: "Problem" },
  { id: 5, component: ValidatedPainPoints, title: "The Gap Is Crystal Clear", section: "Problem" },
  { id: 6, component: WhatTheyWant, title: "What They Actually Want", section: "Problem" },
  { id: 7, component: SolutionHero, title: "So We Built It", section: "Solution" },
  { id: 8, component: MiddleLayerDiagram, title: "The Missing Middle Layer", section: "Solution" },
  { id: 9, component: HowItWorks, title: "How It Works", section: "Solution" },
  { id: 10, component: MCPTools, title: "MCP Tools", section: "Solution" },
  { id: 11, component: BeforeAfter, title: "Before vs After", section: "Solution" },
  { id: 12, component: IndexingArchitecture, title: "Deep Indexing Architecture", section: "Solution" },
  { id: 13, component: TechnicalDifferentiation, title: "Technical Differentiation", section: "Solution" },
  { id: 14, component: FromRedditToReality, title: "From Reddit to Reality", section: "Traction" },
  { id: 15, component: Week1Results, title: "Week 1 Results", section: "Traction" },
  { id: 16, component: WhatTheyreActuallyDoing, title: "What They're Actually Doing", section: "Traction" },
  { id: 17, component: TheMoneyQuote, title: "The Money Quote", section: "Traction" },
  { id: 18, component: OrganicGrowth, title: "Organic Growth", section: "Traction" },
  { id: 19, component: WhatWeLearned, title: "What We Learned", section: "Traction" },
  { id: 20, component: ThePathForward, title: "The Path Forward", section: "Traction" },
];

const sections = [
  { name: "Problem", color: "accent-red", slides: slides.filter(s => s.section === "Problem") },
  { name: "Solution", color: "accent-blue", slides: slides.filter(s => s.section === "Solution") },
  { name: "Traction", color: "accent-green", slides: slides.filter(s => s.section === "Traction") },
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

  const currentSection = slides[currentSlide].section;
  const sectionProgress = sections.find(s => s.name === currentSection);
  const sectionSlides = sectionProgress?.slides || [];
  const slideIndexInSection = sectionSlides.findIndex(s => s.id === slides[currentSlide].id);

  return (
    <div className="h-screen pitch-deck-bg flex flex-col overflow-hidden">
      {/* Progress Bar */}
      <div className="h-1 bg-background/20 relative">
        <div 
          className="h-full bg-gradient-to-r from-accent-red via-accent-blue to-accent-green transition-all duration-500 ease-out"
          style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
        />
      </div>

      {/* Slide Content */}
      <div className="flex-1 flex items-center justify-center p-8 overflow-hidden">
        <div className="w-full max-w-6xl h-full flex items-center justify-center animate-fade-in">
          <div className="w-full max-h-full overflow-y-auto">
            <CurrentSlideComponent />
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="border-t border-border/50 glass-card">
        <div className="container mx-auto px-8 py-5">
          {/* Section Navigation */}
          <div className="flex items-center justify-center gap-8 mb-4">
            {sections.map((section) => {
              const sectionStart = slides.findIndex(s => s.section === section.name);
              const isActive = currentSection === section.name;
              
              return (
                <button
                  key={section.name}
                  onClick={() => setCurrentSlide(sectionStart)}
                  className={`group flex items-center gap-3 px-4 py-2 rounded-lg transition-all ${
                    isActive 
                      ? `bg-${section.color}/20 text-${section.color}` 
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  }`}
                >
                  <div className="flex items-center gap-1">
                    {section.slides.map((slide, idx) => {
                      const slideIndex = slides.findIndex(s => s.id === slide.id);
                      const isCurrentSlide = slideIndex === currentSlide;
                      
                      return (
                        <div
                          key={slide.id}
                          onClick={(e) => {
                            e.stopPropagation();
                            setCurrentSlide(slideIndex);
                          }}
                          className={`h-1.5 rounded-full transition-all cursor-pointer ${
                            isCurrentSlide
                              ? `w-6 bg-${section.color}`
                              : isActive
                              ? `w-1.5 bg-${section.color}/40 hover:bg-${section.color}/60`
                              : "w-1.5 bg-muted-foreground/20 hover:bg-muted-foreground/40"
                          }`}
                        />
                      );
                    })}
                  </div>
                  <span className="text-sm font-semibold uppercase tracking-wide">
                    {section.name}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Bottom Controls */}
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

            <div className="text-center text-sm">
              <div className="font-semibold text-foreground">
                {slides[currentSlide].title}
              </div>
              <div className="text-xs text-muted-foreground mt-0.5">
                Slide {currentSlide + 1} of {slides.length}
              </div>
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
        </div>
      </div>
    </div>
  );
};

export default PitchDeck;
