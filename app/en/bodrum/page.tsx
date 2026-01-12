"use client"

import { Hero } from "@/components/version1-components/Hero"
import { WhyItMatters } from "@/components/version1-components/WhyItMatters"
import { Results } from "@/components/version1-components/Results"
import { WhatsIncluded } from "@/components/version1-components/WhatsIncluded"
import { GuestExperience } from "@/components/version1-components/GuestExperience"
import { ProgramJourney } from "@/components/version1-components/ProgramJourney"
import { HealingJourney } from "@/components/version1-components/HealingJourney"
import { Testimonials } from "@/components/version1-components/Testimonials"
import { VideoTestimonial } from "@/components/version1-components/VideoTestimonial"
import { Endorsements } from "@/components/version1-components/Endorsements"
import { FAQ } from "@/components/version1-components/FAQ"
import { Footer } from "@/components/version1-components/Footer"
import { PhotoStrip } from "@/components/version1-components/PhotoStrip"
import { PricingInquiry } from "@/components/version1-components/PricingInquiry"

export default function BodrumPage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Results />
      <WhatsIncluded />
      <PricingInquiry />
      <VideoTestimonial />
      <WhyItMatters />
      <ProgramJourney />
      <HealingJourney />
      <GuestExperience />
      <PhotoStrip />
      <Testimonials />
      <Endorsements />
      <FAQ />
      <PricingInquiry />
      <Footer />
    </div>
  )
}

