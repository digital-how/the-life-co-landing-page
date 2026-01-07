"use client"

import { Quote, Star } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function TestimonialsSection() {
  const { t } = useLanguage()

  return (
    <section className="py-16 md:py-20 bg-card">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-foreground mb-4 text-center">
          {t.testimonials.title}
        </h2>
        <div className="flex items-center justify-center gap-1 mb-12">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
          ))}
          <span className="ml-2 text-sm font-[family-name:var(--font-inter)] text-muted-foreground">
            {t.testimonials.rating}
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {t.testimonials.items.map((testimonial, index) => (
            <div key={index} className="bg-background p-8 md:p-10 rounded-lg border border-border/50">
              <Quote className="w-8 h-8 text-primary/30 mb-6" />
              <p className="text-lg md:text-xl font-light text-foreground leading-relaxed mb-6 italic">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="inline-block bg-primary/10 text-primary text-xs font-[family-name:var(--font-inter)] font-medium px-3 py-1 rounded-full mb-4">
                {testimonial.result}
              </div>
              <div>
                <p className="text-sm font-[family-name:var(--font-inter)] font-medium text-foreground">
                  {testimonial.author}
                </p>
                <p className="text-sm font-[family-name:var(--font-inter)] text-muted-foreground">
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
