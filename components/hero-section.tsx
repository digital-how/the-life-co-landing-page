"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useLanguage } from "@/lib/language-context"

export function HeroSection() {
  const { t } = useLanguage()

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-20">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat md:hidden"
          style={{
            backgroundImage: `url('/serene-luxury-wellness-retreat-nature-spa-calm-pea-mobile.jpg')`,
          }}
        />
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat hidden md:block"
          style={{
            backgroundImage: `url('/serene-luxury-wellness-retreat-nature-spa-calm-pea.jpg')`,
          }}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background/80 md:from-background/40 md:via-background/60 md:to-background/80" />

      <div className="relative z-10 container mx-auto px-4 md:px-6 py-12 md:py-32 text-center">
        <div className="md:bg-transparent bg-background/50 backdrop-blur-sm md:backdrop-blur-none rounded-2xl p-6 md:p-0">
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-light tracking-tight text-foreground mb-6 md:mb-8 text-balance leading-[1.1] font-serif">
            {t.hero.title1}
            <br />
            <span className="italic bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent pr-1">
              {t.hero.title2}
            </span>
          </h1>

          <p className="text-base md:text-lg lg:text-xl font-[family-name:var(--font-montserrat)] text-muted-foreground max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed px-2">
            {t.hero.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-[family-name:var(--font-montserrat)] text-sm md:text-base px-8 md:px-10 py-5 md:py-6 shadow-lg shadow-accent/20"
            >
              <Link href="#contact-form">{t.header.talkToExpert}</Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-20 md:bottom-24 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-5 h-5 md:w-6 md:h-6 text-muted-foreground"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
