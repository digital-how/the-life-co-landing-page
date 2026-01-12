"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useLanguage } from "@/lib/language-context"

const destinations = [
  {
    name: "Bodrum, Turkey",
    nameTr: "Bodrum, Türkiye",
    image: "/Bodrum_general_photo.jpg",
    link: "https://www.thelifeco.com/en/centers/the-lifeco-bodrum-wellness-retreat/",
    linkTr: "https://www.thelifeco.com/tr/merkezler/the-lifeco-bodrum/",
    featured: true,
  },
  {
    name: "Antalya, Turkey",
    nameTr: "Antalya, Türkiye",
    image: "/TheLifeCo-Antalya_Drone_Photo_2_2020_edit-1024x852.jpg",
    link: "https://www.thelifeco.com/en/centers/the-lifeco-antalya-wellbeing-center/",
    linkTr: "https://www.thelifeco.com/tr/merkezler/the-lifeco-antalya/",
  },
  {
    name: "St Lucia",
    nameTr: "St Lucia",
    image: "/Theilfeco-st-lucia-1024x509.png",
    link: "https://www.thelifeco.com/en/centers/thelifeco-st-lucia/",
    linkTr: "https://www.thelifeco.com/tr/merkezler/the-lifeco-st-lucia/",
  },
  {
    name: "Sharm El Sheikh, Egypt",
    nameTr: "Şarm El Şeyh, Mısır",
    image: "/sharm.png",
    link: "https://www.thelifeco.com/en/thelifeco-sharm-el-sheikh/",
    linkTr: "https://www.thelifeco.com/tr/merkezler/thelifeco-sharm-el-sheikh/",
  },
  {
    name: "Phuket, Thailand",
    nameTr: "Phuket, Tayland",
    image: "/phuket.jpg",
    link: "https://www.thelifeco.com/en/centers/the-lifeco-phuket/",
    linkTr: "https://www.thelifeco.com/tr/merkezler/the-lifeco-phuket/",
  },
]

export function DestinationsSection() {
  const { locale, t } = useLanguage()

  return (
    <section id="destinations" className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:grid lg:grid-cols-[1fr_2fr] gap-8 lg:gap-12">
            {/* Left side - Text content */}
            <div className="flex flex-col justify-center text-center lg:text-left">
              <p className="text-sm font-[family-name:var(--font-inter)] uppercase tracking-widest text-muted-foreground mb-4">
                {locale === "tr" ? "5 FARKLI LOKASYON" : "5 DESTINATIONS"}
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-foreground mb-6 leading-tight">
                {t.destinations.title}
              </h2>
              <p className="text-base font-[family-name:var(--font-inter)] text-muted-foreground leading-relaxed mb-8">
                {t.destinations.description}
              </p>
              <div className="flex justify-center lg:justify-start">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-[family-name:var(--font-inter)] text-base px-8"
                >
                  <Link href="#pricing">{t.header.talkToExpert}</Link>
                </Button>
              </div>
            </div>

            {/* Right side - Image grid */}
            <div className="flex flex-col gap-3 md:gap-4">
              {/* Top section: Bodrum + Antalya stack */}
              <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-3 md:gap-4 lg:h-[500px]">
                {/* Bodrum - full width on mobile with taller aspect */}
                <Link href={locale === "tr" ? destinations[0].linkTr : destinations[0].link} target="_blank" rel="noopener noreferrer" className="relative aspect-[4/3] md:aspect-[3/4] lg:aspect-auto rounded-xl md:rounded-2xl overflow-hidden group lg:h-full cursor-pointer">
                  <Image
                    src={destinations[0].image || "/placeholder.svg"}
                    alt={locale === "tr" ? destinations[0].nameTr : destinations[0].name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <h3 className="absolute bottom-3 left-3 md:bottom-4 md:left-4 text-base md:text-xl lg:text-2xl font-medium text-white">
                    {locale === "tr" ? destinations[0].nameTr : destinations[0].name}
                  </h3>
                </Link>
                {/* Antalya */}
                <Link href={locale === "tr" ? destinations[1].linkTr : destinations[1].link} target="_blank" rel="noopener noreferrer" className="relative aspect-[4/3] lg:aspect-auto rounded-xl md:rounded-2xl overflow-hidden group lg:h-full cursor-pointer">
                  <Image
                    src={destinations[1].image || "/placeholder.svg"}
                    alt={locale === "tr" ? destinations[1].nameTr : destinations[1].name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <h3 className="absolute bottom-3 left-3 md:bottom-4 md:left-4 text-sm md:text-lg lg:text-xl font-medium text-white">
                    {locale === "tr" ? destinations[1].nameTr : destinations[1].name}
                  </h3>
                </Link>
              </div>

              {/* Bottom row: 3 equal cards - St Lucia, Sharm El Sheikh, Phuket */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                <Link href={locale === "tr" ? destinations[2].linkTr : destinations[2].link} target="_blank" rel="noopener noreferrer" className="relative aspect-[4/3] rounded-xl md:rounded-2xl overflow-hidden group cursor-pointer">
                  <Image
                    src={destinations[2].image || "/placeholder.svg"}
                    alt={locale === "tr" ? destinations[2].nameTr : destinations[2].name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <h3 className="absolute bottom-3 left-3 md:bottom-4 md:left-4 text-sm md:text-base lg:text-lg font-medium text-white">
                    {locale === "tr" ? destinations[2].nameTr : destinations[2].name}
                  </h3>
                </Link>
                <Link href={locale === "tr" ? destinations[3].linkTr : destinations[3].link} target="_blank" rel="noopener noreferrer" className="relative aspect-[4/3] rounded-xl md:rounded-2xl overflow-hidden group cursor-pointer">
                  <Image
                    src={destinations[3].image || "/placeholder.svg"}
                    alt={locale === "tr" ? destinations[3].nameTr : destinations[3].name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <h3 className="absolute bottom-3 left-3 md:bottom-4 md:left-4 text-sm md:text-base lg:text-lg font-medium text-white">
                    {locale === "tr" ? destinations[3].nameTr : destinations[3].name}
                  </h3>
                </Link>
                <Link href={locale === "tr" ? destinations[4].linkTr : destinations[4].link} target="_blank" rel="noopener noreferrer" className="relative aspect-[4/3] rounded-xl md:rounded-2xl overflow-hidden group col-span-2 md:col-span-1 cursor-pointer">
                  <Image
                    src={destinations[4].image || "/placeholder.svg"}
                    alt={locale === "tr" ? destinations[4].nameTr : destinations[4].name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <h3 className="absolute bottom-3 left-3 md:bottom-4 md:left-4 text-sm md:text-base lg:text-lg font-medium text-white">
                    {locale === "tr" ? destinations[4].nameTr : destinations[4].name}
                  </h3>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
