"use client"

import { useLanguage } from "@/lib/language-context"

export function TrustSection() {
  const { t } = useLanguage()

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-[#f3ede4]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="w-full overflow-x-auto rounded-lg">
          <img
            src="/images/image.png"
            alt={t.trust.altText}
            className="h-auto w-full object-contain min-w-[800px] md:min-w-0"
          />
        </div>
      </div>
    </section>
  )
}
