"use client"

import { HeroAR } from "@/components/version1-components/Hero-ar"
import { ResultsAR } from "@/components/version1-components/Results-ar"
import { WhyItMattersAR } from "@/components/version1-components/WhyItMatters-ar"
import { WhatsIncludedAR } from "@/components/version1-components/WhatsIncluded-ar"
import { GuestExperienceAR } from "@/components/version1-components/GuestExperience-ar"
import { ProgramJourneyAR } from "@/components/version1-components/ProgramJourney-ar"
import { HealingJourneyAR } from "@/components/version1-components/HealingJourney-ar"
import { TestimonialsAR } from "@/components/version1-components/Testimonials-ar"
import { VideoTestimonialAR } from "@/components/version1-components/VideoTestimonial-ar"
import { EndorsementsAR } from "@/components/version1-components/Endorsements-ar"
import { FAQAR } from "@/components/version1-components/FAQ-ar"
import { FooterAR } from "@/components/version1-components/Footer-ar"
import { PhotoStrip } from "@/components/version1-components/PhotoStrip"
import { PricingInquiryAR } from "@/components/version1-components/PricingInquiry-ar"

export default function BodrumPageAR() {
  return (
    <div className="min-h-screen" dir="rtl">
      <HeroAR />
      <ResultsAR />
      <WhatsIncludedAR />
      <PricingInquiryAR />
      <VideoTestimonialAR />
      <WhyItMattersAR />
      <ProgramJourneyAR />
      <HealingJourneyAR />
      <GuestExperienceAR />
      <PhotoStrip />
      <TestimonialsAR />
      <EndorsementsAR />
      <FAQAR />
      <PricingInquiryAR />
      <FooterAR />
    </div>
  )
}

