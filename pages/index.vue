<template>
  <div>
    <div class="main">
      <logo />
      <div class="more" />
    </div>
    <div>
      <h2 id="referenzen">
        //Referenzen
      </h2>
      <ul>
        <li v-for="reference in references" :key="reference.title">
          <nuxt-link :to="reference._path">
            {{ reference.title }}
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Logo from '~/components/Logo.vue';

export default Vue.extend({
  components: {
    Logo
  },
  data() {
    // Using webpacks context to gather all files from a folder
    const referencesCTX = require.context(
      '~/content/references/',
      false,
      /\.json$/
    );

    const references = referencesCTX.keys().map((key: string) => ({
      ...referencesCTX(key),
      _path: `/references/${key.replace('.json', '').replace('./', '')}`
    }));

    return { references };
  },
  mounted(): void {
    // @ts-ignore
    if (window.netlifyIdentity) {
      // @ts-ignore
      window.netlifyIdentity.on('init', (user: any) => {
        if (!user) {
          // @ts-ignore
          window.netlifyIdentity.on('login', () => {
            document.location.href = '/admin/';
          });
        }
      });
    }
  },
  head() {
    return {
      script: [
        {
          src: 'https://identity.netlify.com/v1/netlify-identity-widget.js',
          defer: true
        }
      ]
    };
  }
});
</script>

<style>
/*Sample `apply` at-rules with Tailwind CSS*/
.main {
	@apply min-h-screen flex justify-center items-center text-center mx-auto;
}

.more {
	border: inset 3rem;
	border-bottom-width: 0;
	border-color: #49a3df transparent transparent;
	border-top-style: solid;
	content: '';
	cursor: pointer;
	display: block;
	/*height: 0;*/
	/*left: 50%;*/
	/*position: absolute;*/
	/*transform: translateX(-50%);*/
	/*width: 0;*/
}
/*.container {
  align-items: center;
  !*min-height: 100vh;*!
  display: flex;
  justify-content: center;
  margin: 0 auto;
  text-align: center;
}*/

/*.subtitle {
	color: #526488;
	font-size: 42px;
	font-weight: 300;
	padding-bottom: 15px;
	word-spacing: 5px;
}*/

.links {
	padding-top: 15px;
}
</style>
