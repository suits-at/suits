<template>
  <article>
    <p>{{ icon }}</p>
    <h2>{{ title }}</h2>
    <div v-html="$md.render(description)" />
  </article>
</template>

<script>
export default {
  components: {},
  async asyncData({ params }) {
    return await import('~/assets/content/services/' + params.slug + '.json')
  }
}
</script>
