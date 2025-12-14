import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [
    tailwind({
      // Disable automatic base.css injection since we define
      // @tailwind directives manually in Layout.astro
      applyBaseStyles: false,
    }),
  ],
  outDir: './dist',
  vite: {
    build: {
      minify: 'terser',
    },
  },
});
