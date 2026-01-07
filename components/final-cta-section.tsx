"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useLanguage } from "@/lib/language-context"

export function FinalCtaSection() {
  const { t } = useLanguage()

  return (
    <section id="contact" className="py-16 md:py-20 pb-32 bg-primary/5">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-foreground mb-5 font-serif">
            {t.finalCta.title}
          </h2>
          <p className="text-base md:text-lg font-[family-name:var(--font-montserrat)] text-muted-foreground mb-8">
            {t.finalCta.description}
          </p>
          <Button
            asChild
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-[family-name:var(--font-montserrat)] text-base px-10 shadow-lg shadow-accent/20"
          >
            <Link href="#pricing">{t.header.talkToExpert}</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
