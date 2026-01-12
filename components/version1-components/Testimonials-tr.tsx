import { Star, Quote } from "lucide-react";

export function TestimonialsTR() {
  const testimonials = [
    {
      name: "Cecil",
      location: "UK",
      program: "",
      rating: 5,
      quote: "TheLifeCo Bodrum'a bir haftalık bir değişim umuduyla geldim. Haftanın sonunda kan şekerim normal aralığa döndü ve 4 kilo verdim. Program yemekleri inanılmazdı; taze, doyurucu salatalar gün boyu tok kalmamı sağladı. Önümüzdeki hafta diyetisyenimle online görüşmem var, böylece ilerlemeyi sürdüreceğim. Gerçekten hayatımı değiştirdi.",
      result: "4 kilo kaybı, kan şekeri normale döndü"
    },
    {
      name: "Sasa Mikevic",
      location: "",
      program: "",
      rating: 5,
      quote: "Hayatımı dönüştürme fırsatını sunduğunuz için, özellikle muhteşem ekibinize en içten teşekkürlerimi sunmak isterim. LifeCo Bodrum'daki konaklamam bir defaya mahsus bir deneyim gibi hissettirdi; ancak geriye dönüp baktığımda bunun çoktan ömür boyu sürecek bir alışkanlığa ve her şeyden önemlisi güzel bir dostluğa dönüştüğünden eminim. Uzun zamandır ilk kez, merkezimden yayılan bu enerji artışını hissettim.",
      result: "Yaşam dönüşümü, yenilenen enerji"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4" style={{ color: '#01609C' }}>
            Bodrum'u Ziyaret Edenlerden Gerçek Deneyimler
          </h2>
          <div className="w-20 h-1 bg-[#01609C] mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            TheLifeCo programları aracılığıyla hayatlarını dönüştüren misafirlerimizden dinleyin
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100 relative"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-[#01609C]/10" />
              
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
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    {testimonial.location && (
                      <p className="text-sm text-gray-600">{testimonial.location}</p>
                    )}
                    {testimonial.program && (
                      <p className="text-sm text-gray-600">{testimonial.program}</p>
                    )}
                  </div>
                  <div className="text-right">
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
            Hayatlarını dönüştüren <span className="font-semibold" style={{ color: '#01609C' }}>40,000+</span> misafire katılın
          </p>
        </div>
      </div>
    </section>
  );
}

