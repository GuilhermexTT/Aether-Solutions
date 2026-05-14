"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { FiMessageSquare, FiSearch, FiCheckCircle, FiX, FiZap, FiArrowRight, FiMail } from "react-icons/fi";

const steps = [
  {
    number: "01",
    icon: <FiMessageSquare className="w-6 h-6 text-accent-cyan" />,
    title: "Você nos conta o problema",
    description:
      "Nos explique o desafio que a sua empresa enfrenta — pode ser um processo manual, uma ineficiência, uma ideia sem forma ou qualquer gargalo que atrapalha o crescimento.",
    outcome: "Entendemos o contexto completo",
  },
  {
    number: "02",
    icon: <FiSearch className="w-6 h-6 text-accent-cyan" />,
    title: "Diagnóstico e análise de viabilidade",
    description:
      "Nossa equipe analisa o problema em profundidade: avaliamos o escopo técnico, estimamos esforço e custo, e mapeamos as possíveis abordagens de solução.",
    outcome: "Mapa claro do que é possível fazer",
  },
  {
    number: "03",
    icon: <FiZap className="w-6 h-6 text-accent-cyan" />,
    title: "Planejamento da solução",
    description:
      "Se a solução é viável, apresentamos um plano detalhado: arquitetura, tecnologias, etapas de desenvolvimento e prazos realistas. Sem promessas vazias.",
    outcome: "Proposta técnica transparente",
  },
  {
    number: "04",
    icon: <FiCheckCircle className="w-6 h-6 text-accent-cyan" />,
    title: "Decisão: vamos ou não vamos?",
    description:
      "Com todas as informações na mesa, tomamos juntos a decisão. Se fizer sentido para os dois lados, iniciamos o desenvolvimento. Se não fizer, somos honestos sobre isso.",
    outcome: "Clareza total antes de qualquer investimento",
  },
];

const possibilities = [
  "Sistemas e aplicações web personalizadas",
  "Automações de processos internos",
  "Integrações entre plataformas e APIs",
  "Dashboards e painéis de controle",
  "MVPs e protótipos funcionais",
  "Ferramentas internas para sua equipe",
];

const notFit = [
  "Projetos sem problema claro definido",
  "Expectativas fora da realidade técnica",
  "Prazo incompatível com a complexidade",
];

