"use client";

import React, { useState } from "react";
import { GlowingButton, GlassCard, AccordionItem } from "@/components/ui-elements";
import { createCheckoutSession } from "@/app/actions";

export default function Home() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const handlePayClick = async () => {
    // Server action to create checkout session
    await createCheckoutSession();
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const scrollToHowItWorks = () => {
    const element = document.getElementById("how-it-works");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white overflow-hidden selection:bg-purple-500/30">
      {/* Background Effects */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-purple-900/20 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-indigo-900/20 blur-[120px]" />
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col items-center justify-center text-center pt-20 pb-32">
          <div className="space-y-8 max-w-3xl animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/50">
              Pay $2 to See How Many People Paid $2
            </h1>
            
            <p className="text-xl md:text-2xl text-white/60 font-light">
              A tiny social experiment about curiosity, FOMO, and human behavior.
            </p>

            <div className="flex flex-col items-center gap-4 pt-8">
              <GlowingButton onClick={handlePayClick}>
                Pay $2 to Join
              </GlowingButton>
              
              <button 
                onClick={scrollToHowItWorks}
                className="text-sm text-white/40 hover:text-purple-400 transition-colors"
              >
                Scroll to see how it works
              </button>
            </div>
          </div>

          {/* Planet/Orb Graphic */}
          <div className="mt-20 relative w-64 h-64 md:w-96 md:h-96">
            <div className="absolute inset-0 rounded-full bg-gradient-to-b from-purple-500/20 to-transparent blur-3xl animate-pulse-slow" />
            <div className="absolute inset-10 rounded-full bg-gradient-to-tr from-indigo-500/30 to-purple-500/10 backdrop-blur-md border border-white/5 shadow-[0_0_50px_rgba(139,92,246,0.1)]" />
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="py-32">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white/90">
            How It Works
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <GlassCard className="p-8 text-center group hover:-translate-y-2">
              <div className="w-12 h-12 mx-auto mb-6 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
                <span className="font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">Pay $2</h3>
              <p className="text-white/60">Contribute a tiny amount to join the experiment.</p>
            </GlassCard>

            <GlassCard className="p-8 text-center group hover:-translate-y-2">
              <div className="w-12 h-12 mx-auto mb-6 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
                <span className="font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">Unlock the Counter</h3>
              <p className="text-white/60">After checkout, you’re redirected to the live results.</p>
            </GlassCard>

            <GlassCard className="p-8 text-center group hover:-translate-y-2">
              <div className="w-12 h-12 mx-auto mb-6 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
                <span className="font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">Watch It Grow</h3>
              <p className="text-white/60">See how many others were curious enough to pay.</p>
            </GlassCard>
          </div>
        </section>

        {/* Why This Exists */}
        <section className="py-32 text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white/90">
            Why This Exists
          </h2>
          <div className="space-y-6 text-lg text-white/60 leading-relaxed">
            <p>
              It's a simple study of curiosity. We often follow the herd, wondering what's behind the curtain.
            </p>
            <p>
              For the price of a coffee, you satisfy that itch and become a data point in a global experiment of collective behavior.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-32 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white/90">
            Common Questions
          </h2>
          
          <div className="space-y-2">
            <AccordionItem
              question="Is this a real product?"
              answer="No, it's a social experiment. You are paying for the experience of participating and seeing the result."
              isOpen={openFaqIndex === 0}
              onClick={() => toggleFaq(0)}
            />
            <AccordionItem
              question="What do you do with the money?"
              answer="The funds cover Stripe fees, hosting costs, and coffee to keep the experiment running."
              isOpen={openFaqIndex === 1}
              onClick={() => toggleFaq(1)}
            />
            <AccordionItem
              question="Can I get a refund?"
              answer="Since this is a digital experience that is consumed immediately upon unlocking the counter, refunds are generally not offered. However, if you feel strongly about it, contact support."
              isOpen={openFaqIndex === 2}
              onClick={() => toggleFaq(2)}
            />
            <AccordionItem
              question="How is the count calculated?"
              answer="The count is a direct real-time fetch from our payment processor (Stripe). It represents the exact number of successful payments made."
              isOpen={openFaqIndex === 3}
              onClick={() => toggleFaq(3)}
            />
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-sm text-white/40">
          <div className="mb-4 md:mb-0 font-medium text-white/60">
            $2 Experiment
          </div>
          <div>
            &copy; {new Date().getFullYear()} All rights reserved.
          </div>
        </footer>
      </div>
    </main>
  );
}
