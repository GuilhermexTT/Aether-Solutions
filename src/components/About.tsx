"use client";

import { FiCpu, FiZap, FiTarget, FiUsers } from "react-icons/fi";
import { motion, Variants } from "framer-motion";

export default function About() {
  const features = [
    {
      icon: <FiCpu className="w-6 h-6 text-accent-cyan" />,
      title: "Inovação",
      description: "Tecnologia de ponta em IA e automação",
    },
    {
      icon: <FiZap className="w-6 h-6 text-accent-cyan" />,
      title: "Velocidade",
      description: "Resultados rápidos e escaláveis",
    },
    {
      icon: <FiTarget className="w-6 h-6 text-accent-cyan" />,
      title: "Precisão",
      description: "Soluções personalizadas para cada negócio",
    },
    {
      icon: <FiUsers className="w-6 h-6 text-accent-cyan" />,
      title: "Parceria",
      description: "Crescemos junto com nossos clientes",
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
    <section id="sobre" className="py-16 px-8 bg-[#020F22] overflow-hidden">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#084B6E] bg-accent-cyan/5 text-[10px] font-medium text-white/80 w-fit uppercase tracking-widest shadow-[0_0_15px_rgba(8,75,110,0.2)]">
            <FiUsers className="text-xs text-accent-cyan" /> Sobre a Aether Solutions
          </div>

          <h2 className="text-4xl lg:text-5xl font-light leading-tight text-white">
            Transformando negócios com <br />
            <span className="text-accent-cyan font-normal drop-shadow-[0_0_15px_rgba(0,242,255,0.4)]">
              Inteligência Artificial
            </span>
          </h2>

          <div className="flex flex-col gap-6 text-white/50 font-light text-lg leading-relaxed text-justify">
            <p>
              A <span className="text-white font-normal">Aether Solutions</span>{" "} não nasceu apenas para criar sites, mas para construir a infraestrutura onde o futuro dos negócios acontece. O nome &quot;Aether&quot; remete ao que é fundamental e invisível, mas que sustenta tudo ao seu redor. É exatamente assim que enxergamos a tecnologia uma base invisível, porém poderosa, que impulsiona o crescimento humano e empresarial.
            </p>
            <p>
              Nossa missão é simples, automatizar o atendimento para que empreendedores possam focar no que realmente importa crescer seus negócios. Com nossa tecnologia, você nunca mais perde um lead.
            </p>
            <p>
              Combinamos design excepcional com automação inteligente para criar experiências digitais que convertem visitantes em clientes.
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
              className="p-8 rounded-2xl bg-[#000B1F] border border-[#084B6E] hover:border-accent-cyan/30 hover:shadow-[0_0_40px_rgba(0,242,255,0.1)] hover:bg-[#001233] transition-all duration-500 group cursor-default shadow-[0_0_15px_rgba(8,75,110,0.1)]"
            >
              <div className="w-12 h-12 rounded-xl bg-accent-cyan/5 border border-[#084B6E]/40 flex items-center justify-center mb-6 group-hover:bg-accent-cyan/10 transition-all">
                {feature.icon}
              </div>
              <h3 className="text-xl font-normal text-white mb-3 tracking-wide">
                {feature.title}
              </h3>
              <p className="text-sm text-white/40 font-light leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
