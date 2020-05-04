<template>
  <article>
    <h1 class="title">//{{ title }}</h1>
    <div v-html="$md.render(content)" />
  </article>
</template>

<script>
export default {
  components: {},
  async asyncData({ params }) {
    return await import('~/content/pages/' + params.slug + '.json')
  }
}
</script>
