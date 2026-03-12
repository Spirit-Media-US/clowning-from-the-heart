import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: process.env.PUBLIC_SITE_URL || 'https://clowningfromtheheart.com',
  output: 'static',
  integrations: [sitemap()],
  server: { port: 4323, host: true },
  vite: {
    plugins: [tailwindcss()],
    server: {
      host: true,
      strictPort: false,
      allowedHosts: true,
    },
    preview: {
      host: true,
      strictPort: false,
      allowedHosts: true,
    },
  },
});
