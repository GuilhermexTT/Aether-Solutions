import { FiMessageSquare, FiCpu, FiZap, FiCheckCircle, FiArrowRight } from "react-icons/fi";

export default function Process() {
  const steps = [
    {
      number: 1,
      icon: <FiMessageSquare className="w-8 h-8 text-accent-cyan" />,
      title: "Recepção",
      description: "Cliente envia mensagem via WhatsApp ou site",
    },
    {
      number: 2,
      icon: <FiCpu className="w-8 h-8 text-accent-cyan" />,
      title: "Processamento",
      description: "IA analisa contexto e intenção usando NLP avançado",
    },
    {
      number: 3,
      icon: <FiZap className="w-8 h-8 text-accent-cyan" />,
      title: "Execução",
      description: "Agente executa ações e busca informações relevantes",
    },
    {
      number: 4,
      icon: <FiCheckCircle className="w-8 h-8 text-accent-cyan" />,
      title: "Resposta",
      description: "Retoma resposta personalizada em linguagem natural",
    },
  ];

  return (
    <section className="py-24 px-8 bg-[#020F22] overflow-hidden">
      <div className="container mx-auto flex flex-col items-center gap-16">
        {/* Header Content */}
        <div className="text-center flex flex-col gap-6 max-w-3xl">
          <h2 className="text-4xl lg:text-5xl font-light text-white tracking-tight leading-tight">
            A Engine por trás da <br />
            <span className="text-accent-cyan font-normal drop-shadow-[0_0_15px_rgba(0,242,255,0.4)]">
              inteligência
            </span>
          </h2>
          <p className="text-white/40 font-light text-base leading-relaxed">
            Nossa infraestrutura combina os modelos de IA mais avançados do mercado com uma arquitetura escalável e resiliente. Veja como transformamos conversas em resultados.
          </p>
        </div>

        {/* Process Flow */}
        <div className="w-full flex flex-col gap-12 items-start lg:items-center">
           <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent-cyan/20 bg-accent-cyan/5 text-xs font-light text-white tracking-wider">
             <div className="p-1 rounded-md bg-accent-cyan/20">
               <FiCpu className="text-accent-cyan text-xs" />
             </div>
             Fluxo de Processamento
           </div>

           <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
             {steps.map((step, index) => (
               <div key={index} className="flex flex-col items-center text-center group relative">
                 {/* Icon Box */}
                 <div className="relative mb-8">
                    <div className="w-20 h-20 rounded-2xl bg-[#000B1F] border border-[#0363F8]/20 flex items-center justify-center shadow-[0_0_30px_rgba(3,99,248,0.12)] group-hover:shadow-[0_0_40px_rgba(3,99,248,0.2)] transition-all duration-500">
                      {step.icon}
                    </div>
                    {/* Step Number Badge */}
                    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-accent-cyan text-[#020F22] text-[10px] font-bold flex items-center justify-center shadow-[0_0_10px_rgba(0,242,255,0.5)]">
                      {step.number}
                    </div>
                 </div>

                 {/* Text Content */}
                 <h3 className="text-white font-normal text-lg mb-3 tracking-wide">
                   {step.title}
                 </h3>
                 <p className="text-white/30 font-light text-sm leading-relaxed max-w-[200px]">
                   {step.description}
                 </p>

                 {/* Connecting Arrow (Desktop) */}
                 {index < steps.length - 1 && (
                   <div className="hidden lg:block absolute top-10 -right-4 translate-x-1/2 z-0">
                     <FiArrowRight className="text-accent-cyan/20 text-2xl" />
                   </div>
                 )}
               </div>
             ))}
           </div>
        </div>
      </div>
    </section>
  );
}
