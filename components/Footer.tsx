import Image from "next/image";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#4D523E] text-cream pt-12 pb-14 px-6 border-t border-sand-border/20">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">

                {/* Marca & Descrição */}
                <div className="flex flex-col items-center md:items-start gap-2">
                    <div className="flex items-center gap-2.5">
                        <div className="relative w-8 h-8 rounded-full overflow-hidden flex items-center justify-center bg-sand/20 border border-sand-border/10">
                            <Image
                                src="/assets/fox-mark.png"
                                alt="Nexty Logo"
                                width={32}
                                height={32}
                                className="object-cover scale-125"
                            />
                        </div>
                        <span className="font-serif font-bold text-xl text-cream tracking-tight">
                            Nexty
                        </span>
                    </div>
                    <p className="text-xs text-cream/70 max-w-sm">
                        The friendly lifestyle companion connecting you to curated local activities and welcoming people.
                    </p>
                </div>

                {/* Links & Copyright */}
                <div className="flex flex-col items-center md:items-end gap-3 text-xs text-cream/75">
                    <div className="flex items-center gap-5">
                        <a href="#how-it-works" className="hover:text-cream transition-colors">
                            How It Works
                        </a>
                        <a href="#privacy" className="hover:text-cream transition-colors">
                            Privacy Policy
                        </a>
                        <a href="#terms" className="hover:text-cream transition-colors">
                            Terms
                        </a>
                        <a href=""></a>
                    </div>
                    <p className="text-[11px] text-cream/50">
                        © {currentYear} Nexty Inc. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}