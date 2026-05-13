"use client";

import { FiArrowRight, FiZap } from "react-icons/fi";
import { motion } from "framer-motion";
import Link from "next/link";

export default function CTA() {
  return (
    <section id="contato" className="py-32 bg-[#020F22] relative overflow-hidden">
      {/* Background Glow Effect */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#0363F8]/10 blur-[120px] rounded-full pointer-events-none" 
      />
      
      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center">
        {/* Top Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 flex items-center gap-2 px-4 py-2 rounded-full border border-[#084B6E] bg-[#0A1435] shadow-[0_0_15px_rgba(8,75,110,0.3)]"
        >
          <FiZap className="text-accent-cyan w-4 h-4 animate-pulse" />
          <span className="text-[10px] tracking-[0.2em] font-medium text-white/80 uppercase">
            Pronto para o futuro?
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl font-semibold text-white mb-12 leading-tight tracking-tight max-w-4xl"
        >
          O futuro não espera. <br />
          <span className="text-white">Construa com a Aether.</span>
        </motion.h2>

        {/* Centralized Button */}
        <Link 
          href="https://wa.me/55XXXXXXXXXXX?text=Olá,%20gostaria%20de%20falar%20com%20um%20especialista%20da%20Aether%20Solutions." 
          target="_blank"
        >
          <motion.button 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="group relative px-10 py-5 rounded-2xl bg-[#0363F8] text-white font-semibold text-lg hover:bg-[#0363F8]/90 transition-all duration-500 shadow-[0_0_30px_rgba(3,99,248,0.4)] hover:shadow-[0_0_50px_rgba(3,99,248,0.6)] hover:scale-105 flex items-center gap-3"
          >
            Entrar em Contato
            <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </Link>

        {/* Decorative Bottom Line */}
        <motion.div 
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: "100%", opacity: 0.5 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-32 max-w-5xl h-px bg-gradient-to-r from-transparent via-[#084B6E] to-transparent" 
        />
      </div>
    </section>
  );
}
