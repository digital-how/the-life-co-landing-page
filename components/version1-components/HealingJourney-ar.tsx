export function HealingJourneyAR() {
  const layers = [
    {
      number: "01",
      title: "بيئة تسمح للجسم بالتنفس",
      subtitle: "الاسترخاء والإعداد الداعم",
      description: "محيطك ليس عرضيًا. تساعد البيئة الهادئة والتصالحية على تقليل التوتر وتنظيم الجهاز العصبي — أساس أساسي لصحة التمثيل الغذائي وتنظيم الوزن الطبيعي.",
      closing: "هنا، يُمنح جسمك الإذن بالتباطؤ قبل أن يُطلب منه التغيير."
    },
    {
      number: "02",
      title: "برنامج مصمم حولك",
      subtitle: "برنامج الرفاهية المخصص",
      description: "يتم تشكيل برنامجك من خلال تقييم صحي شخصي ويتم تحسينه طوال إقامتك. يتم تكييف التغذية والعلاجات والهيكل اليومي باستمرار بناءً على كيفية استجابة جسمك.",
      closing: "يتم دعم تقليل الوزن إلى جانب التوازن الأيضي — دون المساس بالقوة أو الطاقة أو الحيوية."
    },
    {
      number: "03",
      title: "دعم العقل وراء العادات",
      subtitle: "المرونة العقلية والوعي",
      description: "يتأثر الوزن ليس فقط بالفسيولوجيا، ولكن بالتوتر والأنماط العاطفية والعادات اليومية. تساعد ممارسات الوعي ودعم المرونة العقلية على تطوير الوعي والاتساق، مما يسمح بخيارات أكثر هدوءًا واستدامة بالظهور.",
      closing: null
    },
    {
      number: "04",
      title: "الطب التكاملي والعلاجات المستهدفة",
      subtitle: "الدعم الطبي و Biohacking",
      description: "يتم اختيار العلاجات لدعم إزالة السموم والدورة الدموية والشفاء وكفاءة التمثيل الغذائي. تعمل هذه التدخلات جنبًا إلى جنب مع تعديلات التغذية ونمط الحياة، مما يعزز قدرة الجسم على الاستجابة دون قوة.",
      closing: null
    },
    {
      number: "05",
      title: "شراكة تستمر بعد الاستجمام",
      subtitle: "الممارسات والتعلمات للعودة إلى المنزل",
      description: "التعليم جزء أساسي من الرحلة. تغادر بإرشاد عملي وصندوق أدوات شخصي للمهارات والممارسات التي يمكنك تطبيقها في الحياة اليومية — مدعومة بشراكة مستمرة تستمر بعد إقامتك، مما يتيح التوازن طويل المدى في الوزن وسكر الدم والعادات اليومية بمجرد عودتك إلى المنزل.",
      closing: null
    },
    {
      number: "06",
      title: "الاستعادة التي تكمل العملية",
      subtitle: "سبا والشفاء العميق",
      description: "تدعم العلاجات التصالحية وتجارب السبا الشفاء الجسدي والاسترخاء العميق. تعزز هذه الطبقة الأخيرة قدرة الجسم على إعادة الضبط ودمج التغيير والاستجابة بشكل إيجابي بمرور الوقت.",
      closing: null
    }
  ];

  return (
    <section className="py-20 bg-white" dir="rtl">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-6" style={{ color: '#01609C' }}>
            رحلة رعاية مكررة، موجهة بالدقة
          </h2>
          <p className="text-lg text-gray-600 mb-6 max-w-3xl mx-auto italic">
            رعاية مخصصة تتشكل من خلال البصيرة السريرية ويتم تحسينها باستمرار من خلال المراقبة.
          </p>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            كل طبقة من رحلة الشفاء TheLifeCo تخدم غرضًا واضحًا. معًا، يخلقون الظروف التي يحتاجها جسمك لاستعادة التوازن — بأمان وتدريجيًا وبطريقة تدوم.
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

