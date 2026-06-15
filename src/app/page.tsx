import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Showcase from "@/components/Showcase";
import AetherHub from "@/components/AetherHub";
import Solutions from "@/components/Solutions";

const About = dynamic(() => import("@/components/About"), { ssr: true });
const FAQ = dynamic(() => import("@/components/FAQ"), { ssr: true });
const CTA = dynamic(() => import("@/components/CTA"), { ssr: true });

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Showcase />
        <AetherHub />
        <Solutions />
        <About />
        <FAQ />
        <CTA />
      </main>
    </div>
  );
}
