// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://graciairresistible.org',
  integrations: [
    mdx(),
    // Fuera del sitemap: páginas internas o de confirmación.
    sitemap({ filter: (page) => !/\/(design-system|gracias|admin)\//.test(page) }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  image: {
    // AVIF con fallback WebP se maneja vía el componente <Figure> y astro:assets.
    responsiveStyles: true,
  },
});
