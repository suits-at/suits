<template>
  <article>
    <p>{{ icon }}</p>
    <h2>{{ title }}</h2>
    <div>{{ description }}</div>
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
