import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { X, Menu } from "lucide-react";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed flex animate-[fadeSlideIn_0.8s_ease-out_0.1s_both] z-50 pr-4 pl-4 top-6 right-0 left-0 justify-center">
        <div className="flex shadow-cyan-900/50 bg-black/60 border-white/20 border pt-2 pr-2 pb-2 pl-2 shadow-2xl backdrop-blur-xl gap-1 items-center rounded-lg">
          <Link to="/" className="inline-flex items-center justify-center bg-center w-[60px] h-[40px] bg-cover rounded overflow-hidden">
            <img 
              src="https://cdn.midjourney.com/992e5ce2-c199-4ff5-b085-9c0f4635fa17/0_2.png?w=800&q=80" 
              alt="Logo" 
              className="w-full h-full object-cover"
            />
          </Link>

          <div className="hidden md:flex items-center gap-1 text-sm font-medium text-zinc-400">
            <a href="#features" className="px-4 py-2 hover:text-cyan-300 transition-colors font-medium font-sans">
              Features
            </a>
            <a href="#pricing" className="px-4 py-2 hover:text-cyan-300 transition-colors font-medium font-sans">
              Pricing
            </a>
            <a href="#" className="px-4 py-2 hover:text-cyan-300 transition-colors font-medium font-sans">
              Showcase
            </a>
            <a href="#" className="px-4 py-2 hover:text-cyan-300 transition-colors mr-2 font-medium font-sans">
              Contact us
            </a>
          </div>

          <button 
            className="md:hidden p-2 text-zinc-400 hover:text-white"
            onClick={() => setIsMenuOpen(true)}
          >
            <Menu size={24} />
          </button>

          <a href="#" className="hidden md:block hover:bg-cyan-400 transition-colors shadow-cyan-500/30 active:scale-95 text-sm font-medium text-zinc-950 bg-cyan-500 pt-2.5 pr-5 pb-2.5 pl-5 shadow-lg rounded">
            Launch Kreona
          </a>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-xl flex flex-col items-center justify-center">
          <button 
            className="absolute top-6 right-6 text-zinc-400 hover:text-white"
            onClick={() => setIsMenuOpen(false)}
          >
            <X size={32} />
          </button>
          <div className="flex flex-col gap-8 text-center">
            <a href="#features" className="text-2xl text-zinc-300 font-medium font-sans" onClick={() => setIsMenuOpen(false)}>Features</a>
            <a href="#pricing" className="text-2xl text-zinc-300 font-medium font-sans" onClick={() => setIsMenuOpen(false)}>Pricing</a>
            <a href="#" className="text-2xl text-zinc-300 font-medium font-sans" onClick={() => setIsMenuOpen(false)}>Showcase</a>
            <a href="#" className="text-2xl text-zinc-300 font-medium font-sans" onClick={() => setIsMenuOpen(false)}>Contact us</a>
            <a href="#" className="text-2xl text-cyan-400 font-medium font-sans" onClick={() => setIsMenuOpen(false)}>Launch Kreona</a>
          </div>
        </div>
      )}
    </>
  );
}
