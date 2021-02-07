<template>
  <main class="flex flex-col justify-center text-center">
    <h3>Diese Seite konnte nicht gefunden werden.</h3>
    <p>
      Bitte überprüfen Sie die URL oder kehren Sie zurück zur
      <a href="/">Starteite</a>.
    </p>
  </main>
</template>
<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  components: {},
  layout: 'error',
});
</script>
