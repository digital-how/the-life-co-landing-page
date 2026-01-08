import type { Metadata } from "next"
import { HeroSection } from "@/components/hero-section"
import { ContextSection } from "@/components/context-section"
import { ApproachSection } from "@/components/approach-section"
import { PillarsSection } from "@/components/pillars-section"
import { TrustSection } from "@/components/trust-section"
import { DestinationsSection } from "@/components/destinations-section"
import { DailyJourneySection } from "@/components/daily-journey-section"
import { PricingSection } from "@/components/pricing-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { FaqOutcomesSection } from "@/components/faq-outcomes-section"
import { FinalCtaSection } from "@/components/final-cta-section"
import { Footer } from "@/components/footer"
import { StickyHeader } from "@/components/sticky-header"
import { TheLifeCoHeader } from "@/components/thelifeco-header"

export const metadata: Metadata = {
  title: "Weight Loss Retreat",
  description:
    "A personalised weight loss program guided by TheLifeCo's six-layer Healing Journey, designed to support sustainable change for body and mind.",
}

export default function EnglishPage() {
  return (
    <main className="min-h-screen">
      <TheLifeCoHeader />
      <StickyHeader />
      <HeroSection />
      <ContextSection />
      <ApproachSection />
      <PillarsSection />
      <TrustSection />
      <DestinationsSection />
      <DailyJourneySection />
      <PricingSection />
      <TestimonialsSection />
      <FaqOutcomesSection />
      <FinalCtaSection />
      <Footer />
    </main>
  )
}

