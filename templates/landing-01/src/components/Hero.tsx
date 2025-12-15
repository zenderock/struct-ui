import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-end overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/80 via-transparent to-[#0a0a0a]/40 z-10" />
        <img
          src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=3462&auto=format&fit=crop"
          alt="Elite Performance Environment"
          className="w-full h-full object-cover object-center"
          style={{
            animation: "scrollBlur linear both",
            animationTimeline: "view()",
            animationRange: "entry 100% entry 150%",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-20 w-full max-w-[1400px] mx-auto px-6 lg:px-10 pb-24 pt-32">
        <div className="flex flex-col lg:flex-row items-end justify-between gap-16">
          {/* Bottom Left: Headline */}
          <div
            className="w-full lg:max-w-3xl animate-on-scroll"
            style={{ animation: "slideInLeft 1s ease-out forwards 0.2s" }}
          >
            <div className="inline-flex items-center gap-2 border border-[#626041]/50 bg-[#626041]/10 backdrop-blur-sm px-3 py-1 rounded-full mb-6">
              <span className="w-2 h-2 rounded-full bg-[#626041] animate-pulse" />
              <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#b8b698]">
                Operational Status: Active
              </span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-medium tracking-tighter leading-[0.9] text-white">
              ELITE PERFORMANCE.
              <br />
              <span className="text-[#626041]">GLOBAL FRONTIERS.</span>
            </h1>
          </div>

          {/* Bottom Right: Subhead & CTA */}
          <div
            className="w-full lg:max-w-md flex flex-col gap-8 animate-on-scroll"
            style={{ animation: "slideInRight 1s ease-out forwards 0.4s" }}
          >
            <p className="text-lg text-white/80 font-light leading-relaxed">
              The ultimate protocol for the 1%. Combining luxury travel, leadership
              development, and bio-hacking for those who demand excellence in every
              dimension.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#services"
                className="group inline-flex items-center gap-3 bg-white text-black px-8 py-4 text-xs font-medium uppercase tracking-widest hover:bg-[#e5e5e5] transition-all duration-300 rounded-sm"
              >
                Start The Mission
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#authority"
                className="group inline-flex items-center gap-3 bg-transparent border border-white/20 backdrop-blur-sm text-white px-8 py-4 text-xs font-medium uppercase tracking-widest hover:bg-white/10 transition-all duration-300 rounded-sm"
              >
                Discover Intel
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
