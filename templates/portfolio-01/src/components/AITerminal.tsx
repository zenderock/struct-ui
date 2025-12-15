import { useState } from 'react'

export default function AITerminal() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [input, setInput] = useState('')

  return (
    <section
      id="ai"
      className="bg-[#050505] text-gray-300 py-20 md:py-32 px-4 md:px-6 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-size-[3rem_3rem] md:bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none opacity-20" />
      <div className="max-w-[1000px] mx-auto relative z-10">
        <div className="text-center mb-10 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
            <span className="font-mono text-[10px] uppercase tracking-widest text-white">
              Gemini Powered
            </span>
          </div>
          <h2 className="text-3xl md:text-6xl font-semibold tracking-tighter text-white mb-4">
            Ask my AI Assistant
          </h2>
          <p className="text-gray-400 max-w-md mx-auto font-light text-sm md:text-lg">
            Query my background, tech stack, or availability. It reads directly
            from my resume data.
          </p>
        </div>
        <div className="w-full bg-[#0F0F0F] border border-white/10 rounded-lg shadow-2xl overflow-hidden flex flex-col">
          <div className="bg-[#151515] px-4 py-3 flex items-center gap-4 border-b border-white/5 shrink-0">
            <div className="flex gap-1.5 md:gap-2">
              <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-red-500/20 border border-red-500/50" />
              <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
              <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-green-500/20 border border-green-500/50" />
            </div>
            <div className="flex-1 text-center font-mono text-[10px] md:text-xs text-gray-500">
              kyriakos-bot — node — 80x24
            </div>
          </div>
          <div className="p-4 md:p-6 font-mono text-xs md:text-base h-[350px] md:h-[400px] flex flex-col bg-black/50 backdrop-blur-sm">
            <div
              id="terminal-output"
              className="space-y-3 md:space-y-4 mb-2 flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-800 scrollbar-track-transparent"
            >
              <div className="text-green-400/90">
                <span className="text-black">➜</span> ~ System online. Try
                asking: "What is your experience with AWS?"
              </div>
            </div>
            <div className="flex items-center gap-2 md:gap-3 pt-3 border-t border-white/10 shrink-0">
              <span className="text-black">➜</span>
              <span className="text-blue-400">~</span>
              <input
                type="text"
                id="ai-input"
                className="bg-transparent border-none outline-none text-white w-full placeholder-gray-700 focus:placeholder-gray-600"
                placeholder="Type your question..."
                autoComplete="off"
                spellCheck="false"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mt-6 md:mt-8">
          {['Core skills?', 'Previous roles?', 'Contact info?'].map((prompt) => (
            <button
             key={prompt}
             onClick={() => setInput(prompt.replace(/"/g, ''))}
             className="quick-prompt px-3 py-2 bg-white/5 hover:bg-white/10 border border-white/5 rounded text-[10px] md:text-xs font-mono text-gray-400 transition-colors cursor-pointer"
            >
              "{prompt}"
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
