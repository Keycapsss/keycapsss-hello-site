# Keycapsss Link Site

A static site built with Astro and Tailwind CSS. A simple link tree for the Keycapsss mechanical keyboard shop.

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
npm install
```

## Available Scripts

### Development
- **`npm run dev`** - Start the local development server with hot reload (http://localhost:4321/)
- **`npm run preview`** - Preview the production build locally before deployment

### Build
- **`npm run build`** - Create an optimized production build (outputs to `dist/`)

### Code Quality

#### Linting & Formatting
- **`npm run analyze`** - Run both Prettier and ESLint checks (reports issues without fixing)
- **`npm run analyze:prettier`** - Check code formatting with Prettier
- **`npm run analyze:eslint`** - Check code quality with ESLint

#### Auto-fixing
- **`npm run fix`** - Auto-fix all code formatting and linting issues
- **`npm run fix:prettier`** - Auto-format code with Prettier
- **`npm run fix:eslint`** - Auto-fix ESLint violations

## Project Structure

```
src/
├── pages/
│   └── index.astro          # Main landing page
├── layouts/
│   └── Layout.astro         # Base layout with styling
public/
├── favicon.svg              # SVG favicon
├── favicon.png              # PNG favicon
└── keycapsss-logo.svg       # Site logo
```

## Technologies

- **Framework:** Astro 5.16.5
- **Styling:** Tailwind CSS 3.0.24
- **Code Quality:** ESLint + Prettier
- **Deployment:** Static site (outputs to `dist/`)

## Deployment

This project builds to a `dist/` folder suitable for static hosting (Coolify, Netlify, Vercel, GitHub Pages, etc.).

```bash
npm run build  # Creates dist/ folder
```

## License

MIT
