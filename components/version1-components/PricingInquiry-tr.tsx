"use client"
import { useState } from 'react';

export function PricingInquiryTR() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    countryCode: 'TR +90',
    phone: '',
    goals: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'submit_lead_form', {
        event_category: 'engagement',
        event_label: 'inquiry_form',
        value: 1
      })
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-8 md:py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Left Side - Program Info */}
            <div className="bg-gray-50 p-8 md:p-12 flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl mb-6" style={{ color: '#01609C' }}>
                Kilo Verme Programı
              </h3>
              
              <div className="mb-6">
                <p className="text-gray-600 text-sm mb-2">Başlangıç fiyatı</p>
                <p className="text-4xl md:text-5xl text-gray-800 mb-2">€400</p>
                <p className="text-gray-600 italic text-sm mb-2">gecelik, her şey dahil</p>
                <p className="text-gray-700 text-sm">Minimum konaklama 4 gün, önerilen süre: 7+ gün</p>
              </div>

              <div className="space-y-4 mb-6">
                <p className="text-gray-700 leading-relaxed">
                  Konaklama, kişiselleştirilmiş program tasarımı, beslenme, terapiler, ektkinlikler ve merkez içi destek dahildir.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Bu her şey dahil teklif, kilo kaybını tüm beden sağlığıyla birlikte desteklemek üzere tasarlanmış, tıbbi temelli ve çok katmanlı bir programı yansıtır.
                </p>
              </div>

              <div className="bg-white border-l-4 border-[#01609C] p-4 rounded">
                <p className="text-gray-600 text-sm leading-relaxed">
                  <span className="font-medium text-gray-700">Lütfen dikkat:</span> Belirtilen fiyat Bodrum retreat'i içindir. Diğer merkezlerde program fiyatları, müsaitliğe göre daha düşük veya daha yüksek olabilir.
                </p>
              </div>

              <p className="text-gray-500 italic text-sm mt-4">
                Daha uzun program süreleri ve daha derinleştirilmiş program içerikleri, danışma sonrasında sunulabilir.
              </p>
            </div>

            {/* Right Side - Contact Form */}
            <div className="bg-white p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl mb-3" style={{ color: '#01609C' }}>
                Bir Uzmanla Görüşün
              </h3>
              <p className="text-gray-600 mb-6">
                Uzmanlarımızdan kişiselleştirilmiş rehberlik alın.
              </p>

              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-6 h-6 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Teşekkürler!</h4>
                  <p className="text-gray-700">
                    Talebinizi aldık. Ekibimiz kısa süre içinde sizinle iletişime geçecektir.
                  </p>
                </div>
              ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm text-gray-700 mb-2">
                      Ad
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#01609C] focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm text-gray-700 mb-2">
                      Soyad
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#01609C] focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm text-gray-700 mb-2">
                    E-posta Adresi
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#01609C] focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm text-gray-700 mb-2">
                    Telefon Numarası (İsteğe Bağlı)
                  </label>
                  <div className="flex gap-2">
                    <select
                      name="countryCode"
                      value={formData.countryCode}
                      onChange={handleChange}
                      className="px-3 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#01609C] focus:border-transparent transition-all"
                    >
                      <option value="TR +90">TR +90</option>
                      <option value="DE +49">DE +49</option>
                      <option value="US +1">US +1</option>
                      <option value="UK +44">UK +44</option>
                      <option value="FR +33">FR +33</option>
                      <option value="IT +39">IT +39</option>
                      <option value="ES +34">ES +34</option>
                    </select>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Telefon numarası"
                      className="flex-1 px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#01609C] focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="goals" className="block text-sm text-gray-700 mb-2">
                    Hedeflerinizi Bizimle Paylaşın (isteğe bağlı)
                  </label>
                  <textarea
                    id="goals"
                    name="goals"
                    value={formData.goals}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Özel hedeflerinizi veya sorularınızı yazın…"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#01609C] focus:border-transparent transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-[#C17F4E] hover:bg-[#A86D3F] disabled:bg-gray-400 disabled:cursor-not-allowed text-white rounded-lg transition-colors duration-300 text-lg font-medium"
                >
                  {isSubmitting ? 'Gönderiliyor...' : 'Talep Gönder'}
                </button>

                <p className="text-center text-sm text-gray-600 mt-4">
                  Veya bizi doğrudan arayın: <a href="tel:+443308186024" className="text-[#01609C] hover:underline">+44 330 818 6024</a>
                </p>
              </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

