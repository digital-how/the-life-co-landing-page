export function VideoTestimonialAR() {
  return (
    <section className="py-20 bg-white" dir="rtl">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Video */}
          <div className="relative md:order-2">
            <div 
              className="relative w-full overflow-hidden rounded-lg shadow-lg"
              style={{ paddingBottom: '56.25%' }} // 16:9 aspect ratio
            >
              <iframe
                src="https://www.youtube.com/embed/Z0oEvxDbMQw?rel=0&modestbranding=1&enablejsapi=1"
                title="Vegan Ketogenic Diet Can Fuel You - by Razane Jammal"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
              />
            </div>
          </div>

          {/* Right: Content */}
          <div className="space-y-6 md:order-1">
            {/* Title */}
            <h2 className="text-3xl md:text-4xl" style={{ color: '#01609C' }}>
              شهادات: تجارب حقيقية من الذين زاروا بودروم
            </h2>

            {/* Person Info */}
            <div className="flex items-center gap-4">
              <div 
                className="w-12 h-12 rounded-full flex items-center justify-center text-2xl"
                style={{ backgroundColor: '#01609C', color: 'white' }}
                aria-hidden="true"
              >
                ★
              </div>
              <div>
                <div className="font-medium text-gray-900">ممثلة لبنانية</div>
                <div className="text-sm text-gray-600">زارت بودروم في 2024</div>
              </div>
            </div>

            {/* Quote */}
            <blockquote className="text-lg text-gray-700 leading-relaxed italic border-r-4 pr-6 py-2" style={{ borderColor: '#01609C' }}>
              لقد علمني هذا حقًا الكثير عن نفسي. شعرت أنني كنت أفعل ذلك في بيئة آمنة جدًا — مع أخصائي تغذية يتابعك، مع أشخاص يعرفون ما يفعلونه، في إعداد طبي جدًا، ومع برامج مناسبة لمساعدتك على إزالة السموم.
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}

