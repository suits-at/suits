<template>
  <section>
    <h1 class="leading-none break-words">{{ title }}</h1>
    <p>Datum: {{ date }}</p>
    <p v-if="url.startsWith('http')">
      Website: <a class="break-words" :href="url" target="_blank">{{ url }}</a>
    </p>
    <p v-else>{{ url }}</p>
    <img :src="screenshot" :alt="title" :title="title" class="mb-8" />
    <nuxt-link to="/#referenzen/" class="custom-link"
      >zurück zu den Referenzen</nuxt-link
    >
  </section>
</template>

<script>
export default {
  async asyncData({ params }) {
    return await import('../../content/references/' + params.slug + '.json');
  },
};
</script>
<style lang="scss" scoped>
.custom-link {
  color: #646464;
  &:hover {
    text-decoration: underline;
  }
}
</style>
