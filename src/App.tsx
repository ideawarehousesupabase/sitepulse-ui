import React, { useState } from "react";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { PlatformSection } from "./components/PlatformSection";
import { HowItWorksSection } from "./components/HowItWorksSection";
import { MarketPricingSection } from "./components/MarketPricingSection";
import { FaqSection } from "./components/FaqSection";
import { Footer } from "./components/Footer";
import { PilotModal } from "./components/PilotModal";

export function App() {
  const [isPilotOpen, setIsPilotOpen] = useState(false);
  const [selectedTier, setSelectedTier] = useState<string | undefined>(undefined);

  const handleOpenPilot = (tier?: string) => {
    setSelectedTier(tier);
    setIsPilotOpen(true);
  };

  const handleClosePilot = () => {
    setIsPilotOpen(false);
    setSelectedTier(undefined);
  };

  return (
    <div className="min-h-screen bg-[#071A33] text-slate-100 flex flex-col selection:bg-blue-600/30 selection:text-white">
      {/* Navigation */}
      <Navbar onRequestPilot={() => handleOpenPilot()} />

      {/* Main Sections in strict 1–7 Order */}
      <main className="flex-1">
        {/* Section 1: Home */}
        <HeroSection onRequestPilot={() => handleOpenPilot()} />

        {/* Section 2: About */}
        <AboutSection />

        {/* Section 3: Platform */}
        <PlatformSection />

        {/* Section 4: How It Works */}
        <HowItWorksSection />

        {/* Section 5: Market & Pricing */}
        <MarketPricingSection
          onRequestPilotWithTier={(tier) => handleOpenPilot(tier)}
        />

        {/* Section 6: FAQ */}
        <FaqSection onRequestPilot={() => handleOpenPilot()} />
      </main>

      {/* Section 7: Footer */}
      <Footer onRequestPilot={() => handleOpenPilot()} />

      {/* Request a Pilot Interactive Modal */}
      <PilotModal
        isOpen={isPilotOpen}
        onClose={handleClosePilot}
        tierContext={selectedTier}
      />
    </div>
  );
}

export default App;
