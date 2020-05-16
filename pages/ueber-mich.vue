<template>
	<article>
		<h1>//{{ title }}</h1>
		<div class="flex flex-wrap">
			<figure class="w-full sm:w-1/3 max-w-xs">
				<img :src="image" alt="Sebastian Ulbel" title="Sebastian Ulbel">
				<figcaption class="text-center text-sm">© <a class="text-xs" :href="copyrightLink" target="_blank">{{copyrightText}}</a></figcaption>
			</figure>
			<div v-html="$md.render(content)" class="w-full sm:w-1/2 sm:ml-8 lg:ml-24 max-w-2xl"/>
		</div>
	</article>
</template>

<script>
  export default {
    components: {},
    async asyncData() {
      return await import('~/content/about/ueber-mich.json');
    }
  };
</script>
