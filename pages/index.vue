<template>
  <div class="container">
    <div>
      <logo />
      <h2 class="subtitle">
        <nuxt-link :to="'/services'" >Services</nuxt-link>
      </h2>
      <ul>
        <li class="subtitle" v-for="page in pages" :key="page.title">
          <nuxt-link :to="page._path">
            {{ page.title }}
          </nuxt-link>
        </li>
      </ul>
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
      <div class="links">
        <a href="https://nuxtjs.org/" target="_blank" class="button--green">
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
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
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
