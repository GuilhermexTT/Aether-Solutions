"use client";

import { FiCode } from "react-icons/fi";
import { motion } from "framer-motion";

export default function TechStack() {
  const techs = [
    { label: "FRONTEND", name: "Next.js", color: "text-white" },
    { label: "STYLING", name: "Tailwind CSS", color: "text-sky-400" },
    { label: "LANGUAGE", name: "TypeScript", color: "text-blue-400" },
    { label: "ANIMATION", name: "Framer Motion", color: "text-purple-400" },
    { label: "DATABASE", name: "Supabase", color: "text-emerald-400" },
    { label: "CMS", name: "Sanity.io", color: "text-rose-400" },
    { label: "ICONS", name: "React Icons", color: "text-orange-400" },
    { label: "DEPLOY", name: "Vercel", color: "text-white" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.4 }
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
            <FiCode className="text-accent-cyan w-5 h-5" />
          </div>
          <h3 className="text-2xl font-semibold tracking-tight">Tecnologias Utilizadas</h3>
        </motion.div>

        {/* Tech Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {techs.map((t, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              className="p-5 md:p-6 rounded-2xl bg-[#0A1435] border border-[#084B6E] flex flex-col gap-1.5 hover:border-accent-cyan/30 hover:bg-[#0A224A] active:bg-[#0A224A] transition-all duration-300 cursor-pointer shadow-[0_0_15px_rgba(8,75,110,0.1)]"
            >
              <span className={`text-[10px] font-bold tracking-widest ${t.color}`}>
                {t.label}
              </span>
              <span className="text-white font-medium tracking-tight">
                {t.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
