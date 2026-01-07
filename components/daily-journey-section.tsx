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
    <section id="daily-journey" className="py-16 md:py-20 bg-[#f8f6f3]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8 md:mb-10">
            <div className="text-center md:text-left">
              <p className="text-sm font-[family-name:var(--font-inter)] uppercase tracking-widest text-muted-foreground mb-4">
                {t.dailyJourney.label}
              </p>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-foreground leading-tight">
                {t.dailyJourney.title}
              </h2>
              <p className="text-sm md:text-base font-[family-name:var(--font-inter)] text-muted-foreground mt-4 max-w-2xl mx-auto md:mx-0">
                {t.dailyJourney.description}
              </p>
            </div>
            {/* Navigation arrows - hidden on mobile, touch scroll instead */}
            <div className="hidden md:flex gap-2 mt-6 md:mt-0">
              <Button
                variant="outline"
                size="icon"
                onClick={() => scroll("left")}
                className="rounded-full border-primary/30 hover:bg-primary/10"
              >
                <ChevronLeft className="h-5 w-5 text-primary" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => scroll("right")}
                className="rounded-full border-primary/30 hover:bg-primary/10"
              >
                <ChevronRight className="h-5 w-5 text-primary" />
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
                className="flex-shrink-0 w-[260px] md:w-[300px] lg:w-[320px] bg-background rounded-xl md:rounded-2xl p-5 md:p-6 shadow-sm border border-border/50 snap-start hover:shadow-md transition-shadow"
              >
                {/* Phase badge */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-flex items-center justify-center w-7 h-7 md:w-8 md:h-8 rounded-full bg-primary/10 text-primary text-xs md:text-sm font-medium font-[family-name:var(--font-inter)]">
                    {index + 1}
                  </span>
                  <span className="text-xs font-[family-name:var(--font-inter)] uppercase tracking-wider text-primary font-medium">
                    {step.phase}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg md:text-xl font-medium text-foreground mb-4">{step.title}</h3>

                {/* Items list */}
                <ul className="space-y-2 md:space-y-2.5">
                  {step.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="flex items-start gap-2 text-xs md:text-sm font-[family-name:var(--font-inter)] text-muted-foreground"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-1.5 flex-shrink-0" />
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
              <div key={index} className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-primary/30" />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
