"use client";

import { useState } from "react";
import { PhoneCall, X, CheckCircle2, Loader2 } from "lucide-react";

interface CallMeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CallMeModal({ isOpen, onClose }: CallMeModalProps) {
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!phone.trim() || phone.trim().length < 8) {
      setErrorMessage("Please enter a valid phone number with area code.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/call-me-now", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone, notes }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to submit request.");
      }

      setSuccess(true);
      setTimeout(() => {
        // Reset state after auto-close or allow manual close
      }, 3000);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Something went wrong. Please try again.";
      setErrorMessage(message);
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setSuccess(false);
    setPhone("");
    setNotes("");
    setErrorMessage("");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-deep-brown/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="w-full max-w-[393px] bg-warm-white rounded-t-[24px] sm:rounded-card-lg p-6 shadow-elevated border border-sand-border relative"
        role="dialog"
        aria-modal="true"
      >
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-muted hover:text-deep-brown p-1 rounded-full hover:bg-sand/30 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {success ? (
          <div className="text-center py-6">
            <div className="w-14 h-14 bg-sage/20 text-sage rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-deep-brown mb-2">
              We&apos;re On It!
            </h3>
            <p className="text-sm text-body-brown mb-6 leading-relaxed">
              We received your request. A friendly team member will call you at{" "}
              <strong className="text-deep-brown">{phone}</strong> shortly.
            </p>
            <button
              onClick={handleClose}
              className="w-full bg-sage hover:bg-sage-dark text-white font-medium py-3 rounded-btn transition-colors text-sm"
            >
              Done
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-sage/20 flex items-center justify-center text-sage flex-shrink-0">
                <PhoneCall className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-deep-brown">
                  Call Me Now
                </h3>
                <p className="text-xs text-muted">
                  Leave your number, we&apos;ll call you right back
                </p>
              </div>
            </div>

            <p className="text-xs text-body-brown mb-4 leading-relaxed">
              Ready to learn how Nexty connects you with social activities and friendly companions? We&apos;ll give you a quick, no-pressure call.
            </p>

            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label
                  htmlFor="phone-input"
                  className="block text-xs font-semibold text-deep-brown mb-1.5"
                >
                  Your Phone Number *
                </label>
                <input
                  id="phone-input"
                  type="tel"
                  required
                  placeholder="+1 (555) 000-0000"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-3 rounded-btn border border-sand-border bg-cream/40 text-charcoal text-sm placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-burnt-orange focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="notes-input"
                  className="block text-xs font-semibold text-deep-brown mb-1.5"
                >
                  Best time to call (optional)
                </label>
                <input
                  id="notes-input"
                  type="text"
                  placeholder="e.g. In 10 minutes, or this afternoon"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-btn border border-sand-border bg-cream/40 text-charcoal text-xs placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-burnt-orange focus:border-transparent transition-all"
                />
              </div>

              {errorMessage && (
                <p className="text-xs text-red-600 bg-red-50 p-2.5 rounded-btn border border-red-200">
                  {errorMessage}
                </p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-sage hover:bg-sage-dark text-white font-medium py-3 rounded-btn transition-colors text-sm flex items-center justify-center gap-2 shadow-sm active:scale-[0.98] duration-150 disabled:opacity-70 mt-2"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Connecting...</span>
                  </>
                ) : (
                  <>
                    <PhoneCall className="w-4 h-4" />
                    <span>Call Me Now</span>
                  </>
                )}
              </button>

              <p className="text-[11px] text-center text-muted">
                🔒 We respect your privacy. No spam, ever.
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
