"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export function WhyItMattersAR() {
  return (
    <section className="py-20 bg-white" dir="rtl">
      <div className="max-w-4xl mx-auto px-6">
        {/* Main Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4" style={{ color: '#01609C' }}>
            حيث يبدأ التغيير الدائم
          </h2>
          <div className="w-20 h-1 bg-[#01609C] mx-auto"></div>
        </div>
        
        {/* Section 1: Because you already know */}
        <div className="mb-16 space-y-4">
          <h3 className="text-2xl md:text-3xl mb-6" style={{ color: '#01609C' }}>
            لأولئك الذين يعرفون أن الوقت قد حان لنهج مختلف.
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            لن تكون هنا إذا كان هذا يتعلق فقط بفقدان الوزن.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            لقد جربت التحكم في الطعام. الدفع بقوة أكبر. كونك منضبطًا. أنت تفهم إزالة السموم والتمثيل الغذائي والتوازن. ما كان مفقودًا ليس الجهد أو المعرفة.
          </p>
          <div className="space-y-1 my-6">
            <p className="text-lg text-gray-700">إنه البيئة الصحيحة.</p>
            <p className="text-lg text-gray-700">الإرشاد الصحيح.</p>
            <p className="text-lg text-gray-700">الشعور بأن شخصًا ما يعرف حقًا ما يحتاجه جسمك — ويراقب عن كثب.</p>
          </div>
          <p className="text-lg text-gray-900 font-medium mt-6">
            هذا هو المكان الذي يبدأ فيه TheLifeCo.
          </p>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 my-12"></div>

        {/* Section 2: We Know the Pattern */}
        <div className="mb-16 space-y-4">
          <h3 className="text-2xl md:text-3xl mb-6" style={{ color: '#01609C' }}>
            نعرف النمط — وكيفية كسره
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            لقد أرشدنا عشرات الآلاف من الأشخاص خلال هذه اللحظة — التردد والأمل والشعور بأن هذه المرة يجب أن تكون مختلفة.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            برامجنا تتشكل من خلال تلك التجربة: مستندة إلى معلومات طبية، ومراقبة باستمرار، ومعدلة مع استجابة جسمك. لا يُطلب منك أبدًا المضي قدمًا في عدم اليقين وحدك.
          </p>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 my-12"></div>

        {/* Section 3: This Is Where You Let Go */}
        <div className="mb-16 space-y-4">
          <h3 className="text-2xl md:text-3xl mb-6" style={{ color: '#01609C' }}>
            هذا هو المكان الذي تترك فيه — بأمان
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            هنا، فقدان الوزن لا يُفرض.<br />
            يُسمح به.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            التغذية تحل محل القيود. المراقبة تحل محل التخمين. التوازن يحل محل التحكم. وفي تلك المساحة، يبدأ التغيير في الحدوث — غالبًا بشكل أكثر طبيعية مما هو متوقع.
          </p>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 my-12"></div>

        {/* Section 4: An Invitation */}
        <div className="space-y-4">
          <h3 className="text-2xl md:text-3xl mb-6" style={{ color: '#01609C' }}>
            دعوة
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            اختيار TheLifeCo هو خطوة مدروسة — خطوة تسمح لك بالتوقف عن إدارة كل شيء بنفسك.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            يتم إرشادك ودعمك ومراقبتك طوال إقامتك، مع تكييف كل عنصر مع استجابة جسمك.
          </p>
          <div className="space-y-1 mt-6">
            <p className="text-lg text-gray-700">لا تحتاج إلى استراتيجية أخرى.</p>
            <p className="text-lg text-gray-900 font-medium">تحتاج إلى مكان يمكن لجسمك أن يستجيب فيه أخيرًا.</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-4xl mx-auto px-6 mt-16">
        <div className="bg-gradient-to-r from-[#01609C] to-[#014a7a] rounded-2xl p-8 md:p-12 shadow-2xl text-center">
          <h3 className="text-2xl md:text-3xl mb-4 text-white">
            ابدأ تحولك
          </h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            انضم إلى الآلاف الذين حولوا حياتهم من خلال برامج الرفاهية المخصصة لدينا
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input 
              type="email" 
              placeholder="أدخل بريدك الإلكتروني" 
              className="flex-1 bg-white border-gray-300"
            />
            <Button asChild className="bg-white hover:bg-gray-100 text-[#01609C] px-8 font-medium">
              <Link href="#contact-form">ابدأ</Link>
            </Button>
          </div>
          <p className="text-xs text-white/80 mt-4">
            برامج مرنة من 4 أيام إلى إقامات ممتدة • ابدأ عندما تكون مستعدًا
          </p>
        </div>
      </div>
    </section>
  );
}

