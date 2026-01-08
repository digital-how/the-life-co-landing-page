"use client"

import { createContext, useContext, useEffect, type ReactNode } from "react"
import { usePathname, useRouter } from "next/navigation"
import { type Locale, getTranslations } from "./translations"

type LanguageContextType = {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: ReturnType<typeof getTranslations>
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  const router = useRouter()
  
  // Extract locale from pathname (/en or /tr)
  const getLocaleFromPath = (): Locale => {
    if (pathname?.startsWith("/tr")) {
      return "tr"
    }
    if (pathname?.startsWith("/en")) {
      return "en"
    }
    // Default to English if path doesn't match
    return "en"
  }

  const locale = getLocaleFromPath()

  const setLocale = (newLocale: Locale) => {
    // Get current path without locale prefix
    const currentPath = pathname?.replace(/^\/(en|tr)/, "") || ""
    // Navigate to new locale path
    router.push(`/${newLocale}${currentPath}`)
  }

  const t = getTranslations(locale)

  return <LanguageContext.Provider value={{ locale, setLocale, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
