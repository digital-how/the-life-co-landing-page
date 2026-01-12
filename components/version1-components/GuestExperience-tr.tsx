import { Check } from "lucide-react";

export function GuestExperienceTR() {
  const experiences = [
    "Sağlıklı bir şekilde ve zaman diliminde elde edilen dengeli kilo azaltma",
    "Genellikle daha iyi enerji ve canlılıkla birlikte gelen yükseltilmiş metabolik denge",
    "Değeri tanınan dengeli bir diyetin korunması",
    "Başarının ödülü olarak gelen psikolojik destek",
    "Beslenme alırken sindirim ve gastronomik dinlenme",
    "Azaltılmış iltihaplanma ve iyileştirilmiş hücresel sağlık",
    "Daha iyi uyku kalitesi ve zihinsel netlik",
    "Güçlendirilmiş bağışıklık sistemi işlevi"
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl mb-4" style={{ color: '#01609C' }}>
            Misafirlerin Genellikle Yaşadıkları
          </h2>
          <div className="w-20 h-1 bg-[#01609C] mx-auto mb-6"></div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-6">
            {experiences.map((experience, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-[#01609C] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <p className="text-gray-700 leading-relaxed">
                  {experience}
                </p>
              </div>
            ))}
          </div>
          
          <div className="mt-10 pt-8 border-t border-gray-200 text-center">
            <p className="text-gray-600 italic">
              Sonuçlar bireysel sağlık durumlarına ve program seçimine bağlı olarak değişebilir
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

