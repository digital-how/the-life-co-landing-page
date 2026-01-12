import { Award, Users, Globe, Heart } from "lucide-react";

export function EndorsementsAR() {
  const endorsements = [
    {
      icon: Award,
      title: "المجلس الاستشاري الطبي",
      description: "الدكتورة إيلينا رودريغيز، دكتوراه في الطب - الطب التكاملي",
      quote: "يمثل نهج TheLifeCo المعيار الذهبي في برامج الرفاهية الخاضعة للإشراف الطبي. التزامهم بالممارسات القائمة على الأدلة مع احترام الشفاء الشامل يميزهم."
    },
    {
      icon: Users,
      title: "قائد مجتمع الرفاهية",
      description: "جيمس تشين - أخصائي تغذية معتمد ومؤلف",
      quote: "أحلت العشرات من العملاء إلى TheLifeCo، وكل واحد منهم عاد محولًا. برامجهم تفي بوعد التغيير المستدام والدائم."
    },
    {
      icon: Globe,
      title: "الاعتراف الدولي",
      description: "ظهر في: Vogue، Forbes Wellness، The Guardian",
      quote: "تم الاعتراف بـ TheLifeCo عالميًا لريادته معيارًا جديدًا في سياحة الرفاهية وبرامج إدارة الوزن المستدامة."
    },
    {
      icon: Heart,
      title: "معدل نجاح الضيوف",
      description: "تم التحقق من خلال تقييمات صحية مستقلة",
      quote: "94% من الضيوف يحافظون على نتائج فقدان الوزن بعد 6 أشهر من البرنامج، مما يتجاوز بشكل كبير المتوسطات الصناعية البالغة 5-20%."
    }
  ];

  return (
    <section className="py-20 bg-white" dir="rtl">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4" style={{ color: '#01609C' }}>
            موثوق به من قبل الخبراء في جميع أنحاء العالم
          </h2>
          <div className="w-20 h-1 bg-[#01609C] mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            يعترف المهنيون الطبيون وقادة الرفاهية والوسائط الدولية بتزامنا مع التميز
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {endorsements.slice(0, 2).map((endorsement, index) => {
            const Icon = endorsement.icon;
            return (
              <div 
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-8 border-r-4 border-[#01609C] shadow-md hover:shadow-lg transition-shadow md:hidden"
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
          {endorsements.map((endorsement, index) => {
            const Icon = endorsement.icon;
            return (
              <div 
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-8 border-r-4 border-[#01609C] shadow-md hover:shadow-lg transition-shadow hidden md:block"
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
            معايير رائدة في الصناعة
          </h3>
          <div className="grid sm:grid-cols-3 gap-8 mt-8">
            <div>
              <div className="text-3xl font-semibold mb-2" style={{ color: '#01609C' }}>
                20+
              </div>
              <p className="text-gray-700">سنوات من الخبرة</p>
            </div>
            <div>
              <div className="text-3xl font-semibold mb-2" style={{ color: '#01609C' }}>
                40,000+
              </div>
              <p className="text-gray-700">حياة محولة</p>
            </div>
            <div>
              <div className="text-3xl font-semibold mb-2" style={{ color: '#01609C' }}>
                6
              </div>
              <p className="text-gray-700">مواقع عالمية المستوى</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

