import { useRef } from "react";
import { Check, ArrowUpRight } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export function Pricing() {
  useScrollAnimation();
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    
    const cards = containerRef.current.querySelectorAll('.spotlight-card');
    cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        (card as HTMLElement).style.setProperty('--mouse-x', `${x}px`);
        (card as HTMLElement).style.setProperty('--mouse-y', `${y}px`);
    });
  };

  return (
    <section id="pricing" className="py-32 relative border-t border-white/5" onMouseMove={handleMouseMove}>
      <div className="animate-on-scroll max-w-7xl mr-auto ml-auto pr-6 pl-6">
        <div className="animate-on-scroll text-center mb-16">
          <h2 className="text-3xl md:text-5xl text-white mb-4 tracking-tight font-manrope font-medium">
            Simple, transparent pricing
          </h2>
          <p className="text-lg text-zinc-400 font-medium font-sans">
            For studios, startups and solo makers using Kreona Studio.
          </p>

          {/* Toggle */}
          <div className="flex items-center justify-center mt-8">
            <div className="bg-zinc-900 p-1 rounded-full border border-white/10 flex items-center">
              <button className="px-6 py-2 rounded-full bg-zinc-800 text-white text-sm shadow-sm font-medium font-sans">
                Monthly
              </button>
              <button className="px-6 py-2 rounded-full text-zinc-400 text-sm hover:text-white font-medium font-sans">
                Yearly
                <span className="text-emerald-400 text-xs ml-1 font-medium font-sans">
                  -20%
                </span>
              </button>
            </div>
          </div>
        </div>

        <div className="group/grid animate-on-scroll max-w-7xl z-10 mr-auto ml-auto pr-6 pl-6 relative" ref={containerRef}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 items-stretch w-full max-w-7xl mx-auto border-l border-white/10">
            
            <div 
                className="spotlight-card group relative p-10 bg-zinc-950 border-y border-r border-white/10 flex flex-col min-h-[420px] overflow-hidden transition-colors hover:border-white/20 animate-on-scroll"
                style={{'--mouse-x': '0px', '--mouse-y': '0px'} as React.CSSProperties}
            >
              <div 
                className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0" 
                style={{background: 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(255,255,255,0.06), transparent 40%)'}}
              ></div>
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none opacity-50"></div>
              
              <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-transparent group-hover:border-white/40 transition-colors z-10"></div>
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-transparent group-hover:border-white/40 transition-colors z-10"></div>

              <div className="relative z-10 flex flex-col h-full pointer-events-none">
                <div className="flex justify-start mb-8">
                  <span className="px-4 py-1 border border-white/10 text-[10px] font-semibold text-zinc-400 uppercase tracking-widest bg-zinc-900/50 font-sans backdrop-blur-sm">
                    Light
                  </span>
                </div>
                <div className="relative flex-grow">
                   <div className="absolute inset-0 flex items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:opacity-0 group-hover:-translate-y-4 group-hover:scale-95 origin-bottom">
                    <div className="text-7xl text-white font-manrope font-medium tracking-tighter flex items-start leading-none">
                      12<span className="text-2xl mt-2 ml-2 text-zinc-600 font-mono tracking-normal">$</span>
                    </div>
                  </div>
                   <div className="absolute inset-0 flex flex-col justify-center gap-5 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] opacity-0 translate-y-8 scale-95 group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100 origin-center">
                        <div className="flex items-start gap-3">
                            <Check className="text-lg text-zinc-600 shrink-0 mt-0.5" /><span className="text-sm text-zinc-300 font-medium font-sans leading-snug">Limited article access</span>
                        </div>
                        <div className="flex items-start gap-3">
                            <Check className="text-lg text-zinc-600 shrink-0 mt-0.5" /><span className="text-sm text-zinc-300 font-medium font-sans leading-snug">Basic daily updates</span>
                        </div>
                        <div className="flex items-start gap-3">
                            <Check className="text-lg text-zinc-600 shrink-0 mt-0.5" /><span className="text-sm text-zinc-300 font-medium font-sans leading-snug">Community support</span>
                        </div>
                   </div>
                </div>
                <div className="mt-auto pt-10 flex items-end gap-6 justify-between pointer-events-auto">
                    <p className="text-sm text-zinc-500 font-medium font-sans leading-relaxed max-w-[70%] transition-colors group-hover:text-zinc-400">Enjoy access to a limited selection of articles.</p>
                    <button className="flex-shrink-0 w-12 h-12 bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-400 hover:bg-white hover:text-black transition-all duration-300">
                        <ArrowUpRight className="text-xl" />
                    </button>
                </div>
              </div>
            </div>

            <div 
                className="spotlight-card group relative p-10 bg-zinc-950 border-y border-r border-white/10 flex flex-col min-h-[420px] overflow-hidden transition-colors hover:border-white/20 animate-on-scroll"
                style={{'--mouse-x': '0px', '--mouse-y': '0px'} as React.CSSProperties}
            >
              <div 
                className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0" 
                style={{background: 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(6,182,212,0.08), transparent 40%)'}}
              ></div>
              <div className="absolute inset-0 border border-cyan-500/20 pointer-events-none opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-500/5 blur-[80px] pointer-events-none group-hover:bg-cyan-500/10 transition-colors"></div>

              <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-cyan-500/50 z-10 transition-all group-hover:border-cyan-400"></div>
              <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-cyan-500/50 z-10 transition-all group-hover:border-cyan-400"></div>
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-cyan-500/50 z-10 transition-all group-hover:border-cyan-400"></div>
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-cyan-500/50 z-10 transition-all group-hover:border-cyan-400"></div>

              <div className="relative z-10 flex flex-col h-full pointer-events-none">
                <div className="flex justify-start mb-10">
                   <span className="px-4 py-1 border border-cyan-500/30 text-[10px] font-semibold text-cyan-400 uppercase tracking-widest bg-cyan-950/20 font-sans shadow-[0_0_15px_-5px_rgba(34,211,238,0.3)] backdrop-blur-sm">Most Popular</span>
                </div>
                 <div className="relative flex-grow">
                   <div className="absolute inset-0 flex items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:opacity-0 group-hover:-translate-y-4 group-hover:scale-95 origin-bottom">
                    <div className="text-7xl text-white font-manrope font-medium tracking-tighter flex items-start leading-none drop-shadow-[0_0_15px_rgba(34,211,238,0.2)]">
                      29<span className="text-2xl mt-2 ml-2 text-cyan-500/70 font-mono tracking-normal">$</span>
                    </div>
                  </div>
                   <div className="absolute inset-0 flex flex-col justify-center gap-5 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] opacity-0 translate-y-8 scale-95 group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100 origin-center">
                        <div className="flex items-start gap-4"><div className="mt-0.5 text-cyan-500 shrink-0"><Check size={18} /></div><span className="text-sm text-zinc-300 group-hover:text-white transition-colors font-medium font-sans leading-snug">Exclusive blog posts</span></div>
                        <div className="flex items-start gap-4"><div className="mt-0.5 text-cyan-500 shrink-0"><Check size={18} /></div><span className="text-sm text-zinc-300 group-hover:text-white transition-colors font-medium font-sans leading-snug">Downloadable resources</span></div>
                        <div className="flex items-start gap-4"><div className="mt-0.5 text-cyan-500 shrink-0"><Check size={18} /></div><span className="text-sm text-zinc-300 group-hover:text-white transition-colors font-medium font-sans leading-snug">Live monthly webinars</span></div>
                   </div>
                </div>
                <div className="mt-auto pt-10 flex items-end gap-6 justify-between pointer-events-auto">
                    <p className="text-sm text-zinc-400 font-medium font-sans leading-relaxed max-w-[70%] transition-colors group-hover:text-zinc-300">Unlock additional content, features, and resources.</p>
                     <button className="flex-shrink-0 w-12 h-12 bg-cyan-500 border border-cyan-400 flex items-center justify-center text-black hover:bg-cyan-400 transition-all duration-300 shadow-[0_0_20px_-5px_rgba(34,211,238,0.5)]">
                        <ArrowUpRight className="text-xl" />
                    </button>
                </div>
              </div>
            </div>

             <div 
                className="spotlight-card group relative p-10 bg-zinc-950 border-y border-r border-white/10 flex flex-col min-h-[420px] overflow-hidden transition-colors hover:border-white/20 animate-on-scroll"
                style={{'--mouse-x': '0px', '--mouse-y': '0px'} as React.CSSProperties}
            >
              <div 
                className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0" 
                style={{background: 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(255,255,255,0.06), transparent 40%)'}}
              ></div>
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none opacity-50"></div>
              
              <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-transparent group-hover:border-white/40 transition-colors z-10"></div>
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-transparent group-hover:border-white/40 transition-colors z-10"></div>

              <div className="relative z-10 flex flex-col h-full pointer-events-none">
                <div className="flex justify-start mb-8">
                  <span className="px-4 py-1 border border-white/10 text-[10px] font-semibold text-zinc-400 uppercase tracking-widest bg-zinc-900/50 font-sans backdrop-blur-sm">
                    Pro
                  </span>
                </div>
                <div className="relative flex-grow">
                   <div className="absolute inset-0 flex items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:opacity-0 group-hover:-translate-y-4 group-hover:scale-95 origin-bottom">
                    <div className="text-7xl text-white font-manrope font-medium tracking-tighter flex items-start leading-none">
                      39<span className="text-2xl mt-2 ml-2 text-zinc-600 font-mono tracking-normal">$</span>
                    </div>
                  </div>
                   <div className="absolute inset-0 flex flex-col justify-center gap-5 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] opacity-0 translate-y-8 scale-95 group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100 origin-center">
                        <div className="flex items-start gap-3"><Check className="text-lg text-white shrink-0 mt-0.5" /><span className="text-sm text-zinc-200 font-medium font-sans leading-snug">Unlimited content access</span></div>
                        <div className="flex items-start gap-3"><Check className="text-lg text-white shrink-0 mt-0.5" /><span className="text-sm text-zinc-200 font-medium font-sans leading-snug">Priority 24/7 support</span></div>
                        <div className="flex items-start gap-3"><Check className="text-lg text-white shrink-0 mt-0.5" /><span className="text-sm text-zinc-200 font-medium font-sans leading-snug">All features included</span></div>
                   </div>
                </div>
                <div className="mt-auto pt-10 flex items-end gap-6 justify-between pointer-events-auto">
                    <p className="text-sm text-zinc-500 font-medium font-sans leading-relaxed max-w-[70%] transition-colors group-hover:text-zinc-400">Get unlimited access to all content.</p>
                     <button className="flex-shrink-0 w-12 h-12 bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-400 hover:bg-white hover:text-black transition-all duration-300">
                        <ArrowUpRight className="text-xl" />
                    </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
