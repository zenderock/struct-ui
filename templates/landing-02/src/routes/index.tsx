import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { Features } from "../components/Features";
import { Architecture } from "../components/Architecture";
import { Pricing } from "../components/Pricing";
import { Footer } from "../components/Footer";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export const Route = createFileRoute("/")({
  component: LandingPage,
});

function LandingPage() {
  useScrollAnimation();

  return (
    <div className="bg-[#030303] min-h-screen text-zinc-300 antialiased selection:text-indigo-200 overflow-x-hidden">
      <div className="aura-background-component top-0 w-full -z-10 absolute brightness-50 saturate-50 h-[900px]" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 62%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 62%, transparent)'}} data-alpha-mask="62">
        {/* Placeholder for aura background if we had the asset, otherwise just the gradient/color above */}
        <div className="absolute w-full h-full left-0 top-0 -z-10 bg-gradient-to-b from-indigo-950/20 to-black"></div>
      </div>

      <Navbar />
      <Hero />
      <Features />
      <Architecture />
      <Pricing />
      <Footer />
    </div>
  );
}
