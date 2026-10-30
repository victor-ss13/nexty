import Image from "next/image";
import { MessageSquareText, Sparkles, HeartHandshake, Users, Coffee } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      num: "01",
      icon: MessageSquareText,
      title: "Tell Nexty your hobbies",
      desc: "Share your daily rhythm, whether you fancy art exhibitions, peaceful morning strolls, or quiet bookstore visits.",
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
    <section className="py-12 px-[22px] bg-sand-light/50 border-y border-sand-border/40">
      <div className="max-w-[350px] mx-auto">
        <div className="text-center mb-8">
          <p className="text-xs uppercase tracking-widest text-burnt-orange font-bold mb-1.5">
            How Nexty Works
          </p>
          <h2 className="font-serif text-2xl font-bold text-deep-brown">
            Simple, warm, and personal
          </h2>
        </div>

        {/* Steps */}
        <div className="space-y-4 mb-8">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="bg-warm-white p-4 rounded-card border border-sand-border flex items-start gap-3.5 shadow-soft transition-transform hover:-translate-y-0.5 duration-200"
              >
                <div className="w-10 h-10 rounded-full bg-sand/40 border border-sand-border flex items-center justify-center text-burnt-orange flex-shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-muted uppercase tracking-wider">
                    Step {step.num}
                  </span>
                  <h3 className="font-serif font-bold text-base text-deep-brown mt-0.5 mb-1">
                    {step.title}
                  </h3>
                  <p className="text-xs text-body-brown leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Community & Real Life Photo Card (from Figma Frame 2404) */}
        <div className="bg-warm-white rounded-card-lg overflow-hidden border border-sand-border shadow-soft">
          <div className="relative h-48 w-full">
            <Image
              src="/assets/social-community.png"
              alt="Community enjoying coffee together outdoors"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-deep-brown/80 via-transparent to-transparent flex items-end p-4">
              <span className="text-cream text-xs font-medium tracking-wide">
                Real connections made daily
              </span>
            </div>
          </div>
          <div className="p-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-flex items-center gap-1 text-[11px] font-medium text-sage-dark bg-sage/15 px-2.5 py-0.5 rounded-full">
                <Users className="w-3 h-3" /> 2,400+ Active Members
              </span>
              <span className="inline-flex items-center gap-1 text-[11px] font-medium text-burnt-orange bg-burnt-orange/10 px-2.5 py-0.5 rounded-full">
                <Coffee className="w-3 h-3" /> Local Cafes
              </span>
            </div>
            <p className="text-xs text-body-brown leading-relaxed italic font-serif">
              &ldquo;Nexty introduced me to Evelyn and Sarah. We now walk together around the botanical gardens every Tuesday morning!&rdquo;
            </p>
            <p className="text-[11px] font-semibold text-deep-brown mt-2">
              — Margaret D., 68, Miami FL
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
