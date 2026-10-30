"use client";

import Image from "next/image";

interface NavbarProps {
  onOpenCallModal: () => void;
  onOpenCalendly: () => void;
}

export default function Navbar({ onOpenCallModal }: NavbarProps) {
  return (
    <header className="sticky top-0 z-30 w-full backdrop-blur-md bg-cream/80 border-b border-sand-border/50">
      <div className="max-w-[393px] md:max-w-3xl mx-auto px-[22px] h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="relative w-8 h-8 flex-shrink-0">
            <Image
              src="/assets/fox-mark.png"
              alt="Nexty Logo"
              width={32}
              height={32}
              className="object-contain"
              priority
            />
          </div>
          <span className="font-serif font-bold text-xl tracking-tight text-deep-brown">
            Nexty
          </span>
        </div>

        <button
          onClick={onOpenCallModal}
          className="bg-burnt-orange hover:bg-burnt-dark text-white text-xs font-medium px-3.5 py-1.5 rounded-btn transition-colors shadow-sm active:scale-95 duration-150"
        >
          Get Started
        </button>
      </div>
    </header>
  );
}
