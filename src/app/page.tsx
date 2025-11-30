"use client";

import React, { useState } from "react";
import Image from "next/image";
import { GlowingButton, GlassCard, AccordionItem } from "@/components/ui-elements";

// Direct link to Stripe Payment
const STRIPE_PAYMENT_LINK = "https://buy.stripe.com/14A14o2I78OE79h42948039";

export default function Home() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const handlePayClick = () => {
    // Direct client-side redirect to Stripe
    window.location.href = STRIPE_PAYMENT_LINK;
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const scrollToHowItWorks = () => {
    const element = document.getElementById("how-it-works");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen overflow-hidden font-mono text-[#00FF41] selection:bg-[#00FF41]/30">
      {/* Top-left Green Haze */}
      <div className="fixed top-[-20%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-[#00FF41]/10 blur-[120px] pointer-events-none z-0" />
      
      {/* Bottom-right subtle glow */}
      <div className="fixed bottom-[-20%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-[#003311]/20 blur-[120px] pointer-events-none z-0" />

      <nav className="relative z-50 flex items-center justify-between px-6 py-6 max-w-7xl mx-auto">
         <div className="flex items-center gap-2 font-bold text-xl tracking-tight">
           <span className="text-[#00FF41] drop-shadow-[0_0_5px_rgba(0,255,65,0.8)]">PaidTwoDollars</span>
         </div>
         <div className="hidden md:flex items-center gap-8 text-sm font-medium text-[#00FF41]/60">
           <button onClick={scrollToHowItWorks} className="hover:text-[#00FF41] transition-colors hover:drop-shadow-[0_0_5px_rgba(0,255,65,0.5)]">How It Works</button>
           <button onClick={() => document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth'})} className="hover:text-[#00FF41] transition-colors hover:drop-shadow-[0_0_5px_rgba(0,255,65,0.5)]">FAQ</button>
         </div>
         <GlowingButton onClick={handlePayClick} className="px-6 py-2 text-sm bg-transparent border border-[#00FF41]/20 hover:bg-[#00FF41]/10 shadow-none text-[#00FF41]">
            Pay $2 to Join
         </GlowingButton>
      </nav>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Hero Section */}
        <section className="min-h-[85vh] flex flex-col items-center justify-center text-center pt-10 pb-20 relative">
          
          {/* Pill Label */}
          <div className="mb-8 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#00FF41]/30 bg-[#00FF41]/10 text-[#00FF41] text-sm font-medium animate-fade-in backdrop-blur-md box-shadow-[0_0_10px_rgba(0,255,65,0.2)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00FF41] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00FF41]"></span>
            </span>
            Escape the matrix loonie toon ass nigga
          </div>

          <div className="space-y-6 max-w-4xl animate-fade-in-up z-20 flex flex-col items-center">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] text-white">
              How Many People Paid $2? <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00FF41] via-[#80FF9D] to-white drop-shadow-[0_0_10px_rgba(0,255,65,0.5)]">
                Pay $2 to Find Out.
              </span>
            </h1>
            
            {/* The $2 Bill Image - Placed exactly under the headline */}
            <div className="relative my-8 w-full max-w-lg mx-auto group">
               {/* Glow behind the bill - Permanent strong green glow */}
               <div className="absolute -inset-4 bg-[#00FF41]/40 blur-2xl rounded-full opacity-100 transition-all duration-500 animate-pulse-slow pointer-events-none"></div>
               
               {/* Container with float animation on hover */}
               <div className="relative rounded-lg overflow-hidden border border-[#00FF41]/30 shadow-2xl bg-[#001100] transition-all duration-500 shadow-[0_0_60px_rgba(0,255,65,0.3)] animate-float">
                  {/* Placeholder fallback text if image fails loading */}
                  <div className="absolute inset-0 flex items-center justify-center text-[#00FF41]/20 text-sm font-mono z-0">
                     [ Two Dollar Bill ]
                  </div>
                  
                  <Image 
                    src="/two-dollar-bill-v2.png" 
                    alt="Two Dollar Bill" 
                    width={600} 
                    height={250} 
                    className="w-full h-auto object-cover opacity-100 transition-all duration-500 relative z-10 grayscale contrast-125 hover:grayscale-0 transition-all duration-500"
                    priority
                  />
                  {/* Subtle overlay gradient for integration */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-transparent to-transparent opacity-40 z-20"></div>
                  
                  {/* Permanent illumination overlay - Green tint */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#00FF41]/20 via-[#00FF41]/10 to-white/5 opacity-100 z-30 mix-blend-overlay pointer-events-none"></div>
               </div>
            </div>
            
            <p className="text-lg md:text-xl text-[#00FF41]/70 font-light max-w-2xl mx-auto leading-relaxed font-mono">
              Curiosity is a powerful force. Are you willing to pay the price of a coffee to satisfy it? 
              Join thousands of others in this unique social experiment.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
              <GlowingButton onClick={handlePayClick} className="px-8 py-4 text-lg min-w-[180px]">
                Pay $2 to Join
              </GlowingButton>
              
              <button 
                onClick={scrollToHowItWorks}
                className="px-8 py-4 rounded-full border border-[#00FF41]/30 hover:bg-[#00FF41]/10 transition-all text-[#00FF41] font-medium min-w-[180px] backdrop-blur-sm hover:shadow-[0_0_15px_rgba(0,255,65,0.3)]"
              >
                Learn More
              </button>
            </div>
          </div>

          {/* Wireframe Orb Graphic - Green */}
          <div className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[100%] h-[600px] pointer-events-none select-none z-0 flex items-center justify-center opacity-60">
            
            {/* Central Glow */}
            <div className="absolute w-[200px] h-[200px] rounded-full bg-[#00FF41]/20 blur-[80px]" />

            {/* SVG Wireframe Sphere Representation */}
            <svg viewBox="0 0 200 200" className="w-[500px] h-[500px] animate-pulse-slow">
              <defs>
                <radialGradient id="sphere-grad" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="rgba(0, 255, 65, 0.1)" />
                  <stop offset="100%" stopColor="rgba(0, 255, 65, 0.0)" />
                </radialGradient>
              </defs>
              
              {/* Main Sphere Body */}
              <circle cx="100" cy="100" r="70" fill="url(#sphere-grad)" stroke="rgba(0, 255, 65, 0.2)" strokeWidth="0.5" />
              
              {/* Latitude Lines */}
              <ellipse cx="100" cy="100" rx="70" ry="20" fill="none" stroke="rgba(0, 255, 65, 0.1)" strokeWidth="0.5" />
              <ellipse cx="100" cy="100" rx="70" ry="45" fill="none" stroke="rgba(0, 255, 65, 0.1)" strokeWidth="0.5" />
              
              {/* Longitude Lines (simulated) */}
              <ellipse cx="100" cy="100" rx="20" ry="70" fill="none" stroke="rgba(0, 255, 65, 0.1)" strokeWidth="0.5" />
              <ellipse cx="100" cy="100" rx="45" ry="70" fill="none" stroke="rgba(0, 255, 65, 0.1)" strokeWidth="0.5" />
            </svg>
          </div>
        </section>

        {/* How It Works - Redesigned Layout */}
        <section id="how-it-works" className="py-32 relative z-20">
          <div className="flex flex-col md:flex-row justify-between items-start mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                Scratch that itch, <br />you'll make it back. <span className="text-[#00FF41] drop-shadow-[0_0_8px_rgba(0,255,65,0.6)]">Right?</span>
              </h2>
            </div>
            <div className="max-w-md">
              <p className="text-[#00FF41]/50 text-lg mb-6 font-mono">
                The process is intentionally simple. No accounts, no hidden fees, just pure curiosity. Join the experiment in seconds.
              </p>
              <div className="flex gap-4">
                <GlowingButton onClick={handlePayClick} className="px-6 py-2 text-sm">
                  Pay $2 to Join
                </GlowingButton>
                <button 
                  onClick={() => document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth'})}
                  className="px-6 py-2 rounded-full border border-[#00FF41]/30 hover:bg-[#00FF41]/10 transition-all text-[#00FF41]/70 text-sm font-mono"
                >
                  Read FAQ
                </button>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <GlassCard className="relative h-[400px] flex flex-col justify-between p-10 overflow-hidden group bg-[#001100]">
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-[#00FF41]/10 border border-[#00FF41]/20 flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(0,255,65,0.15)] group-hover:bg-[#00FF41]/20 transition-colors duration-500">
                  {/* Minimalistic Credit Card Icon */}
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[#00FF41]">
                    <rect x="2" y="5" width="20" height="14" rx="2" />
                    <line x1="2" y1="10" x2="22" y2="10" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold mb-4 text-[#00FF41]">Pay $2</h3>
                <p className="text-[#00FF41]/50 text-lg leading-relaxed font-mono">
                  Contribute a tiny amount securely via Stripe to join the experiment.
                </p>
              </div>
              
              {/* Green Island Beam Effect */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120%] h-[200px] bg-gradient-to-t from-[#00FF41]/20 via-[#00FF41]/5 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
              <div className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 w-[80%] h-[40px] bg-[#00FF41]/30 blur-[40px] rounded-full"></div>
            </GlassCard>

            {/* Card 2 */}
            <GlassCard className="relative h-[400px] flex flex-col justify-between p-10 overflow-hidden group bg-[#001100]">
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-[#00FF41]/10 border border-[#00FF41]/20 flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(0,255,65,0.15)] group-hover:bg-[#00FF41]/20 transition-colors duration-500">
                  {/* Minimalistic Key Icon */}
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[#00FF41]">
                    <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold mb-4 text-[#00FF41]">Unlock</h3>
                <p className="text-[#00FF41]/50 text-lg leading-relaxed font-mono">
                  Instantly get redirected to the live counter page after payment.
                </p>
              </div>

              {/* Green Island Beam Effect */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120%] h-[200px] bg-gradient-to-t from-[#00FF41]/20 via-[#00FF41]/5 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
              <div className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 w-[80%] h-[40px] bg-[#00FF41]/30 blur-[40px] rounded-full"></div>

              {/* Center Beam Graphic */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-[150px] bg-gradient-to-t from-[#00FF41]/50 to-transparent"></div>
              <div className="absolute bottom-[150px] left-1/2 -translate-x-1/2 w-4 h-4 bg-[#00FF41] rounded-full blur-sm animate-pulse"></div>
            </GlassCard>

            {/* Card 3 */}
            <GlassCard className="relative h-[400px] flex flex-col justify-between p-10 overflow-hidden group bg-[#001100]">
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-[#00FF41]/10 border border-[#00FF41]/20 flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(0,255,65,0.15)] group-hover:bg-[#00FF41]/20 transition-colors duration-500">
                  {/* Minimalistic Eye Icon */}
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[#00FF41]">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold mb-4 text-[#00FF41]">Reveal</h3>
                <p className="text-[#00FF41]/50 text-lg leading-relaxed font-mono">
                  See exactly how many people have paid before you.
                </p>
              </div>

              {/* Green Island Beam Effect */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120%] h-[200px] bg-gradient-to-t from-[#00FF41]/20 via-[#00FF41]/5 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
              <div className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 w-[80%] h-[40px] bg-[#00FF41]/30 blur-[40px] rounded-full"></div>

              {/* Decorative Particles */}
              <div className="absolute bottom-10 left-10 flex gap-2 opacity-30">
                <div className="w-2 h-2 bg-[#00FF41] rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                <div className="w-2 h-2 bg-[#00FF41] rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-2 h-2 bg-[#00FF41] rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
              </div>
            </GlassCard>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-32 max-w-3xl mx-auto relative z-20">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
            Questions?
          </h2>
          
          <div className="space-y-4">
            <AccordionItem
              question="Is this real?"
              answer="Yes. The counter is real-time and tied directly to Stripe payments. Every number represents a real person."
              isOpen={openFaqIndex === 0}
              onClick={() => toggleFaq(0)}
            />
            <AccordionItem
              question="Where does the money go?"
              answer="The funds cover transaction fees, hosting, and the development of future social experiments."
              isOpen={openFaqIndex === 1}
              onClick={() => toggleFaq(1)}
            />
            <AccordionItem
              question="Can I get a refund?"
              answer="Since the value (seeing the count) is delivered immediately, all sales are final."
              isOpen={openFaqIndex === 2}
              onClick={() => toggleFaq(2)}
            />
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 border-t border-[#00FF41]/10 flex flex-col md:flex-row justify-between items-center text-sm text-[#00FF41]/30 relative z-20">
          <div className="mb-4 md:mb-0 font-medium hover:text-[#00FF41]/50 transition-colors cursor-default font-mono">
            PaidTwoDollars
          </div>
          <div className="flex gap-6 font-mono">
             <a href="#" className="hover:text-[#00FF41] transition-colors">Privacy</a>
             <a href="#" className="hover:text-[#00FF41] transition-colors">Terms</a>
             <span>&copy; {new Date().getFullYear()}</span>
          </div>
        </footer>
      </div>
    </main>
  );
}
