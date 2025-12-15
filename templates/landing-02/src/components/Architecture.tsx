import { useRef, useEffect, useState } from "react";
import { Workflow, MonitorSmartphone, Laptop, LayoutTemplate, Users, Tag, Database } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export function Architecture() {
  useScrollAnimation();
  const counterRef = useRef<HTMLSpanElement>(null);
  const chartRef = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Start chart animation
            if (chartRef.current) {
                const bars = chartRef.current.querySelectorAll('.aura-animate-bar');
                bars.forEach((bar) => {
                    (bar as HTMLElement).style.animationPlayState = 'running';
                });
            }

            // Start counter animation
            let start = 0;
            const end = 1240;
            const duration = 2000;
            const startTime = performance.now();

            const animateCount = (currentTime: number) => {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                // Ease out exponential
                const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
                
                setCount(Math.floor(start + ease * (end - start)));

                if (progress < 1) {
                    requestAnimationFrame(animateCount);
                }
            };
            requestAnimationFrame(animateCount);
            
            observer.disconnect();
        }
      });
    }, { threshold: 0.25 });

    if (chartRef.current) {
      observer.observe(chartRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="overflow-hidden pt-32 pb-32 relative" id="testimonial">
      {/* Background Gradient Mesh */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-5xl bg-gradient-to-r from-indigo-900/20 via-transparent to-teal-900/20 blur-3xl -z-10"></div>

      <div className="animate-on-scroll max-w-7xl mr-auto ml-auto pr-6 pl-6">
        <div className="flex flex-col gap-16 w-full max-w-[1400px] mr-auto ml-auto gap-x-12 gap-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Column Text */}
            <div className="flex flex-col animate-on-scroll max-w-xl gap-x-8 gap-y-8">
              <div className="animate-on-scroll">
                <span className="inline-flex items-center px-3 py-1 bg-cyan-950/30 border border-cyan-500/20 text-[11px] text-cyan-400 uppercase mb-6 font-bold tracking-wider font-sans">
                  AI Architecture
                </span>
                <h2 className="text-4xl lg:text-5xl text-white mb-6 leading-[1.1] tracking-tight font-manrope font-medium">
                  Intelligent Layout Assembly
                </h2>
                <p className="text-lg text-zinc-400 leading-relaxed font-medium font-sans">
                  Kreona analyzes your prompt to construct semantically correct
                  component trees. It balances visual hierarchy with clean code
                  structure automatically.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 animate-on-scroll gap-x-6 gap-y-6">
                <div className="flex flex-col gap-3 group">
                  <div className="w-10 h-10 flex items-center justify-center text-zinc-300 bg-zinc-950 border border-white/10 group-hover:border-cyan-500/50 transition-colors">
                    <Workflow className="text-lg text-cyan-300" />
                  </div>
                  <p className="text-sm text-zinc-400 leading-snug font-medium font-sans">
                    Auto-generates semantic HTML structure based on context.
                  </p>
                </div>
                <div className="flex flex-col gap-3 group">
                  <div className="w-10 h-10 flex items-center justify-center text-zinc-300 bg-zinc-950 border border-white/10 group-hover:border-blue-500/50 transition-colors">
                    <MonitorSmartphone className="text-lg text-blue-300" />
                  </div>
                  <p className="text-sm text-zinc-400 leading-snug font-medium font-sans">
                    Ensures perfect responsiveness across all viewports.
                  </p>
                </div>
              </div>

              <div className="animate-on-scroll pt-4">
                <button className="bg-white text-black px-8 py-4 text-sm hover:bg-cyan-50 transition-all shadow-[0_0_20px_-5px_rgba(34,211,238,0.4)] active:translate-y-0.5 font-bold font-sans tracking-wide animate-on-scroll">
                  Try Kreona free
                </button>
              </div>
            </div>

            {/* Right Column Visualization */}
            <div className="overflow-hidden shadow-cyan-900/5 group hover:border-cyan-500/30 transition-colors duration-500 animate-on-scroll bg-zinc-950 border-white/10 border relative shadow-2xl">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
              
              {/* Corner borders */}
              <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-cyan-500/50"></div>
              <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-cyan-500/50"></div>
              <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-cyan-500/50"></div>
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-cyan-500/50"></div>

              <div className="px-6 py-4 border-b border-white/5 bg-zinc-900/80 flex items-center justify-between relative z-10">
                <div className="flex gap-1.5">
                  <div className="w-2 h-2 bg-zinc-700"></div>
                  <div className="w-2 h-2 bg-zinc-700"></div>
                  <div className="w-2 h-2 bg-zinc-700"></div>
                </div>
                <div className="text-[10px] font-mono text-cyan-500/70 tracking-wider">
                  Generated_Layout_Tree.json
                </div>
              </div>

              <div className="grid grid-cols-12 gap-4 px-6 py-3 border-b border-white/5 bg-zinc-950/50 text-xs font-medium text-zinc-500 uppercase tracking-wider relative z-10">
                <div className="col-span-5 pl-2 font-medium font-sans">Component</div>
                <div className="col-span-3 text-center font-medium font-sans">Type</div>
                <div className="col-span-2 text-center font-medium font-sans">Nodes</div>
                <div className="col-span-2 text-right font-medium font-sans">Size</div>
              </div>

              <div className="flex flex-col z-10 relative">
                {/* Row 1 */}
                <div className="grid grid-cols-12 gap-4 px-6 py-4 border-b border-white/5 items-center hover:bg-white/[0.02] transition-colors group/row">
                  <div className="col-span-5 flex items-center gap-4">
                    <Laptop className="text-cyan-400" size={16} />
                    <span className="text-sm text-zinc-200 font-medium font-sans">Split Hero Section</span>
                  </div>
                  <div className="col-span-3 flex justify-center gap-1">
                    <span className="px-1.5 py-0.5 bg-cyan-950/50 border border-cyan-500/20 text-[10px] text-cyan-300 font-medium font-sans">Layout</span>
                    <span className="px-1.5 py-0.5 bg-blue-950/50 border border-blue-500/20 text-[10px] text-blue-300 font-medium font-sans">Flex</span>
                  </div>
                  <div className="col-span-2 flex items-center justify-center gap-2">
                    <span className="text-xs text-zinc-400 font-medium font-sans">12</span>
                    <div className="flex items-end gap-[1px] h-3">
                      <div className="w-0.5 h-1.5 bg-cyan-500"></div>
                      <div className="w-0.5 h-2.5 bg-cyan-500"></div>
                      <div className="w-0.5 h-3 bg-cyan-500"></div>
                      <div className="w-0.5 h-2 bg-cyan-500/30"></div>
                    </div>
                  </div>
                  <div className="col-span-2 flex items-center justify-end gap-2">
                    <div className="w-16 h-1 bg-zinc-800">
                       <div className="w-[85%] h-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.5)]"></div>
                    </div>
                    <span className="text-xs text-zinc-400 w-4 text-right font-medium font-sans">2k</span>
                  </div>
                </div>

                {/* Row 2 */}
                <div className="grid grid-cols-12 gap-4 px-6 py-4 border-b border-white/5 items-center hover:bg-white/[0.02] transition-colors group/row">
                   <div className="col-span-5 flex items-center gap-4">
                    <LayoutTemplate className="text-blue-400" size={16} />
                    <span className="text-sm text-zinc-200 font-medium font-sans">Bento Feature Grid</span>
                  </div>
                  <div className="col-span-3 flex justify-center gap-1">
                     <span className="px-1.5 py-0.5 bg-blue-950/50 border border-blue-500/20 text-[10px] text-blue-300 font-medium font-sans">Grid</span>
                  </div>
                   <div className="col-span-2 flex items-center justify-center gap-2">
                    <span className="text-xs text-zinc-400 font-medium font-sans">24</span>
                    <div className="flex items-end gap-[1px] h-3">
                      <div className="w-0.5 h-2 bg-blue-500"></div>
                      <div className="w-0.5 h-3 bg-blue-500"></div>
                      <div className="w-0.5 h-1.5 bg-blue-500/30"></div>
                      <div className="w-0.5 h-1 bg-blue-500/30"></div>
                    </div>
                  </div>
                  <div className="col-span-2 flex items-center justify-end gap-2">
                    <div className="w-16 h-1 bg-zinc-800">
                      <div className="w-[60%] h-full bg-blue-500"></div>
                    </div>
                    <span className="text-xs text-zinc-400 w-4 text-right font-medium font-sans">1.5</span>
                  </div>
                </div>

                {/* Row 3 */}
                <div className="grid grid-cols-12 gap-4 hover:bg-white/[0.02] transition-colors group/row border-white/5 border-b pt-4 pr-6 pb-4 pl-6 gap-x-4 gap-y-4 items-center">
                    <div className="col-span-5 flex items-center gap-4">
                        <Users className="text-sky-400" size={16} />
                        <span className="text-sm text-zinc-200 font-medium font-sans">Social Proof Carousel</span>
                    </div>
                    <div className="col-span-3 flex justify-center gap-1">
                        <span className="px-1.5 py-0.5 bg-sky-950/50 border border-sky-500/20 text-[10px] text-sky-300 font-medium font-sans">Loop</span>
                    </div>
                    <div className="col-span-2 flex items-center justify-center gap-2">
                        <span className="text-xs text-zinc-400 font-medium font-sans">8</span>
                        <div className="flex items-end gap-[1px] h-3">
                            <div className="w-0.5 h-1 bg-sky-500"></div>
                            <div className="w-0.5 h-3 bg-sky-500"></div>
                            <div className="w-0.5 h-3 bg-sky-500"></div>
                            <div className="w-0.5 h-2 bg-sky-500"></div>
                        </div>
                    </div>
                    <div className="col-span-2 flex items-center justify-end gap-2">
                         <div className="w-16 h-1 bg-zinc-800">
                            <div className="w-[40%] h-full bg-sky-500"></div>
                        </div>
                        <span className="text-xs text-zinc-400 w-4 text-right font-medium font-sans">1k</span>
                    </div>
                </div>

                {/* Row 4 */}
                <div className="grid grid-cols-12 gap-4 hover:bg-white/[0.02] transition-colors group/row pt-4 pr-6 pb-4 pl-6 gap-x-4 gap-y-4 items-center">
                    <div className="col-span-5 flex items-center gap-4">
                        <Tag className="text-teal-400" size={16} />
                        <span className="text-sm text-zinc-200 font-medium font-sans">Pricing Toggles</span>
                    </div>
                    <div className="col-span-3 flex justify-center gap-1">
                        <span className="px-1.5 py-0.5 bg-teal-950/50 border border-teal-500/20 text-[10px] text-teal-300 font-medium font-sans">Logic</span>
                        <span className="px-1.5 py-0.5 bg-zinc-800 border border-zinc-700 text-[10px] text-zinc-400 font-medium font-sans">State</span>
                    </div>
                    <div className="col-span-2 flex items-center justify-center gap-2">
                        <span className="text-xs text-zinc-400 font-medium font-sans">16</span>
                        <div className="flex items-end gap-[1px] h-3">
                            <div className="w-0.5 h-2 bg-teal-500"></div>
                            <div className="w-0.5 h-1.5 bg-teal-500"></div>
                            <div className="w-0.5 h-2.5 bg-teal-500"></div>
                            <div className="w-0.5 h-2 bg-teal-500/30"></div>
                        </div>
                    </div>
                    <div className="col-span-2 flex items-center justify-end gap-2">
                        <div className="w-16 h-1 bg-zinc-800">
                             <div className="w-[30%] h-full bg-teal-500"></div>
                        </div>
                        <span className="text-xs text-zinc-400 w-4 text-right font-medium font-sans">800</span>
                    </div>
                </div>

              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 mt-4 gap-x-8 gap-y-8">
            <div className="lg:p-10 flex flex-col overflow-hidden group hover:border-cyan-500/30 transition-all animate-on-scroll bg-zinc-950 border-white/10 border pt-8 pr-8 pb-8 pl-8 relative">
              <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-white/20 group-hover:border-cyan-500/50 transition-colors"></div>
              <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-white/20 group-hover:border-cyan-500/50 transition-colors"></div>

              <div className="z-10 relative text-left">
                <h3 className="text-2xl text-white mb-3 tracking-tight font-manrope font-medium">
                  Code Generation Interface
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed max-w-lg mb-8 font-medium font-sans">
                  Kreona ensures every generated layout meets strict standards
                  for accessibility, SEO, and semantic correctness.
                </p>

                <div className="bg-zinc-950 w-full max-w-lg max-h-none border-white/10 border mt-auto mr-auto ml-auto pt-4 pr-6 pb-4 pl-6 shadow-2xl shadow-cyan-900/10 h-[14rem] overflow-hidden">
                  <div className="flex gap-2 mb-3">
                    <div className="w-2.5 h-2.5 bg-red-500/80 rounded-full"></div>
                    <div className="w-2.5 h-2.5 bg-yellow-500/80 rounded-full"></div>
                    <div className="w-2.5 h-2.5 bg-green-500/80 rounded-full"></div>
                  </div>

                  <div className="font-mono text-xs text-left leading-relaxed">
                    <div className="opacity-0 animate-[fadeIn_0.3s_ease-out_0.2s_forwards]">
                      <span className="text-zinc-600 select-none">$</span>
                      <span className="text-cyan-400">kreona init</span>
                      <span className="text-zinc-500">--project=kreona-ui</span>
                    </div>
                    {/* Simplified animation sequence for React port */}
                    <div className="opacity-0 animate-[fadeIn_0.3s_ease-out_1.2s_forwards] mt-3">
                        <span className="text-zinc-600 select-none">$</span>
                        <span className="text-cyan-400">kreona build</span>
                        <span className="text-zinc-500">--target=tailwind-v3</span>
                    </div>
                     <div className="opacity-0 animate-[fadeIn_0.3s_ease-out_2.0s_forwards]">
                        <span className="text-cyan-300">Generating HTML Structure... [</span>
                        <span className="text-white animate-pulse">███████████████</span>
                        <span className="text-cyan-300">] 98%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-zinc-950 border border-white/10 p-8 lg:p-10 flex flex-col relative overflow-hidden group hover:border-cyan-500/30 transition-all" ref={chartRef}>
              <div className="animate-on-scroll absolute top-0 right-0 bottom-0 left-0"></div>

              <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-white/20 group-hover:border-cyan-500/50 transition-colors"></div>
              <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-white/20 group-hover:border-cyan-500/50 transition-colors"></div>

              <div className="z-10 relative text-left">
                <div className="mb-10">
                  <h3 className="text-2xl text-white mb-3 tracking-tight font-manrope font-medium">Design System Scalability</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed max-w-sm font-medium font-sans">
                        Maintain visual consistency as your project grows. Track component reuse and token standardization automatically.
                    </p>
                </div>

                <div className="group overflow-hidden bg-zinc-950 w-full max-w-lg border-white/10 border mt-auto mr-auto ml-auto pt-3 pr-3 pb-3 pl-3 relative">
                     <div className="flex items-end justify-between mb-8">
                         <div className="">
                             <div className="text-xs text-zinc-500 mb-1 font-medium font-sans uppercase tracking-wider">Reusable Tokens</div>
                             <div className="text-3xl text-white tracking-tight font-manrope font-medium flex items-baseline">
                                 <span className="tabular-nums tracking-tight" ref={counterRef}>
                                     {count.toLocaleString()}
                                </span>
                                 <span className="text-zinc-500 ml-1">+</span>
                             </div>
                         </div>
                         <div className="w-10 h-10 rounded-lg bg-cyan-500/20 shadow-[0_0_15px_-3px_rgba(6,182,212,0.15)] flex items-center justify-center text-cyan-500">
                             <Database size={20} />
                         </div>
                     </div>

                     <div className="flex items-end justify-between h-32 gap-1.5 pt-4 border-t border-white/5 relative">
                         {/* Background lines */}
                        <div className="absolute inset-0 w-full h-full pointer-events-none flex flex-col justify-between py-1 opacity-20">
                            <div className="w-full border-t border-dashed border-zinc-700"></div>
                            <div className="w-full border-t border-dashed border-zinc-700"></div>
                            <div className="w-full border-t border-dashed border-zinc-700"></div>
                        </div>

                         <div className="w-full bg-gradient-to-t from-cyan-900/20 to-cyan-500/20 h-[35%] rounded-t-[2px] aura-animate-bar" style={{animationDelay: '0ms'}}></div>
                         <div className="w-full bg-gradient-to-t from-cyan-900/30 to-cyan-500/30 h-[50%] rounded-t-[2px] aura-animate-bar" style={{animationDelay: '50ms'}}></div>
                         <div className="w-full bg-gradient-to-t from-cyan-900/40 to-cyan-500/40 h-[65%] rounded-t-[2px] aura-animate-bar" style={{animationDelay: '100ms'}}></div>

                         <div className="w-full bg-gradient-to-t from-cyan-600 to-cyan-400 h-[85%] rounded-t-[3px] shadow-[0_0_20px_-5px_rgba(34,211,238,0.4)] aura-animate-bar relative z-10" style={{animationDelay: '150ms'}}></div>
                         <div className="w-full bg-gradient-to-t from-cyan-600 to-cyan-400 h-[100%] rounded-t-[3px] shadow-[0_0_20px_-5px_rgba(34,211,238,0.4)] aura-animate-bar relative z-10" style={{animationDelay: '200ms'}}></div>

                         <div className="w-full bg-gradient-to-t from-cyan-900/40 to-cyan-500/40 h-[60%] rounded-t-[2px] aura-animate-bar" style={{animationDelay: '250ms'}}></div>
                         <div className="w-full bg-gradient-to-t from-cyan-900/30 to-cyan-500/30 h-[45%] rounded-t-[2px] aura-animate-bar" style={{animationDelay: '300ms'}}></div>
                         <div className="w-full bg-gradient-to-t from-cyan-900/20 to-cyan-500/20 h-[30%] rounded-t-[2px] aura-animate-bar"></div>
                         <div className="w-full border-x border-t border-zinc-800/50 bg-zinc-900/30 h-[55%] rounded-t-[2px] aura-animate-bar" style={{animationDelay: '450ms'}}></div>
                     </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

