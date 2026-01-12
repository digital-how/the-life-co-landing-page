export function HealingJourneyTR() {
  const layers = [
    {
      number: "01",
      title: "Vücudun Nefes Almasına İzin Veren Ortam",
      subtitle: "Rahatlama ve Destekleyici Ortam",
      description: "Çevreniz tesadüfi değildir. Sakin, onarıcı bir ortam stresi azaltmaya ve sinir sistemini düzenlemeye yardımcı olur — metabolik sağlık ve doğal kilo düzenlemesi için temel bir temel.",
      closing: "Burada, vücudunuzdan değişmesi istenmeden önce yavaşlamasına izin verilir."
    },
    {
      number: "02",
      title: "Sizin Etrafınızda Tasarlanmış Bir Program",
      subtitle: "Kişiselleştirilmiş Wellness Programı",
      description: "Programınız kişisel bir sağlık değerlendirmesiyle şekillenir ve konaklamanız boyunca rafine edilir. Beslenme, terapiler ve günlük yapı, vücudunuzun nasıl yanıt verdiğine göre sürekli uyarlanır.",
      closing: "Kilo azaltma, güç, enerji veya canlılıktan ödün vermeden metabolik dengeyle birlikte desteklenir."
    },
    {
      number: "03",
      title: "Alışkanlıkların Arkasındaki Zihni Destekleme",
      subtitle: "Zihinsel Dayanıklılık ve Farkındalık",
      description: "Kilo sadece fizyolojiden değil, stresten, duygusal kalıplardan ve günlük alışkanlıklardan etkilenir. Farkındalık uygulamaları ve zihinsel dayanıklılık desteği, farkındalık ve tutarlılık geliştirmenize yardımcı olur, daha sakin ve sürdürülebilir seçimlerin ortaya çıkmasına izin verir.",
      closing: null
    },
    {
      number: "04",
      title: "Bütünleştirici Tıp ve Hedefli Terapiler",
      subtitle: "Tıbbi ve Biohacking Desteği",
      description: "Terapiler detoksifikasyon, dolaşım, iyileşme ve metabolik verimliliği desteklemek için seçilir. Bu müdahaleler beslenme ve yaşam tarzı ayarlamalarıyla birlikte çalışır, vücudun zorlamadan yanıt verme yeteneğini artırır.",
      closing: null
    },
    {
      number: "05",
      title: "Retreat'ten Sonra Devam Eden Bir Ortaklık",
      subtitle: "Eve Götürülecek Uygulamalar ve Öğrenmeler",
      description: "Eğitim yolculuğun önemli bir parçasıdır. Günlük yaşamda uygulayabileceğiniz pratik rehberlik ve kişisel bir beceri ve uygulama araç kutusuyla ayrılırsınız — konaklamanızdan sonra devam eden, eve döndüğünüzde kilo, kan şekeri ve günlük alışkanlıklarda uzun vadeli dengeyi sağlayan sürekli bir ortaklıkla desteklenir.",
      closing: null
    },
    {
      number: "06",
      title: "Süreci Tamamlayan Restorasyon",
      subtitle: "Spa ve Derin İyileşme",
      description: "Onarıcı tedaviler ve spa deneyimleri fiziksel iyileşmeyi ve derin rahatlamayı destekler. Bu son katman, vücudun sıfırlama, değişimi entegre etme ve zamanla olumlu yanıt verme kapasitesini güçlendirir.",
      closing: null
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-6" style={{ color: '#01609C' }}>
            Hassasiyetle Yönlendirilen, İncelikli Bir Bakım Yolculuğu
          </h2>
          <p className="text-lg text-gray-600 mb-6 max-w-3xl mx-auto italic">
            Klinik içgörüyle şekillendirilmiş ve gözlem yoluyla sürekli rafine edilmiş kişiselleştirilmiş bakım.
          </p>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            TheLifeCo İyileşme Yolculuğunun her katmanı net bir amaca hizmet eder. Birlikte, vücudunuzun dengeyi geri kazandırmak için ihtiyaç duyduğu koşulları yaratırlar — güvenli, ilerleyici ve kalıcı bir şekilde.
          </p>
        </div>

        {/* Grid of Layers - 3 columns, 2 rows */}
        <div className="grid md:grid-cols-3 gap-8">
          {layers.map((layer, index) => (
            <div 
              key={index}
              className="bg-[#faf9f7] rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col"
            >
              {/* Layer Number */}
              <div className="mb-4">
                <span 
                  className="text-5xl font-light opacity-30"
                  style={{ color: '#01609C' }}
                >
                  {layer.number}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl mb-3" style={{ color: '#01609C' }}>
                {layer.title}
              </h3>

              {/* Subtitle */}
              <p className="text-sm text-gray-600 uppercase tracking-wider mb-4">
                {layer.subtitle}
              </p>

              {/* Description */}
              <p className="text-gray-700 leading-relaxed mb-4 flex-grow">
                {layer.description}
              </p>

              {/* Closing Statement (if exists) */}
              {layer.closing && (
                <p className="text-gray-900 italic text-sm mt-4 pt-4 border-t border-gray-300">
                  {layer.closing}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

