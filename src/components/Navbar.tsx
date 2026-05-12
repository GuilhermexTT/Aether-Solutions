import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav 
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 bg-transparent backdrop-blur-md border-b border-[#0363F8]/10 shadow-[0_10px_40px_rgba(3,99,248,0.06)] will-change-transform"
      style={{ transform: 'translateZ(0)' }}
    >
      <Link href="/" className="relative h-20 w-64 group">
        <Image 
          src="/logo.png" 
          alt="Aether Solutions Logo" 
          fill 
          className="object-contain transition-transform duration-300"
          priority
        />
      </Link>

      <div className="hidden md:flex items-center gap-8 text-sm font-light text-white/60 tracking-wide">
        <Link href="#" className="hover:text-accent-cyan transition-colors">Produto</Link>
        <Link href="#" className="hover:text-accent-cyan transition-colors">Soluções</Link>
        <Link href="#" className="hover:text-accent-cyan transition-colors">Recursos</Link>
        <Link href="#" className="hover:text-accent-cyan transition-colors">Empresa</Link>
        <Link href="#" className="hover:text-accent-cyan transition-colors">Carreiras</Link>
      </div>

      <div>
        <button className="px-6 py-2 rounded-full border border-accent-cyan/30 text-xs font-light text-white hover:bg-accent-cyan/10 hover:border-accent-cyan transition-all shadow-[0_0_15px_rgba(0,242,255,0.15)]">
          Agendar demo
        </button>
      </div>
    </nav>
  );
}
