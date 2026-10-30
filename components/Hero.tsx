"use client";

import { useState } from "react";
import Image from "next/image";
import { PhoneCall, Calendar, Coffee, Footprints, Music, Compass, Check } from "lucide-react";

interface HeroProps {
  onOpenCallModal: () => void;
  onOpenCalendly: () => void;
  whatsappUrl: string;
}

export default function Hero({ onOpenCallModal, onOpenCalendly, whatsappUrl }: HeroProps) {
  const [selectedTag, setSelectedTag] = useState("Walks");

  const tags = [
    { id: "Walks", label: "Walks", icon: Footprints },
    { id: "Coffee", label: "Coffee", icon: Coffee },
    { id: "Music", label: "Live Music", icon: Music },
    { id: "Museums", label: "Museums", icon: Compass },
  ];

  return (
    <section className="relative overflow-hidden pt-8 pb-14 px-[22px]">
      {/* Subtle ambient gradient overlay inspired by Figma Hero background */}
      <div className="absolute inset-0 -z-10 pointer-events-none opacity-40">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[420px] h-[420px] rounded-full bg-gradient-to-br from-sand-light via-clay/40 to-sage/20 blur-3xl" />
      </div>

      <div className="max-w-[350px] mx-auto text-center flex flex-col items-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sand/40 border border-sand-border text-deep-brown text-xs font-medium mb-4">
          <span className="w-2 h-2 rounded-full bg-burnt-orange animate-pulse" />
          <span>Your Lifestyle & Social Companion</span>
        </div>

        {/* Main Title in Rufina */}
        <h1 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-deep-brown leading-[1.18] mb-3.5">
          Meaningful connections and activities, tailored for you.
        </h1>

        {/* Subtitle in Body Brown */}
        <p className="text-sm text-body-brown leading-relaxed mb-6 font-normal">
          Nexty understands what brings you joy — from tranquil morning walks to lively coffee meetups — and connects you with what matters most.
        </p>

        {/* Interactive Chat Mockup (Straight from Figma Frame 2690 / 2693 / 2696) */}
        <div className="w-full bg-warm-white rounded-card p-4 border border-sand-border shadow-soft mb-6 text-left">
          <div className="flex items-center gap-2 pb-3 mb-3 border-b border-sand-border/60">
            <div className="relative w-7 h-7">
              <Image
                src="/assets/fox-mark.png"
                alt="Nexty"
                width={28}
                height={28}
                className="object-contain"
              />
            </div>
            <div>
              <p className="text-xs font-bold text-deep-brown">Nexty Concierge</p>
              <p className="text-[10px] text-sage font-medium">● Active now</p>
            </div>
          </div>

          <div className="space-y-2.5 mb-3">
            {/* User message (Figma style Frame 2690) */}
            <div className="flex justify-end">
              <div className="bg-[#84382B] text-white text-xs px-3.5 py-2.5 rounded-2xl rounded-tr-none max-w-[85%] shadow-sm leading-snug">
                I enjoy walks, museums, music, and coffee.
              </div>
            </div>

            {/* Nexty response (Figma style Frame 2693) */}
            <div className="flex justify-start">
              <div className="bg-[#F7EFE7] text-deep-brown text-xs px-3.5 py-2.5 rounded-2xl rounded-tl-none max-w-[90%] border border-sand-border/50 leading-snug">
                Great! I found 3 wonderful options for you this week.
              </div>
            </div>
          </div>

          {/* Interactive Tag Chips (Figma style Frame 2696) */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {tags.map((tag) => {
              const isSelected = selectedTag === tag.id;
              const Icon = tag.icon;
              return (
                <button
                  key={tag.id}
                  onClick={() => setSelectedTag(tag.id)}
                  className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-medium transition-all ${
                    isSelected
                      ? "bg-sand text-deep-brown font-semibold shadow-xs"
                      : "bg-cream/60 text-muted hover:bg-cream border border-sand-border/60"
                  }`}
                >
                  {isSelected ? (
                    <Check className="w-3 h-3 text-burnt-orange stroke-[3]" />
                  ) : (
                    <Icon className="w-3 h-3 text-muted" />
                  )}
                  <span>{tag.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 3 Key Conversion Actions (The Scope Requirements) */}
        <div className="w-full space-y-2.5">
          {/* Interaction 1: Call Me Now (Figma Frame 2608 - Sage Color) */}
          <button
            onClick={onOpenCallModal}
            className="w-full bg-sage hover:bg-sage-dark text-white font-semibold py-3.5 px-4 rounded-btn transition-all text-sm flex items-center justify-center gap-2 shadow-sm active:scale-[0.98] duration-150"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Call Me Now</span>
          </button>

          {/* Interaction 2: Book a Call / Calendly (Figma Frame 2616 - Burnt Orange on Dark) */}
          <button
            onClick={onOpenCalendly}
            className="w-full bg-burnt-orange hover:bg-burnt-dark text-white font-semibold py-3.5 px-4 rounded-btn transition-all text-sm flex items-center justify-center gap-2 shadow-sm active:scale-[0.98] duration-150"
          >
            <Calendar className="w-4 h-4" />
            <span>Schedule a Call (Calendly)</span>
          </button>

          {/* Interaction 3: Talk on WhatsApp (Figma Frame 2612 - Secondary Warm White Pill) */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-warm-white hover:bg-sand-light text-deep-brown font-semibold py-3 px-4 rounded-full border border-sand-border transition-all text-sm flex items-center justify-center gap-2 shadow-xs active:scale-[0.98] duration-150"
          >
            {/* WhatsApp Icon */}
            <svg
              className="w-4 h-4 fill-[#25D366]"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.472 14.382c-.301-.15-1.782-.879-2.058-.98-.276-.1-.477-.15-.678.15-.201.3-.778.98-.954 1.181-.176.2-.352.226-.653.075s-1.272-.469-2.423-1.496c-.896-.798-1.501-1.785-1.677-2.086-.176-.301-.019-.464.132-.614.136-.135.301-.351.452-.527.15-.176.2-.301.301-.502.1-.2.05-.376-.025-.526-.075-.15-.678-1.635-.929-2.239-.245-.589-.494-.509-.678-.519-.176-.01-.376-.01-.577-.01s-.527.075-.803.376c-.276.3-1.054 1.03-1.054 2.511s1.079 2.912 1.23 3.113c.15.2 2.124 3.243 5.145 4.548.719.311 1.28.497 1.718.636.723.23 1.38.198 1.9.12.58-.088 1.782-.728 2.033-1.431.251-.703.251-1.306.176-1.431-.076-.126-.277-.201-.578-.352zM12.04 2C6.496 2 2 6.496 2 12.04c0 1.97.57 3.805 1.554 5.352L2.04 22l4.744-1.488A10.007 10.007 0 0012.04 22c5.544 0 10.04-4.496 10.04-10.04S17.584 2 12.04 2z" />
            </svg>
            <span>Chat on WhatsApp</span>
          </a>
        </div>

        <p className="text-[11px] text-muted mt-3">
          Quick response guaranteed within regular operating hours.
        </p>
      </div>
    </section>
  );
}
