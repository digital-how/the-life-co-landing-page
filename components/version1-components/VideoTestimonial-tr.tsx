export function VideoTestimonialTR() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Video */}
          <div className="relative">
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
          <div className="space-y-6">
            {/* Title */}
            <h2 className="text-3xl md:text-4xl" style={{ color: '#01609C' }}>
              Şahitlik: Bodrum'u ziyaret edenlerden gerçek deneyimler
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
                <div className="font-medium text-gray-900">Lübnanlı Aktris</div>
                <div className="text-sm text-gray-600">2024'te Bodrum'u ziyaret etti</div>
              </div>
            </div>

            {/* Quote */}
            <blockquote className="text-lg text-gray-700 leading-relaxed italic border-l-4 pl-6 py-2" style={{ borderColor: '#01609C' }}>
              Kendimle ilgili çok şey öğrenmemi sağladı. Son derece güvenli bir ortamdaydım — sizi takip eden bir beslenme uzmanı, ne yaptığını bilen bir ekip, oldukça tıbbi bir çerçeve ve detoksa yardımcı, size uygun programlarla.
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}

