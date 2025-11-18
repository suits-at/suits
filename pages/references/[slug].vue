<template>
  <section>
    <h1 class="leading-none break-words">{{ reference?.title }}</h1>
    <p>Datum: {{ reference?.date }}</p>
    <p v-if="reference?.url?.startsWith('http')">
      Website: <a class="break-words" :href="reference.url" target="_blank">{{ reference.url }}</a>
    </p>
    <p v-else>{{ reference?.url }}</p>
    <img :src="reference?.screenshot" :alt="reference?.title" :title="reference?.title" class="mb-8" />
    <NuxtLink to="/#referenzen/" class="custom-link"
      >zurück zu den Referenzen</NuxtLink
    >
  </section>
</template>

<script setup lang="ts">
const route = useRoute()
const slug = route.params.slug

const { data: reference } = await useAsyncData(`reference-${slug}`, () =>
  queryContent(`/references/${slug}`).findOne()
)
</script>

<style lang="scss" scoped>
.custom-link {
  color: #646464;
  &:hover {
    text-decoration: underline;
  }
}
</style>
