import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [
    tailwind({
      // Using custom CSS file with @layer components
      applyBaseStyles: false,
    }),
  ],
  outDir: './dist',
});
