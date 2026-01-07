"use client"

import Link from "next/link"
import { useLanguage } from "@/lib/language-context"

export function Footer() {
  const { t, locale } = useLanguage()

  const privacyUrl =
    locale === "tr"
      ? "https://www.thelifeco.com/tr/gizlilik-politikasi/"
      : "https://www.thelifeco.com/en/about-us/privacy-policy/"

  const termsUrl =
    locale === "tr"
      ? "https://www.thelifeco.com/tr/web-sayfasi-kisisel-veriler-hakkinda-aydinlatma-ve-riza-metni/"
      : "https://www.thelifeco.com/en/privacy-and-cookie-policy/"

  return (
    <footer className="py-12 pb-24 bg-foreground text-background">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <p className="text-sm font-[family-name:var(--font-montserrat)] text-background/70 mb-4">
            {t.footer.tagline}
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm font-[family-name:var(--font-montserrat)] text-background/50">
            <Link href="https://www.thelifeco.com" className="hover:text-background transition-colors">
              www.thelifeco.com
            </Link>
            <span>|</span>
            <Link
              href={privacyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-background transition-colors"
            >
              {t.footer.privacy}
            </Link>
            <span>|</span>
            <Link
              href={termsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-background transition-colors"
            >
              {t.footer.terms}
            </Link>
          </div>
          <p className="text-xs font-[family-name:var(--font-montserrat)] text-background/40 mt-8">
            © {new Date().getFullYear()} {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  )
}
