"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import ClosingCTA from "@/components/ClosingCTA";
import Footer from "@/components/Footer";
import CallMeModal from "@/components/CallMeModal";
import CalendlyModal from "@/components/CalendlyModal";

export default function Home() {
  const [isCallModalOpen, setIsCallModalOpen] = useState(false);
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

  const whatsappUrl = "https://wa.me/5531989883676";

  return (
    <div className="min-h-screen flex flex-col bg-cream text-deep-brown selection:bg-burnt-orange selection:text-white">
      {/* Navbar com gatilhos dos modais */}
      <Navbar
        onOpenCallModal={() => setIsCallModalOpen(true)}
        onOpenCalendly={() => setIsCalendlyOpen(true)}
      />
      <main className="flex-1 w-full">
        <Hero
          onOpenCallModal={() => setIsCallModalOpen(true)}
          onOpenCalendly={() => setIsCalendlyOpen(true)}
        />
        <HowItWorks />
        <ClosingCTA
          onOpenCallModal={() => setIsCallModalOpen(true)}
          onOpenCalendly={() => setIsCalendlyOpen(true)}
        />
      </main>
      <Footer />
      {/* Barra Flutuante de Acesso Rápido no Mobile */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 w-[92%] max-w-[360px] md:hidden">
        <div className="bg-deep-brown/95 text-cream backdrop-blur-md rounded-full px-3 py-2 flex items-center justify-between shadow-elevated border border-sand-border/30">
          <button
            onClick={() => setIsCallModalOpen(true)}
            className="flex-1 text-center py-1.5 text-xs font-semibold hover:text-sand transition-colors border-r border-cream/20"
          >
            📞 Call Me
          </button>
          <button
            onClick={() => setIsCalendlyOpen(true)}
            className="flex-1 text-center py-1.5 text-xs font-semibold hover:text-sand transition-colors border-r border-cream/20"
          >
            📅 Schedule
          </button>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center py-1.5 text-xs font-semibold text-[#25D366] hover:brightness-110 transition-colors"
          >
            💬 WhatsApp
          </a>
        </div>
      </div>
      {/* Os Modais Renderizados Condicionalmente */}
      <CallMeModal
        isOpen={isCallModalOpen}
        onClose={() => setIsCallModalOpen(false)}
      />
      <CalendlyModal
        isOpen={isCalendlyOpen}
        onClose={() => setIsCalendlyOpen(false)}
      />
    </div>
  );
}
