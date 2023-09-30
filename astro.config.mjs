import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://nilsjha.github.io",
  outDir: "docs",
  base: "/",
  integrations: [tailwind()],
});
