"use client";

import { 
  FiMessageSquare, FiGlobe, FiCpu, FiActivity, 
  FiSettings, FiShield, FiDatabase, FiCloud, 
  FiCode, FiLayers 
} from "react-icons/fi";
import { motion, Variants } from "framer-motion";

interface ArchitectureProps {
  className?: string;
}

export default function Architecture({ className }: ArchitectureProps) {
  const layers = [
    {
      name: "INTERFACE LAYER",
      items: [
        { name: "WhatsApp", icon: <FiMessageSquare className="text-emerald-300" />, bg: "bg-emerald-500/15", border: "border-emerald-500/50", glow: "shadow-[0_0_15px_rgba(16,185,129,0.15)]" },
        { name: "Web Chat", icon: <FiGlobe className="text-blue-300" />, bg: "bg-blue-500/15", border: "border-blue-500/50", glow: "shadow-[0_0_15px_rgba(59,130,246,0.15)]" },
      ]
    },
    {
      name: "AI ENGINE",
      items: [
        { name: "NLP Processing", icon: <FiCpu className="text-cyan-300" />, bg: "bg-cyan-500/15", border: "border-cyan-500/50", glow: "shadow-[0_0_15px_rgba(6,182,212,0.15)]" },
        { name: "Context Engine", icon: <FiActivity className="text-sky-300" />, bg: "bg-sky-500/15", border: "border-sky-500/50", glow: "shadow-[0_0_15px_rgba(14,165,233,0.15)]" },
      ]
    },
    {
      name: "BUSINESS LOGIC",
      items: [
        { name: "Automation", icon: <FiSettings className="text-purple-300" />, bg: "bg-purple-500/15", border: "border-purple-500/50", glow: "shadow-[0_0_15px_rgba(168,85,247,0.15)]" },
        { name: "Security", icon: <FiShield className="text-rose-300" />, bg: "bg-rose-500/15", border: "border-rose-500/50", glow: "shadow-[0_0_15_rgba(244,63,94,0.15)]" },
      ]
    },
    {
      name: "DATA LAYER",
      items: [
        { name: "Database", icon: <FiDatabase className="text-amber-300" />, bg: "bg-amber-500/15", border: "border-amber-500/50", glow: "shadow-[0_0_15px_rgba(245,158,11,0.15)]" },
        { name: "Cloud Storage", icon: <FiCloud className="text-yellow-300" />, bg: "bg-yellow-500/15", border: "border-yellow-500/50", glow: "shadow-[0_0_15px_rgba(234,179,8,0.15)]" },
      ]
    }
  ];

  const stack = [
    { label: "LLM", name: "Google Gemini" },
    { label: "ORQUESTRAÇÃO", name: "n8n" },
    { label: "BANCO DE DADOS", name: "PostgreSQL" },
    { label: "INTEGRAÇÃO", name: "Evolution API" },
    { label: "RUNTIME", name: "Node.js" },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className={`py-24 px-8 bg-[#020F22] ${className || ""}`}>
      <div className="container mx-auto flex flex-col gap-24">
        
        {/* Architecture Section */}
        <div className="flex flex-col gap-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4"
          >
            <div className="p-3 rounded-xl bg-accent-cyan/10 border border-[#084B6E] shadow-[0_0_15px_rgba(8,75,110,0.2)]">
              <FiLayers className="text-accent-cyan text-xl" />
            </div>
            <h2 className="text-3xl font-normal text-white tracking-tight">Arquitetura em Camadas</h2>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {layers.map((layer, idx) => (
              <div key={idx} className="flex flex-col gap-6">
                <motion.div 
                  variants={itemVariants}
                  className="px-4 py-1.5 rounded-full border border-[#084B6E] bg-white/5 text-[10px] font-medium text-white/40 w-fit tracking-widest text-center mx-auto lg:mx-0 shadow-[0_0_15px_rgba(8,75,110,0.1)]"
                >
                  {layer.name}
                </motion.div>
                <div className="flex flex-col gap-4">
                  {layer.items.map((item, i) => (
                    <motion.div 
                      key={i} 
                      variants={itemVariants}
                      className={`p-5 rounded-2xl border ${item.border} ${item.bg} ${item.glow} flex items-center gap-4 group hover:shadow-[0_0_35px_rgba(255,255,255,0.08)] hover:scale-[1.02] transition-all duration-500 cursor-default`}
                    >
                      <div className="p-2.5 rounded-xl bg-black/20">
                        {item.icon}
                      </div>
                      <span className="text-white/80 font-normal tracking-wide">{item.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Tech Stack Section */}
        <div className="flex flex-col gap-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4"
          >
            <div className="p-3 rounded-xl bg-accent-cyan/10 border border-[#084B6E] shadow-[0_0_15px_rgba(8,75,110,0.2)]">
              <FiCode className="text-accent-cyan text-xl" />
            </div>
            <h2 className="text-3xl font-normal text-white tracking-tight">Stack Tecnológica</h2>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            {stack.map((item, idx) => (
              <motion.div 
                key={idx}
                variants={itemVariants}
                className="p-6 rounded-2xl bg-[#0A1435] border border-[#084B6E] flex flex-col gap-2 group hover:bg-[#0A224A] hover:border-accent-cyan/20 transition-all duration-500 shadow-[0_0_15px_rgba(8,75,110,0.1)]"
              >
                <span className="text-[10px] font-medium text-accent-cyan tracking-widest uppercase">{item.label}</span>
                <span className="text-white font-normal tracking-wide">{item.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
