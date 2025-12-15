export default function Loader() {
  return (
    <div
      className="fixed inset-0 z-10000 bg-[#111111] flex justify-center items-center text-[#F5F5F5]"
      id="loader"
    >
      <div className="flex flex-col items-center gap-4">
        <div
          className="font-mono text-6xl md:text-8xl font-bold tracking-tighter"
          id="loader-text"
        >
          0%
        </div>
        <div className="w-32 h-px bg-gray-800 relative overflow-hidden">
          <div
            className="absolute inset-0 bg-black w-0"
            id="loader-progress"
          />
        </div>
      </div>
    </div>
  )
}
