"use client";

import React, { useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowLeft, FiExternalLink, FiLayout } from "react-icons/fi";
import Navbar from "@/components/Navbar";

// Mock data for the demonstration
const projectData = {
  "taina-estetica": {
    title: "Dra Thaina Carvalho",
    category: "Site Premium & Branding",
    description: "Transformação digital completa para clínica de estética de luxo. Implementamos uma interface de alta conversão integrada com sistemas de agendamento e galeria de resultados.",
    client: "Dra Thaina Carvalho",
    year: "2026",
    services: ["Web Design", "SEO", "Agendamento Online"],
    gallery: [
      { type: "video", url: "https://res.cloudinary.com/drsv0whjm/video/upload/v1777823434/LadingPage_DraThaina_ooewtj.mp4", span: "md:col-span-2 md:row-span-2" },
      { type: "image", url: "https://res.cloudinary.com/drsv0whjm/image/upload/v1777823425/1_crlqoa.png", span: "row-span-1" },
      { type: "image", url: "https://res.cloudinary.com/drsv0whjm/image/upload/v1777823424/2_kpcsua.png", span: "row-span-1" },
      { type: "image", url: "https://res.cloudinary.com/drsv0whjm/image/upload/v1777823425/3_oxy1ri.png", span: "row-span-1" },
      { type: "image", url: "https://res.cloudinary.com/drsv0whjm/image/upload/v1777823424/4_zwpet1.png", span: "row-span-1" },
      { type: "image", url: "https://res.cloudinary.com/drsv0whjm/image/upload/v1777823425/5_yvwalg.png", span: "md:col-span-2 row-span-1" },
      { type: "image", url: "https://res.cloudinary.com/drsv0whjm/image/upload/v1777823425/6_gaqvys.png", span: "row-span-1" },
      { type: "image", url: "https://res.cloudinary.com/drsv0whjm/image/upload/v1777823424/7_b8o582.png", span: "row-span-1" },
      { type: "image", url: "https://res.cloudinary.com/drsv0whjm/image/upload/v1777823424/8_ajwsr9.png", span: "row-span-1" },
      { type: "image", url: "https://res.cloudinary.com/drsv0whjm/image/upload/v1777823425/9_x2chqj.png", span: "row-span-1" },
    ]
  }
};
export default function ProjectPage() {
  const params = useParams();
  const slug = params.slug as string;
  const project = projectData[slug as keyof typeof projectData] || projectData["taina-estetica"];

  const [selectedMedia, setSelectedMedia] = useState<number | null>(null);
  const [direction, setDirection] = useState(0);

  const nextMedia = () => {
    if (selectedMedia === null) return;
    setDirection(1);
    setSelectedMedia((prev) => (prev! + 1) % project.gallery.length);
  };

  const prevMedia = () => {
    if (selectedMedia === null) return;
    setDirection(-1);
    setSelectedMedia((prev) => (prev! - 1 + project.gallery.length) % project.gallery.length);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
    }),
  };

  // Block body scroll when Lightbox is open
  React.useEffect(() => {
    if (selectedMedia !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [selectedMedia]);

  // Keyboard navigation for Lightbox
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedMedia === null) return;
      if (e.key === "Escape") setSelectedMedia(null);
      if (e.key === "ArrowRight") nextMedia();
      if (e.key === "ArrowLeft") prevMedia();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedMedia]);

  return (
    <div className="min-h-screen bg-[#020F22] text-white overflow-x-hidden">
      <Navbar />
      
      <motion.main 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="pt-40 md:pt-48 pb-24 px-4 md:px-8 max-w-7xl mx-auto relative z-10"
      >
        {/* Back Button */}
        <Link href="/" className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5 text-[10px] font-bold tracking-widest text-white/50 uppercase mb-12 hover:bg-accent-cyan/20 hover:text-accent-cyan transition-all">
          <FiArrowLeft /> Voltar para Home
        </Link>

        {/* Project Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24 items-end">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-cyan/10 border border-accent-cyan/30 text-[10px] font-bold text-accent-cyan uppercase mb-6">
              <FiLayout className="text-xs" /> PROJETO EM DESTAQUE
            </div>
            <h1 className="text-4xl md:text-7xl font-bold mb-6 tracking-tight text-white leading-tight">
              {project.title}
            </h1>
            <p className="text-white/70 text-lg md:text-xl font-light leading-relaxed max-w-xl">
              {project.description}
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-8 border-l border-white/10 pl-12"
          >
            <div>
              <p className="text-accent-cyan text-[10px] font-bold uppercase tracking-widest mb-2">Cliente</p>
              <p className="text-white/90 text-lg font-light">{project.client}</p>
            </div>
            <div>
              <p className="text-accent-cyan text-[10px] font-bold uppercase tracking-widest mb-2">Ano</p>
              <p className="text-white/90 text-lg font-light">{project.year}</p>
            </div>
            <div className="col-span-2">
              <p className="text-accent-cyan text-[10px] font-bold uppercase tracking-widest mb-2">Serviços</p>
              <div className="flex flex-wrap gap-2">
                {project.services.map((s, i) => (
                  <span key={i} className="px-3 py-1 rounded-lg bg-white/10 border border-white/20 text-xs font-light text-white">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Pinterest Style Gallery - Respecting Aspect Ratio */}
        <motion.div 
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.05, delayChildren: 0.2 }
            }
          }}
          initial="hidden"
          animate="show"
          className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6 min-h-[500px]"
        >
          {project.gallery.map((item, idx) => (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 }
              }}
              onClick={() => setSelectedMedia(idx)}
              className={`relative rounded-[32px] overflow-hidden border border-white/10 group shadow-2xl cursor-pointer break-inside-avoid`}
            >
              {item.type === "video" ? (
                <div className="relative w-full bg-black">
                  <video 
                    src={item.url} 
                    className="w-full h-auto"
                    playsInline
                    muted
                    autoPlay
                    loop
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40">
                    <div className="w-16 h-16 rounded-full border border-accent-cyan bg-accent-cyan/20 flex items-center justify-center text-accent-cyan backdrop-blur-md">
                      <FiExternalLink size={24} />
                    </div>
                  </div>
                </div>
              ) : (
                <>
                  <img 
                    src={item.url} 
                    alt={`${project.title} gallery ${idx}`}
                    className="w-full h-auto transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-accent-cyan/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  <div className="absolute inset-0 border-2 border-accent-cyan/0 group-hover:border-accent-cyan/20 rounded-[32px] transition-all duration-500 pointer-events-none" />
                </>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Lightbox Component */}
        <AnimatePresence>
          {selectedMedia !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[200] bg-[#020F22] flex items-center justify-center p-4 md:p-12"
              onClick={() => setSelectedMedia(null)}
            >
              <div className="relative w-full h-full flex flex-col items-center justify-center" onClick={(e) => e.stopPropagation()}>

                {/* Media Container (With Swipe) */}
                <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                  <AnimatePresence initial={false} custom={direction} mode="popLayout">
                    <motion.div
                      key={selectedMedia}
                      custom={direction}
                      variants={slideVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      drag="x"
                      dragConstraints={{ left: 0, right: 0 }}
                      dragElastic={1}
                      onDragEnd={(e, { offset, velocity }) => {
                        const swipe = offset.x;
                        if (swipe < -50) {
                          nextMedia();
                        } else if (swipe > 50) {
                          prevMedia();
                        }
                      }}
                      transition={{
                        x: { type: "spring", stiffness: 300, damping: 30 },
                        opacity: { duration: 0.2 }
                      }}
                      className={`absolute inset-0 flex flex-col items-center justify-center p-4 will-change-[opacity,transform] touch-none ${
                        project.gallery[selectedMedia!].type === "video" ? "max-h-[95vh]" : "max-h-[80vh]"
                      }`}
                    >
                      {project.gallery[selectedMedia!].type === "video" ? (
                        <div className="relative w-full max-w-5xl rounded-2xl overflow-hidden bg-black border border-white/10 pointer-events-none">
                          <video
                            src={project.gallery[selectedMedia!].url}
                            className="w-full h-auto"
                            autoPlay
                            muted
                            loop
                            playsInline
                          />
                        </div>
                      ) : (
                        <div className="relative w-full h-full max-w-5xl pointer-events-none">
                          <img
                            src={project.gallery[selectedMedia!].url}
                            alt="Project media"
                            className="w-full h-full object-contain"
                          />
                        </div>
                      )}
                    </motion.div>
                  </AnimatePresence>
                </div>
                
                {/* Navigation - Bottom Controls */}
                <div className="flex items-center gap-6 mt-8 z-30">
                  <button 
                    onClick={prevMedia}
                    className="p-4 rounded-full border border-white/10 bg-white/5 text-white/50 hover:text-accent-cyan hover:border-accent-cyan transition-all group"
                  >
                    <FiArrowLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
                  </button>

                  <button 
                    onClick={() => setSelectedMedia(null)}
                    className="px-8 py-3 rounded-full bg-white/10 border border-white/10 text-white text-[10px] font-bold uppercase tracking-widest hover:bg-white/20 transition-all"
                  >
                    Fechar
                  </button>

                  <button 
                    onClick={nextMedia}
                    className="p-4 rounded-full border border-white/10 bg-white/5 text-white/50 hover:text-accent-cyan hover:border-accent-cyan transition-all group"
                  >
                    <FiArrowLeft size={24} className="rotate-180 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Final CTA */}
        <div className="mt-32 p-12 rounded-[40px] bg-white/[0.02] backdrop-blur-xl border border-accent-cyan/30 text-center flex flex-col items-center gap-8 shadow-[0_0_50px_rgba(0,242,255,0.1)]">
          <h3 className="text-3xl md:text-5xl font-bold tracking-tight">Gostou deste <span className="text-accent-cyan">resultado?</span></h3>
          <p className="text-white/50 max-w-xl font-light">Podemos criar algo tão impactante quanto este projeto para o seu negócio. Vamos conversar hoje mesmo.</p>
          <Link 
            href="https://wa.me/5511994061379?text=Olá! Gostaria de iniciar um novo projeto com a Aether Solutions." 
            target="_blank"
            className="px-10 py-4 rounded-xl bg-accent-cyan text-[#020F22] font-bold hover:shadow-[0_0_30px_rgba(0,242,255,0.4)] transition-all flex items-center gap-2 hover:scale-105"
          >
            Iniciar meu projeto
            <FiExternalLink />
          </Link>
        </div>
      </motion.main>
    </div>
  );
}
