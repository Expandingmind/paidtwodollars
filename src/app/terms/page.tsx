"use client";

import React from "react";
import { GlassCard, GlowingButton } from "@/components/ui-elements";
import Link from "next/link";

export default function Terms() {
  return (
    <main className="min-h-screen p-6 md:p-12 font-mono text-[#00FF41] selection:bg-[#00FF41]/30">
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-4xl font-bold">Terms of Service</h1>
          <Link href="/">
             <GlowingButton className="px-4 py-2 text-sm bg-transparent border border-[#00FF41]/20 hover:bg-[#00FF41]/10 shadow-none">
              Back
            </GlowingButton>
          </Link>
        </div>

        <GlassCard className="p-8 bg-black/80">
          <div className="space-y-6 text-[#00FF41]/80">
            <p>Last updated: {new Date().getFullYear()}</p>
            
            <h2 className="text-xl font-bold text-[#00FF41] mt-8">1. The Experiment</h2>
            <p>
              PaidTwoDollars is a social experiment. By paying $2, you are purchasing access to view a number. That is the entirety of the product.
            </p>

            <h2 className="text-xl font-bold text-[#00FF41] mt-8">2. Refunds</h2>
            <p>
              All sales are final. Because the "product" (seeing the count) is consumed immediately upon viewing, we generally do not offer refunds.
            </p>

            <h2 className="text-xl font-bold text-[#00FF41] mt-8">3. Disclaimer</h2>
            <p>
              This site is provided "as is" without any warranties.
            </p>
          </div>
        </GlassCard>
      </div>
    </main>
  );
}

