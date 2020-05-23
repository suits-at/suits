<template>
	<div>
		<nav v-show="menuOpen" class="absolute h-screen w-screen z-50 bg-gray-100 p-4">
			<p @click="toggleMenu">CLOSE</p>
			<ul @click="toggleMenu">
				<li>
					<nuxt-link to="/#referenzen/">Referenzen</nuxt-link>
				</li>
				<li>
					<nuxt-link to="/ueber-mich/">Über mich</nuxt-link>
				</li>
				<li>
					<nuxt-link to="/leistungen/">Leistungen</nuxt-link>
				</li>
				<li>
					<nuxt-link to="/kontakt/">Kontakt</nuxt-link>
				</li>
			</ul>
		</nav>
		<div v-show="!menuOpen" class="container">
			<header
				class="flex flex-wrap container px-0 justify-between fixed z-10 py-4 top-0"
			>
				<nuxt-link to="/" class="p-0" title="Startseite" alt="Startseite">
					<svg
						class="inline"
						xmlns="http://www.w3.org/2000/svg"
						width="134"
						height="52"
						viewBox="0 0 767.7 295.8"
					>
						<title>SUITS Logo</title>
						<style type="text/css">
							.st1 {
								fill: #646464;
							}
						</style>
						<rect x="-1776.1" y="-1165.8" class="st1" width="3.4" height="1.7"/>
						<polygon
							class="st1"
							points="425.3 47.4 409.3 47.4 393.4 47.4 381.4 265.6 409.3 295.8 437.3 265.6 "
						/>
						<path
							class="st1"
							d="M419.4 0.6c-2.4-0.8-17.7-0.8-20.1 0 -3.7 1.1-8.3 5-9.4 8.8 -1.4 5.1 3.4 20.2 3.4 20.2h16 16c0 0 4.8-15.1 3.4-20.2C427.7 5.5 423.1 1.7 419.4 0.6z"
						/>
						<path
							class="st1"
							d="M123.9 100.7c-9-12.2-20.5-19.9-36.3-19.9 -15.1 0-29.5 11.6-29.5 27.3 0 40.8 95.9 23.7 95.9 104.9 0 48.5-30.2 82.8-79.6 82.8 -33.4 0-57.8-19.3-74.4-47.2l30.5-29.8c6.4 18.6 23.4 35.3 43.6 35.3 19.3 0 31.1-16.4 31.1-35 0-25-23.1-32.1-42-39.5 -31.1-12.8-53.9-28.6-53.9-66.1C9.3 73.4 39.1 41 79.9 41c21.5 0 51.3 10.6 66.1 27L123.9 100.7z"
						/>
						<path
							class="st1"
							d="M176.4 47.4h47.2v135.4c0 29.8 2.6 71.9 42.7 71.9s42.7-42 42.7-71.9V47.4h47.2v144.7c0 59-25 103.6-89.8 103.6s-89.8-44.6-89.8-103.6V47.4z"
						/>
						<path
							class="st1"
							d="M553 289.4h-47.2V88.5h-48.8V47.4h144.7v41.1H553V289.4z"
						/>
						<path
							class="st1"
							d="M737.6 100.7c-9-12.2-20.5-19.9-36.3-19.9 -15.1 0-29.5 11.6-29.5 27.3 0 40.8 95.9 23.7 95.9 104.9 0 48.5-30.2 82.8-79.6 82.8 -33.4 0-57.8-19.3-74.4-47.2l30.5-29.8c6.4 18.6 23.4 35.3 43.6 35.3 19.3 0 31.1-16.4 31.1-35 0-25-23.1-32.1-42-39.5 -31.1-12.8-53.9-28.6-53.9-66.1 0-40.1 29.8-72.5 70.6-72.5 21.5 0 51.3 10.6 66.1 27L737.6 100.7z"
						/>
					</svg>
				</nuxt-link>
				<template>
					<nav class="hidden sm:block">
						<nuxt-link to="/#referenzen/">Referenzen</nuxt-link>
						<nuxt-link to="/ueber-mich/">Über mich</nuxt-link>
						<nuxt-link to="/leistungen/">Leistungen</nuxt-link>
						<nuxt-link to="/kontakt/">Kontakt</nuxt-link>
					</nav>
					<div class="block sm:hidden">
						<p class="p-4" @click="toggleMenu">Menu</p>
					</div>
				</template>
			</header>
			<nuxt class="py-24 min-h-screen"/>
		</div>
		<footer v-show="!menuOpen">
			<div class="container flex flex-wrap text-center">
				<a class="w-full sm:w-1/4 py-4" href="mailto:office@suits.at">office@suits.at</a>
				<div class="w-full flex-1 py-4">
					<a href="https://github.com/suits-at" title="Github" target="_blank" rel="noopener">
						<font-awesome-icon :icon="['fab', 'github']" size="2x"/>
					</a>
					<a href="https://medium.com/@suits_at" title="Medium" target="_blank" rel="noopener">
						<font-awesome-icon :icon="['fab', 'medium-m']" size="2x"/>
					</a>
					<a href="https://www.xing.com/profile/Sebastian_Ulbel" title="Xing" target="_blank" rel="noopener">
						<font-awesome-icon :icon="['fab', 'xing']" size="2x"/>
					</a>
					<a href="https://www.linkedin.com/in/suits-at/" title="LinkedIn" target="_blank" rel="noopener">
						<font-awesome-icon :icon="['fab', 'linkedin-in']" size="2x"/>
					</a>
					<a href="https://stackoverflow.com/users/4668758/suits-at?tab=profile" title="Stackoverflow" target="_blank" rel="noopener">
						<font-awesome-icon :icon="['fab', 'stack-overflow']" size="2x"/>
					</a>
					<a href="https://twitter.com/suits_at" title="Twitter" target="_blank" rel="noopener">
						<font-awesome-icon :icon="['fab', 'twitter']" size="2x"/>
					</a>
				</div>
				<a class="w-full sm:w-1/4 py-4" href="/impressum/">Impressum</a>
			</div>
		</footer>
	</div>
</template>
<script lang="ts">
  import Vue from 'vue';

  export default Vue.extend({
    components: {},
    data() {
      return {
        menuOpen: false
      };
    },
    methods: {
      toggleMenu() {
        this.menuOpen = !this.menuOpen;
      }
    }
  });
</script>
