"use client"

import { useState, useEffect } from "react"
import { Menu, X, ChevronDown } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/lib/language-context"
import { useMenu } from "@/lib/menu-context"
import Image from "next/image"

export function TheLifeCoHeader() {
  const [isScrolled, setIsScrolled] = useState(false)
  const { isMainMenuOpen, setIsMainMenuOpen } = useMenu()
  const { locale } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const baseUrl = "https://www.thelifeco.com"
  const links = {
    centers: locale === "en" ? `${baseUrl}/en/centers/` : `${baseUrl}/tr/merkezler/`,
    detoxPrograms: locale === "en" ? `${baseUrl}/en/detox-programs/` : `${baseUrl}/tr/detoks-programlari/`,
    weightLoss: locale === "en" ? `${baseUrl}/en/weight-loss-program/` : `${baseUrl}/tr/zayiflama-kampi/`,
    diabetesRecovery: locale === "en" ? `${baseUrl}/en/diabetes-recovery-program/` : `${baseUrl}/tr/diyabet-tedavisi/`,
    therapies: locale === "en" ? `${baseUrl}/en/therapies/` : `${baseUrl}/tr/terapiler/`,
    aboutUs: locale === "en" ? `${baseUrl}/en/about-us/` : `${baseUrl}/tr/hakkimizda/`,
    blog: locale === "en" ? `${baseUrl}/en/blog/` : `${baseUrl}/tr/blog/`,
    contact: locale === "en" ? `${baseUrl}/en/about-us/contact-us/` : `${baseUrl}/tr/hakkimizda/iletisim/`,
    home: locale === "en" ? `${baseUrl}/en/` : `${baseUrl}/tr/`,
  }

  const textColor = isScrolled ? "#1a5f5f" : "white"
  const hoverColor = isScrolled ? "#008080" : "rgba(255, 255, 255, 0.8)" // Updated to TheLifeCo teal-blue
  const ctaBgColor = "#008080" // Updated to TheLifeCo teal-blue
  const ctaHoverBgColor = "#006666" // Updated to a darker teal-blue for hover effect

  return (
    <>
      {/* Main header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
        }`}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          <a href={links.home} className="flex-shrink-0">
            <Image
              src="https://www.thelifeco.com/wp-content/uploads/2023/02/logo.svg"
              alt="TheLifeCo"
              width={140}
              height={47}
              className="h-10 md:h-12 w-auto"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            <a
              href={links.centers}
              className="text-sm font-medium transition-colors"
              style={{ color: textColor }}
              onMouseEnter={(e) => (e.currentTarget.style.color = hoverColor)}
              onMouseLeave={(e) => (e.currentTarget.style.color = textColor)}
            >
              {locale === "en" ? "Centers" : "Merkezler"}
            </a>
            <div className="relative group">
              <button
                className="flex items-center gap-1 text-sm font-medium transition-colors"
                style={{ color: textColor }}
              >
                {locale === "en" ? "Programs" : "Programlar"}
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="bg-white rounded-lg shadow-lg py-2 min-w-[200px]">
                  <a
                    href={links.detoxPrograms}
                    className="block px-4 py-2 text-sm hover:bg-gray-50"
                    style={{ color: textColor }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = hoverColor)}
                    onMouseLeave={(e) => (e.currentTarget.style.color = textColor)}
                  >
                    {locale === "en" ? "Detox Programs" : "Detoks Programları"}
                  </a>
                  <a
                    href={links.weightLoss}
                    className="block px-4 py-2 text-sm hover:bg-gray-50"
                    style={{ color: textColor }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = hoverColor)}
                    onMouseLeave={(e) => (e.currentTarget.style.color = textColor)}
                  >
                    {locale === "en" ? "Weight Loss" : "Zayıflama"}
                  </a>
                  <a
                    href={links.diabetesRecovery}
                    className="block px-4 py-2 text-sm hover:bg-gray-50"
                    style={{ color: textColor }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = hoverColor)}
                    onMouseLeave={(e) => (e.currentTarget.style.color = textColor)}
                  >
                    {locale === "en" ? "Diabetes Recovery" : "Diyabet Programı"}
                  </a>
                </div>
              </div>
            </div>
            <a
              href={links.therapies}
              className="text-sm font-medium transition-colors"
              style={{ color: textColor }}
              onMouseEnter={(e) => (e.currentTarget.style.color = hoverColor)}
              onMouseLeave={(e) => (e.currentTarget.style.color = textColor)}
            >
              {locale === "en" ? "Therapies" : "Terapiler"}
            </a>
            <a
              href={links.aboutUs}
              className="text-sm font-medium transition-colors"
              style={{ color: textColor }}
              onMouseEnter={(e) => (e.currentTarget.style.color = hoverColor)}
              onMouseLeave={(e) => (e.currentTarget.style.color = textColor)}
            >
              {locale === "en" ? "About Us" : "Hakkımızda"}
            </a>
            <a
              href={links.blog}
              className="text-sm font-medium transition-colors"
              style={{ color: textColor }}
              onMouseEnter={(e) => (e.currentTarget.style.color = hoverColor)}
              onMouseLeave={(e) => (e.currentTarget.style.color = textColor)}
            >
              Blog
            </a>
          </nav>

          {/* Right side - Language + CTA */}
          <div className="flex items-center gap-4">
            {/* Language toggle */}
            <Link
              href={locale === "en" ? "/tr" : "/en"}
              className="hidden md:flex items-center gap-1 text-sm font-medium transition-colors"
              style={{ color: textColor }}
              onMouseEnter={(e) => (e.currentTarget.style.color = hoverColor)}
              onMouseLeave={(e) => (e.currentTarget.style.color = textColor)}
            >
              {locale === "en" ? "TR" : "EN"}
            </Link>

            {/* CTA Button - Updated to warm orange */}
            <a
              href="https://book.thelifeco.com/"
              className="hidden md:inline-flex px-5 py-2.5 text-white text-sm font-medium rounded-full transition-colors"
              style={{ backgroundColor: ctaBgColor }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = ctaHoverBgColor)}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = ctaBgColor)}
            >
              {locale === "en" ? "Plan My Program" : "Programımı Planlayalım"}
            </a>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMainMenuOpen(!isMainMenuOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                isScrolled ? "hover:bg-gray-100" : "hover:bg-white/20"
              }`}
              aria-label="Toggle menu"
            >
              {isMainMenuOpen ? (
                <X className="w-6 h-6" style={{ color: textColor }} />
              ) : (
                <Menu className="w-6 h-6" style={{ color: textColor }} />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      {isMainMenuOpen && (
        <>
          <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={() => setIsMainMenuOpen(false)} />
          <div className="fixed top-0 right-0 bottom-0 w-[300px] bg-white z-50 lg:hidden overflow-y-auto">
            <div className="p-4 border-b border-gray-100 flex items-center justify-between">
              <Image
                src="https://www.thelifeco.com/wp-content/uploads/2023/02/logo.svg"
                alt="TheLifeCo"
                width={120}
                height={40}
                className="h-8 w-auto"
              />
              <button
                onClick={() => setIsMainMenuOpen(false)}
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <X className="w-5 h-5" style={{ color: textColor }} />
              </button>
            </div>

            <nav className="p-4 flex flex-col gap-1">
              <a
                href={links.centers}
                className="px-4 py-3 font-medium hover:bg-gray-50 rounded-lg transition-colors"
                style={{ color: textColor }}
              >
                {locale === "en" ? "Centers" : "Merkezler"}
              </a>
              <a
                href={links.detoxPrograms}
                className="px-4 py-3 font-medium hover:bg-gray-50 rounded-lg transition-colors"
                style={{ color: textColor }}
              >
                {locale === "en" ? "Detox Programs" : "Detoks Programları"}
              </a>
              <a
                href={links.weightLoss}
                className="px-4 py-3 font-medium hover:bg-gray-50 rounded-lg transition-colors"
                style={{ color: textColor }}
              >
                {locale === "en" ? "Weight Loss" : "Zayıflama"}
              </a>
              <a
                href={links.diabetesRecovery}
                className="px-4 py-3 font-medium hover:bg-gray-50 rounded-lg transition-colors"
                style={{ color: textColor }}
              >
                {locale === "en" ? "Diabetes Recovery" : "Diyabet Programı"}
              </a>
              <a
                href={links.therapies}
                className="px-4 py-3 font-medium hover:bg-gray-50 rounded-lg transition-colors"
                style={{ color: textColor }}
              >
                {locale === "en" ? "Therapies" : "Terapiler"}
              </a>
              <a
                href={links.aboutUs}
                className="px-4 py-3 font-medium hover:bg-gray-50 rounded-lg transition-colors"
                style={{ color: textColor }}
              >
                {locale === "en" ? "About Us" : "Hakkımızda"}
              </a>
              <a
                href={links.blog}
                className="px-4 py-3 font-medium hover:bg-gray-50 rounded-lg transition-colors"
                style={{ color: textColor }}
              >
                Blog
              </a>
              <a
                href={links.contact}
                className="px-4 py-3 font-medium hover:bg-gray-50 rounded-lg transition-colors"
                style={{ color: textColor }}
              >
                {locale === "en" ? "Contact" : "İletişim"}
              </a>

              <div className="border-t border-gray-100 mt-2 pt-2">
                <Link
                  href={locale === "en" ? "/tr" : "/en"}
                  className="block w-full px-4 py-3 text-left font-medium hover:bg-gray-50 rounded-lg transition-colors"
                  style={{ color: textColor }}
                >
                  {locale === "en" ? "Türkçe" : "English"}
                </Link>
              </div>

              <div className="mt-4 px-4">
                <a
                  href="https://book.thelifeco.com/"
                  className="block w-full px-5 py-3 text-white text-sm font-medium rounded-full transition-colors text-center"
                  style={{ backgroundColor: ctaBgColor }}
                >
                  {locale === "en" ? "Plan My Program" : "Programımı Planlayalım"}
                </a>
              </div>

              <div className="mt-4 px-4 text-center text-sm text-gray-500">
                <a
                  href="tel:+902523776310"
                  className="transition-colors"
                  onMouseEnter={(e) => (e.currentTarget.style.color = hoverColor)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "")}
                >
                  +90 252 377 63 10
                </a>
              </div>
            </nav>
          </div>
        </>
      )}
    </>
  )
}
