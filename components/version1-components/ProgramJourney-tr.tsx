"use client"
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ProgramJourneyTR() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const phases = [
    {
      number: "1",
      title: "1. Gün — Varış ve Değerlendirme",
      subtitle: "Temelin atılması",
      items: [
        "Tıbbi kayıt ve kapsamlı sağlık değerlendirmesi",
        "Vücut kompozisyon analizi ve canlı kan analizi",
        "Tıbbi konsültasyon ve isteğe bağlı ileri tanı testleri",
        "Wellness koçu görüşmesi ve programın kişiselleştirilmesi",
        "Beslenme planı, terapiler ve uygulamaların seçimi"
      ],
      closing: "Bedeniniz varsayımlarla değil, ölçümlerle değerlendirilir. Her şey hassasiyetle başlar."
    },
    {
      number: "2",
      title: "2-3. Günler — Uyum Aşaması",
      subtitle: "Bedenin uyumlanmasına izin vermek",
      items: [
        "Detoks sürecinin nazikçe başlaması",
        "Sinir sisteminin düzenlenmesi ve stresin azalması",
        "İlk metabolik adaptasyon",
        "Hafif hareket, nefes çalışması ve onarıcı terapiler",
        "Yakın tıbbi ve wellness gözlemi"
      ],
      closing: "Bu aşama; güvenlik, destek ve bedenin yeni bir ritimle tanışmasıyla ilgilidir."
    },
    {
      number: "3",
      title: "4-7. Günler — Aktivasyon ve Momentum",
      subtitle: "Gözle görülür değişimin sıkça başladığı dönem",
      items: [
        "Artan metabolik verimlilik",
        "Gelişmiş yağ kullanım kapasitesi",
        "Daha derin detoks modu",
        "Yapılandırılmış hareket ve biohacking terapileri",
        "Birçok misafir enerjisinin artığını ve kilo değişimlerini fark etmeye başlar"
      ],
      closing: "Çoğu kişi için motivasyon burada — kendiliğinden — geri döner"
    },
    {
      number: "4",
      title: "8-14+ Günler — Dönüşüm Aşaması",
      subtitle: "Sonuçların pekişmesi (daha uzun konaklamalar için)",
      items: [
        "Süregelen yağ kaybı",
        "Kan şekeri ve iştah sinyallerinin dengelenmesi",
        "Zihinsel berraklık ve duygusal denge derinleşir",
        "Beden, kısa vadeli çözümler yerine sürdürülebilir kalıplara uyum sağlar"
      ],
      closing: "Kilo kaybı bir mücadele değil, doğal bir yanıt hâline gelir."
    },
    {
      number: "5",
      title: "Son Gün — Entegrasyon ve Hazırlık",
      subtitle: "Sorularla değil, netlikle ayrılma",
      items: [
        "Çıkış öncesi vücut kompozisyonu ve kan analizi",
        "Tıbbi ve wellness check-out konsültasyonları",
        "Retreat sonrası yaşam için kişiselleştirilmiş rehberlik",
        "Yaşam Tarzı Arkadaşı Uygulaması kaydı",
        "Program sonrası destek ve takip seçenekleri"
      ],
      closing: "Sadece sonuçlarla değil, anlayışla ayrılırsınız."
    }
  ];

  const handlePrevious = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(phases.length - 1, prev + 1));
  };

  return (
    <section className="py-20 bg-[#faf9f7]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-12 text-center">
          <p className="text-sm tracking-widest text-gray-500 uppercase mb-3">
            PROGRAM YOLCULUĞUNUZ
          </p>
          <h2 className="text-4xl md:text-5xl mb-4" style={{ color: '#01609C' }}>
            Yolculuk Nasıl İlerler
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Varış anınızdan ayrılışınıza kadar, konaklamanızın her aşaması dönüşümü desteklemek üzere özenle tasarlanmıştır.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative lg:px-16">
          {/* Navigation Arrows */}
          <Button
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            variant="ghost"
            size="icon"
            className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg hover:bg-gray-50 disabled:opacity-30 disabled:cursor-not-allowed rounded-full w-12 h-12"
          >
            <ChevronLeft className="w-6 h-6" style={{ color: '#01609C' }} />
          </Button>

          <Button
            onClick={handleNext}
            disabled={currentIndex >= phases.length - 1}
            variant="ghost"
            size="icon"
            className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg hover:bg-gray-50 disabled:opacity-30 disabled:cursor-not-allowed rounded-full w-12 h-12"
          >
            <ChevronRight className="w-6 h-6" style={{ color: '#01609C' }} />
          </Button>

          {/* Scrollable Cards Container */}
          <div className="overflow-hidden">
            <div 
              className="flex gap-6 transition-transform duration-500 ease-in-out lg:gap-8"
              style={{ transform: `translateX(-${currentIndex * (100 / 2.5)}%)` }}
            >
              {phases.map((phase, index) => (
                <div 
                  key={index} 
                  className="flex-shrink-0 w-full lg:w-[calc(40%-1rem)]"
                >
                  <div className="bg-white rounded-lg p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
                    {/* Phase Title */}
                    <div className="mb-6">
                      <h3 className="text-xl md:text-2xl mb-2" style={{ color: '#01609C' }}>
                        {phase.title}
                      </h3>
                      <p className="text-sm md:text-base text-gray-600 italic">
                        {phase.subtitle}
                      </p>
                    </div>

                    {/* Items List */}
                    <ul className="space-y-3 mb-6 flex-grow">
                      {phase.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-[#01609C] mt-1 text-sm">•</span>
                          <span className="text-gray-700 text-sm md:text-base leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Closing Statement */}
                    <p className="text-gray-900 italic text-sm md:text-base mt-auto pt-4 border-t border-gray-200">
                      {phase.closing}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Navigation Dots */}
          <div className="flex justify-center gap-2 mt-6 lg:hidden">
            {phases.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  currentIndex === index 
                    ? 'bg-[#01609C] w-8' 
                    : 'bg-gray-300'
                }`}
                aria-label={`Aşama ${index + 1}'e git`}
              />
            ))}
          </div>
        </div>

        {/* Bottom Text */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-700 italic">
            Bu bir takvim değil — her aşaması desteklenen, rehberli bir fizyolojik yolculuktur.
          </p>
        </div>
      </div>
    </section>
  );
}

