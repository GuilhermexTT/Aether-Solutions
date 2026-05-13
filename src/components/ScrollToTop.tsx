"use client";

import { useState, useEffect } from "react";
import { FiArrowUp } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the top scroll behavior
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-[100] p-4 rounded-2xl bg-accent-cyan border border-white/20 text-[#020F22] shadow-[0_0_20px_rgba(0,242,255,0.4)] hover:shadow-[0_0_35px_rgba(0,242,255,0.6)] hover:-translate-y-2 transition-all duration-300 group"
          aria-label="Voltar ao topo"
        >
          <FiArrowUp className="text-xl group-hover:scale-110 transition-transform" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
