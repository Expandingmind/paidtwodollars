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
        bg-gradient-to-r from-purple-600 to-indigo-600 
        text-white font-semibold text-lg
        transition-all duration-300 ease-out
        hover:scale-105 hover:shadow-[0_0_20px_rgba(124,58,237,0.5)]
        disabled:opacity-50 disabled:cursor-not-allowed
        ${fullWidth ? "w-full" : "px-8 py-4"}
        ${className}
      `}
      {...props}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-violet-600 to-fuchsia-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
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
        relative overflow-hidden rounded-2xl border border-white/10 
        bg-white/5 backdrop-blur-lg 
        shadow-[0_8px_32px_0_rgba(0,0,0,0.36)]
        transition-all duration-300 hover:border-purple-500/30 hover:bg-white/10
        ${className}
      `}
    >
      {children}
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
    <div className="mb-4 rounded-xl overflow-hidden border border-white/10 bg-white/5">
      <button
        onClick={onClick}
        className="flex w-full items-center justify-between px-6 py-4 text-left transition-colors hover:bg-white/5"
      >
        <span className="text-lg font-medium text-white/90">{question}</span>
        <span className={`transform transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-purple-400"
          >
            <path
              d="M6 9L12 15L18 9"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>
      <div
        className={`
          overflow-hidden transition-all duration-300 ease-in-out
          ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <div className="px-6 pb-4 text-white/70">{answer}</div>
      </div>
    </div>
  );
}

