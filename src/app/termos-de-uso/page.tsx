import { FiShield } from "react-icons/fi";
import Link from "next/link";

export default function TermsOfUse() {
  return (
    <main className="min-h-screen bg-[#000B1F] py-24 px-8 overflow-hidden relative">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-accent-cyan/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto max-w-4xl relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <Link href="/" className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-accent-cyan/30 bg-accent-cyan/10 text-[10px] font-bold tracking-widest text-accent-cyan uppercase mb-8 hover:bg-accent-cyan/20 transition-all">
            ← Voltar para Home
          </Link>
          <div className="w-16 h-16 rounded-2xl bg-accent-cyan/10 border border-accent-cyan/30 flex items-center justify-center mb-6">
            <FiShield className="text-3xl text-accent-cyan drop-shadow-[0_0_10px_rgba(0,242,255,0.8)]" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4 uppercase">
            Termos de <span className="text-accent-cyan">Uso</span>
          </h1>
          <p className="text-white/40 font-light">Última atualização: 13 de maio de 2026</p>
        </div>

        {/* Content */}
        <div className="bg-white/[0.02] backdrop-blur-xl border border-white/5 rounded-[40px] p-8 md:p-16 text-white/70 font-light leading-relaxed space-y-12">
          <section>
            <p>
              Seja bem-vindo ao site da nossa agência. Estes Termos de Uso regem o acesso e a utilização dos serviços e conteúdos oferecidos por <strong>66.696.773 GUILHERME CARDOSO DE CARVALHO</strong>, doravante denominada apenas como "Agência".
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="text-accent-cyan">1.</span> ACEITAÇÃO DOS TERMOS
            </h2>
            <p>
              Ao acessar este site ou utilizar nossas demonstrações de serviços, você concorda em cumprir estes termos e todas as leis e regulamentos aplicáveis. Se você não concordar com algum destes termos, está proibido de usar ou acessar este site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="text-accent-cyan">2.</span> DESCRIÇÃO DOS SERVIÇOS
            </h2>
            <p>
              A Agência atua no desenvolvimento de Landing Pages, Sistemas Web e Agentes de Automação de Processos. As informações e demonstrações contidas no site servem para ilustrar a capacidade técnica da equipe e os possíveis resultados para os clientes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="text-accent-cyan">3.</span> PROPRIEDADE INTELECTUAL
            </h2>
            <p className="mb-4">
              Todo o conteúdo deste site, incluindo textos, logotipos, designs, códigos-fonte e lógicas de automação, são de propriedade exclusiva de <strong>66.696.773 GUILHERME CARDOSO DE CARVALHO</strong> e seu parceiro comercial.
            </p>
            <div className="p-6 rounded-2xl bg-accent-cyan/5 border border-accent-cyan/20 text-accent-cyan/80 text-sm italic">
              É proibida a cópia, reprodução, engenharia reversa ou distribuição de qualquer elemento deste site sem autorização prévia por escrito.
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="text-accent-cyan">4.</span> LIMITAÇÃO DE RESPONSABILIDADE
            </h2>
            <div className="space-y-4">
              <p>
                Embora trabalhemos com tecnologias de ponta como Next.js e n8n, a Agência não garante que o site estará sempre livre de erros ou interrupções.
              </p>
              <p>
                As demonstrações de automação são modelos conceituais. A implementação real de serviços para clientes depende de contratos específicos e análises de viabilidade técnica.
              </p>
              <p>
                Não nos responsabilizamos por danos decorrentes do uso ou da incapacidade de usar os materiais em nosso site.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="text-accent-cyan">5.</span> LINKS DE TERCEIROS
            </h2>
            <p>
              Nosso site pode conter links para serviços externos, como Asaas, Sanity ou Cloudinary, que não são operados por nós. Não temos controle sobre o conteúdo e práticas desses sites e não podemos aceitar responsabilidade por suas respectivas políticas.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="text-accent-cyan">6.</span> MODIFICAÇÕES
            </h2>
            <p>
              A Agência pode revisar estes termos de uso a qualquer momento, sem aviso prévio. Ao usar este site, você concorda em ficar vinculado à versão atual desses termos.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="text-accent-cyan">7.</span> FORO E LEGISLAÇÃO APLICÁVEL
            </h2>
            <p>
              Estes termos são regidos pelas leis da República Federativa do Brasil. Para dirimir quaisquer controvérsias oriundas deste documento, as partes elegem o Foro da Comarca de Osasco, Estado de São Paulo.
            </p>
          </section>
        </div>

        {/* Footer in Page */}
        <div className="mt-16 text-center">
          <p className="text-white/20 text-xs uppercase tracking-widest">© 2026 Aether Solutions • Osasco/SP</p>
        </div>
      </div>
    </main>
  );
}
