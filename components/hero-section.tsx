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
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 container mx-auto px-4 md:px-6 py-12 md:py-32 text-center">
        <div className="md:bg-transparent bg-background/50 backdrop-blur-sm md:backdrop-blur-none rounded-2xl p-6 md:p-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-white mb-6 md:mb-8 text-balance leading-[1.1]">
            {t.hero.title1}
            <br />
            <span className="block mt-2 text-5xl md:text-6xl lg:text-7xl italic" style={{ fontFamily: 'Cormorant Garamond', fontWeight: 300, letterSpacing: '0.02em' }}>
              {t.hero.title2}
            </span>
          </h1>

          <p className="text-lg md:text-xl font-[family-name:var(--font-montserrat)] text-white opacity-95 max-w-3xl mx-auto mb-4 leading-relaxed px-2">
            {t.hero.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-[#01609C] hover:bg-[#014a7a] text-white font-[family-name:var(--font-montserrat)] text-lg px-10 py-6"
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
