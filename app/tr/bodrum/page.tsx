"use client"

import { HeroTR } from "@/components/version1-components/Hero-tr"
import { ResultsTR } from "@/components/version1-components/Results-tr"
import { WhyItMattersTR } from "@/components/version1-components/WhyItMatters-tr"
import { WhatsIncludedTR } from "@/components/version1-components/WhatsIncluded-tr"
import { GuestExperienceTR } from "@/components/version1-components/GuestExperience-tr"
import { ProgramJourneyTR } from "@/components/version1-components/ProgramJourney-tr"
import { HealingJourneyTR } from "@/components/version1-components/HealingJourney-tr"
import { TestimonialsTR } from "@/components/version1-components/Testimonials-tr"
import { VideoTestimonial } from "@/components/version1-components/VideoTestimonial"
import { Endorsements } from "@/components/version1-components/Endorsements"
import { FAQTR } from "@/components/version1-components/FAQ-tr"
import { FooterTR } from "@/components/version1-components/Footer-tr"
import { PhotoStrip } from "@/components/version1-components/PhotoStrip"
import { PricingInquiryTR } from "@/components/version1-components/PricingInquiry-tr"

export default function BodrumPageTR() {
  return (
    <div className="min-h-screen">
      <HeroTR />
      <ResultsTR />
      <WhatsIncludedTR />
      <PricingInquiryTR />
      <VideoTestimonial />
      <WhyItMattersTR />
      <ProgramJourneyTR />
      <HealingJourneyTR />
      <GuestExperienceTR />
      <PhotoStrip />
      <TestimonialsTR />
      <Endorsements />
      <FAQTR />
      <PricingInquiryTR />
      <FooterTR />
    </div>
  )
}

