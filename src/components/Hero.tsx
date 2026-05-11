export default function Hero() {
  return (
    <section className="relative min-height-[90vh] flex items-center px-8 pt-32 pb-20 overflow-hidden">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="z-10 flex flex-col gap-8 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-white/80 w-fit">
            <span className="text-accent-cyan">✦</span> IA PARA UM FUTURO INTELIGENTE
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-light leading-tight tracking-tight text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]">
            Infraestrutura <br />
            de IA para <br />
            <span className="font-normal">transformar o <br /> mundo.</span>
          </h1>
          
          <p className="text-lg text-white/50 font-light leading-relaxed max-w-lg">
            Aether Solutions constrói a infraestrutura de IA mais avançada do planeta para empresas que desejam escalar sem limites.
          </p>
          
          <div className="flex flex-wrap gap-4 mt-4">
            <button className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#0363F8] to-[#20A2F8] text-white font-bold shadow-[0_0_15px_rgba(3,99,248,0.3)] hover:shadow-[0_0_25px_rgba(3,99,248,0.5)] transition-all flex items-center gap-2">
              Agendar uma demo
              <span className="text-xl">→</span>
            </button>
            <button className="px-8 py-4 rounded-xl border border-white/20 bg-[#000B1F] font-semibold text-white shadow-[0_0_15px_rgba(255,255,255,0.15)] hover:shadow-[0_0_20px_rgba(255,255,255,0.25)] hover:bg-white/5 transition-all">
              Conheça o produto
            </button>
          </div>
        </div>

        {/* Right Content - Animation Placeholder */}
        <div className="relative flex items-center justify-center min-h-[500px]">
          {/* Logo Placeholder / Animation Area */}
          <div className="relative z-10 w-full aspect-square flex items-center justify-center">
            {/* The "A" Logo Placeholder */}
            <div className="w-[300px] h-[300px] relative">
               <svg viewBox="0 0 100 100" className="w-full h-full">
                  <path 
                    d="M50 10 L85 85 L65 85 L50 50 L35 85 L15 85 Z" 
                    fill="url(#logo-grad)" 
                    className="animate-float"
                  />
                  <defs>
                    <linearGradient id="logo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#00f2ff" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#00d1ff" stopOpacity="0.3" />
                    </linearGradient>
                  </defs>
               </svg>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
