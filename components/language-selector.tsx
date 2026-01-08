"use client"

import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Globe } from "lucide-react"
import Link from "next/link"
import type { Locale } from "@/lib/translations"

export function LanguageSelector() {
  const { locale, t } = useLanguage()

  const languages: { code: Locale; label: string }[] = [
    { code: "en", label: t.language.en },
    { code: "tr", label: t.language.tr },
  ]

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground hover:text-foreground">
          <Globe className="h-4 w-4" />
          <span className="text-xs uppercase">{locale}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((lang) => (
          <DropdownMenuItem key={lang.code} asChild>
            <Link
              href={`/${lang.code}`}
              className={locale === lang.code ? "bg-primary/10" : ""}
            >
              {lang.label}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
