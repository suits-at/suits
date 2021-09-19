<template>
  <div>
    <section
      class="
        min-h-screen
        flex
        justify-between
        flex-col
        items-center
        text-center
        mx-auto
      "
    >
      <div class="flex-1 flex flex-col justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          class="max-w-3xl mb-4"
          viewBox="0 0 767.7 295.8"
        >
          <title>SUITS Logo</title>
          <rect x="-1776.1" y="-1165.8" class="st1" width="3.4" height="1.7" />
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
        <h2 class="fit-text">Sebastian Ulbel IT-Solutions</h2>
        <!--      <span class="smaller">...weil nicht nur Anzüge passen müssen!</span>-->
      </div>
      <nuxt-link
        v-scroll-to="'#referenzen'"
        to="#"
        class="more"
        title="Referenzen"
      />
      <div id="referenzen" class="mb-16" />
    </section>
    <section>
      <h1>//Referenzen</h1>
      <div class="flex flex-wrap override-link-color">
        <div
          v-for="reference in references"
          :key="reference.title"
          class="
            w-full
            md:w-1/2
            lg:w-1/3
            mb-16
            items-center
            text-center
            self-center
          "
        >
          <nuxt-link :to="reference._path" class="">
            <h2 class="smaller">{{ reference.title }}</h2>
            <div class="flex w-full justify-center">
              <img
                :src="reference.thumbnail"
                alt="reference.title"
                width="300"
              />
            </div>
          </nuxt-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import VueScrollTo from 'vue-scrollto';

Vue.use(VueScrollTo);

export default Vue.extend({
  components: {},
  data() {
    // Using webpacks context to gather all files from a folder
    const referencesCTX = require.context(
      '~/content/references/',
      false,
      /\.json$/
    );

    const references = referencesCTX.keys().map((key: string) => ({
      ...referencesCTX(key),
      _path: `/references/${key.replace('.json', '').replace('./', '')}`,
    }));

    references.sort((a, b) => parseFloat(b.date) - parseFloat(a.date));

    return { references };
  },
  fetch() {
    if (!this.$nuxt.$isServer) {
      if (this.$route.fullPath === '/#referenzen/') {
        Vue.nextTick(() => {
          this.$scrollTo('#referenzen');
        });
      }
    }
  },
  head() {
    return {
      script: [
        {
          src: 'https://identity.netlify.com/v1/netlify-identity-widget.js',
          defer: true,
        },
      ],
    };
  },
  watch: {
    '$route.query': '$fetch',
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
});
</script>

<style lang="scss" scoped>
.more {
  border: inset 3rem;
  border-bottom-width: 0;
  border-color: #49a3df transparent transparent;
  border-top-style: solid;
  cursor: pointer;
}
.fit-text {
  font-size: 18px;
  @media all and (min-width: 340px) {
    font-size: 22px;
  }
  @media all and (min-width: 450px) {
    font-size: 40px;
  }
}
</style>
