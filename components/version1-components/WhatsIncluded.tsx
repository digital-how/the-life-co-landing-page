export function WhatsIncluded() {
  const categories = [
    {
      title: "Accommodation & Nutrition",
      description: "A supportive retreat environment combined with personalised nourishment designed to restore balance.",
      items: [
        "Accommodation in our retreat resorts (double rooms)",
        "Personalised nutrition plan including all meals and required supplements",
        "Nutritional pathways may include Master Detox, Green Juice, Raw Food, Ketogenic, Water Fasting, or Intermittent Fasting",
        "All nutrition is selected based on individual medical and wellness assessment"
      ]
    },
    {
      title: "Wellness Services",
      description: "Daily expert guidance and core wellness therapies that support sustainable change.",
      items: [
        "Daily wellness coaching with dietitians and psychologists",
        "Body composition analysis (2×)",
        "Infrared sauna and steam room access (daily)",
        "Colon cleansing (self-administered, daily)",
        "Unlimited detox soup and herbal teas"
      ]
    },
    {
      title: "Bio-Hacking Technologies (Daily)",
      description: "Advanced technologies supporting detoxification, recovery, and metabolic efficiency.",
      items: [
        "Turbosonic vibration therapy",
        "BioCharger energy therapy",
        "BioPhoton therapy",
        "Oxygen therapy",
        "Luminette light therapy",
        "Inversion table therapy"
      ]
    },
    {
      title: "Medical Services",
      description: "Continuous medical oversight ensuring safety, precision, and confidence throughout your stay.",
      items: [
        "Medical consultations (2×)",
        "Fully equipped on-site medical clinic",
        "Dedicated medical team of doctors and nurses",
        "Medical support available 24/7",
        "Partnered emergency hospital"
      ]
    },
    {
      title: "Cutting-Edge Metabolic Therapies",
      description: "Targeted interventions designed to enhance fat metabolism and physical resilience.",
      items: [
        "CAR.O.L bike sessions (2×)",
        "Robolex therapy (30 minutes × 2)",
        "Cold plunge sessions (2×)",
        "Pressotherapy lymphatic drainage (1×)",
        "Red light bed therapy or alternative metabolic therapy"
      ]
    },
    {
      title: "Daily Activities",
      description: "A structured rhythm of movement, education, and recovery to support long-term wellbeing.",
      items: [
        "Sunrise walks",
        "Mobility and relaxation yoga",
        "Meditation sessions",
        "Functional training (3× per week)",
        "Educational wellness talks",
        "Evening relaxation activities"
      ]
    }
  ];

  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-gray-50 to-white pb-8 md:pb-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-4xl md:text-5xl mb-6" style={{ color: '#01609C' }}>
            What's Included in Your Retreat
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            No add-ons, no hidden costs — every service below is included in your program.
          </p>
        </div>

        {/* Grid of Categories - Desktop / Horizontal Scrollable Cards - Mobile */}
        <div className="md:grid md:grid-cols-2 md:gap-8 mb-8 md:mb-12">
          {/* Mobile: Horizontal Scroll Container */}
          <div className="md:hidden overflow-x-auto pb-4 -mx-6 px-6">
            <div className="flex gap-4" style={{ scrollSnapType: 'x mandatory' }}>
              {categories.map((category, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-xl shadow-lg p-5 border-t-4 border-[#01609C] flex-shrink-0 w-[85vw]"
                  style={{ scrollSnapAlign: 'start' }}
                >
                  <h3 className="text-xl mb-3" style={{ color: '#01609C' }}>
                    {category.title}
                  </h3>
                  <p className="text-gray-600 mb-4 italic text-sm leading-relaxed">
                    {category.description}
                  </p>
                  <ul className="space-y-2">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-2">
                        <span className="text-[#01609C] text-xs mt-0.5 flex-shrink-0">•</span>
                        <span className="text-gray-700 text-sm leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop: Grid Layout */}
          {categories.map((category, index) => (
            <div 
              key={index}
              className="hidden md:block bg-white rounded-xl shadow-lg p-8 border-t-4 border-[#01609C] hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-2xl md:text-3xl mb-4" style={{ color: '#01609C' }}>
                {category.title}
              </h3>
              <p className="text-gray-600 mb-6 italic leading-relaxed">
                {category.description}
              </p>
              <ul className="space-y-3">
                {category.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-3">
                    <span className="text-[#01609C] mt-1 flex-shrink-0">•</span>
                    <span className="text-gray-700 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Message */}
        <div className="text-center mt-8 md:mt-12 pt-6 md:pt-8 border-t-2 border-gray-200">
          <p className="text-base md:text-xl lg:text-2xl text-gray-800 max-w-4xl mx-auto leading-relaxed">
            Accommodation is included — but what you're joining is far more than a stay.<br className="hidden md:block" />
            <span className="md:inline block mt-1 md:mt-0"> </span>It's a fully guided, multi-layered program where every element is included and coordinated for you.
          </p>
        </div>
      </div>
    </section>
  );
}