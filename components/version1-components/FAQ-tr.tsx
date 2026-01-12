import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQTR() {
  const faqs = [
    {
      question: "Ne kadar hızlı sonuç göreceğim?",
      answer: "Çoğu misafir 3-5 gün içinde daha enerjik hissettiğini ve olumlu değişiklikler fark ettiğini bildirir. Görünür kilo kaybı genellikle ilk hafta içinde başlar. Ancak, en önemli fayda, programınız bittikten çok sonra bile sonuç vermeye devam eden kalıcı yaşam tarzı değişiklikleridir."
    },
    {
      question: "Program tıbbi gözetim altında mı?",
      answer: "Evet, kesinlikle. Tüm programlarımız doktorlar, beslenme uzmanları ve wellness uzmanları dahil olmak üzere lisanslı tıp profesyonelleri tarafından geliştirilir ve gözetilir. Programınızın başında kapsamlı bir sağlık değerlendirmesi alacaksınız ve tıbbi personel konaklamanız boyunca mevcuttur."
    },
    {
      question: "TheLifeCo'yu diğer detoks programlarından farklı kılan nedir?",
      answer: "Hızlı çözüm temizliklerinden farklı olarak, programlarımız tıbbi gözetim, kişiselleştirilmiş beslenme planları, bütünsel wellness uygulamaları ve sürekli desteği birleştirir. Geçici sonuçlara değil, sürdürülebilir yaşam tarzı değişikliklerine odaklanıyoruz. 6 ay sonra kilo kaybını koruma konusundaki %94 başarı oranımız bu yaklaşımı gösterir."
    },
    {
      question: "Program sırasında aç kalacak mıyım?",
      answer: "Hayır. Programlarımız sizi doyuran besin açısından zengin gıdalarla vücudunuzu beslemek için tasarlanmıştır. Gün boyunca lezzetli, şef hazırlığı yemeklerin tadını çıkaracaksınız. Birçok misafir yemeğin ne kadar doyurucu ve lüks olduğuna şaşırır — TheLifeCo'da detoks yoksunluk anlamına gelmez."
    },
    {
      question: "Programlar ne kadar sürer?",
      answer: "Hedeflerinize ve programınıza bağlı olarak 7 ila 21 gün arasında programlar sunuyoruz. Wellness danışmanlarımız konsültasyonunuz sırasında ideal program uzunluğunu seçmenize yardımcı olabilir. Birçok misafir 7-14 günlük bir programla başlar ve ek seanslar için geri döner."
    },
    {
      question: "Ayrıldıktan sonra sonuçları koruyabilir miyim?",
      answer: "Evet! Sürdürülebilirlik yaklaşımımızın temelidir. Kişiselleştirilmiş yemek planları, yaşam tarzı stratejileri ve sürekli destek kaynaklarıyla ayrılırsınız. Mezunlarımız sonuçlarını altı ay sonra %94 oranında korur, bu da sektör ortalaması olan %5-20 ile karşılaştırıldığında çok yüksektir."
    },
    {
      question: "Program tıbbi durumları olan kişiler için uygun mu?",
      answer: "Programlarımız diyabet, hipertansiyon ve sindirim sorunları dahil olmak üzere çoğu sağlık durumu için uyarlanabilir. İlk konsültasyonunuz sırasında tıbbi ekibimiz sağlık geçmişinizi gözden geçirecek ve programınızı buna göre özelleştirecektir. Herhangi bir wellness programına başlamadan önce kişisel doktorunuzla görüşmenizi öneririz."
    },
    {
      question: "Program maliyetine neler dahil?",
      answer: "Programınız şunları içerir: tıbbi konsültasyonlar ve izleme, tüm yemekler ve detoks takviyeleri, konaklama (konaklamalı programlar için), wellness aktiviteleri (yoga, meditasyon, fitness sınıfları), spa tedavileri, eğitici atölyeler ve program sonrası destek materyalleri."
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
            Wellness danışmanlarımız ihtiyaçlarınıza uygun mükemmel programı bulmanıza yardımcı olmak için burada
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

