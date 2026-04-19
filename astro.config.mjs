import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: process.env.PUBLIC_SITE_URL || 'https://clowningfromtheheart.com',
  output: 'static',
  integrations: [
    sitemap(),
  ],
  build: {
    // 'auto' lets async-css.mjs postbuild rewrite the Tailwind bundle to
    // media="print" onload swap. Hand-rolled critical CSS lives in
    // Layout.astro <style is:inline> wrapped in @layer base so Tailwind's
    // @layer utilities always wins the cascade.
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
