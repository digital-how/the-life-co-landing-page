"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export function WhyItMatters() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        {/* Main Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4" style={{ color: '#01609C' }}>
            Where Lasting Change Begins
          </h2>
          <div className="w-20 h-1 bg-[#01609C] mx-auto"></div>
        </div>
        
        {/* Section 1: Because you already know */}
        <div className="mb-16 space-y-4">
          <h3 className="text-2xl md:text-3xl mb-6" style={{ color: '#01609C' }}>
            For those who know it's time for a different approach.
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            You wouldn't be here if this were just about losing weight.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            You've tried controlling food. Pushing harder. Being disciplined. You understand detox, metabolism, balance. What's been missing isn't effort or knowledge.
          </p>
          <div className="space-y-1 my-6">
            <p className="text-lg text-gray-700">It's the right environment.</p>
            <p className="text-lg text-gray-700">The right guidance.</p>
            <p className="text-lg text-gray-700">The feeling that someone truly knows what your body needs — and is watching closely.</p>
          </div>
          <p className="text-lg text-gray-900 font-medium mt-6">
            That's where TheLifeCo begins.
          </p>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 my-12"></div>

        {/* Section 2: We Know the Pattern */}
        <div className="mb-16 space-y-4">
          <h3 className="text-2xl md:text-3xl mb-6" style={{ color: '#01609C' }}>
            We Know the Pattern — and How to Break It
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            We've guided tens of thousands of people through this moment — the hesitation, the hope, the sense that this time needs to be different.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Our programs are shaped by that experience: medically informed, continuously observed, and adjusted as your body responds. You are never asked to push through uncertainty alone.
          </p>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 my-12"></div>

        {/* Section 3: This Is Where You Let Go */}
        <div className="mb-16 space-y-4">
          <h3 className="text-2xl md:text-3xl mb-6" style={{ color: '#01609C' }}>
            This Is Where You Let Go — Safely
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            Here, weight loss is not forced.<br />
            It is allowed.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Nourishment replaces restriction. Observation replaces guesswork. Balance replaces control. And in that space, change begins to happen — often more naturally than expected.
          </p>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 my-12"></div>

        {/* Section 4: An Invitation */}
        <div className="space-y-4">
          <h3 className="text-2xl md:text-3xl mb-6" style={{ color: '#01609C' }}>
            An Invitation
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            Choosing TheLifeCo is a considered step — one that allows you to stop managing everything on your own.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            You are guided, supported, and observed throughout your stay, with every element adapted as your body responds.
          </p>
          <div className="space-y-1 mt-6">
            <p className="text-lg text-gray-700">You don't need another strategy.</p>
            <p className="text-lg text-gray-900 font-medium">You need a place where your body can finally respond.</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-4xl mx-auto px-6 mt-16">
        <div className="bg-gradient-to-r from-[#01609C] to-[#014a7a] rounded-2xl p-8 md:p-12 shadow-2xl text-center">
          <h3 className="text-2xl md:text-3xl mb-4 text-white">
            Start Your Transformation
          </h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Join thousands who have transformed their lives through our personalised wellness programs
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 bg-white border-gray-300"
            />
            <Button asChild className="bg-white hover:bg-gray-100 text-[#01609C] px-8 font-medium">
              <Link href="#contact-form">Get Started</Link>
            </Button>
          </div>
          <p className="text-xs text-white/80 mt-4">
            Flexible programs from 4 days to extended stays • Start when you're ready
          </p>
        </div>
      </div>
    </section>
  );
}