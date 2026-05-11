import { FiCpu, FiZap, FiTarget, FiUsers } from "react-icons/fi";

export default function About() {
  const stats = [
    { number: "100+", label: "Projetos entregues" },
    { number: "98%", label: "Satisfação dos clientes" },
    { number: "24/7", label: "Atendimento automatizado" },
  ];

  const features = [
    {
      icon: <FiCpu className="w-6 h-6 text-accent-cyan" />,
      title: "Inovação",
      description: "Tecnologia de ponta em IA e automação",
    },
    {
      icon: <FiZap className="w-6 h-6 text-accent-cyan" />,
      title: "Velocidade",
      description: "Resultados rápidos e escaláveis",
    },
    {
      icon: <FiTarget className="w-6 h-6 text-accent-cyan" />,
      title: "Precisão",
      description: "Soluções personalizadas para cada negócio",
    },
    {
      icon: <FiUsers className="w-6 h-6 text-accent-cyan" />,
      title: "Parceria",
      description: "Crescemos junto com nossos clientes",
    },
  ];

  return (
    <section className="py-24 px-8 bg-[#020F22]">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div className="flex flex-col gap-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent-cyan/20 bg-accent-cyan/5 text-xs font-light text-accent-cyan w-fit uppercase tracking-wider">
            <FiUsers className="text-xs" /> Sobre a Aether Solutions
          </div>

          <h2 className="text-4xl lg:text-5xl font-light leading-tight text-white">
            Transformando negócios com <br />
            <span className="text-accent-cyan font-normal drop-shadow-[0_0_15px_rgba(0,242,255,0.4)]">
              Inteligência Artificial
            </span>
          </h2>

          <div className="flex flex-col gap-6 text-white/50 font-light text-lg leading-relaxed text-justify">
            <p>
              A <span className="text-white font-normal">Aether Solutions</span> não nasceu apenas para criar sites, mas para construir a infraestrutura onde o futuro dos negócios acontece. O nome "Aether" remete ao que é fundamental e invisível, mas que sustenta tudo ao seu redor. É exatamente assim que enxergamos a tecnologia: uma base invisível, porém poderosa, que impulsiona o crescimento humano e empresarial.
            </p>
            <p>
              A Aether Solutions nasceu da visão de democratizar o acesso à tecnologia de IA. Desenvolvemos agentes inteligentes que atendem seus clientes no WhatsApp e sites com linguagem natural.
            </p>
            <p>
              Nossa missão é simples, <span className="text-accent-cyan font-normal">automatizar o atendimento</span> para que empreendedores possam focar no que realmente importa — crescer seus negócios. Com nossa tecnologia, você nunca mais perde um lead.
            </p>
            <p>
              Combinamos <span className="text-white font-normal">design excepcional</span> com <span className="text-white font-normal">automação inteligente</span> para criar experiências digitais que convertem visitantes em clientes.
            </p>
          </div>
        </div>

        {/* Right Content - Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="p-8 rounded-2xl bg-[#000B1F] border border-white/5 hover:border-accent-cyan/30 hover:shadow-[0_0_40px_rgba(0,242,255,0.1)] hover:bg-[#001233] transition-all duration-500 group cursor-default"
            >
              <div className="w-12 h-12 rounded-xl bg-accent-cyan/5 border border-accent-cyan/20 flex items-center justify-center mb-6 group-hover:bg-accent-cyan/10 transition-all">
                {feature.icon}
              </div>
              <h3 className="text-xl font-normal text-white mb-3 tracking-wide">
                {feature.title}
              </h3>
              <p className="text-sm text-white/40 font-light leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
