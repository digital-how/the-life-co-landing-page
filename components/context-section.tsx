"use client"

import { useLanguage } from "@/lib/language-context"

export function ContextSection() {
  const { t } = useLanguage()

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-6 max-w-3xl text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-8 text-balance" style={{ color: '#01609C' }}>
          {t.context.title}
        </h2>

        <div className="space-y-5 text-base md:text-lg font-[family-name:var(--font-inter)] text-gray-600 leading-relaxed">
          <p>{t.context.p1}</p>
          <p>{t.context.p2}</p>
          <p>{t.context.p3}</p>
          <div className="pt-4 mt-4 border-t border-gray-300">
            <p className="text-gray-900 font-medium">{t.context.conclusion}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
