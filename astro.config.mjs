import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.suits.at',
  trailingSlash: 'always',
  devToolbar: {
    enabled: false,
  },
});
