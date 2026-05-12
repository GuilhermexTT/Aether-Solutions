"use client";

import { FiEye, FiZap, FiSmartphone, FiSearch, FiDisc } from "react-icons/fi";
import { motion } from "framer-motion";

export default function DesignPrinciples() {
  const principles = [
    {
      title: "Design Impactante",
      description: "Interfaces modernas que capturam atenção e transmitem profissionalismo.",
      icon: <FiEye className="w-5 h-5 text-purple-300" />,
      color: "purple",
      styles: "bg-purple-900/30 border-[#084B6E] shadow-[0_0_20px_rgba(8,75,110,0.1)] hover:border-purple-400 hover:shadow-[0_0_40px_rgba(168,85,247,0.25)]",
      iconBg: "bg-purple-500/20 border-[#084B6E]/40"
    },
    {
      title: "Performance Extrema",
      description: "Carregamento ultra-rápido com Core Web Vitals otimizados.",
      icon: <FiZap className="w-5 h-5 text-yellow-300" />,
      color: "yellow",
      styles: "bg-yellow-900/30 border-[#084B6E] shadow-[0_0_20px_rgba(8,75,110,0.1)] hover:border-yellow-400 hover:shadow-[0_0_40px_rgba(234,179,8,0.25)]",
      iconBg: "bg-yellow-500/20 border-[#084B6E]/40"
    },
    {
      title: "Mobile First",
      description: "Experiamência perfeita em qualquer dispositivo ou tamanho de tela.",
      icon: <FiSmartphone className="w-5 h-5 text-emerald-300" />,
      color: "green",
      styles: "bg-emerald-900/30 border-[#084B6E] shadow-[0_0_20px_rgba(8,75,110,0.1)] hover:border-emerald-400 hover:shadow-[0_0_40px_rgba(16,185,129,0.25)]",
      iconBg: "bg-emerald-500/20 border-[#084B6E]/40"
    },
    {
      title: "SEO Avançado",
      description: "Otimização completa para ranquear no Google e gerar tráfego orgânico.",
      icon: <FiSearch className="w-5 h-5 text-blue-300" />,
      color: "blue",
      styles: "bg-blue-900/30 border-[#084B6E] shadow-[0_0_20px_rgba(8,75,110,0.1)] hover:border-blue-400 hover:shadow-[0_0_40px_rgba(59,130,246,0.25)]",
      iconBg: "bg-blue-500/20 border-[#084B6E]/40"
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="py-20 bg-[#020F22] text-white">
      <div className="container mx-auto px-4 md:px-10">
        {/* Title with Icon */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-12"
        >
          <div className="p-3 rounded-xl bg-accent-cyan/10 border border-[#084B6E] shadow-[0_0_15px_rgba(8,75,110,0.2)]">
            <FiDisc className="text-accent-cyan w-5 h-5" />
          </div>
          <h3 className="text-2xl font-semibold tracking-tight">Princípios de Design</h3>
        </motion.div>

        {/* Grid of Cards */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {principles.map((p, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              className={`p-8 rounded-[24px] border transition-all duration-500 flex flex-col gap-6 ${p.styles} hover:-translate-y-2 hover:scale-[1.03] cursor-default`}
            >
              <div className={`w-12 h-12 rounded-xl border flex items-center justify-center ${p.iconBg}`}>
                {p.icon}
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="text-lg font-medium tracking-tight text-white/90">{p.title}</h4>
                <p className="text-white/40 text-xs leading-relaxed font-light">
                  {p.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
