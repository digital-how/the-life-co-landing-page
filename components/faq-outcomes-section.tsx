"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Check } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function FaqOutcomesSection() {
  const { t } = useLanguage()

  return (
    <section id="faq" className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column: FAQ */}
          <div>
            <h2 className="text-3xl md:text-4xl font-light mb-8" style={{ color: '#01609C' }}>{t.faq.title}</h2>

            <Accordion type="single" collapsible className="w-full">
              {t.faq.items.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-300">
                  <AccordionTrigger className="text-left text-base md:text-lg font-[family-name:var(--font-inter)] font-medium py-5 hover:no-underline" style={{ color: '#01609C' }}>
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-base font-[family-name:var(--font-inter)] text-gray-700 pb-5 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Right Column: What Guests Experience */}
          <div className="rounded-2xl p-8 border" style={{ backgroundColor: '#01609C05', borderColor: '#01609C20' }}>
            <h2 className="text-3xl md:text-4xl font-light mb-8" style={{ color: '#01609C' }}>{t.faq.outcomesTitle}</h2>

            <div className="space-y-4">
              {t.faq.outcomes.map((outcome, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 bg-white rounded-lg border shadow-sm"
                  style={{ borderColor: '#01609C10' }}
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center" style={{ backgroundColor: '#01609C' }}>
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-base font-[family-name:var(--font-inter)] text-gray-900">{outcome}</span>
                </div>
              ))}
            </div>

            <p className="text-sm font-[family-name:var(--font-inter)] text-gray-600 mt-6 italic">
              {t.faq.disclaimer}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
