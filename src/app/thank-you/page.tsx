import React from "react";
import Link from "next/link";
// import { getParticipantCount } from "@/app/actions"; // Temporarily removed for pure UI test
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
    <main className="min-h-screen bg-[#0a0a0f] text-white overflow-hidden selection:bg-purple-500/30 flex items-center justify-center relative">
      {/* Background Effects */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-purple-900/20 blur-[120px]" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-indigo-900/20 blur-[120px]" />
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03]" />
      </div>

      <div className="relative z-10 max-w-2xl w-full px-6 text-center">
        <div className="mb-12 animate-fade-in-up">
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 text-sm font-medium">
             Live Global Count
          </div>
          
          <h1 className="text-8xl md:text-9xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/50 mb-4">
            {formattedCount}
          </h1>
          
          <p className="text-xl text-white/60">
            people have paid $2 to see this number.
          </p>
        </div>

        {!sessionId && (
          <GlassCard className="mb-12 p-6 border-yellow-500/20 bg-yellow-500/5">
            <p className="text-yellow-200/80 text-sm">
              Note: You are viewing the live count without participating. 
              <Link href="/" className="underline hover:text-yellow-200 ml-1">
                Pay $2 to join the experiment.
              </Link>
            </p>
          </GlassCard>
        )}

        {sessionId && (
           <div className="mb-12">
             <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 animate-scale-in">
               <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
               </svg>
             </div>
             <h2 className="text-2xl font-bold text-white mb-2">You're in.</h2>
             <p className="text-white/50">Thank you for participating in the experiment.</p>
           </div>
        )}

        <div className="flex justify-center">
          <Link href="/">
             <GlowingButton className="bg-transparent bg-none border border-white/10 hover:bg-white/5">
               Back to Homepage
             </GlowingButton>
          </Link>
        </div>
      </div>
    </main>
  );
}
