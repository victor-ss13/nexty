import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorls from "@/components/HowItWorks";
import ClosingCTA from "@/components/ClosingCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-cream text-deep-brown">
      <Navbar />

      <main className="flex-1 w-full">
        <Hero />
        <HowItWorls />
        <ClosingCTA />
      </main>

      <Footer />
    </div>
  );
}
