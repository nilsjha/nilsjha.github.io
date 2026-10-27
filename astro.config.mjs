import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import solidJs from "@astrojs/solid-js";

// https://astro.build/config
export default defineConfig({
  site: "https://nilsjha.github.io",
  integrations: [
    solidJs({
      include: ["**/solid/*"],
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
