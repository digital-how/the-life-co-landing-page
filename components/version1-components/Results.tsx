import { Zap, TrendingUp, Scale, Droplet } from "lucide-react";

export function Results() {
  const results = [
    {
      icon: Zap,
      title: "Quick",
      description: "See and feel results within days, not months. Our intensive programs kickstart your transformation immediately.",
      stat: "3-7 days",
      statLabel: "To visible results"
    },
    {
      icon: TrendingUp,
      title: "Lasting",
      description: "Sustainable weight loss and lifestyle changes that stick. Learn habits that support lifelong wellbeing.",
      stat: "94%",
      statLabel: "Maintain results 6+ months"
    },
    {
      icon: Scale,
      title: "Impactful",
      description: "Achieve significant weight loss results. Guests commonly lose substantial kilos through our medically-supervised programs.",
      stat: "8-12 kg",
      statLabel: "Average weight loss (14 days)"
    },
    {
      icon: Droplet,
      title: "Lose from Fat & Toxins",
      description: "Target actual fat loss and reduced toxic load.",
      stat: "85%",
      statLabel: "Fat loss vs water weight"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4" style={{ color: '#01609C' }}>
            Real Change. Real Results.
          </h2>
          <div className="w-20 h-1 bg-[#01609C] mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Measured in energy, clarity, fat loss, and sustainable change.
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