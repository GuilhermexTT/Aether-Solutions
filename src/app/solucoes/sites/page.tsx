import Navbar from "@/components/Navbar";

export default function SitesPage() {
  return (
    <div className="min-h-screen bg-[#020F22] flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto py-32 px-8">
        <div className="max-w-4xl mx-auto flex flex-col gap-12">
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-12">
            <div className="p-8 rounded-3xl bg-[#000B1F] border border-white/5 flex flex-col gap-4">
              <h3 className="text-xl text-white font-normal">Core Web Vitals</h3>
              <p className="text-white/40 text-sm leading-relaxed">
                Sites otimizados para carregar instantaneamente, garantindo a melhor experiência para o usuário e ranking no Google.
              </p>
            </div>
            <div className="p-8 rounded-3xl bg-[#000B1F] border border-white/5 flex flex-col gap-4">
              <h3 className="text-xl text-white font-normal">Design Futurista</h3>
              <p className="text-white/40 text-sm leading-relaxed">
                Interfaces modernas com micro-animações e interações que encantam o visitante desde o primeiro segundo.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
