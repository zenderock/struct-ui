import { Link } from '@tanstack/react-router'

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full px-4 md:px-6 py-5 flex justify-between items-center z-50 mix-blend-difference text-white pointer-events-none">
      <Link
        to="/"
        className="font-mono text-sm font-semibold uppercase tracking-widest hover:text-black transition-colors pointer-events-auto"
      >
        Emmanuel
        <br />
        Zenderock
      </Link>
      <div className="flex items-center gap-4 md:gap-10 pointer-events-auto">
        <div className="hidden md:flex gap-8 bg-white/10 backdrop-blur-md px-6 py-2 rounded-full border border-white/10">
          <a
            href="#work"
            className="font-mono text-xs uppercase tracking-widest hover:text-black transition-colors"
          >
            Work
          </a>
          <a
            href="#about"
            className="font-mono text-xs uppercase tracking-widest hover:text-black transition-colors"
          >
            About
          </a>
          <a
            href="#ai"
            className="font-mono text-xs uppercase tracking-widest hover:text-black transition-colors"
          >
            AI
          </a>
        </div>
        <a
          href="#contact"
          className="bg-white text-black px-5 py-2 rounded-full font-mono text-xs font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-colors duration-200 magnetic-btn shadow-lg"
        >
          Contact
        </a>
      </div>
    </nav>
  )
}
