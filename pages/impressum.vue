<template>
  <div>
    <h1>//{{ imprintData?.title }}</h1>
    <div v-html="imprintData?.content" />
  </div>
</template>

<script setup lang="ts">
import type { ImprintContent } from '~/types/content'

const { data: imprintData } = await useAsyncData('imprint', () =>
  queryContent<ImprintContent>('/imprint/impressum').findOne()
)
</script>
