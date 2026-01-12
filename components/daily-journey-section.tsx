"use client"

import { useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"

export function DailyJourneySection() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const { t } = useLanguage()

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 300
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

  return (
    <section id="daily-journey" className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8 md:mb-10">
            <div className="text-center md:text-left">
              <p className="text-sm font-[family-name:var(--font-inter)] uppercase tracking-widest text-gray-500 mb-4">
                {t.dailyJourney.label}
              </p>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-light leading-tight" style={{ color: '#01609C' }}>
                {t.dailyJourney.title}
              </h2>
              <p className="text-sm md:text-base font-[family-name:var(--font-inter)] text-gray-600 mt-4 max-w-2xl mx-auto md:mx-0">
                {t.dailyJourney.description}
              </p>
            </div>
            {/* Navigation arrows - hidden on mobile, touch scroll instead */}
            <div className="hidden md:flex gap-2 mt-6 md:mt-0">
              <Button
                variant="outline"
                size="icon"
                onClick={() => scroll("left")}
                className="rounded-full border-[#01609C]/30 hover:bg-[#01609C]/10"
              >
                <ChevronLeft className="h-5 w-5" style={{ color: '#01609C' }} />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => scroll("right")}
                className="rounded-full border-[#01609C]/30 hover:bg-[#01609C]/10"
              >
                <ChevronRight className="h-5 w-5" style={{ color: '#01609C' }} />
              </Button>
            </div>
          </div>

          {/* Horizontal scrolling cards */}
          <div
            ref={scrollRef}
            className="flex gap-4 md:gap-5 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory -mx-4 px-4 md:mx-0 md:px-0"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {t.dailyJourney.phases.map((step, index) => (
              <div
                key={step.phase}
                className="flex-shrink-0 w-[260px] md:w-[300px] lg:w-[320px] bg-white rounded-xl md:rounded-2xl p-5 md:p-6 shadow-sm border border-gray-200 snap-start hover:shadow-md transition-shadow"
              >
                {/* Phase badge */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-flex items-center justify-center w-7 h-7 md:w-8 md:h-8 rounded-full text-xs md:text-sm font-medium font-[family-name:var(--font-inter)]" style={{ backgroundColor: '#01609C10', color: '#01609C' }}>
                    {index + 1}
                  </span>
                  <span className="text-xs font-[family-name:var(--font-inter)] uppercase tracking-wider font-medium" style={{ color: '#01609C' }}>
                    {step.phase}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg md:text-xl font-medium mb-4" style={{ color: '#01609C' }}>{step.title}</h3>

                {/* Items list */}
                <ul className="space-y-2 md:space-y-2.5">
                  {step.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="flex items-start gap-2 text-xs md:text-sm font-[family-name:var(--font-inter)] text-gray-700"
                    >
                      <span className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: '#01609C' }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Progress indicator dots */}
          <div className="flex justify-center gap-2 mt-6">
            {t.dailyJourney.phases.map((_, index) => (
              <div key={index} className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full" style={{ backgroundColor: '#01609C30' }} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
