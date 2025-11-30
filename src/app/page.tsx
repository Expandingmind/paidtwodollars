"use client";

import React, { useState } from "react";
import Image from "next/image";
import { GlowingButton, GlassCard, AccordionItem } from "@/components/ui-elements";

// Direct link to Stripe Payment
const STRIPE_PAYMENT_LINK = "https://buy.stripe.com/14A14o2I78OE79h4gg";

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
    <main className="min-h-screen overflow-hidden font-sans text-white selection:bg-purple-500/30">
      {/* Top-left Spotlight Haze */}
      <div className="fixed top-[-20%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-purple-900/20 blur-[120px] pointer-events-none z-0" />
      
      {/* Bottom-right subtle glow */}
      <div className="fixed bottom-[-20%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-indigo-900/10 blur-[120px] pointer-events-none z-0" />

      {/* Noise texture overlay */}
      <div className="fixed inset-0 bg-[url('/noise.png')] opacity-[0.03] pointer-events-none z-0 mix-blend-overlay" />

      <nav className="relative z-50 flex items-center justify-between px-6 py-6 max-w-7xl mx-auto">
         <div className="flex items-center gap-2 font-bold text-xl tracking-tight">
           <span className="text-white">PaidTwoDollars</span>
         </div>
         <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/60">
           <button onClick={scrollToHowItWorks} className="hover:text-white transition-colors">How It Works</button>
           <button onClick={() => document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth'})} className="hover:text-white transition-colors">FAQ</button>
         </div>
         <GlowingButton onClick={handlePayClick} className="px-6 py-2 text-sm bg-transparent border border-white/20 hover:bg-white/5 shadow-none">
            Pay $2 to Join
         </GlowingButton>
      </nav>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Hero Section */}
        <section className="min-h-[85vh] flex flex-col items-center justify-center text-center pt-10 pb-20 relative">
          
          {/* Pill Label */}
          <div className="mb-8 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-200 text-sm font-medium animate-fade-in backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-400"></span>
            </span>
            Join the global experiment
          </div>

          <div className="space-y-6 max-w-4xl animate-fade-in-up z-20 flex flex-col items-center">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] text-white">
              How Many People Paid $2? <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-300 via-purple-100 to-white">
                Pay $2 to Find Out.
              </span>
            </h1>
            
            {/* The $2 Bill Image - Placed exactly under the headline */}
            <div className="relative my-8 w-full max-w-lg mx-auto group">
               {/* Glow behind the bill - Permanent strong glow */}
               <div className="absolute -inset-4 bg-purple-500/40 blur-2xl rounded-full opacity-100 transition-all duration-500 animate-pulse-slow pointer-events-none"></div>
               
               {/* Container with float animation on hover */}
               <div className="relative rounded-lg overflow-hidden border border-white/10 shadow-2xl bg-[#0a0a10] transition-all duration-500 shadow-[0_0_60px_rgba(168,85,247,0.5)] border-purple-400/40 animate-float">
                  {/* Placeholder fallback text if image fails loading */}
                  <div className="absolute inset-0 flex items-center justify-center text-white/20 text-sm font-mono z-0">
                     [ Two Dollar Bill ]
                  </div>
                  
                  <Image 
                    src="/two-dollar-bill-v2.png" 
                    alt="Two Dollar Bill" 
                    width={600} 
                    height={250} 
                    className="w-full h-auto object-cover opacity-100 transition-all duration-500 relative z-10"
                    priority
                  />
                  {/* Subtle overlay gradient for integration */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020205] via-transparent to-transparent opacity-20 z-20"></div>
                  
                  {/* Permanent illumination overlay - Strong and always visible */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 via-purple-400/30 to-white/10 opacity-100 z-30 mix-blend-overlay pointer-events-none"></div>
               </div>
            </div>
            
            <p className="text-lg md:text-xl text-white/60 font-light max-w-2xl mx-auto leading-relaxed">
              Curiosity is a powerful force. Are you willing to pay the price of a coffee to satisfy it? 
              Join thousands of others in this unique social experiment.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
              <GlowingButton onClick={handlePayClick} className="px-8 py-4 text-lg min-w-[180px]">
                Pay $2 to Join
              </GlowingButton>
              
              <button 
                onClick={scrollToHowItWorks}
                className="px-8 py-4 rounded-full border border-white/10 hover:bg-white/5 transition-all text-white/70 font-medium min-w-[180px] backdrop-blur-sm"
              >
                Learn More
              </button>
            </div>
          </div>

          {/* Wireframe Orb Graphic - Moved lower/behind to accommodate bill */}
          <div className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[100%] h-[600px] pointer-events-none select-none z-0 flex items-center justify-center opacity-60">
            
            {/* Central Glow */}
            <div className="absolute w-[200px] h-[200px] rounded-full bg-purple-600/20 blur-[80px]" />

            {/* SVG Wireframe Sphere Representation */}
            <svg viewBox="0 0 200 200" className="w-[500px] h-[500px] animate-pulse-slow">
              <defs>
                <radialGradient id="sphere-grad" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="rgba(139, 92, 246, 0.1)" />
                  <stop offset="100%" stopColor="rgba(139, 92, 246, 0.0)" />
                </radialGradient>
              </defs>
              
              {/* Main Sphere Body */}
              <circle cx="100" cy="100" r="70" fill="url(#sphere-grad)" stroke="rgba(167, 139, 250, 0.2)" strokeWidth="0.5" />
              
              {/* Latitude Lines */}
              <ellipse cx="100" cy="100" rx="70" ry="20" fill="none" stroke="rgba(167, 139, 250, 0.1)" strokeWidth="0.5" />
              <ellipse cx="100" cy="100" rx="70" ry="45" fill="none" stroke="rgba(167, 139, 250, 0.1)" strokeWidth="0.5" />
              
              {/* Longitude Lines (simulated) */}
              <ellipse cx="100" cy="100" rx="20" ry="70" fill="none" stroke="rgba(167, 139, 250, 0.1)" strokeWidth="0.5" />
              <ellipse cx="100" cy="100" rx="45" ry="70" fill="none" stroke="rgba(167, 139, 250, 0.1)" strokeWidth="0.5" />
            </svg>
          </div>
        </section>

        {/* How It Works - Redesigned Layout */}
        <section id="how-it-works" className="py-32 relative z-20">
          <div className="flex flex-col md:flex-row justify-between items-start mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                Scratch that itch, <br />you'll make it back. <span className="text-[#A78BFA]">Right?</span>
              </h2>
            </div>
            <div className="max-w-md">
              <p className="text-white/50 text-lg mb-6">
                The process is intentionally simple. No accounts, no hidden fees, just pure curiosity. Join the experiment in seconds.
              </p>
              <div className="flex gap-4">
                <GlowingButton onClick={handlePayClick} className="px-6 py-2 text-sm">
                  Pay $2 to Join
                </GlowingButton>
                <button 
                  onClick={() => document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth'})}
                  className="px-6 py-2 rounded-full border border-white/10 hover:bg-white/5 transition-all text-white/70 text-sm"
                >
                  Read FAQ
                </button>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <GlassCard className="relative h-[400px] flex flex-col justify-between p-8 overflow-hidden group bg-[#08080c]">
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-6">
                  <span className="text-purple-400 font-bold text-xl">1</span>
                </div>
                <h3 className="text-2xl font-semibold mb-2 text-white">Pay $2</h3>
                <p className="text-white/40 text-sm leading-relaxed">
                  Contribute a tiny amount securely via Stripe to join the experiment.
                </p>
              </div>
              
              {/* Purple Island Beam Effect */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120%] h-[200px] bg-gradient-to-t from-purple-600/20 via-purple-900/5 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
              <div className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 w-[80%] h-[40px] bg-purple-500/30 blur-[40px] rounded-full"></div>
              
              {/* Decorative Graphic */}
              <div className="absolute bottom-10 right-10 w-24 h-24 opacity-20 group-hover:opacity-40 transition-opacity duration-500">
                 <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-full h-full text-purple-500"><path d="M12 2L2 7L12 12L22 7L12 2Z" strokeWidth="1"/><path d="M2 17L12 22L22 17" strokeWidth="1"/><path d="M2 12L12 17L22 12" strokeWidth="1"/></svg>
              </div>
            </GlassCard>

            {/* Card 2 */}
            <GlassCard className="relative h-[400px] flex flex-col justify-between p-8 overflow-hidden group bg-[#08080c]">
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-6">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-purple-400"><path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"/><path d="M12 12L12 16"/><path d="M12 8H12.01"/></svg>
                </div>
                <h3 className="text-2xl font-semibold mb-2 text-white">Unlock</h3>
                <p className="text-white/40 text-sm leading-relaxed">
                  Instantly get redirected to the live counter page after payment.
                </p>
              </div>

              {/* Purple Island Beam Effect */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120%] h-[200px] bg-gradient-to-t from-purple-600/20 via-purple-900/5 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
              <div className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 w-[80%] h-[40px] bg-purple-500/30 blur-[40px] rounded-full"></div>

              {/* Center Beam Graphic */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-[150px] bg-gradient-to-t from-purple-500/50 to-transparent"></div>
              <div className="absolute bottom-[150px] left-1/2 -translate-x-1/2 w-4 h-4 bg-purple-500 rounded-full blur-sm animate-pulse"></div>
            </GlassCard>

            {/* Card 3 */}
            <GlassCard className="relative h-[400px] flex flex-col justify-between p-8 overflow-hidden group bg-[#08080c]">
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-6">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-purple-400"><path d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z"/><circle cx="12" cy="12" r="3"/></svg>
                </div>
                <h3 className="text-2xl font-semibold mb-2 text-white">Reveal</h3>
                <p className="text-white/40 text-sm leading-relaxed">
                  See exactly how many people have paid before you.
                </p>
              </div>

              {/* Purple Island Beam Effect */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120%] h-[200px] bg-gradient-to-t from-purple-600/20 via-purple-900/5 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
              <div className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 w-[80%] h-[40px] bg-purple-500/30 blur-[40px] rounded-full"></div>

              {/* Decorative Particles */}
              <div className="absolute bottom-10 left-10 flex gap-2 opacity-30">
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
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
        <footer className="py-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-sm text-white/30 relative z-20">
          <div className="mb-4 md:mb-0 font-medium hover:text-white/50 transition-colors cursor-default">
            PaidTwoDollars
          </div>
          <div className="flex gap-6">
             <a href="#" className="hover:text-white transition-colors">Privacy</a>
             <a href="#" className="hover:text-white transition-colors">Terms</a>
             <span>&copy; {new Date().getFullYear()}</span>
          </div>
        </footer>
      </div>
    </main>
  );
}
