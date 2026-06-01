import { defineConfig } from "astro/config";
import netlify from "@astrojs/netlify";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://izitech.co",
  output: "static",
  adapter: netlify(),
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
    build: {
      cssCodeSplit: true,
      assetsInlineLimit: 2048
    }
  },
  prefetch: {
    prefetchAll: true
  },
  compressHTML: true,
  markdown: {
    shikiConfig: {
      theme: "github-dark"
    }
  }
});
