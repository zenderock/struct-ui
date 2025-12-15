export default function About() {
  return (
    <section id="about" className="px-4 md:px-6 py-20 md:py-32 bg-white">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
        <div className="relative">
          <div className="md:sticky md:top-32">
            <h2 className="text-4xl md:text-6xl font-semibold tracking-tighter uppercase mb-6 md:mb-8">
              Career
              <br />
              Timeline
            </h2>
            <div className="w-12 md:w-16 h-1 bg-black mb-6 md:mb-8" />
            <p className="text-secondary text-base md:text-lg leading-relaxed">
              Over 8 years of experience leading frontend teams and delivering
              complex, data-driven applications. Focused on performance
              optimization and clean architecture.
            </p>
            <div className="mt-8 md:mt-12 p-5 md:p-6 bg-background rounded-lg border border-black/5">
              <h4 className="font-mono text-[10px] md:text-xs uppercase tracking-widest text-black mb-3">
                Education
              </h4>
              <p className="font-semibold text-sm md:text-base">
                HND Computer Technology
              </p>
              <p className="text-xs md:text-sm text-secondary">
                Computrain / 2012 - 2016
              </p>
            </div>
          </div>
        </div>
        <div className="space-y-12 md:space-y-16 border-l border-black/10 pl-6 md:pl-12 mt-4 md:mt-0">
          <div className="relative group">
            <div className="absolute -left-[1.95rem] md:-left-13 top-1.5 md:top-2 w-2.5 h-2.5 md:w-3 md:h-3 bg-white border-2 border-black rounded-full z-10 group-hover:bg-black transition-colors" />
            <h3 className="text-xl md:text-2xl font-semibold tracking-tight">
              Senior Software Engineer
            </h3>
            <p className="font-mono text-xs md:text-sm text-black mt-1 mb-3 uppercase tracking-wider">
              Planhat / Apr 2025 — Present
            </p>
            <ul className="space-y-2 text-secondary list-disc pl-4 text-sm md:text-base marker:text-gray-300">
              <li>
                Optimized homepage load time from 4s to &lt; 2.5s via Vue.js
                rendering improvements.
              </li>
              <li>
                Architected a reusable component library based on Figma tokens.
              </li>
            </ul>
          </div>
          {/* Previous Role 1 */}
          <div className="relative group">
            <div className="absolute -left-[1.95rem] md:-left-13 top-1.5 md:top-2 w-2.5 h-2.5 md:w-3 md:h-3 bg-white border-2 border-gray-300 rounded-full z-10 group-hover:border-black transition-colors" />
            <h3 className="text-xl md:text-2xl font-semibold tracking-tight">
              Full Stack Developer
            </h3>
            <p className="font-mono text-xs md:text-sm text-secondary mt-1 mb-3 uppercase tracking-wider">
              Proxify / Sep 2023 — Mar 2025
            </p>
            <ul className="space-y-2 text-secondary list-disc pl-4 text-sm md:text-base marker:text-gray-300">
              <li>
                Reduced bug reports by 66% through strict code review processes.
              </li>
              <li>Deployed Laravel APIs handling 50k+ daily requests.</li>
            </ul>
          </div>
          {/* Previous Role 2 */}
          <div className="relative group">
            <div className="absolute -left-[1.95rem] md:-left-13 top-1.5 md:top-2 w-2.5 h-2.5 md:w-3 md:h-3 bg-white border-2 border-gray-300 rounded-full z-10 group-hover:border-black transition-colors" />
            <h3 className="text-xl md:text-2xl font-semibold tracking-tight">
              Lead Front-end Developer
            </h3>
            <p className="font-mono text-xs md:text-sm text-secondary mt-1 mb-3 uppercase tracking-wider">
              Xamplifier Inc. / Sep 2018 — Sep 2023
            </p>
            <ul className="space-y-2 text-secondary list-disc pl-4 text-sm md:text-base marker:text-gray-300">
              <li>Managed a team of 5 developers in an Agile environment.</li>
              <li>Maintained 99.9% uptime on AWS production environments.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
