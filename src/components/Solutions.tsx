"use client";

import Link from "next/link";
import { FiLayout, FiCpu } from "react-icons/fi";
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
    <section className="py-20 px-8 bg-[#020F22]">
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
          className="flex justify-center mb-6"
        >
          <p className="text-white/20 text-[10px] uppercase tracking-[0.2em] font-medium animate-pulse italic">
            ✦ Clique nos cards para ver detalhes
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 max-w-6xl mx-auto"
        >
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
                <ul className="flex flex-col gap-3 md:gap-4 self-start w-full max-w-md mx-auto">
                  {sol.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-3 text-white/70 text-xs md:text-sm font-light">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent-cyan shadow-[0_0_8px_rgba(0,242,255,0.8)] flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="mt-8 md:mt-12 flex items-center gap-2 text-accent-cyan text-[10px] font-bold uppercase tracking-widest opacity-40 group-hover:opacity-100 transition-all duration-500 group-hover:translate-x-2">
                  Saber mais 
                  <motion.span 
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                    className="text-lg"
                  >
                    →
                  </motion.span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
