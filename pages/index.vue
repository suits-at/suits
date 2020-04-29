<template>
  <div class="container">
    <div>
      <logo />
      <h2 class="subtitle">
        Referenzen
      </h2>
      <ul>
        <li v-for="reference in references" :key="reference.title">
          <nuxt-link :to="reference._path">
            {{ reference.title }}
          </nuxt-link>
        </li>
      </ul>
     <!-- <div class="links">
        <a href="https://nuxtjs.org/" target="_blank" class="button&#45;&#45;green">
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button&#45;&#45;grey"
        >
          GitHub
        </a>
      </div>-->
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Logo from '~/components/Logo.vue'

export default Vue.extend({
  components: {
    Logo
  },
  data() {
    // Using webpacks context to gather all files from a folder
    const referencesCTX = require.context(
      '~/content/references/',
      false,
      /\.json$/
    )

    const references = referencesCTX.keys().map((key: string) => ({
      ...referencesCTX(key),
      _path: `/references/${key.replace('.json', '').replace('./', '')}`
    }))

    // Using webpacks context to gather all files from a folder
    const pagesCTX = require.context(
      '~/content/pages/',
      false,
      /\.json$/
    )

    const pages = pagesCTX.keys().map((key: string) => ({
      ...pagesCTX(key),
      _path: `/pages/${key.replace('.json', '').replace('./', '')}`
    }))

    return { references, pages }
  },
  mounted(): void {
    // @ts-ignore
    if (window.netlifyIdentity) {
      // @ts-ignore
      window.netlifyIdentity.on('init', (user: any) => {
        if (!user) {
          // @ts-ignore
          window.netlifyIdentity.on('login', () => {
            document.location.href = '/admin/'
          })
        }
      })
    }
  },
  head() {
    return {
      script: [
        {
          src: 'https://identity.netlify.com/v1/netlify-identity-widget.js',
          defer: true
        }
      ]
    }
  }
})
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  align-items: center;
  /*min-height: 100vh;*/
  display: flex;
  justify-content: center;
  margin: 0 auto;
  text-align: center;
}

.title {
  color: #35495e;
  display: block;
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 100px;
  font-weight: 300;
  letter-spacing: 1px;
}

.subtitle {
  color: #526488;
  font-size: 42px;
  font-weight: 300;
  padding-bottom: 15px;
  word-spacing: 5px;
}

.links {
  padding-top: 15px;
}
</style>
