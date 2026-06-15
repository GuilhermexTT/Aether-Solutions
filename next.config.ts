import type { NextConfig } from "next";

// Definição da Content Security Policy (CSP) segura adaptada ao Next.js e aos serviços utilizados
const cspHeader = `
  default-src 'self';
  script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com;
  style-src 'self' 'unsafe-inline';
  img-src 'self' blob: data: https://res.cloudinary.com https://www.googletagmanager.com https://www.google-analytics.com https://googleads.g.doubleclick.net https://www.google.com https://www.google.com.br;
  media-src 'self' https://res.cloudinary.com;
  connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://googleads.g.doubleclick.net https://res.cloudinary.com;
  font-src 'self' data:;
  object-src 'none';
  base-uri 'self';
  frame-ancestors 'none';
  frame-src 'self' https://www.google.com;
  upgrade-insecure-requests;
`.replace(/\s{2,}/g, ' ').trim();

const nextConfig: NextConfig = {
  // 1. Remove o cabeçalho X-Powered-By das requisições, ocultando o Next.js de atacantes
  poweredByHeader: false,

  // 2. Otimização e Segurança de Imagens Remotas
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },

  // 3. Remoção automática de console.logs em builds de produção para evitar vazamento de depurações
  compiler: {
    removeConsole: process.env.NODE_ENV === "production" ? { exclude: ["error", "warn"] } : false,
  },

  // 4. Injeção de Cabeçalhos HTTP de Segurança
  async headers() {
    if (process.env.NODE_ENV !== "production") {
      return [];
    }
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: cspHeader,
          },
          {
            key: "X-Frame-Options",
            value: "DENY", // Protege contra Clickjacking (impede o site de ser embutido em <iframe>)
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff", // Evita ataques de MIME-sniffing
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin", // Restringe informações de cabeçalho Referer
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), interest-cohort=()", // Restringe recursos de hardware não utilizados
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload", // HSTS de 2 anos (força criptografia HTTPS estrita)
          },
        ],
      },
    ];
  },
};

export default nextConfig;
