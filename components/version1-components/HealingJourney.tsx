export function HealingJourney() {
  const layers = [
    {
      number: "01",
      title: "Environment That Allows the Body to Exhale",
      subtitle: "Relaxation & Supportive Setting",
      description: "Your surroundings are not incidental. A calm, restorative environment helps reduce stress and regulate the nervous system — an essential foundation for metabolic health and natural weight regulation.",
      closing: "Here, your body is given permission to slow down before it is asked to change."
    },
    {
      number: "02",
      title: "A Program Designed Around You",
      subtitle: "Personalised Wellness Program",
      description: "Your program is shaped by a personal health assessment and refined throughout your stay. Nutrition, therapies, and daily structure are continuously adapted based on how your body responds.",
      closing: "Weight reduction is supported alongside metabolic balance — without compromising strength, energy, or vitality."
    },
    {
      number: "03",
      title: "Supporting the Mind Behind the Habits",
      subtitle: "Mental Resilience & Mindfulness",
      description: "Weight is influenced not only by physiology, but by stress, emotional patterns, and daily habits. Mindfulness practices and mental resilience support help you develop awareness and consistency, allowing calmer and more sustainable choices to emerge.",
      closing: null
    },
    {
      number: "04",
      title: "Integrative Medicine & Targeted Therapies",
      subtitle: "Medical & Biohacking Support",
      description: "Therapies are selected to support detoxification, circulation, recovery, and metabolic efficiency. These interventions work alongside nutritional and lifestyle adjustments, enhancing the body's ability to respond without force.",
      closing: null
    },
    {
      number: "05",
      title: "A Partnership That Lasts Beyond the Retreat",
      subtitle: "Practices & Learnings to Take Home",
      description: "Education is an essential part of the journey. You leave with practical guidance and a personal toolbox of skills and practices you can apply in daily life — supported by an ongoing partnership that continues beyond your stay, enabling long-term balance in weight, blood sugar, and everyday habits once you return home.",
      closing: null
    },
    {
      number: "06",
      title: "Restoration That Completes the Process",
      subtitle: "Spa & Deep Recovery",
      description: "Restorative treatments and spa experiences support physical recovery and deep relaxation. This final layer reinforces the body's capacity to reset, integrate change, and respond positively over time.",
      closing: null
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-6" style={{ color: '#01609C' }}>
            A Refined Journey of Care, Guided by Precision
          </h2>
          <p className="text-lg text-gray-600 mb-6 max-w-3xl mx-auto italic">
            Personalised care shaped by clinical insight and continuously refined through observation.
          </p>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Each layer of TheLifeCo Healing Journey serves a clear purpose. Together, they create the conditions your body needs to restore balance — safely, progressively, and in a way that lasts.
          </p>
        </div>

        {/* Grid of Layers - 3 columns, 2 rows */}
        <div className="grid md:grid-cols-3 gap-8">
          {layers.map((layer, index) => (
            <div 
              key={index}
              className="bg-[#faf9f7] rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col"
            >
              {/* Layer Number */}
              <div className="mb-4">
                <span 
                  className="text-5xl font-light opacity-30"
                  style={{ color: '#01609C' }}
                >
                  {layer.number}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl mb-3" style={{ color: '#01609C' }}>
                {layer.title}
              </h3>

              {/* Subtitle */}
              <p className="text-sm text-gray-600 uppercase tracking-wider mb-4">
                {layer.subtitle}
              </p>

              {/* Description */}
              <p className="text-gray-700 leading-relaxed mb-4 flex-grow">
                {layer.description}
              </p>

              {/* Closing Statement (if exists) */}
              {layer.closing && (
                <p className="text-gray-900 italic text-sm mt-4 pt-4 border-t border-gray-300">
                  {layer.closing}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}