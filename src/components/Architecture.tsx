import { 
  FiMessageSquare, FiGlobe, FiCpu, FiActivity, 
  FiSettings, FiShield, FiDatabase, FiCloud, 
  FiCode, FiLayers 
} from "react-icons/fi";

export default function Architecture() {
  const layers = [
    {
      name: "INTERFACE LAYER",
      items: [
        { name: "WhatsApp", icon: <FiMessageSquare className="text-emerald-300" />, bg: "bg-emerald-500/15", border: "border-emerald-500/50", glow: "shadow-[0_0_15px_rgba(16,185,129,0.15)]" },
        { name: "Web Chat", icon: <FiGlobe className="text-blue-300" />, bg: "bg-blue-500/15", border: "border-blue-500/50", glow: "shadow-[0_0_15px_rgba(59,130,246,0.15)]" },
      ]
    },
    {
      name: "AI ENGINE",
      items: [
        { name: "NLP Processing", icon: <FiCpu className="text-cyan-300" />, bg: "bg-cyan-500/15", border: "border-cyan-500/50", glow: "shadow-[0_0_15px_rgba(6,182,212,0.15)]" },
        { name: "Context Engine", icon: <FiActivity className="text-sky-300" />, bg: "bg-sky-500/15", border: "border-sky-500/50", glow: "shadow-[0_0_15px_rgba(14,165,233,0.15)]" },
      ]
    },
    {
      name: "BUSINESS LOGIC",
      items: [
        { name: "Automation", icon: <FiSettings className="text-purple-300" />, bg: "bg-purple-500/15", border: "border-purple-500/50", glow: "shadow-[0_0_15px_rgba(168,85,247,0.15)]" },
        { name: "Security", icon: <FiShield className="text-rose-300" />, bg: "bg-rose-500/15", border: "border-rose-500/50", glow: "shadow-[0_0_15_rgba(244,63,94,0.15)]" },
      ]
    },
    {
      name: "DATA LAYER",
      items: [
        { name: "Database", icon: <FiDatabase className="text-amber-300" />, bg: "bg-amber-500/15", border: "border-amber-500/50", glow: "shadow-[0_0_15px_rgba(245,158,11,0.15)]" },
        { name: "Cloud Storage", icon: <FiCloud className="text-yellow-300" />, bg: "bg-yellow-500/15", border: "border-yellow-500/50", glow: "shadow-[0_0_15px_rgba(234,179,8,0.15)]" },
      ]
    }
  ];

  const stack = [
    { label: "LLM", name: "GPT-4" },
    { label: "LLM", name: "Claude AI" },
    { label: "FRAMEWORK", name: "LangChain" },
    { label: "BACKEND", name: "Python" },
    { label: "BACKEND", name: "Node.js" },
    { label: "FRONTEND", name: "React" },
    { label: "INTEGRATION", name: "WhatsApp API" },
    { label: "DATABASE", name: "PostgreSQL" },
  ];

  return (
    <section className="py-24 px-8 bg-[#020F22]">
      <div className="container mx-auto flex flex-col gap-24">
        
        {/* Architecture Section */}
        <div className="flex flex-col gap-12">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-accent-cyan/10 border border-accent-cyan/20 shadow-[0_0_15px_rgba(0,242,255,0.2)]">
              <FiLayers className="text-accent-cyan text-xl" />
            </div>
            <h2 className="text-3xl font-normal text-white tracking-tight">Arquitetura em Camadas</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {layers.map((layer, idx) => (
              <div key={idx} className="flex flex-col gap-6">
                <div className="px-4 py-1.5 rounded-full border border-white/5 bg-white/5 text-[10px] font-medium text-white/40 w-fit tracking-widest text-center mx-auto lg:mx-0 shadow-[0_0_15px_rgba(255,255,255,0.02)]">
                  {layer.name}
                </div>
                <div className="flex flex-col gap-4">
                  {layer.items.map((item, i) => (
                    <div 
                      key={i} 
                      className={`p-5 rounded-2xl border ${item.border} ${item.bg} ${item.glow} flex items-center gap-4 group hover:shadow-[0_0_25px_rgba(255,255,255,0.05)] transition-all duration-500`}
                    >
                      <div className="p-2.5 rounded-xl bg-black/20">
                        {item.icon}
                      </div>
                      <span className="text-white/80 font-normal tracking-wide">{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack Section */}
        <div className="flex flex-col gap-12">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-accent-cyan/10 border border-accent-cyan/20 shadow-[0_0_15px_rgba(0,242,255,0.2)]">
              <FiCode className="text-accent-cyan text-xl" />
            </div>
            <h2 className="text-3xl font-normal text-white tracking-tight">Stack Tecnológica</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {stack.map((item, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-[#0A1435] border border-white/5 flex flex-col gap-2 group hover:bg-[#0A224A] hover:border-accent-cyan/20 transition-all duration-500"
              >
                <span className="text-[10px] font-medium text-accent-cyan tracking-widest uppercase">{item.label}</span>
                <span className="text-white font-normal tracking-wide">{item.name}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
