import React from "react";
import Image from "next/image";

interface MatrixBackgroundProps {
  children: React.ReactNode;
}

export default function MatrixBackground({ children }: MatrixBackgroundProps) {
  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-[#00FF41]/30">
      {/* Digital Rain Background Video/GIF */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <Image
          src="/Digital_rain_animation_medium_letters_shine.gif"
          alt="Matrix Rain"
          fill
          priority
          unoptimized
          className="object-cover opacity-30"
        />
        {/* Dark Overlay for Readability */}
        <div className="absolute inset-0 bg-black/80 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-transparent to-black/90" />
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
