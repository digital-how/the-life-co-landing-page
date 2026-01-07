"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { type Locale, getTranslations } from "./translations"

type LanguageContextType = {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: ReturnType<typeof getTranslations>
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const countryToLocale: Record<string, Locale> = {
  TR: "tr",
  // Add more country mappings as needed
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en")
  const [isInitialized, setIsInitialized] = useState(false)

  useEffect(() => {
    // Check localStorage first
    const savedLocale = localStorage.getItem("locale") as Locale | null
    if (savedLocale && (savedLocale === "en" || savedLocale === "tr")) {
      setLocaleState(savedLocale)
      setIsInitialized(true)
      return
    }

    // Auto-detect by IP
    const detectLanguage = async () => {
      try {
        const response = await fetch("https://ipapi.co/json/")
        const data = await response.json()
        const detectedLocale = countryToLocale[data.country_code] || "en"
        setLocaleState(detectedLocale)
        localStorage.setItem("locale", detectedLocale)
      } catch {
        // Default to English if detection fails
        setLocaleState("en")
      } finally {
        setIsInitialized(true)
      }
    }

    detectLanguage()
  }, [])

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale)
    localStorage.setItem("locale", newLocale)
  }

  const t = getTranslations(locale)

  if (!isInitialized) {
    return null // Or a loading spinner
  }

  return <LanguageContext.Provider value={{ locale, setLocale, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
