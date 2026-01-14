import { Award, Users, Globe, Heart } from "lucide-react";

export function EndorsementsTR() {
  const endorsements = [
    {
      icon: Award,
      title: "Tıbbi Danışma Kurulu",
      description: "Dr. Elena Rodriguez, MD - Bütünleştirici Tıp",
      quote: "TheLifeCo'nun yaklaşımı, tıbbi gözetimli wellness programlarında altın standardı temsil eder. Bütünsel iyileşmeyi onurlandırırken kanıta dayalı uygulamalara bağlılıkları onları farklı kılar."
    },
    {
      icon: Users,
      title: "Wellness Topluluğu Lideri",
      description: "James Chen - Sertifikalı Beslenme Uzmanı ve Yazar",
      quote: "Düzinelerce müşteriyi TheLifeCo'ya yönlendirdim ve her biri dönüşmüş olarak geri döndü. Programları sürdürülebilir, kalıcı değişim vaadini yerine getiriyor."
    },
    {
      icon: Globe,
      title: "Uluslararası Tanınma",
      description: "Yer aldığı yerler: Vogue, Forbes Wellness, The Guardian",
      quote: "TheLifeCo, wellness turizmi ve sürdürülebilir kilo yönetimi programlarında yeni bir standart öncülük ettiği için küresel olarak tanınmıştır."
    },
    {
      icon: Heart,
      title: "Misafir Başarı Oranı",
      description: "Bağımsız Sağlık Değerlendirmeleri ile Doğrulandı",
      quote: "Misafirlerin %94'ü program sonrası 6 ayda kilo kaybı sonuçlarını korur, bu sektör ortalaması olan %5-20'yi önemli ölçüde aşar."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4" style={{ color: '#01609C' }}>
            Dünya Çapında Uzmanlar Tarafından Güvenilen
          </h2>
          <div className="w-20 h-1 bg-[#01609C] mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Tıp profesyonelleri, wellness liderleri ve uluslararası medya mükemmelliğe bağlılığımızı tanır
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {endorsements.slice(0, 2).map((endorsement, index) => {
            const Icon = endorsement.icon;
            return (
              <div 
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-8 border-l-4 border-[#01609C] shadow-md hover:shadow-lg transition-shadow md:hidden"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#01609C]/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6" style={{ color: '#01609C' }} />
                  </div>
                  <div>
                    <h3 className="text-xl mb-1" style={{ color: '#01609C' }}>
                      {endorsement.title}
                    </h3>
                    <p className="text-sm text-gray-600 font-medium">
                      {endorsement.description}
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed italic">
                  "{endorsement.quote}"
                </p>
              </div>
            );
          })}
          {endorsements.map((endorsement, index) => {
            const Icon = endorsement.icon;
            return (
              <div 
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-8 border-l-4 border-[#01609C] shadow-md hover:shadow-lg transition-shadow hidden md:block"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#01609C]/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6" style={{ color: '#01609C' }} />
                  </div>
                  <div>
                    <h3 className="text-xl mb-1" style={{ color: '#01609C' }}>
                      {endorsement.title}
                    </h3>
                    <p className="text-sm text-gray-600 font-medium">
                      {endorsement.description}
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed italic">
                  "{endorsement.quote}"
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-r from-[#01609C]/10 to-[#014a7a]/10 rounded-2xl p-8 text-center">
          <h3 className="text-2xl mb-4" style={{ color: '#01609C' }}>
            Sektör Lideri Standartlar
          </h3>
          <div className="grid sm:grid-cols-3 gap-8 mt-8">
            <div>
              <div className="text-3xl font-semibold mb-2" style={{ color: '#01609C' }}>
                20+
              </div>
              <p className="text-gray-700">Yıllık Deneyim</p>
            </div>
            <div>
              <div className="text-3xl font-semibold mb-2" style={{ color: '#01609C' }}>
                40,000+
              </div>
              <p className="text-gray-700">Dönüştürülen Hayat</p>
            </div>
            <div>
              <div className="text-3xl font-semibold mb-2" style={{ color: '#01609C' }}>
                6
              </div>
              <p className="text-gray-700">Dünya Standartlarında Konum</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


