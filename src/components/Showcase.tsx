"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronLeft, FiChevronRight, FiStar, FiLayout } from "react-icons/fi";

const projects = [
  {
    id: 1,
    title: "Tainá Estética",
    category: "SITE PREMIUM",
    image: "/images/showcase/doutora.png",
    type: "Sites",
  },
  {
    id: 2,
    title: "AgentBot AI",
    category: "AGENTE WHATSAPP",
    image: "/images/showcase/saas.png", // Using saas image for agent placeholder
    type: "Agentes de IA",
  },
  {
    id: 3,
    title: "TechFlow Analytics",
    category: "DASHBOARD SAAS",
    image: "/images/showcase/real-estate.png", // Using real-estate image for dashboard placeholder
    type: "Dashboards",
  },
  {
    id: 4,
    title: "OAK VIZ",
    category: "LANDING PAGE",
    image: "/images/showcase/oak.png",
    type: "Sites",
  },
  {
    id: 5,
    title: "FitPro Academy",
    category: "LANDING PAGE",
    image: "/images/showcase/fitness.png",
    type: "Sites",
  },
  {
    id: 6,
    title: "Aether Solutions",
    category: "SITE CORPORATIVO",
    image: "/images/showcase/portfolio.png",
    type: "Sites",
  },
  {
    id: 7,
    title: "Smart Support",
    category: "AGENTE WHATSAPP",
    image: "/images/showcase/saas.png",
    type: "Agentes de IA",
  },
  {
    id: 8,
    title: "Finance Pro",
    category: "DASHBOARD SAAS",
    image: "/images/showcase/real-estate.png",
    type: "Dashboards",
  },
  {
    id: 9,
    title: "Global Agente",
    category: "AGENTE WHATSAPP",
    image: "/images/showcase/fitness.png",
    type: "Agentes de IA",
  },
];

const categories = [
  { name: "Todos os Projetos", filter: "Todos" },
  { name: "Sites", filter: "Sites" },
  { name: "Agentes de IA", filter: "Agentes de IA" },
  { name: "Dashboards", filter: "Dashboards" },
];

