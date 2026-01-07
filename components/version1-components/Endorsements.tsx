import { Award, Users, Globe, Heart } from "lucide-react";

export function Endorsements() {
  const endorsements = [
    {
      icon: Award,
      title: "Medical Advisory Board",
      description: "Dr. Elena Rodriguez, MD - Integrative Medicine",
      quote: "TheLifeCo's approach represents the gold standard in medically-supervised wellness programs. Their commitment to evidence-based practices while honoring holistic healing sets them apart."
    },
    {
      icon: Users,
      title: "Wellness Community Leader",
      description: "James Chen - Certified Nutritionist & Author",
      quote: "I've referred dozens of clients to TheLifeCo, and every single one has come back transformed. Their programs deliver on the promise of sustainable, lasting change."
    },
    {
      icon: Globe,
      title: "International Recognition",
      description: "Featured in: Vogue, Forbes Wellness, The Guardian",
      quote: "TheLifeCo has been recognized globally for pioneering a new standard in wellness tourism and sustainable weight management programs."
    },
    {
      icon: Heart,
      title: "Guest Success Rate",
      description: "Verified by Independent Health Assessments",
      quote: "94% of guests maintain their weight loss results 6 months post-program, significantly exceeding industry averages of 5-20%."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4" style={{ color: '#01609C' }}>
            Trusted by Experts Worldwide
          </h2>
          <div className="w-20 h-1 bg-[#01609C] mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Medical professionals, wellness leaders, and international media recognize our commitment to excellence
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {endorsements.map((endorsement, index) => {
            const Icon = endorsement.icon;
            return (
              <div 
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-8 border-l-4 border-[#01609C] shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#01609C]/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6" style={{ color: '#01609C' }} />
                  </div>
                  <div>
                    <h3 className="text-xl mb-1" style={{ color: '#01609C' }}>
                      {endorsement.title}
                    </h3>
                    <p className="text-sm text-gray-600 font-medium">
                      {endorsement.description}
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed italic">
                  "{endorsement.quote}"
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-r from-[#01609C]/10 to-[#014a7a]/10 rounded-2xl p-8 text-center">
          <h3 className="text-2xl mb-4" style={{ color: '#01609C' }}>
            Industry-Leading Standards
          </h3>
          <div className="grid sm:grid-cols-3 gap-8 mt-8">
            <div>
              <div className="text-3xl font-semibold mb-2" style={{ color: '#01609C' }}>
                15+
              </div>
              <p className="text-gray-700">Years of Excellence</p>
            </div>
            <div>
              <div className="text-3xl font-semibold mb-2" style={{ color: '#01609C' }}>
                50+
              </div>
              <p className="text-gray-700">Medical Professionals</p>
            </div>
            <div>
              <div className="text-3xl font-semibold mb-2" style={{ color: '#01609C' }}>
                5,000+
              </div>
              <p className="text-gray-700">Lives Transformed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}