import { Star, Quote } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      location: "London, UK",
      program: "14-Day Detox Reset",
      rating: 5,
      quote: "I've tried every diet under the sun, but nothing stuck until TheLifeCo. The program didn't just help me lose 12 pounds—it completely transformed how I think about food and my body. Six months later, I'm still maintaining my results and feeling better than ever.",
      result: "Lost 12 lbs, maintained 6+ months"
    },
    {
      name: "Marcus Johnson",
      location: "New York, USA",
      program: "7-Day Intensive Cleanse",
      rating: 5,
      quote: "As a busy executive, I needed something that would give me results quickly but sustainably. The TheLifeCo program exceeded all expectations. The medical supervision gave me confidence, and the food was actually delicious. I learned tools I use every single day.",
      result: "Improved energy levels by 80%"
    },
    {
      name: "Amara Okafor",
      location: "Lagos, Nigeria",
      program: "21-Day Wellness Journey",
      rating: 5,
      quote: "This program changed my life. Not just my weight, but my relationship with myself. The holistic approach addressed my emotional eating patterns, and the ongoing support has been invaluable. I finally feel free from the diet cycle.",
      result: "Lost 18 lbs, gained confidence"
    },
    {
      name: "Thomas Weber",
      location: "Munich, Germany",
      program: "10-Day Metabolic Reset",
      rating: 5,
      quote: "After years of yo-yo dieting, I was skeptical. But the science-backed approach and personalized attention made all the difference. My metabolism has improved, my inflammation markers are down, and I've maintained my 15-pound loss for 8 months now.",
      result: "15 lbs lost, inflammation reduced"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4" style={{ color: '#01609C' }}>
            Real Stories, Real Results
          </h2>
          <div className="w-20 h-1 bg-[#01609C] mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from guests who have transformed their lives through TheLifeCo programs
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.slice(0, 2).map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100 relative md:hidden"
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
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                    <p className="text-sm text-gray-600">{testimonial.program}</p>
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
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100 relative hidden md:block"
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
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                    <p className="text-sm text-gray-600">{testimonial.program}</p>
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
            Join over <span className="font-semibold" style={{ color: '#01609C' }}>5,000+</span> guests who have transformed their lives
          </p>
        </div>
      </div>
    </section>
  );
}