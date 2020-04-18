<template>
  <article>
    <h2>{{ title }}</h2>
    <div v-html="$md.render(content)" />
  </article>
</template>

<script>
export default {
  components: {},
  async asyncData({ params }) {
    return await import('~/assets/content/pages/' + params.slug + '.json')
  }
}
</script>
