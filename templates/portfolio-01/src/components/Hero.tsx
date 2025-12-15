import { Github, ArrowDown } from 'lucide-react'

export default function Hero() {
  const scrollToWork = () => {
    document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-4 md:px-6 pt-20 md:pt-0 overflow-hidden">
      {/* Canvas Background */}
      <canvas
        id="hero-canvas"
        className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none"
      />
      {/* Wispr Glow Blob */}
      <div className="hero-glow animate-pulse-slow" />
      <div className="max-w-[1800px] mx-auto w-full z-10 relative flex flex-col items-center text-center">
        {/* Floating Status Badge */}
        <div className="mb-8 md:mb-12 flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/40 backdrop-blur-md border border-white/20 shadow-sm opacity-0 hero-fade-in anim-delay-100">
          <div className="flex gap-1 h-3 items-center">
            <span className="w-1 h-full bg-green-500 rounded-full animate-[pulse_1s_ease-in-out_infinite]" />
            <span className="w-1 h-2/3 bg-red-500 rounded-full animate-[pulse_1.2s_ease-in-out_infinite]" />
            <span className="w-1 h-full bg-yellow-500 rounded-full animate-[pulse_0.8s_ease-in-out_infinite]" />
          </div>
          <span className="font-mono text-[10px] md:text-xs uppercase tracking-widest text-primary font-medium">
            Open to Work
          </span>
        </div>
        {/* Main Title with Split Reveal */}
        <h1 className="text-[13vw] md:text-[10vw] leading-[0.9] font-semibold tracking-tighter text-primary uppercase mix-blend-darken flex flex-col items-center">
          <div className="overflow-hidden">
            <span className="hero-char anim-delay-200">Emmanuel</span>
          </div>
          <div className="overflow-hidden">
            <span className="hero-char anim-delay-300">Zenderock</span>
          </div>
        </h1>
        {/* Subtitle */}
        <div className="mt-8 md:mt-12 max-w-xl mx-auto opacity-0 hero-fade-in anim-delay-400">
          <p className="font-sans text-base md:text-xl text-black leading-relaxed text-balance">
            Engineering scalable web applications with{' '}
            <span className="text-black font-medium">React</span>,{' '}
            <span className="text-black font-medium">Vue.js</span>, and{' '}
            <span className="text-black font-medium">Node.js</span>.
          </p>
        </div>
        {/* CTA Buttons */}
        <div className="mt-10 md:mt-14 flex gap-4 opacity-0 hero-fade-in anim-delay-500">
          <button
            onClick={scrollToWork}
            className="px-8 py-3 bg-black text-white rounded-full font-mono text-xs font-bold uppercase tracking-widest hover:bg-neutral-800 transition-colors duration-300 magnetic-btn cursor-pointer"
          >
            View Work
          </button>
          <a
            href="https://github.com/zenderock"
            target="_blank"
            rel="noreferrer"
            className="px-4 py-3 border border-black/10 bg-white rounded-full hover:bg-neutral-200 transition-colors duration-200 magnetic-btn"
          >
            <Github className="w-5 h-5 stroke-[1.5]" />
          </a>
        </div>
      </div>
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 hero-fade-in anim-delay-700 animate-bounce">
        <ArrowDown className="w-5 h-5 text-black/50" />
      </div>
    </section>
  )
}
