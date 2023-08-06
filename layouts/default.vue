<template>
  <div>
    <header class="w-full fixed z-10 top-0">
      <div class="flex justify-between container pb-2 pt-2 sm:pt-4">
        <nuxt-link to="/" class="p-0" title="Startseite" alt="Startseite">
          <svg
            class="inline"
            xmlns="http://www.w3.org/2000/svg"
            width="134"
            height="52"
            viewBox="0 0 767.7 295.8"
          >
            <title>SUITS Logo</title>
            <rect
              x="-1776.1"
              y="-1165.8"
              class="st1"
              width="3.4"
              height="1.7"
            />
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
        <div>
          <nav class="hidden lg:block main-nav">
            <nuxt-link to="/#referenzen/">Referenzen</nuxt-link>
            <nuxt-link to="/ueber-mich/">Über mich</nuxt-link>
            <nuxt-link to="/leistungen/">Leistungen</nuxt-link>
            <nuxt-link to="/kontakt/">Kontakt</nuxt-link>
          </nav>
          <button
            class="hamburger hamburger--spin"
            :class="{ 'is-active': menuOpen }"
            type="button"
            aria-label="Menu"
            role="button"
            @click="toggleMenu"
          >
            <span class="hamburger-box">
              <span class="hamburger-inner"></span>
            </span>
          </button>
        </div>
      </div>
    </header>
    <nav
      v-show="menuOpen"
      class="mt-16 fixed h-full w-full bg-white z-10"
      @click="menuOpen = false"
    >
      <ul class="list-none text-center pl-0" style="padding-top: 30%">
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
        <li>
          <nuxt-link to="/impressum/">Impressum</nuxt-link>
        </li>
      </ul>
    </nav>
    <main>
      <nuxt class="container pt-24 sm:pt-32 pb-12 min-h-screen" />
    </main>
    <footer>
      <!-- these classes need to be on a separate div -->
      <div class="container flex flex-wrap text-center">
        <p class="w-full sm:w-1/4 my-4">
          <a href="mailto:office@suits.at">office@suits.at</a>
        </p>
        <div class="w-full flex-1 mt-4">
          <a
            href="https://github.com/suits-at"
            title="Github"
            target="_blank"
            rel="noopener"
          >
            <font-awesome-icon :icon="['fab', 'github']" size="2x" />
          </a>
          <a
            href="https://www.linkedin.com/in/suits-at/"
            title="LinkedIn"
            target="_blank"
            rel="noopener"
          >
            <font-awesome-icon :icon="['fab', 'linkedin-in']" size="2x" />
          </a>
          <a
            href="https://twitter.com/suits_at"
            title="Twitter"
            target="_blank"
            rel="noopener"
          >
            <font-awesome-icon :icon="['fab', 'twitter']" size="2x" />
          </a>
        </div>
        <p class="w-full sm:w-1/4 my-4">
          <a href="/impressum/">Impressum</a>
        </p>
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
      menuOpen: false,
    };
  },
  fetch() {
    this.menuOpen = false;
  },
  watch: {
    '$route.query': '$fetch',
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
  },
});
</script>
<style lang="scss" scoped>
nav {
  li {
    margin-bottom: 1.2rem;
    a {
      position: relative;
      font-size: 1.7rem;
      color: rgba(48, 48, 48, 0.4);

      &.nuxt-link-active {
        color: #646464;
      }

      &:after {
        position: absolute;
        top: 2rem;
        left: 0;
        width: 100%;
        content: '';
        height: 2px;
        background-color: rgba(0, 0, 0, 0);
        transition: all 0.15s ease;
      }

      &.nuxt-link-active:after {
        background-color: #49a3df;
      }
    }
  }
}

//@link https://github.com/jonsuh/hamburgers
.hamburger {
  outline: none;
  padding: 9px 16px;
  display: inline-block;
  cursor: pointer;
  transition-property: opacity, filter;
  transition-duration: 0.15s;
  transition-timing-function: linear;
  font: inherit;
  color: inherit;
  text-transform: none;
  background-color: transparent;
  border: 0;
  margin-right: -16px;
  overflow: visible;
  @media all and (min-width: 1024px) {
    display: none;
  }
}
.hamburger.is-active .hamburger-inner,
.hamburger.is-active .hamburger-inner::before,
.hamburger.is-active .hamburger-inner::after {
  background-color: #49a3df;
}

.hamburger-box {
  width: 40px;
  height: 24px;
  display: inline-block;
  position: relative;
}

.hamburger-inner {
  display: block;
  top: 50%;
  margin-top: -2px;
}
.hamburger-inner,
.hamburger-inner::before,
.hamburger-inner::after {
  width: 40px;
  height: 4px;
  background-color: #646464;
  border-radius: 4px;
  position: absolute;
  transition-property: transform;
  transition-duration: 0.15s;
  transition-timing-function: ease;
}
.hamburger-inner::before,
.hamburger-inner::after {
  content: '';
  display: block;
}
.hamburger-inner::before {
  top: -11px;
}
.hamburger-inner::after {
  bottom: -11px;
}
//Collapse - not used ATM
.hamburger--collapse .hamburger-inner {
  top: auto;
  bottom: 0;
  transition-duration: 0.13s;
  transition-delay: 0.13s;
  transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
}
.hamburger--collapse .hamburger-inner::after {
  top: -20px;
  transition: top 0.2s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1),
    opacity 0.1s linear;
}
.hamburger--collapse .hamburger-inner::before {
  transition: top 0.12s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1),
    transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19);
}

.hamburger--collapse.is-active .hamburger-inner {
  transform: translate3d(0, -10px, 0) rotate(-45deg);
  transition-delay: 0.22s;
  transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
}
.hamburger--collapse.is-active .hamburger-inner::after {
  top: 0;
  opacity: 0;
  transition: top 0.2s cubic-bezier(0.33333, 0, 0.66667, 0.33333),
    opacity 0.1s 0.22s linear;
}
.hamburger--collapse.is-active .hamburger-inner::before {
  top: 0;
  transform: rotate(-90deg);
  transition: top 0.1s 0.16s cubic-bezier(0.33333, 0, 0.66667, 0.33333),
    transform 0.13s 0.25s cubic-bezier(0.215, 0.61, 0.355, 1);
}
//Spin
.hamburger--spin .hamburger-inner {
  transition-duration: 0.22s;
  transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
}
.hamburger--spin .hamburger-inner::before {
  transition: top 0.1s 0.25s ease-in, opacity 0.1s ease-in;
}
.hamburger--spin .hamburger-inner::after {
  transition: bottom 0.1s 0.25s ease-in,
    transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
}
.hamburger--spin.is-active .hamburger-inner {
  transform: rotate(225deg);
  transition-delay: 0.12s;
  transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
}
.hamburger--spin.is-active .hamburger-inner::before {
  top: 0;
  opacity: 0;
  transition: top 0.1s ease-out, opacity 0.1s 0.12s ease-out;
}
.hamburger--spin.is-active .hamburger-inner::after {
  bottom: 0;
  transform: rotate(-90deg);
  transition: bottom 0.1s ease-out,
    transform 0.22s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1);
}
</style>
