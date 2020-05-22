<template>
  <section>
    <h1>{{ title }}</h1>
    <p>Datum: {{ date }}</p>
    <p>Website: <a :href="url" target="_blank">{{ url }}</a></p>
    <img :src="screenshot" />
  </section>
</template>

<script>
export default {
  async asyncData({ params }) {
    return await import('~/content/references/' + params.slug + '.json');
  }
};
</script>
