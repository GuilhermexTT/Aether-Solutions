import Link from "next/link";
import { FiCpu, FiLayout, FiCheck } from "react-icons/fi";

export default function Solutions() {
  const solutions = [
    {
      id: "agentes",
      title: "AGENTES DE IA",
      description: "Atendimento inteligente 24/7 no WhatsApp com processamento em linguagem natural. Nunca mais perca um lead.",
      icon: <FiCpu className="w-10 h-10 text-accent-cyan" />,
      href: "/solucoes/agentes",
      features: [
        "Respostas instantâneas e contextuais",
        "Integração com WhatsApp Business API",
        "Aprendizado contínuo com seus dados",
        "Qualificação automática de leads",
        "Dashboard de analytics em tempo real",
      ],
    },
    {
      id: "sites",
      title: "CRIAÇÃO DE SITES",
      description: "Sites de alta conversão com design futurista e tecnologia de ponta. Experiências digitais que transformam visitantes em clientes.",
      icon: <FiLayout className="w-10 h-10 text-accent-cyan" />,
      href: "/solucoes/sites",
      features: [
        "Design responsivo e moderno",
        "Performance otimizada (Core Web Vitals)",
        "SEO avançado para Google",
        "Animações e microinterações",
        "Integração com ferramentas de marketing",
      ],
    },
  ];

  return (
    <section className="pt-2 pb-24 md:py-24 px-8 bg-[#020F22]">
      <div className="container mx-auto flex flex-col items-center gap-16">
        {/* Header Content */}
        <div className="text-center flex flex-col gap-6 max-w-3xl">
          <h2 className="text-4xl lg:text-5xl font-light text-white tracking-tight leading-tight">
            Soluções que <br />
            <span className="text-accent-cyan font-normal drop-shadow-[0_0_15px_rgba(0,242,255,0.4)]">
              transformam negócios
            </span>
          </h2>
          <p className="text-white/40 font-light text-base leading-relaxed">
            Combinamos inteligência artificial de última geração com design excepcional para criar experiências digitais que geram resultados reais.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl">
          {solutions.map((sol, idx) => (
            <Link 
              key={idx}
              href={sol.href}
              className="relative p-10 pt-16 rounded-[32px] bg-white/[0.02] backdrop-blur-xl border border-white/10 flex flex-col items-center text-center group hover:bg-white/[0.05] hover:border-[#0363F8]/30 hover:shadow-[0_0_60px_rgba(3,99,248,0.15)] hover:translate-y-3 transition-all duration-500 cursor-pointer"
            >
              {/* Icon Box - Glued to the top */}
              <div className="absolute top-0 -translate-y-1/2 p-5 rounded-2xl bg-[#000B1F]/80 backdrop-blur-lg border border-white/10 shadow-[0_0_30px_rgba(0,242,255,0.1)] group-hover:shadow-[0_0_40px_rgba(0,242,255,0.3)] group-hover:border-accent-cyan/40 transition-all duration-500">
                {sol.icon}
              </div>

              <h3 className="text-xl font-normal text-white mb-4 tracking-widest">{sol.title}</h3>
              
              <p className="text-white/40 font-light text-xs leading-relaxed mb-8 max-w-[280px]">
                {sol.description}
              </p>

              {/* Features List */}
              <ul className="flex flex-col gap-3 items-start text-left w-full max-w-[240px] mx-auto">
                {sol.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/50 font-light text-[10px]">
                    <div className="w-1 h-1 rounded-full bg-accent-cyan shadow-[0_0_8px_rgba(0,242,255,0.5)]" />
                    {feature}
                  </li>
                ))}
              </ul>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