export default function Showcase() {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [showResults, setShowResults] = useState(false);
  const [activeCategory, setActiveCategory] = useState("Todos");

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const filteredProjects = activeCategory === "Todos" 
    ? projects 
    : projects.filter(p => p.type === activeCategory);

  const getCount = (filter: string) => {
    if (filter === "Todos") return projects.length;
    return projects.filter(p => p.type === filter).length;
  };

  return (
    <section className="relative py-24 min-h-[900px] overflow-hidden bg-[#000B1F]">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
        style={{ 
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(0, 242, 255, 0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px' 
        }} 
      />

      <div className="container mx-auto px-4 relative z-10">
        <AnimatePresence mode="wait">
          {!showResults ? (
            <motion.div
              key="carousel"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0, y: -100 }}
              transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
            >
              {/* Header Section */}
              <div className="flex flex-col items-center text-center mb-16">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-accent-cyan/30 bg-accent-cyan/10 text-[10px] font-bold tracking-widest text-accent-cyan uppercase mb-6"
                >
                  <FiStar className="text-xs" /> SHOWCASE DE ELITE: RESULTADOS REAIS
                </motion.div>
                
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="text-4xl md:text-6xl font-bold text-white tracking-tight"
                >
                  Projetos que <span className="text-accent-cyan drop-shadow-[0_0_15px_rgba(0,242,255,0.4)]">transformaram negócios</span>
                </motion.h2>
              </div>

              {/* Carousel Section */}
              <div className="relative flex items-center justify-center min-h-[400px] md:min-h-[500px]">
                {/* Navigation Arrows */}
                <button 
                  onClick={prevProject}
                  className="absolute left-4 md:left-20 z-30 p-4 rounded-full border border-white/10 bg-white/5 text-white/50 hover:text-accent-cyan hover:border-accent-cyan/50 hover:bg-accent-cyan/10 transition-all group shadow-xl"
                >
                  <FiChevronLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
                </button>

                <button 
                  onClick={nextProject}
                  className="absolute right-4 md:right-20 z-30 p-4 rounded-full border border-white/10 bg-white/5 text-white/50 hover:text-accent-cyan hover:border-accent-cyan/50 hover:bg-accent-cyan/10 transition-all group shadow-xl"
                >
                  <FiChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
                </button>

                {/* Cards Container */}
                <div className="flex items-center justify-center gap-4 md:gap-8 w-full max-w-6xl">
                  <AnimatePresence mode="popLayout">
                    {[-1, 0, 1].map((offset) => {
                      const index = (currentIndex + offset + projects.length) % projects.length;
                      const project = projects[index];
                      const isCenter = offset === 0;

                      return (
                        <motion.div
                          key={`${project.id}-${offset}`}
                          layout
                          initial={{ opacity: 0, scale: 0.8, x: offset * 100 }}
                          animate={{ 
                            opacity: isCenter ? 1 : 0.4, 
                            scale: isCenter ? 1.1 : 0.9,
                            x: 0,
                            zIndex: isCenter ? 20 : 10,
                          }}
                          exit={{ opacity: 0, scale: 0.8, x: -offset * 100 }}
                          transition={{ duration: 0.5, ease: "easeOut" }}
                          className={`relative rounded-3xl overflow-hidden cursor-pointer group flex-shrink-0
                            ${isCenter ? 'w-[320px] h-[220px] md:w-[600px] md:h-[400px]' : 'hidden md:block w-[280px] h-[180px] md:w-[450px] md:h-[300px]'}
                            border border-white/10 glass-morphism shadow-2xl`}
                        >
                          {/* Project Image */}
                          <Image 
                            src={project.image} 
                            alt={project.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-70"
                          />

                          {/* Overlay & Content */}
                          <div className={`absolute inset-0 bg-gradient-to-t from-[#000B1F] via-transparent to-transparent flex flex-col justify-end p-6 md:p-10
                            ${isCenter ? 'opacity-100' : 'opacity-0 md:group-hover:opacity-100'} transition-opacity duration-300`}>
                            
                            {isCenter && (
                              <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-accent-cyan/20 border border-accent-cyan/40 text-[10px] font-bold text-accent-cyan uppercase">
                                EM DESTAQUE
                              </div>
                            )}

                            <p className="text-accent-cyan text-xs font-bold tracking-widest mb-1 uppercase">{project.category}</p>
                            <h3 className="text-xl md:text-3xl font-bold text-white drop-shadow-lg">{project.title}</h3>
                          </div>

                          {/* Cyan Glow for center card */}
                          {isCenter && (
                            <div className="absolute inset-0 border-2 border-accent-cyan/30 rounded-3xl pointer-events-none shadow-[inset_0_0_50px_rgba(0,242,255,0.1)]" />
                          )}
                        </motion.div>
                      );
                    })}
                  </AnimatePresence>
                </div>
              </div>

              {/* Pagination Dots */}
              <div className="flex justify-center gap-3 mt-12 mb-12">
                {projects.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      currentIndex === idx ? "w-12 bg-accent-cyan shadow-[0_0_10px_rgba(0,242,255,0.8)]" : "w-1.5 bg-white/20 hover:bg-white/40"
                    }`}
                  />
                ))}
              </div>

              {/* CTA Button */}
              <div className="flex justify-center">
                <motion.button 
                  onClick={() => setShowResults(true)}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="px-10 py-4 rounded-xl bg-gradient-to-r from-[#0363F8] to-[#20A2F8] text-white font-bold shadow-[0_0_15px_rgba(3,99,248,0.3)] hover:shadow-[0_0_25px_rgba(3,99,248,0.5)] transition-all flex items-center gap-2 hover:scale-105"
                >
                  Ver resultados
                  <span className="text-xl">→</span>
                </motion.button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="results"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-full flex flex-col items-center"
            >
              <div className="flex flex-col items-center text-center mb-16">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-accent-cyan/30 bg-accent-cyan/10 text-[10px] font-bold tracking-widest text-accent-cyan uppercase mb-6"
                >
                  <FiLayout className="text-xs" /> PORTFÓLIO COMPLETO
                </motion.div>
                
                <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-4">
                  Nossa Galeria <span className="text-accent-cyan drop-shadow-[0_0_15px_rgba(0,242,255,0.4)]">Completa</span>
                </h2>
                <p className="text-white/50 max-w-xl mx-auto text-lg font-light">Explore todos os projetos que desenvolvemos para transformar a presença digital de nossos clientes</p>
              </div>

              {/* Filter Tabs */}
              <div className="flex flex-wrap justify-center gap-4 mb-20">
                {categories.map((cat) => (
                  <button
                    key={cat.filter}
                    onClick={() => setActiveCategory(cat.filter)}
                    className={`px-8 py-3 rounded-xl border transition-all duration-300 text-sm font-bold flex items-center gap-3
                      ${activeCategory === cat.filter 
                        ? "bg-white/[0.03] border-accent-cyan text-white shadow-[0_0_20px_rgba(0,242,255,0.2)]" 
                        : "border-white/5 bg-white/[0.02] text-white/40 hover:border-white/20 hover:text-white"}`}
                  >
                    {cat.name} 
                    <span className={`px-2 py-0.5 rounded-md text-[10px] ${activeCategory === cat.filter ? "bg-accent-cyan text-[#000B1F]" : "bg-white/10 text-white/40"}`}>
                      {getCount(cat.filter)}
                    </span>
                  </button>
                ))}
              </div>

              {/* Grid of Results */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-7xl px-4">
                {filteredProjects.map((project) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="relative aspect-[16/10] rounded-[32px] overflow-hidden border border-white/10 group cursor-pointer glass-morphism shadow-2xl"
                  >
                    <Image 
                      src={project.image} 
                      alt={project.title} 
                      fill 
                      className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-60" 
                    />
                    
                    {/* Project Info Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#000B1F] via-transparent to-transparent p-10 flex flex-col justify-between">
                      <div className="inline-flex items-center px-3 py-1 rounded-full bg-accent-cyan/10 border border-accent-cyan/30 text-[10px] font-bold text-accent-cyan uppercase tracking-tighter w-fit h-fit backdrop-blur-md">
                        {project.category}
                      </div>
                      
                      <h3 className="text-2xl font-bold text-white drop-shadow-lg">{project.title}</h3>
                    </div>

                    {/* Hover Glow */}
                    <div className="absolute inset-0 border-2 border-accent-cyan/0 group-hover:border-accent-cyan/20 rounded-[32px] transition-all duration-500 pointer-events-none" />
                  </motion.div>
                ))}
              </div>

              {/* Final CTA in Results */}
              <div className="mt-24 flex flex-col items-center text-center">
                <p className="text-white/40 mb-8 font-light italic">Quer ver seu projeto aqui? Vamos conversar sobre suas necessidades.</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 rounded-2xl bg-[#000B1F] border border-accent-cyan/50 text-white font-bold flex items-center gap-3 shadow-[0_0_30px_rgba(0,242,255,0.1)] hover:shadow-[0_0_40px_rgba(0,242,255,0.2)] transition-all"
                >
                  <FiStar className="text-accent-cyan" /> Iniciar Novo Projeto
                </motion.button>
              </div>

              <button 
                onClick={() => setShowResults(false)}
                className="mt-12 text-white/20 hover:text-accent-cyan transition-colors flex items-center gap-2 text-xs uppercase tracking-widest font-bold mb-10"
              >
                <FiChevronLeft /> Voltar ao carrossel
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
