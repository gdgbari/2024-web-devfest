import mdx from "@astrojs/mdx";
import partytown from "@astrojs/partytown";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import AstroPWA from "@vite-pwa/astro";
import { defineConfig } from "astro/config";
import react from "@astrojs/react";

import robotsTxt from "astro-robots-txt";
import { WebsiteConfig } from "./src/config";

// https://astro.build/config
export default defineConfig({
  site: "https://dev.devfest.it",
  i18n: {
    defaultLocale: "it",
    locales: ["it", "en"],
    routing:{
      prefixDefaultLocale: false,
    }
  },
  integrations: [
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
    mdx(),
    sitemap(),
    tailwind(),
    robotsTxt(),
    react(),
  ],
});
