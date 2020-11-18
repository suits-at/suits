import Vue from 'vue';
import { library, config } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  faGithub,
  faMediumM,
  faXing,
  faTwitter,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';
import {
  faMapMarkerAlt,
  faEnvelope,
  faUser,
  faCode,
  faTools,
  faClipboardCheck,
  faDatabase,
  faShieldCheck,
  faSlidersH,
  faAnalytics,
  faTimes,
  faBars,
} from '../pro-light-svg-icons';

// This is important, we are going to let Nuxt.js worry about the CSS
config.autoAddCss = false;

// You can add your icons directly in this plugin. See other examples for how you
// can add other styles or just individual icons.
// library.add(fas)
library.add(faGithub);
library.add(faMediumM);
library.add(faXing);
library.add(faTwitter);
library.add(faLinkedinIn);
library.add(faMapMarkerAlt);
library.add(faEnvelope);
library.add(faUser);
library.add(faCode);
library.add(faTools);
library.add(faClipboardCheck);
library.add(faDatabase);
library.add(faShieldCheck);
library.add(faSlidersH);
library.add(faAnalytics);
library.add(faTimes);
library.add(faBars);

// Register the component globally
Vue.component('font-awesome-icon', FontAwesomeIcon);