export default function PersonalizadoPage() {
  return (
    <div className="min-h-screen bg-[#020F22] text-white flex flex-col">
      <Navbar />
      <main className="flex-grow pt-28 md:pt-40 px-6 md:px-8 pb-32">
        <div className="container mx-auto max-w-5xl">

          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent-cyan/30 bg-accent-cyan/10 text-[10px] font-bold tracking-widest text-accent-cyan uppercase mb-14 hover:bg-accent-cyan/20 transition-all"
            >
              ← Voltar para Home
            </Link>
          </motion.div>

          {/* Hero Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-20"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent-cyan/30 bg-accent-cyan/5 text-[10px] font-bold tracking-widest text-accent-cyan uppercase mb-6">
              <FiZap className="w-3 h-3" />
              Solução Personalizada
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light mb-8 leading-tight">
              Tem um problema?{" "}
              <span className="text-accent-cyan font-normal drop-shadow-[0_0_20px_rgba(0,242,255,0.4)]">
                A gente tenta resolver.
              </span>
            </h1>
            <p className="text-white/50 text-lg md:text-xl font-light leading-relaxed max-w-2xl">
              Somos uma empresa de soluções, não apenas de produtos. Se o seu desafio não se encaixa em
              nenhuma caixa pronta, essa é exatamente a conversa que queremos ter.
            </p>
          </motion.div>

          {/* Process Steps */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mb-24"
          >
            <div className="flex items-center gap-4 mb-12">
              <div className="p-3 rounded-xl bg-accent-cyan/10 border border-[#084B6E]">
                <FiArrowRight className="text-accent-cyan w-5 h-5" />
              </div>
              <h2 className="text-2xl font-semibold tracking-tight">Como funciona o processo</h2>
            </div>

            <div className="flex flex-col gap-0">
              {steps.map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="relative flex gap-6 md:gap-10 group"
                >
                  {/* Vertical line connector */}
                  {idx < steps.length - 1 && (
                    <div className="absolute left-[27px] md:left-[35px] top-[60px] bottom-0 w-px bg-gradient-to-b from-accent-cyan/30 to-transparent pointer-events-none" />
                  )}

                  {/* Step number + icon */}
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div className="w-14 h-14 md:w-[72px] md:h-[72px] rounded-2xl bg-[#0D214D] border border-[#084B6E] flex items-center justify-center group-hover:border-accent-cyan/60 group-hover:shadow-[0_0_30px_rgba(0,242,255,0.25)] transition-all duration-500 z-10">
                      {step.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="pb-14">
                    <p className="text-accent-cyan text-[10px] font-bold tracking-widest uppercase mb-1">
                      Etapa {step.number}
                    </p>
                    <h3 className="text-xl md:text-2xl font-semibold mb-3 group-hover:text-accent-cyan transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-white/50 text-sm md:text-base font-light leading-relaxed mb-4 max-w-xl">
                      {step.description}
                    </p>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-cyan/5 border border-accent-cyan/20 text-accent-cyan text-xs font-medium">
                      <FiCheckCircle className="w-3 h-3" />
                      {step.outcome}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Possibilities grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
            {/* What we can do */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 rounded-[32px] bg-white/[0.02] border border-[#084B6E] backdrop-blur-xl"
            >
              <div className="flex items-center gap-3 mb-6">
                <FiCheckCircle className="text-accent-cyan w-5 h-5" />
                <h3 className="text-lg font-semibold">O que podemos construir</h3>
              </div>
              <ul className="flex flex-col gap-3">
                {possibilities.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/70 text-sm font-light">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent-cyan shadow-[0_0_8px_rgba(0,242,255,0.8)] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Honest expectations */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="p-8 rounded-[32px] bg-white/[0.02] border border-white/10 backdrop-blur-xl"
            >
              <div className="flex items-center gap-3 mb-6">
                <FiX className="text-white/40 w-5 h-5" />
                <h3 className="text-lg font-semibold text-white/70">O que não funciona</h3>
              </div>
              <ul className="flex flex-col gap-3">
                {notFit.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/40 text-sm font-light">
                    <div className="w-1.5 h-1.5 rounded-full bg-white/20 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-white/30 text-xs font-light mt-6 italic">
                Nossa honestidade é parte da solução. Preferimos dizer &ldquo;não&rdquo; antes de desperdiçar seu tempo e dinheiro.
              </p>
            </motion.div>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative p-10 md:p-16 rounded-[40px] bg-gradient-to-br from-accent-cyan/10 to-[#0363F8]/10 border border-accent-cyan/20 text-center overflow-hidden"
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,242,255,0.08),transparent_70%)] pointer-events-none" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-light mb-6">
                Pronto para{" "}
                <span className="text-accent-cyan font-normal">contar seu desafio?</span>
              </h2>
              <p className="text-white/50 text-base md:text-lg font-light mb-10 max-w-xl mx-auto">
                O diagnóstico inicial é gratuito e sem compromisso. A pior resposta que você pode receber é um &ldquo;não&rdquo; — e isso já vale muito.
              </p>
              <a
                href="https://wa.me/5511999999999?text=Ol%C3%A1%2C%20tenho%20um%20problema%20que%20gostaria%20de%20discutir%20com%20a%20Aether%20Solutions"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl bg-accent-cyan text-[#020F22] font-bold text-sm uppercase tracking-widest shadow-[0_0_30px_rgba(0,242,255,0.4)] hover:shadow-[0_0_50px_rgba(0,242,255,0.6)] hover:scale-105 transition-all duration-300"
              >
                <FiMail className="w-5 h-5" />
                Falar com a equipe
              </a>
              <p className="text-white/20 text-xs mt-6 tracking-wider">
                Resposta em até 24 horas úteis
              </p>
            </div>
          </motion.div>

        </div>
      </main>
    </div>
  );
}
