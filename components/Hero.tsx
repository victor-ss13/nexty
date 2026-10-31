"use client";

import { useState } from "react";
import Image from "next/image";
import { PhoneCall, Calendar, Coffee, Footprints, Music, Compass, Check } from "lucide-react";

export default function Hero() {
    const [selectedTag, setSelectedTag] = useState("Walks");

    const tags = [
        { id: "Walks", label: "Walks", icon: Footprints },
        { id: "Coffee", label: "Coffee Meetups", icon: Coffee },
        { id: "Music", label: "Live Music", icon: Music },
        { id: "Museums", label: "Museums", icon: Compass }
    ];

    return (
        <section className="relative overflow-hidden pt-8 pb-14 md:py-16 lg:py-20 px-6">
            {/* Container máximo que centraliza no Desktop */}
            <div className="max-w-6xl mx-auto">
                {/* Grid responsivo: 1 coluna no celular, 12 colunas no Desktop */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

                    {/* Coluna da Esquerda (7 colunas): Textos e Botões de Ação */}
                    <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">

                        {/* Badge / Pill */}
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sand/40 border border-sand-border text-deep-brown text-xs font-medium mb-5">
                            <span className="w-2 h-2 rounded-full bg-burnt-orange animate-pulse" />
                            <span>Your Lifestyle & Social Companion</span>
                        </div>

                        {/* Título com a fonte Rufina */}
                        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-deep-brown leading-[1.16] mb-4">
                            Meaningful connections and activities, tailored just for you.
                        </h1>

                        {/* Subtítulo */}
                        <p className="text-sm sm:text-base text-body-brown leading-relaxed mb-8 max-w-xl">
                            Nexty understands what brings you joy - from peaceful morning strolls to vibrant coffe meetups - and matches you with curated local experiences and welcoming companions.
                        </p>

                        {/* As 3 Ações de Conversão */}
                        <div className="w-full max-w-md space-y-3">
                            <div className="flex flex-col sm:flex-row gap-3">
                                {/* 1. Call Me Now */}
                                <button className="flex-1 bg-sage hover:bg-sage-dark text-white font-semibold py-3.5 px-5 rounded-btn transition-all text-sm flex items-center justify-center gap-2 shadow-sm active:scale-[0.98]">
                                    <PhoneCall className="w-4 h-4" />
                                    <span>Call Me Now</span>
                                </button>

                                {/* 2. Schedule a Call (Calendly) */}
                                <button className="flex-1 bg-burnt-orange hover:bg-burnt-dark text-white font-semibold py-3.5 px-5 rounded-btn transition-all text-sm flex items-center justify-center gap-2 shadow-sm active:scale-[0.98]">
                                    <Calendar className="w-4 h-4" />
                                    <span>Schedule a Call</span>
                                </button>
                            </div>

                            {/* Talk on WhatsApp */}
                            <a
                                href="https://wa.me/5531989883676"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full bg-warm-white hover:bg-sand-light text-deep-brown font-semibold py-3 px-5 rounded-full border border-sand-border transition-all text-sm flex items-center justify-center gap-2 shadow-xs active:scale-[0.98]"
                            >
                                {/* Ícone SVG oficial do WhatsApp */}
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
                    </div>

                    {/* Coluna da Direita (5 colunas): Simulação de Chat do Figma */}
                    <div className="lg:col-span-5 w-full max-w-[393px] mx-auto lg:max-w-none">
                        <div className="bg-warm-white rounded-card-lg p-5 sm:p-6 border border-sand-border shadow-elevated">

                            {/* Header do Chat */}
                            <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-sand-border/60">
                                <div className="flex items-center gap-2.5">
                                    <div className="relative w-8 h-8 rounded-full bg-sand/30 flex items-center justify-center p-1">
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
                                        <p className="text-[10px] text-sage-dark font-medium flex items-center gap-1">
                                            <span className="w-1.5 h-1.5 rounded-full bg-sage animate-pulse" />
                                            Active now
                                        </p>
                                    </div>
                                </div>
                                <span className="text-[10px] bg-sand/40 text-deep-brown font-semibold px-2 py-0.5 rounded-full">
                                    AI Matcher
                                </span>
                            </div>

                            {/* Balões de Mensagem */}
                            <div className="space-y-3 mb-4">
                                {/* Mensagem do Usuário */}
                                <div className="flex justify-end">
                                    <div className="bg-[#84382B] text-white text-xs sm:text-sm px-4 py-2.5 rounded-2xl rounded-tr-none max-w-[85%] shadow-sm leading relaxed">
                                        I enjoy walks, museums, music and coffee.
                                    </div>
                                </div>

                                {/* Resposta do Nexty */}
                                <div className="flex justify-start">
                                    <div className="bg-[#F7EFE7] text-deep-brown text-xs sm:text-sm px-4 py-3 rounded-2xl rounded-tl-none max-w-[90%] border border-sand-border/50 leading-relaxed">
                                        Great! I found 3 wonderful options for you this week: a Tuesday botanical garden walk, an acoustic jazz coffee meetup and a gallery tour.
                                    </div>
                                </div>
                            </div>

                            {/* Tags de Hobbie Interativas */}
                            <div>
                                <p className="text-[11px] font-semibold text-muted mb-2 uppercase tracking-wider">
                                    Select your interest:
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {tags.map((tag) => {
                                        const isSelected = selectedTag === tag.id;
                                        const Icon = tag.icon;
                                        return (
                                            <button
                                                key={tag.id}
                                                onClick={() => setSelectedTag(tag.id)}
                                                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all ${isSelected
                                                    ? "bg-burnt-orange text-white font-semibold shadow-xs"
                                                    : "bg-cream/60 text-deep-brown hover:bg-sand/40 border border-sand-border/60"
                                                    }`}
                                            >
                                                {isSelected ? (
                                                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                                                ) : (
                                                    <Icon className="w-3.5 h-3.5 text-muted" />
                                                )}
                                                <span>{tag.label}</span>
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}