import { ArrowUpRight, Github, MessageCircle } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export function Footer() {
  useScrollAnimation();

  return (
    <footer className="bg-black border-white/5 border-t pt-20 pb-20" id="footer">
      <div className="animate-on-scroll max-w-7xl mr-auto ml-auto pr-6 pl-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-12 gap-x-8 mb-16 w-full">
          {/* Branding Header */}
          <div className="col-span-1 md:col-span-12 flex gap-3 md:gap-5 animate-on-scroll pb-4 gap-x-3 gap-y-3 items-baseline">
            <h1 className="text-7xl md:text-9xl lg:text-[11rem] leading-[0.8] tracking-tighter font-medium text-white font-sans select-none">
              kreona
            </h1>
            <span className="text-xl md:text-3xl font-normal text-zinc-400 tracking-tight font-sans relative -top-1 md:-top-3">
              studio
            </span>
          </div>

          {/* Divider */}
          <div className="col-span-1 md:col-span-12 w-full h-px bg-white/10 animate-on-scroll"></div>

          {/* Content Area */}
          <div className="col-span-1 md:col-span-12 grid grid-cols-1 lg:grid-cols-12 animate-on-scroll mt-2 gap-x-12 gap-y-12">
            {/* CTA Section */}
            <div className="col-span-1 lg:col-span-5 flex flex-col items-start justify-between gap-10">
              <p className="text-lg text-zinc-400 font-light font-sans leading-relaxed max-w-md">
                Let’s build something great together — whether you have a
                project in mind or just want to connect, we’d love to hear from
                you.
              </p>

              <div className="flex items-center gap-4">
                <button className="bg-zinc-300 hover:bg-white text-zinc-950 px-8 py-4 rounded-lg text-sm font-medium transition-colors font-sans duration-300">
                  Book a 15-min call
                </button>
                <button className="w-14 h-14 rounded-full bg-zinc-300 hover:bg-white text-zinc-950 flex items-center justify-center transition-colors duration-300 group">
                  <ArrowUpRight className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>

            <div className="col-span-1 lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-10 lg:pl-10 w-full">
              {/* Column 1 */}
              <div className="flex flex-col gap-6">
                <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-medium font-sans">Sitemap</span>
                <ul className="flex flex-col gap-4">
                  <li><a href="#" className="text-sm text-zinc-400 hover:text-white transition-colors font-sans font-normal">Home</a></li>
                  <li><a href="#" className="text-sm text-zinc-400 hover:text-white transition-colors font-sans font-normal">About</a></li>
                  <li><a href="#" className="text-sm text-zinc-400 hover:text-white transition-colors font-sans font-normal">Works</a></li>
                </ul>
              </div>

              <div className="flex flex-col gap-6">
                <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-medium font-sans">Recent Works</span>
                <ul className="flex flex-col gap-4">
                  <li><a href="#" className="text-sm text-zinc-400 hover:text-white transition-colors font-sans font-normal">Space</a></li>
                  <li><a href="#" className="text-sm text-zinc-400 hover:text-white transition-colors font-sans font-normal">Botic</a></li>
                  <li><a href="#" className="text-sm text-zinc-400 hover:text-white transition-colors font-sans font-normal">Run</a></li>
                </ul>
              </div>

              <div className="flex flex-col gap-6">
                <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-medium font-sans">Social</span>
                <ul className="flex flex-col gap-4">
                  <li><a href="https://www.linkedin.com/in/emmanuel-kevin-bidjang-a-ngam" target="_blank" className="text-sm text-zinc-400 hover:text-white transition-colors font-sans font-normal">LinkedIn</a></li>
                  <li><a href="https://github.com/zenderock" target="_blank" className="text-sm text-zinc-400 hover:text-white transition-colors font-sans font-normal">Github</a></li>
                </ul>
              </div>
              <div className="flex flex-col gap-6">
                <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-medium font-sans">Other</span>
                <ul className="flex flex-col gap-4">
                  <li><a href="https://github.com/zenderock/OPS" target="_blank" className="text-sm text-zinc-400 hover:text-white transition-colors font-sans font-normal">See template</a></li>
                  <li><a href="https://zenderock.me" target="_blank" className="text-sm text-zinc-400 hover:text-white transition-colors font-sans font-normal">View More</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row animate-on-scroll border-white/5 border-t pt-8 gap-x-4 gap-y-4 items-center justify-between">
          <p className="text-xs text-zinc-600 font-medium font-sans">
            © 2025 Kreona Studio. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="https://github.com/zenderock" target="_blank" className="text-zinc-500 hover:text-white transition-colors">
              <Github className="text-base" />
            </a>
            <a href="mailto:contact@zenderock.me" className="text-zinc-500 hover:text-white transition-colors">
              <MessageCircle className="text-base" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
