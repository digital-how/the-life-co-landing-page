export function WhatsIncludedAR() {
  const categories = [
    {
      title: "الإقامة والتغذية",
      description: "بيئة استجمام داعمة مجتمعة مع تغذية مخصصة مصممة لاستعادة التوازن.",
      items: [
        "الإقامة في منتجعات الاستجمام لدينا (غرف مزدوجة)",
        "خطة تغذية مخصصة تشمل جميع الوجبات والمكملات المطلوبة",
        "قد تشمل مسارات التغذية Master Detox، عصير أخضر، طعام نيء، كيتو، صيام الماء، أو الصيام المتقطع",
        "يتم اختيار جميع التغذية بناءً على التقييم الطبي والرفاهية الفردي"
      ]
    },
    {
      title: "خدمات الرفاهية والدعم النفسي لإدارة الوزن",
      description: "إرشاد خبير يومي وعلاجات الرفاهية الأساسية التي تدعم التغيير المستدام.",
      items: [
        "تدريب الرفاهية اليومي مع أخصائيي التغذية وعلماء النفس",
        "جلسة التعامل مع الأكل العاطفي (×2)",
        "تحليل تكوين الجسم (×2)",
        "الوصول إلى الساونا بالأشعة تحت الحمراء وغرفة البخار (يوميًا)",
        "تنظيف القولون (ذاتي الإدارة، يوميًا)",
        "حساء التخلص من السموم والشاي العشبي غير محدود"
      ]
    },
    {
      title: "تقنيات Bio-Hacking (يوميًا)",
      description: "تقنيات متقدمة تدعم إزالة السموم والشفاء وكفاءة التمثيل الغذائي.",
      items: [
        "علاج الاهتزاز Turbosonic",
        "علاج الطاقة BioCharger",
        "علاج BioPhoton",
        "علاج الأكسجين",
        "علاج الضوء Luminette",
        "علاج طاولة الانقلاب"
      ]
    },
    {
      title: "الخدمات الطبية",
      description: "الإشراف الطبي المستمر الذي يضمن السلامة والدقة والثقة طوال إقامتك.",
      items: [
        "الاستشارات الطبية (×2)",
        "عيادة طبية مجهزة بالكامل في الموقع",
        "فريق طبي مخصص من الأطباء والممرضات",
        "الدعم الطبي متاح 24/7",
        "مستشفى طوارئ شريك"
      ]
    },
    {
      title: "علاجات التمثيل الغذائي المتطورة",
      description: "تدخلات مستهدفة مصممة لتعزيز التمثيل الغذائي للدهون والمرونة البدنية.",
      items: [
        "جلسات دراجة CAR.O.L (×2)",
        "علاج Robolex (30 دقيقة × 2)",
        "جلسات الغطس البارد (×2)",
        "تصريف اللمفاوي بالضغط (×1)",
        "علاج سرير الضوء الأحمر أو علاج التمثيل الغذائي البديل"
      ]
    },
    {
      title: "الأنشطة اليومية",
      description: "إيقاع منظم للحركة والتعليم والشفاء لدعم الرفاهية طويلة المدى.",
      items: [
        "مشي شروق الشمس",
        "اليوجا للحركة والاسترخاء",
        "جلسات التأمل",
        "التدريب الوظيفي (3× في الأسبوع)",
        "محاضرات الرفاهية التعليمية",
        "أنشطة الاسترخاء المسائية"
      ]
    }
  ];

  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-gray-50 to-white pb-8 md:pb-12" dir="rtl">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-4xl md:text-5xl mb-6" style={{ color: '#01609C' }}>
            ما المدرج في برنامج الاستجمام الخاص بك
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            لا إضافات، لا تكاليف خفية — كل خدمة أدناه مدرجة في برنامجك.
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
            الإقامة مدرجة — لكن ما تنضم إليه هو أكثر بكثير من إقامة.<br className="hidden md:block" />
            <span className="md:inline block mt-1 md:mt-0"> </span>إنه برنامج موجه بالكامل متعدد الطبقات حيث يتم تضمين كل عنصر وتنسيقه من أجلك.
          </p>
        </div>
      </div>
    </section>
  );
}

