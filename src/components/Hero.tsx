"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("/#")) {
      const id = href.replace("/#", "");
      const element = document.getElementById(id);
      if (element) {
        e.preventDefault();
        const offset = 100; // Espaço para o header fixo
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
        
        window.history.pushState(null, "", href);
      }
    }
  };

  return (
    <section 
      className="relative min-h-0 md:min-h-[90vh] flex items-center px-8 pt-32 pb-0 md:pb-20 overflow-hidden will-change-transform" 
      style={{ transform: 'translateZ(0)', contain: 'paint' }}
    >
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 items-center">
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="z-10 flex flex-col gap-8 max-w-2xl"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-white/80 w-fit"
          >
            <span className="text-accent-cyan">✦</span> IA PARA UM FUTURO INTELIGENTE
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl lg:text-7xl font-light leading-tight tracking-tight text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]"
          >
            Infraestrutura <br />
            de IA para <br />
            <span className="font-normal">transformar o <br /> mundo.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-lg text-white/50 font-light leading-relaxed max-w-lg"
          >
            Aether Solutions constrói a infraestrutura de IA mais avançada do planeta para empresas que desejam escalar sem limites.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex flex-wrap gap-4 mt-4"
          >
            <Link 
              href="https://wa.me/55XXXXXXXXXXX?text=Olá,%20gostaria%20de%20falar%20com%20um%20especialista%20da%20Aether%20Solutions." 
              target="_blank"
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#0363F8] to-[#20A2F8] text-white font-bold shadow-[0_0_15px_rgba(3,99,248,0.3)] hover:shadow-[0_0_25px_rgba(3,99,248,0.5)] transition-all flex items-center gap-2"
            >
              Falar com Especialista
              <span className="text-xl">→</span>
            </Link>
            <Link 
              href="/#portfolio" 
              onClick={(e) => handleSmoothScroll(e, "/#portfolio")}
              className="px-8 py-4 rounded-xl border border-white/20 bg-[#000B1F] font-semibold text-white shadow-[0_0_15px_rgba(255,255,255,0.15)] hover:shadow-[0_0_20px_rgba(255,255,255,0.25)] hover:bg-white/5 transition-all"
            >
              Conheça o produto
            </Link>
          </motion.div>
        </motion.div>

        {/* Right Content - Static Disc with Energy Waves */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="relative flex items-center justify-center min-h-[280px] md:min-h-[500px] mt-8 md:mt-0"
        >
          <div className="relative z-10 w-full aspect-square flex items-center justify-center">
            
            {/* High-Performance SVG Tech Portal Base */}
            <div 
              className="absolute top-1/2 left-1/2 w-[350px] h-[350px] md:w-[650px] md:h-[650px] lg:w-[850px] lg:h-[850px] pointer-events-none mt-20 md:mt-40 will-change-transform"
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
                className="absolute top-1/2 left-1/2 w-[120px] h-[120px] md:w-[200px] md:h-[200px] rounded-full opacity-50" 
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
            <motion.div 
              initial={{ y: 0 }}
              animate={{ y: [-10, 10, -10] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[380px] md:h-[380px] lg:w-[500px] lg:h-[500px] z-20"
            >
              <Image 
                src="/images/logo-principal.png" 
                alt="Aether Solutions Logo" 
                fill
                className="object-contain brightness-110 neon-glow"
                priority
              />
            </motion.div>
            
          </div>
        </motion.div>
      </div>
    </section>
  );
}
