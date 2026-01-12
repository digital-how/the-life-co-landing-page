import { Star, Quote } from "lucide-react";

export function TestimonialsAR() {
  const testimonials = [
    {
      name: "Cecil",
      location: "UK",
      program: "",
      rating: 5,
      quote: "I came to TheLifeCo Bodrum for one week, hoping for a change. By the end, my blood sugar levels were back in the normal range, and I'd lost 4 kilos. The program meals were incredible; fresh, filling salads that kept me satisfied all day. Next week, I'll have my online consultation with my dietitian here to keep the progress going. This has truly been life-changing.",
      result: "فقدان 4 كيلوغرامات، عودة سكر الدم إلى طبيعته"
    },
    {
      name: "Sasa Mikevic",
      location: "",
      program: "",
      rating: 5,
      quote: "I would like to express my heartfelt gratitude to all of you, especially your incredible staff, for giving me the opportunity to transform my life. My stay at LifeCo Bodrum felt like a once-in-a-lifetime experience, but looking back, I am certain it has already become a lifelong habit—and, above all, a beautiful friendship. It has been a long time since I last felt this surge of energy radiating from my core.",
      result: "تحول الحياة، طاقة متجددة"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white" dir="rtl">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4" style={{ color: '#01609C' }}>
            تجارب حقيقية من الذين زاروا بودروم
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

