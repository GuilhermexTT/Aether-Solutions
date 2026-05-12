import Image from "next/image";

export default function Hero() {
  return (
    <section 
      className="relative min-height-[90vh] flex items-center px-8 pt-32 pb-20 overflow-hidden will-change-transform" 
      style={{ transform: 'translateZ(0)', contain: 'paint' }}
    >
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="z-10 flex flex-col gap-8 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-white/80 w-fit">
            <span className="text-accent-cyan">✦</span> IA PARA UM FUTURO INTELIGENTE
          </div>
          
          <h1 
            className="text-5xl lg:text-7xl font-light leading-tight tracking-tight text-white"
            style={{ textShadow: '0 0 15px rgba(255,255,255,0.4)' }}
          >
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

        {/* Right Content - Static Disc with Energy Waves */}
        <div className="relative flex items-center justify-center min-h-[500px]">
          
          <div className="relative z-10 w-full aspect-square flex items-center justify-center">
            
            {/* High-Performance SVG Tech Portal Base */}
            <div 
              className="absolute top-1/2 left-1/2 w-[650px] h-[650px] pointer-events-none mt-40 will-change-transform"
              style={{ transform: 'translate(-50%, -50%) rotateX(75deg)', contain: 'strict' }}
            >
              {/* Glowing Aura on the "floor" - Optimized with radial gradient */}
              <div className="absolute inset-0 gravitational-field rounded-full opacity-80" style={{ transform: 'translateZ(0)' }}></div>
              
              <svg viewBox="0 0 650 650" className="w-full h-full overflow-visible will-change-transform" shapeRendering="geometricPrecision" style={{ transform: 'translateZ(0)' }}>
                {/* Outer Ring (Dashed) */}
                <circle 
                  cx="325" cy="325" r="300" 
                  fill="none" 
                  stroke="rgba(0, 242, 255, 0.5)" 
                  strokeWidth="4" 
                  strokeDasharray="20 15"
                  className="animate-spin-slow origin-center"
                  style={{ transformBox: 'fill-box' }}
                />
                
                {/* Middle Ring (Dotted) */}
                <circle 
                  cx="325" cy="325" r="240" 
                  fill="none" 
                  stroke="rgba(0, 130, 255, 0.8)" 
                  strokeWidth="2" 
                  strokeDasharray="1 15"
                  strokeLinecap="round"
                  className="animate-spin-reverse-slow origin-center"
                  style={{ transformBox: 'fill-box' }}
                />
                
                {/* Inner Ring (Triple Layered for detail) */}
                <circle cx="325" cy="325" r="175" fill="none" stroke="rgba(0, 242, 255, 0.2)" strokeWidth="1" />
                <circle 
                  cx="325" cy="325" r="175" 
                  fill="none" 
                  stroke="rgba(0, 242, 255, 0.9)" 
                  strokeWidth="2" 
                  strokeDasharray="80 300"
                  className="animate-spin-fast origin-center"
                  style={{ transformBox: 'fill-box' }}
                />
              </svg>

              {/* Core Light Generator */}
              <div 
                className="absolute top-1/2 left-1/2 w-[200px] h-[200px] rounded-full opacity-50" 
                style={{ 
                  transform: 'translate(-50%, -50%) translateZ(10px)',
                  background: 'radial-gradient(circle, var(--accent-cyan) 0%, transparent 75%)'
                }} 
              ></div>
            </div>

            {/* Spark Particles (Data transferring from base to logo as vertical lines) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[300px] pointer-events-none z-10">
              <div className="absolute left-[10%] w-[1px] h-12 spark-particle" style={{ animationDelay: '0s' }}></div>
              <div className="absolute left-[35%] w-[1px] h-8 spark-particle" style={{ animationDelay: '1.2s' }}></div>
              <div className="absolute left-[65%] w-[2px] h-16 spark-particle" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute left-[90%] w-[1px] h-10 spark-particle" style={{ animationDelay: '2.5s' }}></div>
              <div className="absolute left-[50%] w-[1px] h-6 spark-particle" style={{ animationDelay: '3.1s' }}></div>
            </div>

            {/* The Main Logo (Floating Cinematically in the center) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] animate-float-cinematic z-20 will-change-transform" style={{ transformStyle: 'preserve-3d' }}>
              {/* Radial Base Glow */}
              <div 
                className="absolute inset-0 rounded-full scale-75 animate-pulse-glow"
                style={{ background: 'radial-gradient(circle, rgba(0, 242, 255, 0.2) 0%, transparent 70%)', transform: 'translateZ(-1px)' }}
              ></div>
              
              {/* Dynamic Image Glow (Dual-Layer Trick for high performance) */}
              <div className="absolute inset-0 scale-100 animate-pulse-glow" style={{ transform: 'translateZ(0px)' }}>
                <Image 
                  src="/images/logo-principal.png" 
                  alt="" 
                  fill
                  className="object-contain logo-glow-layer"
                  priority
                />
              </div>
              
              {/* Main Sharp Logo */}
              <Image 
                src="/images/logo-principal.png" 
                alt="Aether Solutions Logo" 
                fill
                className="object-contain brightness-110"
                priority
                style={{ transform: 'translateZ(1px)' }}
              />
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
