"use client"

import { useLanguage } from "@/lib/language-context"
import { useRef, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

export function PillarsSection() {
  const { t } = useLanguage()
  const scrollRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const getCardWidth = () => {
    if (scrollRef.current) {
      const firstCard = scrollRef.current.querySelector("[data-card]") as HTMLElement
      if (firstCard) {
        const gap = window.innerWidth < 768 ? 12 : 24
        return firstCard.offsetWidth + gap
      }
    }
    return 0
  }

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const cardWidth = getCardWidth()
      if (cardWidth === 0) return

      const totalItems = t.pillars.items.length
      let newIndex: number

      if (direction === "left") {
        newIndex = activeIndex === 0 ? totalItems - 1 : activeIndex - 1
      } else {
        newIndex = activeIndex === totalItems - 1 ? 0 : activeIndex + 1
      }

      setActiveIndex(newIndex)
      scrollRef.current.scrollTo({
        left: newIndex * cardWidth,
        behavior: "smooth",
      })
    }
  }

  const handleScroll = () => {
    if (scrollRef.current) {
      const cardWidth = getCardWidth()
      if (cardWidth > 0) {
        const newIndex = Math.round(scrollRef.current.scrollLeft / cardWidth)
        setActiveIndex(newIndex)
      }
    }
  }

  const scrollToIndex = (index: number) => {
    if (scrollRef.current) {
      const cardWidth = getCardWidth()
      if (cardWidth > 0) {
        setActiveIndex(index)
        scrollRef.current.scrollTo({
          left: index * cardWidth,
          behavior: "smooth",
        })
      }
    }
  }

  return (
    <section id="program" className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-4" style={{ color: '#01609C' }}>{t.pillars.title}</h2>
          <p className="text-base md:text-lg font-[family-name:var(--font-inter)] text-gray-600">
            {t.pillars.subtitle}
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Desktop arrows */}
          <button
            onClick={() => scroll("left")}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-14 z-10 p-3 rounded-full bg-white border border-gray-200 hover:border-[#01609C]/30 hover:shadow-lg transition-all"
          >
            <ChevronLeft className="w-6 h-6" style={{ color: '#01609C' }} />
          </button>

          <button
            onClick={() => scroll("right")}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-14 z-10 p-3 rounded-full bg-white border border-gray-200 hover:border-[#01609C]/30 hover:shadow-lg transition-all"
          >
            <ChevronRight className="w-6 h-6" style={{ color: '#01609C' }} />
          </button>

          {/* Carousel container */}
          <div className="overflow-hidden">
            <div
              ref={scrollRef}
              onScroll={handleScroll}
              className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-3 md:gap-6 pb-4"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {t.pillars.items.map((pillar, index) => (
                <div
                  key={index}
                  data-card
                  className="flex-shrink-0 w-[88%] md:w-[calc(50%-12px)] snap-start bg-white p-7 md:p-10 rounded-lg border border-gray-200 hover:border-[#01609C]/30 hover:shadow-lg transition-all duration-300 first:ml-[6%] md:first:ml-0"
                >
                  <div className="mb-4 md:mb-5">
                    <span className="text-sm md:text-base font-[family-name:var(--font-inter)] font-medium" style={{ color: '#01609C' }}>
                      {t.pillars.layer} {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-medium mb-3 md:mb-4 leading-snug" style={{ color: '#01609C' }}>
                    {pillar.title}
                  </h3>
                  <p className="text-base md:text-lg lg:text-xl font-[family-name:var(--font-inter)] text-gray-700 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation dots */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={() => scroll("left")}
              className="md:hidden p-2 rounded-full bg-card border border-border/50 transition-opacity"
            >
              <ChevronLeft className="w-5 h-5 text-foreground" />
            </button>

            <div className="flex gap-2">
              {t.pillars.items.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollToIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === activeIndex ? "bg-[#01609C]" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => scroll("right")}
              className="md:hidden p-2 rounded-full bg-card border border-border/50 transition-opacity"
            >
              <ChevronRight className="w-5 h-5 text-foreground" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
