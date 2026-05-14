"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Se não estiver na home, deixa o Link navegar normalmente
    if (pathname !== "/") return;

    if (href === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      window.history.pushState(null, "", "/");
      return;
    }

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

  const navLinks = [
    { name: "Produto", href: "/#portfolio" },
    { name: "Soluções", href: "/#solucoes" },
    { name: "Dúvidas", href: "/#faq" },
    { name: "Sobre nós", href: "/#sobre" },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 md:py-5 transition-all duration-500 ${
        scrolled 
          ? "bg-[#020F22]/80 backdrop-blur-xl border-b border-accent-cyan/20 shadow-[0_10px_40px_rgba(0,242,255,0.1)]" 
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <Link 
        href="/" 
        onClick={(e) => handleSmoothScroll(e, "/")}
        className="relative h-10 w-32 md:h-16 md:w-56 group transition-transform duration-300 hover:scale-105"
      >
        <Image 
          src="/logo-marca.png" 
          alt="Aether Solutions Logo" 
          fill 
          className="object-contain"
          priority
        />
      </Link>

      <div className="hidden md:flex items-center gap-10">
        {navLinks.map((link) => (
          <Link 
            key={link.name}
            href={link.href}
            onClick={(e) => handleSmoothScroll(e, link.href)}
            className="relative text-base font-medium text-white/60 tracking-wider hover:text-white transition-all duration-300 group"
          >
            {link.name}
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-accent-cyan transition-all duration-300 group-hover:w-full shadow-[0_0_8px_rgba(0,242,255,0.8)]" />
          </Link>
        ))}
      </div>

      <div className="flex-shrink-0">
        <Link 
          href="https://wa.me/5511994061379?text=Olá, gostaria de falar com um especialista da Aether Solutions." 
          target="_blank"
          className="relative px-4 py-2 md:px-8 md:py-3 rounded-full border border-accent-cyan/30 text-[10px] md:text-sm font-bold text-white overflow-hidden group transition-all duration-300 hover:border-accent-cyan shadow-[0_0_20px_rgba(0,242,255,0.1)] hover:shadow-[0_0_30px_rgba(0,242,255,0.3)] whitespace-nowrap"
        >
          <span className="relative z-10">Falar com Especialista</span>
          <div className="absolute inset-0 bg-accent-cyan/0 group-hover:bg-accent-cyan/10 transition-colors duration-300" />
        </Link>
      </div>
    </nav>
  );
}
