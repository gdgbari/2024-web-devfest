import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import AstroPWA from "@vite-pwa/astro";
import partytown from "@astrojs/partytown";
import { WebsiteConfig } from "./src/config";

// https://astro.build/config
export default defineConfig({
  i18n: {
    defaultLocale: "it",
    locales: ["it", "en"],
    routing: {
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
    tailwind({
      applyBaseStyles: false,
    }),
    react(),
  ],
});
