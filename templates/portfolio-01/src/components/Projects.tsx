import { LayoutGrid, Building2, ArrowUpRight } from 'lucide-react'

export default function Projects() {
  return (
    <section
      id="work"
      className="px-4 md:px-6 py-20 md:py-32 max-w-[1800px] mx-auto"
    >
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24 border-b border-black/10 pb-6">
        <h2 className="text-4xl md:text-7xl font-semibold tracking-tighter uppercase">
          Selected Work
        </h2>
        <span className="font-mono text-xs md:text-sm text-black mt-2 md:mt-0">
          (2023 — 2025)
        </span>
      </div>
      <div className="space-y-20 md:space-y-32">
        {/* Project 1 */}
        <div className="group project-card grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-7 overflow-hidden rounded-sm bg-gray-200 aspect-4/3 md:aspect-16/10 relative cursor-pointer">
            <div className="absolute inset-0 bg-black/10 z-10 group-hover:bg-transparent transition-colors duration-300" />
            <img
              src="https://placehold.co/1600x1000/111/FFF?text=Bookydays&font=playfair"
              alt="Bookydays"
              className="project-img w-full h-full object-cover grayscale group-hover:grayscale-0 origin-center"
            />
          </div>
          <div className="lg:col-span-5 flex flex-col gap-4 md:gap-6">
            <div className="flex items-center gap-3 font-mono text-[10px] md:text-xs uppercase tracking-widest text-accent">
              <LayoutGrid className="w-3 h-3 md:w-4 md:h-4" />
              <span>Full Stack Platform</span>
            </div>
            <h3 className="text-3xl md:text-5xl font-semibold tracking-tighter">
              Bookydays.cy
            </h3>
            <p className="text-black text-base md:text-lg leading-relaxed">
              A comprehensive booking engine for wellness and fitness services.
              Engineered for high availability using Vue.js and Node.js
              microservices.
            </p>
            <div className="flex flex-wrap gap-2 mt-1">
              {['Vue.js', 'Node.js', 'MongoDB'].map((tech) => (
                <span key={tech} className="px-2 py-1 md:px-3 md:py-1 border border-black/10 rounded-full text-[10px] md:text-xs font-mono uppercase text-secondary bg-white">
                  {tech}
                </span>
              ))}
            </div>
            <a
              href="#"
              className="flex items-center justify-center gap-2 text-xs md:text-sm font-semibold uppercase tracking-widest mt-2 md:mt-4 hover:text-accent transition-colors magnetic-btn group/link"
            >
              View Project{' '}
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
            </a>
          </div>
        </div>
        {/* Project 2 */}
        <div className="group project-card grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-5 flex flex-col gap-4 md:gap-6 order-2 lg:order-1">
            <div className="flex items-center gap-3 font-mono text-[10px] md:text-xs uppercase tracking-widest text-accent">
              <Building2 className="w-3 h-3 md:w-4 md:h-4" />
              <span>Real Estate Core</span>
            </div>
            <h3 className="text-3xl md:text-5xl font-semibold tracking-tighter">
              Agensa.com.cy
            </h3>
            <p className="text-secondary text-base md:text-lg leading-relaxed">
              Advanced property listing platform featuring a custom CRM backend
              for agents. Built with Laravel for robust data handling and
              security.
            </p>
            <div className="flex flex-wrap gap-2 mt-1">
              {['Laravel', 'MySQL', 'Alpine.js'].map((tech) => (
                <span key={tech} className="px-2 py-1 md:px-3 md:py-1 border border-black/10 rounded-full text-[10px] md:text-xs font-mono uppercase text-secondary bg-white">
                  {tech}
                </span>
              ))}
            </div>
            <a
              href="#"
              className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold uppercase tracking-widest mt-2 md:mt-4 hover:text-accent transition-colors magnetic-btn group/link"
            >
              View Project{' '}
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
            </a>
          </div>
          <div className="lg:col-span-7 overflow-hidden rounded-sm bg-gray-200 aspect-4/3 md:aspect-16/10 relative cursor-pointer order-1 lg:order-2">
            <div className="absolute inset-0 bg-black/10 z-10 group-hover:bg-transparent transition-colors duration-300" />
            <img
              src="https://placehold.co/1600x1000/111/FFF?text=Agensa&font=playfair"
              alt="Agensa"
              className="project-img w-full h-full object-cover grayscale group-hover:grayscale-0 origin-center"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
