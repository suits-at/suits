<template>
  <div>
    <h1>//{{ title }}</h1>
    <div v-html="$md.render(content)" />
  </div>
</template>

<script>
export default {
  components: {},
  async asyncData() {
    return await import('~/content/impressum.json');
  }
};
</script>
