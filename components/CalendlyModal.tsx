"use client";

import { X, Calendar, ExternalLink } from "lucide-react";

interface CalendlyModalProps {
  isOpen: boolean;
  onClose: () => void;
  calendlyUrl?: string;
}

export default function CalendlyModal({
  isOpen,
  onClose,
  calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL || "https://calendly.com",
}: CalendlyModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-deep-brown/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="w-full max-w-xl bg-warm-white rounded-card-lg shadow-elevated border border-sand-border relative overflow-hidden flex flex-col max-h-[90vh]"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-sand-border bg-cream/50">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-burnt-orange/15 text-burnt-orange flex items-center justify-center">
              <Calendar className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-base text-deep-brown">
                Schedule a Call
              </h3>
              <p className="text-[11px] text-muted">
                Pick a time that suits your day
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-deep-brown p-1.5 rounded-full hover:bg-sand/30 text-xs flex items-center gap-1 transition-colors"
              title="Open in new tab"
            >
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <button
              onClick={onClose}
              className="text-muted hover:text-deep-brown p-1.5 rounded-full hover:bg-sand/30 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Calendly iFrame Container */}
        <div className="w-full flex-1 min-h-[460px] sm:min-h-[580px] bg-white relative">
          <iframe
            src={calendlyUrl}
            width="100%"
            height="100%"
            frameBorder="0"
            title="Select a date and time"
            className="w-full h-full min-h-[460px] sm:min-h-[580px]"
          />
        </div>
      </div>
    </div>
  );
}
