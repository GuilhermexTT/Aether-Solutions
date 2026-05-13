import Navbar from "@/components/Navbar";
import Process from "@/components/Process";
import DesignPrinciples from "@/components/DesignPrinciples";
import TechStack from "@/components/TechStack";
import Link from "next/link";

export default function SitesPage() {
  return (
    <div className="min-h-screen bg-[#020F22] flex flex-col">
      <Navbar />
      <main className="flex-grow pt-48 px-8">
        {/* Hero Section of the page */}
        <div className="container mx-auto pt-48 pb-12 px-8">
          <div className="max-w-4xl mx-auto flex flex-col gap-8 md:gap-12">
            <Link href="/" className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent-cyan/30 bg-accent-cyan/10 text-[10px] font-bold tracking-widest text-accent-cyan uppercase w-fit hover:bg-accent-cyan/20 transition-all">
              ← Voltar para Home
            </Link>
            <div className="flex flex-col gap-6">
              <h1 className="text-5xl lg:text-6xl font-light text-white tracking-tight leading-tight">
                Criação de <br />
                <span className="text-accent-cyan font-normal drop-shadow-[0_0_15px_rgba(0,242,255,0.4)]">
                  Sites de Alta Performance
                </span>
              </h1>
              <p className="text-white/60 font-light text-xl leading-relaxed max-w-2xl">
                Desenvolvemos experiências digitais únicas, focadas em conversão e performance, utilizando as tecnologias mais modernas do mercado.
              </p>
            </div>

          </div>
        </div>

        {/* Process Section */}
        <Process className="!pt-0" />

        {/* Design Principles Section */}
        <DesignPrinciples />

        {/* Tech Stack Section */}
        <TechStack />
      </main>
    </div>
  );
}
