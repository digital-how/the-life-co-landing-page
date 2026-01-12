import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQTR() {
  const faqs = [
    {
      question: "Sonuçları ne kadar sürede görürüm?",
      answer: "Çoğu misafir 3-5 gün içinde daha enerjik hissettiğini ve olumlu değişiklikler fark ettiğini bildirir. Görünür kilo kaybı genellikle ilk hafta içinde başlar. Ancak, en önemli fayda, programınız bittikten çok sonra bile sonuç vermeye devam eden kalıcı yaşam tarzı değişiklikleridir."
    },
    {
      question: "Program tıbbi gözetim altında mı?",
      answer: "Evet, kesinlikle. Tüm programlarımız lisanslı hekimler, hemşireler, beslenme uzmanları ve wellness uzmanları tarafından geliştirilir ve denetlenir. Program başında kapsamlı bir sağlık değerlendirmesi yapılır ve konaklamanız boyunca tıbbi ekip hazır bulunur."
    },
    {
      question: "TheLifeCo'yu diğer detoks programlarından farklı kılan nedir?",
      answer: "Hızlı çözümler sunan kürlerin aksine; programlarımız tıbbi gözetimi, kişiye özel beslenme planlarını, bütüncül wellness uygulamalarını ve sürekli desteği bir araya getirir. Geçici sonuçlara değil, sürdürülebilir yaşam tarzı değişikliklerine odaklanırız. 6 ay sonra kilo kaybını koruma oranımızın %94 olması bunun göstergesidir."
    },
    {
      question: "Program sırasında aç kalacak mıyım?",
      answer: "Hayır. Programlarımız, sizi doyuran besin değeri yüksek gıdalarla bedeni beslemek üzere tasarlanmıştır. Gün boyunca lezzetli, şeflerimiz tarafından hazırlanan öğünler sunulur. Pek çok misafir, yemeğin ne kadar doyurucu ve lezzetli olduğuna şaşırır. TheLifeCo'da detoks yoksunluk anlamına gelmez. "
    },
    {
      question: "Programlar ne kadar sürer?",
      answer: "Hedeflerinize ve zamanınıza bağlı olarak 7 ila 21 gün arasında programlar sunuyoruz. Wellness danışmanlarımız, görüşmeniz sırasında sizin için ideal süreyi belirlemenize yardımcı olur. Birçok misafir 7–14 günle başlar ve ek programlar için geri döner."
    },
    {
      question: "Ayrıldıktan sonra sonuçları koruyabilir miyim?",
      answer: "Evet! Sürdürülebilirlik yaklaşımımızın temelidir. Kişiselleştirilmiş yemek planları, yaşam tarzı stratejileri ve sürekli destek kaynaklarıyla ayrılırsınız. Mezunlarımız sonuçlarını altı ay sonra %94 oranında korur, bu da sektör ortalaması olan %5-20 ile karşılaştırıldığında çok yüksektir."
    },
    {
      question: "Program tıbbi rahatsızlıkları olanlar için uygun mu?",
      answer: "Programlarımız diyabet, hipertansiyon ve sindirim sorunları dahil olmak üzere çoğu sağlık durumu için uyarlanabilir. İlk konsültasyonunuz sırasında tıbbi ekibimiz sağlık geçmişinizi gözden geçirecek ve programınızı buna göre özelleştirecektir. Herhangi bir wellness programına başlamadan önce kişisel doktorunuzla görüşmenizi öneririz."
    },
    {
      question: "Program ücretine neler dahil?",
      answer: "Tıbbi konsültasyonlar ve takip, tüm yemekler ve detoks takviyeleri, konaklama (konaklamalı programlarda), wellness aktiviteleri (yoga, meditasyon, fitness), spa uygulamaları, eğitici atölyeler ve program sonrası destek materyalleri dahildir."
    },
    {
      question: "Sanal/uzaktan programlar sunuyor musunuz?",
      answer: "Evet! Wellness merkezlerimizde konaklamalı programlar ve evinizden tamamlayabileceğiniz sanal programlar sunuyoruz. Sanal programlar video konsültasyonlar, yemek planları ve tarifler, takviye protokolleri, rehberli wellness uygulamaları ve ekibimizden günlük destek içerir."
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4" style={{ color: '#01609C' }}>
            Sıkça Sorulan Sorular
          </h2>
          <div className="w-20 h-1 bg-[#01609C] mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">
            TheLifeCo detoks programları hakkında bilmeniz gereken her şey
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left hover:no-underline">
                  <span style={{ color: '#01609C' }}>{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-12 text-center bg-white rounded-xl p-8 shadow-md">
          <h3 className="text-xl mb-3" style={{ color: '#01609C' }}>
            Hala sorularınız mı var?
          </h3>
          <p className="text-gray-600 mb-6">
            Wellness danışmanlarımız, ihtiyaçlarınıza en uygun programı bulmanıza yardımcı olmak için burada.
          </p>
          <button 
            className="px-8 py-3 rounded-lg text-white transition-colors"
            style={{ backgroundColor: '#01609C' }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#014a7a'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#01609C'}
          >
            Ücretsiz Konsültasyon Planla
          </button>
        </div>
      </div>
    </section>
  );
}

