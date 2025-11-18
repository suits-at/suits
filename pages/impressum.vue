<template>
  <div>
    <h1>//{{ imprintData?.title }}</h1>
    <div v-html="imprintData?.content" />
  </div>
</template>

<script setup lang="ts">
const { data: imprintData } = await useAsyncData('imprint', () =>
  queryContent('/imprint/impressum').findOne()
)
</script>
