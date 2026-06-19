"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  FiLayers, 
  FiCheckCircle, 
  FiTrendingUp, 
  FiBarChart2, 
  FiBriefcase, 
  FiShield 
} from "react-icons/fi";

// Framer Motion Animation Variants for GPU performance optimizations
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
      when: "beforeChildren" as const,
      staggerChildren: 0.08
    }
  }
};

const itemLeftVariants = {
  hidden: { opacity: 0, x: -15 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: "easeOut" as const }
  }
};

const itemUpVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" as const }
  }
};

const tabletVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: (isMobile: boolean) => ({
    opacity: 1,
    y: 0,
    transition: isMobile
      ? { duration: 0.5, ease: "easeOut" as const }
      : { type: "spring" as const, stiffness: 60, damping: 20 }
  })
};

const benefitsContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1
    }
  }
};

const benefitItemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" as const }
  }
};

export default function AetherHub() {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    setIsMobile(window.innerWidth < 1024);
  }, []);

  const checkItems = [
    "Sistemas e ferramentas proprietárias",
    "Automação e inteligência operacional",
    "Soluções para alta performance",
    "Atualizações constantes e suporte dedicado"
  ];

  const bottomBenefits = [
    {
      icon: <FiTrendingUp className="text-accent-cyan w-5 h-5 md:w-6 md:h-6" />,
      text: "Performance em tempo real"
    },
    {
      icon: <FiBarChart2 className="text-accent-cyan w-5 h-5 md:w-6 md:h-6" />,
      text: "Dados e métricas inteligentes"
    },
    {
      icon: <FiBriefcase className="text-accent-cyan w-5 h-5 md:w-6 md:h-6" />,
      text: "Gestão financeira integrada"
    },
    {
      icon: <FiShield className="text-accent-cyan w-5 h-5 md:w-6 md:h-6" />,
      text: "Escalabilidade sem limites"
    }
  ];

  return (
    <section id="aether-hub" className="relative py-12 px-4 md:px-8 bg-[#020F22] overflow-hidden">
      {/* 1. Subtle High-Tech Grid Over the Whole Section (Desktop only to prevent mobile GPU lag) */}
      <div className="hidden lg:block absolute inset-0 bg-[linear-gradient(to_right,rgba(0,242,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,242,255,0.015)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none z-0" />

      {/* 2. Interactive/Pulsating Aurora Background Glows (GPU Accelerated CSS - Desktop only) */}
      <div className="hidden lg:block absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle_at_center,rgba(3,99,248,0.14)_0%,rgba(0,242,255,0.04)_40%,transparent_70%)] pointer-events-none z-0 animate-aurora-1" />
      <div className="hidden lg:block absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle_at_center,rgba(0,242,255,0.12)_0%,rgba(3,99,248,0.03)_40%,transparent_70%)] pointer-events-none z-0 animate-aurora-2" />

      {/* 3. Tech Rings rotating behind the card */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full border border-accent-cyan/5 pointer-events-none z-0 animate-spin-slow hidden lg:block" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] rounded-full border border-dashed border-[#0363F8]/10 pointer-events-none z-0 animate-spin-reverse-slow hidden lg:block" />

      {/* 4. Fine Spark/Star particles drifting in the background (Desktop only to prevent mobile filter: blur lag) */}
      <div className="hidden lg:block absolute inset-0 overflow-hidden pointer-events-none z-0 opacity-40">
        <div className="absolute top-[20%] left-[15%] w-1.5 h-1.5 bg-accent-cyan/70 rounded-full animate-float" style={{ animationDelay: '0s' }} />
        <div className="absolute top-[60%] left-[8%] w-1.5 h-1.5 bg-[#0363F8]/70 rounded-full animate-float" style={{ animationDelay: '1.5s', animationDuration: '8s' }} />
        <div className="absolute top-[75%] left-[85%] w-1.5 h-1.5 bg-accent-cyan/70 rounded-full animate-float" style={{ animationDelay: '3s', animationDuration: '7s' }} />
        <div className="absolute top-[15%] left-[78%] w-1 h-1 bg-[#0363F8]/60 rounded-full animate-float" style={{ animationDelay: '2s', animationDuration: '9s' }} />
        <div className="absolute top-[80%] left-[30%] w-2 h-2 bg-accent-cyan/50 rounded-full animate-float" style={{ animationDelay: '4.5s', animationDuration: '10s' }} />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Main Gateway Card with interactive glow backing */}
        <div className="relative group">
          {/* Card glow backing - pulses when hover on card (Desktop only to prevent mobile GPU lag) */}
          <div className="hidden lg:block absolute -inset-1 rounded-[36px] md:rounded-[44px] bg-gradient-to-r from-accent-cyan/15 to-[#0363F8]/15 opacity-40 group-hover:opacity-100 blur-2xl transition-all duration-700 pointer-events-none" />

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={cardVariants}
            className="relative rounded-[32px] md:rounded-[40px] bg-gradient-to-br from-[#031127]/95 via-[#051C3E]/90 to-[#010915]/98 border border-white/10 p-6 md:p-10 lg:p-14 overflow-hidden shadow-[0_0_30px_rgba(3,99,248,0.1)] lg:shadow-[0_0_80px_rgba(3,99,248,0.15)] group-hover:border-accent-cyan/20 transition-colors duration-700 will-change-transform"
          >
            {/* Subtle grid background inside the card */}
            <div className="absolute inset-0 opacity-[0.07] pointer-events-none" 
              style={{ 
                backgroundImage: `radial-gradient(circle at 2px 2px, rgba(0, 242, 255, 0.4) 1.5px, transparent 0)`,
                backgroundSize: '24px 24px' 
              }} 
            />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 relative z-10 items-center">
              {/* Left Content (Grid: 5 columns) */}
              <div className="lg:col-span-5 flex flex-col items-start">
                {/* Badge */}
                <motion.div 
                  variants={itemLeftVariants}
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent-cyan/30 bg-accent-cyan/10 text-[10px] md:text-xs font-bold tracking-[0.25em] text-accent-cyan uppercase mb-6"
                >
                  <FiLayers className="text-xs md:text-sm" /> ECOSSISTEMA ADISEA
                </motion.div>

                {/* Heading */}
                <motion.h2 
                  variants={itemUpVariants}
                  className="text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight mb-6"
                >
                  Conheça o <span className="bg-gradient-to-r from-accent-cyan via-[#00d1ff] to-[#0363F8] bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(0,242,255,0.2)]">Adisea Hub</span>
                </motion.h2>

                {/* Subheading */}
                <motion.p 
                  variants={itemUpVariants}
                  className="text-white/70 text-sm md:text-lg font-light leading-relaxed max-w-xl mb-8"
                >
                  A plataforma completa com todos os nossos produtos, ferramentas e soluções de IA para impulsionar o seu negócio.
                </motion.p>

                {/* Checkbox list */}
                <ul className="flex flex-col gap-4 mb-10 w-full">
                  {checkItems.map((item, idx) => (
                    <motion.li 
                      key={idx}
                      variants={itemLeftVariants}
                      className="flex items-center gap-3.5 text-white/90 text-sm md:text-base font-light"
                    >
                      <FiCheckCircle className="text-accent-cyan w-5 h-5 flex-shrink-0 lg:drop-shadow-[0_0_8px_rgba(0,242,255,0.5)] drop-shadow-none" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* Action CTA Button (Desktop only) */}
                <motion.div
                  variants={itemUpVariants}
                  className="hidden lg:block"
                >
                  <a
                    href="https://hub.aethersolutions.com.br"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-accent-cyan text-[#020F22] font-bold text-sm md:text-base shadow-[0_0_25px_rgba(0,242,255,0.3)] hover:shadow-[0_0_35px_rgba(0,242,255,0.6)] hover:scale-100 lg:hover:scale-105 transition-transform duration-300 group"
                  >
                    Acessar Adisea Hub
                    <span className="text-lg transition-transform duration-300 group-hover:translate-x-1.5">→</span>
                  </a>
                </motion.div>
              </div>

              {/* Right Content - Isometric Tablet (Grid: 7 columns) */}
              <div className="lg:col-span-7 flex flex-col items-center lg:items-end justify-center relative">
                {/* Backing Ambient Light Aura specifically for the tablet (Optimized Radial Gradient - High Performance) */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-[radial-gradient(circle_at_center,rgba(3,99,248,0.15)_0%,rgba(0,242,255,0.05)_45%,transparent_70%)] rounded-full pointer-events-none z-0" />
                
                {/* Extra radial spotlight glow right behind the tablet (Optimized Radial Gradient - High Performance) */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[radial-gradient(circle_at_center,rgba(0,242,255,0.15)_0%,transparent_60%)] rounded-full pointer-events-none z-0 animate-pulse-glow-mobile lg:animate-pulse-glow" />

                <motion.div
                  variants={tabletVariants}
                  custom={isMobile}
                  className="relative w-[340px] h-[240px] sm:w-[500px] sm:h-[350px] md:w-[600px] md:h-[420px] lg:w-[640px] lg:h-[440px] xl:w-[740px] xl:h-[510px] cursor-pointer z-10 hover:scale-100 lg:hover:scale-105 transition-transform duration-500 ease-out will-change-transform"
                >
                  <Image
                    src="/images/aether-hub-dashboard-v3.png"
                    alt="Adisea Hub Dashboard"
                    fill
                    sizes="(max-width: 640px) 340px, (max-width: 768px) 500px, (max-width: 1024px) 600px, (max-width: 1280px) 640px, 740px"
                    priority
                    className="object-contain"
                    unoptimized
                  />
                </motion.div>

                {/* Action CTA Button (Mobile only) */}
                <motion.div
                  variants={itemUpVariants}
                  className="mt-8 lg:hidden z-20"
                >
                  <a
                    href="https://hub.aethersolutions.com.br"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-accent-cyan text-[#020F22] font-bold text-sm shadow-[0_0_25px_rgba(0,242,255,0.3)] hover:shadow-[0_0_35px_rgba(0,242,255,0.6)] hover:scale-100 lg:hover:scale-105 transition-transform duration-300 group"
                  >
                    Acessar Adisea Hub
                    <span className="text-lg transition-transform duration-300 group-hover:translate-x-1.5">→</span>
                  </a>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Benefits Row */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={benefitsContainerVariants}
          className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 justify-items-center"
        >
          {bottomBenefits.map((benefit, idx) => (
            <motion.div 
              key={idx}
              variants={benefitItemVariants}
              className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left group"
            >
              <div className="p-3 rounded-lg bg-accent-cyan/5 border border-accent-cyan/10 group-hover:border-accent-cyan/30 group-hover:bg-accent-cyan/10 transition-[border-color,background-color] duration-300">
                {benefit.icon}
              </div>
              <span className="text-white/60 text-xs md:text-sm font-medium tracking-wide group-hover:text-white transition-colors duration-300">
                {benefit.text}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
