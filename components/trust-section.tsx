"use client"

import { useLanguage } from "@/lib/language-context"
import { useState, useRef, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

export function TrustSection() {
  const { t, locale } = useLanguage()
  const [activeSlide, setActiveSlide] = useState(0)
  const scrollRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const [isInView, setIsInView] = useState(false)
  const [hasAutoPlayed, setHasAutoPlayed] = useState(false)
  const autoSlideIntervalRef = useRef<NodeJS.Timeout | null>(null)

  const slides = [
    {
      id: "celebrities",
      image: "/images/endorsements-celebrities.png",
      bg: "bg-[#f3ede4]",
    },
    {
      id: "awards",
      image: "/images/endorsements-awards.png",
      bg: "bg-[#faf8f5]",
    },
    {
      id: "media",
      image: "/images/endorsements-media.png",
      bg: "bg-[#f3ede4]",
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting)
      },
      { threshold: 0.5 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const isMobile = window.innerWidth < 768

    if (isInView && isMobile && !hasAutoPlayed) {
      setHasAutoPlayed(true)

      autoSlideIntervalRef.current = setInterval(() => {
        setActiveSlide((prev) => {
          const nextSlide = prev + 1
          if (nextSlide >= slides.length) {
            if (autoSlideIntervalRef.current) {
              clearInterval(autoSlideIntervalRef.current)
            }
            return prev
          }

          if (scrollRef.current) {
            const slideWidth = scrollRef.current.offsetWidth
            scrollRef.current.scrollTo({
              left: nextSlide * slideWidth,
              behavior: "smooth",
            })
          }

          return nextSlide
        })
      }, 2000)
    }

    return () => {
      if (autoSlideIntervalRef.current) {
        clearInterval(autoSlideIntervalRef.current)
      }
    }
  }, [isInView, hasAutoPlayed, slides.length])

  const scrollToSlide = (index: number) => {
    if (autoSlideIntervalRef.current) {
      clearInterval(autoSlideIntervalRef.current)
    }
    setHasAutoPlayed(true)

    if (scrollRef.current) {
      const slideWidth = scrollRef.current.offsetWidth
      scrollRef.current.scrollTo({
        left: index * slideWidth,
        behavior: "smooth",
      })
      setActiveSlide(index)
    }
  }

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollPosition = scrollRef.current.scrollLeft
      const slideWidth = scrollRef.current.offsetWidth
      const newActiveSlide = Math.round(scrollPosition / slideWidth)
      if (newActiveSlide !== activeSlide) {
        setActiveSlide(newActiveSlide)
      }
    }
  }

  return (
    <section ref={sectionRef} className="py-12 md:py-16 lg:py-20 bg-[#f3ede4]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="hidden md:block w-full rounded-lg overflow-hidden">
          <img src="/images/image.png" alt={t.trust.altText} className="w-full h-auto object-cover" />
        </div>

        <div className="md:hidden">
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {slides.map((slide) => (
              <div key={slide.id} className={`flex-shrink-0 w-full snap-center ${slide.bg} rounded-lg overflow-hidden`}>
                <img src={slide.image || "/placeholder.svg"} alt={slide.id} className="w-full h-auto object-contain" />
              </div>
            ))}
          </div>

          <div className="flex justify-center items-center gap-4 mt-4">
            <button
              onClick={() => scrollToSlide(Math.max(0, activeSlide - 1))}
              className="p-2 rounded-full bg-white shadow-md disabled:opacity-30"
              disabled={activeSlide === 0}
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-5 w-5 text-[#5c5c5c]" />
            </button>

            <div className="flex gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    activeSlide === index ? "bg-[#01609C] w-4" : "bg-gray-300"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => scrollToSlide(Math.min(slides.length - 1, activeSlide + 1))}
              className="p-2 rounded-full bg-white shadow-md disabled:opacity-30"
              disabled={activeSlide === slides.length - 1}
              aria-label="Next slide"
            >
              <ChevronRight className="h-5 w-5 text-[#5c5c5c]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
