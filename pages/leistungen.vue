<template>
	<section>
		<h1>//Leistungen</h1>
		<div class="flex flex-wrap">
			<div v-for="leistung in leistungen" :key="leistung.title" class="w-full sm:w-1/3 p-4 text-center">
				<font-awesome-icon :icon="['fal', `${leistung.icon}`]" size="5x" color="#646464"/>
				<h2>{{ leistung.title }}</h2>
				<div v-html="$md.render(leistung.description)"/>
			</div>
		</div>
	</section>
</template>

<script lang="ts">
  import Vue from 'vue';

  export default Vue.extend({
    components: {},
    data() {

      // Using webpacks context to gather all files from a folder
      const leistungenCTX = require.context(
        '~/content/services/',
        false,
        /\.json$/
      );

      const leistungen = leistungenCTX.keys().map((key: string) => ({
        ...leistungenCTX(key),
        _path: `/leistungen/${key.replace('.json', '').replace('./', '')}`
      }));
      return { leistungen };
    }
  });
</script>
