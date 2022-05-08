import { defineNuxtConfig } from 'nuxt';

export default defineNuxtConfig({
  builder: 'webpack',
});

/* export default defineNuxtConfig({
  builder: 'webpack',
  target: 'static',
  /!*
   ** Headers of the page
   *!/
  head: {
    title: 'SUITS',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
      { name: 'msapplication-TileColor', content: '#ffffff' },
      { name: 'msapplication-TileImage', content: '/ms-icon-144x144.png' },
      { name: 'theme-color', content: '#ffffff' },
    ],
    link: [
      { rel: 'preconnect', href: 'https://cdn.jsdelivr.net' }, // preconnect serviceworker
      {
        rel: 'preload',
        href: '/fonts/work-sans-v7-latin-regular.woff2',
        as: 'font',
        type: 'font/woff2',
        crossorigin: 'true',
      },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'apple-touch-icon',
        sizes: '57x57',
        href: '/apple-icon-57x57.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '60x60',
        href: '/apple-icon-60x60.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '72x72',
        href: '/apple-icon-72x72.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '76x76',
        href: '/apple-icon-76x76.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '114x114',
        href: '/apple-icon-114x114.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '120x120',
        href: '/apple-icon-120x120.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '144x144',
        href: '/apple-icon-144x144.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '152x152',
        href: '/apple-icon-152x152.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-icon-180x180.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '192x192',
        href: '/android-icon-192x192.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '96x96',
        href: '/favicon-96x96.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png',
      },
      // {rel:"manifest", href:"/manifest.json"}
    ],
  },
  /!*
   ** Customize the progress-bar color
   *!/
  loading: { color: '#fff' },
  /!*
   ** Global CSS
   *!/
  css: [
    // '@fortawesome/fontawesome-svg-core/styles.css',
    // '~/assets/css/main.scss',
  ],
  /!*
   ** Plugins to load before mounting the App
   *!/
  // plugins: ['~/plugins/fontawesome.ts'],
  /!*
   ** Nuxt.js dev-modules
   *!/
  modules: [
    // '@nuxtjs/tailwindcss',
    // 'vue-scrollto/nuxt',
    // '@nuxtjs/markdownit',
    // 'nuxt-lazy-load',
    [
      '@nuxtjs/robots',
      {
        UserAgent: '*',
        Disallow: '/admin',
        Sitemap: '/sitemap.xml',
      },
    ],
    [
      '@nuxtjs/sitemap',
      {
        hostname: 'https://www.suits.at',
        gzip: true,
        cacheTime: 900000,
      },
    ],
  ],
  /!*
   ** Nuxt.js modules
   *!/
  env: {
    MAPS_KEY: process.env.MAPS_KEY,
  },
  /!*  markdownit: {
    injected: true,
  }, *!/
  purgeCSS: {
    whitelistPatterns: [/svg.*!/, /fa.*!/],
  },
  /!*
   ** Build configuration
   *!/
  build: {
    /!*
     ** You can extend webpack config here
     *!/
    /!*    extend (config, ctx) {
      if (ctx && ctx.isClient) {
         config.optimization.splitChunks.chunks = 'all';
         config.optimization.splitChunks.maxSize = 102400;
      }
    } *!/
  },
  generate: {
    fallback: true,
  },
  render: { asyncScripts: true },
}); */
