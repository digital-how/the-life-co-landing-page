"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useLanguage } from "@/lib/language-context"

export function FinalCtaSection() {
  const { t } = useLanguage()

  return (
    <section id="contact" className="py-16 md:py-20 pb-32 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-5 font-serif" style={{ color: '#01609C' }}>
            {t.finalCta.title}
          </h2>
          <p className="text-base md:text-lg font-[family-name:var(--font-montserrat)] text-gray-600 mb-8">
            {t.finalCta.description}
          </p>
          <Button
            asChild
            size="lg"
            className="bg-[#01609C] hover:bg-[#014a7a] text-white font-[family-name:var(--font-montserrat)] text-lg px-10 py-6"
          >
            <Link href="#pricing">{t.header.talkToExpert}</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
