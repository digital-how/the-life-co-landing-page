"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const countryCodes = [
  { code: "+1", country: "US" },
  { code: "+44", country: "GB" },
  { code: "+49", country: "DE" },
  { code: "+33", country: "FR" },
  { code: "+39", country: "IT" },
  { code: "+34", country: "ES" },
  { code: "+31", country: "NL" },
  { code: "+41", country: "CH" },
  { code: "+43", country: "AT" },
  { code: "+32", country: "BE" },
  { code: "+90", country: "TR" },
  { code: "+7", country: "RU" },
  { code: "+971", country: "AE" },
  { code: "+966", country: "SA" },
  { code: "+20", country: "EG" },
  { code: "+27", country: "ZA" },
  { code: "+91", country: "IN" },
  { code: "+86", country: "CN" },
  { code: "+81", country: "JP" },
  { code: "+82", country: "KR" },
  { code: "+61", country: "AU" },
  { code: "+64", country: "NZ" },
  { code: "+55", country: "BR" },
  { code: "+52", country: "MX" },
  { code: "+47", country: "NO" },
  { code: "+46", country: "SE" },
  { code: "+45", country: "DK" },
  { code: "+358", country: "FI" },
  { code: "+48", country: "PL" },
  { code: "+351", country: "PT" },
  { code: "+30", country: "GR" },
  { code: "+353", country: "IE" },
  { code: "+972", country: "IL" },
  { code: "+65", country: "SG" },
  { code: "+852", country: "HK" },
  { code: "+60", country: "MY" },
  { code: "+66", country: "TH" },
  { code: "+63", country: "PH" },
  { code: "+62", country: "ID" },
  { code: "+84", country: "VN" },
]

const countryToDialCode: Record<string, string> = {
  US: "+1",
  CA: "+1",
  GB: "+44",
  DE: "+49",
  FR: "+33",
  IT: "+39",
  ES: "+34",
  NL: "+31",
  CH: "+41",
  AT: "+43",
  BE: "+32",
  TR: "+90",
  RU: "+7",
  AE: "+971",
  SA: "+966",
  EG: "+20",
  ZA: "+27",
  IN: "+91",
  CN: "+86",
  JP: "+81",
  KR: "+82",
  AU: "+61",
  NZ: "+64",
  BR: "+55",
  MX: "+52",
  NO: "+47",
  SE: "+46",
  DK: "+45",
  FI: "+358",
  PL: "+48",
  PT: "+351",
  GR: "+30",
  IE: "+353",
  IL: "+972",
  SG: "+65",
  HK: "+852",
  MY: "+60",
  TH: "+66",
  PH: "+63",
  ID: "+62",
  VN: "+84",
}

