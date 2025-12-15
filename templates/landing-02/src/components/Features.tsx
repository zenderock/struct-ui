import { useRef, useEffect, useState } from "react";
import { Eye, CodeSquare, Zap, ArrowUpRight } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export function Features() {
  useScrollAnimation();
  const [activeTab, setActiveTab] = useState(0);
  const tabsRef = useRef<HTMLDivElement>(null);
  const indicatorRef = useRef<HTMLDivElement>(null);

  const tabs = [
    {
      title: "Natural Language Prompts",
      description: 'Describe your vision: "A dark mode SaaS landing page with a pricing grid," and watch Kreona build it pixel-perfectly.'
    },
    {
      title: "Production-Ready Code",
      description: "Clean, semantic HTML and Tailwind CSS. No lock-in, just code you can ship."
    },
    {
      title: "Responsive by Default",
      description: "Every generated layout is mobile-optimized and adapts to any screen size automatically."
    }
  ];

  useEffect(() => {
    if (tabsRef.current && indicatorRef.current) {
      const activeElement = tabsRef.current.children[activeTab + 1] as HTMLElement; // +1 because of indicator
      if (activeElement) {
        const containerRect = tabsRef.current.getBoundingClientRect();
        const elRect = activeElement.getBoundingClientRect();
        const content = activeElement.querySelector('.aura-tab-content') as HTMLElement;
        
        const topPos = elRect.top - containerRect.top;
        const contentHeight = content?.offsetHeight || 88;

        indicatorRef.current.style.transform = `translateY(${topPos}px)`;
        indicatorRef.current.style.height = `${contentHeight}px`;
      }
    }
  }, [activeTab]);

  return (
    <section className="bg-zinc-950/50 border-white/5 border-t pt-32 pb-32 relative" id="features">
      <div className="animate-on-scroll max-w-7xl border-slate-50/10 border mr-auto ml-auto pt-6 pr-6 pb-6 pl-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 w-full gap-x-16 gap-y-16 items-center">
          
          {/* LEFT COLUMN: Features Grid */}
          <div className="grid grid-cols-2 animate-on-scroll w-full gap-x-4 gap-y-4">
            <div className="bg-zinc-950 border border-white/10 rounded-none p-10 flex flex-col justify-between min-h-[280px] relative overflow-hidden group hover:border-cyan-500/50 transition-all duration-300 animate-on-scroll">
              <div className="absolute top-0 right-0 bottom-0 left-0"></div>
              <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-cyan-500/50"></div>

              <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-500/5 blur-[80px] pointer-events-none group-hover:bg-cyan-500/10 transition-colors"></div>

              <div className="flex items-center gap-4 z-10">
                <span className="text-7xl text-white tracking-tighter font-manrope font-medium">10x</span>
                <div className="flex flex-col justify-center h-full pt-2">
                  <span className="text-[10px] uppercase tracking-widest text-cyan-500 font-bold mb-1">Velocity</span>
                  <div className="h-0.5 w-12 bg-zinc-800 overflow-hidden">
                    <div className="h-full w-full bg-cyan-500 origin-left animate-[shimmer_2s_infinite]"></div>
                  </div>
                </div>
              </div>
              <p className="text-zinc-500 text-sm leading-relaxed max-w-[180px] font-medium font-sans relative z-10 mt-4">
                Accelerate development. Go from raw idea to deployed frontend in seconds.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <div className="bg-zinc-950 border border-white/10 rounded-none p-8 flex-1 flex flex-col justify-center gap-3 hover:bg-zinc-900 hover:border-white/30 transition-all duration-300 group relative overflow-hidden animate-on-scroll">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-white/20 group-hover:border-cyan-500/50 transition-colors"></div>

                <div className="relative z-10 flex items-center justify-between animate-on-scroll">
                  <div className="w-12 h-12 bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-400 group-hover:text-cyan-300 group-hover:border-cyan-500/30 transition-all rounded-none">
                    <Eye className="text-xl" />
                  </div>
                  <ArrowUpRight className="text-zinc-600 group-hover:text-white transition-colors" />
                </div>
                <span className="relative z-10 text-zinc-300 text-sm font-medium font-sans group-hover:text-white mt-2">
                  Real-time Visuals
                </span>
              </div>

              <div className="bg-zinc-950 border border-white/10 rounded-none p-8 flex-1 flex flex-col justify-center gap-3 hover:bg-zinc-900 hover:border-white/30 transition-all duration-300 group relative overflow-hidden animate-on-scroll">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-white/20 group-hover:border-cyan-500/50 transition-colors"></div>

                <div className="relative z-10 flex items-center justify-between">
                  <div className="w-12 h-12 bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-400 group-hover:text-cyan-300 group-hover:border-cyan-500/30 transition-all rounded-none">
                    <CodeSquare className="text-xl" />
                  </div>
                  <ArrowUpRight className="text-zinc-600 group-hover:text-white transition-colors" />
                </div>
                <span className="relative z-10 text-zinc-300 text-sm font-medium font-sans group-hover:text-white mt-2">
                  Clean Code Export
                </span>
              </div>
            </div>

            <div className="col-span-2 bg-zinc-950 rounded-none relative overflow-hidden min-h-[300px] flex items-end group border border-white/10 hover:border-cyan-500/30 transition-all duration-500 animate-on-scroll">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]"></div>
              <div className="bg-gradient-to-t from-zinc-950 via-zinc-950/50 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>

              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[85%]">
                <div className="bg-zinc-900/95 backdrop-blur-xl border border-white/10 p-1 shadow-2xl shadow-black/50 transform group-hover:-translate-y-2 transition-transform duration-500 rounded-none">
                  <div className="flex items-center justify-between px-4 py-2 border-b border-white/5 bg-zinc-800/30">
                    <div className="flex gap-1.5">
                      <div className="w-2 h-2 bg-zinc-600"></div>
                      <div className="w-2 h-2 bg-zinc-600"></div>
                    </div>
                    <div className="text-[9px] font-mono text-zinc-500 tracking-wider">GENERATING...</div>
                  </div>

                  <div className="p-6 space-y-5">
                    <div className="flex gap-5">
                      <div className="w-16 h-16 bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border border-cyan-500/20 animate-pulse flex items-center justify-center rounded-none">
                        <Zap className="text-cyan-500/50 text-xl" />
                      </div>
                      <div className="flex-1 space-y-3 py-1">
                        <div className="h-2 bg-zinc-800/80 w-3/4"></div>
                        <div className="h-2 bg-zinc-800/80 w-1/2"></div>
                        <div className="h-2 bg-zinc-800/80 w-5/6"></div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between pt-3 border-t border-white/5">
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-cyan-500 animate-pulse"></div>
                        <span className="text-[10px] text-cyan-200 font-mono uppercase tracking-wide">Processing Prompt</span>
                      </div>
                      <span className="text-[10px] text-zinc-600 font-mono">0.8s</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Interactive Tabs */}
          <div className="flex flex-col lg:pl-4 animate-on-scroll pl-0 justify-center">
            <div className="flex items-center gap-2 text-cyan-400 text-sm font-medium mb-8">
              <div className="w-1 h-1 bg-cyan-400"></div>
              <span className="font-medium font-sans uppercase tracking-widest text-xs text-zinc-500">Capabilities</span>
            </div>

            <h2 className="md:text-5xl leading-[1.15] animate-on-scroll text-4xl font-medium text-white tracking-tight font-manrope mb-12">
              Turn simple text into <span className="text-zinc-500">full-featured websites.</span>
            </h2>

            {/* Tab Wrapper */}
            <div className="border-white/10 border-l pl-8 relative space-y-0" ref={tabsRef}>
              
              {/* Active Indicator Line */}
              <div 
                ref={indicatorRef}
                className="absolute left-[-1px] top-0 w-[1px] bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.5)] transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]" 
              ></div>

              {tabs.map((tab, index) => (
                <div 
                  key={index}
                  className={`group animate-on-scroll pb-10 cursor-pointer relative aura-tab-item ${activeTab === index ? 'active' : ''}`} 
                  onClick={() => setActiveTab(index)}
                >
                  <div className="pointer-events-none aura-tab-content">
                    <h3 className={`text-lg font-medium font-sans mb-3 transition-colors duration-300 ${activeTab === index ? 'text-white' : 'text-zinc-500 group-hover:text-white'}`}>
                      {tab.title}
                    </h3>
                    <p className={`text-sm leading-relaxed font-medium font-sans max-w-md transition-colors duration-300 ${activeTab === index ? 'text-zinc-400' : 'text-zinc-600 group-hover:text-zinc-400'}`}>
                      {tab.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="animate-on-scroll mt-14">
              <button className="bg-white text-black px-8 py-4 rounded-none text-sm hover:bg-cyan-50 transition-all shadow-[0_0_20px_-5px_rgba(34,211,238,0.4)] hover:shadow-[0_0_30px_-5px_rgba(34,211,238,0.6)] active:translate-y-0.5 font-semibold font-sans tracking-wide animate-on-scroll">
                Start Building for Free
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
