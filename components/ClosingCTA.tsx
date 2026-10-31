import { PhoneCall, Calendar, MessageCircle } from "lucide-react";

export default function ClosingCTA() {
    return (
        <section className="py-20 px-6 bg-gradient-to-b from-cream via-sand-light/50 to-cream">
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-deep-brown leading-tight mb-4">
                    Ready to experience a more connected week?
                </h2>

                <p className="text-sm sm:text-base text-body-brown leading-relaxed mb-8 max-w-xl mx-auto">
                    Whether you want a quick 2-minute phone chat, a booked video call or a friendly hello on WhatsApp, we&apos;re here for you.
                </p>

                {/* Botões de Ação Final */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 max-w-md sm:max-w-xl mx-auto">
                    {/* Call Me Now */}
                    <button className="w-full sm:w-auto flex-1 bg-sage hover:bg-sage-dark text-white font-semibold py-3.5 px-5 rounded-btn transition-colors text-sm flex items-center justify-center gap-2 shadow-sm">
                        <PhoneCall className="w-4 h-4"/>
                        <span>Call Me Now</span>
                    </button>

                    {/* Book a Call */}
                    <button className="w-full sm:w-auto flex-1 bg-burnt-orange hover:bg-burnt-dark text-white font-semibold py-3.5 px-5 rounded-btn transition-colors text-sm flex items-center justify-center gap-2 shadow-sm">
                        <Calendar className="w-4 h-4"/>
                        <span>Book a Call</span>
                    </button>

                    {/* WhatsApp */}
                    <a 
                        href="https://wa.me/5531989883676"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto bg-warm-white hover:bg-sand-light text-deep-brown font-semibold py-3 px-5 rounded-full border border-sand-border transition-colors text-sm flex items-center justify-center gap-2 shadow-xs"
                    >
                        <MessageCircle className="w-4 h-4 text-[#25D366]"/>
                        <span>Chat on WhatsApp</span>
                    </a>
                </div>
            </div>
        </section>
    );
}