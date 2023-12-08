import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import netlify from "@astrojs/netlify/functions";

export default defineConfig({
  renderers: ['@astrojs/renderer-react'],
  integrations: [tailwind()],
  output: "server",
  adapter: netlify(),
});
