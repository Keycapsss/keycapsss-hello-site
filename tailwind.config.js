// See https://tailwindcss.com/docs/configuration for details
import forms from "@tailwindcss/forms";

export default {
  content: [],
  // Astro integration handles content configuration automatically
  // https://docs.astro.build/en/guides/integrations-guide/tailwind/
  safelist: [
    // This allows Astro's Tailwind integration to work while suppressing the warning
    { pattern: /.*/ },
  ],
  plugins: [forms],
};
