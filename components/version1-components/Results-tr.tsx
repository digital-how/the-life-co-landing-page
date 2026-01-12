import { Zap, TrendingUp, Scale, Droplet } from "lucide-react";

export function ResultsTR() {
  const results = [
    {
      icon: Zap,
      title: "Hızlı",
      description: "Aylar değil, günler içinde sonuçları görün ve hissedin. Yoğun programlarımız dönüşümünüzü hemen başlatır.",
      stat: "3-7 gün",
      statLabel: "Görünür sonuçlara"
    },
    {
      icon: TrendingUp,
      title: "Kalıcı",
      description: "Kalıcı kilo kaybı ve sürdürülebilir yaşam tarzı değişiklikleri. Yaşam boyu sağlığı destekleyen alışkanlıklar öğrenin.",
      stat: "94%",
      statLabel: "6+ ay sonuçları koruma"
    },
    {
      icon: Scale,
      title: "Etkili",
      description: "Tıbbi gözetim altında uygulanan programlarımızla belirgin bir şekilde kilo verin. Misafirlerimizin çoğu programlarımızda tatmin edici kilo kaybı yaşar.",
      stat: "8-12 kg",
      statLabel: "Ortalama kilo kaybı (14 gün)"
    },
    {
      icon: Droplet,
      title: "Yağ ve toksinlerden arınma",
      description: "Gerçek yağ kaybını ve azaltılmış toksik yükü hedefleyin.",
      stat: "85%",
      statLabel: "Yağ kaybı ve su kaybı arasındaki fark"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4" style={{ color: '#01609C' }}>
            Gerçek Değişim. Gerçek Sonuçlar.
          </h2>
          <div className="w-20 h-1 bg-[#01609C] mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Enerji, zihinsel berraklık, yağ kaybı ve sürdürülebilir değişimle ölçülür.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {results.map((result, index) => {
            const Icon = result.icon;
            return (
              <div 
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow border border-gray-100"
              >
                <div className="w-14 h-14 rounded-full bg-[#01609C]/10 flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7" style={{ color: '#01609C' }} />
                </div>
                
                <h3 className="text-xl mb-3" style={{ color: '#01609C' }}>
                  {result.title}
                </h3>
                
                <p className="text-gray-700 text-sm leading-relaxed">
                  {result.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

