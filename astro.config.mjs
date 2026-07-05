import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.suits.at',
  trailingSlash: 'always',
  integrations: [sitemap()],
  devToolbar: {
    enabled: false,
  },
});
