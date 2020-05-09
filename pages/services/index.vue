<template>
  <section>
    <h1>//Leistungen</h1>
    <div class="flex flex-wrap">
      <div v-for="service in services" :key="service.title" class="w-full sm:w-1/3 p-4 text-center">
        <font-awesome-icon :icon="['fal', `${service.icon}`]" size="5x" color="#646464" />
        <h2>{{ service.title }}</h2>
        <div v-html="$md.render(service.description)" />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  components: {  },
  data() {

    // Using webpacks context to gather all files from a folder
    const servicesCTX = require.context(
      '~/content/services/',
      false,
      /\.json$/
    );

    const services = servicesCTX.keys().map((key: string) => ({
      ...servicesCTX(key),
      _path: `/services/${key.replace('.json', '').replace('./', '')}`
    }));
    return {services};
  }
});
</script>
