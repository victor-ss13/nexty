import { PhoneCall, Calendar, MessageCircle } from "lucide-react";

interface ClosingCTAProps {
  onOpenCallModal: () => void;
  onOpenCalendly: () => void;
  whatsappUrl: string;
}

export default function ClosingCTA({
  onOpenCallModal,
  onOpenCalendly,
  whatsappUrl,
}: ClosingCTAProps) {
  return (
    <section className="py-14 px-[22px] bg-gradient-to-b from-cream via-sand-light/60 to-cream">
      <div className="max-w-[350px] mx-auto text-center">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-deep-brown leading-tight mb-3">
          Ready to experience a more connected week?
        </h2>
        <p className="text-xs text-body-brown leading-relaxed mb-6">
          Whether you want a quick 2-minute phone chat, a booked video call, or a friendly hello on WhatsApp, we&apos;re here for you.
        </p>

        <div className="space-y-2.5">
          <button
            onClick={onOpenCallModal}
            className="w-full bg-sage hover:bg-sage-dark text-white font-semibold py-3 px-4 rounded-btn transition-colors text-sm flex items-center justify-center gap-2 shadow-sm"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Call Me Now</span>
          </button>

          <button
            onClick={onOpenCalendly}
            className="w-full bg-burnt-orange hover:bg-burnt-dark text-white font-semibold py-3 px-4 rounded-btn transition-colors text-sm flex items-center justify-center gap-2 shadow-sm"
          >
            <Calendar className="w-4 h-4" />
            <span>Book a Call on Calendly</span>
          </button>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-warm-white hover:bg-sand-light text-deep-brown font-semibold py-2.5 px-4 rounded-full border border-sand-border transition-colors text-sm flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366]" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
