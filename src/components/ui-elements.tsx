import React from "react";

interface GlowingButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  fullWidth?: boolean;
}

export function GlowingButton({ children, className = "", fullWidth = false, ...props }: GlowingButtonProps) {
  return (
    <button
      className={`
        relative group overflow-hidden rounded-full 
        bg-gradient-to-r from-[#8B5CF6] to-[#6D28D9]
        text-white font-semibold text-sm md:text-base tracking-wide
        transition-all duration-300 ease-out
        hover:scale-105 
        hover:shadow-[0_0_25px_rgba(139,92,246,0.6),0_0_10px_rgba(139,92,246,0.4)_inset]
        border border-purple-400/30 hover:border-purple-300
        active:scale-95
        disabled:opacity-50 disabled:cursor-not-allowed
        ${fullWidth ? "w-full" : "px-8 py-3"}
        ${className}
      `}
      {...props}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
      {/* Inner highlight */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Pulsing Glow Effect */}
      <div className="absolute -inset-1 rounded-full bg-purple-500/20 blur-md group-hover:bg-purple-500/40 transition-all duration-300 -z-20"></div>
    </button>
  );
}

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
}

export function GlassCard({ children, className = "" }: GlassCardProps) {
  return (
    <div
      className={`
        relative overflow-hidden rounded-3xl 
        border border-[#2a2a35]
        bg-[#0a0a10]/80 backdrop-blur-xl
        shadow-[0_0_0_1px_rgba(255,255,255,0.05)]
        transition-all duration-500 
        hover:border-[#8B5CF6]/50 hover:shadow-[0_0_30px_rgba(139,92,246,0.15)]
        group
        ${className}
      `}
    >
      {/* Inner gradient glow on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#8B5CF6]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      {/* Content container */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}

interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

export function AccordionItem({ question, answer, isOpen, onClick }: AccordionItemProps) {
  return (
    <div className="mb-4 rounded-xl overflow-hidden border border-white/5 bg-white/[0.02] transition-colors hover:bg-white/[0.04]">
      <button
        onClick={onClick}
        className="flex w-full items-center justify-between px-6 py-4 text-left"
      >
        <span className="text-lg font-medium text-white/90">{question}</span>
        <span className={`transform transition-transform duration-300 text-purple-400 ${isOpen ? "rotate-180" : ""}`}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 9L12 15L18 9" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      </button>
      <div
        className={`
          overflow-hidden transition-all duration-300 ease-in-out
          ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <div className="px-6 pb-6 text-white/60 leading-relaxed">
          {answer}
        </div>
      </div>
    </div>
  );
}
