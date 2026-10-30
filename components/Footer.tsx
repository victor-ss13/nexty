import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#4D523E] text-cream pt-10 pb-12 px-[22px] border-t border-sand-border/20">
      <div className="max-w-[350px] mx-auto flex flex-col items-center text-center">
        {/* Nexty Logo */}
        <div className="flex items-center gap-2 mb-3">
          <div className="relative w-7 h-7">
            <Image
              src="/assets/fox-mark.png"
              alt="Nexty"
              width={28}
              height={28}
              className="object-contain brightness-0 invert"
            />
          </div>
          <span className="font-serif font-bold text-xl text-cream tracking-tight">
            Nexty
          </span>
        </div>

        <p className="text-xs text-cream/80 max-w-xs mb-6 leading-relaxed">
          The friendly lifestyle companion connecting you to curated local activities and welcoming people.
        </p>

        {/* Links */}
        <div className="flex items-center gap-4 text-xs text-cream/70 mb-6">
          <a href="#about" className="hover:text-cream transition-colors">
            About
          </a>
          <span>•</span>
          <a href="#privacy" className="hover:text-cream transition-colors">
            Privacy
          </a>
          <span>•</span>
          <a href="#terms" className="hover:text-cream transition-colors">
            Terms
          </a>
          <span>•</span>
          <a href="#contact" className="hover:text-cream transition-colors">
            Contact
          </a>
        </div>

        <p className="text-[11px] text-cream/60">
          © {currentYear} Nexty Inc. All rights reserved. Built with modern mobile-first principles.
        </p>
      </div>
    </footer>
  );
}
