<template>
  <section>
    <h1>//{{ title }}</h1>
    <div class="flex flex-wrap justify-center">
      <figure class="w-full sm:w-1/3" style="max-width: 24rem">
        <img :src="image" alt="Sebastian Ulbel" title="Sebastian Ulbel" />
      </figure>
      <div
        class="w-full sm:w-1/2 sm:ml-8 lg:ml-24 max-w-2xl sm:-mt-4"
        v-html="$md.render(content)"
      />
    </div>
  </section>
</template>

<script>
export default {
  components: {},
  async asyncData() {
    return await import('~/content/about/ueber-mich.json');
  },
};
</script>
<!--not scoped on purpose!-->
<style lang="scss">
ul:not(.list-none) {
  list-style: none;
  li::before {
    content: '\2022';
    color: #49a3df;
    font-weight: bold;
    display: inline-block;
    width: 1em;
    margin-left: -1em;
  }
}
</style>
