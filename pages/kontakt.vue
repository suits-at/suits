<template>
  <section class="override-link-color">
    <h1>//{{ title }}</h1>
    <div class="mb-8 max-w-4xl" v-html="$md.render(content)" />
    <div class="flex flex-wrap">
      <div class="w-full sm:w-1/3 text-center my-4">
        <font-awesome-icon :icon="['fal', iconMe]" size="3x" color="#646464" />
        <div v-html="$md.render(textMe)" />
      </div>
      <div class="w-full sm:w-1/3 text-center py-4">
        <font-awesome-icon
          :icon="['fal', iconLocation]"
          size="3x"
          color="#646464"
        />
        <div v-html="$md.render(textLocation)" />
      </div>
      <div class="w-full sm:w-1/3 text-center py-4">
        <font-awesome-icon
          :icon="['fal', iconMail]"
          size="3x"
          color="#646464"
        />
        <div v-html="$md.render(textMail)" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  components: {},
  async asyncData() {
    return await import('~/content/contact/kontakt.json');
  },
};
</script>
