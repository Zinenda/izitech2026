import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://example.netlify.app',
  vite: {
    plugins: [tailwindcss()],
  },
});
