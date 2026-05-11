import Navbar from "@/components/Navbar";
import Process from "@/components/Process";
import Architecture from "@/components/Architecture";

export default function AgentesPage() {
  return (
    <div className="min-h-screen bg-[#020F22] flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        <Process />
        <Architecture />
      </main>
    </div>
  );
}
