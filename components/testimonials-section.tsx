"use client"

import { Quote, Star } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function TestimonialsSection() {
  const { t } = useLanguage()

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl lg:text-5xl font-light mb-3 md:mb-4 text-center" style={{ color: '#01609C' }}>
          {t.testimonials.title}
        </h2>
        <div className="flex items-center justify-center gap-1 mb-8 md:mb-12">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 md:w-5 md:h-5 fill-amber-400 text-amber-400" />
          ))}
          <span className="ml-2 text-xs md:text-sm font-[family-name:var(--font-inter)] text-gray-600">
            {t.testimonials.rating}
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-4 md:gap-8 max-w-4xl mx-auto">
          {t.testimonials.items.map((testimonial, index) => (
            <div key={index} className="bg-white p-5 md:p-8 lg:p-10 rounded-lg border border-gray-200">
              <Quote className="w-6 h-6 md:w-8 md:h-8 mb-4 md:mb-6" style={{ color: '#01609C30' }} />
              <p className="text-base md:text-lg lg:text-xl font-light text-gray-700 leading-relaxed mb-4 md:mb-6 italic">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="inline-block text-[10px] md:text-xs font-[family-name:var(--font-inter)] font-medium px-2 md:px-3 py-1 rounded-full mb-3 md:mb-4" style={{ backgroundColor: '#01609C10', color: '#01609C' }}>
                {testimonial.result}
              </div>
              <div>
                <p className="text-xs md:text-sm font-[family-name:var(--font-inter)] font-medium text-gray-900">
                  {testimonial.author}
                </p>
                <p className="text-xs md:text-sm font-[family-name:var(--font-inter)] text-gray-600">
                  {testimonial.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
