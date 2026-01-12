export function WhatsIncludedTR() {
  const categories = [
    {
      title: "Konaklama ve Beslenme",
      description: "Dengeyi geri kazandırmak için tasarlanmış kişiselleştirilmiş beslenme ile destekleyici bir retreat ortamı.",
      items: [
        "Retreat resortlarımızda konaklama (çift kişilik odalar)",
        "Tüm yemekler ve gerekli takviyeleri içeren kişiselleştirilmiş beslenme planı",
        "Beslenme yolları Master Detox, Yeşil Meyve Suyu, Çiğ Gıda, Ketojenik, Su Orucu veya Aralıklı Oruç içerebilir",
        "Tüm beslenme, bireysel tıbbi ve wellness değerlendirmesine göre seçilir"
      ]
    },
    {
      title: "Wellness Hizmetleri ve Kilo Yönetimi için Zihinsel Destek",
      description: "Sürdürülebilir değişimi destekleyen günlük uzman rehberliği ve temel wellness terapileri.",
      items: [
        "Diyetisyenler ve psikologlarla günlük wellness koçluğu",
        "Duygusal Yeme ile Başa Çıkma Seansı (x2)",
        "Vücut kompozisyon analizi (2×)",
        "Kızılötesi sauna ve buhar odası erişimi (günlük)",
        "Kolon temizliği (kendi kendine uygulanan, günlük)",
        "Sınırsız detoks çorbası ve bitki çayları"
      ]
    },
    {
      title: "Bio-Hacking Teknolojileri (Günlük)",
      description: "Detoksifikasyon, iyileşme ve metabolik verimliliği destekleyen gelişmiş teknolojiler.",
      items: [
        "Turbosonic titreşim terapisi",
        "BioCharger enerji terapisi",
        "BioPhoton terapisi",
        "Oksijen terapisi",
        "Luminette ışık terapisi",
        "Ters masaj masası terapisi"
      ]
    },
    {
      title: "Tıbbi Hizmetler",
      description: "Konaklamanız boyunca güvenlik, hassasiyet ve güven sağlayan sürekli tıbbi gözetim.",
      items: [
        "Tıbbi konsültasyonlar (2×)",
        "Tam donanımlı yerinde tıbbi klinik",
        "Doktor ve hemşirelerden oluşan özel tıbbi ekip",
        "7/24 mevcut tıbbi destek",
        "Ortaklık yapılan acil hastane"
      ]
    },
    {
      title: "Son Teknoloji Metabolik Terapiler",
      description: "Yağ metabolizmasını ve fiziksel dayanıklılığı artırmak için tasarlanmış hedefli müdahaleler.",
      items: [
        "CAR.O.L bisiklet seansları (2×)",
        "Robolex terapisi (30 dakika × 2)",
        "Soğuk su seansları (2×)",
        "Pressoterapi lenfatik drenaj (1×)",
        "Kırmızı ışık yatak terapisi veya alternatif metabolik terapi"
      ]
    },
    {
      title: "Günlük Aktiviteler",
      description: "Uzun vadeli sağlığı desteklemek için hareket, eğitim ve iyileşmenin yapılandırılmış ritmi.",
      items: [
        "Gün doğumu yürüyüşleri",
        "Mobilite ve rahatlama yogası",
        "Meditasyon seansları",
        "Fonksiyonel antrenman (haftada 3×)",
        "Eğitici wellness konuşmaları",
        "Akşam rahatlama aktiviteleri"
      ]
    }
  ];

  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-gray-50 to-white pb-8 md:pb-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-4xl md:text-5xl mb-6" style={{ color: '#01609C' }}>
            Retreat'inizde Neler Dahil
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Ek ücret yok, gizli maliyet yok — aşağıdaki her hizmet programınıza dahildir.
          </p>
        </div>

        {/* Grid of Categories - Desktop / Horizontal Scrollable Cards - Mobile */}
        <div className="md:grid md:grid-cols-2 md:gap-8 mb-8 md:mb-12">
          {/* Mobile: Horizontal Scroll Container */}
          <div className="md:hidden overflow-x-auto pb-4 -mx-6 px-6">
            <div className="flex gap-4" style={{ scrollSnapType: 'x mandatory' }}>
              {categories.map((category, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-xl shadow-lg p-5 border-t-4 border-[#01609C] flex-shrink-0 w-[85vw]"
                  style={{ scrollSnapAlign: 'start' }}
                >
                  <h3 className="text-xl mb-3" style={{ color: '#01609C' }}>
                    {category.title}
                  </h3>
                  <p className="text-gray-600 mb-4 italic text-sm leading-relaxed">
                    {category.description}
                  </p>
                  <ul className="space-y-2">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-2">
                        <span className="text-[#01609C] text-xs mt-0.5 flex-shrink-0">•</span>
                        <span className="text-gray-700 text-sm leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop: Grid Layout */}
          {categories.map((category, index) => (
            <div 
              key={index}
              className="hidden md:block bg-white rounded-xl shadow-lg p-8 border-t-4 border-[#01609C] hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-2xl md:text-3xl mb-4" style={{ color: '#01609C' }}>
                {category.title}
              </h3>
              <p className="text-gray-600 mb-6 italic leading-relaxed">
                {category.description}
              </p>
              <ul className="space-y-3">
                {category.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-3">
                    <span className="text-[#01609C] mt-1 flex-shrink-0">•</span>
                    <span className="text-gray-700 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Message */}
        <div className="text-center mt-8 md:mt-12 pt-6 md:pt-8 border-t-2 border-gray-200">
          <p className="text-base md:text-xl lg:text-2xl text-gray-800 max-w-4xl mx-auto leading-relaxed">
            Konaklama dahildir — ancak katıldığınız şey bir konaklamadan çok daha fazlasıdır.<br className="hidden md:block" />
            <span className="md:inline block mt-1 md:mt-0"> </span>Her öğenin dahil olduğu ve sizin için koordine edildiği, tamamen rehberli, çok katmanlı bir programdır.
          </p>
        </div>
      </div>
    </section>
  );
}

