import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://adisea.com.br';

  // Páginas estáticas principais
  const routes = [
    '',
    '/solucoes/agentes',
    '/solucoes/sites',
    '/solucoes/personalizado',
    '/politica-de-privacidade',
    '/termos-de-uso',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Simulação de páginas dinâmicas de portfólio.
  // Em um cenário real, você faria um fetch de um banco de dados ou CMS (ex: Sanity) para listar todos os slugs.
  const portfolioProjects = [
    'taina-estetica',
    'agentbot-ai',
    'oak-viz'
  ].map((slug) => ({
    url: `${baseUrl}/portfolio/${slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...routes, ...portfolioProjects];
}
