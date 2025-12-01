"use client";

import React from "react";
import { GlassCard, GlowingButton } from "@/components/ui-elements";
import Link from "next/link";

export default function Privacy() {
  return (
    <main className="min-h-screen p-6 md:p-12 font-mono text-[#00FF41] selection:bg-[#00FF41]/30">
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-4xl font-bold">Privacy Policy</h1>
          <Link href="/">
            <GlowingButton className="px-4 py-2 text-sm bg-transparent border border-[#00FF41]/20 hover:bg-[#00FF41]/10 shadow-none">
              Back
            </GlowingButton>
          </Link>
        </div>

        <GlassCard className="p-8 bg-black/80">
          <div className="space-y-6 text-[#00FF41]/80">
            <p>Last updated: {new Date().getFullYear()}</p>
            
            <h2 className="text-xl font-bold text-[#00FF41] mt-8">1. Data Collection</h2>
            <p>
              We collect minimal data necessary to process your payment via Stripe. We do not store your credit card information on our servers.
            </p>

            <h2 className="text-xl font-bold text-[#00FF41] mt-8">2. Usage</h2>
            <p>
              The payment count is public. No personal identifiable information (PII) is displayed publicly.
            </p>

            <h2 className="text-xl font-bold text-[#00FF41] mt-8">3. Cookies</h2>
            <p>
              We use essential cookies for site functionality and payment processing.
            </p>
          </div>
        </GlassCard>
      </div>
    </main>
  );
}

