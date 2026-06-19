"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
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
    <footer className="bg-[#030913] pt-24 pb-12 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent-cyan/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Logo Column */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="relative h-24 w-80 -ml-2">
              <Image 
                src="/logo-footer-adisea.png" 
                alt="Adisea Logo" 
                fill 
                className="object-contain object-left"
              />
            </Link>
            <p className="text-white/40 text-sm font-light leading-relaxed max-w-[280px]">
              Construindo a infraestrutura de inteligência artificial para as empresas do futuro.
            </p>
            <div className="flex flex-col gap-2">
              <p className="text-white/20 text-[10px] uppercase tracking-widest font-bold">CNPJ</p>
              <p className="text-white/40 text-xs font-light tracking-wider">66.696.773/0001-62</p>
            </div>
          </div>

          {/* Links Column 1: Soluções */}
          <div className="flex flex-col gap-8">
            <h4 className="text-white text-base font-bold tracking-tight uppercase">Nossas Soluções</h4>
            <ul className="flex flex-col gap-5">
              <li>
                <Link 
                  href="/solucoes/agentes" 
                  className="text-white/40 text-sm font-light hover:text-accent-cyan transition-all duration-300 flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan/20 group-hover:bg-accent-cyan transition-colors" />
                  Agentes de IA
                </Link>
              </li>
              <li>
                <Link 
                  href="/solucoes/sites" 
                  className="text-white/40 text-sm font-light hover:text-accent-cyan transition-all duration-300 flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan/20 group-hover:bg-accent-cyan transition-colors" />
                  Sites Premium
                </Link>
              </li>
              <li>
                <Link 
                  href="/#portfolio" 
                  onClick={(e) => handleSmoothScroll(e, "/#portfolio")}
                  className="text-white/40 text-sm font-light hover:text-accent-cyan transition-all duration-300 flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan/20 group-hover:bg-accent-cyan transition-colors" />
                  Portfólio de Projetos
                </Link>
              </li>
              <li>
                <Link 
                  href="/#aether-hub" 
                  onClick={(e) => handleSmoothScroll(e, "/#aether-hub")}
                  className="text-white/40 text-sm font-light hover:text-accent-cyan transition-all duration-300 flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan/20 group-hover:bg-accent-cyan transition-colors" />
                  Plataforma Adisea Hub
                </Link>
              </li>
            </ul>
          </div>

          {/* Links Column 2: Empresa */}
          <div className="flex flex-col gap-8">
            <h4 className="text-white text-base font-bold tracking-tight uppercase">Adisea</h4>
            <ul className="flex flex-col gap-5">
              <li>
                <Link 
                  href="/#sobre" 
                  onClick={(e) => handleSmoothScroll(e, "/#sobre")}
                  className="text-white/40 text-sm font-light hover:text-accent-cyan transition-all duration-300"
                >
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link 
                  href="/#faq" 
                  onClick={(e) => handleSmoothScroll(e, "/#faq")}
                  className="text-white/40 text-sm font-light hover:text-accent-cyan transition-all duration-300"
                >
                  Dúvidas Frequentes
                </Link>
              </li>
              <li>
                <Link 
                  href="https://wa.me/5511994061379?text=Olá, gostaria de solicitar um orçamento para o meu projeto." 
                  target="_blank"
                  className="text-white/40 text-sm font-light hover:text-accent-cyan transition-all duration-300"
                >
                  Solicitar Orçamento
                </Link>
              </li>
            </ul>
          </div>

          {/* Links Column 3: Contato */}
          <div className="flex flex-col gap-8">
            <h4 className="text-white text-base font-bold tracking-tight uppercase">Contato Direto</h4>
            <div className="flex flex-col gap-6">
              <Link 
                href="https://wa.me/5511994061379?text=Olá, gostaria de falar com um especialista da Adisea." 
                target="_blank"
                className="px-6 py-3 rounded-2xl bg-white/5 border border-white/10 text-white font-medium text-sm flex items-center justify-center gap-3 hover:bg-accent-cyan/10 hover:border-accent-cyan transition-all duration-500 group shadow-lg"
              >
                Falar com Especialista
                <div className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse" />
              </Link>
              <p className="text-white/20 text-[10px] leading-relaxed italic">
                Disponibilidade imediata via WhatsApp para consultoria técnica.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col gap-2">
            <p className="text-white/20 text-[10px] tracking-widest uppercase font-bold">
              © 2026 Adisea. Todos os direitos reservados.
            </p>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-8">
            <Link href="/politica-de-privacidade" className="text-white/20 text-[10px] tracking-widest uppercase font-medium hover:text-white transition-colors">Privacidade</Link>
            <Link href="/termos-de-uso" className="text-white/20 text-[10px] tracking-widest uppercase font-medium hover:text-white transition-colors">Termos de Uso</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
