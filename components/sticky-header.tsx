"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Globe } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/lib/language-context"
import { useMenu } from "@/lib/menu-context"
import { LanguageSelector } from "./language-selector"

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

export function StickyHeader() {
  const [isExpanded, setIsExpanded] = useState(false)
  const { t, locale } = useLanguage()
  const { isMainMenuOpen } = useMenu()

  const whatsappNumber = "905396330927"
  const whatsappUrl = `https://wa.me/${whatsappNumber}`

  const navItems = [
    { href: "#approach", label: t.header.ourApproach },
    { href: "#program", label: t.header.program },
    { href: "#daily-journey", label: t.header.retreatExperience },
    { href: "#destinations", label: t.header.resorts },
    { href: "#pricing", label: t.header.inclusiveServices },
    { href: "#faq", label: t.header.faq },
  ]

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.replace("#", "")
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
    setIsExpanded(false)
  }

  if (isMainMenuOpen) {
    return null
  }

  return (
    <>
      {/* Floating bottom menu */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-4xl">
        {/* Desktop: horizontal nav links, Mobile: hamburger menu */}
        <div className="flex items-center justify-between gap-2 bg-card/95 backdrop-blur-md rounded-full shadow-xl border border-border/50 px-4 py-2.5">
          {/* Mobile hamburger */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="md:hidden p-2 rounded-full hover:bg-muted/50 transition-colors"
            aria-label="Toggle menu"
          >
            {isExpanded ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          {/* Nav links - hidden on mobile */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleScroll(e, item.href)}
                className="text-xs font-medium text-muted-foreground hover:text-primary px-3 py-2 rounded-full hover:bg-muted/50 transition-colors whitespace-nowrap"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="hidden md:block h-6 w-px bg-border/50" />

          <div className="flex items-center gap-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="md:hidden flex items-center justify-center w-9 h-9 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full transition-colors"
              aria-label="WhatsApp"
            >
              <WhatsAppIcon className="w-5 h-5" />
            </a>

            <div className="hidden md:block">
              <LanguageSelector />
            </div>

            <Button
              asChild
              size="sm"
              className="bg-accent hover:bg-accent/90 text-accent-foreground text-xs px-3 md:px-5 rounded-full whitespace-nowrap"
            >
              <a href="#contact-form" onClick={(e) => handleScroll(e, "#contact-form")}>
                <span className="hidden md:inline">{t.header.talkToExpert}</span>
                <span className="md:hidden">{locale === "en" ? "Contact Us" : "Bize Ulaşın"}</span>
              </a>
            </Button>
          </div>
        </div>

        {/* Mobile expanded menu */}
        {isExpanded && (
          <div className="md:hidden mt-2 bg-card/95 backdrop-blur-md rounded-2xl shadow-xl border border-border/50 p-4">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleScroll(e, item.href)}
                  className="text-sm font-medium text-muted-foreground hover:text-primary px-4 py-3 rounded-lg hover:bg-muted/50 transition-colors"
                >
                  {item.label}
                </a>
              ))}

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm font-medium text-[#25D366] hover:text-[#20bd5a] px-4 py-3 rounded-lg hover:bg-muted/50 transition-colors"
              >
                <WhatsAppIcon className="w-5 h-5" />
                WhatsApp
              </a>

              <Link
                href={locale === "en" ? "/tr" : "/en"}
                className="flex items-center gap-3 text-sm font-medium text-muted-foreground hover:text-primary px-4 py-3 rounded-lg hover:bg-muted/50 transition-colors"
              >
                <Globe className="w-5 h-5" />
                {locale === "en" ? "Türkçe" : "English"}
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Backdrop when expanded */}
      {isExpanded && <div className="fixed inset-0 z-40 md:hidden" onClick={() => setIsExpanded(false)} />}
    </>
  )
}
