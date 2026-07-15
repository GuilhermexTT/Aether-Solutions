"use client";

import { FiCpu, FiZap, FiTarget, FiUsers } from "react-icons/fi";
import { motion, Variants } from "framer-motion";

export default function About() {
  const features = [
    {
      icon: <FiCpu className="w-6 h-6 text-accent-cyan" />,
      title: "Desenvolvimento Próprio",
      description: "Sistemas e sites criados do zero por nossa equipe técnica, sem depender de templates engessados ou prontos.",
    },
    {
      icon: <FiZap className="w-6 h-6 text-accent-cyan" />,
      title: "Soluções Sob Medida",
      description: "Alinhamos engenharia de software e IA para criar ferramentas que resolvem a dor específica do seu negócio.",
    },
    {
      icon: <FiTarget className="w-6 h-6 text-accent-cyan" />,
      title: "Foco em Performance",
      description: "Nossos produtos são otimizados para velocidade extrema, maximizando conversões e engajamento.",
    },
    {
      icon: <FiUsers className="w-6 h-6 text-accent-cyan" />,
      title: "Suporte & Evolução",
      description: "Acompanhamos de perto o crescimento da sua empresa, trazendo melhorias constantes e suporte dedicado.",
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: 20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="sobre" className="relative py-20 px-8 bg-[#020F22] overflow-hidden">
      {/* High-Tech Grid Over the Whole Section */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,242,255,0.008)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,242,255,0.008)_1px,transparent_1px)] bg-[size:5rem_5rem] [mask-image:radial-gradient(circle_at_center,rgba(0,0,0,0.8),transparent_100%)] pointer-events-none z-0" />

      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle_at_center,rgba(0,242,255,0.03)_0%,transparent_75%)] pointer-events-none z-0" />

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent-cyan/30 bg-accent-cyan/10 text-[9px] font-bold text-accent-cyan uppercase tracking-widest w-fit shadow-[0_0_15px_rgba(0,242,255,0.15)]">
            <FiUsers className="text-xs text-accent-cyan" /> Por que a Adisea
          </div>

          <h2 className="text-3xl md:text-5xl font-light leading-tight text-white">
            Construindo empresas <br />
            <span className="text-accent-cyan font-normal drop-shadow-[0_0_15px_rgba(0,242,255,0.4)]">
              preparadas para o futuro.
            </span>
          </h2>

          <div className="flex flex-col gap-5 text-white/60 font-light text-base md:text-lg leading-relaxed max-w-xl">
            <p>
              A <span className="text-white font-normal">Adisea</span> desenvolve soluções tecnológicas sob medida para empresas que buscam eficiência, automação inteligente e presença digital premium. Não criamos apenas sistemas: estruturamos a base digital para a escala do seu negócio.
            </p>
            <p>
              Combinamos design excepcional com inteligência artificial aplicada para eliminar gargalos operacionais, qualificar leads e otimizar processos internos. Entregamos tecnologia com propósito e foco total em resultados tangíveis.
            </p>
          </div>
        </motion.div>

        {/* Right Content - Cards Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="p-8 rounded-2xl bg-gradient-to-b from-[#031127]/60 to-[#010915]/85 backdrop-blur-xl border border-white/10 hover:border-accent-cyan/30 hover:shadow-[0_0_50px_rgba(0,242,255,0.06)] hover:-translate-y-1 transition-all duration-500 group cursor-default shadow-[0_10px_30px_rgba(0,0,0,0.3)]"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-b from-[#031127] to-[#010915] border border-white/10 flex items-center justify-center mb-6 group-hover:border-accent-cyan/40 group-hover:shadow-[0_0_20px_rgba(0,242,255,0.2)] transition-all">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 tracking-wide group-hover:text-accent-cyan transition-colors">
                {feature.title}
              </h3>
              <p className="text-sm text-white/50 font-light leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
