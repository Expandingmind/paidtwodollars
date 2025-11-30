"use client";

import React, { useState } from "react";
import { GlowingButton, GlassCard, AccordionItem } from "@/components/ui-elements";

export default function Home() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const handlePayClick = async () => {
    alert("Stripe integration is momentarily disabled. We are restoring visuals first.");
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
            Login
         </GlowingButton>
      </nav>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Hero Section */}
        <section className="min-h-[85vh] flex flex-col items-center justify-center text-center pt-10 pb-20">
          
          {/* Pill Label */}
          <div className="mb-8 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-200 text-sm font-medium animate-fade-in backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-400"></span>
            </span>
            Join the global experiment
          </div>

          <div className="space-y-6 max-w-4xl animate-fade-in-up z-20">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] text-white">
              Pay $2 to See <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-300 via-purple-100 to-white">
                How Many Paid $2
              </span>
            </h1>
            
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

          {/* Wireframe Orb Graphic */}
          <div className="relative mt-[-50px] md:mt-[-100px] w-[100%] h-[400px] md:h-[600px] pointer-events-none select-none z-10 flex items-center justify-center opacity-90">
            
            {/* Central Glow */}
            <div className="absolute w-[200px] h-[200px] rounded-full bg-purple-600/40 blur-[80px]" />

            {/* SVG Wireframe Sphere Representation */}
            <svg viewBox="0 0 200 200" className="w-[300px] h-[300px] md:w-[500px] md:h-[500px] animate-pulse-slow">
              <defs>
                <radialGradient id="sphere-grad" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="rgba(139, 92, 246, 0.2)" />
                  <stop offset="100%" stopColor="rgba(139, 92, 246, 0.0)" />
                </radialGradient>
              </defs>
              
              {/* Main Sphere Body */}
              <circle cx="100" cy="100" r="70" fill="url(#sphere-grad)" stroke="rgba(167, 139, 250, 0.3)" strokeWidth="0.5" />
              
              {/* Latitude Lines */}
              <ellipse cx="100" cy="100" rx="70" ry="20" fill="none" stroke="rgba(167, 139, 250, 0.2)" strokeWidth="0.5" />
              <ellipse cx="100" cy="100" rx="70" ry="45" fill="none" stroke="rgba(167, 139, 250, 0.2)" strokeWidth="0.5" />
              
              {/* Longitude Lines (simulated) */}
              <ellipse cx="100" cy="100" rx="20" ry="70" fill="none" stroke="rgba(167, 139, 250, 0.2)" strokeWidth="0.5" />
              <ellipse cx="100" cy="100" rx="45" ry="70" fill="none" stroke="rgba(167, 139, 250, 0.2)" strokeWidth="0.5" />

              {/* Glowing Nodes */}
              <circle cx="30" cy="100" r="2" fill="#fff" className="animate-pulse" />
              <circle cx="170" cy="100" r="2" fill="#fff" className="animate-pulse" />
              <circle cx="100" cy="30" r="2" fill="#fff" className="animate-pulse" />
              <circle cx="100" cy="170" r="2" fill="#fff" className="animate-pulse" />
            </svg>

            {/* Orbital Rings */}
            <div className="absolute w-[350px] h-[350px] md:w-[550px] md:h-[550px] border border-white/5 rounded-full animate-[spin_20s_linear_infinite]" />
            <div className="absolute w-[500px] h-[500px] md:w-[700px] md:h-[700px] border border-white/5 rounded-full opacity-50 animate-[spin_30s_linear_infinite_reverse]" />
            
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="py-32 relative z-20">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              From Curiosity to <span className="text-[#A78BFA]">Insight</span>
            </h2>
            <p className="text-white/50 max-w-xl mx-auto text-lg">
              The process is intentionally simple. No accounts, no hidden fees, just pure curiosity.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <GlassCard className="p-10 flex flex-col items-center text-center">
              <div className="w-16 h-16 mb-8 rounded-2xl bg-[#1a1a24] flex items-center justify-center text-[#A78BFA] shadow-inner border border-white/5 group-hover:scale-110 transition-transform duration-500">
                <span className="font-bold text-2xl">1</span>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-white">Pay $2</h3>
              <p className="text-white/50 leading-relaxed">
                Contribute a tiny amount securely via Stripe to join the experiment.
              </p>
            </GlassCard>

            <GlassCard className="p-10 flex flex-col items-center text-center">
              <div className="w-16 h-16 mb-8 rounded-2xl bg-[#1a1a24] flex items-center justify-center text-[#A78BFA] shadow-inner border border-white/5 group-hover:scale-110 transition-transform duration-500">
                 <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"/><path d="M12 12L12 16"/><path d="M12 8H12.01"/></svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-white">Unlock</h3>
              <p className="text-white/50 leading-relaxed">
                Instantly get redirected to the live counter page.
              </p>
            </GlassCard>

            <GlassCard className="p-10 flex flex-col items-center text-center">
              <div className="w-16 h-16 mb-8 rounded-2xl bg-[#1a1a24] flex items-center justify-center text-[#A78BFA] shadow-inner border border-white/5 group-hover:scale-110 transition-transform duration-500">
                 <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z"/><circle cx="12" cy="12" r="3"/></svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-white">Reveal</h3>
              <p className="text-white/50 leading-relaxed">
                See exactly how many people have paid before you.
              </p>
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
