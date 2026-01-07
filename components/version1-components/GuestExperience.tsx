import { Check } from "lucide-react";

export function GuestExperience() {
  const experiences = [
    "Balanced weight reduction, achieved in a healthy way and time period",
    "Elevated metabolic balance, often accompanied by better energy and vitality",
    "Preservation of balanced diet that is recognized for its value",
    "A psychological boost that comes as a reward for success",
    "Digestive and gastronomic rest while receiving nutrition",
    "Reduced inflammation and improved cellular health",
    "Better sleep quality and mental clarity",
    "Strengthened immune system function"
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl mb-4" style={{ color: '#01609C' }}>
            What Guests Commonly Experience
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
              Results may vary depending on individual health circumstances and program selection
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}