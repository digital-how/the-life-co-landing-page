"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useLanguage } from "@/lib/language-context"

const destinations = [
  {
    name: "Bodrum, Turkey",
    nameTr: "Bodrum, Türkiye",
    image: "https://www.thelifeco.com/wp-content/uploads/2023/11/Bodrum_general_photo.jpg",
    featured: true,
  },
  {
    name: "Antalya, Turkey",
    nameTr: "Antalya, Türkiye",
    image: "/luxury-beachfront-resort-antalya-turkey-palm-trees.jpg",
  },
  {
    name: "Swissôtel Uludağ, Turkey",
    nameTr: "Swissôtel Uludağ, Türkiye",
    image: "/swissotel-uludag-turkey-mountain-resort.jpg",
  },
  {
    name: "Rodney Bay, St Lucia",
    nameTr: "Rodney Bay, St Lucia",
    image: "/tropical-hillside-wellness-resort-st-lucia-caribbe.jpg",
  },
  {
    name: "Sharm El Sheikh, Egypt",
    nameTr: "Şarm El Şeyh, Mısır",
    image: "/beach-resort-sharm-el-sheikh-egypt-sunset-umbrella.jpg",
  },
  {
    name: "Phuket, Thailand",
    nameTr: "Phuket, Tayland",
    image: "/serene-lake-resort-phuket-thailand-tropical-palm-t.jpg",
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
                {locale === "tr" ? "6 FARKLI LOKASYON" : "6 DESTINATIONS"}
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
              {/* Top section: Bodrum + Antalya/Uludag stack */}
              <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-3 md:gap-4 lg:h-[500px]">
                {/* Bodrum - full width on mobile with taller aspect */}
                <div className="relative aspect-[4/3] md:aspect-[3/4] lg:aspect-auto rounded-xl md:rounded-2xl overflow-hidden group lg:h-full">
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
                </div>
                {/* Right stack: Antalya + Uludag */}
                <div className="grid grid-cols-2 md:flex md:flex-col gap-3 md:gap-4 md:h-full">
                  {/* Antalya */}
                  <div className="relative aspect-[4/3] lg:aspect-auto rounded-xl md:rounded-2xl overflow-hidden group lg:flex-1">
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
                  </div>
                  {/* Uludag */}
                  <div className="relative aspect-[4/3] lg:aspect-auto rounded-xl md:rounded-2xl overflow-hidden group lg:flex-1">
                    <Image
                      src={destinations[2].image || "/placeholder.svg"}
                      alt={locale === "tr" ? destinations[2].nameTr : destinations[2].name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <h3 className="absolute bottom-3 left-3 md:bottom-4 md:left-4 text-sm md:text-lg lg:text-xl font-medium text-white">
                      {locale === "tr" ? destinations[2].nameTr : destinations[2].name}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Bottom row: 3 equal cards - 2 cols on mobile, 3 on desktop */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                <div className="relative aspect-[4/3] rounded-xl md:rounded-2xl overflow-hidden group">
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
                </div>
                <div className="relative aspect-[4/3] rounded-xl md:rounded-2xl overflow-hidden group">
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
                </div>
                <div className="relative aspect-[4/3] rounded-xl md:rounded-2xl overflow-hidden group col-span-2 md:col-span-1">
                  <Image
                    src={destinations[5].image || "/placeholder.svg"}
                    alt={locale === "tr" ? destinations[5].nameTr : destinations[5].name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <h3 className="absolute bottom-3 left-3 md:bottom-4 md:left-4 text-sm md:text-base lg:text-lg font-medium text-white">
                    {locale === "tr" ? destinations[5].nameTr : destinations[5].name}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
