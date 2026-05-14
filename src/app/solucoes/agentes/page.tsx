import Navbar from "@/components/Navbar";
import Process from "@/components/Process";
import Architecture from "@/components/Architecture";
import Link from "next/link";

export default function AgentesPage() {
  return (
    <div className="min-h-screen bg-[#020F22] flex flex-col">
      <Navbar />
      <main className="flex-grow pt-28 md:pt-40 px-8">
        <div className="container mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent-cyan/30 bg-accent-cyan/10 text-[10px] font-bold tracking-widest text-accent-cyan uppercase mb-12 hover:bg-accent-cyan/20 transition-all">
            ← Voltar para Home
          </Link>
          <Process className="!pt-0 !pb-6" variant="agents" />
          <Architecture className="!pt-6" />
        </div>
      </main>
    </div>
  );
}
