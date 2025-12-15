import { Link } from "@tanstack/react-router";
import { ChevronDown, Menu, X, ArrowUpRight } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-xl transition-all duration-300">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group z-50 relative" onClick={closeMenu}>
            <span className="text-2xl font-medium tracking-tighter text-white group-hover:text-[#626041] transition-colors duration-300">
              CRE8XP
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-10">
            <Link
              to="/"
              className="text-xs font-medium uppercase tracking-widest text-white hover:text-[#626041] transition-colors"
            >
              Home
            </Link>
            <a
              href="#authority"
              className="text-xs font-medium uppercase tracking-widest text-white/70 hover:text-white transition-colors"
            >
              About
            </a>

            {/* Dropdown Group */}
            <div className="relative group h-20 flex items-center">
              <button className="text-xs font-medium uppercase tracking-widest text-white/70 hover:text-white transition-colors inline-flex items-center gap-1 cursor-pointer">
                Services
                <ChevronDown className="w-3 h-3" />
              </button>
              {/* Dropdown Menu */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-64 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform group-hover:translate-y-0 translate-y-2">
                <div className="bg-[#0a0a0a] border border-white/10 rounded-sm p-1 shadow-2xl">
                  {["High Performance Travel", "Elite Healthspan", "Genetics Test", "Private Black Label"].map((item) => (
                    <a
                      key={item}
                      href="#"
                      className="block px-4 py-3 text-xs text-white/70 hover:bg-[#626041]/20 hover:text-[#626041] transition-colors uppercase tracking-wider"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-6 z-50 relative">
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-2 bg-[#626041] hover:bg-[#525035] text-white text-xs font-medium uppercase tracking-widest px-6 py-3 transition-all duration-300 border border-transparent hover:border-white/20 rounded-sm"
            >
              Book Consultation
            </a>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden text-white p-2"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-xl z-40 transition-all duration-500 lg:hidden ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <div className="flex flex-col h-full pt-32 px-6 pb-10">
          <nav className="flex flex-col gap-8">
            <Link 
              to="/" 
              className="text-3xl font-medium text-white hover:text-[#626041] transition-colors tracking-tight"
              onClick={closeMenu}
            >
              Home
            </Link>
            <a 
              href="#authority" 
              className="text-3xl font-medium text-white hover:text-[#626041] transition-colors tracking-tight"
              onClick={closeMenu}
            >
              About
            </a>
            
            <div className="space-y-4">
              <span className="text-xs text-[#626041] uppercase tracking-[0.2em] font-medium block border-b border-[#626041]/30 pb-2 mb-4">
                Services
              </span>
              {["High Performance Travel", "Elite Healthspan", "Genetics Test", "Private Black Label"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="group flex items-center justify-between text-lg text-white/80 hover:text-white transition-colors py-2"
                  onClick={closeMenu}
                >
                  {item}
                  <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-[#626041]" />
                </a>
              ))}
            </div>

            <a 
              href="#contact" 
              className="mt-8 inline-flex justify-center items-center h-14 bg-[#626041] text-white text-sm font-medium uppercase tracking-widest rounded-sm"
              onClick={closeMenu}
            >
              Book Consultation
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
