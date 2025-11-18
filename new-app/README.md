# SUITS - Portfolio Website

Modern portfolio website for SUITS (Sebastian Ulbel IT-Solutions) built with Next.js 14, React, TypeScript, and Tailwind CSS.

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React
- **Fonts**: Inter (self-hosted via @fontsource)
- **Code Quality**: Biome (linting & formatting)
- **Package Manager**: pnpm
- **Dark Mode**: next-themes

## 📋 Features

- ✅ **Responsive Design**: Mobile-first approach with breakpoints for all devices
- ✅ **Dark/Light Mode**: Seamless theme switching with persistence
- ✅ **SEO Optimized**: Complete metadata, OpenGraph, Twitter cards, sitemap, robots.txt
- ✅ **Accessible**: WCAG compliant with skip links, ARIA labels, keyboard navigation
- ✅ **Type Safe**: Strict TypeScript with advanced type inference
- ✅ **Performance**: Static generation, optimized fonts, code splitting
- ✅ **Security**: CSP headers, XSS protection, CORS configuration

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+
- pnpm 8+

### Installation

```bash
# Clone the repository
git clone https://github.com/suits-at/suits.git
cd suits/new-app

# Install dependencies
pnpm install

# Copy environment variables
cp .env.example .env.local

# Run development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 📦 Available Scripts

```bash
# Development
pnpm dev          # Start dev server with Turbopack
pnpm build        # Build for production
pnpm start        # Start production server

# Code Quality
pnpm lint         # Run Biome linter
pnpm lint:fix     # Fix linting issues
pnpm format       # Format code with Biome
```

## 📁 Project Structure

```
new-app/
├── app/                      # Next.js App Router
│   ├── layout.tsx           # Root layout with providers
│   ├── page.tsx             # Homepage
│   ├── globals.css          # Global styles & design tokens
│   ├── not-found.tsx        # 404 page
│   ├── error.tsx            # Error boundary
│   ├── loading.tsx          # Loading UI
│   ├── sitemap.ts           # Dynamic sitemap
│   ├── robots.ts            # Robots.txt
│   ├── leistungen/          # Services page
│   ├── ueber-mich/          # About page
│   ├── kontakt/             # Contact page
│   ├── impressum/           # Legal/Imprint page
│   └── references/[slug]/   # Dynamic reference pages
├── components/
│   ├── ui/                  # Reusable UI components
│   │   ├── button.tsx
│   │   └── card.tsx
│   ├── header.tsx           # Site header
│   ├── footer.tsx           # Site footer
│   ├── theme-provider.tsx   # Theme context
│   └── theme-toggle.tsx     # Dark mode toggle
├── data/
│   ├── references.ts        # Portfolio projects data
│   └── services.ts          # Services data
├── lib/
│   └── utils.ts             # Utility functions
├── public/
│   └── images/              # Static images
├── biome.json               # Biome configuration
├── next.config.ts           # Next.js configuration
├── package.json             # Dependencies
└── tsconfig.json            # TypeScript configuration
```

## 🎨 Design System

### Colors

The site uses OKLCH color space for consistent, perceptually uniform colors:

- **Primary**: Blue (#49a3df in legacy, oklch(0.59 0.15 231))
- **Background**: White/Dark gray based on theme
- **Foreground**: Dark gray/Light gray based on theme

### Typography

- **Font Family**: Inter (self-hosted)
- **Weights**: 400 (Regular), 500 (Medium), 600 (Semibold), 700 (Bold)
- **Base Size**: 16px
- **Scale**: Responsive with tailwind

## 🌍 Content

All content is embedded directly in TypeScript files (no CMS required):

- **Services**: 9 services defined in `data/services.ts`
- **References**: 29 portfolio projects in `data/references.ts`
- **Pages**: Static content in page components

## 🔧 Configuration

### Environment Variables

See `.env.example` for required/optional environment variables.

### Next.js Config

- **Output**: Static export for easy hosting
- **Image Optimization**: Disabled for static export
- **Security Headers**: CSP, XSS, Frame Options
- **Compression**: Enabled for production

## 📱 Pages

1. **Homepage** (`/`) - Hero section + references gallery
2. **Services** (`/leistungen`) - 9 service offerings
3. **About** (`/ueber-mich`) - Profile and bio
4. **Contact** (`/kontakt`) - Contact information + map
5. **Legal** (`/impressum`) - Imprint and privacy policy
6. **References** (`/references/[slug]`) - Individual project pages

## 🚀 Deployment

### Static Export

```bash
# Build static files
pnpm build

# Output will be in the `out/` directory
# Upload to any static hosting (Netlify, Vercel, GitHub Pages, etc.)
```

### Netlify

1. Build command: `pnpm build`
2. Publish directory: `out`
3. Node version: 18+

### Vercel

The site will auto-deploy when pushed to the main branch.

## 🧪 Browser Support

- Chrome/Edge (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

This is a personal portfolio site. If you find bugs or have suggestions, please open an issue.

## 📄 License

© 2024 SUITS (Sebastian Ulbel IT-Solutions). All rights reserved.

## 👤 Author

**DI Sebastian Ulbel**
- Website: [suits.at](https://suits.at)
- Email: [office@suits.at](mailto:office@suits.at)
- GitHub: [@suits-at](https://github.com/suits-at)
- LinkedIn: [suits-at](https://www.linkedin.com/in/suits-at/)
- Twitter: [@suits_at](https://twitter.com/suits_at)
