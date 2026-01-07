"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Check } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function FaqOutcomesSection() {
  const { t } = useLanguage()

  return (
    <section id="faq" className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column: FAQ */}
          <div>
            <h2 className="text-3xl md:text-4xl font-light text-foreground mb-8">{t.faq.title}</h2>

            <Accordion type="single" collapsible className="w-full">
              {t.faq.items.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b border-border/50">
                  <AccordionTrigger className="text-left text-base md:text-lg font-[family-name:var(--font-inter)] font-medium text-foreground py-5 hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-base font-[family-name:var(--font-inter)] text-muted-foreground pb-5 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Right Column: What Guests Experience */}
          <div className="bg-primary/5 rounded-2xl p-8 border border-primary/20">
            <h2 className="text-3xl md:text-4xl font-light text-foreground mb-8">{t.faq.outcomesTitle}</h2>

            <div className="space-y-4">
              {t.faq.outcomes.map((outcome, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 bg-white rounded-lg border border-primary/10 shadow-sm"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-base font-[family-name:var(--font-inter)] text-foreground">{outcome}</span>
                </div>
              ))}
            </div>

            <p className="text-sm font-[family-name:var(--font-inter)] text-muted-foreground mt-6 italic">
              {t.faq.disclaimer}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
