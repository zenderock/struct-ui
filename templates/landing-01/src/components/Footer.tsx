import { Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#050505] border-t border-white/5 pt-20 pb-10">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div
          className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 animate-on-scroll"
          style={{ animation: "fadeSlideIn 1s ease-out forwards" }}
        >
          {/* Brand */}
          <div className="col-span-1">
            <h4 className="text-2xl font-medium tracking-tighter text-white mb-6">
              CRE8XP
            </h4>
            <p className="text-xs text-white/50 uppercase tracking-widest leading-relaxed">
              Elite Health & Performance Adventure.
              <br />
              Military-grade precision.
              <br />
              Ultra-Luxury execution.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h5 className="text-[10px] text-[#626041] uppercase tracking-[0.2em] font-semibold mb-6">
              Navigation
            </h5>
            <ul className="space-y-3">
              <li>
                <a
                  href="/"
                  className="text-xs font-medium text-white/60 hover:text-white uppercase tracking-widest transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#authority"
                  className="text-xs font-medium text-white/60 hover:text-white uppercase tracking-widest transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-xs font-medium text-white/60 hover:text-white uppercase tracking-widest transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/zenderock"
                  className="text-xs font-medium text-white/60 hover:text-white uppercase tracking-widest transition-colors"
                >
                  Github
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-span-1">
            <h5 className="text-[10px] text-[#626041] uppercase tracking-[0.2em] font-semibold mb-6">
              Programs
            </h5>
            <ul className="space-y-3">
              {[
                "High Performance Travel",
                "Elite Healthspan",
                "Genetics Test",
                "Private Black Label",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="https://github.com/zenderock"
                    className="text-xs font-medium text-white/60 hover:text-white uppercase tracking-widest transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-1">
            <h5 className="text-[10px] text-[#626041] uppercase tracking-[0.2em] font-semibold mb-6">
              Secure Comms
            </h5>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:contact@zenderock.me"
                  className="text-xs font-medium text-white/60 hover:text-white uppercase tracking-widest transition-colors flex items-center gap-2"
                >
                  <Mail className="w-3 h-3" /> contact@zenderock.me
                </a>
              </li>
              <li>
                <a
                  href="tel:0434770307"
                  className="text-xs font-medium text-white/60 hover:text-white uppercase tracking-widest transition-colors flex items-center gap-2"
                >
                  <Phone className="w-3 h-3" /> 0434 770 3000
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] text-white/30 uppercase tracking-widest">
            © 2025 CRE8XP. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="https://github.com/zenderock"
              className="text-[10px] text-white/30 hover:text-white uppercase tracking-widest transition-colors"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-[10px] text-white/30 hover:text-white uppercase tracking-widest transition-colors"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
