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

  // Environment variables with sensible defaults
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "15551234567";
  const defaultMessage = encodeURIComponent(
    "Hello Nexty team! I would like to learn more about how Nexty connects me with local activities and companions."
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${defaultMessage}`;
  const calendlyUrl =
    process.env.NEXT_PUBLIC_CALENDLY_URL || "https://calendly.com";

  return (
    <div className="min-h-screen flex flex-col bg-cream text-deep-brown selection:bg-burnt-orange selection:text-white">
      {/* Top Navbar */}
      <Navbar
        onOpenCallModal={() => setIsCallModalOpen(true)}
        onOpenCalendly={() => setIsCalendlyOpen(true)}
      />

      {/* Main Content (Mobile-First Container) */}
      <main className="flex-1 w-full max-w-[393px] md:max-w-xl mx-auto shadow-sm md:shadow-md md:my-6 md:rounded-card-lg overflow-hidden bg-cream md:border md:border-sand-border/60">
        <Hero
          onOpenCallModal={() => setIsCallModalOpen(true)}
          onOpenCalendly={() => setIsCalendlyOpen(true)}
          whatsappUrl={whatsappUrl}
        />

        <HowItWorks />

        <ClosingCTA
          onOpenCallModal={() => setIsCallModalOpen(true)}
          onOpenCalendly={() => setIsCalendlyOpen(true)}
          whatsappUrl={whatsappUrl}
        />

        <Footer />
      </main>

      {/* Floating Quick Action Pill for Mobile */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 w-[90%] max-w-[350px] md:hidden">
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

      {/* Modals for Interaction 1 and 2 */}
      <CallMeModal
        isOpen={isCallModalOpen}
        onClose={() => setIsCallModalOpen(false)}
      />

      <CalendlyModal
        isOpen={isCalendlyOpen}
        onClose={() => setIsCalendlyOpen(false)}
        calendlyUrl={calendlyUrl}
      />
    </div>
  );
}
