import { Mountain, Activity, Dna, Lock, ArrowUpRight } from "lucide-react";

export default function Services() {
  const services = [
    {
      id: "01",
      title: "High Performance Travel",
      description:
        "Curated expeditions to the world's most remote corners. Testing resilience in high-altitude and tactical environments.",
      icon: Mountain,
      image:
        "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?q=80&w=2000&auto=format&fit=crop",
      linkText: "Learn More",
    },
    {
      id: "02",
      title: "Elite Healthspan",
      description:
        "Advanced bio-hacking protocols designed to extend peak performance windows and optimize recovery.",
      icon: Activity,
      image:
        "https://images.unsplash.com/photo-1579126038374-6064e9370f0f?q=80&w=2000&auto=format&fit=crop",
      linkText: "Learn More",
    },
    {
      id: "03",
      title: "Performance Genetics",
      description:
        "Decode your DNA. Precision nutrition and training based on your unique genetic markers.",
      icon: Dna,
      image:
        "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=2000&auto=format&fit=crop",
      linkText: "Learn More",
    },
    {
      id: "04",
      title: "Private Black Label",
      description:
        "Invitation-only access to our most exclusive events and off-grid locations.",
      icon: Lock,
      image:
        "https://images.unsplash.com/photo-1616423640778-28d1b53229bd?q=80&w=2000&auto=format&fit=crop",
      linkText: "Request Access",
    },
  ];

  return (
    <section id="services" className="relative min-h-screen bg-neutral-900">
      <div className="grid grid-cols-1 md:grid-cols-2 h-full min-h-screen">
        {services.map((service, index) => {
          const isBlackLabel = service.title === "Private Black Label";
          // Calculate borders based on index (even/odd)
          const borderClass =
            index === 0
              ? "border-r border-b"
              : index === 1
              ? "border-b"
              : index === 2
              ? "border-r"
              : "";

          return (
            <div
              key={service.id}
              className={`group relative w-full min-h-[50vh] overflow-hidden ${borderClass} border-white/10 animate-on-scroll`}
              style={{
                animation: `fadeSlideIn 0.8s ease-out forwards ${0.1 * (index + 1)}s`,
              }}
            >
              {/* Background Image */}
              <div
                className={`absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-40 ${
                  isBlackLabel ? "opacity-50 group-hover:opacity-30 bg-blend-luminosity" : ""
                }`}
                style={{ backgroundImage: `url('${service.image}')` }}
              />
              <div
                className={`absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent ${
                  isBlackLabel ? "opacity-95" : "opacity-90"
                }`}
              />

              {/* Content */}
              <div className="absolute bottom-0 left-0 p-10 lg:p-16 w-full">
                <div className="flex items-center gap-3 mb-4 opacity-70">
                  <service.icon className="w-5 h-5 text-[#626041]" />
                  <span className="text-[10px] uppercase tracking-[0.2em]">
                    {service.id} / Service
                  </span>
                </div>
                <h3 className="text-3xl lg:text-4xl font-medium tracking-tight text-white mb-4 group-hover:text-[#626041] transition-colors">
                  {service.title}
                </h3>
                <p className="text-white/60 max-w-sm mb-8 h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-500 overflow-hidden transform translate-y-4 group-hover:translate-y-0">
                  {service.description}
                </p>
                <button className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white border-b border-[#626041] pb-1 group-hover:border-white transition-colors cursor-pointer">
                  {service.linkText} <ArrowUpRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
