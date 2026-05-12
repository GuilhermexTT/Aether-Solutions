"use client";

import { useState } from "react";
import { FiPlus, FiMinus, FiHelpCircle } from "react-icons/fi";
import { motion, AnimatePresence, Variants } from "framer-motion";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Quanto tempo leva para desenvolver um site?",
      answer: "O tempo médio de desenvolvimento é de 2 a 4 semanas, dependendo da complexidade do projeto e das funcionalidades solicitadas. Projetos mais simples podem ser entregues em até 10 dias úteis."
    },
    {
      question: "Como funciona o agente de IA no WhatsApp?",
      answer: "Nosso agente utiliza processamento de linguagem natural de ponta para entender as dúvidas dos seus clientes e responder instantaneamente, 24 horas por dia. Ele aprende com os dados do seu negócio para fornecer respostas precisas e humanas."
    },
    {
      question: "Preciso ter conhecimento técnico para gerenciar meu site?",
      answer: "Não. Desenvolvemos sites intuitivos e entregamos tudo configurado. Além disso, oferecemos suporte contínuo para qualquer alteração ou dúvida que você possa ter."
    },
    {
      question: "O agente de IA pode se integrar com meu CRM?",
      answer: "Sim! Integramos nossos agentes com as principais ferramentas de CRM do mercado, como HubSpot, Salesforce, RD Station e muitos outros via API, garantindo que nenhum lead seja perdido."
    },
    {
      question: "Qual é o investimento necessário?",
      answer: "O investimento varia de acordo com as necessidades específicas de cada projeto. Oferecemos soluções modulares que se adaptam desde pequenos negócios até grandes empresas. Entre em contato para um orçamento personalizado."
    },
    {
      question: "Vocês oferecem suporte após a entrega?",
      answer: "Com certeza. Acreditamos em parcerias de longo prazo. Oferecemos pacotes de suporte técnico, manutenção e atualizações constantes para garantir que seu site ou agente continue performando ao máximo."
    },
    {
      question: "O site será otimizado para SEO?",
      answer: "Sim, todos os nossos sites são construídos seguindo as melhores práticas de SEO (Search Engine Optimization) para garantir que seu negócio apareça nas primeiras páginas do Google."
    },
    {
      question: "Posso fazer alterações no site depois de pronto?",
      answer: "Sim. Nossos sites são modulares e fáceis de editar. Você terá autonomia para alterar textos e imagens, ou poderá contar com nosso time para realizar atualizações mais complexas."
    }
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="py-24 bg-[#020F22] text-white overflow-hidden">
      <div className="container mx-auto px-4 max-w-4xl">
        
        {/* Top Badge */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mb-8"
        >
          <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#084B6E] bg-white/5 backdrop-blur-sm shadow-[0_0_15px_rgba(8,75,110,0.2)]">
            <FiHelpCircle className="text-accent-cyan w-4 h-4" />
            <span className="text-[10px] tracking-[0.2em] font-medium text-white/80 uppercase">
              Perguntas Frequentes
            </span>
          </div>
        </motion.div>

        {/* Header Title */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 tracking-tight">
            Dúvidas que podem estar <br />
            <span className="text-accent-cyan font-normal drop-shadow-[0_0_15px_rgba(0,242,255,0.4)]">
              impedindo você
            </span>
          </h2>
          <p className="text-white/40 font-light text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Respostas claras e diretas para as perguntas mais comuns sobre nossos serviços.
          </p>
        </motion.div>

        {/* FAQ List */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-col gap-4 mb-20"
        >
          {faqs.map((faq, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              className="group cursor-pointer"
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            >
              <div className={`p-6 md:p-8 rounded-3xl border transition-all duration-500 bg-[#0A1435] ${openIndex === idx ? 'border-accent-cyan/30 shadow-[0_0_30px_rgba(0,242,255,0.05)]' : 'border-[#084B6E] hover:border-accent-cyan/20 hover:bg-[#0D214D] shadow-[0_0_15px_rgba(8,75,110,0.1)]'}`}>
                <div className="flex items-center justify-between gap-4">
                  <h4 className={`text-sm md:text-base font-medium transition-colors duration-300 ${openIndex === idx ? 'text-accent-cyan' : 'text-white/80 group-hover:text-white'}`}>
                    {faq.question}
                  </h4>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-xl border flex items-center justify-center transition-all duration-500 ${openIndex === idx ? 'bg-accent-cyan border-accent-cyan shadow-[0_0_15px_rgba(0,242,255,0.4)]' : 'bg-[#0D214D] border-[#084B6E]'}`}>
                    {openIndex === idx ? (
                      <FiMinus className="text-[#020F22] w-4 h-4" />
                    ) : (
                      <FiPlus className="text-accent-cyan w-4 h-4" />
                    )}
                  </div>
                </div>

                <AnimatePresence>
                  {openIndex === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0, marginTop: 0 }}
                      animate={{ height: "auto", opacity: 1, marginTop: 24 }}
                      exit={{ height: 0, opacity: 0, marginTop: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="text-white/40 text-xs md:text-sm leading-relaxed font-light border-t border-white/5 pt-6">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="p-10 md:p-12 rounded-[40px] bg-[#0A1435] border border-[#084B6E] text-center flex flex-col items-center gap-6 shadow-[0_0_40px_rgba(8,75,110,0.2)]"
        >
          <div className="flex flex-col gap-2">
            <h3 className="text-2xl md:text-3xl font-medium text-white tracking-tight">Ainda tem dúvidas?</h3>
            <p className="text-white/40 text-xs md:text-sm font-light">
              Agende uma conversa gratuita e tire todas as suas dúvidas com nosso time.
            </p>
          </div>
          
          <button className="mt-4 px-8 py-4 rounded-2xl bg-[#020F22] border border-[#084B6E] text-white font-medium text-sm hover:bg-accent-cyan hover:text-[#020F22] hover:shadow-[0_0_30px_rgba(0,242,255,0.4)] transition-all duration-500 group flex items-center gap-3">
            Falar com especialista
            <div className="w-2 h-2 rounded-full bg-accent-cyan group-hover:bg-[#020F22] animate-pulse" />
          </button>
        </motion.div>

      </div>
    </section>
  );
}
