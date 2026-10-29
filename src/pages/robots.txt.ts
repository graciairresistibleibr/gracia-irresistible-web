import type { APIRoute } from 'astro';

const getRobots = (site: URL | undefined) => `User-agent: *
Allow: /
Disallow: /admin/
Disallow: /design-system/
Disallow: /gracias/

Sitemap: ${new URL('sitemap-index.xml', site ?? 'https://graciairresistible.org').href}
`;

export const GET: APIRoute = ({ site }) =>
  new Response(getRobots(site), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
