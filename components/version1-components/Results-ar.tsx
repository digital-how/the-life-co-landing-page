import { Zap, TrendingUp, Scale, Droplet } from "lucide-react";

export function ResultsAR() {
  const results = [
    {
      icon: Zap,
      title: "سريع",
      description: "شاهد واشعر بالنتائج في غضون أيام، وليس أشهر. برامجنا المكثفة تبدأ تحولك على الفور.",
      stat: "3-7 أيام",
      statLabel: "للنتائج المرئية"
    },
    {
      icon: TrendingUp,
      title: "دائم",
      description: "فقدان الوزن المستدام وتغييرات نمط الحياة التي تبقى. تعلم عادات تدعم الرفاهية مدى الحياة.",
      stat: "94%",
      statLabel: "الحفاظ على النتائج 6+ أشهر"
    },
    {
      icon: Scale,
      title: "مؤثر",
      description: "تحقيق نتائج كبيرة لفقدان الوزن. الضيوف عادة يفقدون كيلوغرامات كبيرة من خلال برامجنا الخاضعة للإشراف الطبي.",
      stat: "8-12 كجم",
      statLabel: "متوسط فقدان الوزن (14 يومًا)"
    },
    {
      icon: Droplet,
      title: "فقدان من الدهون والسموم",
      description: "استهدف فقدان الدهون الفعلي وتقليل الحمل السام.",
      stat: "85%",
      statLabel: "فقدان الدهون مقابل فقدان الماء"
    }
  ];

  return (
    <section className="py-20 bg-white" dir="rtl">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4" style={{ color: '#01609C' }}>
            تغيير حقيقي. نتائج حقيقية.
          </h2>
          <div className="w-20 h-1 bg-[#01609C] mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            يُقاس بالطاقة والوضوح وفقدان الدهون والتغيير المستدام.
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


