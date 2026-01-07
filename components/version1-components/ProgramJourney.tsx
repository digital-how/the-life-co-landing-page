"use client"
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ProgramJourney() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const phases = [
    {
      number: "1",
      title: "Day 1 — Arrival & Assessment",
      subtitle: "Setting the foundation",
      items: [
        "Medical check-in and full health assessment",
        "Body composition analysis and live blood analysis",
        "Medical consultation and optional advanced diagnostics",
        "Wellness coach consultation and program personalisation",
        "Selection of nutrition plan, therapies, and treatments"
      ],
      closing: "Your body is assessed, not assumed. Everything begins with precision."
    },
    {
      number: "2",
      title: "Days 2–3 — Adaptation Phase",
      subtitle: "Allowing the body to adjust",
      items: [
        "Gentle detoxification begins",
        "Nervous system regulation and stress reduction",
        "Initial metabolic adjustment",
        "Light movement, breathwork, and restorative therapies",
        "Close medical and wellness observation"
      ],
      closing: "This phase is about safety, support, and letting the body settle into a new rhythm."
    },
    {
      number: "3",
      title: "Days 4–7 — Activation & Momentum",
      subtitle: "Where visible change often begins",
      items: [
        "Increased metabolic efficiency",
        "Enhanced fat utilisation",
        "Deeper detoxification response",
        "Structured movement and biohacking therapies",
        "Many guests begin to notice clearer energy and early weight changes"
      ],
      closing: "For many, this is where motivation returns — naturally."
    },
    {
      number: "4",
      title: "Days 8–14 — Transformation Phase",
      subtitle: "Strengthening results (for longer stays)",
      items: [
        "Continued fat loss support",
        "Stabilisation of blood sugar and appetite signals",
        "Mental clarity and emotional balance deepen",
        "Body adapts to sustainable patterns rather than short-term fixes"
      ],
      closing: "Weight loss becomes a response, not a struggle."
    },
    {
      number: "5",
      title: "Final Day — Integration & Preparation",
      subtitle: "Leaving with clarity, not questions",
      items: [
        "Follow-up body composition and blood analysis",
        "Medical and wellness check-out consultations",
        "Personalised guidance for life beyond the retreat",
        "Lifestyle Companion App registration",
        "Post-program support and follow-up options"
      ],
      closing: "You leave with understanding — not just results."
    }
  ];

  const handlePrevious = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(phases.length - 1, prev + 1));
  };

  return (
    <section className="py-20 bg-[#faf9f7]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-12 text-center">
          <p className="text-sm tracking-widest text-gray-500 uppercase mb-3">
            YOUR PROGRAM JOURNEY
          </p>
          <h2 className="text-4xl md:text-5xl mb-4" style={{ color: '#01609C' }}>
            The Journey Explained
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            From the moment you arrive to your departure, every phase of your stay is thoughtfully designed to support transformation.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative lg:px-16">
          {/* Navigation Arrows - Hidden on mobile, positioned outside on desktop */}
          <Button
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            variant="ghost"
            size="icon"
            className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg hover:bg-gray-50 disabled:opacity-30 disabled:cursor-not-allowed rounded-full w-12 h-12"
          >
            <ChevronLeft className="w-6 h-6" style={{ color: '#01609C' }} />
          </Button>

          <Button
            onClick={handleNext}
            disabled={currentIndex >= phases.length - 1}
            variant="ghost"
            size="icon"
            className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg hover:bg-gray-50 disabled:opacity-30 disabled:cursor-not-allowed rounded-full w-12 h-12"
          >
            <ChevronRight className="w-6 h-6" style={{ color: '#01609C' }} />
          </Button>

          {/* Scrollable Cards Container */}
          <div className="overflow-hidden">
            <div 
              className="flex gap-6 transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {phases.map((phase, index) => (
                <div 
                  key={index} 
                  className="flex-shrink-0 w-full"
                >
                  <div className="bg-white rounded-lg p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
                    {/* Phase Title */}
                    <div className="mb-6">
                      <h3 className="text-xl md:text-2xl mb-2" style={{ color: '#01609C' }}>
                        {phase.title}
                      </h3>
                      <p className="text-sm md:text-base text-gray-600 italic">
                        {phase.subtitle}
                      </p>
                    </div>

                    {/* Items List */}
                    <ul className="space-y-3 mb-6 flex-grow">
                      {phase.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-[#01609C] mt-1 text-sm">•</span>
                          <span className="text-gray-700 text-sm md:text-base leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Closing Statement */}
                    <p className="text-gray-900 italic text-sm md:text-base mt-auto pt-4 border-t border-gray-200">
                      {phase.closing}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Navigation Dots */}
          <div className="flex justify-center gap-2 mt-6 lg:hidden">
            {phases.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  currentIndex === index 
                    ? 'bg-[#01609C] w-8' 
                    : 'bg-gray-300'
                }`}
                aria-label={`Go to phase ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Bottom Text */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-700 italic">
            This is not a schedule — it's a guided physiological journey, supported at every stage.
          </p>
        </div>
      </div>
    </section>
  );
}