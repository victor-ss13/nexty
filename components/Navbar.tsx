"use client";

import Image from "next/image";
import { PhoneCall } from "lucide-react";

interface NavbarProps {
  onOpenCallModal: () => void;
  onOpenCalendly: () => void;
}

export default function Navbar({ onOpenCallModal, onOpenCalendly }: NavbarProps) {
  return (
    <header className="sticky top-0 z-30 w-full backdrop-blur-md bg-cream/80 border-b border-sand-border/50">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Logo and Brand Name */}
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-full overflow-hidden flex items-center justify-center bg-deep-brown shadow-xs flex-shrink-0">
            <Image
              src="/assets/fox-mark.png"
              alt="Nexty Logo"
              width={36}
              height={36}
              className="object-cover scale-125"
              priority
            />
          </div>
          <span className="font-serif font-bold text-xl tracking-tight text-deep-brown">
            Nexty
          </span>
        </div>

        {/* Links de navegação desktop */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-body-brown">
          <a href="#how-it-works" className="hover:text-burnt-orange transition-colors">
            How It Works
          </a>
          <a href="#community" className="hover:text-burnt-orange transition-colors">
            Community
          </a>
        </nav>

        {/* Botões de Ação */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenCalendly}
            className="hidden sm:inline-flex text-xs font-semibold text-deep-brown hover:text-burnt-orange px-3 py-2 transition-colors"
          >
            Schedule a Call
          </button>
          
          <button
            onClick={onOpenCallModal}
            className="bg-burnt-orange hover:bg-burnt-dark text-white text-xs font-semibold px-4 py-2 rounded-btn transition-colors flex items-center gap-1.5"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>Call Me Now</span>
          </button>
        </div>

      </div>
    </header>
  );
}