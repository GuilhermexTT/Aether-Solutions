import { FiLock } from "react-icons/fi";
import Link from "next/link";

export default function PrivacyPolicy() {
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
            <FiLock className="text-3xl text-accent-cyan drop-shadow-[0_0_10px_rgba(0,242,255,0.8)]" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4 uppercase">
            Política de <span className="text-accent-cyan">Privacidade</span>
          </h1>
          <p className="text-white/40 font-light">Última atualização: 13 de maio de 2026</p>
        </div>

        {/* Content */}
        <div className="bg-white/[0.02] backdrop-blur-xl border border-white/5 rounded-[40px] p-8 md:p-16 text-white/70 font-light leading-relaxed space-y-12">
          <section>
            <p>
              Esta Política de Privacidade descreve como a <strong>66.696.773 GUILHERME CARDOSO DE CARVALHO</strong> (&quot;Agência&quot;) coleta, usa e protege as informações pessoais de usuários que acessam nosso site ou utilizam nossos serviços de tecnologia e automação.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="text-accent-cyan">1.</span> INFORMAÇÕES QUE COLETAMOS
            </h2>
            <p className="mb-6">Coletamos informações que você nos fornece diretamente através de nossos formulários de contato, e-mail ou WhatsApp, incluindo:</p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-accent-cyan mt-2" />
                <span><strong>Dados de Identificação:</strong> Nome completo e Razão Social.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-accent-cyan mt-2" />
                <span><strong>Dados de Contato:</strong> E-mail e número de telefone/WhatsApp.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-accent-cyan mt-2" />
                <span><strong>Dados de Projeto:</strong> Informações sobre o seu negócio e necessidades de automação ou desenvolvimento web.</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="text-accent-cyan">2.</span> FINALIDADE DO TRATAMENTO DE DADOS
            </h2>
            <p className="mb-6">Utilizamos os dados coletados exclusivamente para:</p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-accent-cyan mt-2" />
                <span>Responder a solicitações de orçamento e dúvidas técnicas.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-accent-cyan mt-2" />
                <span>Executar os serviços contratados (desenvolvimento de sites e agentes de IA).</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-accent-cyan mt-2" />
                <span>Processar pagamentos através de nossos parceiros financeiros (como o Asaas).</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-accent-cyan mt-2" />
                <span>Cumprir obrigações legais e fiscais relacionadas à emissão de Notas Fiscais pelo nosso CNPJ.</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="text-accent-cyan">3.</span> COMPARTILHAMENTO DE DADOS COM TERCEIROS
            </h2>
            <p className="mb-6">Não vendemos ou alugamos seus dados pessoais. Compartilhamos informações apenas com parceiros essenciais para a operação do serviço, tais como:</p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-accent-cyan mt-2" />
                <span><strong>Provedores de Infraestrutura:</strong> Serviços de hospedagem e gestão de conteúdo (como Sanity e Cloudinary).</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-accent-cyan mt-2" />
                <span><strong>Plataformas de Pagamento:</strong> Para processamento de cobranças via boleto, PIX ou cartão.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-accent-cyan mt-2" />
                <span><strong>Autoridades Legais:</strong> Quando exigido por lei ou para proteger nossos direitos jurídicos.</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="text-accent-cyan">4.</span> SEGURANÇA DOS DADOS
            </h2>
            <p>
              Implementamos medidas técnicas e organizacionais para proteger seus dados contra acessos não autorizados, perda ou alteração. Como profissionais de tecnologia, priorizamos o uso de protocolos seguros e ferramentas de mercado confiáveis em nossas automações.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="text-accent-cyan">5.</span> SEUS DIREITOS (LGPD)
            </h2>
            <p className="mb-6">De acordo com a Lei Geral de Proteção de Dados, você tem o direito de:</p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-accent-cyan mt-2" />
                <span>Confirmar a existência de tratamento de seus dados.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-accent-cyan mt-2" />
                <span>Acessar, corrigir ou atualizar suas informações.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-accent-cyan mt-2" />
                <span>Solicitar a exclusão de seus dados pessoais de nossa base de contatos.</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="text-accent-cyan">6.</span> COOKIES E TECNOLOGIAS DE RASTREIO
            </h2>
            <p>
              Nosso site pode utilizar cookies para melhorar a experiência de navegação e analisar o tráfego. Você pode gerenciar as preferências de cookies diretamente nas configurações do seu navegador.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="text-accent-cyan">7.</span> ALTERAÇÕES NESTA POLÍTICA
            </h2>
            <p>
              Reservamo-nos o direito de atualizar esta política periodicamente para refletir mudanças em nossas práticas ou por motivos regulatórios. Recomendamos a consulta regular a esta página.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="text-accent-cyan">8.</span> CONTATO
            </h2>
            <div className="p-8 rounded-[32px] bg-accent-cyan/5 border border-accent-cyan/20">
              <p className="mb-4 text-white font-medium text-lg">Dúvidas sobre seus dados?</p>
              <p className="mb-6">Para exercer seus direitos ou tirar dúvidas sobre como tratamos seus dados, entre em contato através do nosso canal oficial:</p>
              <a 
                href="mailto:contato@aethersolutions.com.br" 
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent-cyan/10 border border-accent-cyan/30 text-accent-cyan font-bold hover:bg-accent-cyan/20 transition-all"
              >
                contato@aethersolutions.com.br
              </a>
            </div>
          </section>
        </div>

        {/* Footer in Page */}
        <div className="mt-16 text-center">
          <p className="text-white/20 text-xs uppercase tracking-widest">© 2026 Aether Solutions • LGPD Compliance</p>
        </div>
      </div>
    </main>
  );
}
