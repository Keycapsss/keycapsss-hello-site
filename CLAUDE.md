# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A static link tree site for the Keycapsss mechanical keyboard shop, built with Astro and Tailwind CSS. Simple single-page application with social media links.

## Commands

### Development

- `npm run dev` - Start dev server at http://localhost:4321/ with hot reload
- `npm run preview` - Preview production build locally

### Build

- `npm run build` - Create production build to `dist/`

### Code Quality

- `npm run analyze` - Run Prettier + ESLint checks (no fixes)
- `npm run analyze:prettier` - Check formatting only
- `npm run analyze:eslint` - Check linting only
- `npm run fix` - Auto-fix all formatting and linting issues
- `npm run fix:prettier` - Auto-format with Prettier
- `npm run fix:eslint` - Auto-fix ESLint violations

## Architecture

### Framework: Astro 5.16.5

- Fully static site generation (SSG) - no server-side rendering
- Build output goes to `dist/` containing pre-rendered HTML/CSS/JS
- Deployed via GitHub Actions to `dist` branch, then served via Nginx in Coolify
- Vite bundler with Terser minification (configured in [astro.config.mjs](astro.config.mjs))

### Project Structure

```
src/
├── layouts/Layout.astro  - Base layout with <head>, Tailwind setup, footer
├── pages/index.astro     - Landing page with link list and metadata
public/                   - Static assets (logo, favicons)
```

### Styling: Tailwind CSS 3.4.x

- Global styles defined in [Layout.astro:59-63](src/layouts/Layout.astro#L59-L63) using `<style is:global>`
- Tailwind directives (@tailwind base/components/utilities) defined manually (applyBaseStyles disabled in Astro config)
- Content paths configured in [tailwind.config.js](tailwind.config.js) to scan `./src/**/*.{astro,html,...}`
- Uses [@tailwindcss/forms](tailwind.config.js) plugin

### Component Pattern

- Props defined via TypeScript interfaces in frontmatter
- SEO metadata (OG tags, Twitter cards) set in page frontmatter
- Content injected via `<slot />` in layouts

## Code Quality Standards

### ESLint Configuration ([eslint.config.js](eslint.config.js))

- Uses new flat config format (ESLint 9+)
- `eslint-plugin-astro` for `.astro` files with `astro-eslint-parser`
- `@typescript-eslint/parser` for TypeScript in Astro frontmatter
- Ignores: `dist/`, `.astro/`, `node_modules/`

### Prettier Configuration ([.prettierrc.json](.prettierrc.json))

- Print width: 100
- Double quotes (singleQuote: false)
- Tab width: 2
- ES5 trailing commas
- Uses `prettier-plugin-astro` for `.astro` file formatting

## Deployment

GitHub Actions workflow ([.github/workflows/deploy.yml](.github/workflows/deploy.yml)) builds and deploys to `dist` branch on push to `main`:

1. Checkout with full history
2. Setup Node.js 22 with npm cache
3. Install deps via `npm ci`
4. Build via `npm run build`
5. Deploy `dist/` to orphan `dist` branch (no history)
