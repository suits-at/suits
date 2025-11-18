import Vue from 'vue';
import { library, config } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  faGithub,
  faTwitter,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';
// Note: Switched to free solid icons as FontAwesome Pro (pro-light-svg-icons) is not available
import { fas } from '@fortawesome/free-solid-svg-icons';

// This is important, we are going to let Nuxt.js worry about the CSS
config.autoAddCss = false;

// Add all solid icons and brand icons
library.add(fas);
library.add(faGithub);
library.add(faTwitter);
library.add(faLinkedinIn);

// Register the component globally
Vue.component('FontAwesomeIcon', FontAwesomeIcon);
