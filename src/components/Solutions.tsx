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
    <section id="solucoes" className="py-20 px-8 bg-[#020F22]">
      <div className="container mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-24"
        >
          <div className="inline-block px-4 py-1.5 rounded-full border border-[#084B6E] bg-accent-cyan/5 text-[10px] font-bold text-accent-cyan uppercase tracking-[0.3em] mb-6">
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
          className="flex justify-center mb-10"
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
          {solutions.map((sol, idx) => (
            <motion.div key={idx} variants={itemVariants}>
              <Link 
                href={sol.href}
                className="relative p-8 md:p-12 pt-20 md:pt-32 pb-10 md:pb-16 rounded-[32px] md:rounded-[40px] bg-white/[0.02] backdrop-blur-xl border border-[#084B6E] flex flex-col items-center group hover:bg-white/[0.05] hover:border-[#0363F8]/30 hover:shadow-[0_0_60px_rgba(8,75,110,0.3)] hover:translate-y-3 transition-all duration-500 cursor-pointer shadow-[0_0_20px_rgba(8,75,110,0.1)] h-full"
              >
                {/* Icon Box - Flush with the top internal edge */}
                {/* Shape changed to a 'cube' (uniform square), smaller on mobile */}
                <div className="absolute top-0 p-4 md:p-6 rounded-b-xl md:rounded-b-2xl rounded-t-[16px] md:rounded-t-[20px] bg-[#000B1F]/80 backdrop-blur-lg 
                  border-accent-cyan/40 shadow-[0_0_40px_rgba(0,242,255,0.3)]
                  md:border-[#084B6E] md:shadow-[0_0_30px_rgba(8,75,110,0.2)] 
                  md:group-hover:shadow-[0_0_40px_rgba(0,242,255,0.3)] md:group-hover:border-accent-cyan/40 
                  transition-all duration-500">
                  {sol.icon}
                </div>

                <div className="text-center mb-6 md:mb-10">
                  <h3 className="text-2xl md:text-4xl font-bold text-white mb-4 md:mb-6 uppercase tracking-wider group-hover:text-accent-cyan transition-colors">
                    {sol.title}
                  </h3>
                  <p className="text-white/50 text-sm md:text-base font-light leading-relaxed max-w-sm mx-auto">
                    {sol.description}
                  </p>
                </div>

                {/* Features List */}
                <ul className="flex flex-col gap-3 md:gap-4 self-start w-full max-w-md mx-auto mb-10 md:mb-12">
                  {sol.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-3 text-white/70 text-xs md:text-sm font-light">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent-cyan shadow-[0_0_8px_rgba(0,242,255,0.8)] flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="mt-12 md:mt-auto pt-8 w-full flex justify-center border-t border-white/5">
                  <div className="flex items-center gap-3 px-8 py-4 rounded-xl bg-accent-cyan/10 border border-accent-cyan/40 text-accent-cyan text-xs font-bold uppercase tracking-widest group-hover:bg-accent-cyan group-hover:text-[#020F22] group-hover:shadow-[0_0_30px_rgba(0,242,255,0.4)] transition-all duration-500 shadow-[0_0_15px_rgba(0,242,255,0.1)] w-full justify-center">
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
              className="relative flex flex-col md:flex-row items-center gap-10 md:gap-16 p-8 md:p-12 rounded-[32px] md:rounded-[40px] bg-gradient-to-br from-accent-cyan/5 to-[#0363F8]/10 backdrop-blur-xl border border-accent-cyan/20 group hover:border-accent-cyan/50 hover:shadow-[0_0_80px_rgba(0,242,255,0.15)] hover:translate-y-1 transition-all duration-500 cursor-pointer shadow-[0_0_30px_rgba(0,242,255,0.05)] overflow-hidden h-full"
            >
              {/* Glow background decoration */}
              <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-accent-cyan/5 blur-3xl pointer-events-none group-hover:bg-accent-cyan/10 transition-all duration-700" />

              {/* Left: Icon + Heading */}
              <div className="flex flex-col items-center md:items-start text-center md:text-left flex-shrink-0 md:w-80">
                <div className="p-5 rounded-2xl bg-accent-cyan/10 border border-accent-cyan/30 mb-6 group-hover:border-accent-cyan/60 group-hover:shadow-[0_0_30px_rgba(0,242,255,0.3)] transition-all duration-500">
                  <FiZap className="w-8 h-8 text-accent-cyan" />
                </div>
                <div className="text-accent-cyan text-[10px] font-bold tracking-widest uppercase mb-3">Solução Personalizada</div>
                <h3 className="text-2xl md:text-4xl font-bold text-white uppercase tracking-wider mb-4 group-hover:text-accent-cyan transition-colors">
                  {customSolution.title}
                </h3>
                <p className="text-white/70 text-sm md:text-base font-light leading-relaxed italic">
                  &ldquo;{customSolution.tagline}&rdquo;
                </p>
              </div>

              {/* Divider */}
              <div className="hidden md:block w-px self-stretch bg-white/10 flex-shrink-0" />

              {/* Right: Description + Features + Button */}
              <div className="flex flex-col flex-1 gap-6">
                <p className="text-white/50 text-sm md:text-base font-light leading-relaxed">
                  {customSolution.description}
                </p>
                <ul className="flex flex-col gap-3">
                  {customSolution.bullets.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-white/70 text-sm font-light">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent-cyan shadow-[0_0_8px_rgba(0,242,255,0.8)] flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="pt-6 border-t border-white/5">
                  <div className="flex items-center gap-3 px-8 py-4 rounded-xl bg-accent-cyan/10 border border-accent-cyan/40 text-accent-cyan text-xs font-bold uppercase tracking-widest group-hover:bg-accent-cyan group-hover:text-[#020F22] group-hover:shadow-[0_0_30px_rgba(0,242,255,0.4)] transition-all duration-500 justify-center md:justify-start w-full md:w-fit">
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
