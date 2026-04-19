import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import inline from '@playform/inline';

export default defineConfig({
  site: process.env.PUBLIC_SITE_URL || 'https://clowningfromtheheart.com',
  output: 'static',
  integrations: [
    sitemap(),
    // Beasties: extract above-fold critical CSS, inline it, async-load the rest.
    inline(),
  ],
  build: {
    // Let Beasties handle critical inlining; keep auto for the rest.
    inlineStylesheets: 'auto',
  },
  server: { port: 4328, host: true },
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
