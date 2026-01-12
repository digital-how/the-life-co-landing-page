"use client"

import { HeroTR } from "@/components/version1-components/Hero-tr"
import { ResultsTR } from "@/components/version1-components/Results-tr"
import { WhyItMatters } from "@/components/version1-components/WhyItMatters"
import { WhatsIncluded } from "@/components/version1-components/WhatsIncluded"
import { GuestExperience } from "@/components/version1-components/GuestExperience"
import { ProgramJourney } from "@/components/version1-components/ProgramJourney"
import { HealingJourney } from "@/components/version1-components/HealingJourney"
import { TestimonialsTR } from "@/components/version1-components/Testimonials-tr"
import { VideoTestimonial } from "@/components/version1-components/VideoTestimonial"
import { Endorsements } from "@/components/version1-components/Endorsements"
import { FAQ } from "@/components/version1-components/FAQ"
import { Footer } from "@/components/version1-components/Footer"
import { PhotoStrip } from "@/components/version1-components/PhotoStrip"
import { PricingInquiryTR } from "@/components/version1-components/PricingInquiry-tr"

export default function BodrumPageTR() {
  return (
    <div className="min-h-screen">
      <HeroTR />
      <ResultsTR />
      <WhatsIncluded />
      <PricingInquiryTR />
      <VideoTestimonial />
      <WhyItMatters />
      <ProgramJourney />
      <HealingJourney />
      <GuestExperience />
      <PhotoStrip />
      <TestimonialsTR />
      <Endorsements />
      <FAQ />
      <PricingInquiryTR />
      <Footer />
    </div>
  )
}

