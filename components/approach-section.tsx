"use client"

import { useLanguage } from "@/lib/language-context"

export function ApproachSection() {
  const { t } = useLanguage()

  return (
    <section id="approach" className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-6 max-w-6xl text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-foreground mb-8 text-balance max-w-5xl mx-auto">
          {t.approach.title}
        </h2>

        <p className="text-base md:text-lg font-[family-name:var(--font-inter)] text-muted-foreground leading-relaxed max-w-5xl mx-auto">
          {t.approach.p1}
        </p>
        <p className="text-base md:text-lg font-[family-name:var(--font-inter)] text-muted-foreground leading-relaxed mt-5 max-w-5xl mx-auto">
          {t.approach.p2}
        </p>
        <p className="text-base md:text-lg font-[family-name:var(--font-inter)] text-muted-foreground leading-relaxed mt-5 max-w-5xl mx-auto">
          {t.approach.p3}
        </p>
      </div>
    </section>
  )
}
