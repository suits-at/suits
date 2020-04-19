<template>
  <section>
    <h1 class="title">Services</h1>
    <ul>
      <li v-for="service in services" :key="service.title">
        <nuxt-link :to="service._path">
          {{ service.title }}
        </nuxt-link>
      </li>
    </ul>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  components: {  },
  data() {

    // Using webpacks context to gather all files from a folder
    const servicesCTX = require.context(
      '~/content/services/',
      false,
      /\.json$/
    )

    const services = servicesCTX.keys().map((key: string) => ({
      ...servicesCTX(key),
      _path: `/services/${key.replace('.json', '').replace('./', '')}`
    }))
    return {services};
  }
})
</script>
