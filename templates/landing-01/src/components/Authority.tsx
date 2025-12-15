import { Crosshair, ShieldCheck, Globe, Zap } from "lucide-react";

export default function Authority() {
  return (
    <section id="authority" className="relative py-32 bg-[#0a0a0a]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        {/* Section Label */}
        <div
          className="flex justify-center mb-20 animate-on-scroll"
          style={{ animation: "fadeSlideIn 0.8s ease-out forwards" }}
        >
          <span className="text-[10px] text-[#626041] uppercase tracking-[0.3em] font-medium border-b border-[#626041]/30 pb-2">
            Intelligence Briefing
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          {/* Left Column: Highlights (Military Spec style) */}
          <div
            className="lg:col-span-5 space-y-8 animate-on-scroll"
            style={{ animation: "slideInLeft 0.8s ease-out forwards 0.2s" }}
          >
            <h2 className="text-4xl font-medium tracking-tight text-white mb-10">
              30+ YEARS GLOBAL <span className="text-[#626041]">EXPERTISE</span>
            </h2>

            <div className="space-y-4">
              {[
                { icon: Crosshair, text: "High-Impact Experiences" },
                { icon: ShieldCheck, text: "Elite Wellness Protocols" },
                { icon: Globe, text: "Bespoke Global Adventures" },
                { icon: Zap, text: "Performance Reimagined" },
              ].map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="flex items-center gap-4 group border-b border-white/10 pb-4 hover:border-[#626041] transition-colors"
                >
                  <Icon className="w-5 h-5 text-[#626041]" />
                  <span className="text-sm font-medium uppercase tracking-widest text-white/90">
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Narrative */}
          <div
            className="lg:col-span-7 animate-on-scroll"
            style={{ animation: "slideInRight 0.8s ease-out forwards 0.4s" }}
          >
            <blockquote className="text-2xl font-light leading-relaxed text-white/90 border-l-2 border-[#626041] pl-8 mb-12">
              "Cre8XP delivers unforgettable, high-performance experiences that
              challenge, inspire, and elevate every aspect of life."
              <footer className="mt-6 text-sm font-medium uppercase tracking-widest text-[#626041] not-italic">
                — James Carter
              </footer>
            </blockquote>

            <div className="space-y-6 text-white/60 font-light text-lg leading-relaxed">
              <p>
                At Cre8 XP, we create high-impact, turn-key experiences that
                push boundaries and elevate performance. From elite wellness
                protocols to bespoke global adventures, every journey we design
                is built to challenge, inspire, and deliver lasting results.
              </p>
              <p>
                Whether it's high-performance travel, executive retreats, or
                curated lifestyle immersions, our team draws on over 30 years of
                global experience across professional sport and world-class
                events.
              </p>
              <p className="text-white font-normal">
                Join the Adventure Tribe, explore our Elite Healthspan programs,
                or unlock the exclusivity of PRIVE Black Label. This is
                performance—reimagined.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
