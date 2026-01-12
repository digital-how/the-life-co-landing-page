import { Star, Quote } from "lucide-react";

export function TestimonialsAR() {
  const testimonials = [
    {
      name: "ممثلة لبنانية",
      location: "",
      program: "زارت بودروم في 2024",
      rating: 5,
      quote: "لقد علمني هذا حقًا الكثير عن نفسي. شعرت أنني كنت أفعل ذلك في بيئة آمنة جدًا — مع أخصائي تغذية يتابعك، مع أشخاص يعرفون ما يفعلونه، في إعداد طبي جدًا، ومع برامج مناسبة لمساعدتك على إزالة السموم.",
      result: "تعلم الذاتي، بيئة آمنة"
    },
    {
      name: "Cecil",
      location: "المملكة المتحدة",
      program: "",
      rating: 5,
      quote: "جئت إلى TheLifeCo بودروم لمدة أسبوع واحد، آملاً في التغيير. بحلول النهاية، عادت مستويات السكر في الدم إلى المعدل الطبيعي، وفقدت 4 كيلوغرامات. كانت وجبات البرنامج لا تصدق؛ سلطات طازجة ومشبعة أبقتني راضيًا طوال اليوم. الأسبوع القادم، سأحصل على استشارة عبر الإنترنت مع أخصائي التغذية الخاص بي هنا للحفاظ على التقدم. لقد كان هذا حقًا محولًا للحياة.",
      result: "فقدان 4 كيلوغرامات، عودة سكر الدم إلى طبيعته"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white" dir="rtl">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4" style={{ color: '#01609C' }}>
            شهادات: تجارب حقيقية من الذين زاروا بودروم
          </h2>
          <div className="w-20 h-1 bg-[#01609C] mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            استمع من الضيوف الذين حولوا حياتهم من خلال برامج TheLifeCo
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100 relative"
            >
              <Quote className="absolute top-6 left-6 w-12 h-12 text-[#01609C]/10" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#01609C] text-[#01609C]" />
                ))}
              </div>
              
              <p className="text-gray-700 leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </p>
              
              <div className="pt-6 border-t border-gray-200">
                <div className="flex justify-between items-start">
                  <div className="text-right">
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    {testimonial.location && (
                      <p className="text-sm text-gray-600">{testimonial.location}</p>
                    )}
                    {testimonial.program && (
                      <p className="text-sm text-gray-600">{testimonial.program}</p>
                    )}
                  </div>
                  <div>
                    <p className="text-sm font-semibold" style={{ color: '#01609C' }}>
                      {testimonial.result}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600">
            انضم إلى أكثر من <span className="font-semibold" style={{ color: '#01609C' }}>40,000+</span> ضيفًا حولوا حياتهم
          </p>
        </div>
      </div>
    </section>
  );
}

