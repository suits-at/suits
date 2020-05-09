<template>
	<div>
		<div class="container">
			<header
				class="flex flex-wrap container justify-between fixed z-10 py-4 top-0"
			>
				<nuxt-link to="/" class="p-0">
					<svg
						class="inline"
						xmlns="http://www.w3.org/2000/svg"
						width="134"
						height="52"
						viewBox="0 0 767.7 295.8"
					>
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
					<div class="hidden sm:block">
						<nuxt-link to="/pages/ueber-mich">Über mich</nuxt-link>
						<nuxt-link to="/services">Leistungen</nuxt-link>
						<nuxt-link to="/pages/kontakt">Kontakt</nuxt-link>
						<nuxt-link to="/pages/impressum">Impressum</nuxt-link>
					</div>
					<div class="block sm:hidden">
						<p>Menu</p>
					</div>
				</template>
			</header>
			<nuxt class="pt-24 min-h-screen"/>
		</div>
		<footer>
			<div class="container flex flex-wrap justify-between">
				<div><a href="mailto:office@suits.at">office@suits.at</a></div>
				<div>
					<font-awesome-icon :icon="['fab', 'github']" size="2x"/>
					<font-awesome-icon :icon="['fab', 'medium-m']" size="2x"/>
					<font-awesome-icon :icon="['fab', 'xing']" size="2x"/>
					<font-awesome-icon :icon="['fab', 'linkedin-in']" size="2x"/>
					<font-awesome-icon :icon="['fab', 'stack-overflow']" size="2x"/>
					<font-awesome-icon :icon="['fab', 'twitter']" size="2x"/>
				</div>
				<div>
					<a href="/impressum">Impressum</a>
				</div>
			</div>
		</footer>
	</div>
</template>
<style>
	.min-h-screen {
		min-height: calc((100vh) - 4.1rem);
	}

	html {
		box-sizing: border-box;
		font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
		Roboto, 'Helvetica Neue', Arial, sans-serif;
		font-size: 16px;
		-moz-osx-font-smoothing: grayscale;
		-webkit-font-smoothing: antialiased;
		/*-ms-text-size-adjust: 100%;*/
		/*-webkit-text-size-adjust: 100%;*/
		word-spacing: 1px;
	}

	*,
	*::before,
	*::after {
		box-sizing: border-box;
		margin: 0;
	}

	header {
		background: #fefefe;
		opacity: 0.95;
	}

	header a {
		padding: 1rem;
		font-size: 22px;
	}

	p, li, a {
		font-size: 20px;
	}

	p {
		margin-bottom: 1.5rem;
	}

	ul {
		list-style: disc;
		padding-left: 1.5rem;
	}

	h1 {
		color: #35495e;
		font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
		'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
		font-size: 64px;
		font-weight: 300;
		letter-spacing: 1px;
		margin-bottom: 1.5rem;
	}

	h2 {
		color: #35495e;
		font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
		'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
		font-size: 40px;
		font-weight: 200;
		letter-spacing: 1px;
	}

	footer {
		width: 100%;
		padding: 1rem;
		background-color: #2e2e2e;
		color: #646464;
	}

	footer a, footer a:active, footer a:focus {
		color: #646464;
	}

	footer .svg-inline--fa {
		margin-left: 1rem;
		margin-right: 1rem;
	}
</style>
