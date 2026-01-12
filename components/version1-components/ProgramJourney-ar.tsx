"use client"
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ProgramJourneyAR() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const phases = [
    {
      number: "1",
      title: "اليوم 1 — الوصول والتقييم",
      subtitle: "وضع الأساس",
      items: [
        "تسجيل الوصول الطبي والتقييم الصحي الكامل",
        "تحليل تكوين الجسم وتحليل الدم المباشر",
        "الاستشارة الطبية والتشخيصات المتقدمة الاختيارية",
        "استشارة مدرب الرفاهية وتخصيص البرنامج",
        "اختيار خطة التغذية والعلاجات والعلاجات"
      ],
      closing: "يتم تقييم جسمك، وليس افتراضه. كل شيء يبدأ بالدقة."
    },
    {
      number: "2",
      title: "الأيام 2-3 — مرحلة التكيف",
      subtitle: "السماح للجسم بالتكيف",
      items: [
        "تبدأ إزالة السموم بلطف",
        "تنظيم الجهاز العصبي وتقليل التوتر",
        "التعديل الأيضي الأولي",
        "الحركة الخفيفة وعمل التنفس والعلاجات التصالحية",
        "المراقبة الطبية والرفاهية القريبة"
      ],
      closing: "هذه المرحلة تدور حول السلامة والدعم والسماح للجسم بالاستقرار في إيقاع جديد."
    },
    {
      number: "3",
      title: "الأيام 4-7 — التنشيط والزخم",
      subtitle: "حيث يبدأ التغيير المرئي غالبًا",
      items: [
        "زيادة كفاءة التمثيل الغذائي",
        "تحسين استخدام الدهون",
        "استجابة أعمق لإزالة السموم",
        "الحركة المنظمة وعلاجات biohacking",
        "يبدأ العديد من الضيوف في ملاحظة طاقة أوضح وتغييرات وزن مبكرة"
      ],
      closing: "بالنسبة للكثيرين، هذا هو المكان الذي تعود فيه الدافعية — بشكل طبيعي."
    },
    {
      number: "4",
      title: "الأيام 8-14+ — مرحلة التحول",
      subtitle: "تعزيز النتائج (للإقامات الأطول)",
      items: [
        "دعم فقدان الدهون المستمر",
        "استقرار سكر الدم وإشارات الشهية",
        "يتعمق الوضوح العقلي والتوازن العاطفي",
        "يتكيف الجسم مع الأنماط المستدامة بدلاً من الإصلاحات قصيرة المدى"
      ],
      closing: "يصبح فقدان الوزن استجابة، وليس صراعًا."
    },
    {
      number: "5",
      title: "اليوم الأخير — التكامل والتحضير",
      subtitle: "المغادرة بوضوح، وليس بأسئلة",
      items: [
        "متابعة تكوين الجسم وتحليل الدم",
        "الاستشارات الطبية والرفاهية عند المغادرة",
        "إرشاد مخصص للحياة بعد الاستجمام",
        "تسجيل تطبيق رفيق نمط الحياة",
        "دعم ما بعد البرنامج وخيارات المتابعة"
      ],
      closing: "تغادر بفهم — وليس فقط النتائج."
    }
  ];

  const handlePrevious = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(phases.length - 1, prev + 1));
  };

  return (
    <section className="py-20 bg-[#faf9f7]" dir="rtl">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-12 text-center">
          <p className="text-sm tracking-widest text-gray-500 uppercase mb-3">
            رحلة برنامجك
          </p>
          <h2 className="text-4xl md:text-5xl mb-4" style={{ color: '#01609C' }}>
            الرحلة موضحة
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            من لحظة وصولك إلى مغادرتك، كل مرحلة من إقامتك مصممة بعناية لدعم التحول.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative lg:px-16">
          {/* Navigation Arrows */}
          <Button
            onClick={handleNext}
            disabled={currentIndex === 0}
            variant="ghost"
            size="icon"
            className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg hover:bg-gray-50 disabled:opacity-30 disabled:cursor-not-allowed rounded-full w-12 h-12"
          >
            <ChevronRight className="w-6 h-6" style={{ color: '#01609C' }} />
          </Button>

          <Button
            onClick={handlePrevious}
            disabled={currentIndex >= phases.length - 1}
            variant="ghost"
            size="icon"
            className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg hover:bg-gray-50 disabled:opacity-30 disabled:cursor-not-allowed rounded-full w-12 h-12"
          >
            <ChevronLeft className="w-6 h-6" style={{ color: '#01609C' }} />
          </Button>

          {/* Scrollable Cards Container */}
          <div className="overflow-hidden">
            <div 
              className="flex gap-6 transition-transform duration-500 ease-in-out lg:gap-8"
              style={{ transform: `translateX(-${currentIndex * (100 / 2.5)}%)` }}
            >
              {phases.map((phase, index) => (
                <div 
                  key={index} 
                  className="flex-shrink-0 w-full lg:w-[calc(40%-1rem)]"
                >
                  <div className="bg-white rounded-lg p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
                    {/* Phase Title */}
                    <div className="mb-6">
                      <h3 className="text-xl md:text-2xl mb-2" style={{ color: '#01609C' }}>
                        {phase.title}
                      </h3>
                      <p className="text-sm md:text-base text-gray-600 italic">
                        {phase.subtitle}
                      </p>
                    </div>

                    {/* Items List */}
                    <ul className="space-y-3 mb-6 flex-grow">
                      {phase.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-[#01609C] mt-1 text-sm">•</span>
                          <span className="text-gray-700 text-sm md:text-base leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Closing Statement */}
                    <p className="text-gray-900 italic text-sm md:text-base mt-auto pt-4 border-t border-gray-200">
                      {phase.closing}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Navigation Dots */}
          <div className="flex justify-center gap-2 mt-6 lg:hidden">
            {phases.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  currentIndex === index 
                    ? 'bg-[#01609C] w-8' 
                    : 'bg-gray-300'
                }`}
                aria-label={`انتقل إلى المرحلة ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Bottom Text */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-700 italic">
            هذا ليس برنامجًا — إنها رحلة فسيولوجية موجهة، مدعومة في كل مرحلة.
          </p>
        </div>
      </div>
    </section>
  );
}

