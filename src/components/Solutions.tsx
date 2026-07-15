"use client";

import Link from "next/link";
import { FiLayout, FiCpu, FiZap } from "react-icons/fi";
import { motion, Variants } from "framer-motion";

export default function Solutions() {
  const solutions = [
    {
      title: "Agentes de IA",
      description: "Atendimento inteligente 24/7 no WhatsApp com processamento em linguagem natural. Nunca mais perca um lead.",
      icon: <FiCpu className="w-8 h-8 text-accent-cyan" />,
      features: [
        "Respostas instantâneas e contextuais",
        "Integração com WhatsApp Business API",
        "Aprendizado contínuo com seus dados",
        "Qualificação automática de leads",
        "Dashboard de analytics em tempo real"
      ],
      href: "/solucoes/agentes",
    },
    {
      title: "Criação de Sites",
      description: "Sites ultra-velozes com design futurista e otimização total para conversão e performance extrema.",
      icon: <FiLayout className="w-8 h-8 text-accent-cyan" />,
      features: [
        "Design futurista e responsivo",
        "Otimização de SEO (Core Web Vitals)",
        "Hospedagem de alta disponibilidade",
        "Segurança avançada com SSL",
        "Painel de controle administrativo"
      ],
      href: "/solucoes/sites",
    },
  ];

  const customSolution = {
    title: "Sob Medida",
    tagline: "Tem um problema específico? A gente resolve.",
    description: "Não encontrou o que precisa? Nós somos uma empresa de soluções — conte seu desafio e juntos vamos descobrir se existe um caminho tecnológico para resolvê-lo.",
    bullets: [
      "Diagnóstico gratuito do seu problema",
      "Avaliação de viabilidade técnica e financeira",
      "Planejamento e arquitetura da solução",
      "Desenvolvimento de aplicações e sistemas",
      "Decisão transparente: vamos ou não vamos?",
    ],
    href: "/solucoes/personalizado",
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    },
  };

  return (
    <section id="solucoes" className="relative py-16 md:py-20 px-8 bg-[#020F22] overflow-hidden">
      {/* High-Tech Grid Over the Whole Section */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,242,255,0.012)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,242,255,0.012)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none z-0" />

      {/* Subtle Aurora Ambient Lights */}
      <div className="absolute top-1/4 left-10 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle_at_center,rgba(0,242,255,0.05)_0%,transparent_70%)] pointer-events-none z-0" />
      <div className="absolute bottom-1/4 right-10 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle_at_center,rgba(3,99,248,0.06)_0%,transparent_70%)] pointer-events-none z-0" />

      <div className="container mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-16 md:mb-20"
        >
          <div className="inline-block px-4 py-1.5 rounded-full border border-accent-cyan/30 bg-accent-cyan/10 text-[10px] font-bold text-accent-cyan uppercase tracking-[0.3em] mb-6">
            Nossas Soluções
          </div>
          <h2 className="text-4xl md:text-6xl font-light leading-tight text-white max-w-4xl">
            Tecnologia de ponta para <br />
            <span className="text-accent-cyan font-normal drop-shadow-[0_0_15px_rgba(0,242,255,0.4)]">
              escalar seu negócio
            </span>
          </h2>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="flex justify-center mb-10 lg:mb-12"
        >
          <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-white/10 bg-white/5 text-white/60 text-[10px] uppercase tracking-[0.2em] font-medium animate-bounce shadow-lg">
            <span className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse"></span>
            Selecione uma opção abaixo
          </div>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col gap-8 md:gap-10 max-w-6xl mx-auto"
        >
          {/* Top 2 cards side by side */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 pt-6">
            {solutions.map((sol, idx) => (
              <motion.div key={idx} variants={itemVariants} className="h-full">
                <Link 
                  href={sol.href}
                  className="relative p-6 md:p-8 lg:p-10 pt-16 md:pt-20 pb-8 rounded-[32px] md:rounded-[40px] bg-gradient-to-b from-[#031127]/60 to-[#010915]/80 backdrop-blur-xl border border-white/10 flex flex-col items-center group hover:bg-[#03132c]/80 hover:border-accent-cyan/30 hover:shadow-[0_0_50px_rgba(0,242,255,0.06)] hover:-translate-y-1.5 transition-all duration-500 cursor-pointer shadow-[0_15px_35px_rgba(0,0,0,0.3)] h-full"
                >
                  {/* Floating Elevated Icon Box */}
                  <div className="absolute top-0 -translate-y-1/2 p-4 lg:p-5 rounded-2xl bg-gradient-to-b from-[#031127] to-[#010915] border border-white/10 shadow-[0_10px_25px_rgba(0,0,0,0.5)] group-hover:border-accent-cyan/40 group-hover:shadow-[0_0_30px_rgba(0,242,255,0.25)] transition-all duration-500">
                    <div className="relative z-10">{sol.icon}</div>
                    {/* Soft ambient light inside icon box */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,242,255,0.12)_0%,transparent_70%)] rounded-2xl pointer-events-none" />
                  </div>

                  <div className="text-center mb-6 md:mb-8">
                    <h3 className="text-lg md:text-xl font-semibold text-white mb-3 uppercase tracking-widest group-hover:text-accent-cyan transition-colors">
                      {sol.title}
                    </h3>
                    <p className="text-white/60 text-sm font-light leading-relaxed max-w-sm mx-auto">
                      {sol.description}
                    </p>
                  </div>

                  {/* Features List */}
                  <ul className="flex flex-col gap-3 self-start w-full max-w-md mx-auto mb-8">
                    {sol.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-3 text-white/70 text-xs md:text-sm font-light">
                        {/* Elegant Custom Bullets */}
                        <div className="w-2 h-2 rounded-full border border-accent-cyan/50 bg-[#020c1b] flex items-center justify-center flex-shrink-0">
                          <div className="w-0.5 h-0.5 rounded-full bg-accent-cyan shadow-[0_0_4px_rgba(0,242,255,0.8)]" />
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-auto pt-6 w-full flex justify-center border-t border-white/[0.06]">
                    <div className="flex items-center gap-3 px-8 py-3 rounded-xl bg-accent-cyan/5 border border-accent-cyan/30 text-accent-cyan text-xs font-bold uppercase tracking-widest group-hover:bg-accent-cyan group-hover:text-[#020F22] group-hover:shadow-[0_0_25px_rgba(0,242,255,0.4)] transition-all duration-500 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] w-full justify-center">
                      Explorar Solução
                      <motion.span 
                        animate={{ x: [0, 5, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                        className="text-lg"
                      >
                        →
                      </motion.span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Bottom full-width card - Sob Medida */}
          <motion.div variants={itemVariants} className="w-full">
            <Link
              href={customSolution.href}
              className="relative flex flex-col md:flex-row items-center gap-6 md:gap-8 p-6 md:p-8 lg:p-10 rounded-[32px] md:rounded-[40px] bg-gradient-to-br from-[#031127]/60 via-[#051c3e]/40 to-[#010915]/70 border border-white/10 hover:border-accent-cyan/30 hover:shadow-[0_0_50px_rgba(0,242,255,0.06)] hover:-translate-y-0.5 transition-all duration-500 cursor-pointer shadow-[0_15px_35px_rgba(0,0,0,0.3)] overflow-hidden h-full"
            >
              {/* Inner ambient light gradient */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(0,242,255,0.04)_0%,transparent_60%)] pointer-events-none" />

              {/* Left: Icon + Heading */}
              <div className="flex flex-col items-center md:items-start text-center md:text-left flex-shrink-0 md:w-80 relative z-10">
                <div className="p-4 rounded-2xl bg-gradient-to-b from-[#031127] to-[#010915] border border-white/10 mb-4 group-hover:border-accent-cyan/40 group-hover:shadow-[0_0_30px_rgba(0,242,255,0.25)] transition-all duration-500">
                  <FiZap className="w-7 h-7 text-accent-cyan" />
                </div>
                <div className="text-accent-cyan text-[10px] font-bold tracking-widest uppercase mb-2">Solução Personalizada</div>
                <h3 className="text-xl md:text-2xl font-semibold text-white uppercase tracking-widest mb-3 group-hover:text-accent-cyan transition-colors">
                  {customSolution.title}
                </h3>
                <p className="text-white/80 text-sm font-light leading-relaxed italic">
                  &ldquo;{customSolution.tagline}&rdquo;
                </p>
              </div>

              {/* Divider */}
              <div className="hidden md:block w-px self-stretch bg-white/[0.08] flex-shrink-0" />

              {/* Right: Description + Features + Button */}
              <div className="flex flex-col flex-1 gap-4 relative z-10">
                <p className="text-white/50 text-sm font-light leading-relaxed">
                  {customSolution.description}
                </p>
                <ul className="flex flex-col gap-2.5">
                  {customSolution.bullets.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-white/70 text-xs md:text-sm font-light">
                      <div className="w-2 h-2 rounded-full border border-accent-cyan/50 bg-[#020c1b] flex items-center justify-center flex-shrink-0">
                        <div className="w-0.5 h-0.5 rounded-full bg-accent-cyan shadow-[0_0_4px_rgba(0,242,255,0.8)]" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="pt-5 border-t border-white/[0.06]">
                  <div className="flex items-center gap-3 px-8 py-3 rounded-xl bg-accent-cyan/5 border border-accent-cyan/30 text-accent-cyan text-xs font-bold uppercase tracking-widest hover:border-accent-cyan hover:bg-accent-cyan hover:text-[#020F22] group-hover:bg-accent-cyan group-hover:text-[#020F22] group-hover:shadow-[0_0_25px_rgba(0,242,255,0.4)] transition-all duration-500 justify-center md:justify-start w-full md:w-fit shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
                    Conte seu problema
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                      className="text-lg"
                    >
                      →
                    </motion.span>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
