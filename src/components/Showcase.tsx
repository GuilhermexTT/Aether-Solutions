"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronLeft, FiChevronRight, FiStar, FiLayout } from "react-icons/fi";

const projects = [
  {
    id: 1,
    title: "Dra Thaina Carvalho",
    slug: "taina-estetica",
    category: "SITE PREMIUM",
    image: "/images/showcase/doutora.png",
    type: "Sites",
  },
  {
    id: 2,
    title: "AgentBot AI",
    slug: "agentbot-ai",
    category: "AGENTE WHATSAPP",
    image: "https://res.cloudinary.com/drsv0whjm/image/upload/v1778900000/capaai_npclxn.jpg",
    type: "Agentes de IA",
    scale: 1.25,
  },
  {
    id: 3,
    title: "OAK VIZ",
    slug: "oak-viz",
    category: "LANDING PAGE",
    image: "/images/showcase/oak.png",
    type: "Sites",
  },
];

const categories = [
  { name: "Todos os Projetos", filter: "Todos" },
  { name: "Sites", filter: "Sites" },
  { name: "Agentes de IA", filter: "Agentes de IA" },
  { name: "Dashboards", filter: "Dashboards" },
];

export default function Showcase() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [activeCategory, setActiveCategory] = useState("Todos");

  const [direction, setDirection] = useState(0);

  const nextProject = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 0.9,
    }),
  };

  const filteredProjects = activeCategory === "Todos" 
    ? projects 
    : projects.filter(p => p.type === activeCategory);

  const getCount = (filter: string) => {
    if (filter === "Todos") return projects.length;
    return projects.filter(p => p.type === filter).length;
  };

  const handleSmoothScroll = (e: React.MouseEvent<HTMLButtonElement>, href: string) => {
    if (href.startsWith("/#")) {
      const id = href.replace("/#", "");
      const element = document.getElementById(id);
      if (element) {
        e.preventDefault();
        const offset = 100; // Espaço para o header fixo
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
        
        window.history.pushState(null, "", href);
      }
    }
  };

  return (
    <section id="portfolio" className="relative py-12 md:py-14 min-h-[600px] xl:min-h-[850px] overflow-hidden bg-[#020F22]">
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
              key="carousel-container"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="w-full flex flex-col items-center"
            >
              {/* Header Section */}
              <div className="flex flex-col items-center text-center mb-8 md:mb-12">
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
                  className="text-2xl md:text-4xl font-bold text-white tracking-tight"
                >
                  Projetos que <span className="text-accent-cyan drop-shadow-[0_0_15px_rgba(0,242,255,0.4)]">transformaram negócios</span>
                </motion.h2>
              </div>

              {/* Mobile Carousel (Horizontal Swipe) */}
              <div className="md:hidden flex gap-6 w-full px-4 mb-8 overflow-x-auto snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] pb-4">
                {projects.map((project, idx) => (
                  <div key={`mobile-${project.id}`} className="relative w-[92vw] flex-shrink-0 aspect-[4/5] rounded-[32px] overflow-hidden border border-white/10 bg-[#020F22]/50 backdrop-blur-xl snap-center">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      priority={idx < 2}
                      className="object-cover pointer-events-none"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#020F22] via-[#020F22]/40 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-8 w-full">
                      <p className="text-accent-cyan text-[10px] font-bold tracking-widest mb-2 uppercase">
                        {project.category}
                      </p>
                      <h2 className="text-2xl font-bold text-white mb-6 drop-shadow-md">
                        {project.title}
                      </h2>
                      <Link
                        href={`/portfolio/${project.slug}`}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#020F22] text-xs font-bold rounded-lg shadow-lg"
                      >
                        Ver projeto
                        <FiLayout />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>

              {/* Mobile Swipe Indicator */}
              <div className="md:hidden flex justify-center items-center gap-3 mt-0 mb-10 opacity-60">
                <FiChevronLeft className="w-3 h-3 text-accent-cyan animate-[pulse_2s_ease-in-out_infinite]" />
                <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-white/70">
                  Deslize para ver mais
                </span>
                <FiChevronRight className="w-3 h-3 text-accent-cyan animate-[pulse_2s_ease-in-out_infinite]" />
              </div>

              {/* Desktop Carousel (Stacked) */}
              <div className="hidden md:flex relative w-full max-w-[1600px] h-[350px] xl:h-[650px] items-center justify-center mb-0 overflow-hidden">
                <AnimatePresence mode="popLayout" initial={false}>
                  {[-1, 0, 1].map((offset) => {
                    const index = (currentIndex + offset + projects.length) % projects.length;
                    const project = projects[index];
                    const isCenter = offset === 0;

                    return (
                      <motion.div
                        key={`${project.id}-${offset}`}
                        initial={{ opacity: 0, scale: 0.8, x: offset * 300 }}
                        animate={{ 
                          opacity: isCenter ? 1 : 0.4, 
                          scale: isCenter ? 1.1 : 0.85, 
                          x: offset * (typeof window !== 'undefined' && window.innerWidth > 1400 ? 480 : 250),
                          zIndex: isCenter ? 30 : 10,
                          filter: isCenter ? "blur(0px)" : "blur(4px)"
                        }}
                        exit={{ opacity: 0, scale: 0.5, x: offset * 800 }}
                        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                        className="absolute w-[400px] h-[250px] xl:w-[800px] xl:h-[480px] rounded-[24px] xl:rounded-[40px] overflow-hidden border border-white/10 shadow-[0_0_100px_rgba(0,0,0,0.5)] cursor-pointer group glass-morphism"
                        onClick={() => isCenter ? null : offset > 0 ? nextProject() : prevProject()}
                      >
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className={`object-cover transition-transform duration-700 ${isCenter ? "group-hover:scale-110" : ""}`}
                          style={{ transform: `scale(${project.scale || 1})` }}
                        />
                        <div className={`absolute inset-0 bg-gradient-to-t from-[#020F22] via-[#020F22]/20 to-transparent transition-opacity ${isCenter ? "opacity-100" : "opacity-40"}`} />
                        
                        {isCenter && (
                          <div className="absolute inset-0 border-2 border-accent-cyan/30 rounded-[40px] pointer-events-none shadow-[inset_0_0_80px_rgba(0,242,255,0.15)]" />
                        )}

                        <div className={`absolute bottom-0 left-0 p-6 xl:p-12 w-full transition-all duration-500 ${isCenter ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                          <p className="text-accent-cyan text-[8px] xl:text-xs font-bold tracking-[0.3em] mb-2 xl:mb-4 uppercase">{project.category}</p>
                          <h3 className="text-xl xl:text-5xl font-bold text-white mb-4 xl:mb-8 tracking-tight">{project.title}</h3>
                          <Link
                            href={`/portfolio/${project.slug}`}
                            className="inline-flex items-center gap-2 px-6 py-3 xl:px-8 xl:py-4 bg-white text-[#020F22] text-xs xl:text-base font-bold rounded-xl hover:bg-accent-cyan transition-colors"
                          >
                            Ver projeto completo
                            <FiLayout />
                          </Link>
                        </div>
                      </motion.div>
                    );
                  })}
                </AnimatePresence>

                {/* Desktop Navigation Arrows */}
                <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-20 pointer-events-none z-50">
                  <button onClick={prevProject} className="p-6 rounded-full border border-white/10 bg-white/5 text-white/50 hover:text-white hover:bg-white/10 hover:border-accent-cyan transition-all pointer-events-auto backdrop-blur-xl group">
                    <FiChevronLeft size={32} className="group-hover:-translate-x-1 transition-transform" />
                  </button>
                  <button onClick={nextProject} className="p-6 rounded-full border border-white/10 bg-white/5 text-white/50 hover:text-white hover:bg-white/10 hover:border-accent-cyan transition-all pointer-events-auto backdrop-blur-xl group">
                    <FiChevronRight size={32} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

              {/* Pagination Dots */}
              <div className="flex justify-center gap-3 mt-4 mb-8">
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
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
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
                    <span className={`px-2 py-0.5 rounded-md text-[10px] ${activeCategory === cat.filter ? "bg-accent-cyan text-[#020F22]" : "bg-white/10 text-white/40"}`}>
                      {getCount(cat.filter)}
                    </span>
                  </button>
                ))}
              </div>

              {/* Grid of Results */}
              <motion.div 
                variants={{
                  hidden: { opacity: 0 },
                  show: {
                    opacity: 1,
                    transition: { staggerChildren: 0.1 }
                  }
                }}
                initial="hidden"
                animate="show"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-7xl px-4"
              >
                {filteredProjects.map((project) => (
                  <motion.div
                    key={project.id}
                    variants={{
                      hidden: { opacity: 0, y: 30 },
                      show: { opacity: 1, y: 0 }
                    }}
                  >
                    <Link
                      href={`/portfolio/${project.slug}`}
                      className="relative aspect-[16/10] rounded-[32px] overflow-hidden border border-white/10 group cursor-pointer glass-morphism shadow-2xl block"
                    >
                      <Image 
                        src={project.image} 
                        alt={project.title} 
                        fill 
                        className="object-cover group-hover:scale-110 transition-transform duration-700 opacity-60" 
                        style={{ transform: `scale(${project.scale || 1})` }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#020F22] via-transparent to-transparent p-10 flex flex-col justify-between">
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-accent-cyan/10 border border-accent-cyan/30 text-[10px] font-bold text-accent-cyan uppercase tracking-tighter w-fit h-fit backdrop-blur-md">
                          {project.category}
                        </div>
                        <h3 className="text-2xl font-bold text-white drop-shadow-lg">{project.title}</h3>
                      </div>
                      <div className="absolute inset-0 border-2 border-accent-cyan/0 group-hover:border-accent-cyan/20 rounded-[32px] transition-all duration-500 pointer-events-none" />
                    </Link>
                  </motion.div>
                ))}
              </motion.div>

              {/* Final CTA in Results */}
              <div className="mt-24 flex flex-col items-center text-center">
                <p className="text-white/40 mb-8 font-light italic">Quer ver seu projeto aqui? Vamos conversar sobre suas necessidades.</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={(e) => handleSmoothScroll(e, "/#contato")}
                  className="px-8 py-4 rounded-2xl bg-[#020F22] border border-accent-cyan/50 text-white font-bold flex items-center gap-3 shadow-[0_0_30px_rgba(0,242,255,0.1)] hover:shadow-[0_0_40px_rgba(0,242,255,0.2)] transition-all"
                >
                  <FiStar className="text-accent-cyan" /> Iniciar Novo Projeto
                </motion.button>
              </div>

              {/* Back to Carousel */}
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
