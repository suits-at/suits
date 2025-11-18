<template>
  <section>
    <h1>//Leistungen</h1>
    <div class="flex flex-wrap justify-center">
      <div
        v-for="leistung in leistungen"
        :key="leistung._path"
        class="w-full sm:w-1/3 px-8 py-4 text-center"
      >
        <font-awesome-icon
          v-if="leistung.icon"
          :icon="['fal', `${leistung.icon}`]"
          size="5x"
          color="#646464"
        />
        <h2>{{ leistung.title }}</h2>
        <div v-if="leistung.description" v-html="leistung.description" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Query content from the content directory
const { data: leistungen } = await useAsyncData('services', () =>
  queryContent('/services')
    .find()
)
</script>
