import { Mail, ArrowUp } from 'lucide-react'

export default function Contact() {
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <section
      id="contact"
      className="px-4 md:px-6 py-20 md:py-40 bg-[#F5F5F5] border-t border-black/5"
    >
      <div className="max-w-[1200px] mx-auto text-center">
        <p className="font-mono text-[10px] md:text-xs uppercase tracking-[0.3em] text-black mb-6">
          Status: Available
        </p>
        <h2 className="text-5xl md:text-9xl font-semibold tracking-tighter uppercase mb-10 md:mb-12 leading-none text-primary">
          Let's Work
          <br />
          Together
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-12">
          <a
            href="mailto:contact@zenderock.me"
            className="group flex items-center gap-3 text-lg md:text-2xl font-mono border-b border-black/20 pb-1 hover:border-black hover:text-black transition-all"
          >
            <Mail className="w-4 h-4 md:w-5 md:h-5" />
            contact@zenderock.me
          </a>
        </div>
        <div className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 text-center md:text-left border-t border-black/5 pt-12">
          <div>
            <h4 className="font-mono text-[10px] uppercase text-secondary mb-3">
              Socials
            </h4>
            <a
              href="#"
              className="block text-sm md:text-base font-medium hover:text-black transition-colors mb-1"
            >
              LinkedIn
            </a>
            <a
              href="#"
              className="block text-sm md:text-base font-medium hover:text-black transition-colors"
            >
              GitHub
            </a>
          </div>
          <div>
            <h4 className="font-mono text-[10px] uppercase text-secondary mb-3">
              Location
            </h4>
            <p className="text-sm md:text-base font-medium">Nicosia, Cyprus</p>
            <p className="text-sm md:text-base font-medium text-secondary">
              Remote (Global)
            </p>
          </div>
          <div>
            <h4 className="font-mono text-[10px] uppercase text-secondary mb-3">
              Stack
            </h4>
            <p className="text-sm md:text-base font-medium">Vue / React</p>
            <p className="text-sm md:text-base font-medium">Node / Laravel</p>
          </div>
          <div className="col-span-2 md:col-span-1 flex items-end justify-center md:justify-end mt-4 md:mt-0">
            <button
              className="w-10 h-10 md:w-12 md:h-12 border border-black/10 bg-white rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-colors cursor-pointer"
              onClick={scrollToTop}
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