export function PricingFormSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    countryCode: "+44",
    phone: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  useEffect(() => {
    const detectCountry = async () => {
      try {
        let countryCode = null
        try {
          const response = await fetch("https://ip-api.com/json/?fields=countryCode")
          const data = await response.json()
          if (data.countryCode) {
            countryCode = data.countryCode
          }
        } catch {
          const response = await fetch("https://ipapi.co/json/")
          const data = await response.json()
          if (data.country_code) {
            countryCode = data.country_code
          }
        }
        if (countryCode && countryToDialCode[countryCode]) {
          setFormData((prev) => ({
            ...prev,
            countryCode: countryToDialCode[countryCode],
          }))
        }
      } catch (error) {
        // Keep default country code if detection fails
      }
    }
    detectCountry()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Add your form submission logic here
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Track conversion in Google Analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'form_submission', {
        event_category: 'engagement',
        event_label: 'inquiry_form',
        value: 1
      })
    }
  }

  return (
    <section className="py-16 md:py-20 bg-secondary">
      <div className="md:container md:mx-auto md:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Pricing and Form - Two Column */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start px-0 md:px-0">
            {/* Left side - Pricing info */}
            <div className="text-center lg:text-left px-4 md:px-0">
              <p className="text-base md:text-lg font-[family-name:var(--font-montserrat)] text-muted-foreground mb-3">
                7-Day Weight Loss Program
              </p>
              <div className="flex items-baseline gap-2 mb-4 justify-center lg:justify-start">
                <span className="text-sm font-[family-name:var(--font-montserrat)] text-muted-foreground">
                  Starting from
                </span>
                <span className="text-4xl md:text-5xl lg:text-6xl font-light text-foreground font-serif">€2,200</span>
              </div>
              <p className="text-sm font-[family-name:var(--font-montserrat)] text-muted-foreground mb-6">
                all inclusive
              </p>

              <div className="border-t border-border/50 my-6" />

              <p className="text-sm md:text-base font-[family-name:var(--font-montserrat)] text-muted-foreground leading-relaxed mb-4">
                Includes accommodation, personalised program design, meals, therapies, activities, and on-site support.
              </p>

              <p className="text-sm md:text-base font-[family-name:var(--font-montserrat)] text-muted-foreground leading-relaxed mb-4">
                This fully inclusive offer reflects a medically informed, multi-layered program designed to support weight loss alongside whole-body health.
              </p>

              <p className="text-xs md:text-sm font-[family-name:var(--font-montserrat)] text-muted-foreground/80 italic">
                Longer program durations and enhanced program depth are available following consultation.
              </p>
            </div>

            {/* Right side - Inquiry form */}
            <div id="contact-form" className="w-full">
              {isSubmitted ? (
                <div className="bg-card p-8 md:p-10 rounded-none md:rounded-lg border-y md:border border-border/50 text-center mx-0">
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-5 md:mb-6">
                    <svg
                      className="w-7 h-7 md:w-8 md:h-8 text-accent"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl md:text-2xl font-light text-foreground mb-4 font-serif">
                    Thank You!
                  </h3>
                  <p className="text-sm md:text-base font-[family-name:var(--font-montserrat)] text-muted-foreground">
                    We've received your inquiry and will get back to you shortly.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-gradient-to-br from-card to-accent/5 p-5 md:p-8 rounded-none md:rounded-lg border-y md:border border-accent/10 shadow-lg shadow-accent/5"
                >
                  <h3 className="text-lg md:text-2xl font-light text-foreground mb-2 font-serif">
                    Talk to an Expert
                  </h3>
                  <p className="text-[11px] md:text-sm font-[family-name:var(--font-montserrat)] text-muted-foreground mb-4 md:mb-6">
                    Get personalised guidance from our experts...
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-5 mb-3 md:mb-5">
                    <div className="space-y-1.5 md:space-y-2">
                      <Label
                        htmlFor="firstName"
                        className="text-[11px] md:text-sm font-[family-name:var(--font-montserrat)] text-foreground"
                      >
                        First Name
                      </Label>
                      <Input
                        id="firstName"
                        type="text"
                        required
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        className="bg-background border-border/50 focus:border-accent text-xs md:text-sm h-9 md:h-10"
                      />
                    </div>
                    <div className="space-y-1.5 md:space-y-2">
                      <Label
                        htmlFor="lastName"
                        className="text-[11px] md:text-sm font-[family-name:var(--font-montserrat)] text-foreground"
                      >
                        Last Name
                      </Label>
                      <Input
                        id="lastName"
                        type="text"
                        required
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        className="bg-background border-border/50 focus:border-accent text-xs md:text-sm h-9 md:h-10"
                      />
                    </div>
                  </div>
                  <div className="space-y-1.5 md:space-y-2 mb-3 md:mb-5">
                    <Label
                      htmlFor="email"
                      className="text-[11px] md:text-sm font-[family-name:var(--font-montserrat)] text-foreground"
                    >
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-background border-border/50 focus:border-accent text-xs md:text-sm h-9 md:h-10"
                    />
                  </div>
                  <div className="space-y-1.5 md:space-y-2 mb-3 md:mb-5">
                    <Label
                      htmlFor="phone"
                      className="text-[11px] md:text-sm font-[family-name:var(--font-montserrat)] text-foreground"
                    >
                      Phone Number (Optional)
                    </Label>
                    <div className="flex gap-2">
                      <Select
                        value={formData.countryCode}
                        onValueChange={(value) => setFormData({ ...formData, countryCode: value })}
                      >
                        <SelectTrigger className="w-[70px] md:w-[85px] bg-background border-border/50 focus:border-accent text-xs md:text-sm h-9 md:h-10">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="max-h-[300px]">
                          {countryCodes.map((country) => (
                            <SelectItem key={country.country} value={country.code} className="text-xs md:text-sm">
                              <span className="flex items-center gap-1">
                                <span className="text-muted-foreground">{country.country}</span>
                                <span>{country.code}</span>
                              </span>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="flex-1 bg-background border-border/50 focus:border-accent text-xs md:text-sm h-9 md:h-10"
                        placeholder="Phone number"
                      />
                    </div>
                  </div>
                  <div className="space-y-1.5 md:space-y-2 mb-4 md:mb-6">
                    <Label
                      htmlFor="message"
                      className="text-[11px] md:text-sm font-[family-name:var(--font-montserrat)] text-foreground"
                    >
                      Tell us about your goals (Optional)
                    </Label>
                    <Textarea
                      id="message"
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="bg-background border-border/50 focus:border-accent resize-none text-xs md:text-sm"
                      placeholder="Share any specific goals or questions..."
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-[family-name:var(--font-montserrat)] text-xs md:text-base h-10 md:h-11 shadow-lg shadow-accent/20"
                  >
                    {isSubmitting ? "Sending..." : "Send Inquiry"}
                  </Button>
                  <p className="text-[10px] md:text-xs font-[family-name:var(--font-montserrat)] text-muted-foreground text-center mt-3 md:mt-4">
                    Or call us directly: +44 330 818 6924
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

