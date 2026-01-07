"use client"

import { useState, useEffect } from "react"
import { Menu, X, ChevronDown } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { useMenu } from "@/lib/menu-context"
import Image from "next/image"

export function TheLifeCoHeader() {
  const [isScrolled, setIsScrolled] = useState(false)
  const { isMainMenuOpen, setIsMainMenuOpen } = useMenu()
  const { locale, setLocale } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleLanguage = () => {
    setLocale(locale === "en" ? "tr" : "en")
  }

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
          <a href="https://www.thelifeco.com" className="flex-shrink-0">
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
              href="https://www.thelifeco.com/en/centers/"
              className={`text-sm font-medium transition-colors hover:text-[#8B7355] ${
                isScrolled ? "text-[#2D3E2F]" : "text-[#2D3E2F]"
              }`}
            >
              {locale === "en" ? "Centers" : "Merkezler"}
            </a>
            <div className="relative group">
              <button
                className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-[#8B7355] ${
                  isScrolled ? "text-[#2D3E2F]" : "text-[#2D3E2F]"
                }`}
              >
                {locale === "en" ? "Programs" : "Programlar"}
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
            <a
              href="https://www.thelifeco.com/en/therapies/"
              className={`text-sm font-medium transition-colors hover:text-[#8B7355] ${
                isScrolled ? "text-[#2D3E2F]" : "text-[#2D3E2F]"
              }`}
            >
              {locale === "en" ? "Therapies" : "Terapiler"}
            </a>
            <a
              href="https://www.thelifeco.com/en/about-us/"
              className={`text-sm font-medium transition-colors hover:text-[#8B7355] ${
                isScrolled ? "text-[#2D3E2F]" : "text-[#2D3E2F]"
              }`}
            >
              {locale === "en" ? "About Us" : "Hakkımızda"}
            </a>
            <a
              href="https://www.thelifeco.com/en/blog/"
              className={`text-sm font-medium transition-colors hover:text-[#8B7355] ${
                isScrolled ? "text-[#2D3E2F]" : "text-[#2D3E2F]"
              }`}
            >
              Blog
            </a>
          </nav>

          {/* Right side - Language + CTA */}
          <div className="flex items-center gap-4">
            {/* Language toggle */}
            <button
              onClick={toggleLanguage}
              className={`hidden md:flex items-center gap-1 text-sm font-medium transition-colors hover:text-[#8B7355] ${
                isScrolled ? "text-[#2D3E2F]" : "text-[#2D3E2F]"
              }`}
            >
              {locale === "en" ? "TR" : "EN"}
            </button>

            {/* CTA Button */}
            <a
              href="https://book.thelifeco.com/"
              className="hidden md:inline-flex px-5 py-2.5 bg-[#8B7355] hover:bg-[#7a644a] text-white text-sm font-medium rounded-full transition-colors"
            >
              {locale === "en" ? "Plan My Program" : "Programımı Planlayalım"}
            </a>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMainMenuOpen(!isMainMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {isMainMenuOpen ? (
                <X className={`w-6 h-6 ${isScrolled ? "text-[#2D3E2F]" : "text-[#2D3E2F]"}`} />
              ) : (
                <Menu className={`w-6 h-6 ${isScrolled ? "text-[#2D3E2F]" : "text-[#2D3E2F]"}`} />
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
                <X className="w-5 h-5 text-[#2D3E2F]" />
              </button>
            </div>

            <nav className="p-4 flex flex-col gap-1">
              <a
                href="https://www.thelifeco.com/en/centers/"
                className="px-4 py-3 text-[#2D3E2F] font-medium hover:bg-gray-50 rounded-lg transition-colors"
              >
                {locale === "en" ? "Centers" : "Merkezler"}
              </a>
              <a
                href="https://www.thelifeco.com/en/detox-programs/"
                className="px-4 py-3 text-[#2D3E2F] font-medium hover:bg-gray-50 rounded-lg transition-colors"
              >
                {locale === "en" ? "Detox Programs" : "Detoks Programları"}
              </a>
              <a
                href="https://www.thelifeco.com/en/weight-loss-program/"
                className="px-4 py-3 text-[#2D3E2F] font-medium hover:bg-gray-50 rounded-lg transition-colors"
              >
                {locale === "en" ? "Weight Loss" : "Zayıflama"}
              </a>
              <a
                href="https://www.thelifeco.com/en/diabetes-recovery-program/"
                className="px-4 py-3 text-[#2D3E2F] font-medium hover:bg-gray-50 rounded-lg transition-colors"
              >
                {locale === "en" ? "Diabetes Recovery" : "Diyabet Programı"}
              </a>
              <a
                href="https://www.thelifeco.com/en/therapies/"
                className="px-4 py-3 text-[#2D3E2F] font-medium hover:bg-gray-50 rounded-lg transition-colors"
              >
                {locale === "en" ? "Therapies" : "Terapiler"}
              </a>
              <a
                href="https://www.thelifeco.com/en/about-us/"
                className="px-4 py-3 text-[#2D3E2F] font-medium hover:bg-gray-50 rounded-lg transition-colors"
              >
                {locale === "en" ? "About Us" : "Hakkımızda"}
              </a>
              <a
                href="https://www.thelifeco.com/en/blog/"
                className="px-4 py-3 text-[#2D3E2F] font-medium hover:bg-gray-50 rounded-lg transition-colors"
              >
                Blog
              </a>
              <a
                href="https://www.thelifeco.com/en/about-us/contact-us/"
                className="px-4 py-3 text-[#2D3E2F] font-medium hover:bg-gray-50 rounded-lg transition-colors"
              >
                {locale === "en" ? "Contact" : "İletişim"}
              </a>

              <div className="border-t border-gray-100 mt-2 pt-2">
                <button
                  onClick={toggleLanguage}
                  className="w-full px-4 py-3 text-left text-[#2D3E2F] font-medium hover:bg-gray-50 rounded-lg transition-colors"
                >
                  {locale === "en" ? "Türkçe" : "English"}
                </button>
              </div>

              <div className="mt-4 px-4">
                <a
                  href="https://book.thelifeco.com/"
                  className="block w-full px-5 py-3 bg-[#8B7355] hover:bg-[#7a644a] text-white text-sm font-medium rounded-full transition-colors text-center"
                >
                  {locale === "en" ? "Plan My Program" : "Programımı Planlayalım"}
                </a>
              </div>

              <div className="mt-4 px-4 text-center text-sm text-gray-500">
                <a href="tel:+902523776310" className="hover:text-[#8B7355]">
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
