import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQ() {
  const faqs = [
    {
      question: "How quickly will I see results?",
      answer: "Most guests report feeling more energized and noticing positive changes within 3-5 days. Visible weight loss typically begins within the first week. However, the most significant benefit is the lasting lifestyle changes that continue to deliver results long after your program ends."
    },
    {
      question: "Is the program medically supervised?",
      answer: "Yes, absolutely. All our programs are developed and overseen by licensed medical professionals including physicians, nutritionists, and wellness specialists. You'll receive a comprehensive health assessment at the start of your program, and medical staff are available throughout your stay."
    },
    {
      question: "What makes TheLifeCo different from other detox programs?",
      answer: "Unlike quick-fix cleanses, our programs combine medical supervision, personalized nutrition plans, holistic wellness practices, and ongoing support. We focus on sustainable lifestyle changes, not temporary results. Our 94% success rate for maintaining weight loss after 6 months speaks to this approach."
    },
    {
      question: "Will I be hungry during the program?",
      answer: "No. Our programs are designed to nourish your body with nutrient-dense foods that satisfy you. You'll enjoy delicious, chef-prepared meals throughout the day. Many guests are surprised by how satisfying and gourmet the food is—detox doesn't mean deprivation at TheLifeCo."
    },
    {
      question: "How long are the programs?",
      answer: "We offer programs ranging from 7 to 21 days, depending on your goals and schedule. Our wellness consultants can help you choose the ideal program length during your consultation. Many guests start with a 7-14 day program and return for additional sessions."
    },
    {
      question: "Can I maintain the results after I leave?",
      answer: "Yes! Sustainability is at the core of our approach. You'll leave with personalized meal plans, lifestyle strategies, and ongoing support resources. Our graduates maintain their results at a rate of 94% after six months, compared to the industry average of 5-20%."
    },
    {
      question: "Is the program suitable for people with medical conditions?",
      answer: "Our programs can be adapted for most health conditions, including diabetes, hypertension, and digestive issues. During your initial consultation, our medical team will review your health history and customize your program accordingly. We recommend consulting with your personal physician before starting any wellness program."
    },
    {
      question: "What's included in the program cost?",
      answer: "Your program includes: medical consultations and monitoring, all meals and detox supplements, accommodation (for residential programs), wellness activities (yoga, meditation, fitness classes), spa treatments, educational workshops, and post-program support materials."
    },
    {
      question: "Do you offer virtual/remote programs?",
      answer: "Yes! We offer both residential programs at our wellness centers and virtual programs that you can complete from home. Virtual programs include video consultations, meal plans and recipes, supplement protocols, guided wellness practices, and daily support from our team."
    },
    {
      question: "What if I don't see results?",
      answer: "While results vary by individual, we're confident in our approach. If you follow the program as prescribed and don't see significant improvements in your wellbeing, we'll work with you to understand why and adjust your plan. Your success is our priority, and we're committed to supporting you throughout your journey."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4" style={{ color: '#01609C' }}>
            Frequently Asked Questions
          </h2>
          <div className="w-20 h-1 bg-[#01609C] mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">
            Everything you need to know about TheLifeCo detox programs
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left hover:no-underline">
                  <span style={{ color: '#01609C' }}>{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-12 text-center bg-white rounded-xl p-8 shadow-md">
          <h3 className="text-xl mb-3" style={{ color: '#01609C' }}>
            Still have questions?
          </h3>
          <p className="text-gray-600 mb-6">
            Our wellness consultants are here to help you find the perfect program for your needs
          </p>
          <button 
            className="px-8 py-3 rounded-lg text-white transition-colors"
            style={{ backgroundColor: '#01609C' }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#014a7a'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#01609C'}
          >
            Schedule a Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
}