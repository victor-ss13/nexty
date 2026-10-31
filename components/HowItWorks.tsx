import Image from "next/image";
import { MessageSquareText, Sparkles, HeartHandshake, Users, Coffee, Star } from "lucide-react";

export default function HowItWorks() {
    const steps = [
        {
            num: "01",
            icon: MessageSquareText,
            title: 'Tell Nexty your hobbies',
            desc: "Share your daily rhytm, whether you fancy art exhibitions, peaceful morning strolls or quiet bookstore visits.",
        },
        {
            num: "02",
            icon: Sparkles,
            title: "Receive curated suggestions",
            desc: "Get personalized local recommendations matching your schedule and tempo, without overwhelm.",
        },
        {
            num: "03",
            icon: HeartHandshake,
            title: "Connect with kindred spirits",
            desc: "Meet locals with matching interests for warm coffee chats, group walks, and shared laughter.",
        },
    ];

    return (
        <section id="how-it-works" className="py-16 md:py-24 px-6 bg-sand-light/50 border-y border-sand-border/40">
            <div className="max-w-6xl mx-auto">

                {/* Cabeçalho da Seção */}
                <div className="text-center max-w-xl mx-auto mb-12 sm:mb-16">
                    <p className="text-xs uppercase tracking-widest text-burnt-orange font-bold mb-2">
                        How Nexty Works
                    </p>
                    <h2 className="font-serif text-3xl sm:text-4xl font-bold text-deep-brown">
                        Simple, warm and personal
                    </h2>
                    <p className="text-sm text-body-brown mt-3">
                        Designed for ease of use - no complicated feeds, algorithm ou endless scrolling.
                    </p>
                </div>

                {/* Os 3 Cartões: 1 coluna no celuar, 3 colunas no Desktop */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                    {steps.map((step) => {
                        const Icon = step.icon;
                        return (
                            <div
                                key={step.num}
                                className="bg-warm-white p-6 rounded-card border border-sand-border shadow-soft flex flex-col justify-between hover:-translate-y-1 transition-transform duration-200"
                            >
                                <div>
                                    <div className="w-12 h-12 rounded-full bg-sand/40 border border-sand-border flex items-center justify-center text-burnt-orange mb-5">
                                        <Icon className="w-6 h-6" />
                                    </div>
                                    <span className="text-xs font-bold text-muted uppercase tracking-wider">
                                        Step {step.num}
                                    </span>
                                    <h3 className="font-serif font-bold text-xl text-deep-brown mt-1 mb-2">
                                        {step.title}
                                    </h3>
                                    <p className="text-sm text-body-brown leading-relaxed">
                                        {step.desc}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Card de Prova Social com Foto */}
                <div
                    id="community"
                    className="bg-warm-white rounded-card-lg overflow-hidden border border-sand-border shadow-elevated grid grid-cols-1 md:grid-cols-12"
                >
                    {/* Foto */}
                    <div className="md:col-span-6 relative min-h-[260px] md:min-h-[380px]">
                        <Image
                            src="/assets/social-community.png"
                            alt="Community enjoying coffee together outdoors"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-deep-brown/80 via-transparent to-transparent md:hidden flex items-end p-5">
                            <span className="text-cream text-xs font-medium tracking-wide">
                                Real connections made daily
                            </span>
                        </div>
                    </div>

                    {/* Depoimento e Métricas */}
                    <div className="md:col-span-6 p-6 sm:p-10 flex flex-col justify-center">
                        {/* 5 Estrelas */}
                        <div className="flex items-center gap-1 text-amber-500 mb-3">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 fill-amber-500"/>
                            ))}
                        </div>

                        {/* Badges da comunidade */}
                        <div className="flex flex-wrap items-center gap-2 mb-4">
                            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-sage-dark bg-sage/15 px-3 py-1 rounded-full">
                                <Users className="w-3.5 h-3.5"/> 2,400 Active Members
                            </span>
                            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-burnt-orange bg-burnt-orange/10 px-3 py-1 rounded-full">
                                <Coffee className="w-3.5 h-3.5"/> Local Cafes & Parks
                            </span>
                        </div>

                        {/* Citação em itálico */}
                        <blockquote className="font-serif text-lg sm:text-xl text-deep-brown leading-relaxed italic mb-4">
                            &ldquo;Nexty introduced me to Evelyn and Sarah. We now talk together around the botanical gardes every Tuesday morning! It has brought so much warmth to my routine.&rdquo;
                        </blockquote>

                        <div>
                            <p className="font-bold text-deep-brown text-sm">Margaret D., 68</p>
                            <p className="text-xs text-muted">Miami, FL • Joined 6 months ago</p>
                        </div>
                    </div>
                </div>
                
            </div>
        </section>
    );
}