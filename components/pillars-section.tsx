"use client"

import { useLanguage } from "@/lib/language-context"

export function PillarsSection() {
  const { t } = useLanguage()

  return (
    <section id="program" className="py-16 md:py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-foreground mb-4">{t.pillars.title}</h2>
          <p className="text-base font-[family-name:var(--font-inter)] text-muted-foreground">{t.pillars.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {t.pillars.items.map((pillar, index) => (
            <div
              key={index}
              className="bg-card p-7 rounded-lg border border-border/50 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group"
            >
              <div className="mb-5">
                <span className="text-sm font-[family-name:var(--font-inter)] text-primary font-medium">
                  {t.pillars.layer} {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="text-xl font-medium text-foreground mb-4 leading-snug">{pillar.title}</h3>
              <p className="text-sm font-[family-name:var(--font-inter)] text-muted-foreground leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
