"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function CTASection() {
  return (
    <section id="get-started" className="py-16 bg-gradient-to-r from-[#01609C] to-[#014a7a]">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-2xl text-center">
          <h3 className="text-2xl md:text-3xl mb-4" style={{ color: '#01609C' }}>
            Start Your Transformation
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Join thousands who have transformed their lives through our personalised wellness programs
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 bg-white border-gray-300"
            />
            <Button className="bg-[#01609C] hover:bg-[#014a7a] text-white px-8">
              Get Started
            </Button>
          </div>
          <p className="text-xs text-gray-500 mt-4">
            Flexible programs from 4 days to extended stays • Start when you're ready
          </p>
        </div>
      </div>
    </section>
  );
}