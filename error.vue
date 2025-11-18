<template>
  <NuxtLayout>
    <main class="flex flex-col justify-center text-center min-h-screen">
      <div v-if="error.statusCode === 404">
        <h1 class="text-6xl font-bold mb-4">404</h1>
        <h3 class="text-2xl mb-4">Diese Seite konnte nicht gefunden werden.</h3>
        <p class="mb-8">
          Bitte überprüfen Sie die URL oder kehren Sie zurück zur
          <NuxtLink to="/" class="text-blue-500 hover:underline">Startseite</NuxtLink>.
        </p>
      </div>
      <div v-else>
        <h1 class="text-6xl font-bold mb-4">{{ error.statusCode }}</h1>
        <h3 class="text-2xl mb-4">Ein Fehler ist aufgetreten</h3>
        <p class="mb-4">{{ error.message }}</p>
        <NuxtLink to="/" class="text-blue-500 hover:underline">Zurück zur Startseite</NuxtLink>
      </div>
    </main>
  </NuxtLayout>
</template>

<script setup lang="ts">
defineProps<{
  error: {
    statusCode: number
    message: string
  }
}>()
</script>
