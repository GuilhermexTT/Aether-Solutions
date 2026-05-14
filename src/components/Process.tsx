"use client";

import { FiSearch, FiPenTool, FiCode, FiZap, FiArrowRight, FiMonitor, FiMessageSquare, FiCpu, FiCheckCircle } from "react-icons/fi";
import { motion, Variants } from "framer-motion";

interface ProcessProps {
  className?: string;
  variant?: "sites" | "agents";
}

export default function Process({ className, variant = "sites" }: ProcessProps) {
  const stepsData = {
    sites: {
      badge: "Processo de Criação de Sites",
      title: "Da ideia ao ",
      titleHighlight: "lançamento",
      description: "Cada site é desenvolvido com atenção aos mínimos detalhes, combinando design excepcional, código limpo e performance otimizada.",
      label: "Nosso Processo",
      steps: [
        {
          number: "1",
          title: "Descoberta",
          description: "Entendemos seu negócio, público-alvo e objetivos.",
          icon: <FiSearch className="w-6 h-6 text-accent-cyan" />,
        },
        {
          number: "2",
          title: "Design",
          description: "Criamos wireframes e design UI/UX de alta fidelidade.",
          icon: <FiPenTool className="w-6 h-6 text-accent-cyan" />,
        },
        {
          number: "3",
          title: "Desenvolvimento",
          description: "Codificamos com React, Next.js e otimizações de performance.",
          icon: <FiCode className="w-6 h-6 text-accent-cyan" />,
        },
        {
          number: "4",
          title: "Lançamento",
          description: "Deploy, testes finais e monitoramento contínuo.",
          icon: <FiZap className="w-6 h-6 text-accent-cyan" />,
        },
      ]
    },
    agents: {
      badge: "Fluxo de Processamento",
      title: "Inteligência em ",
      titleHighlight: "Ação",
      description: "Nossos agentes de IA seguem um fluxo contínuo e inteligente para analisar, executar e garantir respostas precisas imediatamente.",
      label: "Fluxo de Processamento",
      steps: [
        {
          number: "1",
          title: "Recepção",
          description: "Cliente envia mensagem via WhatsApp ou site.",
          icon: <FiMessageSquare className="w-6 h-6 text-accent-cyan" />,
        },
        {
          number: "2",
          title: "Processamento",
          description: "IA analisa contexto e intenção usando NLP avançado.",
          icon: <FiCpu className="w-6 h-6 text-accent-cyan" />,
        },
        {
          number: "3",
          title: "Execução",
          description: "Agente executa ações e busca informações relevantes.",
          icon: <FiZap className="w-6 h-6 text-accent-cyan" />,
        },
        {
          number: "4",
          title: "Resposta",
          description: "Retorna resposta personalizada em linguagem natural.",
          icon: <FiCheckCircle className="w-6 h-6 text-accent-cyan" />,
        },
      ]
    }
  };

  const currentData = stepsData[variant];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section className={`py-20 bg-[#020F22] text-white ${className || ""}`}>
      <div className="container mx-auto px-4">
        {/* Top Badge */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mb-8"
        >
          <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#084B6E] bg-white/5 backdrop-blur-sm shadow-[0_0_15px_rgba(8,75,110,0.2)]">
            <FiMonitor className="text-accent-cyan w-4 h-4" />
            <span className="text-[10px] tracking-[0.2em] font-medium text-white/80 uppercase">
              {currentData.badge}
            </span>
          </div>
        </motion.div>

        {/* Header Title */}
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl lg:text-6xl font-light mb-6"
          >
            {currentData.title}<span className="text-accent-cyan font-normal drop-shadow-[0_0_15px_rgba(0,242,255,0.4)]">{currentData.titleHighlight}</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-white/40 font-light text-sm md:text-base max-w-3xl mx-auto leading-relaxed"
          >
            {currentData.description}
          </motion.p>
        </div>

        {/* Nosso Processo Label */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-16 ml-4 md:ml-10"
        >
           <div className="p-3 rounded-xl bg-accent-cyan/10 border border-[#084B6E] shadow-[0_0_15px_rgba(8,75,110,0.2)]">
             <FiMonitor className="text-accent-cyan w-5 h-5" />
           </div>
           <h3 className="text-2xl font-semibold tracking-tight">{currentData.label}</h3>
        </motion.div>

        {/* Steps Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4 relative"
        >
          {currentData.steps.map((step, idx) => (
            <motion.div key={idx} variants={itemVariants} className="flex flex-col items-center text-center group relative">
              {/* Arrow (Desktop Only) */}
              {idx < currentData.steps.length - 1 && (
                <div className="hidden md:block absolute top-12 -right-4 translate-x-1/2 z-10 text-white/20">
                  <FiArrowRight className="w-6 h-6" />
                </div>
              )}

              {/* Icon Container with Glow */}
              <div className="relative mb-8">
                <div className="w-20 h-20 rounded-2xl bg-[#0D214D] border border-[#084B6E] flex items-center justify-center shadow-[0_0_30px_rgba(8,75,110,0.2)] group-hover:border-accent-cyan/60 group-hover:shadow-[0_0_50px_rgba(0,242,255,0.3)] group-hover:scale-110 transition-all duration-500">
                  {step.icon}
                </div>
                {/* Step Number Badge */}
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent-cyan text-[#020F22] text-xs font-bold flex items-center justify-center shadow-[0_0_15px_rgba(0,242,255,0.5)]">
                  {step.number}
                </div>
              </div>

              {/* Text Content */}
              <h4 className="text-xl font-medium mb-3 tracking-tight group-hover:text-accent-cyan transition-colors">{step.title}</h4>
              <p className="text-white/40 text-xs md:text-sm leading-relaxed max-w-[200px]">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
