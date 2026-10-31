import Image from "next/image";

export default function Navbar() {
    return (
        <header className="sticky top-0 z-30 w-full backdrop-blur-md bg-cream/80 border-b border-sand-border/50">
            <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

                {/* Logo and Brand Name */}
                <div className="flex items-center gap-2">
                    {/* Como fica: Círculo perfeito com a raposa recortada */}
                    <div className="w-9 h-9 rounded-full overflow-hidden flex items-center justify-center bg-deep-brown shadow-xs flex-shrink-0">
                        <Image
                            src="/assets/fox-mark.png"
                            alt="Nexty Logo"
                            width={36}
                            height={36}
                            className="object-cover scale-125"
                            priority
                        />
                    </div>
                    <span className="font-serif font-bold text-xl tracking-tight text-deep-brown">
                        Nexty
                    </span>
                </div>

                {/* Action Button */}
                <button className="bg-burnt-orange hover:bg-burnt-dark text-white text-xs font-semibold px-4 py-2 rounded-btn transition-colors">
                    Call Me Now
                </button>

            </div>
        </header>
    );
}