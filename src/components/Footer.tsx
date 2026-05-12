import Link from "next/link";
import { FiTriangle } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-[#030913] pt-24 pb-12 relative overflow-hidden">
      <div className="container mx-auto px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Logo Column */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-accent-cyan/10 border border-[#084B6E] flex items-center justify-center">
                <FiTriangle className="text-accent-cyan rotate-180" />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold tracking-widest text-lg leading-tight uppercase">Aether</span>
                <span className="text-accent-cyan text-[10px] tracking-[0.3em] font-medium uppercase">Solutions</span>
              </div>
            </div>
            <p className="text-white/40 text-sm font-light leading-relaxed max-w-[240px]">
              Infraestrutura de IA para transformar o mundo.
            </p>
          </div>

          {/* Links Column 1 */}
          <div className="flex flex-col gap-6">
            <h4 className="text-white font-medium tracking-tight">Produto</h4>
            <ul className="flex flex-col gap-4 text-white/40 text-sm font-light">
              <li className="hover:text-accent-cyan transition-colors cursor-pointer">Funcionalidades</li>
              <li className="hover:text-accent-cyan transition-colors cursor-pointer">Integrações</li>
              <li className="hover:text-accent-cyan transition-colors cursor-pointer">Preços</li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div className="flex flex-col gap-6">
            <h4 className="text-white font-medium tracking-tight">Empresa</h4>
            <ul className="flex flex-col gap-4 text-white/40 text-sm font-light">
              <li className="hover:text-accent-cyan transition-colors cursor-pointer">Sobre</li>
              <li className="hover:text-accent-cyan transition-colors cursor-pointer">Blog</li>
              <li className="hover:text-accent-cyan transition-colors cursor-pointer">Carreiras</li>
            </ul>
          </div>

          {/* Links Column 3 */}
          <div className="flex flex-col gap-6">
            <h4 className="text-white font-medium tracking-tight">Suporte</h4>
            <ul className="flex flex-col gap-4 text-white/40 text-sm font-light">
              <li className="hover:text-accent-cyan transition-colors cursor-pointer">Documentação</li>
              <li className="hover:text-accent-cyan transition-colors cursor-pointer">Ajuda</li>
              <li className="hover:text-accent-cyan transition-colors cursor-pointer">Contato</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/20 text-[10px] tracking-wider uppercase font-medium">
            © 2026 Aether Solutions. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-8 text-white/20 text-[10px] tracking-wider uppercase font-medium">
            <span className="hover:text-white transition-colors cursor-pointer">Privacidade</span>
            <span className="hover:text-white transition-colors cursor-pointer">Termos</span>
            <span className="hover:text-white transition-colors cursor-pointer">Cookies</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
