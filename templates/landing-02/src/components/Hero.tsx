import { ArrowRight, Command, Ruler, Layers, Link, Code2, MessageCircle,  } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export function Hero() {
  useScrollAnimation();

  return (
    <section className="flex flex-col overflow-hidden selection:text-white text-white w-full pt-32 pb-20 relative" id="hero">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none -z-0"></div>

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[700px] bg-cyan-900/10 blur-[150px] pointer-events-none -z-0"></div>

      <div className="md:px-6 flex flex-col w-full max-w-7xl z-10 mr-auto ml-auto pr-4 pl-4 relative items-center">
        
        {/* Beam Animations */}
        <div className="w-px hidden md:block overflow-hidden bg-gradient-to-b from-transparent via-zinc-800 to-transparent h-full absolute top-0 left-4">
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-transparent via-cyan-500 to-transparent animate-beam-v"></div>
        </div>

        <div className="absolute top-0 right-4 h-full w-px bg-gradient-to-b from-transparent via-zinc-800 to-transparent hidden md:block overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-transparent via-cyan-500 to-transparent animate-beam-v"></div>
        </div>

        <div className="text-center max-w-4xl mx-auto mb-16 relative">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-cyan-500/30 bg-cyan-950/20 mb-10 animate-[fadeSlideIn_1s_ease-out_0.1s_both]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full bg-cyan-400 opacity-50"></span>
              <span className="relative inline-flex h-2 w-2 bg-cyan-500"></span>
            </span>
            <span className="text-xs font-medium text-cyan-300 uppercase tracking-widest font-sans">
              New v2.0 Assembly
            </span>
          </div>

          <h1 className="md:text-7xl lg:text-8xl leading-[1.1] text-5xl font-medium tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-br from-[#ffffff] to-white/10 animate-[fadeSlideIn_1s_ease-out_0.2s_both]">
            AI-Powered Code &<br/>Architecture Design
          </h1>

          <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto font-medium leading-relaxed animate-[fadeSlideIn_1s_ease-out_0.3s_both]">
            Kreona Studio is your source for high-quality, scalable web
            assembly. Generate components, create designs, and chat with AI in
            seconds.
          </p>
        </div>

        <div className="flex w-screen mb-16 relative items-center justify-center animate-[fadeSlideIn_1s_ease-out_0.4s_both]">
          <div className="h-px bg-gradient-to-r from-transparent via-zinc-800 to-zinc-800 w-full max-w-[calc(50%-100px)] relative overflow-hidden group">
            <div className="absolute top-0 left-0 h-full w-40 bg-gradient-to-r from-transparent via-cyan-500 to-transparent animate-beam-h"></div>
          </div>

          <button className="relative z-20 inline-block whitespace-nowrap text-base uppercase font-medium text-[#fefefe] bg-[#212121] border-[#fefefe] border-2 mr-5 ml-5 pt-4 pr-8 pb-4 pl-8 no-underline before:absolute before:-left-[2px] before:top-[6px] before:h-[calc(100%-12px)] before:w-[calc(100%+4px)] before:bg-[#212121] before:content-[''] before:transition-transform before:duration-300 before:ease-in-out before:scale-y-100 hover:before:scale-y-0 after:absolute after:-top-[2px] after:left-[6px] after:h-[calc(100%+4px)] after:w-[calc(100%-12px)] after:bg-[#212121] after:content-[''] after:transition-transform after:duration-300 after:delay-500 after:ease-in-out after:scale-x-100 hover:after:scale-x-0 cursor-pointer">
            <span className="relative z-10">Start Building Free</span>
          </button>

          <div className="h-px bg-gradient-to-l from-transparent via-zinc-800 to-zinc-800 w-full max-w-[calc(50%-100px)] relative overflow-hidden group">
            <div className="absolute top-0 right-0 h-full w-40 bg-gradient-to-l from-transparent via-cyan-500 to-transparent animate-beam-h-rev"></div>
          </div>
        </div>

        <div className="min-h-[400px] flex animate-[fadeSlideIn_1s_ease-out_0.5s_both] w-full max-w-6xl mr-auto ml-auto relative justify-center">
          <div className="pointer-events-none z-0 hidden md:block w-full h-full absolute top-0 right-0 bottom-0 left-0">
            <div className="absolute top-[35%] left-0 right-0 h-px bg-white/10 -translate-y-1/2 overflow-hidden"></div>
          </div>

          <div className="z-10 w-full max-w-3xl mt-12 relative">
            <div className="shadow-black/60 transition-shadow bg-zinc-950 border-[#ffffff]/20 border ring-0 pt-2 pr-2 pb-2 pl-2 shadow-2xl">
              <div className="bg-[#0A0A0A] p-6 min-h-[140px] flex flex-col justify-between border border-white/10 transition-colors hover:border-cyan-500/30 group">
                <textarea className="border-none outline-none placeholder:text-zinc-600 resize-none text-sm font-light text-zinc-300 font-mono bg-transparent w-full h-full" placeholder="ASK: Generate a complex component architecture..."></textarea>
              </div>

              <div className="flex items-center justify-between mt-3 px-2 pb-1">
                <div className="flex items-center gap-3">
                  <button className="hover:bg-zinc-700 hover:text-white flex transition-all text-cyan-400 bg-zinc-800/50 w-10 h-10 border-white/10 border items-center justify-center">
                    <Link size={20} className="opacity-50" />
                  </button>
                  <div className="hidden sm:flex items-center gap-2 px-4 py-2.5 bg-zinc-800/30 border border-cyan-500/30 text-cyan-500 text-sm hover:border-cyan-400 transition-colors cursor-text font-mono">
                    <Command size={18} />
                    <span>/Search-Command</span>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <button className="hover:bg-zinc-700 hover:text-white flex transition-all text-cyan-400 bg-zinc-800/50 w-10 h-10 border-white/10 border items-center justify-center">
                   <ArrowRight size={20} color="#a1ecf8" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Icons */}
          <div className="absolute top-[-10%] left-[5%] md:left-[10%] hidden md:flex flex-col items-center gap-3 animate-pulse">
            <div className="flex bg-zinc-900 w-16 h-16 border-white/10 border shadow-[0_0_15px_-3px_rgba(255,255,255,0.05)] items-center justify-center">
               <Code2 size={30} className="text-zinc-300" />
            </div>
            <span className="text-xs text-zinc-500 font-medium font-mono">Code Gen</span>
          </div>

          <div className="absolute top-[-10%] right-[5%] md:right-[10%] hidden md:flex flex-col items-center gap-3 animate-pulse delay-75">
            <div className="w-16 h-16 bg-zinc-900 border border-white/10 flex items-center justify-center shadow-[0_0_15px_-3px_rgba(255,255,255,0.05)]">
               <Ruler size={30} className="text-zinc-300" />
            </div>
            <span className="text-xs text-zinc-500 font-medium font-mono">Design Sys</span>
          </div>

          <div className="absolute bottom-[10%] left-[5%] md:left-[10%] hidden md:flex flex-col items-center gap-3 animate-pulse delay-150">
            <div className="flex bg-zinc-900 w-16 h-16 border-white/10 border shadow-[0_0_15px_-3px_rgba(255,255,255,0.05)] items-center justify-center">
               <Layers size={30} className="text-zinc-300" />
            </div>
            <span className="text-xs text-zinc-500 font-medium font-mono">Components</span>
          </div>

          <div className="absolute bottom-[10%] right-[5%] md:right-[10%] hidden md:flex flex-col items-center gap-3 animate-pulse delay-300">
            <div className="w-16 h-16 bg-zinc-900 border border-white/10 flex items-center justify-center shadow-[0_0_15px_-3px_rgba(255,255,255,0.05)]">
               <MessageCircle size={30} className="text-zinc-300" />
            </div>
            <span className="text-xs text-zinc-500 font-medium font-mono">AI Support</span>
          </div>
          
        </div>

      </div>
    </section>
  );
}
