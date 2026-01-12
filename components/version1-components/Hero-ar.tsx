"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function HeroAR() {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://www.thelifeco.com/wp-content/uploads/2025/12/WhatsApp-Video-2025-12-29-at-23.06.17.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-center text-white" dir="rtl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 max-w-4xl mx-auto">
          فقدان الوزن من خلال<br />
          <span className="block mt-2 text-5xl md:text-6xl lg:text-7xl italic" style={{ fontFamily: 'Cormorant Garamond', fontWeight: 300, letterSpacing: '0.02em' }}>
            التوازن، وليس القوة
          </span>
        </h1>
        <p className="text-lg md:text-xl mb-4 max-w-3xl mx-auto opacity-95">
          برنامج صحي مخصص لفقدان الوزن مع تواريخ بدء مرنة ومدة البرنامج تتراوح من 4 أيام إلى إقامات ممتدة.
        </p>
        <p className="text-base md:text-lg mb-8 max-w-2xl mx-auto opacity-90 italic">
          رحلتك تبدأ عندما تكون مستعدًا — وتستمر طالما يحتاج جسمك.
        </p>
        
        <a href="#get-started">
          <Button className="bg-[#01609C] hover:bg-[#014a7a] text-white px-10 py-6 text-lg">
            ابدأ رحلتك
          </Button>
        </a>
      </div>
    </section>
  );
}

