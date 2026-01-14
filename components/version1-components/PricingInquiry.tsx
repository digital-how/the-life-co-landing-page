"use client"
import { useState } from 'react';

export function PricingInquiry() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    countryCode: 'DE +49',
    phone: '',
    goals: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();
    
    console.log('Form submitted!', formData);
    setIsSubmitting(true);
    
    try {
      // Simulate form submission delay
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      // Track conversion in Google Analytics
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'submit_lead_form', {
          event_category: 'engagement',
          event_label: 'inquiry_form',
          value: 1
        })
      }
      
      // Submit to HubSpot if available
      if (typeof window !== 'undefined' && (window as any).hbspt) {
        // HubSpot form submission would go here if needed
        console.log('Form data for HubSpot:', formData);
      }
      
      setIsSubmitted(true);
      setIsSubmitting(false);
      
      // Reset form after showing success message
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        countryCode: 'DE +49',
        phone: '',
        goals: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error('Form submission error:', error);
      setIsSubmitting(false);
    }
  };

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
                Weight Loss Program
              </h3>
              
              <div className="mb-6">
                <p className="text-gray-600 text-sm mb-2">Starting from</p>
                <p className="text-4xl md:text-5xl text-gray-800 mb-2">€400</p>
                <p className="text-gray-600 italic text-sm mb-2">per night, all inclusive</p>
                <p className="text-gray-700 text-sm">Minimum stay 4 days, recommended 7+ days</p>
              </div>

              <div className="space-y-4 mb-6">
                <p className="text-gray-700 leading-relaxed">
                  Includes accommodation, personalised program design, meals, therapies, activities, and on-site support.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  This fully inclusive offer reflects a medically informed, multi-layered program designed to support weight loss alongside whole-body health.
                </p>
              </div>

              <div className="bg-white border-l-4 border-[#01609C] p-4 rounded">
                <p className="text-gray-600 text-sm leading-relaxed">
                  <span className="font-medium text-gray-700">Please note:</span> The provided price is for our Bodrum retreat. Other centers may have lower or higher program pricing based on availability.
                </p>
              </div>

              <p className="text-gray-500 italic text-sm mt-4">
                Longer program durations and enhanced program depth are available following consultation.
              </p>
            </div>

            {/* Right Side - Contact Form */}
            <div className="bg-white p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl mb-3" style={{ color: '#01609C' }}>
                Talk to an Expert
              </h3>
              <p className="text-gray-600 mb-6">
                Get personalised guidance from our experts.
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
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Thank you!</h4>
                  <p className="text-gray-700">
                    We've received your inquiry. Our team will contact you shortly.
                  </p>
                </div>
              ) : (
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                {/* First Name & Last Name Row */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm text-gray-700 mb-2">
                      First Name
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
                      Last Name
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

                {/* Email Address */}
                <div>
                  <label htmlFor="email" className="block text-sm text-gray-700 mb-2">
                    Email Address
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

                {/* Phone Number */}
                <div>
                  <label htmlFor="phone" className="block text-sm text-gray-700 mb-2">
                    Phone Number (Optional)
                  </label>
                  <div className="flex gap-2">
                    <select
                      name="countryCode"
                      value={formData.countryCode}
                      onChange={handleChange}
                      className="px-3 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#01609C] focus:border-transparent transition-all"
                    >
                      <option value="DE +49">DE +49</option>
                      <option value="US +1">US +1</option>
                      <option value="UK +44">UK +44</option>
                      <option value="TR +90">TR +90</option>
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
                      placeholder="Phone number"
                      className="flex-1 px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#01609C] focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                {/* Goals Text Area */}
                <div>
                  <label htmlFor="goals" className="block text-sm text-gray-700 mb-2">
                    Tell us about your goals (Optional)
                  </label>
                  <textarea
                    id="goals"
                    name="goals"
                    value={formData.goals}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Share any specific goals or questions..."
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#01609C] focus:border-transparent transition-all resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  onClick={(e) => {
                    console.log('Button clicked!');
                    if (isSubmitting) {
                      e.preventDefault();
                    }
                  }}
                  className="w-full py-4 bg-[#C17F4E] hover:bg-[#A86D3F] disabled:bg-gray-400 disabled:cursor-not-allowed text-white rounded-lg transition-colors duration-300 text-lg font-medium"
                >
                  {isSubmitting ? 'Sending...' : 'Send Inquiry'}
                </button>

                {/* Call Alternative */}
                <p className="text-center text-sm text-gray-600 mt-4">
                  Or call us directly: <a href="tel:+443308186024" className="text-[#01609C] hover:underline">+44 330 818 6024</a>
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