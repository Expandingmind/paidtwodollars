import React from "react";
import Image from "next/image";

export function MatrixBackground() {
  return (
    <div className="fixed inset-0 z-[-1] w-full h-full bg-black">
      <Image
        src="/Digital_rain_animation_medium_letters_shine.gif"
        alt="Matrix Rain"
        fill
        priority
        className="object-cover opacity-30"
        unoptimized // Required for GIFs to play correctly in some Next.js setups
      />
      <div className="absolute inset-0 bg-black/70 mix-blend-overlay" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/90" />
    </div>
  );
}

