import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  // Output static HTML/CSS/JS for static hosting
  output: "export",

  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },

  // Production optimizations
  compress: true,
  poweredByHeader: false,

  // Trailing slash for static hosting compatibility
  trailingSlash: true,

  // Experimental features
  experimental: {
    optimizePackageImports: ["lucide-react", "@fontsource/inter"],
  },

  // Note: Security headers need to be configured at the hosting level
  // for static exports (Netlify, Vercel, etc.)
}

export default nextConfig
