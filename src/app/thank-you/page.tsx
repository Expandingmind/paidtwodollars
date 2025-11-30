import React from "react";
import Link from "next/link";
import { GlassCard, GlowingButton } from "@/components/ui-elements";

// Mock function for pure UI test without server actions
async function getParticipantCount() {
  return 1337;
}

export default async function ThankYou({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const sessionId = searchParams.session_id;
  const count = await getParticipantCount();
  
  // Format number with commas
  const formattedCount = new Intl.NumberFormat('en-US').format(count);

  return (
    <main className="min-h-screen bg-transparent text-[#00FF41] overflow-hidden selection:bg-[#00FF41]/30 flex items-center justify-center relative font-mono">
      {/* Background Effects - Green Haze */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-[#00FF41]/10 blur-[120px]" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-[#003311]/20 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-2xl w-full px-6 text-center">
        <div className="mb-12 animate-fade-in-up">
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-[#00FF41]/30 bg-[#00FF41]/10 text-[#00FF41] text-sm font-medium shadow-[0_0_10px_rgba(0,255,65,0.2)]">
             Live Global Count
          </div>
          
          <h1 className="text-8xl md:text-9xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-[#00FF41] via-[#80FF9D] to-[#003311] mb-4 drop-shadow-[0_0_15px_rgba(0,255,65,0.6)]">
            {formattedCount}
          </h1>
          
          <p className="text-xl text-[#00FF41]/60">
            people have paid $2 to see this number.
          </p>
        </div>

        {!sessionId && (
          <GlassCard className="mb-12 p-6 border-[#00FF41]/20 bg-[#00FF41]/5">
            <p className="text-[#00FF41]/80 text-sm">
              Note: You are viewing the live count without participating. 
              <Link href="/" className="underline hover:text-[#00FF41] ml-1 font-bold">
                Pay $2 to join the experiment.
              </Link>
            </p>
          </GlassCard>
        )}

        {sessionId && (
           <div className="mb-12">
             <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#00FF41]/20 flex items-center justify-center text-[#00FF41] animate-scale-in shadow-[0_0_20px_rgba(0,255,65,0.3)]">
               <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
               </svg>
             </div>
             <h2 className="text-2xl font-bold text-[#00FF41] mb-2">You're in.</h2>
             <p className="text-[#00FF41]/50">Thank you for participating in the experiment.</p>
           </div>
        )}

        <div className="flex justify-center">
          <Link href="/">
             <GlowingButton className="bg-transparent bg-none border border-[#00FF41]/20 hover:bg-[#00FF41]/10 text-[#00FF41]">
               Back to Homepage
             </GlowingButton>
          </Link>
        </div>
      </div>
    </main>
  );
}
