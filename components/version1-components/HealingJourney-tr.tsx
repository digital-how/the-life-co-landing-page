export function HealingJourneyTR() {
  const layers = [
    {
      number: "01",
      title: "Bedenin Nefes Almasına İzin Veren Bir Ortam",
      subtitle: "Rahatlatıcı & Destekleyici Ortam",
      description: "Bulunduğunuz ortam tesadüf değildir. Sakinleştirici ve onarıcı bir çevre, stresin azalmasına ve sinir sisteminin düzenlenmesine yardımcı olur — bu da metabolik sağlık ve doğal kilo dengesi için temel oluşturur.",
      closing: "Burada bedeninizden değişmesi istenmeden önce yavaşlamasına ve huzur bulmasına izin verilir."
    },
    {
      number: "02",
      title: "Size Göre Tasarlanmış Bir Program",
      subtitle: "Kişiye Özel Wellness Programı",
      description: "Programınız kişisel sağlık değerlendirmesine göre şekillenir ve konaklamanız boyunca bedeninizin verdiği yanıta göre sürekli güncellenir.",
      closing: "Kilo azaltımı; güç, enerji ve canlılıktan ödün vermeden, metabolik dengeyle birlikte desteklenir."
    },
    {
      number: "03",
      title: "Alışkanlıkların Arkasındaki Zihni Destekleme",
      subtitle: "Zihinsel Dayanıklılık ve Farkındalık",
      description: "Kilo yalnızca fizyolojiyle değil; stres, duygusal kalıplar ve günlük alışkanlıklarla da ilişkilidir. Farkındalık uygulamaları ve zihinsel dayanıklılık desteği, daha sakin ve sürdürülebilir seçimlerin ortaya çıkmasına yardımcı olur.",
      closing: null
    },
    {
      number: "04",
      title: "Bütüncül Tıp & Hedefli Terapiler",
      subtitle: "Tıbbi ve Biohacking Desteği",
      description: "Terapiler; detoksifikasyonu, dolaşımı, toparlanmayı ve metabolik verimliliği desteklemek üzere seçilir. Beslenme ve yaşam tarzı düzenlemeleriyle birlikte çalışarak, bedenin zorlanmadan yanıt verme kapasitesini artırır.",
      closing: null
    },
    {
      number: "05",
      title: "Retreat Sonrasında da Süren Bir Ortaklık",
      subtitle: "Eve Taşınan Uygulamalar & Öğrenimler",
      description: "Farkındalık ve eğitim yolculuğun temel bir parçasıdır. Merkezlimizden günlük hayatta uygulayabileceğiniz pratik rehberlik ve kişisel bir beceri ve uygulama araç setiyle ayrılırsınız — konaklamanızdan sonra da devam eden bir destekle, kilo, kan şekeri ve günlük alışkanlıklarda uzun vadeli dengeyi sürdürmeniz sağlanır.",
      closing: null
    },
    {
      number: "06",
      title: "Süreci Tamamlayan Yenilenme",
      subtitle: "Spa ve Derin İyileşme",
      description: "Onarıcı bakımlar ve spa deneyimleri, fiziksel toparlanmayı ve derin gevşemeyi destekler. Bu son katman, bedenin sıfırlanma, değişimi entegre etme ve zaman içinde olumlu yanıt verme kapasitesini güçlendirir.",
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
            Klinik içgörüyle şekillenen ve gözlemle sürekli geliştirilen kişiselleştirilmiş bakım.
          </p>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            TheLifeCo İyileşme Yolculuğu'nun her katmanı net bir amaca hizmet eder. Birlikte, bedeninizin dengeyi güvenle, kademeli olarak ve kalıcı biçimde yeniden kurması için gerekli koşulları yaratırlar.
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

