import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import Script from "next/script";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://aethersolutions.com.br'),
  title: {
    default: "Adisea | IA para um Futuro Inteligente",
    template: "%s | Adisea"
  },
  description: "Adisea constrói a infraestrutura de IA mais avançada do planeta para empresas que desejam escalar sem limites. Criação de sites premium e Agentes de IA.",
  keywords: ["Inteligência Artificial", "Criação de Sites", "Agentes WhatsApp", "Automação", "Desenvolvimento Web", "Design Premium"],
  authors: [{ name: "Adisea" }],
  creator: "Adisea",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://aethersolutions.com.br",
    title: "Adisea | Inovação em IA e Web",
    description: "Infraestrutura de IA e Sites Premium para transformar seu negócio.",
    siteName: "Adisea",
    images: [
      {
        url: "/images/logo-principal.png", // Usando o logo principal como fallback de compartilhamento
        width: 1200,
        height: 630,
        alt: "Adisea - IA para um Futuro Inteligente",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Adisea | Inovação em IA",
    description: "Infraestrutura de IA e Sites Premium para escalar sem limites.",
    images: ["/images/logo-principal.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${outfit.variable} h-full antialiased`} suppressHydrationWarning>
      <head>
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18189285029"
          strategy="afterInteractive"
        />
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18189285029');
          `}
        </Script>
        <Script id="google-conversion-snippet" strategy="afterInteractive">
          {`
            function gtag_report_conversion(url) {
              var callback = function () {
                if (typeof(url) != 'undefined') {
                  window.location = url;
                }
              };
              if (typeof gtag === 'function') {
                gtag('event', 'conversion', {
                    'send_to': 'AW-18189285029/4xdACJn2pbMcEKXtqeFD',
                    'value': 1.0,
                    'currency': 'BRL',
                    'event_callback': callback
                });
              }
              return false;
            }
            window.gtag_report_conversion = gtag_report_conversion;
          `}
        </Script>
      </head>
      <body className="min-h-full flex flex-col font-sans">
        {children}
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
