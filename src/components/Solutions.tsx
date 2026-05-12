"use client";

import Link from "next/link";
import { FiLayout, FiCpu, FiMessageSquare } from "react-icons/fi";
import { motion, Variants } from "framer-motion";

export default function Solutions() {
  const solutions = [
    {
      title: "Agentes de IA",
      description: "Agentes inteligentes que atendem seus clientes no WhatsApp e sites com linguagem natural.",
      icon: <FiCpu className="w-8 h-8 text-accent-cyan" />,
      href: "/solucoes/agentes",
    },
    {
      title: "Criação de Sites",
      description: "Sites ultra-velozes com design futurista e otimização total para conversão.",
      icon: <FiLayout className="w-8 h-8 text-accent-cyan" />,
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
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        >
          {solutions.map((sol, idx) => (
            <motion.div key={idx} variants={itemVariants}>
              <Link 
                href={sol.href}
                className="relative p-10 pt-16 rounded-[32px] bg-white/[0.02] backdrop-blur-xl border border-[#084B6E] flex flex-col items-center text-center group hover:bg-white/[0.05] hover:border-[#0363F8]/30 hover:shadow-[0_0_60px_rgba(8,75,110,0.3)] hover:translate-y-3 transition-all duration-500 cursor-pointer shadow-[0_0_20px_rgba(8,75,110,0.1)] h-full"
              >
                {/* Icon Box - Glued to the top */}
                <div className="absolute top-0 -translate-y-1/2 p-5 rounded-2xl bg-[#000B1F]/80 backdrop-blur-lg border border-[#084B6E] shadow-[0_0_30px_rgba(8,75,110,0.2)] group-hover:shadow-[0_0_40px_rgba(0,242,255,0.3)] group-hover:border-accent-cyan/40 transition-all duration-500">
                  {sol.icon}
                </div>

                <h3 className="text-2xl font-normal text-white mb-6 group-hover:text-accent-cyan transition-colors tracking-tight">
                  {sol.title}
                </h3>
                <p className="text-white/40 text-sm font-light leading-relaxed">
                  {sol.description}
                </p>
                
                <div className="mt-8 flex items-center gap-2 text-accent-cyan text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                  Saber mais <span className="text-lg">→</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
